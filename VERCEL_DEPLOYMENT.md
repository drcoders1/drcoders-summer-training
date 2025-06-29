# Vercel Deployment Guide

This guide will help you deploy your Dr Coders enrollment system to Vercel with proper database setup.

## 🚀 **1. Database Setup for Vercel**

Since Vercel is serverless, SQLite won't work. You need to use PostgreSQL. Here are your options:

### **Option A: Vercel Postgres (Recommended)**

1. Go to your Vercel dashboard
2. Select your project
3. Go to "Storage" tab
4. Create a new Postgres database
5. Copy the connection string

### **Option B: Supabase (Free)**

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string

### **Option C: Neon (Free)**

1. Go to [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string

## 🔧 **2. Environment Variables**

Add these to your Vercel project environment variables:

```env
# Database (Replace with your actual connection string)
DATABASE_URL="postgresql://username:password@host:port/database"

# Admin Authentication
ADMIN_USERNAME=admin
ADMIN_HASHED_PASSWORD=f89Lo5HEh4Tt3lmYidbj8eR6J9s27MBQzJLyWb+sOK+tLGihroBNdwdej7ciUD8+yissEAbub2x7dijLRf/9HQ==

# Skip authentication in development (optional)
SKIP_AUTH=false
```

## 📁 **3. File Upload Setup**

For file uploads on Vercel, you have several options:

### **Option A: Vercel Blob Storage (Recommended)**

1. Install Vercel Blob:

```bash
npm install @vercel/blob
```

2. Update the upload API:

```typescript
import { put } from "@vercel/blob";

// In your API route
const { url } = await put(filename, file, { access: "public" });
```

### **Option B: Cloudinary (Free)**

1. Sign up at [cloudinary.com](https://cloudinary.com)
2. Install: `npm install cloudinary`
3. Add environment variables:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### **Option C: AWS S3**

1. Create an S3 bucket
2. Install: `npm install @aws-sdk/client-s3`
3. Add environment variables:

```env
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=your_region
AWS_BUCKET_NAME=your_bucket_name
```

## 🗄️ **4. Database Migration**

After setting up your database:

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) View database
npx prisma studio
```

## 🔐 **5. Admin Access**

After deployment, access your admin panel at:
`https://your-domain.vercel.app/admin`

Use these credentials:

- **Username**: `admin`
- **Password**: `admin123`

## 📊 **6. Google Sheets Integration (Optional)**

To enable Google Sheets export:

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable Google Sheets API
4. Create service account credentials
5. Download JSON key file
6. Add to environment variables:

```env
GOOGLE_SHEETS_CREDENTIALS={"type":"service_account",...}
```

## 🚀 **7. Deployment Steps**

1. **Push to GitHub**:

```bash
git add .
git commit -m "Add enrollment system"
git push origin main
```

2. **Connect to Vercel**:

   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy

3. **Set up database**:

   - Run Prisma migrations
   - Verify connection

4. **Test the system**:
   - Submit a test enrollment
   - Access admin panel
   - Test file uploads

## 🔧 **8. Troubleshooting**

### **Database Connection Issues**

- Check DATABASE_URL format
- Ensure database is accessible
- Verify Prisma client generation

### **File Upload Issues**

- Check storage service credentials
- Verify file size limits
- Test with smaller files first

### **Admin Access Issues**

- Verify environment variables
- Check browser authentication popup
- Try different browser

### **Build Errors**

- Check Prisma client generation
- Verify all dependencies installed
- Check TypeScript errors

## 📈 **9. Monitoring & Analytics**

### **Vercel Analytics**

- Enable in Vercel dashboard
- Monitor performance
- Track user behavior

### **Database Monitoring**

- Use Prisma Studio for data inspection
- Monitor query performance
- Set up alerts for errors

### **Error Tracking**

- Integrate Sentry for error tracking
- Monitor API endpoints
- Track form submission errors

## 🔒 **10. Security Considerations**

1. **Environment Variables**: Never commit secrets to Git
2. **File Uploads**: Validate file types and sizes
3. **Admin Access**: Use strong passwords
4. **Database**: Enable SSL connections
5. **API Rate Limiting**: Consider implementing rate limits

## 📱 **11. Performance Optimization**

1. **Image Optimization**: Use Next.js Image component
2. **Database Indexing**: Add indexes for frequently queried fields
3. **Caching**: Implement caching for static data
4. **CDN**: Use Vercel's global CDN

## 🎯 **12. Post-Deployment Checklist**

- [ ] Database connection working
- [ ] File uploads functional
- [ ] Admin panel accessible
- [ ] Form submissions working
- [ ] Email notifications (if implemented)
- [ ] Error tracking configured
- [ ] Performance monitoring active
- [ ] Security measures in place

## 📞 **13. Support**

If you encounter issues:

1. Check Vercel deployment logs
2. Verify environment variables
3. Test locally with production database
4. Check Prisma documentation
5. Review Vercel documentation

Your enrollment system should now be fully functional on Vercel! 🎉
