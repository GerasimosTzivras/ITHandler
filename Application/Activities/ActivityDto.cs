//DTOs are used to shape the data
using System;
using System.Collections.Generic;
using Application.Comments;
using Newtonsoft.Json;

namespace Application.Activities
{
    public class ActivityDto
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string Customer {get; set;}
        public string Telephone {get; set;}
        public string Notes {get; set;}
        public DateTime Date { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
        public int Process {get;set;}

        [JsonProperty("attendees")]
        public ICollection<AttendeeDto> UserActivities { get; set; }
        public ICollection<CommentDto> Comments { get; set; }
    }
}