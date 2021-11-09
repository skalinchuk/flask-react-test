import csv
from math import ceil

from flask import Flask, request

app = Flask(__name__)

# Default number of items per page
PAGE_SIZE = 10

# Read CSV data into memory to avoid file loading it on every request
data = []
with open('orgs_sample.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    data = [line for line in reader]


@app.route("/api/search")
def get_orgs():
    # Get search query term and pagination parameters
    name = request.args.get('name')
    # Default page number and page size
    page = 1
    limit = 50
    try:
        page = max(1, int(request.args.get('page', 1)))
        limit = max(1, int(request.args.get('limit', PAGE_SIZE)))
    except:
        # We will ignore incorrect query parameters for now
        pass

    start = (page - 1) * limit
    end = start + limit

    # Initial request path for use when building pagination links
    path = f"{request.path}?"

    if name:
        name = str(name).lower()
        # If name search query term is present, apply the filter and return the slice of the result
        filtered = list(filter(lambda item: name in item["name"].lower(), data))
        # Append name query parameter to path
        path += f"name={name}&"
    else:
        # If no search query is provided, use the original data for slicing
        filtered = data

    total_pages = ceil(len(filtered) / limit)

    return {
        "data": filtered[start:end],
        "page": page,
        "limit": limit,
        "total_pages": total_pages,
        "first_page": f"{path}page=1&limit={limit}",
        "last_page":  f"{path}page={total_pages}&limit={limit}",
        "previous_page": f"{path}page={page-1}&limit={limit}" if page else None,
        "next_page": f"{path}page={page+1}&limit={limit}" if total_pages > page else None
    }
