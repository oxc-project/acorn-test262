__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 779,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 44,
      "end": 84,
      "body": {
        "type": "TSInterfaceBody",
        "start": 56,
        "end": 84,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 62,
            "end": 82,
            "params": [
              {
                "type": "Identifier",
                "start": 63,
                "end": 72,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 64,
                  "end": 72,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 66,
                    "end": 72
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 73,
              "end": 81,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 86,
      "end": 120,
      "body": {
        "type": "TSInterfaceBody",
        "start": 102,
        "end": 120,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 108,
            "end": 118,
            "params": [
              {
                "type": "Identifier",
                "start": 109,
                "end": 113,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 110,
                  "end": 113,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 112,
                    "end": 113,
                    "typeName": {
                      "type": "Identifier",
                      "start": 112,
                      "end": 113,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 114,
              "end": 117,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 116,
                "end": 117,
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 117,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 98,
        "decorators": [],
        "name": "I2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 98,
        "end": 101,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 99,
            "end": 100,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 122,
      "end": 152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 126,
          "end": 152,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 152,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 127,
              "end": 152,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 129,
                "end": 152,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 131,
                    "end": 150,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 132,
                        "end": 141,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 133,
                          "end": 141,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 135,
                            "end": 141
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 142,
                      "end": 150,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 144,
                        "end": 150
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 154,
      "end": 174,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 167,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 168,
          "end": 172,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 169,
            "end": 172,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 171,
              "end": 172,
              "typeName": {
                "type": "Identifier",
                "start": 171,
                "end": 172,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 175,
      "end": 195,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 188,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 189,
          "end": 193,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 190,
            "end": 193,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 192,
              "end": 193,
              "typeName": {
                "type": "Identifier",
                "start": 192,
                "end": 193,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 205,
      "end": 230,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 227,
        "end": 230,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 218,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 219,
          "end": 225,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 220,
            "end": 225,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 222,
              "end": 225
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 232,
      "end": 259,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 245,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 246,
          "end": 257,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 247,
            "end": 257,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 249,
              "end": 257,
              "exprName": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 260,
      "end": 287,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 273,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 274,
          "end": 285,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 275,
            "end": 285,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 277,
              "end": 285,
              "exprName": {
                "type": "Identifier",
                "start": 284,
                "end": 285,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 297,
      "end": 322,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 319,
        "end": 322,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 306,
        "end": 310,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 311,
          "end": 317,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 312,
            "end": 317,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 314,
              "end": 317
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 324,
      "end": 351,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 337,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 338,
          "end": 349,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 339,
            "end": 349,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 341,
              "end": 349,
              "exprName": {
                "type": "Identifier",
                "start": 348,
                "end": 349,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 352,
      "end": 379,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 365,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 366,
          "end": 377,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 367,
            "end": 377,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 369,
              "end": 377,
              "exprName": {
                "type": "Identifier",
                "start": 376,
                "end": 377,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 389,
      "end": 414,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 411,
        "end": 414,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 402,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 403,
          "end": 409,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 404,
            "end": 409,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 406,
              "end": 409
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 416,
      "end": 437,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 425,
        "end": 430,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 431,
          "end": 435,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 432,
            "end": 435,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 434,
              "end": 435,
              "typeName": {
                "type": "Identifier",
                "start": 434,
                "end": 435,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 438,
      "end": 466,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 447,
        "end": 452,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 453,
          "end": 464,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 454,
            "end": 464,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 456,
              "end": 464,
              "exprName": {
                "type": "Identifier",
                "start": 463,
                "end": 464,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 476,
      "end": 502,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 499,
        "end": 502,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 485,
        "end": 490,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 491,
          "end": 497,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 492,
            "end": 497,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 494,
              "end": 497
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 504,
      "end": 525,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 518,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 519,
          "end": 523,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 520,
            "end": 523,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 522,
              "end": 523,
              "typeName": {
                "type": "Identifier",
                "start": 522,
                "end": 523,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 526,
      "end": 556,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 535,
        "end": 540,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 541,
          "end": 554,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 542,
            "end": 554,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 544,
              "end": 554,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 546,
                "end": 554,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 547,
                    "end": 553
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 544,
                "end": 546,
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 566,
      "end": 592,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 589,
        "end": 592,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 575,
        "end": 580,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 581,
          "end": 587,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 582,
            "end": 587,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 584,
              "end": 587
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 594,
      "end": 623,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 603,
        "end": 609,
        "decorators": [],
        "name": "foo14b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 610,
          "end": 621,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 611,
            "end": 621,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 613,
              "end": 621,
              "exprName": {
                "type": "Identifier",
                "start": 620,
                "end": 621,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 624,
      "end": 655,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 633,
        "end": 639,
        "decorators": [],
        "name": "foo14b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 640,
          "end": 653,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 641,
            "end": 653,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 643,
              "end": 653,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 645,
                "end": 653,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 646,
                    "end": 652
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 643,
                "end": 645,
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 665,
      "end": 692,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 689,
        "end": 692,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 674,
        "end": 680,
        "decorators": [],
        "name": "foo14b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 681,
          "end": 687,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 682,
            "end": 687,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 684,
              "end": 687
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 694,
      "end": 715,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 703,
        "end": 708,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 709,
          "end": 713,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 710,
            "end": 713,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 712,
              "end": 713,
              "typeName": {
                "type": "Identifier",
                "start": 712,
                "end": 713,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 716,
      "end": 746,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 725,
        "end": 730,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 731,
          "end": 744,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 732,
            "end": 744,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 734,
              "end": 744,
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
              },
              "typeName": {
                "type": "Identifier",
                "start": 734,
                "end": 736,
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 753,
      "end": 779,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 776,
        "end": 779,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 762,
        "end": 767,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 768,
          "end": 774,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 769,
            "end": 774,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 771,
              "end": 774
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
