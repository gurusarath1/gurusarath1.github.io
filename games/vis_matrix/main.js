let input_matrix = [1,0,0,1]

let in_points_x = [-1,0,1, -1,0,1, -1,0,1]
let in_points_y = [1,1,1,  0,0,0,  -1,-1,-1]

let out_points_x = [-1,0,1, -1,0,1, -1,0,1]
let out_points_y = [1,1,1,  0,0,0,  -1,-1,-1]

let eigen_vec_x = [0,0]
let eigen_vec_y = [0,0]


let apply_transform = function() {

  // Transformation ---------
  let a00 = Number(document.getElementsByName('a00')[0].value)
  let a01 = Number(document.getElementsByName('a01')[0].value)
  let a10 = Number(document.getElementsByName('a10')[0].value)
  let a11 = Number(document.getElementsByName('a11')[0].value)

  document.getElementsByName('in_ps')[0].value = ''
  document.getElementsByName('out_ps')[0].value = ''
  for(let i=0; i<in_points_x.length; i++) {
    out_points_x[i] = a00*in_points_x[i] + a01*in_points_y[i]
    out_points_y[i] = a10*in_points_x[i] + a11*in_points_y[i]
    in_ps_text = '(' + in_points_x[i] + ', ' + in_points_y[i] + '), '
    out_ps_text = '(' + out_points_x[i] + ', ' + out_points_y[i] + '), '
    document.getElementsByName('in_ps')[0].value += in_ps_text
    document.getElementsByName('out_ps')[0].value += out_ps_text
  }

  let a = 1
  let b = -(a00 +a11)
  let c = (a00*a11) - (a01*a10)
  let d = b*b - (4*a*c)
  let lambda1 = 0
  let lambda2 = 0

  if(d >= 0) {
    lambda1 = (-b + Math.sqrt(d)) / (2*a)
    lambda2 = (-b - Math.sqrt(d)) / (2*a)
    document.getElementsByName('lambda1')[0].value = lambda1
    document.getElementsByName('lambda2')[0].value = lambda2
  } else {
    lambda1 = (-b + Math.sqrt(-d)) / (2*a)
    lambda2 = (-b - Math.sqrt(-d)) / (2*a)
    document.getElementsByName('lambda1')[0].value = lambda1 + 'i'
    document.getElementsByName('lambda2')[0].value = lambda2 + 'i'
  }




  // Plotting ---------------
  var trace1 = {
    x: out_points_x,
    y: out_points_y,
    mode: 'markers',
    type: 'scatter',
    marker: {size: 6, color: 'red' },
  };


  var layout = {
    autosize: false,
    width: 500,
    height: 500,
    xaxis: {
      range: [-10, 10]
    },
    yaxis: {
      range: [-10, 10]
    },
    title:'Effect of matrix Transformation'
  };

  let data = [trace1]

  Plotly.newPlot('transformation-graph', data, layout);
}

apply_transform()


let run_stub = function() {
  document.getElementById("run-button").disabled = true; 
  apply_transform()
  document.getElementById("run-button").disabled = false; 
}


document.getElementById("run-button").addEventListener("click", run_stub);