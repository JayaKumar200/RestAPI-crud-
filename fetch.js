const express= require('express');

const db = require('../configuration/db.js');

const getAll = async()=>{
	try{
	  const data = await db.query('select * from kumar')
	  return data;
	}catch(err){
		throw err
	}


}
const createData = async(id,name,roll,branch)=>{
	try{
		const create = await db.query('insert into kumar (id,name,roll,branch) values (?,?,?,?)',[id,name,roll,branch])
	    return create
	}
     catch(error){
	console.log('errorfetching users:' , error.message)
}
}

const updateData = async(id,branch)=>{
	try{
		const update = await db.query('update kumar set branch = ? where id =? ',[id,branch])
	    return update;
	}
     catch(error){
	console.log('errorfetching users:' , error.message)
}
}
const deleteId = async(id)=>{
    

	try{
		const DeleteId = await db.query('delete from kumar where id = ? ',[id])
	    return DeleteId;
	}
     catch(error){
	console.log('errorfetching users:' , error.message)
}
}


module.exports = {
	getAll,
	createData,
	updateData,
	deleteId

	
}
