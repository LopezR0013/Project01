package com.revature.dao;


import com.revature.model.ErsUsers;


public interface ErsUsersDao {
	
	//CREATE
	public int insertErsUser( ErsUsers newuser);
	//READ
		
	public ErsUsers selectErsUserbyId(int userId);
	
	//UPDATE
		
	public int updateUsers(ErsUsers p);
	
	//DELETE
	public int deleteErsUsersById(int p);
}
