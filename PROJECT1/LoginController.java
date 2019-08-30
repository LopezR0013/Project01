package com.revature.controller;

import javax.servlet.http.HttpServletRequest;

import com.revature.dao.ErsUsersDaoImpls;
import com.revature.model.ErsUsers;



public class LoginController {
	
public static String Login(HttpServletRequest request) {
		
		String username = request.getParameter("userName");
		String password = request.getParameter("userPassword");
		
		ErsUsersDaoImpls ersUsersDaoImpls = new ErsUsersDaoImpls();
		ErsUsers user1 = new ErsUsers();
		
		
		user1 = ersUsersDaoImpls.selectErsUserbyUsername(username);
		//System.out.println(user.getErsUserName());
		//we are retrieving an existing record by the pet's name
		//that the user provided on the login page and storing it into 
		//a pet object
		
		if(username.equals(user1.getErsUserName()) && password.equals(user1.getErsPassword())) {
			//we are setting the session to the current logged in pet
			request.getSession().setAttribute("User1", user1);
			
			return "/html/Home.html";
		}
		
		return "/html/Login.html";		
		
	}
}
