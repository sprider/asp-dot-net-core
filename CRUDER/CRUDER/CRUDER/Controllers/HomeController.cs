using CRUDER.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;

namespace CRUDER.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            List<Teacher> teacherList = new List<Teacher>();

            using (var context = new SchoolContext())
            {
                var teacher = context.Teacher.Where(e => e.Name == "Matt").FirstOrDefault();

                foreach(Teacher teach in context.Teacher)
                { 
                    teacherList.Add(teach);
                }
            }

            return View(teacherList);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Teacher teacher)
        {
            if (ModelState.IsValid)
            {
                var teach = new Teacher()
                {
                    Name = teacher.Name,
                    Skills = teacher.Skills,
                    TotalStudents = teacher.TotalStudents,
                    Salary = teacher.Salary
                };

                using (var context = new SchoolContext())
                {
                    context.Teacher.Add(teach);
                    context.SaveChanges();
                    return RedirectToAction("Index");
                }
            }
            else
                return View();
        }

        public IActionResult Update(int id)
        {
            Teacher teache = new Teacher();

            using (var context = new SchoolContext())
            {
                teache = context.Teacher.Where(e => e.Id == id).FirstOrDefault();
            }
            return View(teache);
        }

        [HttpPost]
        [ActionName("Update")]
        public IActionResult Update_Post(Teacher teacher)
        {
            using (var context = new SchoolContext())
            {
                var teache = context.Teacher.Where(e => e.Id == teacher.Id).FirstOrDefault();
                teache.Name = teacher.Name;
                teache.Skills = teacher.Skills;
                teache.TotalStudents = teacher.TotalStudents;
                teache.Salary = teacher.Salary;

                context.Teacher.Update(teache);
                context.SaveChanges();
            }

            return RedirectToAction("Index");
        }

        [HttpPost]
        public IActionResult Delete(int id)
        {
            using (var context = new SchoolContext())
            {
                var teacher = context.Teacher.Where(e => e.Id == id).FirstOrDefault();

                context.Teacher.Remove(teacher);
                context.SaveChanges();
            }

            return RedirectToAction("Index");
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
