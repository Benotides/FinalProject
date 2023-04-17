
import { createClient } from '@supabase/supabase-js'

const supabaseURL = 'https://rhqvllnrwljaajbrohaa.supabase.co'

const supabaseAPIKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJocXZsbG5yd2xqYWFqYnJvaGFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEyMzIwNTcsImV4cCI6MTk5NjgwODA1N30.vfVHM2X-9gCFCltcbQUxsN0DhJt93lJOOT_YUBWzn6Y'

export default createClient(supabaseURL, supabaseAPIKey)

