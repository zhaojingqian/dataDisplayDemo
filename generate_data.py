import random
import json

posts = []

# 示例数据
user_names = ['user1', 'user2', 'user3', 'user4', 'user5']
times = ['2023-06-01', '2023-06-02', '2023-06-03', '2023-06-04', '2023-06-05']
contents = ['This is post 1.', 'Check out this amazing photo!', 'Feeling excited about the weekend!', 'Here are my thoughts...', 'Just hanging out.']
image_urls = ['https://example.com/image1.jpg', 'https://example.com/image2.jpg', 'https://example.com/image3.jpg', 'https://example.com/image4.jpg', 'https://example.com/image5.jpg']
post_urls = ['https://example.com/post1', 'https://example.com/post2', 'https://example.com/post3', 'https://example.com/post4', 'https://example.com/post5']

for _ in range(10):
    post = {
        'user_id': random.choice(user_names),
        'time': random.choice(times),
        'content': random.choice(contents),
        'images': random.choice(image_urls),
        'post_url': random.choice(post_urls)
    }
    posts.append(post)

leaders = []

# 示例数据
leader_user_names = ['leader1', 'leader2', 'leader3', 'leader4', 'leader5']
leader_user_images = ['https://example.com/leader_image1.jpg', 'https://example.com/leader_image2.jpg', 'https://example.com/leader_image3.jpg', 'https://example.com/leader_image4.jpg', 'https://example.com/leader_image5.jpg']
leader_user_urls = ['https://example.com/leader1', 'https://example.com/leader2', 'https://example.com/leader3', 'https://example.com/leader4', 'https://example.com/leader5']

for _ in range(10):
    leader = {
        'user_id': random.choice(leader_user_names),
        'user_img': random.choice(leader_user_images),
        'user_url': random.choice(leader_user_urls)
    }
    leaders.append(leader)

with open('posts.json', 'w', encoding='utf-8') as f:
    json.dump(posts, f, ensure_ascii=False, indent=4)

with open('leaders.json', 'w') as f:
    json.dump(leaders, f, ensure_ascii=False, indent=4)
