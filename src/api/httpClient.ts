

export class httpClient {

    async get(url: string, headers = {}) {
        const response = await fetch(url, {
            method: "GET",
            headers: headers
        })
        if (!response.ok) {
            throw new Error("Request Error ")
        }

        return await response.json()
    }

    async post(
        url: string, 
        data: any, 
        headers: any = {
            "Accept": "application/json", 
            // "Content-Type": "application/json"  
    }) {
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: data
        })
        // if (!response.ok) {
        //     throw new Error("Request Error ")
        // }

        return await response.json()
    }

    async put(
        url: string, 
        data: any, 
        headers: any = {"Accept": "application/json", "Content-Type": "application/json"
    }) {
        const response = await fetch(url, {
            method: "PUT",
            headers: headers,
            body: JSON.stringify(data)
        })
        if (!response.ok) {
            throw new Error("Request Error ")
        }

        return await response.json()
    }

    async delete(
        url: string, 
        headers: any = {}) {
        const response = await fetch(url, {
            method: "DELETE",
            headers: headers
        })
        if (!response.ok) {
            throw new Error("Request Error ")
        }

        return await response.json()
    }
    
}