let srach=async(query)=>{

    
    
    let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${query}`;
    
    let res=await fetch(url);
    
    let data=await res.json();
    
    return data.articles;
    // console.log("data:",data);
    
    }
    
    // author: "Aanchal Magazine"
    // content: "The Centre and the states are at loggerheads over taxes and duties on petrol and diesel. While the Centre feels the states are not reducing VAT in line with the Centre’s cut in excise duty, the state… [+6925 chars]"
    // description: "The Prime Minister has noted that certain states have not reduced VAT; states have attributed rising fuel prices to central taxes. How is fuel taxed, and how are collections shared between the Centre and states?"
    // publishedAt: "2022-04-29T06:02:45Z"
    // source: {id: null, name: 'The Indian Express'}
    // title: "Explained: States vs Centre on fuel taxes petrol diesel price hike - The Indian Express"
    // url: "https://indianexpress.com/article/explained/states-vs-centre-on-fuel-taxes-petrol-diesel-price-hike-7892286/"
    // urlToImage: "https://images.indianexpress.com/2022/04/fuel-price.jpeg"
    
    let append=(data,result)=>{
    
        
    
        data.forEach(({urlToImage,title,author})=>{
    
            let box=document.createElement('div');
    
            let img=document.createElement('img');
            img.src=urlToImage;
    
            let t=document.createElement('h3');
            t.innerText=title;
    
            let a=document.createElement('h3');
            a.innerText=author;
    
            box.append(img,t,a);
            result.append(box);
    
    
    
        })
    
        
    }

    export {srach,append};