const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'lib/courses.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace problematic links - using exact patterns from the file
content = content.replace(
  'href=\\"/course/PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1?video=Vd1OEny2pxU\\"',
  'href="/course/PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1?video=Vd1OEny2pxU"'
);
content = content.replace(
  'href=\\"/course/PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1\\"',
  'href="/course/PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1"'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Links updated successfully');
console.log('Previous Lecture link fixed:', content.includes('href="/course/PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1?video=Vd1OEny2pxU"'));
console.log('Python Course link fixed:', content.includes('href="/course/PLhPJQNTjg-xRxqluhJFGaImkxkORIWAD1"'));
