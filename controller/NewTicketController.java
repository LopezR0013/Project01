package com.revature.controller;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.sql.Timestamp;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.Part;
import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

import com.revature.dao.ErsUsersDaoImpls;
import com.revature.model.ErsReimbursement;
import com.revature.model.ErsUsers;

public class NewTicketController {
		
public static String newTicket(HttpServletRequest request) throws IOException, ServletException, SerialException, SQLException {
		
		ErsUsers user1 = (ErsUsers) request.getSession().getAttribute("User1");
		
		int newTicketid = 0;
		int AuthorID = user1.getErsUserId();
		int newAmount =Integer.parseInt(request.getParameter("Amount"));
		
		
		String pic = request.getParameter("inputGroupFile01");
		
		byte[] buff =  pic.getBytes();
		Blob blob = new SerialBlob(buff);
		
		
		
		
		
		
		ErsReimbursement newticket = new ErsReimbursement();
		
		//id--
		//amount--
		//submitted
		//resolved
		//description
		//receipt
		//Author--
		//Resolver
		//status
		//typed
		
		
		
		return "/html/AddTicket.html";
	}
}
