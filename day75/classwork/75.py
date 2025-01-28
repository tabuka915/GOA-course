class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    @property
    def perimeter(self):
        return 2 * (self.width + self.height)

# Example usage
rectangle = Rectangle(5, 10)
print(rectangle.perimeter)  # Output: 30
