const mongoose = require('mongoose');
const {Campaigns}=require('../../models/campaignModel')

const storeCampaign=async(req,res)=>{
    const {title,description,niche,budget,imageUrl,visibility,startDate,endDate,campaignFile}=req.body;

    console.log("title:",title);
    console.log("description:",description);
    console.log("niche:",niche);
    console.log("budget:",budget);
    console.log("visibilty:",visibility);
    console.log("startDate:",startDate);
    console.log("endDate:",endDate);
    console.log("campaignFile:",campaignFile);
    console.log("imageUrl:",imageUrl);
    

    const newCampaign=new Campaigns({name:title,description,niche,budget,visibility,startDate,endDate,imageUrl:imageUrl});
    const newaddedCampaign=await newCampaign.save();
    res.json(newaddedCampaign);
    console.log("Campaign Added to DB !!!");
};

module.exports={storeCampaign};