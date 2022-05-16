function selectionSort() {
    c_delay = 0;
    for(let i=0;i<array_size;i++) {
        div_update(divs[i],div_sizes[i],"yellow");
        let minpos = i;
        for(let j = i+1;j<array_size;j++) {
            div_update(divs[j],div_sizes[j],"yellow");
            if(div_sizes[j]<div_sizes[minpos]) {
                if(minpos==i) {
                    div_update(divs[i],div_sizes[i],"red"); 
                }
                else {
                    div_update(divs[minpos],div_sizes[minpos],"blue"); 
                }
                minpos = j;
            }
            if(j!=minpos)
            div_update(divs[j],div_sizes[j],"blue");
        }
        if(minpos!=i) {
            div_update(divs[minpos],div_sizes[minpos],"red");
            let temp = div_sizes[minpos];
            div_sizes[minpos] = div_sizes[i];
            div_sizes[i] = temp;
            div_update(divs[minpos],div_sizes[minpos],"yellow");
            div_update(divs[i],div_sizes[i],"yellow");
        }
        div_update(divs[minpos],div_sizes[minpos],"blue");
        div_update(divs[i],div_sizes[i],"green");
    }
    enable_buttons();
}