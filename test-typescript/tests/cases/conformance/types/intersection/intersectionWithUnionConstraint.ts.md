__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1272
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 3
                      },
                      "start": {
                        "column": 9,
                        "line": 3
                      }
                    },
                    "range": [
                      146,
                      163
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            148,
                            154
                          ],
                          "loc": {
                            "end": {
                              "column": 17,
                              "line": 3
                            },
                            "start": {
                              "column": 11,
                              "line": 3
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            157,
                            163
                          ],
                          "loc": {
                            "end": {
                              "column": 26,
                              "line": 3
                            },
                            "start": {
                              "column": 20,
                              "line": 3
                            }
                          }
                        }
                      ],
                      "range": [
                        148,
                        163
                      ],
                      "loc": {
                        "end": {
                          "column": 26,
                          "line": 3
                        },
                        "start": {
                          "column": 11,
                          "line": 3
                        }
                      }
                    }
                  },
                  "range": [
                    145,
                    163
                  ],
                  "loc": {
                    "end": {
                      "column": 26,
                      "line": 3
                    },
                    "start": {
                      "column": 8,
                      "line": 3
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    166,
                    167
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 3
                    },
                    "start": {
                      "column": 29,
                      "line": 3
                    }
                  }
                },
                "range": [
                  145,
                  167
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 3
                  },
                  "start": {
                    "column": 8,
                    "line": 3
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              141,
              168
            ],
            "loc": {
              "end": {
                "column": 31,
                "line": 3
              },
              "start": {
                "column": 4,
                "line": 3
              }
            }
          }
        ],
        "range": [
          76,
          170
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 4
          },
          "start": {
            "column": 76,
            "line": 1
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "range": [
          9,
          11
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 74,
                "line": 1
              },
              "start": {
                "column": 67,
                "line": 1
              }
            },
            "range": [
              67,
              74
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      69,
                      70
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 1
                      },
                      "start": {
                        "column": 69,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    69,
                    70
                  ],
                  "loc": {
                    "end": {
                      "column": 70,
                      "line": 1
                    },
                    "start": {
                      "column": 69,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      73,
                      74
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 1
                      },
                      "start": {
                        "column": 73,
                        "line": 1
                      }
                    }
                  },
                  "range": [
                    73,
                    74
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 1
                    },
                    "start": {
                      "column": 73,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                69,
                74
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 1
                },
                "start": {
                  "column": 69,
                  "line": 1
                }
              }
            }
          },
          "range": [
            66,
            74
          ],
          "loc": {
            "end": {
              "column": 74,
              "line": 1
            },
            "start": {
              "column": 66,
              "line": 1
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 65,
            "line": 1
          },
          "start": {
            "column": 11,
            "line": 1
          }
        },
        "range": [
          11,
          65
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    22,
                    28
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 1
                    },
                    "start": {
                      "column": 22,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    31,
                    37
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 1
                    },
                    "start": {
                      "column": 31,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                22,
                37
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                12,
                13
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              12,
              37
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 1
              },
              "start": {
                "column": 12,
                "line": 1
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    49,
                    55
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 1
                    },
                    "start": {
                      "column": 49,
                      "line": 1
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    58,
                    64
                  ],
                  "loc": {
                    "end": {
                      "column": 64,
                      "line": 1
                    },
                    "start": {
                      "column": 58,
                      "line": 1
                    }
                  }
                }
              ],
              "range": [
                49,
                64
              ],
              "loc": {
                "end": {
                  "column": 64,
                  "line": 1
                },
                "start": {
                  "column": 49,
                  "line": 1
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                39,
                40
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 1
                },
                "start": {
                  "column": 39,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              39,
              64
            ],
            "loc": {
              "end": {
                "column": 64,
                "line": 1
              },
              "start": {
                "column": 39,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        170
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 7
                      },
                      "start": {
                        "column": 10,
                        "line": 7
                      }
                    },
                    "range": [
                      282,
                      299
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            284,
                            290
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 7
                            },
                            "start": {
                              "column": 12,
                              "line": 7
                            }
                          }
                        },
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            293,
                            299
                          ],
                          "loc": {
                            "end": {
                              "column": 27,
                              "line": 7
                            },
                            "start": {
                              "column": 21,
                              "line": 7
                            }
                          }
                        }
                      ],
                      "range": [
                        284,
                        299
                      ],
                      "loc": {
                        "end": {
                          "column": 27,
                          "line": 7
                        },
                        "start": {
                          "column": 12,
                          "line": 7
                        }
                      }
                    }
                  },
                  "range": [
                    280,
                    299
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 7
                    },
                    "start": {
                      "column": 8,
                      "line": 7
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    302,
                    303
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 7
                    },
                    "start": {
                      "column": 30,
                      "line": 7
                    }
                  }
                },
                "range": [
                  280,
                  303
                ],
                "loc": {
                  "end": {
                    "column": 31,
                    "line": 7
                  },
                  "start": {
                    "column": 8,
                    "line": 7
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              276,
              304
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 7
              },
              "start": {
                "column": 4,
                "line": 7
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 8
                      },
                      "start": {
                        "column": 10,
                        "line": 8
                      }
                    },
                    "range": [
                      328,
                      343
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            330,
                            336
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 8
                            },
                            "start": {
                              "column": 12,
                              "line": 8
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            339,
                            343
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 8
                            },
                            "start": {
                              "column": 21,
                              "line": 8
                            }
                          }
                        }
                      ],
                      "range": [
                        330,
                        343
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 8
                        },
                        "start": {
                          "column": 12,
                          "line": 8
                        }
                      }
                    }
                  },
                  "range": [
                    326,
                    343
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 8
                    },
                    "start": {
                      "column": 8,
                      "line": 8
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    346,
                    347
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 8
                    },
                    "start": {
                      "column": 28,
                      "line": 8
                    }
                  }
                },
                "range": [
                  326,
                  347
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 8
                  },
                  "start": {
                    "column": 8,
                    "line": 8
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              322,
              348
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y3",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 9
                      },
                      "start": {
                        "column": 10,
                        "line": 9
                      }
                    },
                    "range": [
                      374,
                      394
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "range": [
                            376,
                            382
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 9
                            },
                            "start": {
                              "column": 12,
                              "line": 9
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            385,
                            394
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 9
                            },
                            "start": {
                              "column": 21,
                              "line": 9
                            }
                          }
                        }
                      ],
                      "range": [
                        376,
                        394
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 9
                        },
                        "start": {
                          "column": 12,
                          "line": 9
                        }
                      }
                    }
                  },
                  "range": [
                    372,
                    394
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 9
                    },
                    "start": {
                      "column": 8,
                      "line": 9
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    397,
                    398
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 9
                    },
                    "start": {
                      "column": 33,
                      "line": 9
                    }
                  }
                },
                "range": [
                  372,
                  398
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 9
                  },
                  "start": {
                    "column": 8,
                    "line": 9
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              368,
              399
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 9
              },
              "start": {
                "column": 4,
                "line": 9
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y4",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 25,
                        "line": 10
                      },
                      "start": {
                        "column": 10,
                        "line": 10
                      }
                    },
                    "range": [
                      410,
                      425
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            412,
                            418
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 10
                            },
                            "start": {
                              "column": 12,
                              "line": 10
                            }
                          }
                        },
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            421,
                            425
                          ],
                          "loc": {
                            "end": {
                              "column": 25,
                              "line": 10
                            },
                            "start": {
                              "column": 21,
                              "line": 10
                            }
                          }
                        }
                      ],
                      "range": [
                        412,
                        425
                      ],
                      "loc": {
                        "end": {
                          "column": 25,
                          "line": 10
                        },
                        "start": {
                          "column": 12,
                          "line": 10
                        }
                      }
                    }
                  },
                  "range": [
                    408,
                    425
                  ],
                  "loc": {
                    "end": {
                      "column": 25,
                      "line": 10
                    },
                    "start": {
                      "column": 8,
                      "line": 10
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    428,
                    429
                  ],
                  "loc": {
                    "end": {
                      "column": 29,
                      "line": 10
                    },
                    "start": {
                      "column": 28,
                      "line": 10
                    }
                  }
                },
                "range": [
                  408,
                  429
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 10
                  },
                  "start": {
                    "column": 8,
                    "line": 10
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              404,
              430
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 10
              },
              "start": {
                "column": 4,
                "line": 10
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y5",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 11
                      },
                      "start": {
                        "column": 10,
                        "line": 11
                      }
                    },
                    "range": [
                      456,
                      476
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            458,
                            464
                          ],
                          "loc": {
                            "end": {
                              "column": 18,
                              "line": 11
                            },
                            "start": {
                              "column": 12,
                              "line": 11
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            467,
                            476
                          ],
                          "loc": {
                            "end": {
                              "column": 30,
                              "line": 11
                            },
                            "start": {
                              "column": 21,
                              "line": 11
                            }
                          }
                        }
                      ],
                      "range": [
                        458,
                        476
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 11
                        },
                        "start": {
                          "column": 12,
                          "line": 11
                        }
                      }
                    }
                  },
                  "range": [
                    454,
                    476
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 11
                    },
                    "start": {
                      "column": 8,
                      "line": 11
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    479,
                    480
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 11
                    },
                    "start": {
                      "column": 33,
                      "line": 11
                    }
                  }
                },
                "range": [
                  454,
                  480
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 11
                  },
                  "start": {
                    "column": 8,
                    "line": 11
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              450,
              481
            ],
            "loc": {
              "end": {
                "column": 35,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y6",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 28,
                        "line": 12
                      },
                      "start": {
                        "column": 10,
                        "line": 12
                      }
                    },
                    "range": [
                      502,
                      520
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNullKeyword",
                          "range": [
                            504,
                            508
                          ],
                          "loc": {
                            "end": {
                              "column": 16,
                              "line": 12
                            },
                            "start": {
                              "column": 12,
                              "line": 12
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            511,
                            520
                          ],
                          "loc": {
                            "end": {
                              "column": 28,
                              "line": 12
                            },
                            "start": {
                              "column": 19,
                              "line": 12
                            }
                          }
                        }
                      ],
                      "range": [
                        504,
                        520
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 12
                        },
                        "start": {
                          "column": 12,
                          "line": 12
                        }
                      }
                    }
                  },
                  "range": [
                    500,
                    520
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 12
                    },
                    "start": {
                      "column": 8,
                      "line": 12
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    523,
                    524
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 12
                    },
                    "start": {
                      "column": 31,
                      "line": 12
                    }
                  }
                },
                "range": [
                  500,
                  524
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 12
                  },
                  "start": {
                    "column": 8,
                    "line": 12
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              496,
              525
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 12
              },
              "start": {
                "column": 4,
                "line": 12
              }
            }
          }
        ],
        "range": [
          270,
          539
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 13
          },
          "start": {
            "column": 98,
            "line": 6
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "range": [
          181,
          183
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 96,
                "line": 6
              },
              "start": {
                "column": 89,
                "line": 6
              }
            },
            "range": [
              261,
              268
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      263,
                      264
                    ],
                    "loc": {
                      "end": {
                        "column": 92,
                        "line": 6
                      },
                      "start": {
                        "column": 91,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    263,
                    264
                  ],
                  "loc": {
                    "end": {
                      "column": 92,
                      "line": 6
                    },
                    "start": {
                      "column": 91,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      267,
                      268
                    ],
                    "loc": {
                      "end": {
                        "column": 96,
                        "line": 6
                      },
                      "start": {
                        "column": 95,
                        "line": 6
                      }
                    }
                  },
                  "range": [
                    267,
                    268
                  ],
                  "loc": {
                    "end": {
                      "column": 96,
                      "line": 6
                    },
                    "start": {
                      "column": 95,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                263,
                268
              ],
              "loc": {
                "end": {
                  "column": 96,
                  "line": 6
                },
                "start": {
                  "column": 91,
                  "line": 6
                }
              }
            }
          },
          "range": [
            260,
            268
          ],
          "loc": {
            "end": {
              "column": 96,
              "line": 6
            },
            "start": {
              "column": 88,
              "line": 6
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 87,
            "line": 6
          },
          "start": {
            "column": 11,
            "line": 6
          }
        },
        "range": [
          183,
          259
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    194,
                    200
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 6
                    },
                    "start": {
                      "column": 22,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    203,
                    209
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 6
                    },
                    "start": {
                      "column": 31,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    212,
                    221
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 6
                    },
                    "start": {
                      "column": 40,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                194,
                221
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 6
                },
                "start": {
                  "column": 22,
                  "line": 6
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                184,
                185
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 6
                },
                "start": {
                  "column": 12,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              184,
              221
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 6
              },
              "start": {
                "column": 12,
                "line": 6
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    233,
                    239
                  ],
                  "loc": {
                    "end": {
                      "column": 67,
                      "line": 6
                    },
                    "start": {
                      "column": 61,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "range": [
                    242,
                    246
                  ],
                  "loc": {
                    "end": {
                      "column": 74,
                      "line": 6
                    },
                    "start": {
                      "column": 70,
                      "line": 6
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    249,
                    258
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 6
                    },
                    "start": {
                      "column": 77,
                      "line": 6
                    }
                  }
                }
              ],
              "range": [
                233,
                258
              ],
              "loc": {
                "end": {
                  "column": 86,
                  "line": 6
                },
                "start": {
                  "column": 61,
                  "line": 6
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                223,
                224
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 6
                },
                "start": {
                  "column": 51,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              223,
              258
            ],
            "loc": {
              "end": {
                "column": 86,
                "line": 6
              },
              "start": {
                "column": 51,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        172,
        539
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T1",
        "optional": false,
        "range": [
          546,
          548
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "range": [
                  552,
                  558
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 15
                  },
                  "start": {
                    "column": 11,
                    "line": 15
                  }
                }
              },
              {
                "type": "TSNumberKeyword",
                "range": [
                  561,
                  567
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 15
                  },
                  "start": {
                    "column": 20,
                    "line": 15
                  }
                }
              },
              {
                "type": "TSUndefinedKeyword",
                "range": [
                  570,
                  579
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 15
                  },
                  "start": {
                    "column": 29,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              552,
              579
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 15
              },
              "start": {
                "column": 11,
                "line": 15
              }
            }
          },
          {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "range": [
                  584,
                  590
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 15
                  },
                  "start": {
                    "column": 43,
                    "line": 15
                  }
                }
              },
              {
                "type": "TSNullKeyword",
                "range": [
                  593,
                  597
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 15
                  },
                  "start": {
                    "column": 52,
                    "line": 15
                  }
                }
              },
              {
                "type": "TSUndefinedKeyword",
                "range": [
                  600,
                  609
                ],
                "loc": {
                  "end": {
                    "column": 68,
                    "line": 15
                  },
                  "start": {
                    "column": 59,
                    "line": 15
                  }
                }
              }
            ],
            "range": [
              584,
              609
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 15
              },
              "start": {
                "column": 43,
                "line": 15
              }
            }
          }
        ],
        "range": [
          551,
          610
        ],
        "loc": {
          "end": {
            "column": 69,
            "line": 15
          },
          "start": {
            "column": 10,
            "line": 15
          }
        }
      },
      "range": [
        541,
        611
      ],
      "loc": {
        "end": {
          "column": 70,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 31,
                        "line": 18
                      },
                      "start": {
                        "column": 11,
                        "line": 18
                      }
                    },
                    "range": [
                      738,
                      758
                    ],
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "range": [
                            740,
                            746
                          ],
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 18
                            },
                            "start": {
                              "column": 13,
                              "line": 18
                            }
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "range": [
                            749,
                            758
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 18
                            },
                            "start": {
                              "column": 22,
                              "line": 18
                            }
                          }
                        }
                      ],
                      "range": [
                        740,
                        758
                      ],
                      "loc": {
                        "end": {
                          "column": 31,
                          "line": 18
                        },
                        "start": {
                          "column": 13,
                          "line": 18
                        }
                      }
                    }
                  },
                  "range": [
                    737,
                    758
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 18
                    },
                    "start": {
                      "column": 10,
                      "line": 18
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    761,
                    762
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 18
                    },
                    "start": {
                      "column": 34,
                      "line": 18
                    }
                  }
                },
                "range": [
                  737,
                  762
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 18
                  },
                  "start": {
                    "column": 10,
                    "line": 18
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              731,
              763
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          }
        ],
        "range": [
          725,
          765
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 19
          },
          "start": {
            "column": 89,
            "line": 17
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "range": [
          645,
          647
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 17
          },
          "start": {
            "column": 9,
            "line": 17
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 87,
                "line": 17
              },
              "start": {
                "column": 52,
                "line": 17
              }
            },
            "range": [
              688,
              723
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      690,
                      691
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 17
                      },
                      "start": {
                        "column": 54,
                        "line": 17
                      }
                    }
                  },
                  "range": [
                    690,
                    691
                  ],
                  "loc": {
                    "end": {
                      "column": 55,
                      "line": 17
                    },
                    "start": {
                      "column": 54,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        695,
                        701
                      ],
                      "loc": {
                        "end": {
                          "column": 65,
                          "line": 17
                        },
                        "start": {
                          "column": 59,
                          "line": 17
                        }
                      }
                    },
                    {
                      "type": "TSObjectKeyword",
                      "range": [
                        704,
                        710
                      ],
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 17
                        },
                        "start": {
                          "column": 68,
                          "line": 17
                        }
                      }
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "range": [
                        713,
                        722
                      ],
                      "loc": {
                        "end": {
                          "column": 86,
                          "line": 17
                        },
                        "start": {
                          "column": 77,
                          "line": 17
                        }
                      }
                    }
                  ],
                  "range": [
                    695,
                    722
                  ],
                  "loc": {
                    "end": {
                      "column": 86,
                      "line": 17
                    },
                    "start": {
                      "column": 59,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                690,
                723
              ],
              "loc": {
                "end": {
                  "column": 87,
                  "line": 17
                },
                "start": {
                  "column": 54,
                  "line": 17
                }
              }
            }
          },
          "range": [
            687,
            723
          ],
          "loc": {
            "end": {
              "column": 87,
              "line": 17
            },
            "start": {
              "column": 51,
              "line": 17
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 50,
            "line": 17
          },
          "start": {
            "column": 11,
            "line": 17
          }
        },
        "range": [
          647,
          686
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    658,
                    664
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 17
                    },
                    "start": {
                      "column": 22,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    667,
                    673
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 17
                    },
                    "start": {
                      "column": 31,
                      "line": 17
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    676,
                    685
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 17
                    },
                    "start": {
                      "column": 40,
                      "line": 17
                    }
                  }
                }
              ],
              "range": [
                658,
                685
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 17
                },
                "start": {
                  "column": 22,
                  "line": 17
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                648,
                649
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 17
                },
                "start": {
                  "column": 12,
                  "line": 17
                }
              }
            },
            "out": false,
            "range": [
              648,
              685
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 17
              },
              "start": {
                "column": 12,
                "line": 17
              }
            }
          }
        ]
      },
      "range": [
        636,
        765
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 22
                      },
                      "start": {
                        "column": 11,
                        "line": 22
                      }
                    },
                    "range": [
                      845,
                      853
                    ],
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "range": [
                        847,
                        853
                      ],
                      "loc": {
                        "end": {
                          "column": 19,
                          "line": 22
                        },
                        "start": {
                          "column": 13,
                          "line": 22
                        }
                      }
                    }
                  },
                  "range": [
                    844,
                    853
                  ],
                  "loc": {
                    "end": {
                      "column": 19,
                      "line": 22
                    },
                    "start": {
                      "column": 10,
                      "line": 22
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    856,
                    857
                  ],
                  "loc": {
                    "end": {
                      "column": 23,
                      "line": 22
                    },
                    "start": {
                      "column": 22,
                      "line": 22
                    }
                  }
                },
                "range": [
                  844,
                  857
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 22
                  },
                  "start": {
                    "column": 10,
                    "line": 22
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const",
            "range": [
              838,
              858
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 22
              },
              "start": {
                "column": 4,
                "line": 22
              }
            }
          }
        ],
        "range": [
          832,
          860
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 23
          },
          "start": {
            "column": 65,
            "line": 21
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "range": [
          776,
          778
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 21
          },
          "start": {
            "column": 9,
            "line": 21
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 63,
                "line": 21
              },
              "start": {
                "column": 40,
                "line": 21
              }
            },
            "range": [
              807,
              830
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "range": [
                      809,
                      810
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 21
                      },
                      "start": {
                        "column": 42,
                        "line": 21
                      }
                    }
                  },
                  "range": [
                    809,
                    810
                  ],
                  "loc": {
                    "end": {
                      "column": 43,
                      "line": 21
                    },
                    "start": {
                      "column": 42,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "range": [
                        814,
                        820
                      ],
                      "loc": {
                        "end": {
                          "column": 53,
                          "line": 21
                        },
                        "start": {
                          "column": 47,
                          "line": 21
                        }
                      }
                    },
                    {
                      "type": "TSObjectKeyword",
                      "range": [
                        823,
                        829
                      ],
                      "loc": {
                        "end": {
                          "column": 62,
                          "line": 21
                        },
                        "start": {
                          "column": 56,
                          "line": 21
                        }
                      }
                    }
                  ],
                  "range": [
                    814,
                    829
                  ],
                  "loc": {
                    "end": {
                      "column": 62,
                      "line": 21
                    },
                    "start": {
                      "column": 47,
                      "line": 21
                    }
                  }
                }
              ],
              "range": [
                809,
                830
              ],
              "loc": {
                "end": {
                  "column": 63,
                  "line": 21
                },
                "start": {
                  "column": 42,
                  "line": 21
                }
              }
            }
          },
          "range": [
            806,
            830
          ],
          "loc": {
            "end": {
              "column": 63,
              "line": 21
            },
            "start": {
              "column": 39,
              "line": 21
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 38,
            "line": 21
          },
          "start": {
            "column": 11,
            "line": 21
          }
        },
        "range": [
          778,
          805
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "range": [
                    789,
                    795
                  ],
                  "loc": {
                    "end": {
                      "column": 28,
                      "line": 21
                    },
                    "start": {
                      "column": 22,
                      "line": 21
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "range": [
                    798,
                    804
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 21
                    },
                    "start": {
                      "column": 31,
                      "line": 21
                    }
                  }
                }
              ],
              "range": [
                789,
                804
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 21
                },
                "start": {
                  "column": 22,
                  "line": 21
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                779,
                780
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 21
                },
                "start": {
                  "column": 12,
                  "line": 21
                }
              }
            },
            "out": false,
            "range": [
              779,
              804
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 21
              },
              "start": {
                "column": 12,
                "line": 21
              }
            }
          }
        ]
      },
      "range": [
        767,
        860
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 21
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 20,
                        "line": 26
                      },
                      "start": {
                        "column": 9,
                        "line": 26
                      }
                    },
                    "range": [
                      923,
                      934
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "range": [
                          931,
                          934
                        ],
                        "loc": {
                          "end": {
                            "column": 20,
                            "line": 26
                          },
                          "start": {
                            "column": 17,
                            "line": 26
                          }
                        }
                      },
                      "range": [
                        925,
                        934
                      ],
                      "loc": {
                        "end": {
                          "column": 20,
                          "line": 26
                        },
                        "start": {
                          "column": 11,
                          "line": 26
                        }
                      }
                    }
                  },
                  "range": [
                    922,
                    934
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 26
                    },
                    "start": {
                      "column": 8,
                      "line": 26
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "range": [
                    937,
                    938
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 26
                    },
                    "start": {
                      "column": 23,
                      "line": 26
                    }
                  }
                },
                "range": [
                  922,
                  938
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 26
                  },
                  "start": {
                    "column": 8,
                    "line": 26
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let",
            "range": [
              918,
              939
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 26
              },
              "start": {
                "column": 4,
                "line": 26
              }
            }
          }
        ],
        "range": [
          912,
          941
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 27
          },
          "start": {
            "column": 50,
            "line": 25
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "range": [
          871,
          873
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 25
          },
          "start": {
            "column": 9,
            "line": 25
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 25
              },
              "start": {
                "column": 35,
                "line": 25
              }
            },
            "range": [
              897,
              910
            ],
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        905,
                        906
                      ],
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 25
                        },
                        "start": {
                          "column": 43,
                          "line": 25
                        }
                      }
                    },
                    "range": [
                      905,
                      906
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 25
                      },
                      "start": {
                        "column": 43,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    899,
                    906
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 25
                    },
                    "start": {
                      "column": 37,
                      "line": 25
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      909,
                      910
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 25
                      },
                      "start": {
                        "column": 47,
                        "line": 25
                      }
                    }
                  },
                  "range": [
                    909,
                    910
                  ],
                  "loc": {
                    "end": {
                      "column": 48,
                      "line": 25
                    },
                    "start": {
                      "column": 47,
                      "line": 25
                    }
                  }
                }
              ],
              "range": [
                899,
                910
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 25
                },
                "start": {
                  "column": 37,
                  "line": 25
                }
              }
            }
          },
          "range": [
            896,
            910
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 25
            },
            "start": {
              "column": 34,
              "line": 25
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 33,
            "line": 25
          },
          "start": {
            "column": 11,
            "line": 25
          }
        },
        "range": [
          873,
          895
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                874,
                875
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 25
                },
                "start": {
                  "column": 12,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              874,
              875
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 25
              },
              "start": {
                "column": 12,
                "line": 25
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    893,
                    894
                  ],
                  "loc": {
                    "end": {
                      "column": 32,
                      "line": 25
                    },
                    "start": {
                      "column": 31,
                      "line": 25
                    }
                  }
                },
                "range": [
                  893,
                  894
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 25
                  },
                  "start": {
                    "column": 31,
                    "line": 25
                  }
                }
              },
              "range": [
                887,
                894
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 25
                },
                "start": {
                  "column": 25,
                  "line": 25
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                877,
                878
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 25
                },
                "start": {
                  "column": 15,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              877,
              894
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 25
              },
              "start": {
                "column": 15,
                "line": 25
              }
            }
          }
        ]
      },
      "range": [
        862,
        941
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 25
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example",
        "optional": false,
        "range": [
          970,
          977
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 31
          },
          "start": {
            "column": 5,
            "line": 31
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1000,
                1001
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 31
                },
                "start": {
                  "column": 35,
                  "line": 31
                }
              }
            },
            "range": [
              1000,
              1001
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 31
              },
              "start": {
                "column": 35,
                "line": 31
              }
            }
          },
          "range": [
            994,
            1001
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 31
            },
            "start": {
              "column": 29,
              "line": 31
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            989,
            990
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 31
            },
            "start": {
              "column": 24,
              "line": 31
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "range": [
                1004,
                1005
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 31
                },
                "start": {
                  "column": 39,
                  "line": 31
                }
              }
            },
            "range": [
              1004,
              1005
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 31
              },
              "start": {
                "column": 39,
                "line": 31
              }
            }
          },
          "extendsType": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "range": [
                  1020,
                  1021
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 31
                  },
                  "start": {
                    "column": 55,
                    "line": 31
                  }
                }
              },
              "range": [
                1020,
                1021
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 31
                },
                "start": {
                  "column": 55,
                  "line": 31
                }
              }
            },
            "range": [
              1014,
              1021
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 31
              },
              "start": {
                "column": 49,
                "line": 31
              }
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1056,
                1059
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      1057,
                      1058
                    ],
                    "loc": {
                      "end": {
                        "column": 93,
                        "line": 31
                      },
                      "start": {
                        "column": 92,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    1057,
                    1058
                  ],
                  "loc": {
                    "end": {
                      "column": 93,
                      "line": 31
                    },
                    "start": {
                      "column": 92,
                      "line": 31
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 94,
                  "line": 31
                },
                "start": {
                  "column": 91,
                  "line": 31
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "NoErrorHere",
              "optional": false,
              "range": [
                1045,
                1056
              ],
              "loc": {
                "end": {
                  "column": 91,
                  "line": 31
                },
                "start": {
                  "column": 80,
                  "line": 31
                }
              }
            },
            "range": [
              1045,
              1059
            ],
            "loc": {
              "end": {
                "column": 94,
                "line": 31
              },
              "start": {
                "column": 80,
                "line": 31
              }
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                1039,
                1042
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "range": [
                      1040,
                      1041
                    ],
                    "loc": {
                      "end": {
                        "column": 76,
                        "line": 31
                      },
                      "start": {
                        "column": 75,
                        "line": 31
                      }
                    }
                  },
                  "range": [
                    1040,
                    1041
                  ],
                  "loc": {
                    "end": {
                      "column": 76,
                      "line": 31
                    },
                    "start": {
                      "column": 75,
                      "line": 31
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 77,
                  "line": 31
                },
                "start": {
                  "column": 74,
                  "line": 31
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "UnexpectedError",
              "optional": false,
              "range": [
                1024,
                1039
              ],
              "loc": {
                "end": {
                  "column": 74,
                  "line": 31
                },
                "start": {
                  "column": 59,
                  "line": 31
                }
              }
            },
            "range": [
              1024,
              1042
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 31
              },
              "start": {
                "column": 59,
                "line": 31
              }
            }
          },
          "range": [
            1004,
            1059
          ],
          "loc": {
            "end": {
              "column": 94,
              "line": 31
            },
            "start": {
              "column": 39,
              "line": 31
            }
          }
        },
        "range": [
          986,
          1061
        ],
        "loc": {
          "end": {
            "column": 96,
            "line": 31
          },
          "start": {
            "column": 21,
            "line": 31
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 18,
            "line": 31
          },
          "start": {
            "column": 12,
            "line": 31
          }
        },
        "range": [
          977,
          983
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                978,
                979
              ],
              "loc": {
                "end": {
                  "column": 14,
                  "line": 31
                },
                "start": {
                  "column": 13,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              978,
              979
            ],
            "loc": {
              "end": {
                "column": 14,
                "line": 31
              },
              "start": {
                "column": 13,
                "line": 31
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "range": [
                981,
                982
              ],
              "loc": {
                "end": {
                  "column": 17,
                  "line": 31
                },
                "start": {
                  "column": 16,
                  "line": 31
                }
              }
            },
            "out": false,
            "range": [
              981,
              982
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 31
              },
              "start": {
                "column": 16,
                "line": 31
              }
            }
          }
        ]
      },
      "range": [
        965,
        1061
      ],
      "loc": {
        "end": {
          "column": 96,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UnexpectedError",
        "optional": false,
        "range": [
          1068,
          1083
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 33
          },
          "start": {
            "column": 5,
            "line": 33
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "range": [
            1109,
            1110
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 33
            },
            "start": {
              "column": 46,
              "line": 33
            }
          }
        },
        "range": [
          1109,
          1110
        ],
        "loc": {
          "end": {
            "column": 47,
            "line": 33
          },
          "start": {
            "column": 46,
            "line": 33
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 43,
            "line": 33
          },
          "start": {
            "column": 20,
            "line": 33
          }
        },
        "range": [
          1083,
          1106
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyKey",
                "optional": false,
                "range": [
                  1094,
                  1105
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 33
                  },
                  "start": {
                    "column": 31,
                    "line": 33
                  }
                }
              },
              "range": [
                1094,
                1105
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 33
                },
                "start": {
                  "column": 31,
                  "line": 33
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1084,
                1085
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 33
                },
                "start": {
                  "column": 21,
                  "line": 33
                }
              }
            },
            "out": false,
            "range": [
              1084,
              1105
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 33
              },
              "start": {
                "column": 21,
                "line": 33
              }
            }
          }
        ]
      },
      "range": [
        1063,
        1110
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 33
        },
        "start": {
          "column": 0,
          "line": 33
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoErrorHere",
        "optional": false,
        "range": [
          1116,
          1127
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 34
          },
          "start": {
            "column": 5,
            "line": 34
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "range": [
            1153,
            1154
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 34
            },
            "start": {
              "column": 42,
              "line": 34
            }
          }
        },
        "range": [
          1153,
          1154
        ],
        "loc": {
          "end": {
            "column": 43,
            "line": 34
          },
          "start": {
            "column": 42,
            "line": 34
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 39,
            "line": 34
          },
          "start": {
            "column": 16,
            "line": 34
          }
        },
        "range": [
          1127,
          1150
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PropertyKey",
                "optional": false,
                "range": [
                  1138,
                  1149
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 34
                  },
                  "start": {
                    "column": 27,
                    "line": 34
                  }
                }
              },
              "range": [
                1138,
                1149
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 34
                },
                "start": {
                  "column": 27,
                  "line": 34
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1128,
                1129
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 34
                },
                "start": {
                  "column": 17,
                  "line": 34
                }
              }
            },
            "out": false,
            "range": [
              1128,
              1149
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 34
              },
              "start": {
                "column": 17,
                "line": 34
              }
            }
          }
        ]
      },
      "range": [
        1111,
        1154
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 34
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "range": [
          1183,
          1184
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 38
          },
          "start": {
            "column": 5,
            "line": 38
          }
        }
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "range": [
              1190,
              1191
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 38
              },
              "start": {
                "column": 12,
                "line": 38
              }
            }
          },
          "range": [
            1190,
            1191
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 38
            },
            "start": {
              "column": 12,
              "line": 38
            }
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              1205,
              1214
            ],
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      1212,
                      1213
                    ],
                    "loc": {
                      "end": {
                        "column": 35,
                        "line": 38
                      },
                      "start": {
                        "column": 34,
                        "line": 38
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    1212,
                    1213
                  ],
                  "loc": {
                    "end": {
                      "column": 35,
                      "line": 38
                    },
                    "start": {
                      "column": 34,
                      "line": 38
                    }
                  }
                },
                "range": [
                  1206,
                  1213
                ],
                "loc": {
                  "end": {
                    "column": 35,
                    "line": 38
                  },
                  "start": {
                    "column": 28,
                    "line": 38
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 38
              },
              "start": {
                "column": 27,
                "line": 38
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "range": [
              1200,
              1205
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 38
              },
              "start": {
                "column": 22,
                "line": 38
              }
            }
          },
          "range": [
            1200,
            1214
          ],
          "loc": {
            "end": {
              "column": 36,
              "line": 38
            },
            "start": {
              "column": 22,
              "line": 38
            }
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "range": [
            1221,
            1226
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 38
            },
            "start": {
              "column": 43,
              "line": 38
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "U",
            "optional": false,
            "range": [
              1217,
              1218
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 38
              },
              "start": {
                "column": 39,
                "line": 38
              }
            }
          },
          "range": [
            1217,
            1218
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 38
            },
            "start": {
              "column": 39,
              "line": 38
            }
          }
        },
        "range": [
          1190,
          1226
        ],
        "loc": {
          "end": {
            "column": 48,
            "line": 38
          },
          "start": {
            "column": 12,
            "line": 38
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 38
          },
          "start": {
            "column": 6,
            "line": 38
          }
        },
        "range": [
          1184,
          1187
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1185,
                1186
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 38
                },
                "start": {
                  "column": 7,
                  "line": 38
                }
              }
            },
            "out": false,
            "range": [
              1185,
              1186
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 38
              },
              "start": {
                "column": 7,
                "line": 38
              }
            }
          }
        ]
      },
      "range": [
        1178,
        1227
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "range": [
          1233,
          1234
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 39
          },
          "start": {
            "column": 5,
            "line": 39
          }
        }
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "constraint": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  1249,
                  1252
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "range": [
                        1250,
                        1251
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 39
                        },
                        "start": {
                          "column": 22,
                          "line": 39
                        }
                      }
                    },
                    "range": [
                      1250,
                      1251
                    ],
                    "loc": {
                      "end": {
                        "column": 23,
                        "line": 39
                      },
                      "start": {
                        "column": 22,
                        "line": 39
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 39
                  },
                  "start": {
                    "column": 21,
                    "line": 39
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "range": [
                  1248,
                  1249
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 39
                  },
                  "start": {
                    "column": 20,
                    "line": 39
                  }
                }
              },
              "range": [
                1248,
                1252
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 39
                },
                "start": {
                  "column": 20,
                  "line": 39
                }
              }
            },
            {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "range": [
                    1261,
                    1262
                  ],
                  "loc": {
                    "end": {
                      "column": 34,
                      "line": 39
                    },
                    "start": {
                      "column": 33,
                      "line": 39
                    }
                  }
                },
                "range": [
                  1261,
                  1262
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 39
                  },
                  "start": {
                    "column": 33,
                    "line": 39
                  }
                }
              },
              "range": [
                1255,
                1262
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 39
                },
                "start": {
                  "column": 27,
                  "line": 39
                }
              }
            }
          ],
          "range": [
            1248,
            1262
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 39
            },
            "start": {
              "column": 20,
              "line": 39
            }
          }
        },
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "range": [
            1243,
            1244
          ],
          "loc": {
            "end": {
              "column": 16,
              "line": 39
            },
            "start": {
              "column": 15,
              "line": 39
            }
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "raw": "42",
            "value": 42,
            "range": [
              1266,
              1268
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 39
              },
              "start": {
                "column": 38,
                "line": 39
              }
            }
          },
          "range": [
            1266,
            1268
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 39
            },
            "start": {
              "column": 38,
              "line": 39
            }
          }
        },
        "range": [
          1240,
          1270
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 39
          },
          "start": {
            "column": 12,
            "line": 39
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 9,
            "line": 39
          },
          "start": {
            "column": 6,
            "line": 39
          }
        },
        "range": [
          1234,
          1237
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "range": [
                1235,
                1236
              ],
              "loc": {
                "end": {
                  "column": 8,
                  "line": 39
                },
                "start": {
                  "column": 7,
                  "line": 39
                }
              }
            },
            "out": false,
            "range": [
              1235,
              1236
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 39
              },
              "start": {
                "column": 7,
                "line": 39
              }
            }
          }
        ]
      },
      "range": [
        1228,
        1271
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 40
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
