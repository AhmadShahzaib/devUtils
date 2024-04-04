import io from 'socket.io-client';

// Assuming you have a function to retrieve the authorization token
const getToken = () => {
  // Logic to retrieve the token
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ7XCJpZFwiOlwiNjMyOWNkZjU0MWM1MDQ3MjUwZTNkODIzXCIsXCJlbWFpbFwiOlwiYWRtaW5AdGVraHFzLmNvbVwiLFwidXNlck5hbWVcIjpcImpob24zMjFcIixcImZpcnN0TmFtZVwiOlwiSmhvblwiLFwibGFzdE5hbWVcIjpcIkRvZVwiLFwidGltZVpvbmVcIjp7XCJ0ekNvZGVcIjpcIkFtZXJpY2EvQ2hpY2Fnb1wiLFwidXRjXCI6XCItMDY6MDBcIixcImxhYmVsXCI6XCJBbWVyaWNhL0NoaWNhZ28gKEdNVC0wNjowMClcIixcIm5hbWVcIjpcIihHTVQtMDY6MDApIENoaWNhZ28sIEhvdXN0b24sIFNhbiBBbnRvbmlvLCBEYWxsYXMsIEF1c3RpblwifSxcImdlbmRlclwiOlwiTWFsZVwiLFwiaXNBY3RpdmVcIjp0cnVlLFwibm90ZXNcIjpcIm5vdGVzXCIsXCJwaG9uZU51bWJlclwiOlwiMTIzNDU2Nzg5XCIsXCJyb2xlXCI6e1wiaWRcIjpcIjYzMjljZGY1NDFjNTA0NzI1MGUzZDgyMlwiLFwicm9sZU5hbWVcIjpcInRlc3RpbmdBcnNcIixcImRlc2NyaXB0aW9uXCI6XCJTb21lIGRlc2NyaXB0aW9uIG9mIHRoZSByb2xlLlwiLFwicGVybWlzc2lvbnNcIjpbe1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTI2NFwiLFwiY2FuQ3JlYXRlXCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiZTI5YjM4ZTlcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTI2NlwiLFwiY2FuRWRpdFwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcImZjZGE4ZWFiXCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyNjhcIixcImNhbkxpc3RcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCI2YzJlNjNjMFwifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMjZhXCIsXCJjYW5EZWxldGVcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCIzNTFlNTQ2ZVwifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMjZjXCIsXCJjYW5WaWV3XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiMzE3MWQ4MjhcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTI2ZVwiLFwiY2FuRGVhY3RpdmF0ZVwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcImVhMTY4ODQ4XCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyNzBcIixcImNhbkFjdGl2YXRlXCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiN2M5NTdhMGNcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTI3MlwiLFwiY2FuQ3JlYXRlXCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiMGNkNDRlODBcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTI3NFwiLFwiY2FuRWRpdFwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjZmNDcxZWMyXCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyNzZcIixcImNhbkxpc3RcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCI0NzAxYmYxYlwifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMjc4XCIsXCJjYW5EZWxldGVcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCI4NjFmNjQwY1wifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMjdhXCIsXCJjYW5WaWV3XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiYWE0YWI3OGVcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTI3Y1wiLFwiY2FuRGVhY3RpdmF0ZVwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcImEwYjM0NzE3XCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyN2VcIixcImNhbkFjdGl2YXRlXCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiMjY1ZGRmZDlcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTI4MFwiLFwiY2FuQ3JlYXRlXCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiNzczMzQ2MzRcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTI4MlwiLFwiY2FuRWRpdFwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcImFiMTZiYmM2XCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyODRcIixcImNhbkxpc3RcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCJhYjE2YmJjN1wifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMjg2XCIsXCJjYW5EZWxldGVcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCIzMzY0MTVmZVwifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMjg4XCIsXCJjYW5WaWV3XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiZWFkNmE2NjdcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTI4YVwiLFwiY2FuRGVhY3RpdmF0ZVwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjJkYjIxNTc3XCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyOGNcIixcImNhbkFjdGl2YXRlXCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiNWE3NDU2MzVcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTI4ZVwiLFwiY2FuQ3JlYXRlXCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiMDc3MDI3ZmFcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTI5MFwiLFwiY2FuRWRpdFwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjg1Y2Y1MWEwXCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyOTJcIixcImNhbkxpc3RcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCJjZjAxM2ViYVwifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMjk0XCIsXCJjYW5EZWxldGVcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCJiZjlkMmYxYlwifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMjk2XCIsXCJjYW5WaWV3XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiMjM1N2E2NWZcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTI5OFwiLFwiY2FuRGVhY3RpdmF0ZVwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcImE3N2Y4ZDNjXCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyOWFcIixcImNhbkFjdGl2YXRlXCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiOTRmZWMxYjJcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTI5Y1wiLFwiY2FuQ3JlYXRlXCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiNjFmYTY0ZjRcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTI5ZVwiLFwiY2FuRWRpdFwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjc0NDBlMWU2XCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyYTBcIixcImNhbkxpc3RcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCJjY2E4MmZiOFwifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMmEyXCIsXCJjYW5EZWxldGVcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCI0NTMwNGJkZVwifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMmE0XCIsXCJjYW5WaWV3XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiZTRhMTJkMGJcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTJhNlwiLFwiY2FuRGVhY3RpdmF0ZVwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjI4M2IwOWNmXCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyYThcIixcImNhbkFjdGl2YXRlXCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiZmM3YWNjNmRcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTJhYVwiLFwiY2FuTGlzdFwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjAxZjlhMWY1XCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyYWNcIixcImNhbkNyZWF0ZVwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjE4YTg5ZjQ3XCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyYWVcIixcImNhbkVkaXRcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCIzOGZmMTQwY1wifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMmIwXCIsXCJjYW5MaXN0XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiNGZiNThlODNcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTJiMlwiLFwiY2FuRGVsZXRlXCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiODNlNWRiMzVcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTJiNFwiLFwiY2FuVmlld1wiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcImJiYTU3MmIzXCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyYjZcIixcImNhbkRlYWN0aXZhdGVcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCJmMDRhZjQ5N1wifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMmI4XCIsXCJjYW5MaXN0XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiY2Q4MjdmN2VcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTJiYVwiLFwiY2FuQWN0aXZhdGVcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCJkNTk0ODFkN1wifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMmJjXCIsXCJjYW5FZGl0XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiZGNkMmRhYWJcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTJiZVwiLFwiY2FuVmlld1wiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjUyZGFmMjA4XCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyYzBcIixcImNhbkNyZWF0ZVwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjUzNWQ3Y2NhXCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyYzJcIixcImNhbkVkaXRcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCI1MjZmYTU1OFwifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMmM0XCIsXCJjYW5MaXN0XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiY2ViNWFlN2ZcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTJjNlwiLFwiY2FuRGVsZXRlXCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiOTkzYWQwMmJcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTJjOFwiLFwiY2FuVmlld1wiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjc2YmUyNDhkXCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyY2FcIixcImNhbkRlYWN0aXZhdGVcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCIzYjkzMTIzY1wifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMmNjXCIsXCJjYW5BY3RpdmF0ZVwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcImY2NDY4YzU4XCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyY2VcIixcImNhbkNyZWF0ZVwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjNiYTZkYmJlXCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyZDBcIixcImNhbkVkaXRcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCIxMGNhYjIwNlwifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMmQyXCIsXCJjYW5MaXN0XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiMzcxZWE5ZmZcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTJkNFwiLFwiY2FuRGVsZXRlXCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiN2Q4MTBiM2JcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTJkNlwiLFwiY2FuVmlld1wiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjQ3MTUyNzIxXCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyZDhcIixcImNhbkRlYWN0aXZhdGVcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCI2NjkyZDVlMlwifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMmRhXCIsXCJjYW5BY3RpdmF0ZVwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjUyOTcyY2NkXCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyZGNcIixcImNhbkxpc3RcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCI5MGI1YmFmZVwifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMmRlXCIsXCJjYW5WaWV3XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiZTJhNjI1NjdcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTJlMFwiLFwiY2FuVmlld1wiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcImRmYzFiMjBmXCJ9LHtcImlkXCI6XCI2MzI5Y2RjMWRkNDA1ZjJiOWU5ZTEyZTJcIixcImNhblZpZXdcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCJiM2YzZGY4MlwifSx7XCJpZFwiOlwiNjMyOWNkYzFkZDQwNWYyYjllOWUxMmU0XCIsXCJjYW5WaWV3XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiYzc5MzBjNTBcIn0se1wiaWRcIjpcIjYzMjljZGMxZGQ0MDVmMmI5ZTllMTJlNlwiLFwiY2FuVmlld1wiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjMwYzdkYjVlXCJ9LHtcImlkXCI6XCI2MzZiNzQ2ZDIwYjYzYzdkNDk4MjQ0MmNcIixcImNhbkNyZWF0ZVwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjBjZDI0YTgwXCJ9LHtcImlkXCI6XCI2MzZiNzRhNDIwYjYzYzdkNDk4MjQ0MmRcIixcImNhbkxpc3RcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCI0NzAxYmFmYlwifSx7XCJpZFwiOlwiNjM2Yjc0YmUyMGI2M2M3ZDQ5ODI0NDJlXCIsXCJjYW5DcmVhdGVcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCJlMjliNjczNFwifSx7XCJpZFwiOlwiNjM2Yjc0ZDgyMGI2M2M3ZDQ5ODI0NDJmXCIsXCJjYW5MaXN0XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiMzE3MWQ4MjhcIn0se1wiaWRcIjpcIjYzNmI3ZjkxMjBiNjNjN2Q0OTgyNDQzMFwiLFwiY2FuTGlzdFwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjMxNzFkODI4XCJ9LHtcImlkXCI6XCI2MzZjYWVlNzdlYjFiNjg2NzJhZWVkNjVcIixcImNhblZpZXdcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCIzMTcxZjRjOFwifSx7XCJpZFwiOlwiNjNhNDU3NmNhZTVlNWQxZTU1ZDA1ZTczXCIsXCJjYW5DcmVhdGVcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCIzMGQ3ZGIzZVwifSx7XCJpZFwiOlwiNjNhNDU3NmNhZTVlNWQxZTU1ZDA1ZTc1XCIsXCJjYW5FZGl0XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiZ2ZjMWIzMGdcIn0se1wiaWRcIjpcIjYzYTQ1NzZjYWU1ZTVkMWU1NWQwNWU3OFwiLFwiY2FuVmlld1wiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjExbGt5dDJlXCJ9LHtcImlkXCI6XCI2M2E0NTc2Y2FlNWU1ZDFlNTVkMDVlN2FcIixcImNhblZpZXdcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCI2NzE0MzcyMVwifSx7XCJpZFwiOlwiNjNhNDU3NmNhZTVlNWQxZTU1ZDA1ZTdjXCIsXCJjYW5MaXN0XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiOTBoNWJkZjZcIn0se1wiaWRcIjpcIjYzYTQ1NzZjYWU1ZTVkMWU1NWQwNWU3ZVwiLFwiY2FuRWRpdFwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjNsOTMxZ2g4XCJ9LHtcImlkXCI6XCI2M2E0NTc2Y2FlNWU1ZDFlNTVkMDVlODBcIixcImNhbkNyZWF0ZVwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjkwMTVhZTdmXCJ9LHtcImlkXCI6XCI2M2E0NTc2Y2FlNWU1ZDFlNTVkMDVlODJcIixcImNhbkNyZWF0ZVwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcImNlYjVhdmM0XCJ9LHtcImlkXCI6XCI2M2E0NTc2Y2FlNWU1ZDFlNTVkMDVlODRcIixcImNhblZpZXdcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCJzZmIxYjMwZlwifSx7XCJpZFwiOlwiNjNhNDU3NmNhZTVlNWQxZTU1ZDA1ZTg3XCIsXCJjYW5WaWV3XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiYWE0Y2Q3OGVcIn0se1wiaWRcIjpcIjYzYTQ1NzZjYWU1ZTVkMWU1NWQwNWU4Y1wiLFwiY2FuTGlzdFwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjZjMmVjZzVmXCJ9LHtcImlkXCI6XCI2M2E0NTc2Y2FlNWU1ZDFlNTVkMDVlOGZcIixcImNhbkRlbGV0ZVwiOnRydWUsXCJpc0FjdGl2ZVwiOnRydWUsXCJwZXJtaXNzaW9uSWRcIjpcIjM1MXA1NDZzXCJ9LHtcImlkXCI6XCI2M2E0NWUzYWFlNWU1ZDFlNTVkMDZhOTJcIixcImNhblZpZXdcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCJjNzUzMWM1NFwifSx7XCJpZFwiOlwiNjNhNDVlM2FhZTVlNWQxZTU1ZDA2YTlmXCIsXCJjYW5DcmVhdGVcIjp0cnVlLFwiaXNBY3RpdmVcIjp0cnVlLFwicGVybWlzc2lvbklkXCI6XCIwY28zNGE4NVwifSx7XCJpZFwiOlwiNjNhNDVlM2FhZTVlNWQxZTU1ZDA2YWE2XCIsXCJjYW5WaWV3XCI6dHJ1ZSxcImlzQWN0aXZlXCI6dHJ1ZSxcInBlcm1pc3Npb25JZFwiOlwiNDE3MWQ4NTZcIn1dLFwiaXNBY3RpdmVcIjp0cnVlfSxcInRlbmFudElkXCI6XCI2MzI5Y2RmNTQxYzUwNDcyNTBlM2Q4MjFcIixcImlzVmVyaWZpZWRcIjp0cnVlLFwicGFzc3dvcmRcIjpcIiQyYSQxMiRJN05SM3MyMVBnbzJXb0VYTFcvejhPS0IvNDFpWUFMZ2d1dVMvTDM4cVlHWWo0SEpBZnlvQ1wiLFwiaXNEcml2ZXJcIjpmYWxzZSxcImNvbXBhbnlUaW1lWm9uZVwiOlwiQW1lcmljYS9DaGljYWdvXCIsXCJ1c2RvdFwiOlwiMDAwMDIxMVwiLFwidHJhaWxlck51bWJlclwiOlwiXCIsXCJjYXJyaWVyTmFtZVwiOlwiSm9obiBXaWNrMTFcIn0iLCJpYXQiOjE3MTE3MDkzODQsImV4cCI6MTcxMjQyOTM4NCwianRpIjoiOGVkODYyYmUtYmQ1Yi00MjViLWFmMTktMzZkYjI3OWYxNzU5In0.u1NCQ31kRu5G_gWDRbqaDuxQ0hfmPOqiwbYSgzmG4rA";
};

const socket = io('http://localhost:1349', {
  extraHeaders: {
    Authorization: getToken()
  }
});

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('sendOrignal', (data) => {
  console.log('Received message:', data);
});
let queryparams = {date:"2024-02-10",id:"6477146a7b70ac5e4aeb7974"}
socket.emit('getOrignal', queryparams);
