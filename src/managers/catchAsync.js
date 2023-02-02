const catchAsync = fn =>{
    return ()=>{
        fn().catch(err => console.log(err))
    };
}

export default catchAsync