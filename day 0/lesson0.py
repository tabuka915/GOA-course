from turtle import *


#we want paint a house

#step 1: draw a square

width(7)
speed(45)
color("orange")
begin_fill()
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward (200)
left (90)
end_fill()
#end of square

#drawing a door
begin_fill()
forward(70)
color("black")
left(90)
forward(120)  #height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()

penup()
goto(200,200)
pendown()

color("green")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()



penup()
goto(200,200)
pendown()


color("blue")
right(330)
forward(60)
right(90)
forward(50)
right(90)
forward(60)
right(90)
forward(50)


penup()
goto(0,200)
pendown()
left(270)
forward(60)
left(90)
forward(60)
left(90)
forward(60)
left(90)
forward(60)



exitonclick()