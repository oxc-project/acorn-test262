__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 797,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 78,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 61,
            "end": 76,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 75,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 74,
                "end": 75,
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 51,
        "end": 54,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 52,
            "end": 53,
            "name": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 80,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 99,
        "end": 100,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 104,
        "end": 107,
        "body": []
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 87,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 89,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 100,
        "end": 103,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 101,
            "end": 102,
            "typeName": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 109,
      "end": 137,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 122,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 123,
          "end": 135,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 124,
            "end": 135,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 126,
              "end": 135,
              "typeName": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 127,
                "end": 135,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 128,
                    "end": 134
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 138,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 151,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 152,
          "end": 164,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 153,
            "end": 164,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 155,
              "end": 164,
              "typeName": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 156,
                "end": 164,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 157,
                    "end": 163
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 173,
      "end": 198,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 186,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 187,
          "end": 193,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 188,
            "end": 193,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 190,
              "end": 193
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 195,
        "end": 198,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 200,
      "end": 228,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 213,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 214,
          "end": 226,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 226,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 217,
              "end": 226,
              "typeName": {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 218,
                "end": 226,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 219,
                    "end": 225
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 229,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 238,
        "end": 242,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 243,
          "end": 255,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 244,
            "end": 255,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 246,
              "end": 255,
              "typeName": {
                "type": "Identifier",
                "start": 246,
                "end": 247,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 247,
                "end": 255,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 248,
                    "end": 254
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 264,
      "end": 289,
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 277,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 278,
          "end": 284,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 279,
            "end": 284,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 281,
              "end": 284
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 286,
        "end": 289,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 291,
      "end": 319,
      "id": {
        "type": "Identifier",
        "start": 300,
        "end": 304,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 305,
          "end": 317,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 306,
            "end": 317,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 308,
              "end": 317,
              "typeName": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 309,
                "end": 317,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 310,
                    "end": 316
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 320,
      "end": 348,
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 333,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 334,
          "end": 346,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 335,
            "end": 346,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 337,
              "end": 346,
              "typeName": {
                "type": "Identifier",
                "start": 337,
                "end": 338,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 338,
                "end": 346,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 339,
                    "end": 345
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 355,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 364,
        "end": 368,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 369,
          "end": 375,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 370,
            "end": 375,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 372,
              "end": 375
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 377,
        "end": 380,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 382,
      "end": 418,
      "id": {
        "type": "Identifier",
        "start": 391,
        "end": 395,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 396,
          "end": 408,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 397,
            "end": 408,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 399,
              "end": 408,
              "typeName": {
                "type": "Identifier",
                "start": 399,
                "end": 400,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 400,
                "end": 408,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 401,
                    "end": 407
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 409,
        "end": 417,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 411,
          "end": 417
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 420,
      "end": 456,
      "id": {
        "type": "Identifier",
        "start": 429,
        "end": 433,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 434,
          "end": 446,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 435,
            "end": 446,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 437,
              "end": 446,
              "typeName": {
                "type": "Identifier",
                "start": 437,
                "end": 438,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 438,
                "end": 446,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 439,
                    "end": 445
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 447,
        "end": 455,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 449,
          "end": 455
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 471,
      "end": 501,
      "id": {
        "type": "Identifier",
        "start": 480,
        "end": 484,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 485,
          "end": 491,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 486,
            "end": 491,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 488,
              "end": 491
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 498,
        "end": 501,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 492,
        "end": 497,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 494,
          "end": 497
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 503,
      "end": 533,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 507,
          "end": 532,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 508,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 511,
            "end": 532,
            "callee": {
              "type": "Identifier",
              "start": 511,
              "end": 515,
              "name": "foo4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 516,
                "end": 531,
                "callee": {
                  "type": "Identifier",
                  "start": 520,
                  "end": 521,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 521,
                  "end": 529,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 522,
                      "end": 528
                    }
                  ]
                }
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 534,
      "end": 564,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 538,
          "end": 563,
          "id": {
            "type": "Identifier",
            "start": 538,
            "end": 539,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 542,
            "end": 563,
            "callee": {
              "type": "Identifier",
              "start": 542,
              "end": 546,
              "name": "foo4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 547,
                "end": 562,
                "callee": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 552,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 552,
                  "end": 560,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 553,
                      "end": 559
                    }
                  ]
                }
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 566,
      "end": 602,
      "id": {
        "type": "Identifier",
        "start": 575,
        "end": 579,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 580,
          "end": 592,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 581,
            "end": 592,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 583,
              "end": 592,
              "typeName": {
                "type": "Identifier",
                "start": 583,
                "end": 584,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 584,
                "end": 592,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 585,
                    "end": 591
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 593,
        "end": 601,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 595,
          "end": 601
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 603,
      "end": 639,
      "id": {
        "type": "Identifier",
        "start": 612,
        "end": 616,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 617,
          "end": 629,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 618,
            "end": 629,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 620,
              "end": 629,
              "typeName": {
                "type": "Identifier",
                "start": 620,
                "end": 621,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 621,
                "end": 629,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 622,
                    "end": 628
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 630,
        "end": 638,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 632,
          "end": 638
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 649,
      "end": 679,
      "id": {
        "type": "Identifier",
        "start": 658,
        "end": 662,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 663,
          "end": 669,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 664,
            "end": 669,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 666,
              "end": 669
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 676,
        "end": 679,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 670,
        "end": 675,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 672,
          "end": 675
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 681,
      "end": 717,
      "id": {
        "type": "Identifier",
        "start": 690,
        "end": 694,
        "name": "foo6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 695,
          "end": 707,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 696,
            "end": 707,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 698,
              "end": 707,
              "typeName": {
                "type": "Identifier",
                "start": 698,
                "end": 699,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 699,
                "end": 707,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 700,
                    "end": 706
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 708,
        "end": 716,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 710,
          "end": 716
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 718,
      "end": 754,
      "id": {
        "type": "Identifier",
        "start": 727,
        "end": 731,
        "name": "foo6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 732,
          "end": 744,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 733,
            "end": 744,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 735,
              "end": 744,
              "typeName": {
                "type": "Identifier",
                "start": 735,
                "end": 736,
                "name": "D",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 736,
                "end": 744,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 737,
                    "end": 743
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 745,
        "end": 753,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 747,
          "end": 753
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 764,
      "end": 794,
      "id": {
        "type": "Identifier",
        "start": 773,
        "end": 777,
        "name": "foo6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 778,
          "end": 784,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 779,
            "end": 784,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 781,
              "end": 784
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 791,
        "end": 794,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 785,
        "end": 790,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 787,
          "end": 790
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
