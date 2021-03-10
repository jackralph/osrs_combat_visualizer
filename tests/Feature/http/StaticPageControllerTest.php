<?php

namespace Tests\Feature\http;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class StaticPageControllerTest extends TestCase
{
    /**
     * @test
     */
    public function visits_index_page()
    {
        $this->get('/')
            ->assertStatus(200)
            ->assertViewIs('index');
    }
}
