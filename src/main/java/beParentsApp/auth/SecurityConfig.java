package beParentsApp.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableMethodSecurity
@EnableWebSecurity
public class SecurityConfig {
	@Autowired
	JWTAuthFilter jwtAuthFilter;

	@Autowired
	CorsFilter corsFilter;

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//		http.cors(c -> c.disable());

		http.csrf(c -> c.disable());

		http.authorizeHttpRequests(auth -> auth.requestMatchers("/api/auth/**").permitAll());
		http.authorizeHttpRequests(auth -> auth.requestMatchers("/swagger-ui/**").permitAll());
		http.authorizeHttpRequests(auth -> auth.requestMatchers("/api-docs/**").permitAll());
		http.authorizeHttpRequests(auth -> auth.requestMatchers("/api/user/**").authenticated());
		http.authorizeHttpRequests(auth -> auth.requestMatchers("/api/standardUser/**").authenticated());
		http.authorizeHttpRequests(auth -> auth.requestMatchers("/api/professionalUser/**").authenticated());
		http.authorizeHttpRequests(auth -> auth.requestMatchers("/api/reminder/**").authenticated());
		http.authorizeHttpRequests(auth -> auth.requestMatchers("/api/post/**").authenticated());
		http.authorizeHttpRequests(auth -> auth.requestMatchers("/api/comment/**").authenticated());

		http.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
		http.addFilterBefore(corsFilter, JWTAuthFilter.class);
		http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

		return http.build();
	}

	@Bean
	PasswordEncoder pwEncoder() {
		return new BCryptPasswordEncoder(11);
	}

}