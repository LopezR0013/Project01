package com.revature.dao;

import com.revature.model.ErsReimbursement;




public interface ErsReimbursementDao {
	
	
	//CREATE
	public int insertErsReimbursement(ErsReimbursement newreimbursement);
	//READ
	public ErsReimbursement selectErsReimbursementbyId(int reimbId);
	//UPDATE
	public int updateReimbursement(ErsReimbursement p);
	//DELETE
	public int deleteById(int p);
}
