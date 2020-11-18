<!DOCTYPE html>
<html lang="pl">
    <head>
        <title>Minnesota Timberwolves Fans</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="styles.css" type="text/css">
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script type="text/javascript">    
        var numer = 1;


        
        function hideslide()
        {
            $("#slider").fadeOut(500);
        }

        function changeslide()
        {
        numer++; 
        if(numer>4) numer=1;
        var plik = "<img src=\"images/slajd" + numer + ".jpg\"/>"
        document.getElementById("slider").innerHTML = plik;
        $("#slider").fadeIn(500);          
        setTimeout("changeslide()",5000);
        setTimeout("hideslide()", 4500);
        }
        </script>


    </head>
    <body onload="changeslide()">
        <div class="wrapper row1">
            <header id="header" class="clear">
                <div id="hgroup">
                    <h1><a href="#">Minnesota</a></h1>
                    <h1><span>Timber</span>wolves</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html">Strona główna</a></li>
                        <li><a href="history.html">Historia drużyny</a></li>
                        <li><a href="gra.html">Mini gra</a></li>
                        <li><a href="contact.php">Kontakt</a></li>
                        <li class="last"><a href="autor.html">O autorze</a></li>
                    </ul>
                </nav>
            </header>
        </div>
        <div class="wrapper row2">
            <div id="container" class="clear">
                <p>SEND E-MAIL</p>
                <form id="contactform" class="contact-form" action="contactform.php" method="post">
                    <input type="text" name="name" placeholder="Full name">
                    <input type="text" name="mail" placeholder="Your e-mail">
                    <input type="text" name="Subject" placeholder="Subject">
                    <textarea name="message" placeholder="Message"></textarea>
                    <button type="submit" name="submit">SEND EMAIL</button>
                
                </form>               
            </div>
        </div>

        </div>
        <div class="wrapper row4">
            <footer id="copyright" class="clear">
              <p class="fl_left">Copyright &copy; 2019 - All Rights Reserved - Minnesota Timberwolves Fans</p>              
            </footer>
        </div>
    </body>
</html>