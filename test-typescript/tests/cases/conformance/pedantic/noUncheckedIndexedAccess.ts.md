__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    3539
  ],
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "CheckBooleanOnly",
        "optional": false,
        "range": [
          5,
          21
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 1
          },
          "start": {
            "column": 5,
            "line": 1
          }
        }
      },
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "range": [
          43,
          46
        ],
        "loc": {
          "end": {
            "column": 46,
            "line": 1
          },
          "start": {
            "column": 43,
            "line": 1
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 40,
            "line": 1
          },
          "start": {
            "column": 21,
            "line": 1
          }
        },
        "range": [
          21,
          40
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSBooleanKeyword",
              "range": [
                32,
                39
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 1
                },
                "start": {
                  "column": 32,
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
                22,
                23
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 1
                },
                "start": {
                  "column": 22,
                  "line": 1
                }
              }
            },
            "out": false,
            "range": [
              22,
              39
            ],
            "loc": {
              "end": {
                "column": 39,
                "line": 1
              },
              "start": {
                "column": 22,
                "line": 1
              }
            }
          }
        ]
      },
      "range": [
        0,
        47
      ],
      "loc": {
        "end": {
          "column": 47,
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
        "name": "T_ERR1",
        "optional": false,
        "range": [
          103,
          109
        ],
        "loc": {
          "end": {
            "column": 11,
            "line": 3
          },
          "start": {
            "column": 5,
            "line": 3
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            128,
            149
          ],
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "range": [
                    129,
                    136
                  ],
                  "loc": {
                    "end": {
                      "column": 38,
                      "line": 3
                    },
                    "start": {
                      "column": 31,
                      "line": 3
                    }
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "range": [
                    139,
                    148
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 3
                    },
                    "start": {
                      "column": 41,
                      "line": 3
                    }
                  }
                }
              ],
              "range": [
                129,
                148
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 3
                },
                "start": {
                  "column": 31,
                  "line": 3
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 3
            },
            "start": {
              "column": 30,
              "line": 3
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "range": [
            112,
            128
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 3
            },
            "start": {
              "column": 14,
              "line": 3
            }
          }
        },
        "range": [
          112,
          149
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 3
          },
          "start": {
            "column": 14,
            "line": 3
          }
        }
      },
      "range": [
        98,
        150
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 3
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          170,
          181
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                172,
                173
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 5
                },
                "start": {
                  "column": 20,
                  "line": 5
                }
              }
            },
            "range": [
              172,
              173
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 5
              },
              "start": {
                "column": 20,
                "line": 5
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                175,
                176
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 5
                },
                "start": {
                  "column": 23,
                  "line": 5
                }
              }
            },
            "range": [
              175,
              176
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 5
              },
              "start": {
                "column": 23,
                "line": 5
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                178,
                179
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 5
                },
                "start": {
                  "column": 26,
                  "line": 5
                }
              }
            },
            "range": [
              178,
              179
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 5
              },
              "start": {
                "column": 26,
                "line": 5
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 5
          },
          "start": {
            "column": 18,
            "line": 5
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumericEnum1",
        "optional": false,
        "range": [
          157,
          169
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 5
          },
          "start": {
            "column": 5,
            "line": 5
          }
        }
      },
      "range": [
        152,
        181
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 5
        },
        "start": {
          "column": 0,
          "line": 5
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          200,
          224
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                202,
                203
              ],
              "loc": {
                "end": {
                  "column": 21,
                  "line": 6
                },
                "start": {
                  "column": 20,
                  "line": 6
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                206,
                207
              ],
              "loc": {
                "end": {
                  "column": 25,
                  "line": 6
                },
                "start": {
                  "column": 24,
                  "line": 6
                }
              }
            },
            "range": [
              202,
              207
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 6
              },
              "start": {
                "column": 20,
                "line": 6
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                209,
                210
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 6
                },
                "start": {
                  "column": 27,
                  "line": 6
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                213,
                214
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 6
                },
                "start": {
                  "column": 31,
                  "line": 6
                }
              }
            },
            "range": [
              209,
              214
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 6
              },
              "start": {
                "column": 27,
                "line": 6
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "range": [
                217,
                218
              ],
              "loc": {
                "end": {
                  "column": 36,
                  "line": 6
                },
                "start": {
                  "column": 35,
                  "line": 6
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "2",
              "value": 2,
              "range": [
                221,
                222
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 6
                },
                "start": {
                  "column": 39,
                  "line": 6
                }
              }
            },
            "range": [
              217,
              222
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 6
              },
              "start": {
                "column": 35,
                "line": 6
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 42,
            "line": 6
          },
          "start": {
            "column": 18,
            "line": 6
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumericEnum2",
        "optional": false,
        "range": [
          187,
          199
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 6
          },
          "start": {
            "column": 5,
            "line": 6
          }
        }
      },
      "range": [
        182,
        224
      ],
      "loc": {
        "end": {
          "column": 42,
          "line": 6
        },
        "start": {
          "column": 0,
          "line": 6
        }
      }
    },
    {
      "type": "TSEnumDeclaration",
      "body": {
        "type": "TSEnumBody",
        "range": [
          242,
          269
        ],
        "members": [
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "range": [
                244,
                245
              ],
              "loc": {
                "end": {
                  "column": 20,
                  "line": 7
                },
                "start": {
                  "column": 19,
                  "line": 7
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "\"Alpha\"",
              "value": "Alpha",
              "range": [
                248,
                255
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 7
                },
                "start": {
                  "column": 23,
                  "line": 7
                }
              }
            },
            "range": [
              244,
              255
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 7
              },
              "start": {
                "column": 19,
                "line": 7
              }
            }
          },
          {
            "type": "TSEnumMember",
            "computed": false,
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "range": [
                257,
                258
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 7
                },
                "start": {
                  "column": 32,
                  "line": 7
                }
              }
            },
            "initializer": {
              "type": "Literal",
              "raw": "\"Beta\"",
              "value": "Beta",
              "range": [
                261,
                267
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 7
                },
                "start": {
                  "column": 36,
                  "line": 7
                }
              }
            },
            "range": [
              257,
              267
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 7
              },
              "start": {
                "column": 32,
                "line": 7
              }
            }
          }
        ],
        "loc": {
          "end": {
            "column": 44,
            "line": 7
          },
          "start": {
            "column": 17,
            "line": 7
          }
        }
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StringEnum1",
        "optional": false,
        "range": [
          230,
          241
        ],
        "loc": {
          "end": {
            "column": 16,
            "line": 7
          },
          "start": {
            "column": 5,
            "line": 7
          }
        }
      },
      "range": [
        225,
        269
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 7
        },
        "start": {
          "column": 0,
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
            "name": "strMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 9
                },
                "start": {
                  "column": 20,
                  "line": 9
                }
              },
              "range": [
                291,
                317
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 9
                            },
                            "start": {
                              "column": 26,
                              "line": 9
                            }
                          },
                          "range": [
                            297,
                            305
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              299,
                              305
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 9
                              },
                              "start": {
                                "column": 28,
                                "line": 9
                              }
                            }
                          }
                        },
                        "range": [
                          296,
                          305
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 9
                          },
                          "start": {
                            "column": 25,
                            "line": 9
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 9
                        },
                        "start": {
                          "column": 35,
                          "line": 9
                        }
                      },
                      "range": [
                        306,
                        315
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          308,
                          315
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 9
                          },
                          "start": {
                            "column": 37,
                            "line": 9
                          }
                        }
                      }
                    },
                    "range": [
                      295,
                      315
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 9
                      },
                      "start": {
                        "column": 24,
                        "line": 9
                      }
                    }
                  }
                ],
                "range": [
                  293,
                  317
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 9
                  },
                  "start": {
                    "column": 22,
                    "line": 9
                  }
                }
              }
            },
            "range": [
              285,
              317
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 9
              },
              "start": {
                "column": 14,
                "line": 9
              }
            }
          },
          "init": null,
          "range": [
            285,
            317
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 9
            },
            "start": {
              "column": 14,
              "line": 9
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        271,
        318
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 9
        },
        "start": {
          "column": 0,
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
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 12
                },
                "start": {
                  "column": 8,
                  "line": 12
                }
              },
              "range": [
                361,
                370
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  363,
                  370
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 12
                  },
                  "start": {
                    "column": 10,
                    "line": 12
                  }
                }
              }
            },
            "range": [
              359,
              370
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 12
              },
              "start": {
                "column": 6,
                "line": 12
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "range": [
                373,
                379
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 12
                },
                "start": {
                  "column": 20,
                  "line": 12
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                380,
                385
              ],
              "loc": {
                "end": {
                  "column": 32,
                  "line": 12
                },
                "start": {
                  "column": 27,
                  "line": 12
                }
              }
            },
            "range": [
              373,
              386
            ],
            "loc": {
              "end": {
                "column": 33,
                "line": 12
              },
              "start": {
                "column": 20,
                "line": 12
              }
            }
          },
          "range": [
            359,
            386
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 12
            },
            "start": {
              "column": 6,
              "line": 12
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        353,
        387
      ],
      "loc": {
        "end": {
          "column": 34,
          "line": 12
        },
        "start": {
          "column": 0,
          "line": 12
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
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 13
                },
                "start": {
                  "column": 8,
                  "line": 13
                }
              },
              "range": [
                396,
                405
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  398,
                  405
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 13
                  },
                  "start": {
                    "column": 10,
                    "line": 13
                  }
                }
              }
            },
            "range": [
              394,
              405
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 13
              },
              "start": {
                "column": 6,
                "line": 13
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "range": [
                408,
                414
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 13
                },
                "start": {
                  "column": 20,
                  "line": 13
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                415,
                418
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 13
                },
                "start": {
                  "column": 27,
                  "line": 13
                }
              }
            },
            "range": [
              408,
              418
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 13
              },
              "start": {
                "column": 20,
                "line": 13
              }
            }
          },
          "range": [
            394,
            418
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 13
            },
            "start": {
              "column": 6,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        388,
        419
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 13
        },
        "start": {
          "column": 0,
          "line": 13
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
            "name": "e3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 14
                },
                "start": {
                  "column": 8,
                  "line": 14
                }
              },
              "range": [
                428,
                437
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  430,
                  437
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 14
                  },
                  "start": {
                    "column": 10,
                    "line": 14
                  }
                }
              }
            },
            "range": [
              426,
              437
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 14
              },
              "start": {
                "column": 6,
                "line": 14
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "range": [
                440,
                446
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 14
                },
                "start": {
                  "column": 20,
                  "line": 14
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                447,
                448
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 14
                },
                "start": {
                  "column": 27,
                  "line": 14
                }
              }
            },
            "range": [
              440,
              449
            ],
            "loc": {
              "end": {
                "column": 29,
                "line": 14
              },
              "start": {
                "column": 20,
                "line": 14
              }
            }
          },
          "range": [
            426,
            449
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 14
            },
            "start": {
              "column": 6,
              "line": 14
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        420,
        450
      ],
      "loc": {
        "end": {
          "column": 30,
          "line": 14
        },
        "start": {
          "column": 0,
          "line": 14
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
            "name": "e4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 15
                },
                "start": {
                  "column": 8,
                  "line": 15
                }
              },
              "range": [
                459,
                468
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  461,
                  468
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 15
                  },
                  "start": {
                    "column": 10,
                    "line": 15
                  }
                }
              }
            },
            "range": [
              457,
              468
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 15
              },
              "start": {
                "column": 6,
                "line": 15
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "range": [
                471,
                477
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
            "optional": false,
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  478,
                  479
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 15
                  },
                  "start": {
                    "column": 27,
                    "line": 15
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      483,
                      489
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 15
                      },
                      "start": {
                        "column": 32,
                        "line": 15
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      492,
                      498
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 15
                      },
                      "start": {
                        "column": 41,
                        "line": 15
                      }
                    }
                  }
                ],
                "range": [
                  483,
                  498
                ],
                "loc": {
                  "end": {
                    "column": 47,
                    "line": 15
                  },
                  "start": {
                    "column": 32,
                    "line": 15
                  }
                }
              },
              "range": [
                478,
                498
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 15
                },
                "start": {
                  "column": 27,
                  "line": 15
                }
              }
            },
            "range": [
              471,
              499
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 15
              },
              "start": {
                "column": 20,
                "line": 15
              }
            }
          },
          "range": [
            457,
            499
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 15
            },
            "start": {
              "column": 6,
              "line": 15
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        451,
        500
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 15
        },
        "start": {
          "column": 0,
          "line": 15
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
            "name": "e5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 16
                },
                "start": {
                  "column": 8,
                  "line": 16
                }
              },
              "range": [
                509,
                518
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  511,
                  518
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 16
                  },
                  "start": {
                    "column": 10,
                    "line": 16
                  }
                }
              }
            },
            "range": [
              507,
              518
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 16
              },
              "start": {
                "column": 6,
                "line": 16
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "range": [
                521,
                527
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 16
                },
                "start": {
                  "column": 20,
                  "line": 16
                }
              }
            },
            "optional": false,
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  528,
                  529
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 16
                  },
                  "start": {
                    "column": 27,
                    "line": 16
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      533,
                      539
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 16
                      },
                      "start": {
                        "column": 32,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        542,
                        543
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 16
                        },
                        "start": {
                          "column": 41,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      542,
                      543
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 16
                      },
                      "start": {
                        "column": 41,
                        "line": 16
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        546,
                        547
                      ],
                      "loc": {
                        "end": {
                          "column": 46,
                          "line": 16
                        },
                        "start": {
                          "column": 45,
                          "line": 16
                        }
                      }
                    },
                    "range": [
                      546,
                      547
                    ],
                    "loc": {
                      "end": {
                        "column": 46,
                        "line": 16
                      },
                      "start": {
                        "column": 45,
                        "line": 16
                      }
                    }
                  }
                ],
                "range": [
                  533,
                  547
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 16
                  },
                  "start": {
                    "column": 32,
                    "line": 16
                  }
                }
              },
              "range": [
                528,
                547
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 16
                },
                "start": {
                  "column": 27,
                  "line": 16
                }
              }
            },
            "range": [
              521,
              548
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 16
              },
              "start": {
                "column": 20,
                "line": 16
              }
            }
          },
          "range": [
            507,
            548
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 16
            },
            "start": {
              "column": 6,
              "line": 16
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        501,
        549
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 16
        },
        "start": {
          "column": 0,
          "line": 16
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
            "name": "e6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 17
                },
                "start": {
                  "column": 8,
                  "line": 17
                }
              },
              "range": [
                558,
                567
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  560,
                  567
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 17
                  },
                  "start": {
                    "column": 10,
                    "line": 17
                  }
                }
              }
            },
            "range": [
              556,
              567
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 17
              },
              "start": {
                "column": 6,
                "line": 17
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "range": [
                570,
                576
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 17
                },
                "start": {
                  "column": 20,
                  "line": 17
                }
              }
            },
            "optional": false,
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  577,
                  578
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 17
                  },
                  "start": {
                    "column": 27,
                    "line": 17
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        582,
                        583
                      ],
                      "loc": {
                        "end": {
                          "column": 33,
                          "line": 17
                        },
                        "start": {
                          "column": 32,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      582,
                      583
                    ],
                    "loc": {
                      "end": {
                        "column": 33,
                        "line": 17
                      },
                      "start": {
                        "column": 32,
                        "line": 17
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        586,
                        587
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 17
                        },
                        "start": {
                          "column": 36,
                          "line": 17
                        }
                      }
                    },
                    "range": [
                      586,
                      587
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 17
                      },
                      "start": {
                        "column": 36,
                        "line": 17
                      }
                    }
                  }
                ],
                "range": [
                  582,
                  587
                ],
                "loc": {
                  "end": {
                    "column": 37,
                    "line": 17
                  },
                  "start": {
                    "column": 32,
                    "line": 17
                  }
                }
              },
              "range": [
                577,
                587
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 17
                },
                "start": {
                  "column": 27,
                  "line": 17
                }
              }
            },
            "range": [
              570,
              588
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 17
              },
              "start": {
                "column": 20,
                "line": 17
              }
            }
          },
          "range": [
            556,
            588
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 17
            },
            "start": {
              "column": 6,
              "line": 17
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        550,
        589
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 17
        },
        "start": {
          "column": 0,
          "line": 17
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
            "name": "e7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 18
                },
                "start": {
                  "column": 8,
                  "line": 18
                }
              },
              "range": [
                598,
                607
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  600,
                  607
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 18
                  },
                  "start": {
                    "column": 10,
                    "line": 18
                  }
                }
              }
            },
            "range": [
              596,
              607
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 18
              },
              "start": {
                "column": 6,
                "line": 18
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "range": [
                610,
                616
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 18
                },
                "start": {
                  "column": 20,
                  "line": 18
                }
              }
            },
            "optional": false,
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "\"foo\"",
                "value": "foo",
                "range": [
                  617,
                  622
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 18
                  },
                  "start": {
                    "column": 27,
                    "line": 18
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"foo\"",
                      "value": "foo",
                      "range": [
                        626,
                        631
                      ],
                      "loc": {
                        "end": {
                          "column": 41,
                          "line": 18
                        },
                        "start": {
                          "column": 36,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      626,
                      631
                    ],
                    "loc": {
                      "end": {
                        "column": 41,
                        "line": 18
                      },
                      "start": {
                        "column": 36,
                        "line": 18
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"baz\"",
                      "value": "baz",
                      "range": [
                        634,
                        639
                      ],
                      "loc": {
                        "end": {
                          "column": 49,
                          "line": 18
                        },
                        "start": {
                          "column": 44,
                          "line": 18
                        }
                      }
                    },
                    "range": [
                      634,
                      639
                    ],
                    "loc": {
                      "end": {
                        "column": 49,
                        "line": 18
                      },
                      "start": {
                        "column": 44,
                        "line": 18
                      }
                    }
                  }
                ],
                "range": [
                  626,
                  639
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 18
                  },
                  "start": {
                    "column": 36,
                    "line": 18
                  }
                }
              },
              "range": [
                617,
                639
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 18
                },
                "start": {
                  "column": 27,
                  "line": 18
                }
              }
            },
            "range": [
              610,
              640
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 18
              },
              "start": {
                "column": 20,
                "line": 18
              }
            }
          },
          "range": [
            596,
            640
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 18
            },
            "start": {
              "column": 6,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        590,
        641
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
            "name": "e8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 19
                },
                "start": {
                  "column": 8,
                  "line": 19
                }
              },
              "range": [
                650,
                659
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  652,
                  659
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 19
                  },
                  "start": {
                    "column": 10,
                    "line": 19
                  }
                }
              }
            },
            "range": [
              648,
              659
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 19
              },
              "start": {
                "column": 6,
                "line": 19
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "range": [
                662,
                668
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 19
                },
                "start": {
                  "column": 20,
                  "line": 19
                }
              }
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumericEnum1",
                "optional": false,
                "range": [
                  669,
                  681
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 19
                  },
                  "start": {
                    "column": 27,
                    "line": 19
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  682,
                  683
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 19
                  },
                  "start": {
                    "column": 40,
                    "line": 19
                  }
                }
              },
              "range": [
                669,
                683
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 19
                },
                "start": {
                  "column": 27,
                  "line": 19
                }
              }
            },
            "range": [
              662,
              684
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 19
              },
              "start": {
                "column": 20,
                "line": 19
              }
            }
          },
          "range": [
            648,
            684
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 19
            },
            "start": {
              "column": 6,
              "line": 19
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        642,
        685
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 19
        },
        "start": {
          "column": 0,
          "line": 19
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
            "name": "e9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 20
                },
                "start": {
                  "column": 8,
                  "line": 20
                }
              },
              "range": [
                694,
                703
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  696,
                  703
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 20
                  },
                  "start": {
                    "column": 10,
                    "line": 20
                  }
                }
              }
            },
            "range": [
              692,
              703
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 20
              },
              "start": {
                "column": 6,
                "line": 20
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "range": [
                706,
                712
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 20
                },
                "start": {
                  "column": 20,
                  "line": 20
                }
              }
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumericEnum2",
                "optional": false,
                "range": [
                  713,
                  725
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 20
                  },
                  "start": {
                    "column": 27,
                    "line": 20
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  726,
                  727
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 20
                  },
                  "start": {
                    "column": 40,
                    "line": 20
                  }
                }
              },
              "range": [
                713,
                727
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 20
                },
                "start": {
                  "column": 27,
                  "line": 20
                }
              }
            },
            "range": [
              706,
              728
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 20
              },
              "start": {
                "column": 20,
                "line": 20
              }
            }
          },
          "range": [
            692,
            728
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 20
            },
            "start": {
              "column": 6,
              "line": 20
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        686,
        729
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 20
        },
        "start": {
          "column": 0,
          "line": 20
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
            "name": "e10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 21
                },
                "start": {
                  "column": 9,
                  "line": 21
                }
              },
              "range": [
                739,
                748
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  741,
                  748
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 21
                  },
                  "start": {
                    "column": 11,
                    "line": 21
                  }
                }
              }
            },
            "range": [
              736,
              748
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 21
              },
              "start": {
                "column": 6,
                "line": 21
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "range": [
                751,
                757
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 21
                },
                "start": {
                  "column": 21,
                  "line": 21
                }
              }
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "StringEnum1",
                "optional": false,
                "range": [
                  758,
                  769
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 21
                  },
                  "start": {
                    "column": 28,
                    "line": 21
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  770,
                  771
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 21
                  },
                  "start": {
                    "column": 40,
                    "line": 21
                  }
                }
              },
              "range": [
                758,
                771
              ],
              "loc": {
                "end": {
                  "column": 41,
                  "line": 21
                },
                "start": {
                  "column": 28,
                  "line": 21
                }
              }
            },
            "range": [
              751,
              772
            ],
            "loc": {
              "end": {
                "column": 42,
                "line": 21
              },
              "start": {
                "column": 21,
                "line": 21
              }
            }
          },
          "range": [
            736,
            772
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 21
            },
            "start": {
              "column": 6,
              "line": 21
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        730,
        773
      ],
      "loc": {
        "end": {
          "column": 43,
          "line": 21
        },
        "start": {
          "column": 0,
          "line": 21
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
            "name": "e11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 22
                },
                "start": {
                  "column": 9,
                  "line": 22
                }
              },
              "range": [
                783,
                792
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  785,
                  792
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 22
                  },
                  "start": {
                    "column": 11,
                    "line": 22
                  }
                }
              }
            },
            "range": [
              780,
              792
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 22
              },
              "start": {
                "column": 6,
                "line": 22
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "range": [
                795,
                801
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 22
                },
                "start": {
                  "column": 21,
                  "line": 22
                }
              }
            },
            "optional": false,
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringEnum1",
                  "optional": false,
                  "range": [
                    802,
                    813
                  ],
                  "loc": {
                    "end": {
                      "column": 39,
                      "line": 22
                    },
                    "start": {
                      "column": 28,
                      "line": 22
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    814,
                    815
                  ],
                  "loc": {
                    "end": {
                      "column": 41,
                      "line": 22
                    },
                    "start": {
                      "column": 40,
                      "line": 22
                    }
                  }
                },
                "range": [
                  802,
                  815
                ],
                "loc": {
                  "end": {
                    "column": 41,
                    "line": 22
                  },
                  "start": {
                    "column": 28,
                    "line": 22
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StringEnum1",
                  "optional": false,
                  "range": [
                    819,
                    830
                  ],
                  "loc": {
                    "end": {
                      "column": 56,
                      "line": 22
                    },
                    "start": {
                      "column": 45,
                      "line": 22
                    }
                  }
                },
                "range": [
                  819,
                  830
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 22
                  },
                  "start": {
                    "column": 45,
                    "line": 22
                  }
                }
              },
              "range": [
                802,
                830
              ],
              "loc": {
                "end": {
                  "column": 56,
                  "line": 22
                },
                "start": {
                  "column": 28,
                  "line": 22
                }
              }
            },
            "range": [
              795,
              831
            ],
            "loc": {
              "end": {
                "column": 57,
                "line": 22
              },
              "start": {
                "column": 21,
                "line": 22
              }
            }
          },
          "range": [
            780,
            831
          ],
          "loc": {
            "end": {
              "column": 57,
              "line": 22
            },
            "start": {
              "column": 6,
              "line": 22
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        774,
        832
      ],
      "loc": {
        "end": {
          "column": 58,
          "line": 22
        },
        "start": {
          "column": 0,
          "line": 22
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
            "name": "e12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 23
                },
                "start": {
                  "column": 9,
                  "line": 23
                }
              },
              "range": [
                842,
                851
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  844,
                  851
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 23
                  },
                  "start": {
                    "column": 11,
                    "line": 23
                  }
                }
              }
            },
            "range": [
              839,
              851
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 23
              },
              "start": {
                "column": 6,
                "line": 23
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "range": [
                854,
                860
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 23
                },
                "start": {
                  "column": 21,
                  "line": 23
                }
              }
            },
            "optional": false,
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumericEnum1",
                  "optional": false,
                  "range": [
                    861,
                    873
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 23
                    },
                    "start": {
                      "column": 28,
                      "line": 23
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    874,
                    875
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 23
                    },
                    "start": {
                      "column": 41,
                      "line": 23
                    }
                  }
                },
                "range": [
                  861,
                  875
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 23
                  },
                  "start": {
                    "column": 28,
                    "line": 23
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumericEnum1",
                  "optional": false,
                  "range": [
                    879,
                    891
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 23
                    },
                    "start": {
                      "column": 46,
                      "line": 23
                    }
                  }
                },
                "range": [
                  879,
                  891
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 23
                  },
                  "start": {
                    "column": 46,
                    "line": 23
                  }
                }
              },
              "range": [
                861,
                891
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 23
                },
                "start": {
                  "column": 28,
                  "line": 23
                }
              }
            },
            "range": [
              854,
              892
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 23
              },
              "start": {
                "column": 21,
                "line": 23
              }
            }
          },
          "range": [
            839,
            892
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 23
            },
            "start": {
              "column": 6,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        833,
        893
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
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
            "name": "e13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 24
                },
                "start": {
                  "column": 9,
                  "line": 24
                }
              },
              "range": [
                903,
                912
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  905,
                  912
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 24
                  },
                  "start": {
                    "column": 11,
                    "line": 24
                  }
                }
              }
            },
            "range": [
              900,
              912
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 24
              },
              "start": {
                "column": 6,
                "line": 24
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "range": [
                915,
                921
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 24
                },
                "start": {
                  "column": 21,
                  "line": 24
                }
              }
            },
            "optional": false,
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumericEnum2",
                  "optional": false,
                  "range": [
                    922,
                    934
                  ],
                  "loc": {
                    "end": {
                      "column": 40,
                      "line": 24
                    },
                    "start": {
                      "column": 28,
                      "line": 24
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "range": [
                    935,
                    936
                  ],
                  "loc": {
                    "end": {
                      "column": 42,
                      "line": 24
                    },
                    "start": {
                      "column": 41,
                      "line": 24
                    }
                  }
                },
                "range": [
                  922,
                  936
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 24
                  },
                  "start": {
                    "column": 28,
                    "line": 24
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumericEnum2",
                  "optional": false,
                  "range": [
                    940,
                    952
                  ],
                  "loc": {
                    "end": {
                      "column": 58,
                      "line": 24
                    },
                    "start": {
                      "column": 46,
                      "line": 24
                    }
                  }
                },
                "range": [
                  940,
                  952
                ],
                "loc": {
                  "end": {
                    "column": 58,
                    "line": 24
                  },
                  "start": {
                    "column": 46,
                    "line": 24
                  }
                }
              },
              "range": [
                922,
                952
              ],
              "loc": {
                "end": {
                  "column": 58,
                  "line": 24
                },
                "start": {
                  "column": 28,
                  "line": 24
                }
              }
            },
            "range": [
              915,
              953
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 24
              },
              "start": {
                "column": 21,
                "line": 24
              }
            }
          },
          "range": [
            900,
            953
          ],
          "loc": {
            "end": {
              "column": 59,
              "line": 24
            },
            "start": {
              "column": 6,
              "line": 24
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        894,
        954
      ],
      "loc": {
        "end": {
          "column": 60,
          "line": 24
        },
        "start": {
          "column": 0,
          "line": 24
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
            "name": "e14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 18,
                  "line": 25
                },
                "start": {
                  "column": 9,
                  "line": 25
                }
              },
              "range": [
                964,
                973
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  966,
                  973
                ],
                "loc": {
                  "end": {
                    "column": 18,
                    "line": 25
                  },
                  "start": {
                    "column": 11,
                    "line": 25
                  }
                }
              }
            },
            "range": [
              961,
              973
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 25
              },
              "start": {
                "column": 6,
                "line": 25
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "range": [
                976,
                982
              ],
              "loc": {
                "end": {
                  "column": 27,
                  "line": 25
                },
                "start": {
                  "column": 21,
                  "line": 25
                }
              }
            },
            "optional": false,
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "null",
                "value": null,
                "range": [
                  983,
                  987
                ],
                "loc": {
                  "end": {
                    "column": 32,
                    "line": 25
                  },
                  "start": {
                    "column": 28,
                    "line": 25
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "range": [
                  991,
                  994
                ],
                "loc": {
                  "end": {
                    "column": 39,
                    "line": 25
                  },
                  "start": {
                    "column": 36,
                    "line": 25
                  }
                }
              },
              "range": [
                983,
                994
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 25
                },
                "start": {
                  "column": 28,
                  "line": 25
                }
              }
            },
            "range": [
              976,
              995
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 25
              },
              "start": {
                "column": 21,
                "line": 25
              }
            }
          },
          "range": [
            961,
            995
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 25
            },
            "start": {
              "column": 6,
              "line": 25
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        955,
        996
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 25
        },
        "start": {
          "column": 0,
          "line": 25
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
            "name": "ok1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 28
                },
                "start": {
                  "column": 9,
                  "line": 28
                }
              },
              "range": [
                1023,
                1044
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      1025,
                      1032
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 28
                      },
                      "start": {
                        "column": 11,
                        "line": 28
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      1035,
                      1044
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 28
                      },
                      "start": {
                        "column": 21,
                        "line": 28
                      }
                    }
                  }
                ],
                "range": [
                  1025,
                  1044
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 28
                  },
                  "start": {
                    "column": 11,
                    "line": 28
                  }
                }
              }
            },
            "range": [
              1020,
              1044
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 28
              },
              "start": {
                "column": 6,
                "line": 28
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "range": [
                1047,
                1053
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 28
                },
                "start": {
                  "column": 33,
                  "line": 28
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                1054,
                1059
              ],
              "loc": {
                "end": {
                  "column": 45,
                  "line": 28
                },
                "start": {
                  "column": 40,
                  "line": 28
                }
              }
            },
            "range": [
              1047,
              1060
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 28
              },
              "start": {
                "column": 33,
                "line": 28
              }
            }
          },
          "range": [
            1020,
            1060
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 28
            },
            "start": {
              "column": 6,
              "line": 28
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1014,
        1061
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 28
        },
        "start": {
          "column": 0,
          "line": 28
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
            "name": "ok2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 29
                },
                "start": {
                  "column": 9,
                  "line": 29
                }
              },
              "range": [
                1071,
                1092
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      1073,
                      1080
                    ],
                    "loc": {
                      "end": {
                        "column": 18,
                        "line": 29
                      },
                      "start": {
                        "column": 11,
                        "line": 29
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "range": [
                      1083,
                      1092
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 29
                      },
                      "start": {
                        "column": 21,
                        "line": 29
                      }
                    }
                  }
                ],
                "range": [
                  1073,
                  1092
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 29
                  },
                  "start": {
                    "column": 11,
                    "line": 29
                  }
                }
              }
            },
            "range": [
              1068,
              1092
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 29
              },
              "start": {
                "column": 6,
                "line": 29
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "range": [
                1095,
                1101
              ],
              "loc": {
                "end": {
                  "column": 39,
                  "line": 29
                },
                "start": {
                  "column": 33,
                  "line": 29
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "range": [
                1102,
                1105
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 29
                },
                "start": {
                  "column": 40,
                  "line": 29
                }
              }
            },
            "range": [
              1095,
              1105
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 29
              },
              "start": {
                "column": 33,
                "line": 29
              }
            }
          },
          "range": [
            1068,
            1105
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 29
            },
            "start": {
              "column": 6,
              "line": 29
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1062,
        1106
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 29
        },
        "start": {
          "column": 0,
          "line": 29
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T_OK1",
        "optional": false,
        "range": [
          1113,
          1118
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 31
          },
          "start": {
            "column": 5,
            "line": 31
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1137,
            1162
          ],
          "params": [
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSStringKeyword",
                "range": [
                  1154,
                  1160
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 31
                  },
                  "start": {
                    "column": 46,
                    "line": 31
                  }
                }
              },
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "range": [
                    1146,
                    1152
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 31
                    },
                    "start": {
                      "column": 38,
                      "line": 31
                    }
                  }
                },
                "range": [
                  1139,
                  1152
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 31
                  },
                  "start": {
                    "column": 31,
                    "line": 31
                  }
                }
              },
              "range": [
                1138,
                1161
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 31
                },
                "start": {
                  "column": 30,
                  "line": 31
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 31
            },
            "start": {
              "column": 29,
              "line": 31
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "range": [
            1121,
            1137
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 31
            },
            "start": {
              "column": 13,
              "line": 31
            }
          }
        },
        "range": [
          1121,
          1162
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 31
          },
          "start": {
            "column": 13,
            "line": 31
          }
        }
      },
      "range": [
        1108,
        1163
      ],
      "loc": {
        "end": {
          "column": 55,
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
        "name": "T_OK2",
        "optional": false,
        "range": [
          1169,
          1174
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 32
          },
          "start": {
            "column": 5,
            "line": 32
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1193,
            1217
          ],
          "params": [
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "raw": "\"foo\"",
                  "value": "foo",
                  "range": [
                    1210,
                    1215
                  ],
                  "loc": {
                    "end": {
                      "column": 51,
                      "line": 32
                    },
                    "start": {
                      "column": 46,
                      "line": 32
                    }
                  }
                },
                "range": [
                  1210,
                  1215
                ],
                "loc": {
                  "end": {
                    "column": 51,
                    "line": 32
                  },
                  "start": {
                    "column": 46,
                    "line": 32
                  }
                }
              },
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "range": [
                    1202,
                    1208
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 32
                    },
                    "start": {
                      "column": 38,
                      "line": 32
                    }
                  }
                },
                "range": [
                  1195,
                  1208
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 32
                  },
                  "start": {
                    "column": 31,
                    "line": 32
                  }
                }
              },
              "range": [
                1194,
                1216
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 32
                },
                "start": {
                  "column": 30,
                  "line": 32
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 32
            },
            "start": {
              "column": 29,
              "line": 32
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "range": [
            1177,
            1193
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 32
            },
            "start": {
              "column": 13,
              "line": 32
            }
          }
        },
        "range": [
          1177,
          1217
        ],
        "loc": {
          "end": {
            "column": 53,
            "line": 32
          },
          "start": {
            "column": 13,
            "line": 32
          }
        }
      },
      "range": [
        1164,
        1218
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 32
        },
        "start": {
          "column": 0,
          "line": 32
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "declare": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T_OK3",
        "optional": false,
        "range": [
          1224,
          1229
        ],
        "loc": {
          "end": {
            "column": 10,
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
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1248,
            1280
          ],
          "params": [
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"bar\"",
                      "value": "bar",
                      "range": [
                        1265,
                        1270
                      ],
                      "loc": {
                        "end": {
                          "column": 51,
                          "line": 33
                        },
                        "start": {
                          "column": 46,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      1265,
                      1270
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 33
                      },
                      "start": {
                        "column": 46,
                        "line": 33
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "\"baz\"",
                      "value": "baz",
                      "range": [
                        1273,
                        1278
                      ],
                      "loc": {
                        "end": {
                          "column": 59,
                          "line": 33
                        },
                        "start": {
                          "column": 54,
                          "line": 33
                        }
                      }
                    },
                    "range": [
                      1273,
                      1278
                    ],
                    "loc": {
                      "end": {
                        "column": 59,
                        "line": 33
                      },
                      "start": {
                        "column": 54,
                        "line": 33
                      }
                    }
                  }
                ],
                "range": [
                  1265,
                  1278
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 33
                  },
                  "start": {
                    "column": 46,
                    "line": 33
                  }
                }
              },
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "range": [
                    1257,
                    1263
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 33
                    },
                    "start": {
                      "column": 38,
                      "line": 33
                    }
                  }
                },
                "range": [
                  1250,
                  1263
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 33
                  },
                  "start": {
                    "column": 31,
                    "line": 33
                  }
                }
              },
              "range": [
                1249,
                1279
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 33
                },
                "start": {
                  "column": 30,
                  "line": 33
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 61,
              "line": 33
            },
            "start": {
              "column": 29,
              "line": 33
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "range": [
            1232,
            1248
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 33
            },
            "start": {
              "column": 13,
              "line": 33
            }
          }
        },
        "range": [
          1232,
          1280
        ],
        "loc": {
          "end": {
            "column": 61,
            "line": 33
          },
          "start": {
            "column": 13,
            "line": 33
          }
        }
      },
      "range": [
        1219,
        1281
      ],
      "loc": {
        "end": {
          "column": 62,
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
        "name": "T_OK4",
        "optional": false,
        "range": [
          1287,
          1292
        ],
        "loc": {
          "end": {
            "column": 10,
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
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1311,
            1336
          ],
          "params": [
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSNumberKeyword",
                "range": [
                  1328,
                  1334
                ],
                "loc": {
                  "end": {
                    "column": 52,
                    "line": 34
                  },
                  "start": {
                    "column": 46,
                    "line": 34
                  }
                }
              },
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "range": [
                    1320,
                    1326
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 34
                    },
                    "start": {
                      "column": 38,
                      "line": 34
                    }
                  }
                },
                "range": [
                  1313,
                  1326
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 34
                  },
                  "start": {
                    "column": 31,
                    "line": 34
                  }
                }
              },
              "range": [
                1312,
                1335
              ],
              "loc": {
                "end": {
                  "column": 53,
                  "line": 34
                },
                "start": {
                  "column": 30,
                  "line": 34
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 54,
              "line": 34
            },
            "start": {
              "column": 29,
              "line": 34
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "range": [
            1295,
            1311
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 34
            },
            "start": {
              "column": 13,
              "line": 34
            }
          }
        },
        "range": [
          1295,
          1336
        ],
        "loc": {
          "end": {
            "column": 54,
            "line": 34
          },
          "start": {
            "column": 13,
            "line": 34
          }
        }
      },
      "range": [
        1282,
        1337
      ],
      "loc": {
        "end": {
          "column": 55,
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
        "name": "T_OK5",
        "optional": false,
        "range": [
          1343,
          1348
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 35
          },
          "start": {
            "column": 5,
            "line": 35
          }
        }
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "range": [
            1367,
            1389
          ],
          "params": [
            {
              "type": "TSIndexedAccessType",
              "indexType": {
                "type": "TSAnyKeyword",
                "range": [
                  1384,
                  1387
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 35
                  },
                  "start": {
                    "column": 46,
                    "line": 35
                  }
                }
              },
              "objectType": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "range": [
                    1376,
                    1382
                  ],
                  "loc": {
                    "end": {
                      "column": 44,
                      "line": 35
                    },
                    "start": {
                      "column": 38,
                      "line": 35
                    }
                  }
                },
                "range": [
                  1369,
                  1382
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 35
                  },
                  "start": {
                    "column": 31,
                    "line": 35
                  }
                }
              },
              "range": [
                1368,
                1388
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 35
                },
                "start": {
                  "column": 30,
                  "line": 35
                }
              }
            }
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 35
            },
            "start": {
              "column": 29,
              "line": 35
            }
          }
        },
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "range": [
            1351,
            1367
          ],
          "loc": {
            "end": {
              "column": 29,
              "line": 35
            },
            "start": {
              "column": 13,
              "line": 35
            }
          }
        },
        "range": [
          1351,
          1389
        ],
        "loc": {
          "end": {
            "column": 51,
            "line": 35
          },
          "start": {
            "column": 13,
            "line": 35
          }
        }
      },
      "range": [
        1338,
        1390
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "range": [
              1448,
              1454
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 38
              },
              "start": {
                "column": 0,
                "line": 38
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "\"baz\"",
            "value": "baz",
            "range": [
              1455,
              1460
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 38
              },
              "start": {
                "column": 7,
                "line": 38
              }
            }
          },
          "range": [
            1448,
            1461
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 38
            },
            "start": {
              "column": 0,
              "line": 38
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "range": [
            1464,
            1473
          ],
          "loc": {
            "end": {
              "column": 25,
              "line": 38
            },
            "start": {
              "column": 16,
              "line": 38
            }
          }
        },
        "range": [
          1448,
          1473
        ],
        "loc": {
          "end": {
            "column": 25,
            "line": 38
          },
          "start": {
            "column": 0,
            "line": 38
          }
        }
      },
      "range": [
        1448,
        1474
      ],
      "loc": {
        "end": {
          "column": 26,
          "line": 38
        },
        "start": {
          "column": 0,
          "line": 38
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "range": [
              1475,
              1481
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 39
              },
              "start": {
                "column": 0,
                "line": 39
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "qua",
            "optional": false,
            "range": [
              1482,
              1485
            ],
            "loc": {
              "end": {
                "column": 10,
                "line": 39
              },
              "start": {
                "column": 7,
                "line": 39
              }
            }
          },
          "range": [
            1475,
            1485
          ],
          "loc": {
            "end": {
              "column": 10,
              "line": 39
            },
            "start": {
              "column": 0,
              "line": 39
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "range": [
            1488,
            1497
          ],
          "loc": {
            "end": {
              "column": 22,
              "line": 39
            },
            "start": {
              "column": 13,
              "line": 39
            }
          }
        },
        "range": [
          1475,
          1497
        ],
        "loc": {
          "end": {
            "column": 22,
            "line": 39
          },
          "start": {
            "column": 0,
            "line": 39
          }
        }
      },
      "range": [
        1475,
        1498
      ],
      "loc": {
        "end": {
          "column": 23,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 39
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "range": [
              1499,
              1505
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 40
              },
              "start": {
                "column": 0,
                "line": 40
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "raw": "0",
            "value": 0,
            "range": [
              1506,
              1507
            ],
            "loc": {
              "end": {
                "column": 8,
                "line": 40
              },
              "start": {
                "column": 7,
                "line": 40
              }
            }
          },
          "range": [
            1499,
            1508
          ],
          "loc": {
            "end": {
              "column": 9,
              "line": 40
            },
            "start": {
              "column": 0,
              "line": 40
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "range": [
            1511,
            1520
          ],
          "loc": {
            "end": {
              "column": 21,
              "line": 40
            },
            "start": {
              "column": 12,
              "line": 40
            }
          }
        },
        "range": [
          1499,
          1520
        ],
        "loc": {
          "end": {
            "column": 21,
            "line": 40
          },
          "start": {
            "column": 0,
            "line": 40
          }
        }
      },
      "range": [
        1499,
        1521
      ],
      "loc": {
        "end": {
          "column": 22,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "range": [
              1522,
              1528
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 41
              },
              "start": {
                "column": 0,
                "line": 41
              }
            }
          },
          "optional": false,
          "property": {
            "type": "TSAsExpression",
            "expression": {
              "type": "Literal",
              "raw": "null",
              "value": null,
              "range": [
                1529,
                1533
              ],
              "loc": {
                "end": {
                  "column": 11,
                  "line": 41
                },
                "start": {
                  "column": 7,
                  "line": 41
                }
              }
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1537,
                1540
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 41
                },
                "start": {
                  "column": 15,
                  "line": 41
                }
              }
            },
            "range": [
              1529,
              1540
            ],
            "loc": {
              "end": {
                "column": 18,
                "line": 41
              },
              "start": {
                "column": 7,
                "line": 41
              }
            }
          },
          "range": [
            1522,
            1541
          ],
          "loc": {
            "end": {
              "column": 19,
              "line": 41
            },
            "start": {
              "column": 0,
              "line": 41
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "range": [
            1544,
            1553
          ],
          "loc": {
            "end": {
              "column": 31,
              "line": 41
            },
            "start": {
              "column": 22,
              "line": 41
            }
          }
        },
        "range": [
          1522,
          1553
        ],
        "loc": {
          "end": {
            "column": 31,
            "line": 41
          },
          "start": {
            "column": 0,
            "line": 41
          }
        }
      },
      "range": [
        1522,
        1554
      ],
      "loc": {
        "end": {
          "column": 32,
          "line": 41
        },
        "start": {
          "column": 0,
          "line": 41
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
            "name": "numMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 46,
                  "line": 44
                },
                "start": {
                  "column": 20,
                  "line": 44
                }
              },
              "range": [
                1610,
                1636
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 34,
                              "line": 44
                            },
                            "start": {
                              "column": 26,
                              "line": 44
                            }
                          },
                          "range": [
                            1616,
                            1624
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              1618,
                              1624
                            ],
                            "loc": {
                              "end": {
                                "column": 34,
                                "line": 44
                              },
                              "start": {
                                "column": 28,
                                "line": 44
                              }
                            }
                          }
                        },
                        "range": [
                          1615,
                          1624
                        ],
                        "loc": {
                          "end": {
                            "column": 34,
                            "line": 44
                          },
                          "start": {
                            "column": 25,
                            "line": 44
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 44,
                          "line": 44
                        },
                        "start": {
                          "column": 35,
                          "line": 44
                        }
                      },
                      "range": [
                        1625,
                        1634
                      ],
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "range": [
                          1627,
                          1634
                        ],
                        "loc": {
                          "end": {
                            "column": 44,
                            "line": 44
                          },
                          "start": {
                            "column": 37,
                            "line": 44
                          }
                        }
                      }
                    },
                    "range": [
                      1614,
                      1634
                    ],
                    "loc": {
                      "end": {
                        "column": 44,
                        "line": 44
                      },
                      "start": {
                        "column": 24,
                        "line": 44
                      }
                    }
                  }
                ],
                "range": [
                  1612,
                  1636
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 44
                  },
                  "start": {
                    "column": 22,
                    "line": 44
                  }
                }
              }
            },
            "range": [
              1604,
              1636
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 44
              },
              "start": {
                "column": 14,
                "line": 44
              }
            }
          },
          "init": null,
          "range": [
            1604,
            1636
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 44
            },
            "start": {
              "column": 14,
              "line": 44
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        1590,
        1637
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 44
        },
        "start": {
          "column": 0,
          "line": 44
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
            "name": "num_ok1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 46
                },
                "start": {
                  "column": 13,
                  "line": 46
                }
              },
              "range": [
                1680,
                1689
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  1682,
                  1689
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 46
                  },
                  "start": {
                    "column": 15,
                    "line": 46
                  }
                }
              }
            },
            "range": [
              1673,
              1689
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 46
              },
              "start": {
                "column": 6,
                "line": 46
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "range": [
                1692,
                1698
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 46
                },
                "start": {
                  "column": 25,
                  "line": 46
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                1699,
                1700
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 46
                },
                "start": {
                  "column": 32,
                  "line": 46
                }
              }
            },
            "range": [
              1692,
              1701
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 46
              },
              "start": {
                "column": 25,
                "line": 46
              }
            }
          },
          "range": [
            1673,
            1701
          ],
          "loc": {
            "end": {
              "column": 34,
              "line": 46
            },
            "start": {
              "column": 6,
              "line": 46
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1667,
        1702
      ],
      "loc": {
        "end": {
          "column": 35,
          "line": 46
        },
        "start": {
          "column": 0,
          "line": 46
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
            "name": "num_ok2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 47
                },
                "start": {
                  "column": 13,
                  "line": 47
                }
              },
              "range": [
                1716,
                1725
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  1718,
                  1725
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 47
                  },
                  "start": {
                    "column": 15,
                    "line": 47
                  }
                }
              }
            },
            "range": [
              1709,
              1725
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 47
              },
              "start": {
                "column": 6,
                "line": 47
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "range": [
                1728,
                1734
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 47
                },
                "start": {
                  "column": 25,
                  "line": 47
                }
              }
            },
            "optional": false,
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1735,
                  1736
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 47
                  },
                  "start": {
                    "column": 32,
                    "line": 47
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "range": [
                  1740,
                  1746
                ],
                "loc": {
                  "end": {
                    "column": 43,
                    "line": 47
                  },
                  "start": {
                    "column": 37,
                    "line": 47
                  }
                }
              },
              "range": [
                1735,
                1746
              ],
              "loc": {
                "end": {
                  "column": 43,
                  "line": 47
                },
                "start": {
                  "column": 32,
                  "line": 47
                }
              }
            },
            "range": [
              1728,
              1747
            ],
            "loc": {
              "end": {
                "column": 44,
                "line": 47
              },
              "start": {
                "column": 25,
                "line": 47
              }
            }
          },
          "range": [
            1709,
            1747
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 47
            },
            "start": {
              "column": 6,
              "line": 47
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1703,
        1748
      ],
      "loc": {
        "end": {
          "column": 45,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
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
            "name": "num_ok3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 48
                },
                "start": {
                  "column": 13,
                  "line": 48
                }
              },
              "range": [
                1762,
                1771
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  1764,
                  1771
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 48
                  },
                  "start": {
                    "column": 15,
                    "line": 48
                  }
                }
              }
            },
            "range": [
              1755,
              1771
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 48
              },
              "start": {
                "column": 6,
                "line": 48
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "range": [
                1774,
                1780
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 48
                },
                "start": {
                  "column": 25,
                  "line": 48
                }
              }
            },
            "optional": false,
            "property": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "raw": "0",
                "value": 0,
                "range": [
                  1781,
                  1782
                ],
                "loc": {
                  "end": {
                    "column": 33,
                    "line": 48
                  },
                  "start": {
                    "column": 32,
                    "line": 48
                  }
                }
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "0",
                      "value": 0,
                      "range": [
                        1786,
                        1787
                      ],
                      "loc": {
                        "end": {
                          "column": 38,
                          "line": 48
                        },
                        "start": {
                          "column": 37,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      1786,
                      1787
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 48
                      },
                      "start": {
                        "column": 37,
                        "line": 48
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "raw": "1",
                      "value": 1,
                      "range": [
                        1790,
                        1791
                      ],
                      "loc": {
                        "end": {
                          "column": 42,
                          "line": 48
                        },
                        "start": {
                          "column": 41,
                          "line": 48
                        }
                      }
                    },
                    "range": [
                      1790,
                      1791
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 48
                      },
                      "start": {
                        "column": 41,
                        "line": 48
                      }
                    }
                  }
                ],
                "range": [
                  1786,
                  1791
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 48
                  },
                  "start": {
                    "column": 37,
                    "line": 48
                  }
                }
              },
              "range": [
                1781,
                1791
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 48
                },
                "start": {
                  "column": 32,
                  "line": 48
                }
              }
            },
            "range": [
              1774,
              1792
            ],
            "loc": {
              "end": {
                "column": 43,
                "line": 48
              },
              "start": {
                "column": 25,
                "line": 48
              }
            }
          },
          "range": [
            1755,
            1792
          ],
          "loc": {
            "end": {
              "column": 43,
              "line": 48
            },
            "start": {
              "column": 6,
              "line": 48
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1749,
        1793
      ],
      "loc": {
        "end": {
          "column": 44,
          "line": 48
        },
        "start": {
          "column": 0,
          "line": 48
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
            "name": "num_ok4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 49
                },
                "start": {
                  "column": 13,
                  "line": 49
                }
              },
              "range": [
                1807,
                1816
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  1809,
                  1816
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 49
                  },
                  "start": {
                    "column": 15,
                    "line": 49
                  }
                }
              }
            },
            "range": [
              1800,
              1816
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 49
              },
              "start": {
                "column": 6,
                "line": 49
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "range": [
                1819,
                1825
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 49
                },
                "start": {
                  "column": 25,
                  "line": 49
                }
              }
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumericEnum1",
                "optional": false,
                "range": [
                  1826,
                  1838
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 49
                  },
                  "start": {
                    "column": 32,
                    "line": 49
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  1839,
                  1840
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 49
                  },
                  "start": {
                    "column": 45,
                    "line": 49
                  }
                }
              },
              "range": [
                1826,
                1840
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 49
                },
                "start": {
                  "column": 32,
                  "line": 49
                }
              }
            },
            "range": [
              1819,
              1841
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 49
              },
              "start": {
                "column": 25,
                "line": 49
              }
            }
          },
          "range": [
            1800,
            1841
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 49
            },
            "start": {
              "column": 6,
              "line": 49
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1794,
        1842
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
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
            "name": "num_ok5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 22,
                  "line": 50
                },
                "start": {
                  "column": 13,
                  "line": 50
                }
              },
              "range": [
                1856,
                1865
              ],
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "range": [
                  1858,
                  1865
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 50
                  },
                  "start": {
                    "column": 15,
                    "line": 50
                  }
                }
              }
            },
            "range": [
              1849,
              1865
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 50
              },
              "start": {
                "column": 6,
                "line": 50
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "range": [
                1868,
                1874
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 50
                },
                "start": {
                  "column": 25,
                  "line": 50
                }
              }
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NumericEnum2",
                "optional": false,
                "range": [
                  1875,
                  1887
                ],
                "loc": {
                  "end": {
                    "column": 44,
                    "line": 50
                  },
                  "start": {
                    "column": 32,
                    "line": 50
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "range": [
                  1888,
                  1889
                ],
                "loc": {
                  "end": {
                    "column": 46,
                    "line": 50
                  },
                  "start": {
                    "column": 45,
                    "line": 50
                  }
                }
              },
              "range": [
                1875,
                1889
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 50
                },
                "start": {
                  "column": 32,
                  "line": 50
                }
              }
            },
            "range": [
              1868,
              1890
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 50
              },
              "start": {
                "column": 25,
                "line": 50
              }
            }
          },
          "range": [
            1849,
            1890
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 50
            },
            "start": {
              "column": 6,
              "line": 50
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        1843,
        1891
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 50
        },
        "start": {
          "column": 0,
          "line": 50
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
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "range": [
                  2009,
                  2012
                ],
                "loc": {
                  "end": {
                    "column": 14,
                    "line": 55
                  },
                  "start": {
                    "column": 11,
                    "line": 55
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "raw": "\"blah\"",
                "value": "blah",
                "range": [
                  2013,
                  2019
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 55
                  },
                  "start": {
                    "column": 15,
                    "line": 55
                  }
                }
              },
              "range": [
                2009,
                2020
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 55
                },
                "start": {
                  "column": 11,
                  "line": 55
                }
              }
            },
            "range": [
              2002,
              2021
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 55
              },
              "start": {
                "column": 4,
                "line": 55
              }
            }
          }
        ],
        "range": [
          1976,
          2023
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 56
          },
          "start": {
            "column": 71,
            "line": 53
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "generic1",
        "optional": false,
        "range": [
          1914,
          1922
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 53
          },
          "start": {
            "column": 9,
            "line": 53
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 53
              },
              "start": {
                "column": 57,
                "line": 53
              }
            },
            "range": [
              1962,
              1965
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  1964,
                  1965
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 53
                  },
                  "start": {
                    "column": 59,
                    "line": 53
                  }
                }
              },
              "range": [
                1964,
                1965
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 53
                },
                "start": {
                  "column": 59,
                  "line": 53
                }
              }
            }
          },
          "range": [
            1959,
            1965
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 53
            },
            "start": {
              "column": 54,
              "line": 53
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 70,
            "line": 53
          },
          "start": {
            "column": 61,
            "line": 53
          }
        },
        "range": [
          1966,
          1975
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            1968,
            1975
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 53
            },
            "start": {
              "column": 63,
              "line": 53
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 53,
            "line": 53
          },
          "start": {
            "column": 17,
            "line": 53
          }
        },
        "range": [
          1922,
          1958
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 53
                          },
                          "start": {
                            "column": 32,
                            "line": 53
                          }
                        },
                        "range": [
                          1937,
                          1945
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            1939,
                            1945
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 53
                            },
                            "start": {
                              "column": 34,
                              "line": 53
                            }
                          }
                        }
                      },
                      "range": [
                        1936,
                        1945
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 53
                        },
                        "start": {
                          "column": 31,
                          "line": 53
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 53
                      },
                      "start": {
                        "column": 41,
                        "line": 53
                      }
                    },
                    "range": [
                      1946,
                      1955
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        1948,
                        1955
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 53
                        },
                        "start": {
                          "column": 43,
                          "line": 53
                        }
                      }
                    }
                  },
                  "range": [
                    1935,
                    1955
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 53
                    },
                    "start": {
                      "column": 30,
                      "line": 53
                    }
                  }
                }
              ],
              "range": [
                1933,
                1957
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 53
                },
                "start": {
                  "column": 28,
                  "line": 53
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
                1923,
                1924
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 53
                },
                "start": {
                  "column": 18,
                  "line": 53
                }
              }
            },
            "out": false,
            "range": [
              1923,
              1957
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 53
              },
              "start": {
                "column": 18,
                "line": 53
              }
            }
          }
        ]
      },
      "range": [
        1905,
        2023
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 56
        },
        "start": {
          "column": 0,
          "line": 53
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
            "type": "ReturnStatement",
            "argument": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "range": [
                    2125,
                    2128
                  ],
                  "loc": {
                    "end": {
                      "column": 14,
                      "line": 59
                    },
                    "start": {
                      "column": 11,
                      "line": 59
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "raw": "\"blah\"",
                  "value": "blah",
                  "range": [
                    2129,
                    2135
                  ],
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 59
                    },
                    "start": {
                      "column": 15,
                      "line": 59
                    }
                  }
                },
                "range": [
                  2125,
                  2136
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 59
                  },
                  "start": {
                    "column": 11,
                    "line": 59
                  }
                }
              },
              "range": [
                2125,
                2137
              ],
              "loc": {
                "end": {
                  "column": 23,
                  "line": 59
                },
                "start": {
                  "column": 11,
                  "line": 59
                }
              }
            },
            "range": [
              2118,
              2138
            ],
            "loc": {
              "end": {
                "column": 24,
                "line": 59
              },
              "start": {
                "column": 4,
                "line": 59
              }
            }
          }
        ],
        "range": [
          2095,
          2140
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 60
          },
          "start": {
            "column": 71,
            "line": 57
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "generic2",
        "optional": false,
        "range": [
          2033,
          2041
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 57
          },
          "start": {
            "column": 9,
            "line": 57
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 60,
                "line": 57
              },
              "start": {
                "column": 57,
                "line": 57
              }
            },
            "range": [
              2081,
              2084
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  2083,
                  2084
                ],
                "loc": {
                  "end": {
                    "column": 60,
                    "line": 57
                  },
                  "start": {
                    "column": 59,
                    "line": 57
                  }
                }
              },
              "range": [
                2083,
                2084
              ],
              "loc": {
                "end": {
                  "column": 60,
                  "line": 57
                },
                "start": {
                  "column": 59,
                  "line": 57
                }
              }
            }
          },
          "range": [
            2078,
            2084
          ],
          "loc": {
            "end": {
              "column": 60,
              "line": 57
            },
            "start": {
              "column": 54,
              "line": 57
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 70,
            "line": 57
          },
          "start": {
            "column": 61,
            "line": 57
          }
        },
        "range": [
          2085,
          2094
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            2087,
            2094
          ],
          "loc": {
            "end": {
              "column": 70,
              "line": 57
            },
            "start": {
              "column": 63,
              "line": 57
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 53,
            "line": 57
          },
          "start": {
            "column": 17,
            "line": 57
          }
        },
        "range": [
          2041,
          2077
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 40,
                            "line": 57
                          },
                          "start": {
                            "column": 32,
                            "line": 57
                          }
                        },
                        "range": [
                          2056,
                          2064
                        ],
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "range": [
                            2058,
                            2064
                          ],
                          "loc": {
                            "end": {
                              "column": 40,
                              "line": 57
                            },
                            "start": {
                              "column": 34,
                              "line": 57
                            }
                          }
                        }
                      },
                      "range": [
                        2055,
                        2064
                      ],
                      "loc": {
                        "end": {
                          "column": 40,
                          "line": 57
                        },
                        "start": {
                          "column": 31,
                          "line": 57
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 50,
                        "line": 57
                      },
                      "start": {
                        "column": 41,
                        "line": 57
                      }
                    },
                    "range": [
                      2065,
                      2074
                    ],
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "range": [
                        2067,
                        2074
                      ],
                      "loc": {
                        "end": {
                          "column": 50,
                          "line": 57
                        },
                        "start": {
                          "column": 43,
                          "line": 57
                        }
                      }
                    }
                  },
                  "range": [
                    2054,
                    2074
                  ],
                  "loc": {
                    "end": {
                      "column": 50,
                      "line": 57
                    },
                    "start": {
                      "column": 30,
                      "line": 57
                    }
                  }
                }
              ],
              "range": [
                2052,
                2076
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 57
                },
                "start": {
                  "column": 28,
                  "line": 57
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
                2042,
                2043
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 57
                },
                "start": {
                  "column": 18,
                  "line": 57
                }
              }
            },
            "out": false,
            "range": [
              2042,
              2076
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 57
              },
              "start": {
                "column": 18,
                "line": 57
              }
            }
          }
        ]
      },
      "range": [
        2024,
        2140
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 60
        },
        "start": {
          "column": 0,
          "line": 57
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
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "strMap",
                "optional": false,
                "range": [
                  2227,
                  2233
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 63
                  },
                  "start": {
                    "column": 11,
                    "line": 63
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "range": [
                  2234,
                  2237
                ],
                "loc": {
                  "end": {
                    "column": 21,
                    "line": 63
                  },
                  "start": {
                    "column": 18,
                    "line": 63
                  }
                }
              },
              "range": [
                2227,
                2238
              ],
              "loc": {
                "end": {
                  "column": 22,
                  "line": 63
                },
                "start": {
                  "column": 11,
                  "line": 63
                }
              }
            },
            "range": [
              2220,
              2239
            ],
            "loc": {
              "end": {
                "column": 23,
                "line": 63
              },
              "start": {
                "column": 4,
                "line": 63
              }
            }
          }
        ],
        "range": [
          2194,
          2241
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 64
          },
          "start": {
            "column": 53,
            "line": 61
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "generic3",
        "optional": false,
        "range": [
          2150,
          2158
        ],
        "loc": {
          "end": {
            "column": 17,
            "line": 61
          },
          "start": {
            "column": 9,
            "line": 61
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 61
              },
              "start": {
                "column": 39,
                "line": 61
              }
            },
            "range": [
              2180,
              2183
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "range": [
                  2182,
                  2183
                ],
                "loc": {
                  "end": {
                    "column": 42,
                    "line": 61
                  },
                  "start": {
                    "column": 41,
                    "line": 61
                  }
                }
              },
              "range": [
                2182,
                2183
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 61
                },
                "start": {
                  "column": 41,
                  "line": 61
                }
              }
            }
          },
          "range": [
            2177,
            2183
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 61
            },
            "start": {
              "column": 36,
              "line": 61
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 52,
            "line": 61
          },
          "start": {
            "column": 43,
            "line": 61
          }
        },
        "range": [
          2184,
          2193
        ],
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "range": [
            2186,
            2193
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 61
            },
            "start": {
              "column": 45,
              "line": 61
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "loc": {
          "end": {
            "column": 35,
            "line": 61
          },
          "start": {
            "column": 17,
            "line": 61
          }
        },
        "range": [
          2158,
          2176
        ],
        "params": [
          {
            "type": "TSTypeParameter",
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "range": [
                2169,
                2175
              ],
              "loc": {
                "end": {
                  "column": 34,
                  "line": 61
                },
                "start": {
                  "column": 28,
                  "line": 61
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
                2159,
                2160
              ],
              "loc": {
                "end": {
                  "column": 19,
                  "line": 61
                },
                "start": {
                  "column": 18,
                  "line": 61
                }
              }
            },
            "out": false,
            "range": [
              2159,
              2175
            ],
            "loc": {
              "end": {
                "column": 34,
                "line": 61
              },
              "start": {
                "column": 18,
                "line": 61
              }
            }
          }
        ]
      },
      "range": [
        2141,
        2241
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 61
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 76,
                  "line": 67
                },
                "start": {
                  "column": 18,
                  "line": 67
                }
              },
              "range": [
                2307,
                2365
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "range": [
                        2311,
                        2312
                      ],
                      "loc": {
                        "end": {
                          "column": 23,
                          "line": 67
                        },
                        "start": {
                          "column": 22,
                          "line": 67
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
                          "column": 31,
                          "line": 67
                        },
                        "start": {
                          "column": 23,
                          "line": 67
                        }
                      },
                      "range": [
                        2312,
                        2320
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          2314,
                          2320
                        ],
                        "loc": {
                          "end": {
                            "column": 31,
                            "line": 67
                          },
                          "start": {
                            "column": 25,
                            "line": 67
                          }
                        }
                      }
                    },
                    "range": [
                      2311,
                      2321
                    ],
                    "loc": {
                      "end": {
                        "column": 32,
                        "line": 67
                      },
                      "start": {
                        "column": 22,
                        "line": 67
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "range": [
                        2322,
                        2323
                      ],
                      "loc": {
                        "end": {
                          "column": 34,
                          "line": 67
                        },
                        "start": {
                          "column": 33,
                          "line": 67
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
                          "column": 42,
                          "line": 67
                        },
                        "start": {
                          "column": 34,
                          "line": 67
                        }
                      },
                      "range": [
                        2323,
                        2331
                      ],
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "range": [
                          2325,
                          2331
                        ],
                        "loc": {
                          "end": {
                            "column": 42,
                            "line": 67
                          },
                          "start": {
                            "column": 36,
                            "line": 67
                          }
                        }
                      }
                    },
                    "range": [
                      2322,
                      2332
                    ],
                    "loc": {
                      "end": {
                        "column": 43,
                        "line": 67
                      },
                      "start": {
                        "column": 33,
                        "line": 67
                      }
                    }
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 56,
                              "line": 67
                            },
                            "start": {
                              "column": 48,
                              "line": 67
                            }
                          },
                          "range": [
                            2337,
                            2345
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              2339,
                              2345
                            ],
                            "loc": {
                              "end": {
                                "column": 56,
                                "line": 67
                              },
                              "start": {
                                "column": 50,
                                "line": 67
                              }
                            }
                          }
                        },
                        "range": [
                          2334,
                          2345
                        ],
                        "loc": {
                          "end": {
                            "column": 56,
                            "line": 67
                          },
                          "start": {
                            "column": 45,
                            "line": 67
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 74,
                          "line": 67
                        },
                        "start": {
                          "column": 57,
                          "line": 67
                        }
                      },
                      "range": [
                        2346,
                        2363
                      ],
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "range": [
                              2348,
                              2354
                            ],
                            "loc": {
                              "end": {
                                "column": 65,
                                "line": 67
                              },
                              "start": {
                                "column": 59,
                                "line": 67
                              }
                            }
                          },
                          {
                            "type": "TSNumberKeyword",
                            "range": [
                              2357,
                              2363
                            ],
                            "loc": {
                              "end": {
                                "column": 74,
                                "line": 67
                              },
                              "start": {
                                "column": 68,
                                "line": 67
                              }
                            }
                          }
                        ],
                        "range": [
                          2348,
                          2363
                        ],
                        "loc": {
                          "end": {
                            "column": 74,
                            "line": 67
                          },
                          "start": {
                            "column": 59,
                            "line": 67
                          }
                        }
                      }
                    },
                    "range": [
                      2333,
                      2363
                    ],
                    "loc": {
                      "end": {
                        "column": 74,
                        "line": 67
                      },
                      "start": {
                        "column": 44,
                        "line": 67
                      }
                    }
                  }
                ],
                "range": [
                  2309,
                  2365
                ],
                "loc": {
                  "end": {
                    "column": 76,
                    "line": 67
                  },
                  "start": {
                    "column": 20,
                    "line": 67
                  }
                }
              }
            },
            "range": [
              2303,
              2365
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 67
              },
              "start": {
                "column": 14,
                "line": 67
              }
            }
          },
          "init": null,
          "range": [
            2303,
            2365
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 67
            },
            "start": {
              "column": 14,
              "line": 67
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        2289,
        2366
      ],
      "loc": {
        "end": {
          "column": 77,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "range": [
            2367,
            2371
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 68
            },
            "start": {
              "column": 0,
              "line": 68
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Literal",
          "raw": "\"x\"",
          "value": "x",
          "range": [
            2372,
            2375
          ],
          "loc": {
            "end": {
              "column": 8,
              "line": 68
            },
            "start": {
              "column": 5,
              "line": 68
            }
          }
        },
        "range": [
          2367,
          2376
        ],
        "loc": {
          "end": {
            "column": 9,
            "line": 68
          },
          "start": {
            "column": 0,
            "line": 68
          }
        }
      },
      "range": [
        2367,
        2377
      ],
      "loc": {
        "end": {
          "column": 10,
          "line": 68
        },
        "start": {
          "column": 0,
          "line": 68
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
            "name": "y",
            "optional": false,
            "range": [
              2384,
              2385
            ],
            "loc": {
              "end": {
                "column": 7,
                "line": 69
              },
              "start": {
                "column": 6,
                "line": 69
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"y\"",
            "value": "y",
            "range": [
              2388,
              2391
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 69
              },
              "start": {
                "column": 10,
                "line": 69
              }
            }
          },
          "range": [
            2384,
            2391
          ],
          "loc": {
            "end": {
              "column": 13,
              "line": 69
            },
            "start": {
              "column": 6,
              "line": 69
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2378,
        2392
      ],
      "loc": {
        "end": {
          "column": 14,
          "line": 69
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "range": [
            2393,
            2397
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 70
            },
            "start": {
              "column": 0,
              "line": 70
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "range": [
            2398,
            2399
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 70
            },
            "start": {
              "column": 5,
              "line": 70
            }
          }
        },
        "range": [
          2393,
          2400
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 70
          },
          "start": {
            "column": 0,
            "line": 70
          }
        }
      },
      "range": [
        2393,
        2401
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 70
        },
        "start": {
          "column": 0,
          "line": 70
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
            "name": "yy",
            "optional": false,
            "range": [
              2406,
              2408
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 71
              },
              "start": {
                "column": 4,
                "line": 71
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"y\"",
            "value": "y",
            "range": [
              2411,
              2414
            ],
            "loc": {
              "end": {
                "column": 12,
                "line": 71
              },
              "start": {
                "column": 9,
                "line": 71
              }
            }
          },
          "range": [
            2406,
            2414
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 71
            },
            "start": {
              "column": 4,
              "line": 71
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2402,
        2415
      ],
      "loc": {
        "end": {
          "column": 13,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 71
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "range": [
            2416,
            2420
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 72
            },
            "start": {
              "column": 0,
              "line": 72
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "yy",
          "optional": false,
          "range": [
            2421,
            2423
          ],
          "loc": {
            "end": {
              "column": 7,
              "line": 72
            },
            "start": {
              "column": 5,
              "line": 72
            }
          }
        },
        "range": [
          2416,
          2424
        ],
        "loc": {
          "end": {
            "column": 8,
            "line": 72
          },
          "start": {
            "column": 0,
            "line": 72
          }
        }
      },
      "range": [
        2416,
        2425
      ],
      "loc": {
        "end": {
          "column": 9,
          "line": 72
        },
        "start": {
          "column": 0,
          "line": 72
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
            "name": "z",
            "optional": false,
            "range": [
              2430,
              2431
            ],
            "loc": {
              "end": {
                "column": 5,
                "line": 73
              },
              "start": {
                "column": 4,
                "line": 73
              }
            }
          },
          "init": {
            "type": "Literal",
            "raw": "\"z\"",
            "value": "z",
            "range": [
              2434,
              2437
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 73
              },
              "start": {
                "column": 8,
                "line": 73
              }
            }
          },
          "range": [
            2430,
            2437
          ],
          "loc": {
            "end": {
              "column": 11,
              "line": 73
            },
            "start": {
              "column": 4,
              "line": 73
            }
          }
        }
      ],
      "declare": false,
      "kind": "let",
      "range": [
        2426,
        2438
      ],
      "loc": {
        "end": {
          "column": 12,
          "line": 73
        },
        "start": {
          "column": 0,
          "line": 73
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "range": [
            2439,
            2443
          ],
          "loc": {
            "end": {
              "column": 4,
              "line": 74
            },
            "start": {
              "column": 0,
              "line": 74
            }
          }
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "range": [
            2444,
            2445
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 74
            },
            "start": {
              "column": 5,
              "line": 74
            }
          }
        },
        "range": [
          2439,
          2446
        ],
        "loc": {
          "end": {
            "column": 7,
            "line": 74
          },
          "start": {
            "column": 0,
            "line": 74
          }
        }
      },
      "range": [
        2439,
        2447
      ],
      "loc": {
        "end": {
          "column": 8,
          "line": 74
        },
        "start": {
          "column": 0,
          "line": 74
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
            "name": "strMapUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 77,
                  "line": 77
                },
                "start": {
                  "column": 25,
                  "line": 77
                }
              },
              "range": [
                2498,
                2550
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 39,
                                  "line": 77
                                },
                                "start": {
                                  "column": 31,
                                  "line": 77
                                }
                              },
                              "range": [
                                2504,
                                2512
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  2506,
                                  2512
                                ],
                                "loc": {
                                  "end": {
                                    "column": 39,
                                    "line": 77
                                  },
                                  "start": {
                                    "column": 33,
                                    "line": 77
                                  }
                                }
                              }
                            },
                            "range": [
                              2503,
                              2512
                            ],
                            "loc": {
                              "end": {
                                "column": 39,
                                "line": 77
                              },
                              "start": {
                                "column": 30,
                                "line": 77
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 49,
                              "line": 77
                            },
                            "start": {
                              "column": 40,
                              "line": 77
                            }
                          },
                          "range": [
                            2513,
                            2522
                          ],
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "range": [
                              2515,
                              2522
                            ],
                            "loc": {
                              "end": {
                                "column": 49,
                                "line": 77
                              },
                              "start": {
                                "column": 42,
                                "line": 77
                              }
                            }
                          }
                        },
                        "range": [
                          2502,
                          2522
                        ],
                        "loc": {
                          "end": {
                            "column": 49,
                            "line": 77
                          },
                          "start": {
                            "column": 29,
                            "line": 77
                          }
                        }
                      }
                    ],
                    "range": [
                      2500,
                      2524
                    ],
                    "loc": {
                      "end": {
                        "column": 51,
                        "line": 77
                      },
                      "start": {
                        "column": 27,
                        "line": 77
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "parameters": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "loc": {
                                "end": {
                                  "column": 66,
                                  "line": 77
                                },
                                "start": {
                                  "column": 58,
                                  "line": 77
                                }
                              },
                              "range": [
                                2531,
                                2539
                              ],
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "range": [
                                  2533,
                                  2539
                                ],
                                "loc": {
                                  "end": {
                                    "column": 66,
                                    "line": 77
                                  },
                                  "start": {
                                    "column": 60,
                                    "line": 77
                                  }
                                }
                              }
                            },
                            "range": [
                              2530,
                              2539
                            ],
                            "loc": {
                              "end": {
                                "column": 66,
                                "line": 77
                              },
                              "start": {
                                "column": 57,
                                "line": 77
                              }
                            }
                          }
                        ],
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 75,
                              "line": 77
                            },
                            "start": {
                              "column": 67,
                              "line": 77
                            }
                          },
                          "range": [
                            2540,
                            2548
                          ],
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "range": [
                              2542,
                              2548
                            ],
                            "loc": {
                              "end": {
                                "column": 75,
                                "line": 77
                              },
                              "start": {
                                "column": 69,
                                "line": 77
                              }
                            }
                          }
                        },
                        "range": [
                          2529,
                          2548
                        ],
                        "loc": {
                          "end": {
                            "column": 75,
                            "line": 77
                          },
                          "start": {
                            "column": 56,
                            "line": 77
                          }
                        }
                      }
                    ],
                    "range": [
                      2527,
                      2550
                    ],
                    "loc": {
                      "end": {
                        "column": 77,
                        "line": 77
                      },
                      "start": {
                        "column": 54,
                        "line": 77
                      }
                    }
                  }
                ],
                "range": [
                  2500,
                  2550
                ],
                "loc": {
                  "end": {
                    "column": 77,
                    "line": 77
                  },
                  "start": {
                    "column": 27,
                    "line": 77
                  }
                }
              }
            },
            "range": [
              2487,
              2550
            ],
            "loc": {
              "end": {
                "column": 77,
                "line": 77
              },
              "start": {
                "column": 14,
                "line": 77
              }
            }
          },
          "init": null,
          "range": [
            2487,
            2550
          ],
          "loc": {
            "end": {
              "column": 77,
              "line": 77
            },
            "start": {
              "column": 14,
              "line": 77
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        2473,
        2551
      ],
      "loc": {
        "end": {
          "column": 78,
          "line": 77
        },
        "start": {
          "column": 0,
          "line": 77
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
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 26,
                  "line": 79
                },
                "start": {
                  "column": 8,
                  "line": 79
                }
              },
              "range": [
                2576,
                2594
              ],
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "range": [
                      2578,
                      2585
                    ],
                    "loc": {
                      "end": {
                        "column": 17,
                        "line": 79
                      },
                      "start": {
                        "column": 10,
                        "line": 79
                      }
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "range": [
                      2588,
                      2594
                    ],
                    "loc": {
                      "end": {
                        "column": 26,
                        "line": 79
                      },
                      "start": {
                        "column": 20,
                        "line": 79
                      }
                    }
                  }
                ],
                "range": [
                  2578,
                  2594
                ],
                "loc": {
                  "end": {
                    "column": 26,
                    "line": 79
                  },
                  "start": {
                    "column": 10,
                    "line": 79
                  }
                }
              }
            },
            "range": [
              2574,
              2594
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 79
              },
              "start": {
                "column": 6,
                "line": 79
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strMapUnion",
              "optional": false,
              "range": [
                2597,
                2608
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 79
                },
                "start": {
                  "column": 29,
                  "line": 79
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "\"foo\"",
              "value": "foo",
              "range": [
                2609,
                2614
              ],
              "loc": {
                "end": {
                  "column": 46,
                  "line": 79
                },
                "start": {
                  "column": 41,
                  "line": 79
                }
              }
            },
            "range": [
              2597,
              2615
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 79
              },
              "start": {
                "column": 29,
                "line": 79
              }
            }
          },
          "range": [
            2574,
            2615
          ],
          "loc": {
            "end": {
              "column": 47,
              "line": 79
            },
            "start": {
              "column": 6,
              "line": 79
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2568,
        2616
      ],
      "loc": {
        "end": {
          "column": 48,
          "line": 79
        },
        "start": {
          "column": 0,
          "line": 79
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
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 30,
                  "line": 82
                },
                "start": {
                  "column": 15,
                  "line": 82
                }
              },
              "range": [
                2660,
                2675
              ],
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "range": [
                    2669,
                    2675
                  ],
                  "loc": {
                    "end": {
                      "column": 30,
                      "line": 82
                    },
                    "start": {
                      "column": 24,
                      "line": 82
                    }
                  }
                },
                "range": [
                  2662,
                  2675
                ],
                "loc": {
                  "end": {
                    "column": 30,
                    "line": 82
                  },
                  "start": {
                    "column": 17,
                    "line": 82
                  }
                }
              }
            },
            "range": [
              2659,
              2675
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 82
              },
              "start": {
                "column": 14,
                "line": 82
              }
            }
          },
          "init": null,
          "range": [
            2659,
            2675
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 82
            },
            "start": {
              "column": 14,
              "line": 82
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        2645,
        2676
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 82
        },
        "start": {
          "column": 0,
          "line": 82
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
            "name": "symbolMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 40,
                  "line": 83
                },
                "start": {
                  "column": 23,
                  "line": 83
                }
              },
              "range": [
                2700,
                2717
              ],
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "range": [
                        2705,
                        2706
                      ],
                      "loc": {
                        "end": {
                          "column": 29,
                          "line": 83
                        },
                        "start": {
                          "column": 28,
                          "line": 83
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
                          "column": 38,
                          "line": 83
                        },
                        "start": {
                          "column": 30,
                          "line": 83
                        }
                      },
                      "range": [
                        2707,
                        2715
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          2709,
                          2715
                        ],
                        "loc": {
                          "end": {
                            "column": 38,
                            "line": 83
                          },
                          "start": {
                            "column": 32,
                            "line": 83
                          }
                        }
                      }
                    },
                    "range": [
                      2704,
                      2715
                    ],
                    "loc": {
                      "end": {
                        "column": 38,
                        "line": 83
                      },
                      "start": {
                        "column": 27,
                        "line": 83
                      }
                    }
                  }
                ],
                "range": [
                  2702,
                  2717
                ],
                "loc": {
                  "end": {
                    "column": 40,
                    "line": 83
                  },
                  "start": {
                    "column": 25,
                    "line": 83
                  }
                }
              }
            },
            "range": [
              2691,
              2717
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 83
              },
              "start": {
                "column": 14,
                "line": 83
              }
            }
          },
          "init": null,
          "range": [
            2691,
            2717
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 83
            },
            "start": {
              "column": 14,
              "line": 83
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        2677,
        2718
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 83
        },
        "start": {
          "column": 0,
          "line": 83
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
            "name": "e15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 17,
                  "line": 84
                },
                "start": {
                  "column": 9,
                  "line": 84
                }
              },
              "range": [
                2728,
                2736
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  2730,
                  2736
                ],
                "loc": {
                  "end": {
                    "column": 17,
                    "line": 84
                  },
                  "start": {
                    "column": 11,
                    "line": 84
                  }
                }
              }
            },
            "range": [
              2725,
              2736
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 84
              },
              "start": {
                "column": 6,
                "line": 84
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "symbolMap",
              "optional": false,
              "range": [
                2739,
                2748
              ],
              "loc": {
                "end": {
                  "column": 29,
                  "line": 84
                },
                "start": {
                  "column": 20,
                  "line": 84
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "s",
              "optional": false,
              "range": [
                2749,
                2750
              ],
              "loc": {
                "end": {
                  "column": 31,
                  "line": 84
                },
                "start": {
                  "column": 30,
                  "line": 84
                }
              }
            },
            "range": [
              2739,
              2751
            ],
            "loc": {
              "end": {
                "column": 32,
                "line": 84
              },
              "start": {
                "column": 20,
                "line": 84
              }
            }
          },
          "range": [
            2725,
            2751
          ],
          "loc": {
            "end": {
              "column": 32,
              "line": 84
            },
            "start": {
              "column": 6,
              "line": 84
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2719,
        2752
      ],
      "loc": {
        "end": {
          "column": 33,
          "line": 84
        },
        "start": {
          "column": 0,
          "line": 84
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "symbolMap",
            "optional": false,
            "range": [
              2766,
              2775
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 85
              },
              "start": {
                "column": 0,
                "line": 85
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "range": [
              2776,
              2777
            ],
            "loc": {
              "end": {
                "column": 11,
                "line": 85
              },
              "start": {
                "column": 10,
                "line": 85
              }
            }
          },
          "range": [
            2766,
            2778
          ],
          "loc": {
            "end": {
              "column": 12,
              "line": 85
            },
            "start": {
              "column": 0,
              "line": 85
            }
          }
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "range": [
            2781,
            2790
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 85
            },
            "start": {
              "column": 15,
              "line": 85
            }
          }
        },
        "range": [
          2766,
          2790
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 85
          },
          "start": {
            "column": 0,
            "line": 85
          }
        }
      },
      "range": [
        2766,
        2791
      ],
      "loc": {
        "end": {
          "column": 25,
          "line": 85
        },
        "start": {
          "column": 0,
          "line": 85
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
            "name": "nonEmptyStringArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 56,
                  "line": 88
                },
                "start": {
                  "column": 33,
                  "line": 88
                }
              },
              "range": [
                2861,
                2884
              ],
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "range": [
                      2864,
                      2870
                    ],
                    "loc": {
                      "end": {
                        "column": 42,
                        "line": 88
                      },
                      "start": {
                        "column": 36,
                        "line": 88
                      }
                    }
                  },
                  {
                    "type": "TSRestType",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "range": [
                          2875,
                          2881
                        ],
                        "loc": {
                          "end": {
                            "column": 53,
                            "line": 88
                          },
                          "start": {
                            "column": 47,
                            "line": 88
                          }
                        }
                      },
                      "range": [
                        2875,
                        2883
                      ],
                      "loc": {
                        "end": {
                          "column": 55,
                          "line": 88
                        },
                        "start": {
                          "column": 47,
                          "line": 88
                        }
                      }
                    },
                    "range": [
                      2872,
                      2883
                    ],
                    "loc": {
                      "end": {
                        "column": 55,
                        "line": 88
                      },
                      "start": {
                        "column": 44,
                        "line": 88
                      }
                    }
                  }
                ],
                "range": [
                  2863,
                  2884
                ],
                "loc": {
                  "end": {
                    "column": 56,
                    "line": 88
                  },
                  "start": {
                    "column": 35,
                    "line": 88
                  }
                }
              }
            },
            "range": [
              2842,
              2884
            ],
            "loc": {
              "end": {
                "column": 56,
                "line": 88
              },
              "start": {
                "column": 14,
                "line": 88
              }
            }
          },
          "init": null,
          "range": [
            2842,
            2884
          ],
          "loc": {
            "end": {
              "column": 56,
              "line": 88
            },
            "start": {
              "column": 14,
              "line": 88
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        2828,
        2885
      ],
      "loc": {
        "end": {
          "column": 57,
          "line": 88
        },
        "start": {
          "column": 0,
          "line": 88
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
            "name": "variadicOk1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 25,
                  "line": 89
                },
                "start": {
                  "column": 17,
                  "line": 89
                }
              },
              "range": [
                2903,
                2911
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  2905,
                  2911
                ],
                "loc": {
                  "end": {
                    "column": 25,
                    "line": 89
                  },
                  "start": {
                    "column": 19,
                    "line": 89
                  }
                }
              }
            },
            "range": [
              2892,
              2911
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 89
              },
              "start": {
                "column": 6,
                "line": 89
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonEmptyStringArray",
              "optional": false,
              "range": [
                2914,
                2933
              ],
              "loc": {
                "end": {
                  "column": 47,
                  "line": 89
                },
                "start": {
                  "column": 28,
                  "line": 89
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "0",
              "value": 0,
              "range": [
                2934,
                2935
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 89
                },
                "start": {
                  "column": 48,
                  "line": 89
                }
              }
            },
            "range": [
              2914,
              2936
            ],
            "loc": {
              "end": {
                "column": 50,
                "line": 89
              },
              "start": {
                "column": 28,
                "line": 89
              }
            }
          },
          "range": [
            2892,
            2936
          ],
          "loc": {
            "end": {
              "column": 50,
              "line": 89
            },
            "start": {
              "column": 6,
              "line": 89
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2886,
        2937
      ],
      "loc": {
        "end": {
          "column": 51,
          "line": 89
        },
        "start": {
          "column": 0,
          "line": 89
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
            "name": "variadicError1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 28,
                  "line": 90
                },
                "start": {
                  "column": 20,
                  "line": 90
                }
              },
              "range": [
                2972,
                2980
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  2974,
                  2980
                ],
                "loc": {
                  "end": {
                    "column": 28,
                    "line": 90
                  },
                  "start": {
                    "column": 22,
                    "line": 90
                  }
                }
              }
            },
            "range": [
              2958,
              2980
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 90
              },
              "start": {
                "column": 6,
                "line": 90
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "nonEmptyStringArray",
              "optional": false,
              "range": [
                2983,
                3002
              ],
              "loc": {
                "end": {
                  "column": 50,
                  "line": 90
                },
                "start": {
                  "column": 31,
                  "line": 90
                }
              }
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "raw": "1",
              "value": 1,
              "range": [
                3003,
                3004
              ],
              "loc": {
                "end": {
                  "column": 52,
                  "line": 90
                },
                "start": {
                  "column": 51,
                  "line": 90
                }
              }
            },
            "range": [
              2983,
              3005
            ],
            "loc": {
              "end": {
                "column": 53,
                "line": 90
              },
              "start": {
                "column": 31,
                "line": 90
              }
            }
          },
          "range": [
            2958,
            3005
          ],
          "loc": {
            "end": {
              "column": 53,
              "line": 90
            },
            "start": {
              "column": 6,
              "line": 90
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        2952,
        3006
      ],
      "loc": {
        "end": {
          "column": 54,
          "line": 90
        },
        "start": {
          "column": 0,
          "line": 90
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
            "name": "myRecord1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 49,
                  "line": 93
                },
                "start": {
                  "column": 23,
                  "line": 93
                }
              },
              "range": [
                3069,
                3095
              ],
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
                        3073,
                        3074
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 93
                        },
                        "start": {
                          "column": 27,
                          "line": 93
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
                          "column": 36,
                          "line": 93
                        },
                        "start": {
                          "column": 28,
                          "line": 93
                        }
                      },
                      "range": [
                        3074,
                        3082
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          3076,
                          3082
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 93
                          },
                          "start": {
                            "column": 30,
                            "line": 93
                          }
                        }
                      }
                    },
                    "range": [
                      3073,
                      3083
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 93
                      },
                      "start": {
                        "column": 27,
                        "line": 93
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        3084,
                        3085
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 93
                        },
                        "start": {
                          "column": 38,
                          "line": 93
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
                          "column": 47,
                          "line": 93
                        },
                        "start": {
                          "column": 39,
                          "line": 93
                        }
                      },
                      "range": [
                        3085,
                        3093
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          3087,
                          3093
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 93
                          },
                          "start": {
                            "column": 41,
                            "line": 93
                          }
                        }
                      }
                    },
                    "range": [
                      3084,
                      3093
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 93
                      },
                      "start": {
                        "column": 38,
                        "line": 93
                      }
                    }
                  }
                ],
                "range": [
                  3071,
                  3095
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 93
                  },
                  "start": {
                    "column": 25,
                    "line": 93
                  }
                }
              }
            },
            "range": [
              3060,
              3095
            ],
            "loc": {
              "end": {
                "column": 49,
                "line": 93
              },
              "start": {
                "column": 14,
                "line": 93
              }
            }
          },
          "init": null,
          "range": [
            3060,
            3095
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 93
            },
            "start": {
              "column": 14,
              "line": 93
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        3046,
        3096
      ],
      "loc": {
        "end": {
          "column": 50,
          "line": 93
        },
        "start": {
          "column": 0,
          "line": 93
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
            "name": "myRecord2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 72,
                  "line": 94
                },
                "start": {
                  "column": 23,
                  "line": 94
                }
              },
              "range": [
                3120,
                3169
              ],
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
                        3124,
                        3125
                      ],
                      "loc": {
                        "end": {
                          "column": 28,
                          "line": 94
                        },
                        "start": {
                          "column": 27,
                          "line": 94
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
                          "column": 36,
                          "line": 94
                        },
                        "start": {
                          "column": 28,
                          "line": 94
                        }
                      },
                      "range": [
                        3125,
                        3133
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          3127,
                          3133
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 94
                          },
                          "start": {
                            "column": 30,
                            "line": 94
                          }
                        }
                      }
                    },
                    "range": [
                      3124,
                      3134
                    ],
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 94
                      },
                      "start": {
                        "column": 27,
                        "line": 94
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "range": [
                        3135,
                        3136
                      ],
                      "loc": {
                        "end": {
                          "column": 39,
                          "line": 94
                        },
                        "start": {
                          "column": 38,
                          "line": 94
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
                          "column": 47,
                          "line": 94
                        },
                        "start": {
                          "column": 39,
                          "line": 94
                        }
                      },
                      "range": [
                        3136,
                        3144
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          3138,
                          3144
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 94
                          },
                          "start": {
                            "column": 41,
                            "line": 94
                          }
                        }
                      }
                    },
                    "range": [
                      3135,
                      3145
                    ],
                    "loc": {
                      "end": {
                        "column": 48,
                        "line": 94
                      },
                      "start": {
                        "column": 38,
                        "line": 94
                      }
                    }
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 61,
                              "line": 94
                            },
                            "start": {
                              "column": 53,
                              "line": 94
                            }
                          },
                          "range": [
                            3150,
                            3158
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              3152,
                              3158
                            ],
                            "loc": {
                              "end": {
                                "column": 61,
                                "line": 94
                              },
                              "start": {
                                "column": 55,
                                "line": 94
                              }
                            }
                          }
                        },
                        "range": [
                          3147,
                          3158
                        ],
                        "loc": {
                          "end": {
                            "column": 61,
                            "line": 94
                          },
                          "start": {
                            "column": 50,
                            "line": 94
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "loc": {
                        "end": {
                          "column": 70,
                          "line": 94
                        },
                        "start": {
                          "column": 62,
                          "line": 94
                        }
                      },
                      "range": [
                        3159,
                        3167
                      ],
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "range": [
                          3161,
                          3167
                        ],
                        "loc": {
                          "end": {
                            "column": 70,
                            "line": 94
                          },
                          "start": {
                            "column": 64,
                            "line": 94
                          }
                        }
                      }
                    },
                    "range": [
                      3146,
                      3167
                    ],
                    "loc": {
                      "end": {
                        "column": 70,
                        "line": 94
                      },
                      "start": {
                        "column": 49,
                        "line": 94
                      }
                    }
                  }
                ],
                "range": [
                  3122,
                  3169
                ],
                "loc": {
                  "end": {
                    "column": 72,
                    "line": 94
                  },
                  "start": {
                    "column": 25,
                    "line": 94
                  }
                }
              }
            },
            "range": [
              3111,
              3169
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 94
              },
              "start": {
                "column": 14,
                "line": 94
              }
            }
          },
          "init": null,
          "range": [
            3111,
            3169
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 94
            },
            "start": {
              "column": 14,
              "line": 94
            }
          }
        }
      ],
      "declare": true,
      "kind": "const",
      "range": [
        3097,
        3170
      ],
      "loc": {
        "end": {
          "column": 73,
          "line": 94
        },
        "start": {
          "column": 0,
          "line": 94
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
            "name": "fn1",
            "optional": false,
            "range": [
              3177,
              3180
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 95
              },
              "start": {
                "column": 6,
                "line": 95
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "myRecord1",
                "optional": false,
                "range": [
                  3241,
                  3250
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 95
                  },
                  "start": {
                    "column": 70,
                    "line": 95
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "range": [
                  3251,
                  3254
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 95
                  },
                  "start": {
                    "column": 80,
                    "line": 95
                  }
                }
              },
              "range": [
                3241,
                3255
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 95
                },
                "start": {
                  "column": 70,
                  "line": 95
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 95
                    },
                    "start": {
                      "column": 52,
                      "line": 95
                    }
                  },
                  "range": [
                    3223,
                    3228
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "range": [
                        3225,
                        3228
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 95
                        },
                        "start": {
                          "column": 54,
                          "line": 95
                        }
                      }
                    },
                    "range": [
                      3225,
                      3228
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 95
                      },
                      "start": {
                        "column": 54,
                        "line": 95
                      }
                    }
                  }
                },
                "range": [
                  3220,
                  3228
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 95
                  },
                  "start": {
                    "column": 49,
                    "line": 95
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 95
                },
                "start": {
                  "column": 58,
                  "line": 95
                }
              },
              "range": [
                3229,
                3237
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  3231,
                  3237
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 95
                  },
                  "start": {
                    "column": 60,
                    "line": 95
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 95
                },
                "start": {
                  "column": 12,
                  "line": 95
                }
              },
              "range": [
                3183,
                3219
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myRecord1",
                        "optional": false,
                        "range": [
                          3209,
                          3218
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 95
                          },
                          "start": {
                            "column": 38,
                            "line": 95
                          }
                        }
                      },
                      "range": [
                        3202,
                        3218
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 95
                        },
                        "start": {
                          "column": 31,
                          "line": 95
                        }
                      }
                    },
                    "range": [
                      3196,
                      3218
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 95
                      },
                      "start": {
                        "column": 25,
                        "line": 95
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "range": [
                      3184,
                      3187
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 95
                      },
                      "start": {
                        "column": 13,
                        "line": 95
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3184,
                    3218
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 95
                    },
                    "start": {
                      "column": 13,
                      "line": 95
                    }
                  }
                }
              ]
            },
            "range": [
              3183,
              3255
            ],
            "loc": {
              "end": {
                "column": 84,
                "line": 95
              },
              "start": {
                "column": 12,
                "line": 95
              }
            }
          },
          "range": [
            3177,
            3255
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 95
            },
            "start": {
              "column": 6,
              "line": 95
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3171,
        3256
      ],
      "loc": {
        "end": {
          "column": 85,
          "line": 95
        },
        "start": {
          "column": 0,
          "line": 95
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
            "name": "fn2",
            "optional": false,
            "range": [
              3276,
              3279
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 96
              },
              "start": {
                "column": 6,
                "line": 96
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "myRecord2",
                "optional": false,
                "range": [
                  3340,
                  3349
                ],
                "loc": {
                  "end": {
                    "column": 79,
                    "line": 96
                  },
                  "start": {
                    "column": 70,
                    "line": 96
                  }
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "range": [
                  3350,
                  3353
                ],
                "loc": {
                  "end": {
                    "column": 83,
                    "line": 96
                  },
                  "start": {
                    "column": 80,
                    "line": 96
                  }
                }
              },
              "range": [
                3340,
                3354
              ],
              "loc": {
                "end": {
                  "column": 84,
                  "line": 96
                },
                "start": {
                  "column": 70,
                  "line": 96
                }
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 96
                    },
                    "start": {
                      "column": 52,
                      "line": 96
                    }
                  },
                  "range": [
                    3322,
                    3327
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "range": [
                        3324,
                        3327
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 96
                        },
                        "start": {
                          "column": 54,
                          "line": 96
                        }
                      }
                    },
                    "range": [
                      3324,
                      3327
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 96
                      },
                      "start": {
                        "column": 54,
                        "line": 96
                      }
                    }
                  }
                },
                "range": [
                  3319,
                  3327
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 96
                  },
                  "start": {
                    "column": 49,
                    "line": 96
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 66,
                  "line": 96
                },
                "start": {
                  "column": 58,
                  "line": 96
                }
              },
              "range": [
                3328,
                3336
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  3330,
                  3336
                ],
                "loc": {
                  "end": {
                    "column": 66,
                    "line": 96
                  },
                  "start": {
                    "column": 60,
                    "line": 96
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 96
                },
                "start": {
                  "column": 12,
                  "line": 96
                }
              },
              "range": [
                3282,
                3318
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myRecord1",
                        "optional": false,
                        "range": [
                          3308,
                          3317
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 96
                          },
                          "start": {
                            "column": 38,
                            "line": 96
                          }
                        }
                      },
                      "range": [
                        3301,
                        3317
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 96
                        },
                        "start": {
                          "column": 31,
                          "line": 96
                        }
                      }
                    },
                    "range": [
                      3295,
                      3317
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 96
                      },
                      "start": {
                        "column": 25,
                        "line": 96
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "range": [
                      3283,
                      3286
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 96
                      },
                      "start": {
                        "column": 13,
                        "line": 96
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3283,
                    3317
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 96
                    },
                    "start": {
                      "column": 13,
                      "line": 96
                    }
                  }
                }
              ]
            },
            "range": [
              3282,
              3354
            ],
            "loc": {
              "end": {
                "column": 84,
                "line": 96
              },
              "start": {
                "column": 12,
                "line": 96
              }
            }
          },
          "range": [
            3276,
            3354
          ],
          "loc": {
            "end": {
              "column": 84,
              "line": 96
            },
            "start": {
              "column": 6,
              "line": 96
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3270,
        3355
      ],
      "loc": {
        "end": {
          "column": 85,
          "line": 96
        },
        "start": {
          "column": 0,
          "line": 96
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
            "name": "fn3",
            "optional": false,
            "range": [
              3375,
              3378
            ],
            "loc": {
              "end": {
                "column": 9,
                "line": 97
              },
              "start": {
                "column": 6,
                "line": 97
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "async": false,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myRecord2",
                        "optional": false,
                        "range": [
                          3437,
                          3446
                        ],
                        "loc": {
                          "end": {
                            "column": 13,
                            "line": 98
                          },
                          "start": {
                            "column": 4,
                            "line": 98
                          }
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "range": [
                          3447,
                          3450
                        ],
                        "loc": {
                          "end": {
                            "column": 17,
                            "line": 98
                          },
                          "start": {
                            "column": 14,
                            "line": 98
                          }
                        }
                      },
                      "range": [
                        3437,
                        3451
                      ],
                      "loc": {
                        "end": {
                          "column": 18,
                          "line": 98
                        },
                        "start": {
                          "column": 4,
                          "line": 98
                        }
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "range": [
                        3454,
                        3463
                      ],
                      "loc": {
                        "end": {
                          "column": 30,
                          "line": 98
                        },
                        "start": {
                          "column": 21,
                          "line": 98
                        }
                      }
                    },
                    "range": [
                      3437,
                      3463
                    ],
                    "loc": {
                      "end": {
                        "column": 30,
                        "line": 98
                      },
                      "start": {
                        "column": 4,
                        "line": 98
                      }
                    }
                  },
                  "range": [
                    3437,
                    3464
                  ],
                  "loc": {
                    "end": {
                      "column": 31,
                      "line": 98
                    },
                    "start": {
                      "column": 4,
                      "line": 98
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
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "loc": {
                            "end": {
                              "column": 19,
                              "line": 99
                            },
                            "start": {
                              "column": 11,
                              "line": 99
                            }
                          },
                          "range": [
                            3492,
                            3500
                          ],
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "range": [
                              3494,
                              3500
                            ],
                            "loc": {
                              "end": {
                                "column": 19,
                                "line": 99
                              },
                              "start": {
                                "column": 13,
                                "line": 99
                              }
                            }
                          }
                        },
                        "range": [
                          3491,
                          3500
                        ],
                        "loc": {
                          "end": {
                            "column": 19,
                            "line": 99
                          },
                          "start": {
                            "column": 10,
                            "line": 99
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "myRecord2",
                          "optional": false,
                          "range": [
                            3503,
                            3512
                          ],
                          "loc": {
                            "end": {
                              "column": 31,
                              "line": 99
                            },
                            "start": {
                              "column": 22,
                              "line": 99
                            }
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "range": [
                            3513,
                            3516
                          ],
                          "loc": {
                            "end": {
                              "column": 35,
                              "line": 99
                            },
                            "start": {
                              "column": 32,
                              "line": 99
                            }
                          }
                        },
                        "range": [
                          3503,
                          3517
                        ],
                        "loc": {
                          "end": {
                            "column": 36,
                            "line": 99
                          },
                          "start": {
                            "column": 22,
                            "line": 99
                          }
                        }
                      },
                      "range": [
                        3491,
                        3517
                      ],
                      "loc": {
                        "end": {
                          "column": 36,
                          "line": 99
                        },
                        "start": {
                          "column": 10,
                          "line": 99
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const",
                  "range": [
                    3485,
                    3518
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 99
                    },
                    "start": {
                      "column": 4,
                      "line": 99
                    }
                  }
                }
              ],
              "range": [
                3431,
                3536
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 100
                },
                "start": {
                  "column": 62,
                  "line": 97
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "loc": {
                    "end": {
                      "column": 57,
                      "line": 97
                    },
                    "start": {
                      "column": 52,
                      "line": 97
                    }
                  },
                  "range": [
                    3421,
                    3426
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "range": [
                        3423,
                        3426
                      ],
                      "loc": {
                        "end": {
                          "column": 57,
                          "line": 97
                        },
                        "start": {
                          "column": 54,
                          "line": 97
                        }
                      }
                    },
                    "range": [
                      3423,
                      3426
                    ],
                    "loc": {
                      "end": {
                        "column": 57,
                        "line": 97
                      },
                      "start": {
                        "column": 54,
                        "line": 97
                      }
                    }
                  }
                },
                "range": [
                  3418,
                  3426
                ],
                "loc": {
                  "end": {
                    "column": 57,
                    "line": 97
                  },
                  "start": {
                    "column": 49,
                    "line": 97
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "loc": {
                "end": {
                  "column": 48,
                  "line": 97
                },
                "start": {
                  "column": 12,
                  "line": 97
                }
              },
              "range": [
                3381,
                3417
              ],
              "params": [
                {
                  "type": "TSTypeParameter",
                  "const": false,
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "myRecord2",
                        "optional": false,
                        "range": [
                          3407,
                          3416
                        ],
                        "loc": {
                          "end": {
                            "column": 47,
                            "line": 97
                          },
                          "start": {
                            "column": 38,
                            "line": 97
                          }
                        }
                      },
                      "range": [
                        3400,
                        3416
                      ],
                      "loc": {
                        "end": {
                          "column": 47,
                          "line": 97
                        },
                        "start": {
                          "column": 31,
                          "line": 97
                        }
                      }
                    },
                    "range": [
                      3394,
                      3416
                    ],
                    "loc": {
                      "end": {
                        "column": 47,
                        "line": 97
                      },
                      "start": {
                        "column": 25,
                        "line": 97
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "range": [
                      3382,
                      3385
                    ],
                    "loc": {
                      "end": {
                        "column": 16,
                        "line": 97
                      },
                      "start": {
                        "column": 13,
                        "line": 97
                      }
                    }
                  },
                  "out": false,
                  "range": [
                    3382,
                    3416
                  ],
                  "loc": {
                    "end": {
                      "column": 47,
                      "line": 97
                    },
                    "start": {
                      "column": 13,
                      "line": 97
                    }
                  }
                }
              ]
            },
            "range": [
              3381,
              3536
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 100
              },
              "start": {
                "column": 12,
                "line": 97
              }
            }
          },
          "range": [
            3375,
            3536
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 100
            },
            "start": {
              "column": 6,
              "line": 97
            }
          }
        }
      ],
      "declare": false,
      "kind": "const",
      "range": [
        3369,
        3537
      ],
      "loc": {
        "end": {
          "column": 2,
          "line": 100
        },
        "start": {
          "column": 0,
          "line": 97
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 0,
      "line": 102
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
