"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z
    .string()
    .min(1, "メールアドレスを入力してください")
    .regex(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "正しいメールアドレスを入力してください"
    ),
  subject: z.string().min(1, "お問い合わせの件名を入力してください"),
  message: z.string().min(10, "10文字以上のメッセージを入力してください"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // TODO: Formspree連携を追加する
    console.log("Form submission:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="text-gold text-4xl mb-4">✓</div>
        <h3 className="text-lg font-light text-deep-black mb-2">
          ありがとうございます
        </h3>
        <p className="text-charcoal/60 text-sm">
          お問い合わせを受け付けました。近日中にお返事いたします。
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 text-gold text-xs tracking-wider hover:underline"
        >
          別のお問い合わせ
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-xs text-charcoal/60 tracking-wider mb-2">
          お名前 <span className="text-gold">*</span>
        </label>
        <input
          {...register("name")}
          type="text"
          className="w-full bg-transparent border-b border-charcoal/30 py-3 text-sm text-deep-black placeholder-charcoal/30 focus:outline-none focus:border-gold transition-colors duration-300"
          placeholder="お名前を入力してください"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs text-charcoal/60 tracking-wider mb-2">
          メールアドレス <span className="text-gold">*</span>
        </label>
        <input
          {...register("email")}
          type="email"
          className="w-full bg-transparent border-b border-charcoal/30 py-3 text-sm text-deep-black placeholder-charcoal/30 focus:outline-none focus:border-gold transition-colors duration-300"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs text-charcoal/60 tracking-wider mb-2">
          件名 <span className="text-gold">*</span>
        </label>
        <input
          {...register("subject")}
          type="text"
          className="w-full bg-transparent border-b border-charcoal/30 py-3 text-sm text-deep-black placeholder-charcoal/30 focus:outline-none focus:border-gold transition-colors duration-300"
          placeholder="お問い合わせの件名"
        />
        {errors.subject && (
          <p className="text-red-500 text-xs mt-1">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs text-charcoal/60 tracking-wider mb-2">
          メッセージ <span className="text-gold">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={6}
          className="w-full bg-transparent border border-charcoal/30 p-3 text-sm text-deep-black placeholder-charcoal/30 focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
          placeholder="お問い合わせの内容を入力してください"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-deep-black text-off-white text-xs tracking-widest uppercase hover:bg-charcoal transition-colors duration-300 disabled:opacity-50"
      >
        {isSubmitting ? "送信中..." : "送信"}
      </button>
    </form>
  );
}
