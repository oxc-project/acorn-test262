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
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 56,
        "end": 84,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 62,
            "end": 82,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 63,
                "end": 72,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 64,
                  "end": 72,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 66,
                    "end": 72
                  }
                },
                "decorators": [],
                "optional": false
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
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 86,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 98,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 98,
        "end": 101,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 99,
            "end": 100,
            "name": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 102,
        "end": 120,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 108,
            "end": 118,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 109,
                "end": 113,
                "name": "x",
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 152,
            "name": "a",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 132,
                        "end": 141,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 133,
                          "end": 141,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 135,
                            "end": 141
                          }
                        },
                        "decorators": [],
                        "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 154,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 163,
        "end": 167,
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
          "start": 168,
          "end": 172,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
      "start": 175,
      "end": 195,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 188,
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
          "start": 189,
          "end": 193,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
      "start": 205,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 214,
        "end": 218,
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
          "start": 219,
          "end": 225,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 220,
            "end": 225,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 222,
              "end": 225
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 227,
        "end": 230,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 232,
      "end": 259,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 245,
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
          "start": 246,
          "end": 257,
          "name": "x",
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
      "start": 260,
      "end": 287,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 273,
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
          "start": 274,
          "end": 285,
          "name": "x",
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
      "start": 297,
      "end": 322,
      "id": {
        "type": "Identifier",
        "start": 306,
        "end": 310,
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
          "start": 311,
          "end": 317,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 312,
            "end": 317,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 314,
              "end": 317
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 319,
        "end": 322,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 324,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 337,
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
          "start": 338,
          "end": 349,
          "name": "x",
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
      "start": 352,
      "end": 379,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 365,
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
          "start": 366,
          "end": 377,
          "name": "x",
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
      "start": 389,
      "end": 414,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 402,
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
          "start": 403,
          "end": 409,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 404,
            "end": 409,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 406,
              "end": 409
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 411,
        "end": 414,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 416,
      "end": 437,
      "id": {
        "type": "Identifier",
        "start": 425,
        "end": 430,
        "name": "foo13",
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
          "start": 431,
          "end": 435,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
      "start": 438,
      "end": 466,
      "id": {
        "type": "Identifier",
        "start": 447,
        "end": 452,
        "name": "foo13",
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
          "start": 453,
          "end": 464,
          "name": "x",
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
      "start": 476,
      "end": 502,
      "id": {
        "type": "Identifier",
        "start": 485,
        "end": 490,
        "name": "foo13",
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
          "start": 491,
          "end": 497,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 492,
            "end": 497,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 494,
              "end": 497
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 499,
        "end": 502,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 504,
      "end": 525,
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 518,
        "name": "foo14",
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
          "start": 519,
          "end": 523,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
      "start": 526,
      "end": 556,
      "id": {
        "type": "Identifier",
        "start": 535,
        "end": 540,
        "name": "foo14",
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
          "start": 541,
          "end": 554,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 542,
            "end": 554,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 544,
              "end": 554,
              "typeName": {
                "type": "Identifier",
                "start": 544,
                "end": 546,
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
      "start": 566,
      "end": 592,
      "id": {
        "type": "Identifier",
        "start": 575,
        "end": 580,
        "name": "foo14",
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
          "start": 581,
          "end": 587,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 582,
            "end": 587,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 584,
              "end": 587
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 589,
        "end": 592,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 594,
      "end": 623,
      "id": {
        "type": "Identifier",
        "start": 603,
        "end": 609,
        "name": "foo14b",
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
          "start": 610,
          "end": 621,
          "name": "x",
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
      "start": 624,
      "end": 655,
      "id": {
        "type": "Identifier",
        "start": 633,
        "end": 639,
        "name": "foo14b",
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
          "start": 640,
          "end": 653,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 641,
            "end": 653,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 643,
              "end": 653,
              "typeName": {
                "type": "Identifier",
                "start": 643,
                "end": 645,
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
      "start": 665,
      "end": 692,
      "id": {
        "type": "Identifier",
        "start": 674,
        "end": 680,
        "name": "foo14b",
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
          "start": 681,
          "end": 687,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 682,
            "end": 687,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 684,
              "end": 687
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 689,
        "end": 692,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 694,
      "end": 715,
      "id": {
        "type": "Identifier",
        "start": 703,
        "end": 708,
        "name": "foo15",
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
          "start": 709,
          "end": 713,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
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
      "start": 716,
      "end": 746,
      "id": {
        "type": "Identifier",
        "start": 725,
        "end": 730,
        "name": "foo15",
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
          "start": 731,
          "end": 744,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 732,
            "end": 744,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 734,
              "end": 744,
              "typeName": {
                "type": "Identifier",
                "start": 734,
                "end": 736,
                "name": "I2",
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
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 753,
      "end": 779,
      "id": {
        "type": "Identifier",
        "start": 762,
        "end": 767,
        "name": "foo15",
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
          "start": 768,
          "end": 774,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 769,
            "end": 774,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 771,
              "end": 774
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 776,
        "end": 779,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
