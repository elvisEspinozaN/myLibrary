package com.elvisespinoza.springbootmylibrary.config;

import com.elvisespinoza.springbootmylibrary.entity.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {
    private String allowedOrigins = "http://localhost:3000";

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {

        // expose the entity IDs, so it can be accessed in the API
        config.exposeIdsFor(Book.class);

        // disable certain HTTP methods for the Book entity
        // this makes the API read-only
        HttpMethod[] unsupportedActions = {HttpMethod.POST, HttpMethod.DELETE, HttpMethod.PUT, HttpMethod.PATCH};
        disableHttpMethods(Book.class, config, unsupportedActions);

        // configure Cross-Origin Resource Sharing to allow requests from our React front-end running on port 3000
        cors.addMapping(config.getBasePath() + "/**")
                .allowedOrigins(allowedOrigins);
    }

    // This helper method disables the unsupported HTTP methods for a given entity type
    private void disableHttpMethods(Class<?> theClass, RepositoryRestConfiguration config, HttpMethod[] unsupportedActions) {
        config.getExposureConfiguration()
                .forDomainType(theClass)
                // disable HTTP methods for item exposure
                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedActions))
                // disable HTTP methods for collection exposure
                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedActions));
    }
}

