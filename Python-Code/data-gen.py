import csv
import random

def generate_cost(seat_type, incentive, demand, capacity):
    base_cost = 150
    scaling_factor = 1
    random_factor = random.randint(-10, 10)

    if seat_type == "Family Set of Three Seats":
        # Adjust scaling factor for family sets
        scaling_factor *= 3

    cost = (base_cost - int(0.05 * capacity) + int(0.5 * incentive) + int(0.1 * demand) + random_factor) * scaling_factor
    return cost  # Ensure cost is non-negative

def generate_realistic_incentive(seat_type):
    if seat_type == "One Middle Seat":
        return random.randint(0, 20)
    elif seat_type == "Any One Seat":
        return random.randint(20, 40)
    elif seat_type == "One Aisle Seat":
        return random.randint(30, 50)
    elif seat_type == "One Window Seat":
        return random.randint(50, 70)
    elif seat_type == "Family Set of Three Seats":
        return random.randint(70, 90)
    elif seat_type == "One Specific Seat":
        return random.randint(70, 100)

def generate_data_table():
    seat_types = ["Any One Seat", "One Aisle Seat", "One Middle Seat", "One Window Seat", "One Specific Seat", "Family Set of Three Seats"]
    rows_per_category = 50
    total_rows = len(seat_types) * rows_per_category

    data_table = []

    for seat_type in seat_types:
        average = 0
        for _ in range(rows_per_category):
            incentive = generate_realistic_incentive(seat_type)
            demand = random.randint(0, 100)
            capacity = random.randint(100, 853)
            cost = generate_cost(seat_type, incentive, demand, capacity)

            row = [seat_type, incentive, capacity, demand, cost]
            average += cost
            data_table.append(row)
        print(seat_type + " average cost: " + str(average / 50))

    return data_table

def write_csv(data_table, filename="airplane_seats_data.csv"):
    with open(filename, mode='w', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(["Seat Type", "Incentive", "Capacity", "Demand", "Cost"])
        writer.writerows(data_table)
    print(f"CSV file '{filename}' has been generated.")

if __name__ == "__main__":
    table = generate_data_table()
    write_csv(table)