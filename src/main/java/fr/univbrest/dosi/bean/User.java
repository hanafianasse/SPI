package fr.univbrest.dosi.bean;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class User {

	private String userName;
	private String password;
	private final List<String> roles;

	public User() {
		super();
		roles = new ArrayList<String>();
	}

	public User(String userName, String password) {
		super();
		this.roles = new ArrayList<String>();
		this.userName = userName;
		this.password = password;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<String> getRoles() {
		return roles;
	}

}
