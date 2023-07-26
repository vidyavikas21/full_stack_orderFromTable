const mongoose=require("mongoose");
const order_schema=new mongoose.Schema({
    customer_details:{
        name:{
            type:String,
            required:true
        },
        table:{
            type:String,
            required:true
        },
        recomendations:{
            type:String,
        },
    },
    tiffin_details:{
        idly:{
            type:String,
            
        },
        dosa:{
            type:String,
            
        },
        chapathi:{
            type:String,
            
        },
        poori:{
            type:String,
            
        },
        upma:{
            type:String,
            
        },
        poha:{
            type:String,
            
        },
        uggani:{
            type:String,
            
        },
        pulihora:{
            type:String,
            
        },
        parota:{
            type:String,
            
        },
        vada:{
            type:String,
            
        },
        pongal:{
            type:String,
            
        },
        uthappam:{
            type:String,
            
        }
    },
    lunch_details:{
        meals:{
            type:String,
            
        },
        chicken_biryani:{
            type:String,
            
        },
        fish_curry:{ 
            type:String,
            
        },
        mutton_biryani:{ 
            type:String,
            
        },
        veg_biryani:{ 
            type:String,
           
        },
        egg_biryani:{
            type:String,
            
        },
        egg_curry:{ 
            type:String,
           
        },
        curd_rice:{
            type:String,
            
        },
    },
    drinks_details:{
        water:{
            type:String,
            
        },
        milk:{
            type:String,
            
        },
        tea:{ 
            type:String,
            
        },
        coffee:{ 
            type:String,
            
        },
        Apple:{ 
            type:String,
           
        },
        melon:{
            type:String,
            
        },
        grape:{ 
            type:String,
           
        },
        mango:{
            type:String,
            
        },
    },
});

module.exports=mongoose.model("orderschema",order_schema)