package fr.univbrest.dosi.buisness;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import fr.univbrest.dosi.bean.User;


@Service
public class UserService {
	
	private final Map<String, User> mapBouchonUser;
	
	public UserService(){
		this.mapBouchonUser = new HashMap<String,User>();
		this.mapBouchonUser.put("spiAdmin",new User("spiAdmin","spiAdmin"));
		this.mapBouchonUser.put("spiVisit",new User("spiVisit","spiVisit"));
		this.mapBouchonUser.put("spiProf",new User("spiProf","spiProf"));
	}
	
	public User authentifier(final String login, final String password){
		final User user = this.mapBouchonUser.get(login);
		if(user != null && user.getPassword().equals(password)){
			return user;
		}
		return null;
	}

}
