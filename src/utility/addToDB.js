const getFormStroge = () =>{
    const getBook = localStorage.getItem('readList')
    if(getBook){
        const bookData = JSON.parse(getBook)
        return bookData;
    }
    else{
        return [];
    }
}

const storeData = (id)=>{
    const getToStore = getFormStroge()
    if(getToStore.includes(id)){
        // alert("Book Already exsist")
        console.log("addad")
    }
    else{
        console.log(getToStore)
        getToStore.push(id)
        console.log(getToStore)
        const data = JSON.stringify(getToStore);
        localStorage.setItem("readList",data)
        
    }
}
export {storeData,getFormStroge}