using BookStoreApi.Models;
using BookStoreApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<BookStoreDatabaseSettings>(
    builder.Configuration.GetSection("BookStoreDatabase"));

// 对应 Services 目录中的类
builder.Services.AddSingleton<BooksService>();

builder.Services.AddControllers()
    .AddJsonOptions( //默认json相应格式都为小写，这里修改成与 CLR 对象类型中其相应的属性名称匹配， 例如，Book 类的 Author 属性序列化为 Author，而不是 author。
        options => options.JsonSerializerOptions.PropertyNamingPolicy = null);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
