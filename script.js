/*
* The goal of this project is to parse the contents of 
a series of webpages, examining their bodies, extracting the 
unique words, and then adding these to a global count to get a 
rough idea as to which frameworks should be prioritized.

As JS cannot scrape webpages without a proxy, html files 
will be downloaded locally via a separate python script.
*/

//read file(s) into object
var test_html = '<html>\n<span id="job_summary" class="summary">\n' +
    '<b> some kind \nof text</b>And some more ' +
    'with <li class="some stuff">in there ' +
    'here we go\n' +
    '</span>\n</html>';

//extract relevant body section from html
var myBody = {
    extract_body: function (source) {
        var my_regex = /(<span id="job_summary" class="summary">)((.|\n)*)(<\/span>{1})/gm;
        return my_regex.exec(source)[0];
    },

    //remove tags within html body
    clean_tags: function (raw_body) {
        //TODO: make use of closure to avoid globals!
        var tag_regex = /(<[\/A-Za-z="\s]+>)/g;
        var clean_body = raw_body.replace(tag_regex, " ");
        return clean_body;
    }
}



//produce array of unique words from parsed body
//(do this in lowercase)

//add unique words to total_count, increment appropriately

//sort the results

//display sorted results

var result = myBody.extract_body(test_html);
result = myBody.clean_tags(result); //rewrite this such that cascading is possible?

document.writeln("PARSED STUFF: \n\n\n");
document.writeln(result);