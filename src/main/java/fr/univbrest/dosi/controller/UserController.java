package fr.univbrest.dosi.controller;


import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import fr.univbrest.dosi.bean.User;
import fr.univbrest.dosi.buisness.UserService;
import fr.univbrest.dosi.exception.SpiException;

@RestController
public class UserController {

	@Autowired
	private UserService service;

	@RequestMapping(value = "/auth", method = RequestMethod.POST, headers = "Accept=application/json")
	public void authentifier(final HttpServletRequest request,@RequestBody final User user) {
		final User users = service.authentifier(user.getUserName(),user.getPassword());
		if (users != null) {
			request.getSession().setAttribute("user", users);
		} else {
			request.getSession().removeAttribute("user");
			throw new SpiException("impossible de s'authentifier");
		}
	}
	
	@RequestMapping(value = "/user")
	public User users(final HttpServletRequest request) {
		final User user = (User) request.getSession().getAttribute("user");
		return user;
	}

	@RequestMapping(value = "/deconnexion",method = RequestMethod.GET)
	public void authentifier(final HttpServletRequest request) {
		request.getSession().removeAttribute("user");
	}
	
	

}
