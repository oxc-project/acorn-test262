__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 51
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 62,
                    "end": 68
                  },
                  "start": 60,
                  "end": 68
                },
                "start": 59,
                "end": 68
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 71,
                "end": 77
              },
              "start": 69,
              "end": 77
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 58,
            "end": 78
          }
        ],
        "start": 52,
        "end": 80
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 80
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 88,
        "end": 89
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 100,
                    "end": 106
                  },
                  "start": 98,
                  "end": 106
                },
                "start": 97,
                "end": 106
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 109,
                "end": 115
              },
              "start": 107,
              "end": 115
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 96,
            "end": 116
          }
        ],
        "start": 90,
        "end": 118
      },
      "abstract": false,
      "declare": false,
      "start": 82,
      "end": 118
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 127
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
              "start": 128,
              "end": 129
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 128,
            "end": 129
          }
        ],
        "start": 127,
        "end": 130
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 141,
                    "end": 147
                  },
                  "start": 139,
                  "end": 147
                },
                "start": 138,
                "end": 147
              }
            ],
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
                  "start": 150,
                  "end": 151
                },
                "typeArguments": null,
                "start": 150,
                "end": 151
              },
              "start": 148,
              "end": 151
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 137,
            "end": 152
          }
        ],
        "start": 131,
        "end": 154
      },
      "abstract": false,
      "declare": false,
      "start": 120,
      "end": 154
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 166,
        "end": 167
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 178,
                    "end": 184
                  },
                  "start": 176,
                  "end": 184
                },
                "start": 175,
                "end": 184
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 187,
                "end": 193
              },
              "start": 185,
              "end": 193
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 174,
            "end": 194
          }
        ],
        "start": 168,
        "end": 196
      },
      "declare": false,
      "start": 156,
      "end": 196
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PA",
        "optional": false,
        "typeAnnotation": null,
        "start": 204,
        "end": 206
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 215,
        "end": 216
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 217,
        "end": 220
      },
      "abstract": false,
      "declare": false,
      "start": 198,
      "end": 220
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PB",
        "optional": false,
        "typeAnnotation": null,
        "start": 228,
        "end": 230
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 239,
        "end": 240
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 241,
        "end": 244
      },
      "abstract": false,
      "declare": false,
      "start": 222,
      "end": 244
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
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 263,
                            "end": 269
                          },
                          "start": 261,
                          "end": 269
                        },
                        "start": 260,
                        "end": 269
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 272,
                        "end": 278
                      },
                      "start": 270,
                      "end": 278
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 259,
                    "end": 279
                  }
                ],
                "start": 253,
                "end": 281
              },
              "start": 251,
              "end": 281
            },
            "start": 250,
            "end": 281
          },
          "init": null,
          "definite": false,
          "start": 250,
          "end": 281
        }
      ],
      "declare": false,
      "start": 246,
      "end": 281
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 295,
                            "end": 301
                          },
                          "start": 293,
                          "end": 301
                        },
                        "start": 292,
                        "end": 301
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 304,
                        "end": 310
                      },
                      "start": 302,
                      "end": 310
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 291,
                    "end": 311
                  }
                ],
                "start": 289,
                "end": 313
              },
              "start": 287,
              "end": 313
            },
            "start": 286,
            "end": 313
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 318,
                  "end": 319
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "''",
                  "start": 321,
                  "end": 323
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 318,
                "end": 323
              }
            ],
            "start": 316,
            "end": 325
          },
          "definite": false,
          "start": 286,
          "end": 325
        }
      ],
      "declare": false,
      "start": 282,
      "end": 326
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 337,
        "end": 341
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 345,
                "end": 346
              },
              "typeArguments": null,
              "start": 345,
              "end": 346
            },
            "start": 343,
            "end": 346
          },
          "start": 342,
          "end": 346
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 328,
      "end": 348
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 358,
        "end": 362
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 367
              },
              "typeArguments": null,
              "start": 366,
              "end": 367
            },
            "start": 364,
            "end": 367
          },
          "start": 363,
          "end": 367
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 349,
      "end": 369
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 388,
        "end": 392
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
              "start": 396,
              "end": 399
            },
            "start": 394,
            "end": 399
          },
          "start": 393,
          "end": 399
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 401,
        "end": 404
      },
      "expression": false,
      "start": 379,
      "end": 404
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 420
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 425
              },
              "typeArguments": null,
              "start": 424,
              "end": 425
            },
            "start": 422,
            "end": 425
          },
          "start": 421,
          "end": 425
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 406,
      "end": 427
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 437,
        "end": 442
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 446,
                "end": 447
              },
              "typeArguments": null,
              "start": 446,
              "end": 447
            },
            "start": 444,
            "end": 447
          },
          "start": 443,
          "end": 447
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 428,
      "end": 449
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 468,
        "end": 473
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
              "start": 477,
              "end": 480
            },
            "start": 475,
            "end": 480
          },
          "start": 474,
          "end": 480
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 482,
        "end": 485
      },
      "expression": false,
      "start": 459,
      "end": 485
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 496,
        "end": 501
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 505,
                "end": 506
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 507,
                    "end": 513
                  }
                ],
                "start": 506,
                "end": 514
              },
              "start": 505,
              "end": 514
            },
            "start": 503,
            "end": 514
          },
          "start": 502,
          "end": 514
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 487,
      "end": 516
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 526,
        "end": 531
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 535,
                "end": 536
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 537,
                    "end": 543
                  }
                ],
                "start": 536,
                "end": 544
              },
              "start": 535,
              "end": 544
            },
            "start": 533,
            "end": 544
          },
          "start": 532,
          "end": 544
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 517,
      "end": 546
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 565,
        "end": 570
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
              "start": 574,
              "end": 577
            },
            "start": 572,
            "end": 577
          },
          "start": 571,
          "end": 577
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 579,
        "end": 582
      },
      "expression": false,
      "start": 556,
      "end": 582
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 593,
        "end": 597
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
                "start": 601,
                "end": 602
              },
              "typeArguments": null,
              "start": 601,
              "end": 602
            },
            "start": 599,
            "end": 602
          },
          "start": 598,
          "end": 602
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 584,
      "end": 604
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 614,
        "end": 618
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
                "start": 622,
                "end": 623
              },
              "typeArguments": null,
              "start": 622,
              "end": 623
            },
            "start": 620,
            "end": 623
          },
          "start": 619,
          "end": 623
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 605,
      "end": 625
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 644,
        "end": 648
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
              "start": 652,
              "end": 655
            },
            "start": 650,
            "end": 655
          },
          "start": 649,
          "end": 655
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 657,
        "end": 660
      },
      "expression": false,
      "start": 635,
      "end": 660
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 671,
        "end": 675
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
                "start": 686,
                "end": 687
              },
              "typeArguments": null,
              "start": 679,
              "end": 687
            },
            "start": 677,
            "end": 687
          },
          "start": 676,
          "end": 687
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 662,
      "end": 689
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 699,
        "end": 703
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
                "start": 714,
                "end": 715
              },
              "typeArguments": null,
              "start": 707,
              "end": 715
            },
            "start": 705,
            "end": 715
          },
          "start": 704,
          "end": 715
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 690,
      "end": 717
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 736,
        "end": 740
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
              "start": 744,
              "end": 747
            },
            "start": 742,
            "end": 747
          },
          "start": 741,
          "end": 747
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 749,
        "end": 752
      },
      "expression": false,
      "start": 727,
      "end": 752
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 763,
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
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 778,
                "end": 779
              },
              "typeArguments": null,
              "start": 771,
              "end": 779
            },
            "start": 769,
            "end": 779
          },
          "start": 768,
          "end": 779
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 754,
      "end": 781
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 791,
        "end": 795
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
                "start": 806,
                "end": 807
              },
              "typeArguments": null,
              "start": 799,
              "end": 807
            },
            "start": 797,
            "end": 807
          },
          "start": 796,
          "end": 807
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 782,
      "end": 809
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 828,
        "end": 832
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
              "start": 836,
              "end": 839
            },
            "start": 834,
            "end": 839
          },
          "start": 833,
          "end": 839
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 841,
        "end": 844
      },
      "expression": false,
      "start": 819,
      "end": 844
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 855,
        "end": 859
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 863,
                "end": 864
              },
              "typeArguments": null,
              "start": 863,
              "end": 864
            },
            "start": 861,
            "end": 864
          },
          "start": 860,
          "end": 864
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 846,
      "end": 866
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 876,
        "end": 880
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 884,
                "end": 885
              },
              "typeArguments": null,
              "start": 884,
              "end": 885
            },
            "start": 882,
            "end": 885
          },
          "start": 881,
          "end": 885
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 867,
      "end": 887
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 903,
        "end": 907
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
              "start": 911,
              "end": 914
            },
            "start": 909,
            "end": 914
          },
          "start": 908,
          "end": 914
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 916,
        "end": 919
      },
      "expression": false,
      "start": 894,
      "end": 919
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 930,
        "end": 935
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 939,
                "end": 940
              },
              "typeArguments": null,
              "start": 939,
              "end": 940
            },
            "start": 937,
            "end": 940
          },
          "start": 936,
          "end": 940
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 921,
      "end": 942
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 952,
        "end": 957
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 961,
                "end": 962
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 963,
                    "end": 969
                  }
                ],
                "start": 962,
                "end": 970
              },
              "start": 961,
              "end": 970
            },
            "start": 959,
            "end": 970
          },
          "start": 958,
          "end": 970
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 943,
      "end": 972
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 991,
        "end": 996
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
              "start": 1000,
              "end": 1003
            },
            "start": 998,
            "end": 1003
          },
          "start": 997,
          "end": 1003
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1005,
        "end": 1008
      },
      "expression": false,
      "start": 982,
      "end": 1008
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1019,
        "end": 1024
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1028,
                "end": 1029
              },
              "typeArguments": null,
              "start": 1028,
              "end": 1029
            },
            "start": 1026,
            "end": 1029
          },
          "start": 1025,
          "end": 1029
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1010,
      "end": 1031
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1041,
        "end": 1046
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
                "name": "PA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1050,
                "end": 1052
              },
              "typeArguments": null,
              "start": 1050,
              "end": 1052
            },
            "start": 1048,
            "end": 1052
          },
          "start": 1047,
          "end": 1052
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1032,
      "end": 1054
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1073,
        "end": 1078
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
              "start": 1082,
              "end": 1085
            },
            "start": 1080,
            "end": 1085
          },
          "start": 1079,
          "end": 1085
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1087,
        "end": 1090
      },
      "expression": false,
      "start": 1064,
      "end": 1090
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1101,
        "end": 1106
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1110,
                "end": 1111
              },
              "typeArguments": null,
              "start": 1110,
              "end": 1111
            },
            "start": 1108,
            "end": 1111
          },
          "start": 1107,
          "end": 1111
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1092,
      "end": 1113
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1123,
        "end": 1128
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
                "name": "PB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1132,
                "end": 1134
              },
              "typeArguments": null,
              "start": 1132,
              "end": 1134
            },
            "start": 1130,
            "end": 1134
          },
          "start": 1129,
          "end": 1134
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1114,
      "end": 1136
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1152,
        "end": 1157
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
              "start": 1161,
              "end": 1164
            },
            "start": 1159,
            "end": 1164
          },
          "start": 1158,
          "end": 1164
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1166,
        "end": 1169
      },
      "expression": false,
      "start": 1143,
      "end": 1169
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1180,
        "end": 1184
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1188,
                "end": 1189
              },
              "typeArguments": null,
              "start": 1188,
              "end": 1189
            },
            "start": 1186,
            "end": 1189
          },
          "start": 1185,
          "end": 1189
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1171,
      "end": 1191
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1201,
        "end": 1205
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
                "start": 1209,
                "end": 1210
              },
              "typeArguments": null,
              "start": 1209,
              "end": 1210
            },
            "start": 1207,
            "end": 1210
          },
          "start": 1206,
          "end": 1210
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1192,
      "end": 1212
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1228,
        "end": 1232
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
              "start": 1236,
              "end": 1239
            },
            "start": 1234,
            "end": 1239
          },
          "start": 1233,
          "end": 1239
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1241,
        "end": 1244
      },
      "expression": false,
      "start": 1219,
      "end": 1244
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1255,
        "end": 1259
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 1263,
                "end": 1264
              },
              "typeArguments": null,
              "start": 1263,
              "end": 1264
            },
            "start": 1261,
            "end": 1264
          },
          "start": 1260,
          "end": 1264
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1246,
      "end": 1266
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1276,
        "end": 1280
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
                "start": 1291,
                "end": 1292
              },
              "typeArguments": null,
              "start": 1284,
              "end": 1292
            },
            "start": 1282,
            "end": 1292
          },
          "start": 1281,
          "end": 1292
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1267,
      "end": 1294
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1310,
        "end": 1314
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
              "start": 1318,
              "end": 1321
            },
            "start": 1316,
            "end": 1321
          },
          "start": 1315,
          "end": 1321
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1323,
        "end": 1326
      },
      "expression": false,
      "start": 1301,
      "end": 1326
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1337,
        "end": 1341
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1345,
                "end": 1346
              },
              "typeArguments": null,
              "start": 1345,
              "end": 1346
            },
            "start": 1343,
            "end": 1346
          },
          "start": 1342,
          "end": 1346
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1328,
      "end": 1348
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1358,
        "end": 1362
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
                "start": 1366,
                "end": 1367
              },
              "typeArguments": null,
              "start": 1366,
              "end": 1367
            },
            "start": 1364,
            "end": 1367
          },
          "start": 1363,
          "end": 1367
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1349,
      "end": 1369
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1388,
        "end": 1392
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
              "start": 1396,
              "end": 1399
            },
            "start": 1394,
            "end": 1399
          },
          "start": 1393,
          "end": 1399
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1401,
        "end": 1404
      },
      "expression": false,
      "start": 1379,
      "end": 1404
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1415,
        "end": 1419
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1423,
                "end": 1424
              },
              "typeArguments": null,
              "start": 1423,
              "end": 1424
            },
            "start": 1421,
            "end": 1424
          },
          "start": 1420,
          "end": 1424
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1406,
      "end": 1426
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1436,
        "end": 1440
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1444,
                "end": 1445
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1446,
                    "end": 1452
                  }
                ],
                "start": 1445,
                "end": 1453
              },
              "start": 1444,
              "end": 1453
            },
            "start": 1442,
            "end": 1453
          },
          "start": 1441,
          "end": 1453
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1427,
      "end": 1455
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1471,
        "end": 1475
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
              "start": 1479,
              "end": 1482
            },
            "start": 1477,
            "end": 1482
          },
          "start": 1476,
          "end": 1482
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1484,
        "end": 1487
      },
      "expression": false,
      "start": 1462,
      "end": 1487
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1498,
        "end": 1503
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1507,
                "end": 1508
              },
              "typeArguments": null,
              "start": 1507,
              "end": 1508
            },
            "start": 1505,
            "end": 1508
          },
          "start": 1504,
          "end": 1508
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1489,
      "end": 1510
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1520,
        "end": 1525
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
                "start": 1536,
                "end": 1537
              },
              "typeArguments": null,
              "start": 1529,
              "end": 1537
            },
            "start": 1527,
            "end": 1537
          },
          "start": 1526,
          "end": 1537
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1511,
      "end": 1539
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1558,
        "end": 1563
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
              "start": 1567,
              "end": 1570
            },
            "start": 1565,
            "end": 1570
          },
          "start": 1564,
          "end": 1570
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1572,
        "end": 1575
      },
      "expression": false,
      "start": 1549,
      "end": 1575
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1586,
        "end": 1591
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1595,
                "end": 1596
              },
              "typeArguments": null,
              "start": 1595,
              "end": 1596
            },
            "start": 1593,
            "end": 1596
          },
          "start": 1592,
          "end": 1596
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1577,
      "end": 1598
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1608,
        "end": 1613
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
                "start": 1624,
                "end": 1625
              },
              "typeArguments": null,
              "start": 1617,
              "end": 1625
            },
            "start": 1615,
            "end": 1625
          },
          "start": 1614,
          "end": 1625
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1599,
      "end": 1627
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1643,
        "end": 1648
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
              "start": 1652,
              "end": 1655
            },
            "start": 1650,
            "end": 1655
          },
          "start": 1649,
          "end": 1655
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1657,
        "end": 1660
      },
      "expression": false,
      "start": 1634,
      "end": 1660
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1671,
        "end": 1677
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1681,
                "end": 1682
              },
              "typeArguments": null,
              "start": 1681,
              "end": 1682
            },
            "start": 1679,
            "end": 1682
          },
          "start": 1678,
          "end": 1682
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1662,
      "end": 1684
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1694,
        "end": 1700
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
                "name": "PA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1704,
                "end": 1706
              },
              "typeArguments": null,
              "start": 1704,
              "end": 1706
            },
            "start": 1702,
            "end": 1706
          },
          "start": 1701,
          "end": 1706
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1685,
      "end": 1708
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1724,
        "end": 1730
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
              "start": 1734,
              "end": 1737
            },
            "start": 1732,
            "end": 1737
          },
          "start": 1731,
          "end": 1737
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1739,
        "end": 1742
      },
      "expression": false,
      "start": 1715,
      "end": 1742
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1753,
        "end": 1759
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
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 1763,
                "end": 1764
              },
              "typeArguments": null,
              "start": 1763,
              "end": 1764
            },
            "start": 1761,
            "end": 1764
          },
          "start": 1760,
          "end": 1764
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1744,
      "end": 1766
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1776,
        "end": 1782
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
                "name": "PB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1786,
                "end": 1788
              },
              "typeArguments": null,
              "start": 1786,
              "end": 1788
            },
            "start": 1784,
            "end": 1788
          },
          "start": 1783,
          "end": 1788
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1767,
      "end": 1790
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1809,
        "end": 1815
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
              "start": 1819,
              "end": 1822
            },
            "start": 1817,
            "end": 1822
          },
          "start": 1816,
          "end": 1822
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1824,
        "end": 1827
      },
      "expression": false,
      "start": 1800,
      "end": 1827
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1838,
        "end": 1843
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
                "start": 1847,
                "end": 1848
              },
              "typeArguments": null,
              "start": 1847,
              "end": 1848
            },
            "start": 1845,
            "end": 1848
          },
          "start": 1844,
          "end": 1848
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1829,
      "end": 1850
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1860,
        "end": 1865
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
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1869,
                "end": 1870
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1871,
                    "end": 1877
                  }
                ],
                "start": 1870,
                "end": 1878
              },
              "start": 1869,
              "end": 1878
            },
            "start": 1867,
            "end": 1878
          },
          "start": 1866,
          "end": 1878
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1851,
      "end": 1880
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1896,
        "end": 1901
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
              "start": 1905,
              "end": 1908
            },
            "start": 1903,
            "end": 1908
          },
          "start": 1902,
          "end": 1908
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1910,
        "end": 1913
      },
      "expression": false,
      "start": 1887,
      "end": 1913
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1924,
        "end": 1929
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
                "start": 1933,
                "end": 1934
              },
              "typeArguments": null,
              "start": 1933,
              "end": 1934
            },
            "start": 1931,
            "end": 1934
          },
          "start": 1930,
          "end": 1934
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1915,
      "end": 1936
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1946,
        "end": 1951
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
                "start": 1962,
                "end": 1963
              },
              "typeArguments": null,
              "start": 1955,
              "end": 1963
            },
            "start": 1953,
            "end": 1963
          },
          "start": 1952,
          "end": 1963
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1937,
      "end": 1965
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1984,
        "end": 1989
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
              "start": 1993,
              "end": 1996
            },
            "start": 1991,
            "end": 1996
          },
          "start": 1990,
          "end": 1996
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1998,
        "end": 2001
      },
      "expression": false,
      "start": 1975,
      "end": 2001
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2012,
        "end": 2017
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
                "start": 2021,
                "end": 2022
              },
              "typeArguments": null,
              "start": 2021,
              "end": 2022
            },
            "start": 2019,
            "end": 2022
          },
          "start": 2018,
          "end": 2022
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2003,
      "end": 2024
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2034,
        "end": 2039
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
                "start": 2050,
                "end": 2051
              },
              "typeArguments": null,
              "start": 2043,
              "end": 2051
            },
            "start": 2041,
            "end": 2051
          },
          "start": 2040,
          "end": 2051
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2025,
      "end": 2053
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 2069,
        "end": 2074
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
              "start": 2078,
              "end": 2081
            },
            "start": 2076,
            "end": 2081
          },
          "start": 2075,
          "end": 2081
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2083,
        "end": 2086
      },
      "expression": false,
      "start": 2060,
      "end": 2086
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2097,
        "end": 2102
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
                "start": 2106,
                "end": 2107
              },
              "typeArguments": null,
              "start": 2106,
              "end": 2107
            },
            "start": 2104,
            "end": 2107
          },
          "start": 2103,
          "end": 2107
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2088,
      "end": 2109
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2119,
        "end": 2124
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
                "name": "PA",
                "optional": false,
                "typeAnnotation": null,
                "start": 2128,
                "end": 2130
              },
              "typeArguments": null,
              "start": 2128,
              "end": 2130
            },
            "start": 2126,
            "end": 2130
          },
          "start": 2125,
          "end": 2130
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2110,
      "end": 2132
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2148,
        "end": 2153
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
              "start": 2157,
              "end": 2160
            },
            "start": 2155,
            "end": 2160
          },
          "start": 2154,
          "end": 2160
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2162,
        "end": 2165
      },
      "expression": false,
      "start": 2139,
      "end": 2165
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2176,
        "end": 2181
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
                "start": 2185,
                "end": 2186
              },
              "typeArguments": null,
              "start": 2185,
              "end": 2186
            },
            "start": 2183,
            "end": 2186
          },
          "start": 2182,
          "end": 2186
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2167,
      "end": 2188
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2198,
        "end": 2203
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
                "name": "PB",
                "optional": false,
                "typeAnnotation": null,
                "start": 2207,
                "end": 2209
              },
              "typeArguments": null,
              "start": 2207,
              "end": 2209
            },
            "start": 2205,
            "end": 2209
          },
          "start": 2204,
          "end": 2209
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 2189,
      "end": 2211
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null,
        "start": 2230,
        "end": 2235
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
              "start": 2239,
              "end": 2242
            },
            "start": 2237,
            "end": 2242
          },
          "start": 2236,
          "end": 2242
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2244,
        "end": 2247
      },
      "expression": false,
      "start": 2221,
      "end": 2247
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 2248
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 44,
    "end": 49,
    "range": [
      44,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 62,
    "end": 68,
    "range": [
      62,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 71,
    "end": 77,
    "range": [
      71,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 82,
    "end": 87,
    "range": [
      82,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 97,
    "end": 98,
    "range": [
      97,
      98
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 100,
    "end": 106,
    "range": [
      100,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 109,
    "end": 115,
    "range": [
      109,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 120,
    "end": 125,
    "range": [
      120,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 129,
    "end": 130,
    "range": [
      129,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 141,
    "end": 147,
    "range": [
      141,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 156,
    "end": 165,
    "range": [
      156,
      165
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 178,
    "end": 184,
    "range": [
      178,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 187,
    "end": 193,
    "range": [
      187,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 198,
    "end": 203,
    "range": [
      198,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 204,
    "end": 206,
    "range": [
      204,
      206
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 207,
    "end": 214,
    "range": [
      207,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 222,
    "end": 227,
    "range": [
      222,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 228,
    "end": 230,
    "range": [
      228,
      230
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 231,
    "end": 238,
    "range": [
      231,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 246,
    "end": 249,
    "range": [
      246,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 263,
    "end": 269,
    "range": [
      263,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 272,
    "end": 278,
    "range": [
      272,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 282,
    "end": 285,
    "range": [
      282,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 295,
    "end": 301,
    "range": [
      295,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 304,
    "end": 310,
    "range": [
      304,
      310
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 321,
    "end": 323,
    "range": [
      321,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 328,
    "end": 336,
    "range": [
      328,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 337,
    "end": 341,
    "range": [
      337,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 349,
    "end": 357,
    "range": [
      349,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 358,
    "end": 362,
    "range": [
      358,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 379,
    "end": 387,
    "range": [
      379,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 388,
    "end": 392,
    "range": [
      388,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 396,
    "end": 399,
    "range": [
      396,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 406,
    "end": 414,
    "range": [
      406,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 415,
    "end": 420,
    "range": [
      415,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 425,
    "end": 426,
    "range": [
      425,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 428,
    "end": 436,
    "range": [
      428,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 437,
    "end": 442,
    "range": [
      437,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 459,
    "end": 467,
    "range": [
      459,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 468,
    "end": 473,
    "range": [
      468,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 477,
    "end": 480,
    "range": [
      477,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 487,
    "end": 495,
    "range": [
      487,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 496,
    "end": 501,
    "range": [
      496,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 507,
    "end": 513,
    "range": [
      507,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 517,
    "end": 525,
    "range": [
      517,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 526,
    "end": 531,
    "range": [
      526,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 537,
    "end": 543,
    "range": [
      537,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 556,
    "end": 564,
    "range": [
      556,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 565,
    "end": 570,
    "range": [
      565,
      570
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 570,
    "end": 571,
    "range": [
      570,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 574,
    "end": 577,
    "range": [
      574,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580,
    "range": [
      579,
      580
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 584,
    "end": 592,
    "range": [
      584,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 593,
    "end": 597,
    "range": [
      593,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 605,
    "end": 613,
    "range": [
      605,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 614,
    "end": 618,
    "range": [
      614,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 635,
    "end": 643,
    "range": [
      635,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 644,
    "end": 648,
    "range": [
      644,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 652,
    "end": 655,
    "range": [
      652,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 662,
    "end": 670,
    "range": [
      662,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 671,
    "end": 675,
    "range": [
      671,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 679,
    "end": 685,
    "range": [
      679,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 686,
    "end": 687,
    "range": [
      686,
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
    "value": ";",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 690,
    "end": 698,
    "range": [
      690,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 699,
    "end": 703,
    "range": [
      699,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 707,
    "end": 713,
    "range": [
      707,
      713
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 727,
    "end": 735,
    "range": [
      727,
      735
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 736,
    "end": 740,
    "range": [
      736,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 741,
    "end": 742,
    "range": [
      741,
      742
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 744,
    "end": 747,
    "range": [
      744,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 754,
    "end": 762,
    "range": [
      754,
      762
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 763,
    "end": 767,
    "range": [
      763,
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
    "type": "Keyword",
    "value": "typeof",
    "start": 771,
    "end": 777,
    "range": [
      771,
      777
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 779,
    "end": 780,
    "range": [
      779,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 782,
    "end": 790,
    "range": [
      782,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 791,
    "end": 795,
    "range": [
      791,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 799,
    "end": 805,
    "range": [
      799,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 808,
    "end": 809,
    "range": [
      808,
      809
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 819,
    "end": 827,
    "range": [
      819,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 828,
    "end": 832,
    "range": [
      828,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 836,
    "end": 839,
    "range": [
      836,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 841,
    "end": 842,
    "range": [
      841,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 846,
    "end": 854,
    "range": [
      846,
      854
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 855,
    "end": 859,
    "range": [
      855,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 867,
    "end": 875,
    "range": [
      867,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 876,
    "end": 880,
    "range": [
      876,
      880
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881,
    "range": [
      880,
      881
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 894,
    "end": 902,
    "range": [
      894,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 903,
    "end": 907,
    "range": [
      903,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 911,
    "end": 914,
    "range": [
      911,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 914,
    "end": 915,
    "range": [
      914,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 916,
    "end": 917,
    "range": [
      916,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 918,
    "end": 919,
    "range": [
      918,
      919
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 921,
    "end": 929,
    "range": [
      921,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 930,
    "end": 935,
    "range": [
      930,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 943,
    "end": 951,
    "range": [
      943,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 952,
    "end": 957,
    "range": [
      952,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 963,
    "end": 969,
    "range": [
      963,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 982,
    "end": 990,
    "range": [
      982,
      990
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 991,
    "end": 996,
    "range": [
      991,
      996
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 998,
    "end": 999,
    "range": [
      998,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1000,
    "end": 1003,
    "range": [
      1000,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1003,
    "end": 1004,
    "range": [
      1003,
      1004
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1010,
    "end": 1018,
    "range": [
      1010,
      1018
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1019,
    "end": 1024,
    "range": [
      1019,
      1024
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1024,
    "end": 1025,
    "range": [
      1024,
      1025
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1032,
    "end": 1040,
    "range": [
      1032,
      1040
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1041,
    "end": 1046,
    "range": [
      1041,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1046,
    "end": 1047,
    "range": [
      1046,
      1047
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 1050,
    "end": 1052,
    "range": [
      1050,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1064,
    "end": 1072,
    "range": [
      1064,
      1072
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5c",
    "start": 1073,
    "end": 1078,
    "range": [
      1073,
      1078
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1078,
    "end": 1079,
    "range": [
      1078,
      1079
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1080,
    "end": 1081,
    "range": [
      1080,
      1081
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1082,
    "end": 1085,
    "range": [
      1082,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1089,
    "end": 1090,
    "range": [
      1089,
      1090
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1092,
    "end": 1100,
    "range": [
      1092,
      1100
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1101,
    "end": 1106,
    "range": [
      1101,
      1106
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1114,
    "end": 1122,
    "range": [
      1114,
      1122
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1123,
    "end": 1128,
    "range": [
      1123,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1130,
    "end": 1131,
    "range": [
      1130,
      1131
    ]
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 1132,
    "end": 1134,
    "range": [
      1132,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1143,
    "end": 1151,
    "range": [
      1143,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5d",
    "start": 1152,
    "end": 1157,
    "range": [
      1152,
      1157
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1158,
    "end": 1159,
    "range": [
      1158,
      1159
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1161,
    "end": 1164,
    "range": [
      1161,
      1164
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1171,
    "end": 1179,
    "range": [
      1171,
      1179
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1180,
    "end": 1184,
    "range": [
      1180,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1188,
    "end": 1189,
    "range": [
      1188,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1192,
    "end": 1200,
    "range": [
      1192,
      1200
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1201,
    "end": 1205,
    "range": [
      1201,
      1205
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1206,
    "end": 1207,
    "range": [
      1206,
      1207
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1207,
    "end": 1208,
    "range": [
      1207,
      1208
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1210,
    "end": 1211,
    "range": [
      1210,
      1211
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1219,
    "end": 1227,
    "range": [
      1219,
      1227
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1228,
    "end": 1232,
    "range": [
      1228,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1236,
    "end": 1239,
    "range": [
      1236,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1246,
    "end": 1254,
    "range": [
      1246,
      1254
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1255,
    "end": 1259,
    "range": [
      1255,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1265,
    "end": 1266,
    "range": [
      1265,
      1266
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1267,
    "end": 1275,
    "range": [
      1267,
      1275
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1276,
    "end": 1280,
    "range": [
      1276,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1281,
    "end": 1282,
    "range": [
      1281,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1284,
    "end": 1290,
    "range": [
      1284,
      1290
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1301,
    "end": 1309,
    "range": [
      1301,
      1309
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1310,
    "end": 1314,
    "range": [
      1310,
      1314
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1316,
    "end": 1317,
    "range": [
      1316,
      1317
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1318,
    "end": 1321,
    "range": [
      1318,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1328,
    "end": 1336,
    "range": [
      1328,
      1336
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1337,
    "end": 1341,
    "range": [
      1337,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1341,
    "end": 1342,
    "range": [
      1341,
      1342
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1343,
    "end": 1344,
    "range": [
      1343,
      1344
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1349,
    "end": 1357,
    "range": [
      1349,
      1357
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1358,
    "end": 1362,
    "range": [
      1358,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1367,
    "end": 1368,
    "range": [
      1367,
      1368
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1379,
    "end": 1387,
    "range": [
      1379,
      1387
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1388,
    "end": 1392,
    "range": [
      1388,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1396,
    "end": 1399,
    "range": [
      1396,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1401,
    "end": 1402,
    "range": [
      1401,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1406,
    "end": 1414,
    "range": [
      1406,
      1414
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1415,
    "end": 1419,
    "range": [
      1415,
      1419
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1421,
    "end": 1422,
    "range": [
      1421,
      1422
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1427,
    "end": 1435,
    "range": [
      1427,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1436,
    "end": 1440,
    "range": [
      1436,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1446,
    "end": 1452,
    "range": [
      1446,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1462,
    "end": 1470,
    "range": [
      1462,
      1470
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1471,
    "end": 1475,
    "range": [
      1471,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1477,
    "end": 1478,
    "range": [
      1477,
      1478
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1479,
    "end": 1482,
    "range": [
      1479,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1489,
    "end": 1497,
    "range": [
      1489,
      1497
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1498,
    "end": 1503,
    "range": [
      1498,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1504,
    "end": 1505,
    "range": [
      1504,
      1505
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1505,
    "end": 1506,
    "range": [
      1505,
      1506
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1508,
    "end": 1509,
    "range": [
      1508,
      1509
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1511,
    "end": 1519,
    "range": [
      1511,
      1519
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1520,
    "end": 1525,
    "range": [
      1520,
      1525
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1526,
    "end": 1527,
    "range": [
      1526,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1529,
    "end": 1535,
    "range": [
      1529,
      1535
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1537,
    "end": 1538,
    "range": [
      1537,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1549,
    "end": 1557,
    "range": [
      1549,
      1557
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1558,
    "end": 1563,
    "range": [
      1558,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1564,
    "end": 1565,
    "range": [
      1564,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1567,
    "end": 1570,
    "range": [
      1567,
      1570
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1570,
    "end": 1571,
    "range": [
      1570,
      1571
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1574,
    "end": 1575,
    "range": [
      1574,
      1575
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1577,
    "end": 1585,
    "range": [
      1577,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1586,
    "end": 1591,
    "range": [
      1586,
      1591
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1591,
    "end": 1592,
    "range": [
      1591,
      1592
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1592,
    "end": 1593,
    "range": [
      1592,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1596,
    "end": 1597,
    "range": [
      1596,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1599,
    "end": 1607,
    "range": [
      1599,
      1607
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1608,
    "end": 1613,
    "range": [
      1608,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1614,
    "end": 1615,
    "range": [
      1614,
      1615
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1615,
    "end": 1616,
    "range": [
      1615,
      1616
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1617,
    "end": 1623,
    "range": [
      1617,
      1623
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1634,
    "end": 1642,
    "range": [
      1634,
      1642
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1643,
    "end": 1648,
    "range": [
      1643,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1652,
    "end": 1655,
    "range": [
      1652,
      1655
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1655,
    "end": 1656,
    "range": [
      1655,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1657,
    "end": 1658,
    "range": [
      1657,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1659,
    "end": 1660,
    "range": [
      1659,
      1660
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1662,
    "end": 1670,
    "range": [
      1662,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1671,
    "end": 1677,
    "range": [
      1671,
      1677
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1678,
    "end": 1679,
    "range": [
      1678,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1681,
    "end": 1682,
    "range": [
      1681,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1685,
    "end": 1693,
    "range": [
      1685,
      1693
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1694,
    "end": 1700,
    "range": [
      1694,
      1700
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1700,
    "end": 1701,
    "range": [
      1700,
      1701
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 1704,
    "end": 1706,
    "range": [
      1704,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1707,
    "end": 1708,
    "range": [
      1707,
      1708
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1715,
    "end": 1723,
    "range": [
      1715,
      1723
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11b",
    "start": 1724,
    "end": 1730,
    "range": [
      1724,
      1730
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1730,
    "end": 1731,
    "range": [
      1730,
      1731
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1731,
    "end": 1732,
    "range": [
      1731,
      1732
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1732,
    "end": 1733,
    "range": [
      1732,
      1733
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1734,
    "end": 1737,
    "range": [
      1734,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1737,
    "end": 1738,
    "range": [
      1737,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1744,
    "end": 1752,
    "range": [
      1744,
      1752
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1753,
    "end": 1759,
    "range": [
      1753,
      1759
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1759,
    "end": 1760,
    "range": [
      1759,
      1760
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1764,
    "end": 1765,
    "range": [
      1764,
      1765
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1765,
    "end": 1766,
    "range": [
      1765,
      1766
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1767,
    "end": 1775,
    "range": [
      1767,
      1775
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1776,
    "end": 1782,
    "range": [
      1776,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1784,
    "end": 1785,
    "range": [
      1784,
      1785
    ]
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 1786,
    "end": 1788,
    "range": [
      1786,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1800,
    "end": 1808,
    "range": [
      1800,
      1808
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11c",
    "start": 1809,
    "end": 1815,
    "range": [
      1809,
      1815
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1819,
    "end": 1822,
    "range": [
      1819,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1826,
    "end": 1827,
    "range": [
      1826,
      1827
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1829,
    "end": 1837,
    "range": [
      1829,
      1837
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1838,
    "end": 1843,
    "range": [
      1838,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1847,
    "end": 1848,
    "range": [
      1847,
      1848
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1848,
    "end": 1849,
    "range": [
      1848,
      1849
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1849,
    "end": 1850,
    "range": [
      1849,
      1850
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1851,
    "end": 1859,
    "range": [
      1851,
      1859
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1860,
    "end": 1865,
    "range": [
      1860,
      1865
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1865,
    "end": 1866,
    "range": [
      1865,
      1866
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1866,
    "end": 1867,
    "range": [
      1866,
      1867
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1869,
    "end": 1870,
    "range": [
      1869,
      1870
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1870,
    "end": 1871,
    "range": [
      1870,
      1871
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1871,
    "end": 1877,
    "range": [
      1871,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1878,
    "end": 1879,
    "range": [
      1878,
      1879
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1879,
    "end": 1880,
    "range": [
      1879,
      1880
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1887,
    "end": 1895,
    "range": [
      1887,
      1895
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1896,
    "end": 1901,
    "range": [
      1896,
      1901
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1905,
    "end": 1908,
    "range": [
      1905,
      1908
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1908,
    "end": 1909,
    "range": [
      1908,
      1909
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1915,
    "end": 1923,
    "range": [
      1915,
      1923
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1924,
    "end": 1929,
    "range": [
      1924,
      1929
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1929,
    "end": 1930,
    "range": [
      1929,
      1930
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1934,
    "end": 1935,
    "range": [
      1934,
      1935
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1937,
    "end": 1945,
    "range": [
      1937,
      1945
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1946,
    "end": 1951,
    "range": [
      1946,
      1951
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1955,
    "end": 1961,
    "range": [
      1955,
      1961
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1975,
    "end": 1983,
    "range": [
      1975,
      1983
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1984,
    "end": 1989,
    "range": [
      1984,
      1989
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1989,
    "end": 1990,
    "range": [
      1989,
      1990
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1990,
    "end": 1991,
    "range": [
      1990,
      1991
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1991,
    "end": 1992,
    "range": [
      1991,
      1992
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1993,
    "end": 1996,
    "range": [
      1993,
      1996
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1996,
    "end": 1997,
    "range": [
      1996,
      1997
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1998,
    "end": 1999,
    "range": [
      1998,
      1999
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2003,
    "end": 2011,
    "range": [
      2003,
      2011
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2012,
    "end": 2017,
    "range": [
      2012,
      2017
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2017,
    "end": 2018,
    "range": [
      2017,
      2018
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2018,
    "end": 2019,
    "range": [
      2018,
      2019
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2019,
    "end": 2020,
    "range": [
      2019,
      2020
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2025,
    "end": 2033,
    "range": [
      2025,
      2033
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2034,
    "end": 2039,
    "range": [
      2034,
      2039
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2039,
    "end": 2040,
    "range": [
      2039,
      2040
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2040,
    "end": 2041,
    "range": [
      2040,
      2041
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2041,
    "end": 2042,
    "range": [
      2041,
      2042
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2043,
    "end": 2049,
    "range": [
      2043,
      2049
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2050,
    "end": 2051,
    "range": [
      2050,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2051,
    "end": 2052,
    "range": [
      2051,
      2052
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2052,
    "end": 2053,
    "range": [
      2052,
      2053
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2060,
    "end": 2068,
    "range": [
      2060,
      2068
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 2069,
    "end": 2074,
    "range": [
      2069,
      2074
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2074,
    "end": 2075,
    "range": [
      2074,
      2075
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2078,
    "end": 2081,
    "range": [
      2078,
      2081
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2081,
    "end": 2082,
    "range": [
      2081,
      2082
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2083,
    "end": 2084,
    "range": [
      2083,
      2084
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2085,
    "end": 2086,
    "range": [
      2085,
      2086
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2088,
    "end": 2096,
    "range": [
      2088,
      2096
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2097,
    "end": 2102,
    "range": [
      2097,
      2102
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2102,
    "end": 2103,
    "range": [
      2102,
      2103
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2103,
    "end": 2104,
    "range": [
      2103,
      2104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2104,
    "end": 2105,
    "range": [
      2104,
      2105
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2106,
    "end": 2107,
    "range": [
      2106,
      2107
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2107,
    "end": 2108,
    "range": [
      2107,
      2108
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2110,
    "end": 2118,
    "range": [
      2110,
      2118
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2119,
    "end": 2124,
    "range": [
      2119,
      2124
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2125,
    "end": 2126,
    "range": [
      2125,
      2126
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2126,
    "end": 2127,
    "range": [
      2126,
      2127
    ]
  },
  {
    "type": "Identifier",
    "value": "PA",
    "start": 2128,
    "end": 2130,
    "range": [
      2128,
      2130
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2139,
    "end": 2147,
    "range": [
      2139,
      2147
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2148,
    "end": 2153,
    "range": [
      2148,
      2153
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2153,
    "end": 2154,
    "range": [
      2153,
      2154
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2154,
    "end": 2155,
    "range": [
      2154,
      2155
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2155,
    "end": 2156,
    "range": [
      2155,
      2156
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2157,
    "end": 2160,
    "range": [
      2157,
      2160
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2160,
    "end": 2161,
    "range": [
      2160,
      2161
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2162,
    "end": 2163,
    "range": [
      2162,
      2163
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2164,
    "end": 2165,
    "range": [
      2164,
      2165
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2167,
    "end": 2175,
    "range": [
      2167,
      2175
    ]
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2176,
    "end": 2181,
    "range": [
      2176,
      2181
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2181,
    "end": 2182,
    "range": [
      2181,
      2182
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2182,
    "end": 2183,
    "range": [
      2182,
      2183
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2183,
    "end": 2184,
    "range": [
      2183,
      2184
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2185,
    "end": 2186,
    "range": [
      2185,
      2186
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2186,
    "end": 2187,
    "range": [
      2186,
      2187
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2187,
    "end": 2188,
    "range": [
      2187,
      2188
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2189,
    "end": 2197,
    "range": [
      2189,
      2197
    ]
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2198,
    "end": 2203,
    "range": [
      2198,
      2203
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2203,
    "end": 2204,
    "range": [
      2203,
      2204
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2204,
    "end": 2205,
    "range": [
      2204,
      2205
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2205,
    "end": 2206,
    "range": [
      2205,
      2206
    ]
  },
  {
    "type": "Identifier",
    "value": "PB",
    "start": 2207,
    "end": 2209,
    "range": [
      2207,
      2209
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2221,
    "end": 2229,
    "range": [
      2221,
      2229
    ]
  },
  {
    "type": "Identifier",
    "value": "foo16",
    "start": 2230,
    "end": 2235,
    "range": [
      2230,
      2235
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2235,
    "end": 2236,
    "range": [
      2235,
      2236
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2236,
    "end": 2237,
    "range": [
      2236,
      2237
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2237,
    "end": 2238,
    "range": [
      2237,
      2238
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2239,
    "end": 2242,
    "range": [
      2239,
      2242
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2242,
    "end": 2243,
    "range": [
      2242,
      2243
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2244,
    "end": 2245,
    "range": [
      2244,
      2245
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2246,
    "end": 2247,
    "range": [
      2246,
      2247
    ]
  }
]
```
