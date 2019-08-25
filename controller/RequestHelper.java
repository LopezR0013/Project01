package com.revature.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.revature.controller.HomeController;
import com.revature.controller.LoginController;
import com.revature.controller.ProfileController;
import com.revature.controller.RegisterController;

public class RequestHelper {
	
public static String process(HttpServletRequest request, HttpServletResponse response) {
		
		switch(request.getRequestURI()) {
		//depending on the URI that comes with the request, this 
		//method chooses the corresponding controller and calls
		//the method within that controller
		
		case "/PROJECT1/html/Login.do":
			return LoginController.Login(request);
		
		case "/PROJECT1/html/Home.do":
			return HomeController.Home(request, response);
			
		case "/PROJECT1/html/haha.do":
			return RegisterController.Register(request);
			
		case "/PROJECT1/html/Update.do":
			return ProfileController.showalltickets(request, response);
		case "/PROJECT1/html/ViewPast.do":
			return ViewPastController.showalltickets(request, response);
			
//		case "/PROJECT1/html/ViewPast.do":
//			return NewTicketController.showalltickets(request, response);
		default:
			return "/html/Login.html";
		}
	}
}
