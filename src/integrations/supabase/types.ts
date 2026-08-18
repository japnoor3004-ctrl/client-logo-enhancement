export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      certificates: {
        Row: {
          category: string | null
          created_at: string
          expiry_date: string | null
          id: string
          issue_date: string | null
          name: string
          pdf_url: string | null
          preview_image: string | null
          published: boolean
          sort_order: number
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          expiry_date?: string | null
          id?: string
          issue_date?: string | null
          name: string
          pdf_url?: string | null
          preview_image?: string | null
          published?: boolean
          sort_order?: number
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          expiry_date?: string | null
          id?: string
          issue_date?: string | null
          name?: string
          pdf_url?: string | null
          preview_image?: string | null
          published?: boolean
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      client_logos: {
        Row: {
          created_at: string
          id: string
          logo_url: string
          name: string
          published: boolean
          sort_order: number
          updated_at: string
          website: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          logo_url: string
          name: string
          published?: boolean
          sort_order?: number
          updated_at?: string
          website?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          logo_url?: string
          name?: string
          published?: boolean
          sort_order?: number
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      companies: {
        Row: {
          applications_ar: string[]
          applications_en: string[]
          code: string
          contact_address_ar: string | null
          contact_address_en: string | null
          contact_email: string | null
          contact_phone: string | null
          created_at: string
          cta_ar: string | null
          cta_en: string | null
          description_ar: string | null
          description_en: string | null
          featured: boolean
          gallery: string[]
          hero_image: string | null
          id: string
          keywords: string | null
          leadership_ar: string | null
          leadership_en: string | null
          logo_url: string | null
          mission_ar: string | null
          mission_en: string | null
          name_ar: string | null
          name_en: string
          og_image: string | null
          overview_ar: string | null
          overview_en: string | null
          products_ar: string[]
          products_en: string[]
          published: boolean
          seo_description: string | null
          seo_title: string | null
          slug: string
          sort_order: number
          tag_ar: string | null
          tag_en: string | null
          technology_ar: string | null
          technology_en: string | null
          updated_at: string
          vision_ar: string | null
          vision_en: string | null
        }
        Insert: {
          applications_ar?: string[]
          applications_en?: string[]
          code: string
          contact_address_ar?: string | null
          contact_address_en?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          cta_ar?: string | null
          cta_en?: string | null
          description_ar?: string | null
          description_en?: string | null
          featured?: boolean
          gallery?: string[]
          hero_image?: string | null
          id?: string
          keywords?: string | null
          leadership_ar?: string | null
          leadership_en?: string | null
          logo_url?: string | null
          mission_ar?: string | null
          mission_en?: string | null
          name_ar?: string | null
          name_en: string
          og_image?: string | null
          overview_ar?: string | null
          overview_en?: string | null
          products_ar?: string[]
          products_en?: string[]
          published?: boolean
          seo_description?: string | null
          seo_title?: string | null
          slug: string
          sort_order?: number
          tag_ar?: string | null
          tag_en?: string | null
          technology_ar?: string | null
          technology_en?: string | null
          updated_at?: string
          vision_ar?: string | null
          vision_en?: string | null
        }
        Update: {
          applications_ar?: string[]
          applications_en?: string[]
          code?: string
          contact_address_ar?: string | null
          contact_address_en?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          cta_ar?: string | null
          cta_en?: string | null
          description_ar?: string | null
          description_en?: string | null
          featured?: boolean
          gallery?: string[]
          hero_image?: string | null
          id?: string
          keywords?: string | null
          leadership_ar?: string | null
          leadership_en?: string | null
          logo_url?: string | null
          mission_ar?: string | null
          mission_en?: string | null
          name_ar?: string | null
          name_en?: string
          og_image?: string | null
          overview_ar?: string | null
          overview_en?: string | null
          products_ar?: string[]
          products_en?: string[]
          published?: boolean
          seo_description?: string | null
          seo_title?: string | null
          slug?: string
          sort_order?: number
          tag_ar?: string | null
          tag_en?: string | null
          technology_ar?: string | null
          technology_en?: string | null
          updated_at?: string
          vision_ar?: string | null
          vision_en?: string | null
        }
        Relationships: []
      }
      contact_enquiries: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          is_read: boolean
          message: string
          name: string
          phone: string | null
          source: string
          subject: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          is_read?: boolean
          message: string
          name: string
          phone?: string | null
          source?: string
          subject?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          is_read?: boolean
          message?: string
          name?: string
          phone?: string | null
          source?: string
          subject?: string | null
        }
        Relationships: []
      }
      downloads: {
        Row: {
          category: string
          created_at: string
          description: string | null
          file_size: string | null
          file_url: string | null
          id: string
          published: boolean
          sort_order: number
          title: string
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          description?: string | null
          file_size?: string | null
          file_url?: string | null
          id?: string
          published?: boolean
          sort_order?: number
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          file_size?: string | null
          file_url?: string | null
          id?: string
          published?: boolean
          sort_order?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      gallery_albums: {
        Row: {
          category: string | null
          cover_image: string | null
          created_at: string
          description: string | null
          id: string
          published: boolean
          slug: string
          sort_order: number
          title: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          cover_image?: string | null
          created_at?: string
          description?: string | null
          id?: string
          published?: boolean
          slug: string
          sort_order?: number
          title: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          cover_image?: string | null
          created_at?: string
          description?: string | null
          id?: string
          published?: boolean
          slug?: string
          sort_order?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      gallery_items: {
        Row: {
          album_id: string | null
          caption: string | null
          created_at: string
          id: string
          media_type: string
          published: boolean
          sort_order: number
          updated_at: string
          url: string
        }
        Insert: {
          album_id?: string | null
          caption?: string | null
          created_at?: string
          id?: string
          media_type?: string
          published?: boolean
          sort_order?: number
          updated_at?: string
          url: string
        }
        Update: {
          album_id?: string | null
          caption?: string | null
          created_at?: string
          id?: string
          media_type?: string
          published?: boolean
          sort_order?: number
          updated_at?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "gallery_items_album_id_fkey"
            columns: ["album_id"]
            isOneToOne: false
            referencedRelation: "gallery_albums"
            referencedColumns: ["id"]
          },
        ]
      }
      job_applications: {
        Row: {
          created_at: string
          cv_url: string | null
          email: string
          full_name: string
          id: string
          job_id: string | null
          message: string | null
          phone: string | null
          status: string
        }
        Insert: {
          created_at?: string
          cv_url?: string | null
          email: string
          full_name: string
          id?: string
          job_id?: string | null
          message?: string | null
          phone?: string | null
          status?: string
        }
        Update: {
          created_at?: string
          cv_url?: string | null
          email?: string
          full_name?: string
          id?: string
          job_id?: string | null
          message?: string | null
          phone?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      jobs: {
        Row: {
          closing_date: string | null
          created_at: string
          department: string | null
          description: string | null
          employment_type: string | null
          experience: string | null
          id: string
          location: string | null
          position: string
          published: boolean
          requirements: string | null
          responsibilities: string | null
          slug: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          closing_date?: string | null
          created_at?: string
          department?: string | null
          description?: string | null
          employment_type?: string | null
          experience?: string | null
          id?: string
          location?: string | null
          position: string
          published?: boolean
          requirements?: string | null
          responsibilities?: string | null
          slug: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          closing_date?: string | null
          created_at?: string
          department?: string | null
          description?: string | null
          employment_type?: string | null
          experience?: string | null
          id?: string
          location?: string | null
          position?: string
          published?: boolean
          requirements?: string | null
          responsibilities?: string | null
          slug?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      news: {
        Row: {
          body: string | null
          category: string | null
          cover_image: string | null
          created_at: string
          excerpt: string | null
          id: string
          published: boolean
          published_at: string
          slug: string
          sort_order: number
          title: string
          updated_at: string
        }
        Insert: {
          body?: string | null
          category?: string | null
          cover_image?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          published?: boolean
          published_at?: string
          slug: string
          sort_order?: number
          title: string
          updated_at?: string
        }
        Update: {
          body?: string | null
          category?: string | null
          cover_image?: string | null
          created_at?: string
          excerpt?: string | null
          id?: string
          published?: boolean
          published_at?: string
          slug?: string
          sort_order?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          brochure_url: string | null
          category: string | null
          cover_image: string | null
          created_at: string
          datasheet_url: string | null
          description: string | null
          featured: boolean
          id: string
          images: string[]
          kind: string
          name: string
          published: boolean
          slug: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          brochure_url?: string | null
          category?: string | null
          cover_image?: string | null
          created_at?: string
          datasheet_url?: string | null
          description?: string | null
          featured?: boolean
          id?: string
          images?: string[]
          kind?: string
          name: string
          published?: boolean
          slug: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          brochure_url?: string | null
          category?: string | null
          cover_image?: string | null
          created_at?: string
          datasheet_url?: string | null
          description?: string | null
          featured?: boolean
          id?: string
          images?: string[]
          kind?: string
          name?: string
          published?: boolean
          slug?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          email: string | null
          full_name: string | null
          id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          brochure_url: string | null
          client: string | null
          company_code: string | null
          cover_image: string | null
          created_at: string
          description: string | null
          featured: boolean
          id: string
          images: string[]
          industry: string | null
          location: string | null
          name: string
          published: boolean
          services: string[]
          slug: string
          sort_order: number
          status: string
          technologies: string[]
          updated_at: string
          year: number | null
        }
        Insert: {
          brochure_url?: string | null
          client?: string | null
          company_code?: string | null
          cover_image?: string | null
          created_at?: string
          description?: string | null
          featured?: boolean
          id?: string
          images?: string[]
          industry?: string | null
          location?: string | null
          name: string
          published?: boolean
          services?: string[]
          slug: string
          sort_order?: number
          status?: string
          technologies?: string[]
          updated_at?: string
          year?: number | null
        }
        Update: {
          brochure_url?: string | null
          client?: string | null
          company_code?: string | null
          cover_image?: string | null
          created_at?: string
          description?: string | null
          featured?: boolean
          id?: string
          images?: string[]
          industry?: string | null
          location?: string | null
          name?: string
          published?: boolean
          services?: string[]
          slug?: string
          sort_order?: number
          status?: string
          technologies?: string[]
          updated_at?: string
          year?: number | null
        }
        Relationships: []
      }
      seo_settings: {
        Row: {
          created_at: string
          description: string | null
          id: string
          keywords: string | null
          noindex: boolean
          og_image: string | null
          route: string
          title: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          keywords?: string | null
          noindex?: boolean
          og_image?: string | null
          route: string
          title?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          keywords?: string | null
          noindex?: boolean
          og_image?: string | null
          route?: string
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      site_stats: {
        Row: {
          created_at: string
          id: string
          label: string
          published: boolean
          sort_order: number
          suffix: string | null
          updated_at: string
          value: number
        }
        Insert: {
          created_at?: string
          id?: string
          label: string
          published?: boolean
          sort_order?: number
          suffix?: string | null
          updated_at?: string
          value?: number
        }
        Update: {
          created_at?: string
          id?: string
          label?: string
          published?: boolean
          sort_order?: number
          suffix?: string | null
          updated_at?: string
          value?: number
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_staff: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      app_role: "admin" | "editor"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor"],
    },
  },
} as const
