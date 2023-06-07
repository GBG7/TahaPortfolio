// Name; Taha Sarfraz, Muntasir Munir, Fahim Burger
// Desc: Arduino Hoverboard coded by Taha, Muntasir, Fahim. Frame built by Fiaz & Jeeya
// Base fan for lifting, back propeller fans and servo as a sail. 
// hold the up and down buttons for speeding up and slowing down fan.
// power button to start base-fan. func/stop button to stop base-fan
// Vol+ to go forwards
// Vol- to go backwards
// >>| to go right
// |<< to go left
// >|| to stop pushing fans.
// up & down arrows ^^ to slow or speed up fans.


// servo code - monti
// ir remote code - fahim
// everything else - tahaz
#include <IRremote.h>
#include <Servo.h>

IRrecv rc(0); // remote input a pin 0
decode_results results;
Servo myservo;
//Init Motors

 int enable1 = 5;//enable 1 and 2
 int IN1 = 2; // input 1
 int IN2 = 3;//input 2

 int enable2 = 6;//enable 3 & 4
 int IN3 = 8; // input 3
 int IN4 = 9;//input 4
 int sped = 100;
 int a = LOW;
 int b = LOW;
 int c = LOW;
 int d = LOW;
 int e = LOW;
 int f = LOW;
 int g = LOW;
 int h = LOW;
 int i = LOW;
 
void setup()
{
    Serial.begin(9600);
  rc.enableIRIn(); // enable IR sensor and IR remote blaster
  pinMode(enable1,OUTPUT);
  pinMode(enable2,OUTPUT); // the two enables
  
  pinMode(IN1,OUTPUT); // input 1 and two
  pinMode(IN2,OUTPUT);
  
  pinMode(IN3,OUTPUT); // input 3 and 4
  pinMode(IN4,OUTPUT);
  
  myservo.attach(10);  // attaches the servo on pin 9 to the servo object
  myservo.write(90);
}

void loop()
{
  //i dont understand half of this it is mostly copy paste from @helektrika please do not ask me to explain this i can not
    if (rc.decode(&results)){
      switch(results.value){
       //
          case 0xFD00FF://pwr
          Serial.println("ayy");
        	a = HIGH; 
          	basefan();
          break;
          case 0xFD807F://vol+
        	b = HIGH;
            moveForward(); //  zoom
          break;
          case 0xFD40BF://func/stop
        	c = HIGH;
         	stopmotorw();
          break;
          case 0xFD20DF://|<<
        	d = HIGH;
            LEFT();
          break;
          case 0xFDA05F://>||
        	e = HIGH;
            yameteuwu();
          break ;  
          case 0xFD609F://>>|
        	f = HIGH;
          	right();
          break ;               
          case 0xFD10EF://down arrow
            spd();
          break ;  
          case 0xFD906F://vol-
            back();
          break ;  
          case 0xFD50AF://up arrow
            speeed();
          break ;  
           
          
        }
       rc.resume(); 
  }
  
}

void speeed () { // increase speed by 20 :D
  sped+=20;
  if(sped>250) sped =250; // limits speed to 9k rpm (250)
  analogWrite(enable1, sped); // sped 
  analogWrite(enable2, sped); 
  myservo.write(90);
} //

void spd () { // slow down speed. limit to 10 (if i make it 0, it causes a million problems that i dont want to solve)
  sped-=30;
  if(sped<10) sped =10; // limits to 300 rpm (10)
  analogWrite(enable1, sped);
  analogWrite(enable2, sped);
  myservo.write(90);
}

void basefan(){ // TO RUN FAN
  Serial.println("i choose you, basefan!"); 
   analogWrite(A5, sped*10); // enables the bottom phan w
   
  
}

void stopmotorw(){ // stops motor with press of stop button
    
  analogWrite(A5, 0); // stop motor!!!!
  myservo.write(90);
   
    
}
void moveForward (){ // TO GO FORWARD
  if (b = HIGH){
    analogWrite(enable1, sped); // enables contrls
    analogWrite(enable2, sped);
  
    digitalWrite(IN1, HIGH); // outputs for inputs. makes forward move
    digitalWrite(IN2, LOW);
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
    d = LOW;
    f = LOW;
    g = LOW;
    h = LOW;
    i = LOW;
    myservo.write(90);
    Serial.println("b is high");
    if (e = HIGH){
      b = LOW;
    }
  }
}

void back (){ // TO GO BACKWARDS
  if (h = HIGH){
    analogWrite(enable1, sped); // enables contrls
    analogWrite(enable2, sped);
  
    digitalWrite(IN1, LOW); // outputs for inputs. makes forward move
    digitalWrite(IN2, HIGH);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, HIGH);
    b = LOW;
    d = LOW;
    f = LOW;
    g = LOW;
    i = LOW;
    Serial.println("H is high");
    myservo.write(90);
    if (e = HIGH){
      h = LOW;
    }
  }
}

void right () { // TO TURN RIGHT
  if (f = HIGH){
    analogWrite(enable1, sped); // enables contrls
    analogWrite(enable2, 0);
    digitalWrite(IN1, HIGH); // outputs for inputs. makes forward move
    digitalWrite(IN2, LOW);
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW); 
    b = LOW;
    d = LOW;
    g = LOW;
    h = LOW;
    i = LOW;
    Serial.println("f is high");
    myservo.write(0);
    	
  }
  else {
    f = LOW;
  }
}

void LEFT (){ // TO TURN LEFT
  if (d = HIGH){
    analogWrite(enable1, 0); // enables contrls
    analogWrite(enable2, sped);
    digitalWrite(IN1, HIGH); // outputs for inputs. makes forward move
    digitalWrite(IN2, LOW);
    digitalWrite(IN3, HIGH);
    digitalWrite(IN4, LOW);
    b = LOW;
    f = LOW;
    g = LOW;
    h = LOW;
    i = LOW;
    Serial.println("d is high");
    myservo.write(180);
  }
  else if (f = HIGH){
    	d = LOW;
  }
}

void yameteuwu () { // TO STOP
  if (e = HIGH){
    analogWrite(enable1, 0); // enables contrls
    analogWrite(enable2, 0);
    digitalWrite(IN1, LOW); // outputs for inputs. makes forward move
    digitalWrite(IN2, LOW);
    digitalWrite(IN3, LOW);
    digitalWrite(IN4, LOW);
    b = LOW;
    d = LOW;
    f = LOW;
    g = LOW;
    h = LOW;
    i = LOW;
    myservo.write(90);
     Serial.println("e is high");
    }
}

//  this code is beautiful im up at 1 am just admiring the shit out of this 