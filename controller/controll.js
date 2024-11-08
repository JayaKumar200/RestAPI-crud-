const express = require ('express');

const model = require('../models/fetch.js')

const getControll = async(req,res)=>{
	try{
		const getcon = await model.getAll();
		res.json({getcon})
	}catch{
             res.status(404)
	}
}

const createControll = async(req,res)=>{
	const {id,name,roll,branch} = req.body;
	try{
		 
		const createcon = await model.createData({id,name,roll,branch});
		res.json({createcon})
	}catch{
             res.status(404)
	}
}
const updateControll = async(req,res)=>{
	const branch = req.body;
		 const id = req.params;
	try{
		const updatecon = await model.updateData(id,branch);
		res.json({"message" : "done!"})
	}catch{
             res.status(404)
	}
}
const deleteControll = async(req,res)=>{
	 const id = req.params;
	try{
		const deletecon = await model.deleteId(id);
		res.json({"message" : "done!"})
	}catch{
             res.status(404)
	}
}
module.exports ={
	getControll,
	createControll,
	updateControll,
	deleteControll
}