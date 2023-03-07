package com.elvisespinoza.springbootmylibrary.dao;

import com.elvisespinoza.springbootmylibrary.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {
}
