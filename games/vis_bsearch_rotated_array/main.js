// Binary search related vars
let nums = []
let search_element = 0
let low = 0
let high = 0
let mid = 0
let iter = 0


// Animation releated vars
let unselected_element_class_name = "num-block"
let select_low_index_class_name = "num-low-index"
let select_high_index_class_name = "num-high-index"
let select_mid_index_class_name = "num-mid-index"
let select_mid_low_index_class_name = "num-mid-equal-low-index"
let animation_delay = 1000





let text_to_num = function(val) {
  return Number(val.trim())
}

let get_array_from_text = function() {

  nums_ary_text = document.getElementsByName('in_ary')[0].value.trim().split(",");
  nums = nums_ary_text.map(text_to_num);
}

let get_search_element_from_text = function() {
  search_element = text_to_num(document.getElementsByName('in_search_elem')[0].value)
}

let animation_loop = function() {

  if(low <= high) {

    iter += 1

    document.getElementById("animation-area").innerHTML += '<br><br><div class="iter">Iteration = ' + String(iter) + '</div>'

    mid = Math.floor(low + ((high - low) / 2))
    document.getElementById("animation-area").innerHTML += "<br> Low = " + String(low)
    document.getElementById("animation-area").innerHTML += "<br> Mid = " + String(mid)
    document.getElementById("animation-area").innerHTML += "<br> High = " + String(high)
    document.getElementById("animation-area").innerHTML += "<br>"

    for(let i=0; i<nums.length; i++) {
      let num_str = String(nums[i])

      let element_html_block = ""
      let class_list_html_text = ""
      
      if(mid == low && i == mid) {
        class_list_html_text += 'class="' + select_mid_low_index_class_name + '" '
      } else if(i == mid) {
        class_list_html_text += 'class="' + select_mid_index_class_name + '" '
      } else if(i == high) {
        class_list_html_text += 'class="' + select_high_index_class_name + '" '
      } else if(i == low) {
        class_list_html_text += 'class="' + select_low_index_class_name + '" '
      } else {
        class_list_html_text += 'class="' + unselected_element_class_name + '" '
      }
      
      element_html_block = '<div ' + class_list_html_text + '>'+ num_str +'</div>'
      document.getElementById("animation-area").innerHTML += element_html_block;
    }



    if(nums[mid] == search_element) {
      console.log("Element found at index == " + String(mid))
      document.getElementById("animation-area").innerHTML += '<br> <div class="found">Element found at index ' + String(mid) + '</div>'
      return;
    }

    // Left side is sorted
    if( nums[mid] >= nums[low] ) {

      document.getElementById("animation-area").innerHTML += ' Left side is sorted (nums[mid] > nums[low])'

      if(search_element < nums[mid] && nums[low] <= search_element) {
        document.getElementById("animation-area").innerHTML += ' Search element in left range'
        high = mid - 1
      } else {
        document.getElementById("animation-area").innerHTML += ' Search element in right'
        low = mid + 1
      }

    } else { // Right side is sorted

      document.getElementById("animation-area").innerHTML += ' Right side is sorted (nums[mid] <= nums[low])'

      if(search_element > nums[mid] && nums[high] >= search_element) {
        document.getElementById("animation-area").innerHTML += ' Search element in right range'
        low = mid + 1
      } else {
        document.getElementById("animation-area").innerHTML += ' Search element in left'
        high = mid - 1
      }

    }

    

    setTimeout(animation_loop, animation_delay)
  } else {
    console.log("Not Found !!!")
    document.getElementById("animation-area").innerHTML += '<br> <div class="not-found">Element Not Found !!<br>\
    Insertion Index (Low index after update from last inter) = ' + String(low) + '</div><br>Low, High index after loop exit = ' + String(low) + ',  ' + String(high)
  }

}


let init_binary_search_vars = function() {
  get_array_from_text()
  get_search_element_from_text()
  low = 0;
  high = nums.length - 1
}




let run_visualize_binary_search = function() {
  console.log("Started . . .")

  init_binary_search_vars()
  console.log("Search Element = " + String(search_element))
  console.log(nums)

  animation_loop()
}

let reset_app = function() {
  document.getElementById("animation-area").innerHTML = "";
  nums = []
  search_element = 0
  low = 0
  high = 0
  mid = 0
  iter = 0
}

let run_func = function() {
  document.getElementById("run-button").disabled = true;
  reset_app();
  run_visualize_binary_search()
  document.getElementById("run-button").disabled = false;
}

document.getElementById("run-button").addEventListener("click", run_func);
