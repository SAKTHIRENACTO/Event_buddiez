export interface Event {
    event_id: string
    customer_name: string
    event_type: string
    event_date: string
    event_time: string
    number_of_guests: number
    venue: string
    budget: number
    location: string
    special_requirements: string
    is_accepted: boolean
    total_price: number
    advance_payment: number
    balance: number
    created_at?: string
}