# ✈️ Flight Services Backend
The Flight Services Backend is a modular, service-oriented backend application developed to manage and expose structured flight-related data within an airline reservation ecosystem. It is designed to serve as the authoritative source of truth for all flight operations, including management of flights, airlines, and airports. This service plays a critical role in supporting dependent systems such as booking engines

### This service is designed to be modular, scalable, and easily integrable with other services like the Flight Booking Services Backend, allowing a decoupled and maintainable architecture.

### 🧰 Tech Stack:
1. Node.js: Core runtime environment
2. Express.js: Lightweight routing and middleware framework
3. Sequelize: ORM for interacting with MySQL database
4. MySQL: Relational database to persist flight, airport, and airline data
5. Express Router: Modular route handling
6. MVC Pattern: Cleanly separates business logic, routes, and data models

## 💼 Key Features & Responsibilities:
### Flight Management:
1. Create, read, update, and delete flight records.
2. Store essential flight data such as flight number, departure time, arrival time, duration, and pricing (if applicable).

### Airport & Airline Management:
1. Manage details for source and destination airports.
2. Maintain active airline records and their associated flights.

### Schedule Validation:
1. Validate logical correctness of departure/arrival times.
2. Ensure flights are linked to valid airports and airlines.

### API Layer:
1. Exposes RESTful endpoints for other services (like Booking Service) to retrieve flight, airline, and airport data.
2. Optimized for internal use with structured JSON responses.

