package com.capg.dao;

import java.util.List;

import com.capg.model.Bank;
import com.capg.model.Transaction;

public interface BankDao {
	public abstract Bank createAccount(Bank bank);

	public abstract Bank showBalance(Long accNo);

	public abstract Bank deposite(Long accNo, Double depositeAmount);

	public abstract Bank getAccount(Long accNo);

	public abstract Bank withdraw(Long accNo, Double withdrawAmount);

	public abstract List<Transaction> printTransactions(Long accNo);

	public abstract Bank fundTransfer(Long saccNo, Long raccNo, Double transferAmount);
}
