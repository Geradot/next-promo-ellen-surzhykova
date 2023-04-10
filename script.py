import os
import json

# создаем пустой словарь, в котором будем хранить информацию о файлах
photos = {}

# путь к папке с фотографиями
photos_dir = "./public/assets/gallery/compressed"

#Уникальный ID для каждой фотографии
j = 0

# итерируемся по каталогам с фотографиями
for subdir in os.listdir(photos_dir):
    subpath = os.path.join(photos_dir, subdir)
    if not os.path.isdir(subpath):
        continue
    # создаем пустой список для текущего каталога
    photos[subdir] = []
    # итерируемся по файлам в каталоге
    for i, file_name in enumerate(os.listdir(subpath)):
        # создаем словарь с информацией о файле
        photo = {
            "id": j + 1,
            "alt": f"Photo {j + 1}",
            "src": f"/assets/gallery/compressed/{subdir}/{file_name}"
        }
        # добавляем словарь в список фотографий для текущего каталога
        photos[subdir].append(photo)
        j = j + 1

# записываем словарь в файл photos.json
with open("photos.json", "w") as f:
    json.dump(photos, f, indent=2)
