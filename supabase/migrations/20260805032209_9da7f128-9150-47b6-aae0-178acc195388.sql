DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON SCHEMA public TO postgres, sandbox_exec;
GRANT REFERENCES, SELECT ON TABLE auth.users TO sandbox_exec;