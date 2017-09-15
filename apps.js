

const Curb = document.getElementById('Curb');
Curb.play();
const Seinfeld = document.getElementById('Seinfeld');
Curb.play();
$(() => {

    

    let score = 0;

    $('.mT').on('click', function(){
        var y = window.prompt("What is the highest grossing film of all time?")
        if(y === "Avatar") { 
            window.alert('correct')
            score += 100;
            $("#score").html(score);
        } else { 
            window.alert('incorrect')
            score -= 100;
            $("#score").html(score);
        }
    })
        
    $('.90s').on('click', function(){
    var y = window.prompt("Which rock group released the album NEVERMIND in 1991?")
    if(y === "Nirvana") { 
    window.alert('correct')
           score+= 100;
           $("#score").html(score) 
    } else { 
     window.alert('incorrect')
     score -= 100;
     $("#score").html(score);
                }
    })

    $('.rnr').on('click', function(){
        var y = window.prompt("Which Linkin Park album is certified Diamond?")
        if(y === "Hybrid Theory") { 
            window.alert('correct')
            score += 100;
            $("#score").html(score)
        } else { 
            window.alert('incorrect')
            score -= 100;
            $("#score").html(score)
        }
    })

    $('.gameS').on('click', function(){
        var y = window.prompt("What game had the most online activity during the 2000s")
        if(y === "Halo 2") { 
            window.alert('correct')
            score += 100;
            $("#score").html(score)
        } else { 
            window.alert('incorrect')
            score -= 100;
            $("#score").html(score)
        }
    })

    $('.horrorMovie').on('click', function(){
        var y = window.prompt("Who made their 1972 film debut with The Last House on the Left?")
        if(y === "Wes Craven") { 
            window.alert('correct')
            score += 100;
            $("#score").html(score)
        } else { 
            window.alert('incorrect')
            score -= 100;
            $("#score").html(score)
        }
    })

    $('.mTT').on('click', function(){
        var y = window.prompt("Who wrote and directed the 1976 film Rocky?")
        if(y === "Sylvester Stallone") { 
            window.alert('correct')
            score += 200;
            $("#score").html(score)
    
        } else { 
            window.alert('incorrect')
            score -= 200;
            $("#score").html(score)
        }
    })

    $('.90ss').on('click', function(){
        var y = window.prompt("Which band released 1994s The Downward Spiral album")
        if(y === "Nine Inch Nails") { 
            window.alert('correct')
            score += 200;
            $("#score").html(score)
        } else { 
            window.alert('incorrect')
            score -= 200;
            $("#score").html(score)
        }
    })

    $('.rnr2').on('click', function(){
        var y = window.prompt("What is the name of Green Day's seventh studio album?")
        if(y === "Green Day") { 
            window.alert('correct')
            score += 200;
            $("#score").html(score)
        } else { 
            window.alert('incorrect')
            score -= 200;
            $("#score").html(score)
        }
    })

    $('.gameSS').on('click', function(){
        var y = window.prompt("What was the highest selling Playstation2 game of the 2000s?")
        if(y === "GTA San Andreas") { 
            window.alert('correct')
            score += 200;
            $("#score").html(score)
        } else { 
            window.alert('incorrect')
            score -= 200;
            $("#score").html(score)
        }
    })

    $('.horrorMOvie').on('click', function(){
        var y = window.prompt("What is the name of Rob Zombie's first feature film debut?")
        if(y === "House of 1000 Corpses") { 
            window.alert('correct')
            score += 200;
            $("#score").html(score)
        } else { 
            window.alert('incorrect')
            score -= 200;
            $("#score").html(score)
        }
    })

    $('.mTTT').on('click', function(){
        var y = window.prompt("What is the highest grossing Marvel film to date?")
        if(y === "Captain America Civil War") { 
            window.alert('correct')
            score += 300;
            $("#score").html(score)
        } else { 
            window.alert('incorrect')
            score -= 300;
            $("#score").html(score)
        }
    })

    $('.90sss').on('click', function(){
        var y = window.prompt("Who was the lead singer of the rock band Nirvana?")
        if(y === "Kurt Cobain") { 
            window.alert('correct')
            score += 300;
            $("#score").html(score)
        } else { 
            window.alert('incorrect')
            score -= 300;
            $("#score").html(score)
        }
    })

    $('.rnr3').on('click', function(){
        var y = window.prompt("What is the name of the metal song featured at the end of the film, Vampires Suck?")
        if(y === "If I Was Your Vampire") { 
            window.alert('correct')
            score += 300;
            $("#score").html(score)
        } else { 
            window.alert('incorrect')
            score -= 300;
            $("#score").html(score)
        }
    })

    $('.gameSSS').on('click', function(){
        var y = window.prompt("What Zelda title was first released on Nintendo Gamecube?")
        if(y === "Windwaker") { 
            window.alert('correct')
            score += 300;
            $("#score").html(score)
        } else { 
            window.alert('incorrect')
            score -= 300;
            $("#score").html(score)
        }
    })

    $('.horrorMOVie').on('click', function(){
        var y = window.prompt("What American remake of a Japanese horror film was released in the United States in 2002?")
        if(y === "The Ring") { 
            window.alert('correct')
            score += 300;
            $("#score").html(score)
        } else { 
            window.alert('incorrect')
            score -= 300;
            $("#score").html(score)
        }
    })

    $('.mTTTT').on('click', function(){
        var y = window.prompt("What is the name of Julia Roberts character in the film Pretty Woman?")
        if(y === "Vivian Ward") { 
            window.alert('correct')
            score += 400;
            $("#score").html(score)
        } else { 
            window.alert('incorrect')
            score -= 400;
            $("#score").html(score)
        }
    })

    $('.90ssss').on('click', function(){
        var y = window.prompt("What is the name of Marilyn Mansons second studio album?")
        if(y === "Antichrist Superstar") { 
            window.alert('correct')
            score += 400;
            $("#score").html(score)
        } else { 
            window.alert('incorrect')
            score -= 400;
            $("#score").html(score)
        }
    })
    
    $('.rnr4').on('click', function(){
        var y = window.prompt("Which rapper had an album titled Lifestylez ov da poor an danderouz?")
        if(y === "Big L") { 
            window.alert('correct')
            score += 400;
            $("#score").html(score)
        } else { 
            window.alert('incorrect')
            score -= 400;
            $("#score").html(score)
        }
    })

    $('.gameSSSS').on('click', function(){
        var y = window.prompt("What year was the Xbox title Halo 2 released?")
        if(y === "2004") { 
            window.alert('correct')
            score += 400;
            $("#score").html(score)
        } else { 
            window.alert('incorrect')
            score -= 400;
            $("#score").html(score)
        }
    })
    
    $('.horrorMOVIE').on('click', function(){
        var y = window.prompt("What horror movie started the slasher craze?")
        if(y === "Peeping Tom") { 
            window.alert('correct')
            score += 400;
            $("#score").html(score)
    
        } else { 
            window.alert('incorrect')
            score -= 100;
            $("#score").html(score)
        }
    })
    







add400 = () => {
    var y = window.prompt("what is my name")
    if(y === "James") { 
        window.alert('correct')

    } else { 
        window.alert('incorrect')
    }

}
})