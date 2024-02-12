let in_dist_samples = []
let xbins = {
    end: 5, 
    size: 0.05, 
    start: -5
  }
let num_data = 2000
let sample_size = 1


function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
}

fill_samples_field = function(num_samples)
{
  
  let in_distribution = document.getElementsByName('in-dist')[0].value
	let dist_param_1 = document.getElementsByName('dist_param_1')[0].value
  let dist_param_2 = document.getElementsByName('dist_param_2')[0].value

  if(in_distribution != 'User') document.getElementsByName('in_samples')[0].value = ''

  for(let i=0; i<num_samples; i++) {
    let x = 0
    if(in_distribution == 'Normal') document.getElementsByName('in_samples')[0].value += String(jStat.normal.sample(dist_param_1, dist_param_2))
    else if(in_distribution == 'Exponential') document.getElementsByName('in_samples')[0].value += String(jStat.exponential.sample(dist_param_1))
    else if(in_distribution == 'Uniform') document.getElementsByName('in_samples')[0].value += String(jStat.uniform.sample(dist_param_1, dist_param_2))
    else break
    if(i < num_samples-1) document.getElementsByName('in_samples')[0].value += ','
  }
}

generate_input_distribution = function() {
	let samples_str = document.getElementsByName('in_samples')[0].value.split(',')

  in_dist_samples.splice(0, in_dist_samples.length) // Clear the array without creating a new one
  for(let i=0; i<samples_str.length; i++)
  {
  	in_dist_samples.push(Number(samples_str[i]))
  }

  let trace = {
    x: in_dist_samples,
    type: 'histogram',
    autobinx: false,
    xbins: xbins
  };
  let layout = {
    title: "Input Distribution", 
    xaxis: {title: "Random Variable"}, 
    yaxis: {title: "frequency"}
  };
  let plot_info = [trace];
  Plotly.newPlot('in-distribution', plot_info, layout);
  
  sample_size = 1
}


generate_sampling_distribution = function() {
	let max_sample_size = document.getElementsByName('max_sample_size')[0].value
	let animation_delay = document.getElementsByName('animation_delay')[0].value
  let sample_means = []

  // Visualization iteration
  sample_means.splice(0, sample_means.length)
  for(let i=0; i<num_data; i++)
  {
    let subset_samples = getRandomSubarray(in_dist_samples, sample_size)
    let sample_mean = jStat.mean(subset_samples)
    sample_means.push(sample_mean)
  }

  let trace = {
    x: sample_means,
    type: 'histogram',
    marker: {
      color: 'red',
    },
    autobinx: false,
    xbins: xbins
  };
  let plot_info = [trace];
  let layout = {
    title: "Sampling Distribution of means", 
    xaxis: {title: "Mean of samples (sample size = " + sample_size + ")"}, 
    yaxis: {title: "frequency"}
  };
  Plotly.newPlot('out-sampling-distribution', plot_info, layout);

  if(sample_size < max_sample_size && sample_size < in_dist_samples.length) {
    sample_size++
    setTimeout(generate_sampling_distribution, animation_delay)
  } else {
    document.getElementById("run-button").disabled = false; 
  }
}

let run_stub = function() {
  document.getElementById("run-button").disabled = true; 
  fill_samples_field(num_data)
	generate_input_distribution()
  generate_sampling_distribution()
}


document.getElementById("run-button").addEventListener("click", run_stub); 