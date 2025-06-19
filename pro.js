const dateandtime = document.querySelector('.dateandtime')
const location_name = document.querySelector('.location');
const temperature = document.querySelector('.temp');
const condition_name = document.querySelector('.condition');
const form = document.querySelector('.form');
const search_f = document.querySelector('.search_area');


form.addEventListener('submit', Searchfunction)




let target = 'mumbai'
const functionDetails= async(targetlocation) =>
{
    let url = `http://api.weatherapi.com/v1/current.json?key=975a8517d3ec4e329bb71857251506&q=${targetlocation}&aqi=no`
    let res = await fetch(url)
    const data = await res.json()
    console.log(data)

    let time=data.location.localtime
    let temp=data.current.temp_c
    let location=data.location.name
    let condition=data.current.condition.text

    console.log(time)
    console.log(temp)
    console.log(location)
    console.log(condition)

    update(time,temp,location,condition)

}

function update(time,temp,location,condition)
{
    temperature.innerText= temp
    condition_name.innerText=condition
    location_name.innerText=location
    dateandtime.innerText=time

}

function Searchfunction(event) {
    event.preventDefault();
    target = search_f.value.trim();
    functionDetails(target)
}
