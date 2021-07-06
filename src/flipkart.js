const num = "FMPC1164177595";
// while(true){
fetch(`https://ekart-api.vercel.app/check?id=${num}`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    // if( data.something === something){
    //     console.log(something)
    //     break
    // }
  })
  .catch(err => console.log(err));
// }
