import category from '../models/Category';
const store = async(req, res) => {
    try{

    
    const {title} = req.body.title;

    const newCategory = new category({
        title:title,
    });
    const Category = await newCategory.save();
    if(!Category){throw{code : 500, message : 'Store category failed'}}
    return res.status(200).json({
        status : true,
        Category
    });
}catch(err){
    return res.status(err.code).json({
        status : false,
        message:err.message
    });

}
}