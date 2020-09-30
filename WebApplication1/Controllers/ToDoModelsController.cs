using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using WebApplication1.Model;
using WebApplication1.Pages;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ToDoModelsController : ControllerBase
    {
        private readonly ApplicationContext _context;
        private readonly ILogger<WeatherForecastController> _logger;

        public ToDoModelsController(ILogger<WeatherForecastController> logger)
        {
            _context = new ApplicationContext();
            _logger = logger;
        }

        // GET: api/ToDoModels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ToDoModel>>> GetToDoModels()
        {
            return await _context.ToDoModels.ToListAsync();
        }

        // GET: api/ToDoModels/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ToDoModel>> GetToDoModel(int id)
        {
            var toDoModel = await _context.ToDoModels.FindAsync(id);

            if (toDoModel == null)
            {
                return NotFound();
            }

            return toDoModel;
        }

        // PUT: api/ToDoModels/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutToDoModel(int id, ToDoModel toDoModel)
        {
            if (id != toDoModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(toDoModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ToDoModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ToDoModels
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<ToDoModel>> PostToDoModel(ToDoModel toDoModel)
        {
            _context.ToDoModels.Add(toDoModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetToDoModel", new { id = toDoModel.Id }, toDoModel);
        }

        // DELETE: api/ToDoModels/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ToDoModel>> DeleteToDoModel(int id)
        {
            var toDoModel = await _context.ToDoModels.FindAsync(id);
            if (toDoModel == null)
            {
                return NotFound();
            }

            _context.ToDoModels.Remove(toDoModel);
            await _context.SaveChangesAsync();

            return toDoModel;
        }

        private bool ToDoModelExists(int id)
        {
            return _context.ToDoModels.Any(e => e.Id == id);
        }
    }
}
