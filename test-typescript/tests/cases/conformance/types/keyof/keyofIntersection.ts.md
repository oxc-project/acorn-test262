__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    945
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "range": [
          5,
          6
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                11,
                12
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 1
                },
                "start": {
                  "column": 11,
                  "line": 1
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 1
                },
                "start": {
                  "column": 12,
                  "line": 1
                }
              },
              "range": [
                12,
                20
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  14,
                  20
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 1
                  },
                  "start": {
                    "column": 14,
                    "line": 1
                  }
                }
              }
            },
            "range": [
              11,
              20
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 1
              },
              "start": {
                "column": 11,
                "line": 1
              }
            }
          }
        ],
        "range": [
          9,
          22
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "range": [
        0,
        23
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 1
        },
        "start": {
          "column": 0,
          "line": 1
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "range": [
          29,
          30
        ],
        "loc": {
          "end": {
            "column": 6,
            "line": 2
          },
          "start": {
            "column": 5,
            "line": 2
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "range": [
                35,
                36
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 20,
                  "line": 2
                },
                "start": {
                  "column": 12,
                  "line": 2
                }
              },
              "range": [
                36,
                44
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  38,
                  44
                ],
                "loc": {
                  "end": {
                    "column": 20,
                    "line": 2
                  },
                  "start": {
                    "column": 14,
                    "line": 2
                  }
                }
              }
            },
            "range": [
              35,
              44
            ],
            "loc": {
              "end": {
                "column": 20,
                "line": 2
              },
              "start": {
                "column": 11,
                "line": 2
              }
            }
          }
        ],
        "range": [
          33,
          46
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 2
          },
          "start": {
            "column": 9,
            "line": 2
          }
        }
      },
      "range": [
        24,
        47
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 2
        },
        "start": {
          "column": 0,
          "line": 2
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T01",
        "optional": false,
        "range": [
          54,
          57
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 4
          },
          "start": {
            "column": 5,
            "line": 4
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  67,
                  68
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 4
                  },
                  "start": {
                    "column": 18,
                    "line": 4
                  }
                }
              },
              "range": [
                67,
                68
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 4
                },
                "start": {
                  "column": 18,
                  "line": 4
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  71,
                  72
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 4
                  },
                  "start": {
                    "column": 22,
                    "line": 4
                  }
                }
              },
              "range": [
                71,
                72
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 4
                },
                "start": {
                  "column": 22,
                  "line": 4
                }
              }
            }
          ],
          "range": [
            67,
            72
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 4
            },
            "start": {
              "column": 18,
              "line": 4
            }
          }
        },
        "range": [
          60,
          73
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 4
          },
          "start": {
            "column": 11,
            "line": 4
          }
        }
      },
      "range": [
        49,
        74
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T02",
        "optional": false,
        "range": [
          94,
          97
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                  110,
                  111
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 5
                  },
                  "start": {
                    "column": 21,
                    "line": 5
                  }
                }
              },
              "range": [
                110,
                111
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 5
                },
                "start": {
                  "column": 21,
                  "line": 5
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  114,
                  115
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 5
                  },
                  "start": {
                    "column": 25,
                    "line": 5
                  }
                }
              },
              "range": [
                114,
                115
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 5
                },
                "start": {
                  "column": 25,
                  "line": 5
                }
              }
            }
          ],
          "range": [
            110,
            115
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 5
            },
            "start": {
              "column": 21,
              "line": 5
            }
          }
        },
        "range": [
          103,
          116
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 5
          },
          "start": {
            "column": 14,
            "line": 5
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 5
          },
          "start": {
            "column": 8,
            "line": 5
          }
        },
        "range": [
          97,
          100
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
                98,
                99
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 5
                },
                "start": {
                  "column": 9,
                  "line": 5
                }
              }
            },
            "out": false,
            "range": [
              98,
              99
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 5
              },
              "start": {
                "column": 9,
                "line": 5
              }
            }
          }
        ]
      },
      "range": [
        89,
        117
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T03",
        "optional": false,
        "range": [
          141,
          144
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  157,
                  158
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 6
                  },
                  "start": {
                    "column": 21,
                    "line": 6
                  }
                }
              },
              "range": [
                157,
                158
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 6
                },
                "start": {
                  "column": 21,
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
                  161,
                  162
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 6
                  },
                  "start": {
                    "column": 25,
                    "line": 6
                  }
                }
              },
              "range": [
                161,
                162
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 6
                },
                "start": {
                  "column": 25,
                  "line": 6
                }
              }
            }
          ],
          "range": [
            157,
            162
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 6
            },
            "start": {
              "column": 21,
              "line": 6
            }
          }
        },
        "range": [
          150,
          163
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 6
          },
          "start": {
            "column": 14,
            "line": 6
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 11,
            "line": 6
          },
          "start": {
            "column": 8,
            "line": 6
          }
        },
        "range": [
          144,
          147
        ],
        "params": [
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
                145,
                146
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 6
                },
                "start": {
                  "column": 9,
                  "line": 6
                }
              }
            },
            "out": false,
            "range": [
              145,
              146
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 6
              },
              "start": {
                "column": 9,
                "line": 6
              }
            }
          }
        ]
      },
      "range": [
        136,
        164
      ],
      "loc": {
        "end": {
          "column": 28,
          "line": 6
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
        "name": "T04",
        "optional": false,
        "range": [
          188,
          191
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                  207,
                  208
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 7
                  },
                  "start": {
                    "column": 24,
                    "line": 7
                  }
                }
              },
              "range": [
                207,
                208
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 7
                },
                "start": {
                  "column": 24,
                  "line": 7
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
                  211,
                  212
                ],
                "loc": {
                  "end": {
                    "column": 29,
                    "line": 7
                  },
                  "start": {
                    "column": 28,
                    "line": 7
                  }
                }
              },
              "range": [
                211,
                212
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 7
                },
                "start": {
                  "column": 28,
                  "line": 7
                }
              }
            }
          ],
          "range": [
            207,
            212
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 7
            },
            "start": {
              "column": 24,
              "line": 7
            }
          }
        },
        "range": [
          200,
          213
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 14,
            "line": 7
          },
          "start": {
            "column": 8,
            "line": 7
          }
        },
        "range": [
          191,
          197
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
                192,
                193
              ],
              "loc": {
                "end": {
                  "column": 10,
                  "line": 7
                },
                "start": {
                  "column": 9,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              192,
              193
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 7
              },
              "start": {
                "column": 9,
                "line": 7
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
                195,
                196
              ],
              "loc": {
                "end": {
                  "column": 13,
                  "line": 7
                },
                "start": {
                  "column": 12,
                  "line": 7
                }
              }
            },
            "out": false,
            "range": [
              195,
              196
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 7
              },
              "start": {
                "column": 12,
                "line": 7
              }
            }
          }
        ]
      },
      "range": [
        183,
        214
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 7
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T05",
        "optional": false,
        "range": [
          242,
          245
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 8
          },
          "start": {
            "column": 5,
            "line": 8
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            251,
            254
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  252,
                  253
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 8
                  },
                  "start": {
                    "column": 15,
                    "line": 8
                  }
                }
              },
              "range": [
                252,
                253
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 8
                },
                "start": {
                  "column": 15,
                  "line": 8
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 8
            },
            "start": {
              "column": 14,
              "line": 8
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T02",
          "optional": false,
          "range": [
            248,
            251
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 8
            },
            "start": {
              "column": 11,
              "line": 8
            }
          }
        },
        "range": [
          248,
          254
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 8
          },
          "start": {
            "column": 11,
            "line": 8
          }
        }
      },
      "range": [
        237,
        255
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T06",
        "optional": false,
        "range": [
          275,
          278
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 9
          },
          "start": {
            "column": 5,
            "line": 9
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            284,
            287
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  285,
                  286
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 9
                  },
                  "start": {
                    "column": 15,
                    "line": 9
                  }
                }
              },
              "range": [
                285,
                286
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 9
                },
                "start": {
                  "column": 15,
                  "line": 9
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 17,
              "line": 9
            },
            "start": {
              "column": 14,
              "line": 9
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T03",
          "optional": false,
          "range": [
            281,
            284
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 9
            },
            "start": {
              "column": 11,
              "line": 9
            }
          }
        },
        "range": [
          281,
          287
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 9
          },
          "start": {
            "column": 11,
            "line": 9
          }
        }
      },
      "range": [
        270,
        288
      ],
      "loc": {
        "end": {
          "column": 18,
          "line": 9
        },
        "start": {
          "column": 0,
          "line": 9
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T07",
        "optional": false,
        "range": [
          308,
          311
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 10
          },
          "start": {
            "column": 5,
            "line": 10
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            317,
            323
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  318,
                  319
                ],
                "loc": {
                  "end": {
                    "column": 16,
                    "line": 10
                  },
                  "start": {
                    "column": 15,
                    "line": 10
                  }
                }
              },
              "range": [
                318,
                319
              ],
              "loc": {
                "end": {
                  "column": 16,
                  "line": 10
                },
                "start": {
                  "column": 15,
                  "line": 10
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "range": [
                  321,
                  322
                ],
                "loc": {
                  "end": {
                    "column": 19,
                    "line": 10
                  },
                  "start": {
                    "column": 18,
                    "line": 10
                  }
                }
              },
              "range": [
                321,
                322
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 10
                },
                "start": {
                  "column": 18,
                  "line": 10
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 20,
              "line": 10
            },
            "start": {
              "column": 14,
              "line": 10
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T04",
          "optional": false,
          "range": [
            314,
            317
          ],
          "loc": {
            "end": {
              "column": 14,
              "line": 10
            },
            "start": {
              "column": 11,
              "line": 10
            }
          }
        },
        "range": [
          314,
          323
        ],
        "loc": {
          "end": {
            "column": 20,
            "line": 10
          },
          "start": {
            "column": 11,
            "line": 10
          }
        }
      },
      "range": [
        303,
        324
      ],
      "loc": {
        "end": {
          "column": 21,
          "line": 10
        },
        "start": {
          "column": 0,
          "line": 10
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example1",
        "optional": false,
        "range": [
          368,
          376
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 14
          },
          "start": {
            "column": 5,
            "line": 14
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  428,
                  436
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
                        429,
                        430
                      ],
                      "loc": {
                        "end": {
                          "column": 67,
                          "line": 14
                        },
                        "start": {
                          "column": 66,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      429,
                      430
                    ],
                    "loc": {
                      "end": {
                        "column": 67,
                        "line": 14
                      },
                      "start": {
                        "column": 66,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      432,
                      435
                    ],
                    "loc": {
                      "end": {
                        "column": 72,
                        "line": 14
                      },
                      "start": {
                        "column": 69,
                        "line": 14
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 73,
                    "line": 14
                  },
                  "start": {
                    "column": 65,
                    "line": 14
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  422,
                  428
                ],
                "loc": {
                  "end": {
                    "column": 65,
                    "line": 14
                  },
                  "start": {
                    "column": 59,
                    "line": 14
                  }
                }
              },
              "range": [
                422,
                436
              ],
              "loc": {
                "end": {
                  "column": 73,
                  "line": 14
                },
                "start": {
                  "column": 59,
                  "line": 14
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  445,
                  453
                ],
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "range": [
                        446,
                        447
                      ],
                      "loc": {
                        "end": {
                          "column": 84,
                          "line": 14
                        },
                        "start": {
                          "column": 83,
                          "line": 14
                        }
                      }
                    },
                    "range": [
                      446,
                      447
                    ],
                    "loc": {
                      "end": {
                        "column": 84,
                        "line": 14
                      },
                      "start": {
                        "column": 83,
                        "line": 14
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      449,
                      452
                    ],
                    "loc": {
                      "end": {
                        "column": 89,
                        "line": 14
                      },
                      "start": {
                        "column": 86,
                        "line": 14
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 90,
                    "line": 14
                  },
                  "start": {
                    "column": 82,
                    "line": 14
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  439,
                  445
                ],
                "loc": {
                  "end": {
                    "column": 82,
                    "line": 14
                  },
                  "start": {
                    "column": 76,
                    "line": 14
                  }
                }
              },
              "range": [
                439,
                453
              ],
              "loc": {
                "end": {
                  "column": 90,
                  "line": 14
                },
                "start": {
                  "column": 76,
                  "line": 14
                }
              }
            }
          ],
          "range": [
            422,
            453
          ],
          "loc": {
            "end": {
              "column": 90,
              "line": 14
            },
            "start": {
              "column": 59,
              "line": 14
            }
          }
        },
        "range": [
          415,
          454
        ],
        "loc": {
          "end": {
            "column": 91,
            "line": 14
          },
          "start": {
            "column": 52,
            "line": 14
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 49,
            "line": 14
          },
          "start": {
            "column": 13,
            "line": 14
          }
        },
        "range": [
          376,
          412
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                387,
                393
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 14
                },
                "start": {
                  "column": 24,
                  "line": 14
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
                377,
                378
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 14
                },
                "start": {
                  "column": 14,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              377,
              393
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 14
              },
              "start": {
                "column": 14,
                "line": 14
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                405,
                411
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 14
                },
                "start": {
                  "column": 42,
                  "line": 14
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
                395,
                396
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 14
                },
                "start": {
                  "column": 32,
                  "line": 14
                }
              }
            },
            "out": false,
            "range": [
              395,
              411
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 14
              },
              "start": {
                "column": 32,
                "line": 14
              }
            }
          }
        ]
      },
      "range": [
        363,
        455
      ],
      "loc": {
        "end": {
          "column": 92,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result1",
        "optional": false,
        "range": [
          461,
          468
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 15
          },
          "start": {
            "column": 5,
            "line": 15
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            479,
            489
          ],
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'x'",
                "value": "x",
                "range": [
                  480,
                  483
                ],
                "loc": {
                  "end": {
                    "column": 27,
                    "line": 15
                  },
                  "start": {
                    "column": 24,
                    "line": 15
                  }
                }
              },
              "range": [
                480,
                483
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 15
                },
                "start": {
                  "column": 24,
                  "line": 15
                }
              }
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "raw": "'y'",
                "value": "y",
                "range": [
                  485,
                  488
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 15
                  },
                  "start": {
                    "column": 29,
                    "line": 15
                  }
                }
              },
              "range": [
                485,
                488
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 15
                },
                "start": {
                  "column": 29,
                  "line": 15
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 15
            },
            "start": {
              "column": 23,
              "line": 15
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Example1",
          "optional": false,
          "range": [
            471,
            479
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 15
            },
            "start": {
              "column": 15,
              "line": 15
            }
          }
        },
        "range": [
          471,
          489
        ],
        "loc": {
          "end": {
            "column": 33,
            "line": 15
          },
          "start": {
            "column": 15,
            "line": 15
          }
        }
      },
      "range": [
        456,
        490
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result2",
        "optional": false,
        "range": [
          511,
          518
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 17
          },
          "start": {
            "column": 5,
            "line": 17
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  534,
                  544
                ],
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'x'",
                      "value": "x",
                      "range": [
                        535,
                        538
                      ],
                      "loc": {
                        "end": {
                          "column": 32,
                          "line": 17
                        },
                        "start": {
                          "column": 29,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      535,
                      538
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 17
                      },
                      "start": {
                        "column": 29,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      540,
                      543
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 17
                      },
                      "start": {
                        "column": 34,
                        "line": 17
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 17
                  },
                  "start": {
                    "column": 28,
                    "line": 17
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  528,
                  534
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
              "range": [
                528,
                544
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 17
                },
                "start": {
                  "column": 22,
                  "line": 17
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  553,
                  563
                ],
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'y'",
                      "value": "y",
                      "range": [
                        554,
                        557
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 17
                        },
                        "start": {
                          "column": 48,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      554,
                      557
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 17
                      },
                      "start": {
                        "column": 48,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      559,
                      562
                    ],
                    "loc": {
                      "end": {
                        "column": 56,
                        "line": 17
                      },
                      "start": {
                        "column": 53,
                        "line": 17
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 17
                  },
                  "start": {
                    "column": 47,
                    "line": 17
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  547,
                  553
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 17
                  },
                  "start": {
                    "column": 41,
                    "line": 17
                  }
                }
              },
              "range": [
                547,
                563
              ],
              "loc": {
                "end": {
                  "column": 57,
                  "line": 17
                },
                "start": {
                  "column": 41,
                  "line": 17
                }
              }
            }
          ],
          "range": [
            528,
            563
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 17
            },
            "start": {
              "column": 22,
              "line": 17
            }
          }
        },
        "range": [
          521,
          564
        ],
        "loc": {
          "end": {
            "column": 58,
            "line": 17
          },
          "start": {
            "column": 15,
            "line": 17
          }
        }
      },
      "range": [
        506,
        565
      ],
      "loc": {
        "end": {
          "column": 59,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example3",
        "optional": false,
        "range": [
          586,
          594
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 19
          },
          "start": {
            "column": 5,
            "line": 19
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              628,
              636
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
                    629,
                    630
                  ],
                  "loc": {
                    "end": {
                      "column": 49,
                      "line": 19
                    },
                    "start": {
                      "column": 48,
                      "line": 19
                    }
                  }
                },
                "range": [
                  629,
                  630
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 19
                  },
                  "start": {
                    "column": 48,
                    "line": 19
                  }
                }
              },
              {
                "type": "TSAnyKeyword",
                "range": [
                  632,
                  635
                ],
                "loc": {
                  "end": {
                    "column": 54,
                    "line": 19
                  },
                  "start": {
                    "column": 51,
                    "line": 19
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 19
              },
              "start": {
                "column": 47,
                "line": 19
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Record",
            "optional": false,
            "range": [
              622,
              628
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 19
              },
              "start": {
                "column": 41,
                "line": 19
              }
            }
          },
          "range": [
            622,
            636
          ],
          "loc": {
            "end": {
              "column": 55,
              "line": 19
            },
            "start": {
              "column": 41,
              "line": 19
            }
          }
        },
        "range": [
          615,
          637
        ],
        "loc": {
          "end": {
            "column": 56,
            "line": 19
          },
          "start": {
            "column": 34,
            "line": 19
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 31,
            "line": 19
          },
          "start": {
            "column": 13,
            "line": 19
          }
        },
        "range": [
          594,
          612
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                605,
                611
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 19
                },
                "start": {
                  "column": 24,
                  "line": 19
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
                595,
                596
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 19
                },
                "start": {
                  "column": 14,
                  "line": 19
                }
              }
            },
            "out": false,
            "range": [
              595,
              611
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 19
              },
              "start": {
                "column": 14,
                "line": 19
              }
            }
          }
        ]
      },
      "range": [
        581,
        638
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result3",
        "optional": false,
        "range": [
          644,
          651
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 20
          },
          "start": {
            "column": 5,
            "line": 20
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            662,
            673
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'x'",
                    "value": "x",
                    "range": [
                      663,
                      666
                    ],
                    "loc": {
                      "end": {
                        "column": 27,
                        "line": 20
                      },
                      "start": {
                        "column": 24,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    663,
                    666
                  ],
                  "loc": {
                    "end": {
                      "column": 27,
                      "line": 20
                    },
                    "start": {
                      "column": 24,
                      "line": 20
                    }
                  }
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "raw": "'y'",
                    "value": "y",
                    "range": [
                      669,
                      672
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 20
                      },
                      "start": {
                        "column": 30,
                        "line": 20
                      }
                    }
                  },
                  "range": [
                    669,
                    672
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 20
                    },
                    "start": {
                      "column": 30,
                      "line": 20
                    }
                  }
                }
              ],
              "range": [
                663,
                672
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 20
                },
                "start": {
                  "column": 24,
                  "line": 20
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 20
            },
            "start": {
              "column": 23,
              "line": 20
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Example3",
          "optional": false,
          "range": [
            654,
            662
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 20
            },
            "start": {
              "column": 15,
              "line": 20
            }
          }
        },
        "range": [
          654,
          673
        ],
        "loc": {
          "end": {
            "column": 34,
            "line": 20
          },
          "start": {
            "column": 15,
            "line": 20
          }
        }
      },
      "range": [
        639,
        674
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example4",
        "optional": false,
        "range": [
          695,
          703
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 22
          },
          "start": {
            "column": 5,
            "line": 22
          }
        }
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                749,
                757
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
                      750,
                      751
                    ],
                    "loc": {
                      "end": {
                        "column": 61,
                        "line": 22
                      },
                      "start": {
                        "column": 60,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    750,
                    751
                  ],
                  "loc": {
                    "end": {
                      "column": 61,
                      "line": 22
                    },
                    "start": {
                      "column": 60,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    753,
                    756
                  ],
                  "loc": {
                    "end": {
                      "column": 66,
                      "line": 22
                    },
                    "start": {
                      "column": 63,
                      "line": 22
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 67,
                  "line": 22
                },
                "start": {
                  "column": 59,
                  "line": 22
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Record",
              "optional": false,
              "range": [
                743,
                749
              ],
              "loc": {
                "end": {
                  "column": 59,
                  "line": 22
                },
                "start": {
                  "column": 53,
                  "line": 22
                }
              }
            },
            "range": [
              743,
              757
            ],
            "loc": {
              "end": {
                "column": 67,
                "line": 22
              },
              "start": {
                "column": 53,
                "line": 22
              }
            }
          },
          {
            "type": "TSTypeReference",
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "range": [
                766,
                774
              ],
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "range": [
                      767,
                      768
                    ],
                    "loc": {
                      "end": {
                        "column": 78,
                        "line": 22
                      },
                      "start": {
                        "column": 77,
                        "line": 22
                      }
                    }
                  },
                  "range": [
                    767,
                    768
                  ],
                  "loc": {
                    "end": {
                      "column": 78,
                      "line": 22
                    },
                    "start": {
                      "column": 77,
                      "line": 22
                    }
                  }
                },
                {
                  "type": "TSAnyKeyword",
                  "range": [
                    770,
                    773
                  ],
                  "loc": {
                    "end": {
                      "column": 83,
                      "line": 22
                    },
                    "start": {
                      "column": 80,
                      "line": 22
                    }
                  }
                }
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 22
                },
                "start": {
                  "column": 76,
                  "line": 22
                }
              }
            },
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Record",
              "optional": false,
              "range": [
                760,
                766
              ],
              "loc": {
                "end": {
                  "column": 76,
                  "line": 22
                },
                "start": {
                  "column": 70,
                  "line": 22
                }
              }
            },
            "range": [
              760,
              774
            ],
            "loc": {
              "end": {
                "column": 84,
                "line": 22
              },
              "start": {
                "column": 70,
                "line": 22
              }
            }
          }
        ],
        "range": [
          743,
          774
        ],
        "loc": {
          "end": {
            "column": 84,
            "line": 22
          },
          "start": {
            "column": 53,
            "line": 22
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 49,
            "line": 22
          },
          "start": {
            "column": 13,
            "line": 22
          }
        },
        "range": [
          703,
          739
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                714,
                720
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 22
                },
                "start": {
                  "column": 24,
                  "line": 22
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
                704,
                705
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 22
                },
                "start": {
                  "column": 14,
                  "line": 22
                }
              }
            },
            "out": false,
            "range": [
              704,
              720
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 22
              },
              "start": {
                "column": 14,
                "line": 22
              }
            }
          },
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                732,
                738
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 22
                },
                "start": {
                  "column": 42,
                  "line": 22
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
                722,
                723
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 22
                },
                "start": {
                  "column": 32,
                  "line": 22
                }
              }
            },
            "out": false,
            "range": [
              722,
              738
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 22
              },
              "start": {
                "column": 32,
                "line": 22
              }
            }
          }
        ]
      },
      "range": [
        690,
        776
      ],
      "loc": {
        "end": {
          "column": 86,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Result4",
        "optional": false,
        "range": [
          782,
          789
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 23
          },
          "start": {
            "column": 5,
            "line": 23
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "range": [
              806,
              816
            ],
            "params": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'x'",
                  "value": "x",
                  "range": [
                    807,
                    810
                  ],
                  "loc": {
                    "end": {
                      "column": 33,
                      "line": 23
                    },
                    "start": {
                      "column": 30,
                      "line": 23
                    }
                  }
                },
                "range": [
                  807,
                  810
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 23
                  },
                  "start": {
                    "column": 30,
                    "line": 23
                  }
                }
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "'y'",
                  "value": "y",
                  "range": [
                    812,
                    815
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 23
                    },
                    "start": {
                      "column": 35,
                      "line": 23
                    }
                  }
                },
                "range": [
                  812,
                  815
                ],
                "loc": {
                  "end": {
                    "column": 38,
                    "line": 23
                  },
                  "start": {
                    "column": 35,
                    "line": 23
                  }
                }
              }
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 23
              },
              "start": {
                "column": 29,
                "line": 23
              }
            }
          },
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Example4",
            "optional": false,
            "range": [
              798,
              806
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 23
              },
              "start": {
                "column": 21,
                "line": 23
              }
            }
          },
          "range": [
            798,
            816
          ],
          "loc": {
            "end": {
              "column": 39,
              "line": 23
            },
            "start": {
              "column": 21,
              "line": 23
            }
          }
        },
        "range": [
          792,
          816
        ],
        "loc": {
          "end": {
            "column": 39,
            "line": 23
          },
          "start": {
            "column": 15,
            "line": 23
          }
        }
      },
      "range": [
        777,
        817
      ],
      "loc": {
        "end": {
          "column": 40,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example5",
        "optional": false,
        "range": [
          838,
          846
        ],
        "loc": {
          "end": {
            "column": 13,
            "line": 25
          },
          "start": {
            "column": 5,
            "line": 25
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "operator": "keyof",
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
                  862,
                  863
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 25
                  },
                  "start": {
                    "column": 29,
                    "line": 25
                  }
                }
              },
              "range": [
                862,
                863
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 25
                },
                "start": {
                  "column": 29,
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
                  866,
                  867
                ],
                "loc": {
                  "end": {
                    "column": 34,
                    "line": 25
                  },
                  "start": {
                    "column": 33,
                    "line": 25
                  }
                }
              },
              "range": [
                866,
                867
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 25
                },
                "start": {
                  "column": 33,
                  "line": 25
                }
              }
            }
          ],
          "range": [
            862,
            867
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 25
            },
            "start": {
              "column": 29,
              "line": 25
            }
          }
        },
        "range": [
          855,
          868
        ],
        "loc": {
          "end": {
            "column": 35,
            "line": 25
          },
          "start": {
            "column": 22,
            "line": 25
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 19,
            "line": 25
          },
          "start": {
            "column": 13,
            "line": 25
          }
        },
        "range": [
          846,
          852
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
                847,
                848
              ],
              "loc": {
                "end": {
                  "column": 15,
                  "line": 25
                },
                "start": {
                  "column": 14,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              847,
              848
            ],
            "loc": {
              "end": {
                "column": 15,
                "line": 25
              },
              "start": {
                "column": 14,
                "line": 25
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
                850,
                851
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 25
                },
                "start": {
                  "column": 17,
                  "line": 25
                }
              }
            },
            "out": false,
            "range": [
              850,
              851
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 25
              },
              "start": {
                "column": 17,
                "line": 25
              }
            }
          }
        ]
      },
      "range": [
        833,
        869
      ],
      "loc": {
        "end": {
          "column": 36,
          "line": 25
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
        "name": "Result5",
        "optional": false,
        "range": [
          875,
          882
        ],
        "loc": {
          "end": {
            "column": 12,
            "line": 26
          },
          "start": {
            "column": 5,
            "line": 26
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            893,
            929
          ],
          "params": [
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  900,
                  910
                ],
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'x'",
                      "value": "x",
                      "range": [
                        901,
                        904
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 26
                        },
                        "start": {
                          "column": 31,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      901,
                      904
                    ],
                    "loc": {
                      "end": {
                        "column": 34,
                        "line": 26
                      },
                      "start": {
                        "column": 31,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      906,
                      909
                    ],
                    "loc": {
                      "end": {
                        "column": 39,
                        "line": 26
                      },
                      "start": {
                        "column": 36,
                        "line": 26
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 26
                  },
                  "start": {
                    "column": 30,
                    "line": 26
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  894,
                  900
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 26
                  },
                  "start": {
                    "column": 24,
                    "line": 26
                  }
                }
              },
              "range": [
                894,
                910
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 26
                },
                "start": {
                  "column": 24,
                  "line": 26
                }
              }
            },
            {
              "type": "TSTypeReference",
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "range": [
                  918,
                  928
                ],
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "'y'",
                      "value": "y",
                      "range": [
                        919,
                        922
                      ],
                      "loc": {
                        "end": {
                          "column": 52,
                          "line": 26
                        },
                        "start": {
                          "column": 49,
                          "line": 26
                        }
                      }
                    },
                    "range": [
                      919,
                      922
                    ],
                    "loc": {
                      "end": {
                        "column": 52,
                        "line": 26
                      },
                      "start": {
                        "column": 49,
                        "line": 26
                      }
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "range": [
                      924,
                      927
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 26
                      },
                      "start": {
                        "column": 54,
                        "line": 26
                      }
                    }
                  }
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 26
                  },
                  "start": {
                    "column": 48,
                    "line": 26
                  }
                }
              },
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "range": [
                  912,
                  918
                ],
                "loc": {
                  "end": {
                    "column": 48,
                    "line": 26
                  },
                  "start": {
                    "column": 42,
                    "line": 26
                  }
                }
              },
              "range": [
                912,
                928
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 26
                },
                "start": {
                  "column": 42,
                  "line": 26
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 26
            },
            "start": {
              "column": 23,
              "line": 26
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Example5",
          "optional": false,
          "range": [
            885,
            893
          ],
          "loc": {
            "end": {
              "column": 23,
              "line": 26
            },
            "start": {
              "column": 15,
              "line": 26
            }
          }
        },
        "range": [
          885,
          929
        ],
        "loc": {
          "end": {
            "column": 59,
            "line": 26
          },
          "start": {
            "column": 15,
            "line": 26
          }
        }
      },
      "range": [
        870,
        930
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 26
        },
        "start": {
          "column": 0,
          "line": 26
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 27
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
