__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 55
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 66,
                    "end": 72
                  },
                  "start": 64,
                  "end": 72
                },
                "start": 63,
                "end": 72
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 75,
                "end": 81
              },
              "start": 73,
              "end": 81
            },
            "start": 62,
            "end": 82
          }
        ],
        "start": 56,
        "end": 84
      },
      "declare": false,
      "start": 44,
      "end": 84
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 98
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 99,
            "end": 100
          }
        ],
        "start": 98,
        "end": 101
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 112,
                      "end": 113
                    },
                    "typeArguments": null,
                    "start": 112,
                    "end": 113
                  },
                  "start": 110,
                  "end": 113
                },
                "start": 109,
                "end": 113
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 117
                },
                "typeArguments": null,
                "start": 116,
                "end": 117
              },
              "start": 114,
              "end": 117
            },
            "start": 108,
            "end": 118
          }
        ],
        "start": 102,
        "end": 120
      },
      "declare": false,
      "start": 86,
      "end": 120
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 135,
                            "end": 141
                          },
                          "start": 133,
                          "end": 141
                        },
                        "start": 132,
                        "end": 141
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 144,
                        "end": 150
                      },
                      "start": 142,
                      "end": 150
                    },
                    "start": 131,
                    "end": 150
                  }
                ],
                "start": 129,
                "end": 152
              },
              "start": 127,
              "end": 152
            },
            "start": 126,
            "end": 152
          },
          "init": null,
          "definite": false,
          "start": 126,
          "end": 152
        }
      ],
      "declare": false,
      "start": 122,
      "end": 152
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 163,
        "end": 167
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 171,
                "end": 172
              },
              "typeArguments": null,
              "start": 171,
              "end": 172
            },
            "start": 169,
            "end": 172
          },
          "start": 168,
          "end": 172
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 154,
      "end": 174
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 188
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 193
              },
              "typeArguments": null,
              "start": 192,
              "end": 193
            },
            "start": 190,
            "end": 193
          },
          "start": 189,
          "end": 193
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 175,
      "end": 195
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 218
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 222,
              "end": 225
            },
            "start": 220,
            "end": 225
          },
          "start": 219,
          "end": 225
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 227,
        "end": 230
      },
      "expression": false,
      "start": 205,
      "end": 230
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 245
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 256,
                "end": 257
              },
              "typeArguments": null,
              "start": 249,
              "end": 257
            },
            "start": 247,
            "end": 257
          },
          "start": 246,
          "end": 257
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 232,
      "end": 259
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 273
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 284,
                "end": 285
              },
              "typeArguments": null,
              "start": 277,
              "end": 285
            },
            "start": 275,
            "end": 285
          },
          "start": 274,
          "end": 285
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 260,
      "end": 287
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 306,
        "end": 310
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 314,
              "end": 317
            },
            "start": 312,
            "end": 317
          },
          "start": 311,
          "end": 317
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 319,
        "end": 322
      },
      "expression": false,
      "start": 297,
      "end": 322
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 333,
        "end": 337
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 348,
                "end": 349
              },
              "typeArguments": null,
              "start": 341,
              "end": 349
            },
            "start": 339,
            "end": 349
          },
          "start": 338,
          "end": 349
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 324,
      "end": 351
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 365
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 376,
                "end": 377
              },
              "typeArguments": null,
              "start": 369,
              "end": 377
            },
            "start": 367,
            "end": 377
          },
          "start": 366,
          "end": 377
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 352,
      "end": 379
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 402
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 406,
              "end": 409
            },
            "start": 404,
            "end": 409
          },
          "start": 403,
          "end": 409
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 411,
        "end": 414
      },
      "expression": false,
      "start": 389,
      "end": 414
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 425,
        "end": 430
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 434,
                "end": 435
              },
              "typeArguments": null,
              "start": 434,
              "end": 435
            },
            "start": 432,
            "end": 435
          },
          "start": 431,
          "end": 435
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 416,
      "end": 437
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 447,
        "end": 452
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 464
              },
              "typeArguments": null,
              "start": 456,
              "end": 464
            },
            "start": 454,
            "end": 464
          },
          "start": 453,
          "end": 464
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 438,
      "end": 466
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 485,
        "end": 490
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 494,
              "end": 497
            },
            "start": 492,
            "end": 497
          },
          "start": 491,
          "end": 497
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 499,
        "end": 502
      },
      "expression": false,
      "start": 476,
      "end": 502
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 513,
        "end": 518
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 523
              },
              "typeArguments": null,
              "start": 522,
              "end": 523
            },
            "start": 520,
            "end": 523
          },
          "start": 519,
          "end": 523
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 504,
      "end": 525
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 535,
        "end": 540
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 546
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 547,
                    "end": 553
                  }
                ],
                "start": 546,
                "end": 554
              },
              "start": 544,
              "end": 554
            },
            "start": 542,
            "end": 554
          },
          "start": 541,
          "end": 554
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 526,
      "end": 556
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 575,
        "end": 580
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 584,
              "end": 587
            },
            "start": 582,
            "end": 587
          },
          "start": 581,
          "end": 587
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 589,
        "end": 592
      },
      "expression": false,
      "start": 566,
      "end": 592
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14b",
        "optional": false,
        "typeAnnotation": null,
        "start": 603,
        "end": 609
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 620,
                "end": 621
              },
              "typeArguments": null,
              "start": 613,
              "end": 621
            },
            "start": 611,
            "end": 621
          },
          "start": 610,
          "end": 621
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 594,
      "end": 623
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14b",
        "optional": false,
        "typeAnnotation": null,
        "start": 633,
        "end": 639
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 645
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 646,
                    "end": 652
                  }
                ],
                "start": 645,
                "end": 653
              },
              "start": 643,
              "end": 653
            },
            "start": 641,
            "end": 653
          },
          "start": 640,
          "end": 653
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 624,
      "end": 655
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14b",
        "optional": false,
        "typeAnnotation": null,
        "start": 674,
        "end": 680
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 684,
              "end": 687
            },
            "start": 682,
            "end": 687
          },
          "start": 681,
          "end": 687
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 689,
        "end": 692
      },
      "expression": false,
      "start": 665,
      "end": 692
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 703,
        "end": 708
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 712,
                "end": 713
              },
              "typeArguments": null,
              "start": 712,
              "end": 713
            },
            "start": 710,
            "end": 713
          },
          "start": 709,
          "end": 713
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 694,
      "end": 715
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 725,
        "end": 730
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null,
                "start": 734,
                "end": 736
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 737,
                    "end": 743
                  }
                ],
                "start": 736,
                "end": 744
              },
              "start": 734,
              "end": 744
            },
            "start": 732,
            "end": 744
          },
          "start": 731,
          "end": 744
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 716,
      "end": 746
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 762,
        "end": 767
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 771,
              "end": 774
            },
            "start": 769,
            "end": 774
          },
          "start": 768,
          "end": 774
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 776,
        "end": 779
      },
      "expression": false,
      "start": 753,
      "end": 779
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 779
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 44,
    "end": 53,
    "range": [
      44,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 66,
    "end": 72,
    "range": [
      66,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 75,
    "end": 81,
    "range": [
      75,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 86,
    "end": 95,
    "range": [
      86,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 96,
    "end": 98,
    "range": [
      96,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 122,
    "end": 125,
    "range": [
      122,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 135,
    "end": 141,
    "range": [
      135,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 144,
    "end": 150,
    "range": [
      144,
      150
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 154,
    "end": 162,
    "range": [
      154,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 163,
    "end": 167,
    "range": [
      163,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 175,
    "end": 183,
    "range": [
      175,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 184,
    "end": 188,
    "range": [
      184,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 205,
    "end": 213,
    "range": [
      205,
      213
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 214,
    "end": 218,
    "range": [
      214,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 222,
    "end": 225,
    "range": [
      222,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 232,
    "end": 240,
    "range": [
      232,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 241,
    "end": 245,
    "range": [
      241,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 249,
    "end": 255,
    "range": [
      249,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 260,
    "end": 268,
    "range": [
      260,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 269,
    "end": 273,
    "range": [
      269,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 277,
    "end": 283,
    "range": [
      277,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 297,
    "end": 305,
    "range": [
      297,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 306,
    "end": 310,
    "range": [
      306,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 314,
    "end": 317,
    "range": [
      314,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 324,
    "end": 332,
    "range": [
      324,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 333,
    "end": 337,
    "range": [
      333,
      337
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 341,
    "end": 347,
    "range": [
      341,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 352,
    "end": 360,
    "range": [
      352,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 361,
    "end": 365,
    "range": [
      361,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 369,
    "end": 375,
    "range": [
      369,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 389,
    "end": 397,
    "range": [
      389,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 398,
    "end": 402,
    "range": [
      398,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 406,
    "end": 409,
    "range": [
      406,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 416,
    "end": 424,
    "range": [
      416,
      424
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 425,
    "end": 430,
    "range": [
      425,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 438,
    "end": 446,
    "range": [
      438,
      446
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 447,
    "end": 452,
    "range": [
      447,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 456,
    "end": 462,
    "range": [
      456,
      462
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 476,
    "end": 484,
    "range": [
      476,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 485,
    "end": 490,
    "range": [
      485,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 494,
    "end": 497,
    "range": [
      494,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 504,
    "end": 512,
    "range": [
      504,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 513,
    "end": 518,
    "range": [
      513,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 526,
    "end": 534,
    "range": [
      526,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 535,
    "end": 540,
    "range": [
      535,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 544,
    "end": 546,
    "range": [
      544,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 546,
    "end": 547,
    "range": [
      546,
      547
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 547,
    "end": 553,
    "range": [
      547,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 566,
    "end": 574,
    "range": [
      566,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 575,
    "end": 580,
    "range": [
      575,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 584,
    "end": 587,
    "range": [
      584,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 594,
    "end": 602,
    "range": [
      594,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14b",
    "start": 603,
    "end": 609,
    "range": [
      603,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 613,
    "end": 619,
    "range": [
      613,
      619
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 624,
    "end": 632,
    "range": [
      624,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14b",
    "start": 633,
    "end": 639,
    "range": [
      633,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 643,
    "end": 645,
    "range": [
      643,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 646,
    "end": 652,
    "range": [
      646,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 665,
    "end": 673,
    "range": [
      665,
      673
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14b",
    "start": 674,
    "end": 680,
    "range": [
      674,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 684,
    "end": 687,
    "range": [
      684,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 694,
    "end": 702,
    "range": [
      694,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 703,
    "end": 708,
    "range": [
      703,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 716,
    "end": 724,
    "range": [
      716,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 725,
    "end": 730,
    "range": [
      725,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 734,
    "end": 736,
    "range": [
      734,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 737,
    "end": 743,
    "range": [
      737,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 753,
    "end": 761,
    "range": [
      753,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 762,
    "end": 767,
    "range": [
      762,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 771,
    "end": 774,
    "range": [
      771,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 776,
    "end": 777,
    "range": [
      776,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  }
]
```
