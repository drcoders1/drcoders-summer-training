# Student Enrollment System

This document explains how the student enrollment system works in the Dr Coders application.

## Features

### 1. Student Enrollment Form

- **Location**: `/src/components/VoComponents/enrollnow-form.tsx`
- **Features**:
  - Course selection (Full Stack, Frontend, Mobile Development)
  - Personal information collection
  - Academic information (semester, university)
  - Promo code application with discount
  - Payment proof upload
  - Form validation
  - Beautiful animations

### 2. Database Schema

- **Location**: `/prisma/schema.prisma`
- **Model**: `Student`
- **Fields**:
  - `id`: Unique identifier
  - `course`: Selected course
  - `name`: Student's full name
  - `email`: Student's email (unique)
  - `semester`: Current semester
  - `university`: University name
  - `message`: Optional message
  - `paymentProof`: File path to uploaded payment proof
  - `finalPrice`: Final price after discounts
  - `discountApplied`: Whether discount was applied
  - `promoCode`: Applied promo code (if any)
  - `status`: Enrollment status (pending/approved/rejected)
  - `createdAt`: Enrollment timestamp
  - `updatedAt`: Last update timestamp

### 3. API Endpoints

#### POST `/api/enroll`

- **Purpose**: Submit new enrollment
- **Method**: POST
- **Body**: FormData with all enrollment fields
- **Response**: Success/error message with student ID

#### GET `/api/enroll`

- **Purpose**: Fetch all enrollments (admin)
- **Method**: GET
- **Response**: Array of all student enrollments

#### PATCH `/api/enroll/[id]`

- **Purpose**: Update enrollment status
- **Method**: PATCH
- **Body**: `{ status: "approved" | "rejected" | "pending" }`
- **Response**: Updated student data

#### GET `/api/enroll/[id]`

- **Purpose**: Fetch specific enrollment
- **Method**: GET
- **Response**: Single student enrollment

### 4. Admin Panel

- **Location**: `/src/app/admin/page.tsx`
- **Features**:
  - View all enrollments
  - Filter by status
  - Approve/reject applications
  - View payment proofs
  - Student details display

## Setup Instructions

### 1. Database Setup

```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) View database in Prisma Studio
npx prisma studio
```

### 2. File Uploads

- Uploads are stored in `/public/uploads/`
- Files are automatically named with timestamps
- Directory is gitignored to prevent committing uploads

### 3. Environment Variables

Make sure your `.env` file contains:

```
DATABASE_URL="file:./db.sqlite"
```

## Usage

### For Students

1. Navigate to the enrollment form
2. Fill in all required fields
3. Upload payment proof
4. Apply promo code if available
5. Submit the form
6. Receive confirmation

### For Admins

1. Navigate to `/admin`
2. View all pending enrollments
3. Review payment proofs
4. Approve or reject applications
5. Monitor enrollment status

## Security Features

1. **Email Validation**: Prevents duplicate enrollments
2. **File Upload Security**: Validates file types and sizes
3. **Form Validation**: Client and server-side validation
4. **Status Management**: Controlled status updates

## File Structure

```
src/
├── app/
│   ├── api/
│   │   └── enroll/
│   │       ├── route.ts          # Main enrollment API
│   │       └── [id]/
│   │           └── route.ts      # Individual enrollment API
│   └── admin/
│       └── page.tsx              # Admin panel
├── components/
│   └── VoComponents/
│       └── enrollnow-form.tsx    # Enrollment form
prisma/
└── schema.prisma                 # Database schema
public/
└── uploads/                      # File uploads (gitignored)
```

## Troubleshooting

### Common Issues

1. **Database Connection Error**

   - Check `.env` file for correct DATABASE_URL
   - Run `npx prisma generate` and `npx prisma db push`

2. **File Upload Fails**

   - Ensure `/public/uploads/` directory exists
   - Check file permissions
   - Verify file size limits

3. **Form Submission Error**
   - Check browser console for errors
   - Verify all required fields are filled
   - Ensure email format is valid

### Development Commands

```bash
# Generate Prisma client
npx prisma generate

# Push database changes
npx prisma db push

# Reset database
npx prisma db push --force-reset

# View database
npx prisma studio

# Run development server
npm run dev
```

## Future Enhancements

1. **Email Notifications**: Send confirmation emails to students
2. **Payment Integration**: Direct payment processing
3. **Dashboard Analytics**: Enrollment statistics and charts
4. **Bulk Operations**: Mass approve/reject enrollments
5. **Export Functionality**: Export enrollment data to CSV/Excel
6. **Advanced Filtering**: Filter by date, course, status, etc.
