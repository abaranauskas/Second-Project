/*

index.js

*/

$(document).ready(function() {

    "use strict";

    /*
    var msg = 'Hello JavaScrip';
    console.log(msg);

    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '<p>This is from JavaScript</p>';
    */

    var resultlist = $('#resultlist');
    resultlist.text('This is from jQuery');

    var toggleButton = $('#toggleButton');
    toggleButton.on('click', function () {
        resultlist.toggle(500);

        if (toggleButton.text() === 'Hide') toggleButton.text('Show');
        else toggleButton.text('Hide');
    });
    
    var listitems = $('header nav li');
    listitems.css('font-weight', 'bold');
    listitems.filter(':first').css('font-size', '18px');




    /*                              //objects begining
    var result = {
        name: 'jQuery',
        language: 'JavaScript',
        score: 4.5,
        showLog: function () {

        },
        owner: {
            login: 'aidasbaranauskas',
            id: 123456
        }
    };

    result.phoneNunmer = '123-456-7890';

    console.log(result.phoneNunmer);
    */                                  //objects end
    
    $("#gitHubSearchForm").on("submit", function () {
        
        var searchPhrase = $("#SearchPhrase").val();        
        var UseStars = $("#UseStars").val();        
        var LangChoice = $("#LangChoice").val();
        
        if (searchPhrase) {
            
            resultlist.text("Performing seach...");
            
            var gitHubSearch = "https://api.github.com/search/repositories?q=" + encodeURIComponent(searchPhrase);
            
            if (LangChoice != "ALL") {
                gitHubSearch += "+language:" + encodeURIComponent(LangChoice);
            }
            
            if (UseStars) {
                gitHubSearch += "&sort=stars";
            }
            

            $.get(gitHubSearch)
                .success(function (r) {
                //console.log(r.items.length);
                displayResults(r.items);
                })
                .fail(function (err) {
                console.log("Failed to query GitHub");
                })
                .done(function () {
                //
                });
        }
        
        return false;
    });



 /*                                       //Arrays begining
    var results = [{
        name: 'jQuery',
        language: 'JavaScript',
        score: 4.5,
        showLog: function () {

        },
        owner: {
            login: 'aidasbaranauskas',
            id: 123456
        }
    }, {
        name: 'jQuery UI',
        language: 'JavaScript',
        score: 3.5,
        showLog: function () {

        },
        owner: {
            login: 'aidasbaranauskas',
            id: 123456
        }
    }];
    */
    
    
    function displayResults(results) {
        resultlist.empty();
        $.each(results, function(i, item) {

           var newresult = $("<div class='result'>" +
               "<div class='title'>" + item.name + "</div>" +
                   "<div>Language: " + item.language + "</div>" +
                   "<div>Owner: " + item.owner.login + "</div>" +
                   "</div>");

            newresult.hover(function () {
                //make this darker
                $(this).css("background-color", "lightgrey");
            }, function () {
                //reverse 
                $(this).css("background-color", "transparent");
            });

            resultlist.append(newresult);
        });
    }
    

    //console.log(results.length);
    //console.log(results[0].name);
                                        //Arrays end

                                        //Looping Begining
/*
    for (var x = 0; x < results.length; x++) {
        var result = results[x];
        if (result.score > 4) continue;
        console.log(result.name);
    }

                                        //Looping end

    /* 
    results.push(result);
    results.push({
        name: 'dummy project'
    });
    */

    /* 

    console.log('msg is ' + typeof (msg));
    console.log('resultsDiv is ' + typeof (resultsDiv));

    var none;
    console.log('none is ' + typeof (none));

    var aNumber = 10;
    console.log('aNumber is ' + typeof (aNumber));

    var trueFalse = true;
    console.log('trueFalse is ' + typeof (trueFalse));

    //msgs = 'this shouldnt work';

    if (none == undefined) {
        console.log('none is undefined');
    }

    if (aNumber === '10') {
        console.log('10 is 10');
    }

    //function showMsg(msg) {
    //    console.log('ShowMsg: ' + msg);
    //}

    function showMsg(msg, more) {
        if (more) {
            console.log('ShowMsg+: ' + msg + more);
        } else {
            console.log('ShowMsg+: ' + msg);
        }
    }

    showMsg('Some information ');
    showMsg('more information', ' and even more');

    var showIt = function (msg) {
        console.log(msg);
    };

    showIt('some message');

    function showItThen(msg, callback) {
        showIt(msg);
        callback();
    }

    showItThen('ShowitThen called', function () {
        console.log('callback called');
    });

    var inGlobal = true;

    function testMe() {
        console.log('test me: ' + inGlobal);

        var someMsg = 'some Mesage';
        console.log('test me: ' + someMsg);

        showItThen('with closure', function () {
            showIt('testMe with closure(): ' + someMsg);
        });
    }

    //console.log('global: ' + someMsg);

    testMe();

    */

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //$(document).ready(function() {



    //var msg = "hello JavaScript";
    //console.log(msg);

    //var resultsDiv = document.getElementById('results');
    //resultsDiv.innerHTML = '<p> This is from JavaScript</p>';

    //var resultlist = $('#resultlist');
    //resultlist.text('this is from jQuery!');

    //var toggleButton = $('#toggleButton');
    //toggleButton.on("click", function () {
    //    resultlist.toggle(500);

       // if (toggleButton.text() == 'Hide') toggleButton.text('Show');
      //  else toggleButton.text('Hide');
    //});


    /*var result = {
        name: 'jQuery',
        language: 'JavaScript',
        Score: 4.5,
        showlog: function () {

        },
        owner: {
            login: 'aidasbaranauskas',
            id: 123456
        }
    };

    result.phonenumber = '123-456-7890';

    console.log(result.phonenumber);*/

    /* var results = [{
        name: 'jQuery',
        language: 'JavaScript',
        Score: 4.5,
        showlog: function () {

        },
        owner: {
            login: 'aidasbaranauskas',
            id: 123456
        }
    }, {
        name: 'jQuery UI',
        language: 'JavaScript',
        Score: 3.5,
        showlog: function () {

        },
        owner: {
            login: 'aidasbaranauskas',
            id: 123456
        }
    }];

    for (var x=0; x < results.length; x++){
        var result = results[x];
        if (result.Score < 4) break; 
        console.log(result.name);
    } */

    //console.log(results.length);
    //console.log(results[0].name);

    /* results.push(result);
    results.push({
        name: 'dummy project'
    }); */



    /*console.log('msg is ' + typeof (msg));
    console.log('resultsDiv is ' + typeof (resultsDiv));

    var none;
    console.log('none is ' + typeof (none));

    var anumber = 10;
    console.log('anumber is ' + typeof (anumber));

    var truefalse = true;
    console.log('truefalse is ' + typeof (truefalse));

    //msgs = 'this shouldnt work';

    if (!none) {
        console.log('none is undefined');
    }

    if (anumber === '10') {
        console.log('10 is 10');
    }

    //function showmsg(msg) {
    //    console.log('showmsg: ' + msg);
    //}

    function showmsg(msg, more) {
        if (more) {
            console.log('showmsg+ ' + msg + more);
        } else {
            console.log('showmsg+ ' + msg);
        }
    }


    showmsg('some information');
    showmsg('mome information', ' and evenmore');

    var showIt = function (msg) {
        console.log(msg);
    };

    showIt('Some message');

    function showItThen(msg, callback) {
        showIt(msg);
        callback();
    }

    showItThen('showItThen call', function () {
        console.log('callback called');
    });

    var inglobal = true;

    function testme() {
        console.log('testMe(): ' + inglobal);

        var someMsg = 'some Message';
        console.log('testMe() :' + someMsg);

        showItThen('with closure', function () {
            showIt('testMe with closure(): ' + someMsg);
        });
    }

    testme();*/

    //});
    
    
});