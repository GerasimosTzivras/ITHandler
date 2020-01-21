using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Application.Computers
{
    public class ComputerDto
    {
        public Guid Id { get; set; }
        public string Serial { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Computertype { get; set; }
        public string Owner { get; set; }
        public string Building { get; set; }
        public string Condition { get; set; }
        public string Operating { get; set; }
        public string Sizeram { get; set; }
        public string Typeram { get; set; }
        public string Core { get; set; }
        public string Motherboard { get; set; }
        public string Powersupply { get; set; }
        public string Sizehd { get; set; }
        public string Typehd { get; set; }
        public string Graphics { get; set; }
        public string Network { get; set; }
        public string Dslam { get; set; }
        public string Office { get; set; }
        public string Classification { get; set; }
        public string Generalcomments { get; set; }
        public int Lifetime { get; set; }
    }
}