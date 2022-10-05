export default function configFrame({images, res, w, h, pathOutput}) {
  return {
    images,
    res,
    w: Number(w),
    h: Number(h),
    pathOutput,
  }
}