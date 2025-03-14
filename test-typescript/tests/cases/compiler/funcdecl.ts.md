__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "range": [
    0,
    1512
  ],
  "body": [
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "raw": "\"this is my simple func\"",
              "value": "this is my simple func",
              "range": [
                35,
                59
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 2
                },
                "start": {
                  "column": 11,
                  "line": 2
                }
              }
            },
            "range": [
              28,
              60
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 2
              },
              "start": {
                "column": 4,
                "line": 2
              }
            }
          }
        ],
        "range": [
          22,
          62
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 3
          },
          "start": {
            "column": 22,
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
        "name": "simpleFunc",
        "optional": false,
        "range": [
          9,
          19
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 1
          },
          "start": {
            "column": 9,
            "line": 1
          }
        }
      },
      "params": [],
      "range": [
        0,
        62
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 3
        },
        "start": {
          "column": 0,
          "line": 1
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
            "name": "simpleFuncVar",
            "optional": false,
            "range": [
              67,
              80
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 4
              },
              "start": {
                "column": 4,
                "line": 4
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "simpleFunc",
            "optional": false,
            "range": [
              83,
              93
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 4
              },
              "start": {
                "column": 20,
                "line": 4
              }
            }
          },
          "range": [
            67,
            93
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 4
            },
            "start": {
              "column": 4,
              "line": 4
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        63,
        94
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 4
        },
        "start": {
          "column": 0,
          "line": 4
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          127,
          130
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 7
          },
          "start": {
            "column": 31,
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
        "name": "anotherFuncNoReturn",
        "optional": false,
        "range": [
          105,
          124
        ],
        "loc": {
          "end": {
            "column": 28,
            "line": 6
          },
          "start": {
            "column": 9,
            "line": 6
          }
        }
      },
      "params": [],
      "range": [
        96,
        130
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 7
        },
        "start": {
          "column": 0,
          "line": 6
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
            "name": "anotherFuncNoReturnVar",
            "optional": false,
            "range": [
              135,
              157
            ],
            "loc": {
              "end": {
                "column": 26,
                "line": 8
              },
              "start": {
                "column": 4,
                "line": 8
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "anotherFuncNoReturn",
            "optional": false,
            "range": [
              160,
              179
            ],
            "loc": {
              "end": {
                "column": 48,
                "line": 8
              },
              "start": {
                "column": 29,
                "line": 8
              }
            }
          },
          "range": [
            135,
            179
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 8
            },
            "start": {
              "column": 4,
              "line": 8
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        131,
        180
      ],
      "loc": {
        "end": {
          "column": 49,
          "line": 8
        },
        "start": {
          "column": 0,
          "line": 8
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
              "type": "Literal",
              "raw": "\"Hello\"",
              "value": "Hello",
              "range": [
                225,
                232
              ],
              "loc": {
                "end": {
                  "column": 18,
                  "line": 11
                },
                "start": {
                  "column": 11,
                  "line": 11
                }
              }
            },
            "range": [
              218,
              233
            ],
            "loc": {
              "end": {
                "column": 19,
                "line": 11
              },
              "start": {
                "column": 4,
                "line": 11
              }
            }
          }
        ],
        "range": [
          212,
          235
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 12
          },
          "start": {
            "column": 30,
            "line": 10
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withReturn",
        "optional": false,
        "range": [
          191,
          201
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 10
          },
          "start": {
            "column": 9,
            "line": 10
          }
        }
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 30,
            "line": 10
          },
          "start": {
            "column": 22,
            "line": 10
          }
        },
        "range": [
          204,
          212
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            206,
            212
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 10
            },
            "start": {
              "column": 24,
              "line": 10
            }
          }
        }
      },
      "range": [
        182,
        235
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 12
        },
        "start": {
          "column": 0,
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
            "name": "withReturnVar",
            "optional": false,
            "range": [
              240,
              253
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 13
              },
              "start": {
                "column": 4,
                "line": 13
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withReturn",
            "optional": false,
            "range": [
              256,
              266
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
            240,
            266
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 13
            },
            "start": {
              "column": 4,
              "line": 13
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        236,
        267
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
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                322,
                323
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 16
                },
                "start": {
                  "column": 11,
                  "line": 16
                }
              }
            },
            "range": [
              315,
              324
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 16
              },
              "start": {
                "column": 4,
                "line": 16
              }
            }
          }
        ],
        "range": [
          309,
          326
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 17
          },
          "start": {
            "column": 40,
            "line": 15
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withParams",
        "optional": false,
        "range": [
          278,
          288
        ],
        "loc": {
          "end": {
            "column": 19,
            "line": 15
          },
          "start": {
            "column": 9,
            "line": 15
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 30,
                "line": 15
              },
              "start": {
                "column": 22,
                "line": 15
              }
            },
            "range": [
              291,
              299
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                293,
                299
              ],
              "loc": {
                "end": {
                  "column": 30,
                  "line": 15
                },
                "start": {
                  "column": 24,
                  "line": 15
                }
              }
            }
          },
          "range": [
            289,
            299
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 15
            },
            "start": {
              "column": 20,
              "line": 15
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 40,
            "line": 15
          },
          "start": {
            "column": 32,
            "line": 15
          }
        },
        "range": [
          301,
          309
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            303,
            309
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 15
            },
            "start": {
              "column": 34,
              "line": 15
            }
          }
        }
      },
      "range": [
        269,
        326
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 17
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
            "name": "withparamsVar",
            "optional": false,
            "range": [
              331,
              344
            ],
            "loc": {
              "end": {
                "column": 17,
                "line": 18
              },
              "start": {
                "column": 4,
                "line": 18
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withParams",
            "optional": false,
            "range": [
              347,
              357
            ],
            "loc": {
              "end": {
                "column": 30,
                "line": 18
              },
              "start": {
                "column": 20,
                "line": 18
              }
            }
          },
          "range": [
            331,
            357
          ],
          "loc": {
            "end": {
              "column": 30,
              "line": 18
            },
            "start": {
              "column": 4,
              "line": 18
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        327,
        358
      ],
      "loc": {
        "end": {
          "column": 31,
          "line": 18
        },
        "start": {
          "column": 0,
          "line": 18
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
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "range": [
                424,
                425
              ],
              "loc": {
                "end": {
                  "column": 12,
                  "line": 21
                },
                "start": {
                  "column": 11,
                  "line": 21
                }
              }
            },
            "range": [
              417,
              426
            ],
            "loc": {
              "end": {
                "column": 13,
                "line": 21
              },
              "start": {
                "column": 4,
                "line": 21
              }
            }
          }
        ],
        "range": [
          411,
          428
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 22
          },
          "start": {
            "column": 51,
            "line": 20
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withMultiParams",
        "optional": false,
        "range": [
          369,
          384
        ],
        "loc": {
          "end": {
            "column": 24,
            "line": 20
          },
          "start": {
            "column": 9,
            "line": 20
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 35,
                "line": 20
              },
              "start": {
                "column": 27,
                "line": 20
              }
            },
            "range": [
              387,
              395
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                389,
                395
              ],
              "loc": {
                "end": {
                  "column": 35,
                  "line": 20
                },
                "start": {
                  "column": 29,
                  "line": 20
                }
              }
            }
          },
          "range": [
            385,
            395
          ],
          "loc": {
            "end": {
              "column": 35,
              "line": 20
            },
            "start": {
              "column": 25,
              "line": 20
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "range": [
            397,
            398
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 20
            },
            "start": {
              "column": 37,
              "line": 20
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 49,
                "line": 20
              },
              "start": {
                "column": 41,
                "line": 20
              }
            },
            "range": [
              401,
              409
            ],
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "range": [
                  403,
                  409
                ],
                "loc": {
                  "end": {
                    "column": 49,
                    "line": 20
                  },
                  "start": {
                    "column": 43,
                    "line": 20
                  }
                }
              },
              "range": [
                403,
                409
              ],
              "loc": {
                "end": {
                  "column": 49,
                  "line": 20
                },
                "start": {
                  "column": 43,
                  "line": 20
                }
              }
            }
          },
          "range": [
            400,
            409
          ],
          "loc": {
            "end": {
              "column": 49,
              "line": 20
            },
            "start": {
              "column": 40,
              "line": 20
            }
          }
        }
      ],
      "range": [
        360,
        428
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 22
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
            "name": "withMultiParamsVar",
            "optional": false,
            "range": [
              433,
              451
            ],
            "loc": {
              "end": {
                "column": 22,
                "line": 23
              },
              "start": {
                "column": 4,
                "line": 23
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withMultiParams",
            "optional": false,
            "range": [
              454,
              469
            ],
            "loc": {
              "end": {
                "column": 40,
                "line": 23
              },
              "start": {
                "column": 25,
                "line": 23
              }
            }
          },
          "range": [
            433,
            469
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 23
            },
            "start": {
              "column": 4,
              "line": 23
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        429,
        470
      ],
      "loc": {
        "end": {
          "column": 41,
          "line": 23
        },
        "start": {
          "column": 0,
          "line": 23
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          512,
          515
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 26
          },
          "start": {
            "column": 40,
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
        "name": "withOptionalParams",
        "optional": false,
        "range": [
          481,
          499
        ],
        "loc": {
          "end": {
            "column": 27,
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
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 38,
                "line": 25
              },
              "start": {
                "column": 30,
                "line": 25
              }
            },
            "range": [
              502,
              510
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                504,
                510
              ],
              "loc": {
                "end": {
                  "column": 38,
                  "line": 25
                },
                "start": {
                  "column": 32,
                  "line": 25
                }
              }
            }
          },
          "range": [
            500,
            510
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 25
            },
            "start": {
              "column": 28,
              "line": 25
            }
          }
        }
      ],
      "range": [
        472,
        515
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 26
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
            "name": "withOptionalParamsVar",
            "optional": false,
            "range": [
              520,
              541
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 27
              },
              "start": {
                "column": 4,
                "line": 27
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withOptionalParams",
            "optional": false,
            "range": [
              544,
              562
            ],
            "loc": {
              "end": {
                "column": 46,
                "line": 27
              },
              "start": {
                "column": 28,
                "line": 27
              }
            }
          },
          "range": [
            520,
            562
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 27
            },
            "start": {
              "column": 4,
              "line": 27
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        516,
        563
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 27
        },
        "start": {
          "column": 0,
          "line": 27
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          639,
          642
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 30
          },
          "start": {
            "column": 74,
            "line": 29
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withInitializedParams",
        "optional": false,
        "range": [
          574,
          595
        ],
        "loc": {
          "end": {
            "column": 30,
            "line": 29
          },
          "start": {
            "column": 9,
            "line": 29
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 40,
                "line": 29
              },
              "start": {
                "column": 32,
                "line": 29
              }
            },
            "range": [
              597,
              605
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                599,
                605
              ],
              "loc": {
                "end": {
                  "column": 40,
                  "line": 29
                },
                "start": {
                  "column": 34,
                  "line": 29
                }
              }
            }
          },
          "range": [
            596,
            605
          ],
          "loc": {
            "end": {
              "column": 40,
              "line": 29
            },
            "start": {
              "column": 31,
              "line": 29
            }
          }
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b0",
          "optional": false,
          "range": [
            607,
            609
          ],
          "loc": {
            "end": {
              "column": 44,
              "line": 29
            },
            "start": {
              "column": 42,
              "line": 29
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "range": [
              611,
              612
            ],
            "loc": {
              "end": {
                "column": 47,
                "line": 29
              },
              "start": {
                "column": 46,
                "line": 29
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "30",
            "value": 30,
            "range": [
              615,
              617
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 29
              },
              "start": {
                "column": 50,
                "line": 29
              }
            }
          },
          "range": [
            611,
            617
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 29
            },
            "start": {
              "column": 46,
              "line": 29
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "range": [
              619,
              620
            ],
            "loc": {
              "end": {
                "column": 55,
                "line": 29
              },
              "start": {
                "column": 54,
                "line": 29
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "\"string value\"",
            "value": "string value",
            "range": [
              623,
              637
            ],
            "loc": {
              "end": {
                "column": 72,
                "line": 29
              },
              "start": {
                "column": 58,
                "line": 29
              }
            }
          },
          "range": [
            619,
            637
          ],
          "loc": {
            "end": {
              "column": 72,
              "line": 29
            },
            "start": {
              "column": 54,
              "line": 29
            }
          }
        }
      ],
      "range": [
        565,
        642
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 30
        },
        "start": {
          "column": 0,
          "line": 29
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
            "name": "withInitializedParamsVar",
            "optional": false,
            "range": [
              647,
              671
            ],
            "loc": {
              "end": {
                "column": 28,
                "line": 31
              },
              "start": {
                "column": 4,
                "line": 31
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withInitializedParams",
            "optional": false,
            "range": [
              674,
              695
            ],
            "loc": {
              "end": {
                "column": 52,
                "line": 31
              },
              "start": {
                "column": 31,
                "line": 31
              }
            }
          },
          "range": [
            647,
            695
          ],
          "loc": {
            "end": {
              "column": 52,
              "line": 31
            },
            "start": {
              "column": 4,
              "line": 31
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        643,
        696
      ],
      "loc": {
        "end": {
          "column": 53,
          "line": 31
        },
        "start": {
          "column": 0,
          "line": 31
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          776,
          779
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 34
          },
          "start": {
            "column": 78,
            "line": 33
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withOptionalInitializedParams",
        "optional": false,
        "range": [
          707,
          736
        ],
        "loc": {
          "end": {
            "column": 38,
            "line": 33
          },
          "start": {
            "column": 9,
            "line": 33
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 48,
                "line": 33
              },
              "start": {
                "column": 40,
                "line": 33
              }
            },
            "range": [
              738,
              746
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                740,
                746
              ],
              "loc": {
                "end": {
                  "column": 48,
                  "line": 33
                },
                "start": {
                  "column": 42,
                  "line": 33
                }
              }
            }
          },
          "range": [
            737,
            746
          ],
          "loc": {
            "end": {
              "column": 48,
              "line": 33
            },
            "start": {
              "column": 39,
              "line": 33
            }
          }
        },
        {
          "type": "AssignmentPattern",
          "decorators": [],
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "loc": {
                "end": {
                  "column": 59,
                  "line": 33
                },
                "start": {
                  "column": 51,
                  "line": 33
                }
              },
              "range": [
                749,
                757
              ],
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "range": [
                  751,
                  757
                ],
                "loc": {
                  "end": {
                    "column": 59,
                    "line": 33
                  },
                  "start": {
                    "column": 53,
                    "line": 33
                  }
                }
              }
            },
            "range": [
              748,
              757
            ],
            "loc": {
              "end": {
                "column": 59,
                "line": 33
              },
              "start": {
                "column": 50,
                "line": 33
              }
            }
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "raw": "\"hello string\"",
            "value": "hello string",
            "range": [
              760,
              774
            ],
            "loc": {
              "end": {
                "column": 76,
                "line": 33
              },
              "start": {
                "column": 62,
                "line": 33
              }
            }
          },
          "range": [
            748,
            774
          ],
          "loc": {
            "end": {
              "column": 76,
              "line": 33
            },
            "start": {
              "column": 50,
              "line": 33
            }
          }
        }
      ],
      "range": [
        698,
        779
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 34
        },
        "start": {
          "column": 0,
          "line": 33
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
            "name": "withOptionalInitializedParamsVar",
            "optional": false,
            "range": [
              784,
              816
            ],
            "loc": {
              "end": {
                "column": 36,
                "line": 35
              },
              "start": {
                "column": 4,
                "line": 35
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withOptionalInitializedParams",
            "optional": false,
            "range": [
              819,
              848
            ],
            "loc": {
              "end": {
                "column": 68,
                "line": 35
              },
              "start": {
                "column": 39,
                "line": 35
              }
            }
          },
          "range": [
            784,
            848
          ],
          "loc": {
            "end": {
              "column": 68,
              "line": 35
            },
            "start": {
              "column": 4,
              "line": 35
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        780,
        849
      ],
      "loc": {
        "end": {
          "column": 69,
          "line": 35
        },
        "start": {
          "column": 0,
          "line": 35
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
              "type": "Identifier",
              "decorators": [],
              "name": "myRestParameter",
              "optional": false,
              "range": [
                931,
                946
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 38
                },
                "start": {
                  "column": 11,
                  "line": 38
                }
              }
            },
            "range": [
              924,
              947
            ],
            "loc": {
              "end": {
                "column": 27,
                "line": 38
              },
              "start": {
                "column": 4,
                "line": 38
              }
            }
          }
        ],
        "range": [
          918,
          949
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 39
          },
          "start": {
            "column": 67,
            "line": 37
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withRestParams",
        "optional": false,
        "range": [
          860,
          874
        ],
        "loc": {
          "end": {
            "column": 23,
            "line": 37
          },
          "start": {
            "column": 9,
            "line": 37
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 33,
                "line": 37
              },
              "start": {
                "column": 25,
                "line": 37
              }
            },
            "range": [
              876,
              884
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                878,
                884
              ],
              "loc": {
                "end": {
                  "column": 33,
                  "line": 37
                },
                "start": {
                  "column": 27,
                  "line": 37
                }
              }
            }
          },
          "range": [
            875,
            884
          ],
          "loc": {
            "end": {
              "column": 33,
              "line": 37
            },
            "start": {
              "column": 24,
              "line": 37
            }
          }
        },
        {
          "type": "RestElement",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "myRestParameter",
            "optional": false,
            "range": [
              890,
              905
            ],
            "loc": {
              "end": {
                "column": 54,
                "line": 37
              },
              "start": {
                "column": 39,
                "line": 37
              }
            }
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 65,
                "line": 37
              },
              "start": {
                "column": 55,
                "line": 37
              }
            },
            "range": [
              906,
              916
            ],
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "range": [
                  908,
                  914
                ],
                "loc": {
                  "end": {
                    "column": 63,
                    "line": 37
                  },
                  "start": {
                    "column": 57,
                    "line": 37
                  }
                }
              },
              "range": [
                908,
                916
              ],
              "loc": {
                "end": {
                  "column": 65,
                  "line": 37
                },
                "start": {
                  "column": 57,
                  "line": 37
                }
              }
            }
          },
          "range": [
            886,
            916
          ],
          "loc": {
            "end": {
              "column": 65,
              "line": 37
            },
            "start": {
              "column": 35,
              "line": 37
            }
          }
        }
      ],
      "range": [
        851,
        949
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 39
        },
        "start": {
          "column": 0,
          "line": 37
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
            "name": "withRestParamsVar",
            "optional": false,
            "range": [
              954,
              971
            ],
            "loc": {
              "end": {
                "column": 21,
                "line": 40
              },
              "start": {
                "column": 4,
                "line": 40
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "withRestParams",
            "optional": false,
            "range": [
              974,
              988
            ],
            "loc": {
              "end": {
                "column": 38,
                "line": 40
              },
              "start": {
                "column": 24,
                "line": 40
              }
            }
          },
          "range": [
            954,
            988
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 40
            },
            "start": {
              "column": 4,
              "line": 40
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        950,
        989
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 40
        },
        "start": {
          "column": 0,
          "line": 40
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "range": [
          1000,
          1009
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 42
          },
          "start": {
            "column": 9,
            "line": 42
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 42
              },
              "start": {
                "column": 20,
                "line": 42
              }
            },
            "range": [
              1011,
              1019
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                1013,
                1019
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 42
                },
                "start": {
                  "column": 22,
                  "line": 42
                }
              }
            }
          },
          "range": [
            1010,
            1019
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 42
            },
            "start": {
              "column": 19,
              "line": 42
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 38,
            "line": 42
          },
          "start": {
            "column": 30,
            "line": 42
          }
        },
        "range": [
          1021,
          1029
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            1023,
            1029
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 42
            },
            "start": {
              "column": 32,
              "line": 42
            }
          }
        }
      },
      "range": [
        991,
        1030
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 42
        },
        "start": {
          "column": 0,
          "line": 42
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "range": [
          1040,
          1049
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 43
          },
          "start": {
            "column": 9,
            "line": 43
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 28,
                "line": 43
              },
              "start": {
                "column": 20,
                "line": 43
              }
            },
            "range": [
              1051,
              1059
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                1053,
                1059
              ],
              "loc": {
                "end": {
                  "column": 28,
                  "line": 43
                },
                "start": {
                  "column": 22,
                  "line": 43
                }
              }
            }
          },
          "range": [
            1050,
            1059
          ],
          "loc": {
            "end": {
              "column": 28,
              "line": 43
            },
            "start": {
              "column": 19,
              "line": 43
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 38,
            "line": 43
          },
          "start": {
            "column": 30,
            "line": 43
          }
        },
        "range": [
          1061,
          1069
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            1063,
            1069
          ],
          "loc": {
            "end": {
              "column": 38,
              "line": 43
            },
            "start": {
              "column": 32,
              "line": 43
            }
          }
        }
      },
      "range": [
        1031,
        1070
      ],
      "loc": {
        "end": {
          "column": 39,
          "line": 43
        },
        "start": {
          "column": 0,
          "line": 43
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
              "type": "CallExpression",
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ns",
                  "optional": false,
                  "range": [
                    1112,
                    1114
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 45
                    },
                    "start": {
                      "column": 11,
                      "line": 45
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toString",
                  "optional": false,
                  "range": [
                    1115,
                    1123
                  ],
                  "loc": {
                    "end": {
                      "column": 22,
                      "line": 45
                    },
                    "start": {
                      "column": 14,
                      "line": 45
                    }
                  }
                },
                "range": [
                  1112,
                  1123
                ],
                "loc": {
                  "end": {
                    "column": 22,
                    "line": 45
                  },
                  "start": {
                    "column": 11,
                    "line": 45
                  }
                }
              },
              "optional": false,
              "range": [
                1112,
                1125
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 45
                },
                "start": {
                  "column": 11,
                  "line": 45
                }
              }
            },
            "range": [
              1105,
              1126
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 45
              },
              "start": {
                "column": 4,
                "line": 45
              }
            }
          }
        ],
        "range": [
          1099,
          1128
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 46
          },
          "start": {
            "column": 28,
            "line": 44
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overload1",
        "optional": false,
        "range": [
          1080,
          1089
        ],
        "loc": {
          "end": {
            "column": 18,
            "line": 44
          },
          "start": {
            "column": 9,
            "line": 44
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ns",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 26,
                "line": 44
              },
              "start": {
                "column": 21,
                "line": 44
              }
            },
            "range": [
              1092,
              1097
            ],
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "range": [
                1094,
                1097
              ],
              "loc": {
                "end": {
                  "column": 26,
                  "line": 44
                },
                "start": {
                  "column": 23,
                  "line": 44
                }
              }
            }
          },
          "range": [
            1090,
            1097
          ],
          "loc": {
            "end": {
              "column": 26,
              "line": 44
            },
            "start": {
              "column": 19,
              "line": 44
            }
          }
        }
      ],
      "range": [
        1071,
        1128
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 46
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
            "name": "withOverloadSignature",
            "optional": false,
            "range": [
              1133,
              1154
            ],
            "loc": {
              "end": {
                "column": 25,
                "line": 47
              },
              "start": {
                "column": 4,
                "line": 47
              }
            }
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "overload1",
            "optional": false,
            "range": [
              1157,
              1166
            ],
            "loc": {
              "end": {
                "column": 37,
                "line": 47
              },
              "start": {
                "column": 28,
                "line": 47
              }
            }
          },
          "range": [
            1133,
            1166
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 47
            },
            "start": {
              "column": 4,
              "line": 47
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1129,
        1167
      ],
      "loc": {
        "end": {
          "column": 38,
          "line": 47
        },
        "start": {
          "column": 0,
          "line": 47
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "async": false,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "range": [
          1195,
          1198
        ],
        "loc": {
          "end": {
            "column": 29,
            "line": 49
          },
          "start": {
            "column": 26,
            "line": 49
          }
        }
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "range": [
          1178,
          1179
        ],
        "loc": {
          "end": {
            "column": 10,
            "line": 49
          },
          "start": {
            "column": 9,
            "line": 49
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 24,
                "line": 49
              },
              "start": {
                "column": 12,
                "line": 49
              }
            },
            "range": [
              1181,
              1193
            ],
            "typeAnnotation": {
              "type": "TSFunctionType",
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "loc": {
                  "end": {
                    "column": 24,
                    "line": 49
                  },
                  "start": {
                    "column": 17,
                    "line": 49
                  }
                },
                "range": [
                  1186,
                  1193
                ],
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "range": [
                    1189,
                    1193
                  ],
                  "loc": {
                    "end": {
                      "column": 24,
                      "line": 49
                    },
                    "start": {
                      "column": 20,
                      "line": 49
                    }
                  }
                }
              },
              "range": [
                1183,
                1193
              ],
              "loc": {
                "end": {
                  "column": 24,
                  "line": 49
                },
                "start": {
                  "column": 14,
                  "line": 49
                }
              }
            }
          },
          "range": [
            1180,
            1193
          ],
          "loc": {
            "end": {
              "column": 24,
              "line": 49
            },
            "start": {
              "column": 11,
              "line": 49
            }
          }
        }
      ],
      "range": [
        1169,
        1198
      ],
      "loc": {
        "end": {
          "column": 29,
          "line": 49
        },
        "start": {
          "column": 0,
          "line": 49
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "range": [
              1216,
              1259
            ],
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "async": false,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "range": [
                  1252,
                  1259
                ],
                "loc": {
                  "end": {
                    "column": 5,
                    "line": 53
                  },
                  "start": {
                    "column": 40,
                    "line": 52
                  }
                }
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "range": [
                  1232,
                  1235
                ],
                "loc": {
                  "end": {
                    "column": 23,
                    "line": 52
                  },
                  "start": {
                    "column": 20,
                    "line": 52
                  }
                }
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "loc": {
                      "end": {
                        "column": 37,
                        "line": 52
                      },
                      "start": {
                        "column": 25,
                        "line": 52
                      }
                    },
                    "range": [
                      1237,
                      1249
                    ],
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "loc": {
                          "end": {
                            "column": 37,
                            "line": 52
                          },
                          "start": {
                            "column": 30,
                            "line": 52
                          }
                        },
                        "range": [
                          1242,
                          1249
                        ],
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "range": [
                            1245,
                            1249
                          ],
                          "loc": {
                            "end": {
                              "column": 37,
                              "line": 52
                            },
                            "start": {
                              "column": 33,
                              "line": 52
                            }
                          }
                        }
                      },
                      "range": [
                        1239,
                        1249
                      ],
                      "loc": {
                        "end": {
                          "column": 37,
                          "line": 52
                        },
                        "start": {
                          "column": 27,
                          "line": 52
                        }
                      }
                    }
                  },
                  "range": [
                    1236,
                    1249
                  ],
                  "loc": {
                    "end": {
                      "column": 37,
                      "line": 52
                    },
                    "start": {
                      "column": 24,
                      "line": 52
                    }
                  }
                }
              ],
              "range": [
                1223,
                1259
              ],
              "loc": {
                "end": {
                  "column": 5,
                  "line": 53
                },
                "start": {
                  "column": 11,
                  "line": 52
                }
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": [],
            "loc": {
              "end": {
                "column": 5,
                "line": 53
              },
              "start": {
                "column": 4,
                "line": 52
              }
            }
          }
        ],
        "range": [
          1210,
          1262
        ],
        "loc": {
          "end": {
            "column": 1,
            "line": 55
          },
          "start": {
            "column": 10,
            "line": 51
          }
        }
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "range": [
          1207,
          1209
        ],
        "decorators": [],
        "name": "m2",
        "optional": false,
        "loc": {
          "end": {
            "column": 9,
            "line": 51
          },
          "start": {
            "column": 7,
            "line": 51
          }
        }
      },
      "kind": "module",
      "range": [
        1200,
        1262
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 55
        },
        "start": {
          "column": 0,
          "line": 51
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
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
                        "name": "b",
                        "optional": false,
                        "range": [
                          1289,
                          1290
                        ],
                        "loc": {
                          "end": {
                            "column": 9,
                            "line": 59
                          },
                          "start": {
                            "column": 8,
                            "line": 59
                          }
                        }
                      },
                      "init": {
                        "type": "Literal",
                        "raw": "30",
                        "value": 30,
                        "range": [
                          1293,
                          1295
                        ],
                        "loc": {
                          "end": {
                            "column": 14,
                            "line": 59
                          },
                          "start": {
                            "column": 12,
                            "line": 59
                          }
                        }
                      },
                      "range": [
                        1289,
                        1295
                      ],
                      "loc": {
                        "end": {
                          "column": 14,
                          "line": 59
                        },
                        "start": {
                          "column": 8,
                          "line": 59
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var",
                  "range": [
                    1285,
                    1296
                  ],
                  "loc": {
                    "end": {
                      "column": 15,
                      "line": 59
                    },
                    "start": {
                      "column": 4,
                      "line": 59
                    }
                  }
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "range": [
                      1308,
                      1309
                    ],
                    "loc": {
                      "end": {
                        "column": 12,
                        "line": 60
                      },
                      "start": {
                        "column": 11,
                        "line": 60
                      }
                    }
                  },
                  "range": [
                    1301,
                    1310
                  ],
                  "loc": {
                    "end": {
                      "column": 13,
                      "line": 60
                    },
                    "start": {
                      "column": 4,
                      "line": 60
                    }
                  }
                }
              ],
              "range": [
                1278,
                1312
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 61
                },
                "start": {
                  "column": 14,
                  "line": 57
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              1271,
              1312
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 61
              },
              "start": {
                "column": 7,
                "line": 57
              }
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m2",
            "optional": false,
            "range": [
              1264,
              1266
            ],
            "loc": {
              "end": {
                "column": 2,
                "line": 57
              },
              "start": {
                "column": 0,
                "line": 57
              }
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "range": [
              1267,
              1270
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 57
              },
              "start": {
                "column": 3,
                "line": 57
              }
            }
          },
          "range": [
            1264,
            1270
          ],
          "loc": {
            "end": {
              "column": 6,
              "line": 57
            },
            "start": {
              "column": 0,
              "line": 57
            }
          }
        },
        "optional": false,
        "range": [
          1264,
          1313
        ],
        "loc": {
          "end": {
            "column": 2,
            "line": 61
          },
          "start": {
            "column": 0,
            "line": 57
          }
        }
      },
      "range": [
        1264,
        1314
      ],
      "loc": {
        "end": {
          "column": 3,
          "line": 61
        },
        "start": {
          "column": 0,
          "line": 57
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fooAmbient",
        "optional": false,
        "range": [
          1334,
          1344
        ],
        "loc": {
          "end": {
            "column": 27,
            "line": 64
          },
          "start": {
            "column": 17,
            "line": 64
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 37,
                "line": 64
              },
              "start": {
                "column": 29,
                "line": 64
              }
            },
            "range": [
              1346,
              1354
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                1348,
                1354
              ],
              "loc": {
                "end": {
                  "column": 37,
                  "line": 64
                },
                "start": {
                  "column": 31,
                  "line": 64
                }
              }
            }
          },
          "range": [
            1345,
            1354
          ],
          "loc": {
            "end": {
              "column": 37,
              "line": 64
            },
            "start": {
              "column": 28,
              "line": 64
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 46,
            "line": 64
          },
          "start": {
            "column": 38,
            "line": 64
          }
        },
        "range": [
          1355,
          1363
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            1357,
            1363
          ],
          "loc": {
            "end": {
              "column": 46,
              "line": 64
            },
            "start": {
              "column": 40,
              "line": 64
            }
          }
        }
      },
      "range": [
        1317,
        1364
      ],
      "loc": {
        "end": {
          "column": 47,
          "line": 64
        },
        "start": {
          "column": 0,
          "line": 64
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloadAmbient",
        "optional": false,
        "range": [
          1383,
          1398
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 66
          },
          "start": {
            "column": 17,
            "line": 66
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "loc": {
              "end": {
                "column": 42,
                "line": 66
              },
              "start": {
                "column": 34,
                "line": 66
              }
            },
            "range": [
              1400,
              1408
            ],
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "range": [
                1402,
                1408
              ],
              "loc": {
                "end": {
                  "column": 42,
                  "line": 66
                },
                "start": {
                  "column": 36,
                  "line": 66
                }
              }
            }
          },
          "range": [
            1399,
            1408
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 66
            },
            "start": {
              "column": 33,
              "line": 66
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 51,
            "line": 66
          },
          "start": {
            "column": 43,
            "line": 66
          }
        },
        "range": [
          1409,
          1417
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            1411,
            1417
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 66
            },
            "start": {
              "column": 45,
              "line": 66
            }
          }
        }
      },
      "range": [
        1366,
        1418
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 66
        },
        "start": {
          "column": 0,
          "line": 66
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "overloadAmbient",
        "optional": false,
        "range": [
          1436,
          1451
        ],
        "loc": {
          "end": {
            "column": 32,
            "line": 67
          },
          "start": {
            "column": 17,
            "line": 67
          }
        }
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
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
              1453,
              1461
            ],
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "range": [
                1455,
                1461
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
            1452,
            1461
          ],
          "loc": {
            "end": {
              "column": 42,
              "line": 67
            },
            "start": {
              "column": 33,
              "line": 67
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "loc": {
          "end": {
            "column": 51,
            "line": 67
          },
          "start": {
            "column": 43,
            "line": 67
          }
        },
        "range": [
          1462,
          1470
        ],
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "range": [
            1464,
            1470
          ],
          "loc": {
            "end": {
              "column": 51,
              "line": 67
            },
            "start": {
              "column": 45,
              "line": 67
            }
          }
        }
      },
      "range": [
        1419,
        1471
      ],
      "loc": {
        "end": {
          "column": 52,
          "line": 67
        },
        "start": {
          "column": 0,
          "line": 67
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
            "name": "f2",
            "optional": false,
            "range": [
              1477,
              1479
            ],
            "loc": {
              "end": {
                "column": 6,
                "line": 69
              },
              "start": {
                "column": 4,
                "line": 69
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
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "raw": "\"string\"",
                    "value": "string",
                    "range": [
                      1501,
                      1509
                    ],
                    "loc": {
                      "end": {
                        "column": 19,
                        "line": 70
                      },
                      "start": {
                        "column": 11,
                        "line": 70
                      }
                    }
                  },
                  "range": [
                    1494,
                    1510
                  ],
                  "loc": {
                    "end": {
                      "column": 20,
                      "line": 70
                    },
                    "start": {
                      "column": 4,
                      "line": 70
                    }
                  }
                }
              ],
              "range": [
                1488,
                1512
              ],
              "loc": {
                "end": {
                  "column": 1,
                  "line": 71
                },
                "start": {
                  "column": 15,
                  "line": 69
                }
              }
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "range": [
              1482,
              1512
            ],
            "loc": {
              "end": {
                "column": 1,
                "line": 71
              },
              "start": {
                "column": 9,
                "line": 69
              }
            }
          },
          "range": [
            1477,
            1512
          ],
          "loc": {
            "end": {
              "column": 1,
              "line": 71
            },
            "start": {
              "column": 4,
              "line": 69
            }
          }
        }
      ],
      "declare": false,
      "kind": "var",
      "range": [
        1473,
        1512
      ],
      "loc": {
        "end": {
          "column": 1,
          "line": 71
        },
        "start": {
          "column": 0,
          "line": 69
        }
      }
    }
  ],
  "sourceType": "script",
  "loc": {
    "end": {
      "column": 1,
      "line": 71
    },
    "start": {
      "column": 0,
      "line": 1
    }
  },
  "hashbang": null
}
```
