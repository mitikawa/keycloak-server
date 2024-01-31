# Use the official Python image as the base image
FROM python:3.11.6

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt /app/

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . /app/

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable
ENV FLASK_APP=app.py FLASK_DEBUG=1 PYTHONUNBEFFERED=1

# Run app.py when the container launches
CMD ["flask", "run", "--host=0.0.0.0", "--port=3000"]
