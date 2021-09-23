//write a constructor for the class Movie, which takes a String representing the title
//of the movie, a String representing the studio, and a String representing the
//rating as its arguments, and sets the respective class variables to these values.


public Movie(String t, String s, String r) 
{
 title = t;
 studio = s;
 rating = r;
}

//b) Write a second constructor for the class Movie, which takes a String representing
//the title of the movie and a String representing the studio as its arguments, and
//sets the respective class variables to these values, while the class variable rating
//is set to "PG".

public Movie (String t, String s) 
{
 title = t;
 studio = s;
 rating = “PG”;
}

//c) Write a method getPG, which takes an array of base type Movie as its argument,
//and returns a new array of only those movies in the input array with a rating of "PG".
//You may assume the input array is full of Movie instances. The returned array need
//not be full.

public static Movie[] getPG(Movie[] mov) 
{
 Movie[] pgMov = new Movie[mov.length];
 int newArrayIndex = 0;
 for (int i = 0; i < mov.length; i++) {
 if (mov[i].rating.equals(“PG”)) 
 {
    pgMov[newArrayIndex] = mov[i];
    newArrayIndex++;
    }
    }
    return pgMov;
   }
   
   //d) Write a piece of code that creates an instance of the class Movie with the title
   //“Casino Royale”, the studio “Eon Productions”, and the rating “PG-13”.
   
   Movie mov = new Movie(“Casino Royale”,”Eon Productions”,”PG-13”);
 