function streamToPlainJson(res){
  return res.json().then(json => ({json, res}));
}
function rejectIfNotOk({json,res}){
  if (!res.ok) {
    return Promise.reject({...json,status:res.status});
  }
  return json;
}

export default function () {

let url = "http://ec2-34-243-153-154.eu-west-1.compute.amazonaws.com:5000/api/cakes";
  /*
  const request = new Request(`${url}/cakes`, {
      method: 'GET'
    });

    return fetch(request)
      .then(res=>console.log(res))
	.catch(err => console.log(err));
     //.then(rejectIfNotOk);
*/
var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",url,false);
    Httpreq.send(null);
    return JSON.parse(Httpreq.responseText);

/*
return [{
		"name": "THE WIZARD OF OZ (1939)",
		"detail": "An absolute masterpiece whose groundbreaking visuals and deft storytelling are still every bit as resonant, The Wizard of Oz is a must-see film for young and old.",
	},{
		"name": "CITIZEN KANE (1941)",
		"detail": "Orson Welles's epic tale of a publishing tycoon's rise and fall is entertaining, poignant, and inventive in its storytelling, earning its reputation as a landmark achievement in film.",
	},{
		"name": "MAD MAX: FURY ROAD (2015)",
		"detail": "With exhilarating action and a surprising amount of narrative heft, Mad Max: Fury Road brings George Miller's post-apocalyptic franchise roaring vigorously back to life",
	},{
		"name": "THE GODFATHER (1972)",
		"detail": "One of Hollywood's greatest critical and commercial successes, The Godfather gets everything right; not only did the movie transcend expectations, it established new benchmarks for American cinema.",
	}];
*/
}
