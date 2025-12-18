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
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 61
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "TSStringKeyword",
                      "start": 65,
                      "end": 71
                    },
                    "start": 63,
                    "end": 71
                  },
                  "start": 62,
                  "end": 71
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 74,
                  "end": 80
                },
                "start": 72,
                "end": 80
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 90,
                      "end": 94
                    },
                    "start": 83,
                    "end": 95
                  }
                ],
                "start": 81,
                "end": 97
              },
              "expression": false,
              "start": 61,
              "end": 97
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 97
          }
        ],
        "start": 52,
        "end": 99
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 99
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
        "start": 107,
        "end": 108
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 118
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                      "type": "TSStringKeyword",
                      "start": 122,
                      "end": 128
                    },
                    "start": 120,
                    "end": 128
                  },
                  "start": 119,
                  "end": 128
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 133,
                      "end": 139
                    },
                    "start": 131,
                    "end": 139
                  },
                  "start": 130,
                  "end": 139
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 142,
                  "end": 148
                },
                "start": 140,
                "end": 148
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 158,
                      "end": 162
                    },
                    "start": 151,
                    "end": 163
                  }
                ],
                "start": 149,
                "end": 165
              },
              "expression": false,
              "start": 118,
              "end": 165
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 115,
            "end": 165
          }
        ],
        "start": 109,
        "end": 167
      },
      "abstract": false,
      "declare": false,
      "start": 101,
      "end": 167
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
        "start": 175,
        "end": 176
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
              "start": 177,
              "end": 178
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 177,
            "end": 178
          }
        ],
        "start": 176,
        "end": 179
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 186,
              "end": 189
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 193,
                        "end": 194
                      },
                      "typeArguments": null,
                      "start": 193,
                      "end": 194
                    },
                    "start": 191,
                    "end": 194
                  },
                  "start": 190,
                  "end": 194
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
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
                        "start": 199,
                        "end": 200
                      },
                      "typeArguments": null,
                      "start": 199,
                      "end": 200
                    },
                    "start": 197,
                    "end": 200
                  },
                  "start": 196,
                  "end": 200
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
                    "start": 203,
                    "end": 204
                  },
                  "typeArguments": null,
                  "start": 203,
                  "end": 204
                },
                "start": 201,
                "end": 204
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 214,
                      "end": 218
                    },
                    "start": 207,
                    "end": 219
                  }
                ],
                "start": 205,
                "end": 221
              },
              "expression": false,
              "start": 189,
              "end": 221
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 186,
            "end": 221
          }
        ],
        "start": 180,
        "end": 223
      },
      "abstract": false,
      "declare": false,
      "start": 169,
      "end": 223
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 236
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 246
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 250,
                    "end": 256
                  },
                  "start": 248,
                  "end": 256
                },
                "start": 247,
                "end": 256
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 259,
                "end": 265
              },
              "start": 257,
              "end": 265
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 243,
            "end": 266
          }
        ],
        "start": 237,
        "end": 268
      },
      "declare": false,
      "start": 225,
      "end": 268
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 280,
        "end": 282
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
              "start": 283,
              "end": 284
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 283,
            "end": 284
          }
        ],
        "start": 282,
        "end": 285
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 295
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "start": 299,
                      "end": 300
                    },
                    "typeArguments": null,
                    "start": 299,
                    "end": 300
                  },
                  "start": 297,
                  "end": 300
                },
                "start": 296,
                "end": 300
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
                  "start": 303,
                  "end": 304
                },
                "typeArguments": null,
                "start": 303,
                "end": 304
              },
              "start": 301,
              "end": 304
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 292,
            "end": 305
          }
        ],
        "start": 286,
        "end": 307
      },
      "declare": false,
      "start": 270,
      "end": 307
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
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 318,
                      "end": 321
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
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
                            "start": 325,
                            "end": 331
                          },
                          "start": 323,
                          "end": 331
                        },
                        "start": 322,
                        "end": 331
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 336,
                            "end": 342
                          },
                          "start": 334,
                          "end": 342
                        },
                        "start": 333,
                        "end": 342
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 345,
                        "end": 351
                      },
                      "start": 343,
                      "end": 351
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 318,
                    "end": 351
                  }
                ],
                "start": 316,
                "end": 353
              },
              "start": 314,
              "end": 353
            },
            "start": 313,
            "end": 353
          },
          "init": null,
          "definite": false,
          "start": 313,
          "end": 353
        }
      ],
      "declare": false,
      "start": 309,
      "end": 353
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
            "typeAnnotation": null,
            "start": 358,
            "end": 359
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 367
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
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
                          "type": "TSStringKeyword",
                          "start": 371,
                          "end": 377
                        },
                        "start": 369,
                        "end": 377
                      },
                      "start": 368,
                      "end": 377
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "",
                          "raw": "''",
                          "start": 388,
                          "end": 390
                        },
                        "start": 381,
                        "end": 391
                      }
                    ],
                    "start": 379,
                    "end": 393
                  },
                  "expression": false,
                  "start": 367,
                  "end": 393
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 364,
                "end": 393
              }
            ],
            "start": 362,
            "end": 395
          },
          "definite": false,
          "start": 358,
          "end": 395
        }
      ],
      "declare": false,
      "start": 354,
      "end": 396
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 407,
        "end": 411
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
                "start": 415,
                "end": 416
              },
              "typeArguments": null,
              "start": 415,
              "end": 416
            },
            "start": 413,
            "end": 416
          },
          "start": 412,
          "end": 416
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 398,
      "end": 418
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 428,
        "end": 432
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
                "start": 436,
                "end": 437
              },
              "typeArguments": null,
              "start": 436,
              "end": 437
            },
            "start": 434,
            "end": 437
          },
          "start": 433,
          "end": 437
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 419,
      "end": 439
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 462
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
              "start": 466,
              "end": 469
            },
            "start": 464,
            "end": 469
          },
          "start": 463,
          "end": 469
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 471,
        "end": 474
      },
      "expression": false,
      "start": 449,
      "end": 474
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 494,
                "end": 495
              },
              "typeArguments": null,
              "start": 494,
              "end": 495
            },
            "start": 492,
            "end": 495
          },
          "start": 491,
          "end": 495
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 476,
      "end": 497
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 507,
        "end": 512
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
                "start": 516,
                "end": 517
              },
              "typeArguments": null,
              "start": 516,
              "end": 517
            },
            "start": 514,
            "end": 517
          },
          "start": 513,
          "end": 517
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 498,
      "end": 519
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null,
        "start": 538,
        "end": 543
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
              "start": 547,
              "end": 550
            },
            "start": 545,
            "end": 550
          },
          "start": 544,
          "end": 550
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 552,
        "end": 555
      },
      "expression": false,
      "start": 529,
      "end": 555
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 566,
        "end": 571
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
                "start": 575,
                "end": 576
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 577,
                    "end": 583
                  }
                ],
                "start": 576,
                "end": 584
              },
              "start": 575,
              "end": 584
            },
            "start": 573,
            "end": 584
          },
          "start": 572,
          "end": 584
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 557,
      "end": 586
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 596,
        "end": 601
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
                "start": 605,
                "end": 606
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 607,
                    "end": 613
                  }
                ],
                "start": 606,
                "end": 614
              },
              "start": 605,
              "end": 614
            },
            "start": 603,
            "end": 614
          },
          "start": 602,
          "end": 614
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 587,
      "end": 616
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null,
        "start": 635,
        "end": 640
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
              "start": 644,
              "end": 647
            },
            "start": 642,
            "end": 647
          },
          "start": 641,
          "end": 647
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 649,
        "end": 652
      },
      "expression": false,
      "start": 626,
      "end": 652
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 663,
        "end": 667
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
                "start": 671,
                "end": 672
              },
              "typeArguments": null,
              "start": 671,
              "end": 672
            },
            "start": 669,
            "end": 672
          },
          "start": 668,
          "end": 672
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 654,
      "end": 674
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 684,
        "end": 688
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
                "start": 692,
                "end": 693
              },
              "typeArguments": null,
              "start": 692,
              "end": 693
            },
            "start": 690,
            "end": 693
          },
          "start": 689,
          "end": 693
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 675,
      "end": 695
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 714,
        "end": 718
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
              "start": 722,
              "end": 725
            },
            "start": 720,
            "end": 725
          },
          "start": 719,
          "end": 725
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 727,
        "end": 730
      },
      "expression": false,
      "start": 705,
      "end": 730
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 741,
        "end": 745
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
                "start": 756,
                "end": 757
              },
              "typeArguments": null,
              "start": 749,
              "end": 757
            },
            "start": 747,
            "end": 757
          },
          "start": 746,
          "end": 757
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 732,
      "end": 759
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 769,
        "end": 773
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
                "start": 784,
                "end": 785
              },
              "typeArguments": null,
              "start": 777,
              "end": 785
            },
            "start": 775,
            "end": 785
          },
          "start": 774,
          "end": 785
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 760,
      "end": 787
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 806,
        "end": 810
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
              "start": 814,
              "end": 817
            },
            "start": 812,
            "end": 817
          },
          "start": 811,
          "end": 817
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 819,
        "end": 822
      },
      "expression": false,
      "start": 797,
      "end": 822
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 833,
        "end": 837
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
                "start": 848,
                "end": 849
              },
              "typeArguments": null,
              "start": 841,
              "end": 849
            },
            "start": 839,
            "end": 849
          },
          "start": 838,
          "end": 849
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 824,
      "end": 851
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 861,
        "end": 865
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
                "start": 876,
                "end": 877
              },
              "typeArguments": null,
              "start": 869,
              "end": 877
            },
            "start": 867,
            "end": 877
          },
          "start": 866,
          "end": 877
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 852,
      "end": 879
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 898,
        "end": 902
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
              "start": 906,
              "end": 909
            },
            "start": 904,
            "end": 909
          },
          "start": 903,
          "end": 909
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 911,
        "end": 914
      },
      "expression": false,
      "start": 889,
      "end": 914
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 925,
        "end": 929
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
                "start": 933,
                "end": 934
              },
              "typeArguments": null,
              "start": 933,
              "end": 934
            },
            "start": 931,
            "end": 934
          },
          "start": 930,
          "end": 934
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 916,
      "end": 936
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 946,
        "end": 950
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
                "start": 954,
                "end": 955
              },
              "typeArguments": null,
              "start": 954,
              "end": 955
            },
            "start": 952,
            "end": 955
          },
          "start": 951,
          "end": 955
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 937,
      "end": 957
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 973,
        "end": 977
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
              "start": 981,
              "end": 984
            },
            "start": 979,
            "end": 984
          },
          "start": 978,
          "end": 984
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 986,
        "end": 989
      },
      "expression": false,
      "start": 964,
      "end": 989
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1000,
        "end": 1005
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
                "start": 1009,
                "end": 1010
              },
              "typeArguments": null,
              "start": 1009,
              "end": 1010
            },
            "start": 1007,
            "end": 1010
          },
          "start": 1006,
          "end": 1010
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 991,
      "end": 1012
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1022,
        "end": 1027
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
                "start": 1031,
                "end": 1032
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1033,
                    "end": 1039
                  }
                ],
                "start": 1032,
                "end": 1040
              },
              "start": 1031,
              "end": 1040
            },
            "start": 1029,
            "end": 1040
          },
          "start": 1028,
          "end": 1040
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1013,
      "end": 1042
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1058,
        "end": 1063
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
              "start": 1067,
              "end": 1070
            },
            "start": 1065,
            "end": 1070
          },
          "start": 1064,
          "end": 1070
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1072,
        "end": 1075
      },
      "expression": false,
      "start": 1049,
      "end": 1075
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1086,
        "end": 1090
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
                "start": 1094,
                "end": 1095
              },
              "typeArguments": null,
              "start": 1094,
              "end": 1095
            },
            "start": 1092,
            "end": 1095
          },
          "start": 1091,
          "end": 1095
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1077,
      "end": 1097
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1107,
        "end": 1111
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
                "start": 1115,
                "end": 1116
              },
              "typeArguments": null,
              "start": 1115,
              "end": 1116
            },
            "start": 1113,
            "end": 1116
          },
          "start": 1112,
          "end": 1116
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1098,
      "end": 1118
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1137,
        "end": 1141
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
              "start": 1145,
              "end": 1148
            },
            "start": 1143,
            "end": 1148
          },
          "start": 1142,
          "end": 1148
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1150,
        "end": 1153
      },
      "expression": false,
      "start": 1128,
      "end": 1153
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1164,
        "end": 1168
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
                "start": 1172,
                "end": 1173
              },
              "typeArguments": null,
              "start": 1172,
              "end": 1173
            },
            "start": 1170,
            "end": 1173
          },
          "start": 1169,
          "end": 1173
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1155,
      "end": 1175
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1185,
        "end": 1189
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
                "start": 1200,
                "end": 1201
              },
              "typeArguments": null,
              "start": 1193,
              "end": 1201
            },
            "start": 1191,
            "end": 1201
          },
          "start": 1190,
          "end": 1201
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1176,
      "end": 1203
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null,
        "start": 1219,
        "end": 1223
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
              "start": 1227,
              "end": 1230
            },
            "start": 1225,
            "end": 1230
          },
          "start": 1224,
          "end": 1230
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1232,
        "end": 1235
      },
      "expression": false,
      "start": 1210,
      "end": 1235
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1246,
        "end": 1250
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
                "start": 1254,
                "end": 1255
              },
              "typeArguments": null,
              "start": 1254,
              "end": 1255
            },
            "start": 1252,
            "end": 1255
          },
          "start": 1251,
          "end": 1255
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1237,
      "end": 1257
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1267,
        "end": 1271
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
                "start": 1275,
                "end": 1276
              },
              "typeArguments": null,
              "start": 1275,
              "end": 1276
            },
            "start": 1273,
            "end": 1276
          },
          "start": 1272,
          "end": 1276
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1258,
      "end": 1278
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null,
        "start": 1294,
        "end": 1298
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
              "start": 1302,
              "end": 1305
            },
            "start": 1300,
            "end": 1305
          },
          "start": 1299,
          "end": 1305
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1307,
        "end": 1310
      },
      "expression": false,
      "start": 1285,
      "end": 1310
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1321,
        "end": 1325
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
                "start": 1329,
                "end": 1330
              },
              "typeArguments": null,
              "start": 1329,
              "end": 1330
            },
            "start": 1327,
            "end": 1330
          },
          "start": 1326,
          "end": 1330
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1312,
      "end": 1332
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1342,
        "end": 1346
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
                "start": 1350,
                "end": 1351
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1352,
                    "end": 1358
                  }
                ],
                "start": 1351,
                "end": 1359
              },
              "start": 1350,
              "end": 1359
            },
            "start": 1348,
            "end": 1359
          },
          "start": 1347,
          "end": 1359
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1333,
      "end": 1361
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null,
        "start": 1377,
        "end": 1381
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
              "start": 1385,
              "end": 1388
            },
            "start": 1383,
            "end": 1388
          },
          "start": 1382,
          "end": 1388
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1390,
        "end": 1393
      },
      "expression": false,
      "start": 1368,
      "end": 1393
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1404,
        "end": 1409
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
                "start": 1413,
                "end": 1414
              },
              "typeArguments": null,
              "start": 1413,
              "end": 1414
            },
            "start": 1411,
            "end": 1414
          },
          "start": 1410,
          "end": 1414
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1395,
      "end": 1416
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1426,
        "end": 1431
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
                "start": 1442,
                "end": 1443
              },
              "typeArguments": null,
              "start": 1435,
              "end": 1443
            },
            "start": 1433,
            "end": 1443
          },
          "start": 1432,
          "end": 1443
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1417,
      "end": 1445
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1464,
        "end": 1469
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
              "start": 1473,
              "end": 1476
            },
            "start": 1471,
            "end": 1476
          },
          "start": 1470,
          "end": 1476
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1478,
        "end": 1481
      },
      "expression": false,
      "start": 1455,
      "end": 1481
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1492,
        "end": 1497
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
                "start": 1501,
                "end": 1502
              },
              "typeArguments": null,
              "start": 1501,
              "end": 1502
            },
            "start": 1499,
            "end": 1502
          },
          "start": 1498,
          "end": 1502
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1483,
      "end": 1504
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1514,
        "end": 1519
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
                "start": 1530,
                "end": 1531
              },
              "typeArguments": null,
              "start": 1523,
              "end": 1531
            },
            "start": 1521,
            "end": 1531
          },
          "start": 1520,
          "end": 1531
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1505,
      "end": 1533
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null,
        "start": 1549,
        "end": 1554
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
              "start": 1558,
              "end": 1561
            },
            "start": 1556,
            "end": 1561
          },
          "start": 1555,
          "end": 1561
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1563,
        "end": 1566
      },
      "expression": false,
      "start": 1540,
      "end": 1566
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1577,
        "end": 1582
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
                "start": 1586,
                "end": 1587
              },
              "typeArguments": null,
              "start": 1586,
              "end": 1587
            },
            "start": 1584,
            "end": 1587
          },
          "start": 1583,
          "end": 1587
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1568,
      "end": 1589
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1599,
        "end": 1604
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
                "start": 1608,
                "end": 1609
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1610,
                    "end": 1616
                  }
                ],
                "start": 1609,
                "end": 1617
              },
              "start": 1608,
              "end": 1617
            },
            "start": 1606,
            "end": 1617
          },
          "start": 1605,
          "end": 1617
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1590,
      "end": 1619
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null,
        "start": 1635,
        "end": 1640
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
              "start": 1644,
              "end": 1647
            },
            "start": 1642,
            "end": 1647
          },
          "start": 1641,
          "end": 1647
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1649,
        "end": 1652
      },
      "expression": false,
      "start": 1626,
      "end": 1652
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1663,
        "end": 1669
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
                "start": 1673,
                "end": 1675
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1676,
                    "end": 1682
                  }
                ],
                "start": 1675,
                "end": 1683
              },
              "start": 1673,
              "end": 1683
            },
            "start": 1671,
            "end": 1683
          },
          "start": 1670,
          "end": 1683
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1654,
      "end": 1685
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1695,
        "end": 1701
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
                "start": 1705,
                "end": 1706
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1707,
                    "end": 1713
                  }
                ],
                "start": 1706,
                "end": 1714
              },
              "start": 1705,
              "end": 1714
            },
            "start": 1703,
            "end": 1714
          },
          "start": 1702,
          "end": 1714
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1686,
      "end": 1716
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1732,
        "end": 1738
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
              "start": 1742,
              "end": 1745
            },
            "start": 1740,
            "end": 1745
          },
          "start": 1739,
          "end": 1745
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1747,
        "end": 1750
      },
      "expression": false,
      "start": 1723,
      "end": 1750
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1761,
        "end": 1766
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
                "start": 1770,
                "end": 1771
              },
              "typeArguments": null,
              "start": 1770,
              "end": 1771
            },
            "start": 1768,
            "end": 1771
          },
          "start": 1767,
          "end": 1771
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1752,
      "end": 1773
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1783,
        "end": 1788
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
                "start": 1799,
                "end": 1800
              },
              "typeArguments": null,
              "start": 1792,
              "end": 1800
            },
            "start": 1790,
            "end": 1800
          },
          "start": 1789,
          "end": 1800
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1774,
      "end": 1802
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null,
        "start": 1818,
        "end": 1823
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
              "start": 1827,
              "end": 1830
            },
            "start": 1825,
            "end": 1830
          },
          "start": 1824,
          "end": 1830
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1832,
        "end": 1835
      },
      "expression": false,
      "start": 1809,
      "end": 1835
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1846,
        "end": 1851
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
                "start": 1855,
                "end": 1856
              },
              "typeArguments": null,
              "start": 1855,
              "end": 1856
            },
            "start": 1853,
            "end": 1856
          },
          "start": 1852,
          "end": 1856
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1837,
      "end": 1858
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1868,
        "end": 1873
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
                "start": 1884,
                "end": 1885
              },
              "typeArguments": null,
              "start": 1877,
              "end": 1885
            },
            "start": 1875,
            "end": 1885
          },
          "start": 1874,
          "end": 1885
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1859,
      "end": 1887
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null,
        "start": 1906,
        "end": 1911
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
              "start": 1915,
              "end": 1918
            },
            "start": 1913,
            "end": 1918
          },
          "start": 1912,
          "end": 1918
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1920,
        "end": 1923
      },
      "expression": false,
      "start": 1897,
      "end": 1923
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1934,
        "end": 1939
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
                "start": 1943,
                "end": 1945
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1946,
                    "end": 1952
                  }
                ],
                "start": 1945,
                "end": 1953
              },
              "start": 1943,
              "end": 1953
            },
            "start": 1941,
            "end": 1953
          },
          "start": 1940,
          "end": 1953
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1925,
      "end": 1955
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 1965,
        "end": 1970
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
                "start": 1974,
                "end": 1975
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1976,
                    "end": 1982
                  }
                ],
                "start": 1975,
                "end": 1983
              },
              "start": 1974,
              "end": 1983
            },
            "start": 1972,
            "end": 1983
          },
          "start": 1971,
          "end": 1983
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 1956,
      "end": 1985
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null,
        "start": 2001,
        "end": 2006
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
              "start": 2010,
              "end": 2013
            },
            "start": 2008,
            "end": 2013
          },
          "start": 2007,
          "end": 2013
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2015,
        "end": 2018
      },
      "expression": false,
      "start": 1992,
      "end": 2018
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 44,
  "end": 2018
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
    "type": "Identifier",
    "value": "foo",
    "start": 58,
    "end": 61,
    "range": [
      58,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 65,
    "end": 71,
    "range": [
      65,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 74,
    "end": 80,
    "range": [
      74,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82,
    "range": [
      81,
      82
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 83,
    "end": 89,
    "range": [
      83,
      89
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 90,
    "end": 94,
    "range": [
      90,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 101,
    "end": 106,
    "range": [
      101,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 115,
    "end": 118,
    "range": [
      115,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 118,
    "end": 119,
    "range": [
      118,
      119
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 122,
    "end": 128,
    "range": [
      122,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 133,
    "end": 139,
    "range": [
      133,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 142,
    "end": 148,
    "range": [
      142,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 151,
    "end": 157,
    "range": [
      151,
      157
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 158,
    "end": 162,
    "range": [
      158,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 169,
    "end": 174,
    "range": [
      169,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 186,
    "end": 189,
    "range": [
      186,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 200,
    "end": 201,
    "range": [
      200,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 207,
    "end": 213,
    "range": [
      207,
      213
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 214,
    "end": 218,
    "range": [
      214,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 225,
    "end": 234,
    "range": [
      225,
      234
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 243,
    "end": 246,
    "range": [
      243,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 250,
    "end": 256,
    "range": [
      250,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 259,
    "end": 265,
    "range": [
      259,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 270,
    "end": 279,
    "range": [
      270,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 280,
    "end": 282,
    "range": [
      280,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 286,
    "end": 287,
    "range": [
      286,
      287
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 292,
    "end": 295,
    "range": [
      292,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 309,
    "end": 312,
    "range": [
      309,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
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
    "type": "Identifier",
    "value": "foo",
    "start": 318,
    "end": 321,
    "range": [
      318,
      321
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 323,
    "end": 324,
    "range": [
      323,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 325,
    "end": 331,
    "range": [
      325,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 336,
    "end": 342,
    "range": [
      336,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "string",
    "start": 345,
    "end": 351,
    "range": [
      345,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 354,
    "end": 357,
    "range": [
      354,
      357
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 364,
    "end": 367,
    "range": [
      364,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 371,
    "end": 377,
    "range": [
      371,
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
    "value": "{",
    "start": 379,
    "end": 380,
    "range": [
      379,
      380
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 381,
    "end": 387,
    "range": [
      381,
      387
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 388,
    "end": 390,
    "range": [
      388,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 398,
    "end": 406,
    "range": [
      398,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 407,
    "end": 411,
    "range": [
      407,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 411,
    "end": 412,
    "range": [
      411,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 419,
    "end": 427,
    "range": [
      419,
      427
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 428,
    "end": 432,
    "range": [
      428,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 449,
    "end": 457,
    "range": [
      449,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 458,
    "end": 462,
    "range": [
      458,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 466,
    "end": 469,
    "range": [
      466,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
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
    "value": "foo1b",
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
    "value": "B",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 498,
    "end": 506,
    "range": [
      498,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 507,
    "end": 512,
    "range": [
      507,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515,
    "range": [
      514,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 518,
    "end": 519,
    "range": [
      518,
      519
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 529,
    "end": 537,
    "range": [
      529,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1b",
    "start": 538,
    "end": 543,
    "range": [
      538,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 547,
    "end": 550,
    "range": [
      547,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 557,
    "end": 565,
    "range": [
      557,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 566,
    "end": 571,
    "range": [
      566,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 577,
    "end": 583,
    "range": [
      577,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 585,
    "end": 586,
    "range": [
      585,
      586
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 587,
    "end": 595,
    "range": [
      587,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 596,
    "end": 601,
    "range": [
      596,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 602,
    "end": 603,
    "range": [
      602,
      603
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 607,
    "end": 613,
    "range": [
      607,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 626,
    "end": 634,
    "range": [
      626,
      634
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1c",
    "start": 635,
    "end": 640,
    "range": [
      635,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 644,
    "end": 647,
    "range": [
      644,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 654,
    "end": 662,
    "range": [
      654,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 663,
    "end": 667,
    "range": [
      663,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 675,
    "end": 683,
    "range": [
      675,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 684,
    "end": 688,
    "range": [
      684,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 694,
    "end": 695,
    "range": [
      694,
      695
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 705,
    "end": 713,
    "range": [
      705,
      713
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 714,
    "end": 718,
    "range": [
      714,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 722,
    "end": 725,
    "range": [
      722,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730,
    "range": [
      729,
      730
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 732,
    "end": 740,
    "range": [
      732,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 741,
    "end": 745,
    "range": [
      741,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 749,
    "end": 755,
    "range": [
      749,
      755
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 760,
    "end": 768,
    "range": [
      760,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 769,
    "end": 773,
    "range": [
      769,
      773
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 777,
    "end": 783,
    "range": [
      777,
      783
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 797,
    "end": 805,
    "range": [
      797,
      805
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 806,
    "end": 810,
    "range": [
      806,
      810
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 810,
    "end": 811,
    "range": [
      810,
      811
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 814,
    "end": 817,
    "range": [
      814,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 819,
    "end": 820,
    "range": [
      819,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 824,
    "end": 832,
    "range": [
      824,
      832
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 833,
    "end": 837,
    "range": [
      833,
      837
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 841,
    "end": 847,
    "range": [
      841,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 852,
    "end": 860,
    "range": [
      852,
      860
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 861,
    "end": 865,
    "range": [
      861,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 869,
    "end": 875,
    "range": [
      869,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 889,
    "end": 897,
    "range": [
      889,
      897
    ]
  },
  {
    "type": "Identifier",
    "value": "foo4",
    "start": 898,
    "end": 902,
    "range": [
      898,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 906,
    "end": 909,
    "range": [
      906,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 916,
    "end": 924,
    "range": [
      916,
      924
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 925,
    "end": 929,
    "range": [
      925,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 937,
    "end": 945,
    "range": [
      937,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 946,
    "end": 950,
    "range": [
      946,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 951,
    "end": 952,
    "range": [
      951,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 964,
    "end": 972,
    "range": [
      964,
      972
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5",
    "start": 973,
    "end": 977,
    "range": [
      973,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 981,
    "end": 984,
    "range": [
      981,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 991,
    "end": 999,
    "range": [
      991,
      999
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1000,
    "end": 1005,
    "range": [
      1000,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1009,
    "end": 1010,
    "range": [
      1009,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1013,
    "end": 1021,
    "range": [
      1013,
      1021
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1022,
    "end": 1027,
    "range": [
      1022,
      1027
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1027,
    "end": 1028,
    "range": [
      1027,
      1028
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1033,
    "end": 1039,
    "range": [
      1033,
      1039
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1041,
    "end": 1042,
    "range": [
      1041,
      1042
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1049,
    "end": 1057,
    "range": [
      1049,
      1057
    ]
  },
  {
    "type": "Identifier",
    "value": "foo5b",
    "start": 1058,
    "end": 1063,
    "range": [
      1058,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1065,
    "end": 1066,
    "range": [
      1065,
      1066
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1067,
    "end": 1070,
    "range": [
      1067,
      1070
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1072,
    "end": 1073,
    "range": [
      1072,
      1073
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1077,
    "end": 1085,
    "range": [
      1077,
      1085
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1086,
    "end": 1090,
    "range": [
      1086,
      1090
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1090,
    "end": 1091,
    "range": [
      1090,
      1091
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1091,
    "end": 1092,
    "range": [
      1091,
      1092
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1092,
    "end": 1093,
    "range": [
      1092,
      1093
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1098,
    "end": 1106,
    "range": [
      1098,
      1106
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1107,
    "end": 1111,
    "range": [
      1107,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1115,
    "end": 1116,
    "range": [
      1115,
      1116
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1116,
    "end": 1117,
    "range": [
      1116,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1128,
    "end": 1136,
    "range": [
      1128,
      1136
    ]
  },
  {
    "type": "Identifier",
    "value": "foo6",
    "start": 1137,
    "end": 1141,
    "range": [
      1137,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1143,
    "end": 1144,
    "range": [
      1143,
      1144
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1145,
    "end": 1148,
    "range": [
      1145,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1148,
    "end": 1149,
    "range": [
      1148,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1155,
    "end": 1163,
    "range": [
      1155,
      1163
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1164,
    "end": 1168,
    "range": [
      1164,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1169,
    "end": 1170,
    "range": [
      1169,
      1170
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1170,
    "end": 1171,
    "range": [
      1170,
      1171
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1176,
    "end": 1184,
    "range": [
      1176,
      1184
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1185,
    "end": 1189,
    "range": [
      1185,
      1189
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1191,
    "end": 1192,
    "range": [
      1191,
      1192
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1193,
    "end": 1199,
    "range": [
      1193,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1201,
    "end": 1202,
    "range": [
      1201,
      1202
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1202,
    "end": 1203,
    "range": [
      1202,
      1203
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1210,
    "end": 1218,
    "range": [
      1210,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "foo7",
    "start": 1219,
    "end": 1223,
    "range": [
      1219,
      1223
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1227,
    "end": 1230,
    "range": [
      1227,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1234,
    "end": 1235,
    "range": [
      1234,
      1235
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1237,
    "end": 1245,
    "range": [
      1237,
      1245
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1246,
    "end": 1250,
    "range": [
      1246,
      1250
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1250,
    "end": 1251,
    "range": [
      1250,
      1251
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1251,
    "end": 1252,
    "range": [
      1251,
      1252
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1255,
    "end": 1256,
    "range": [
      1255,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1258,
    "end": 1266,
    "range": [
      1258,
      1266
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1267,
    "end": 1271,
    "range": [
      1267,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1285,
    "end": 1293,
    "range": [
      1285,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "foo8",
    "start": 1294,
    "end": 1298,
    "range": [
      1294,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1302,
    "end": 1305,
    "range": [
      1302,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1312,
    "end": 1320,
    "range": [
      1312,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1321,
    "end": 1325,
    "range": [
      1321,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1327,
    "end": 1328,
    "range": [
      1327,
      1328
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1329,
    "end": 1330,
    "range": [
      1329,
      1330
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1330,
    "end": 1331,
    "range": [
      1330,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1333,
    "end": 1341,
    "range": [
      1333,
      1341
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1342,
    "end": 1346,
    "range": [
      1342,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1351,
    "end": 1352,
    "range": [
      1351,
      1352
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1352,
    "end": 1358,
    "range": [
      1352,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1368,
    "end": 1376,
    "range": [
      1368,
      1376
    ]
  },
  {
    "type": "Identifier",
    "value": "foo9",
    "start": 1377,
    "end": 1381,
    "range": [
      1377,
      1381
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1381,
    "end": 1382,
    "range": [
      1381,
      1382
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1385,
    "end": 1388,
    "range": [
      1385,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1395,
    "end": 1403,
    "range": [
      1395,
      1403
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1404,
    "end": 1409,
    "range": [
      1404,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1411,
    "end": 1412,
    "range": [
      1411,
      1412
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1413,
    "end": 1414,
    "range": [
      1413,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1414,
    "end": 1415,
    "range": [
      1414,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1417,
    "end": 1425,
    "range": [
      1417,
      1425
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1426,
    "end": 1431,
    "range": [
      1426,
      1431
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1431,
    "end": 1432,
    "range": [
      1431,
      1432
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1435,
    "end": 1441,
    "range": [
      1435,
      1441
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1455,
    "end": 1463,
    "range": [
      1455,
      1463
    ]
  },
  {
    "type": "Identifier",
    "value": "foo10",
    "start": 1464,
    "end": 1469,
    "range": [
      1464,
      1469
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1469,
    "end": 1470,
    "range": [
      1469,
      1470
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1471,
    "end": 1472,
    "range": [
      1471,
      1472
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1473,
    "end": 1476,
    "range": [
      1473,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1483,
    "end": 1491,
    "range": [
      1483,
      1491
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1492,
    "end": 1497,
    "range": [
      1492,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1499,
    "end": 1500,
    "range": [
      1499,
      1500
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 1501,
    "end": 1502,
    "range": [
      1501,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1503,
    "end": 1504,
    "range": [
      1503,
      1504
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1505,
    "end": 1513,
    "range": [
      1505,
      1513
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1514,
    "end": 1519,
    "range": [
      1514,
      1519
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1519,
    "end": 1520,
    "range": [
      1519,
      1520
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1520,
    "end": 1521,
    "range": [
      1520,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1521,
    "end": 1522,
    "range": [
      1521,
      1522
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1523,
    "end": 1529,
    "range": [
      1523,
      1529
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1532,
    "end": 1533,
    "range": [
      1532,
      1533
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1540,
    "end": 1548,
    "range": [
      1540,
      1548
    ]
  },
  {
    "type": "Identifier",
    "value": "foo11",
    "start": 1549,
    "end": 1554,
    "range": [
      1549,
      1554
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1554,
    "end": 1555,
    "range": [
      1554,
      1555
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1555,
    "end": 1556,
    "range": [
      1555,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1558,
    "end": 1561,
    "range": [
      1558,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1565,
    "end": 1566,
    "range": [
      1565,
      1566
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1568,
    "end": 1576,
    "range": [
      1568,
      1576
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1577,
    "end": 1582,
    "range": [
      1577,
      1582
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1583,
    "end": 1584,
    "range": [
      1583,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1590,
    "end": 1598,
    "range": [
      1590,
      1598
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1599,
    "end": 1604,
    "range": [
      1599,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1608,
    "end": 1609,
    "range": [
      1608,
      1609
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1609,
    "end": 1610,
    "range": [
      1609,
      1610
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1610,
    "end": 1616,
    "range": [
      1610,
      1616
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1616,
    "end": 1617,
    "range": [
      1616,
      1617
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1617,
    "end": 1618,
    "range": [
      1617,
      1618
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1618,
    "end": 1619,
    "range": [
      1618,
      1619
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1626,
    "end": 1634,
    "range": [
      1626,
      1634
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12",
    "start": 1635,
    "end": 1640,
    "range": [
      1635,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1644,
    "end": 1647,
    "range": [
      1644,
      1647
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1647,
    "end": 1648,
    "range": [
      1647,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1649,
    "end": 1650,
    "range": [
      1649,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1654,
    "end": 1662,
    "range": [
      1654,
      1662
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1663,
    "end": 1669,
    "range": [
      1663,
      1669
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1669,
    "end": 1670,
    "range": [
      1669,
      1670
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1673,
    "end": 1675,
    "range": [
      1673,
      1675
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1676,
    "end": 1682,
    "range": [
      1676,
      1682
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1684,
    "end": 1685,
    "range": [
      1684,
      1685
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1686,
    "end": 1694,
    "range": [
      1686,
      1694
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1695,
    "end": 1701,
    "range": [
      1695,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1706,
    "end": 1707,
    "range": [
      1706,
      1707
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1707,
    "end": 1713,
    "range": [
      1707,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1714,
    "end": 1715,
    "range": [
      1714,
      1715
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1715,
    "end": 1716,
    "range": [
      1715,
      1716
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1723,
    "end": 1731,
    "range": [
      1723,
      1731
    ]
  },
  {
    "type": "Identifier",
    "value": "foo12b",
    "start": 1732,
    "end": 1738,
    "range": [
      1732,
      1738
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1739,
    "end": 1740,
    "range": [
      1739,
      1740
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1742,
    "end": 1745,
    "range": [
      1742,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1752,
    "end": 1760,
    "range": [
      1752,
      1760
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1761,
    "end": 1766,
    "range": [
      1761,
      1766
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1766,
    "end": 1767,
    "range": [
      1766,
      1767
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1771,
    "end": 1772,
    "range": [
      1771,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1774,
    "end": 1782,
    "range": [
      1774,
      1782
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1783,
    "end": 1788,
    "range": [
      1783,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1789,
    "end": 1790,
    "range": [
      1789,
      1790
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1790,
    "end": 1791,
    "range": [
      1790,
      1791
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1792,
    "end": 1798,
    "range": [
      1792,
      1798
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1799,
    "end": 1800,
    "range": [
      1799,
      1800
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1800,
    "end": 1801,
    "range": [
      1800,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1809,
    "end": 1817,
    "range": [
      1809,
      1817
    ]
  },
  {
    "type": "Identifier",
    "value": "foo13",
    "start": 1818,
    "end": 1823,
    "range": [
      1818,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1827,
    "end": 1830,
    "range": [
      1827,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1830,
    "end": 1831,
    "range": [
      1830,
      1831
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1832,
    "end": 1833,
    "range": [
      1832,
      1833
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1834,
    "end": 1835,
    "range": [
      1834,
      1835
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1837,
    "end": 1845,
    "range": [
      1837,
      1845
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1846,
    "end": 1851,
    "range": [
      1846,
      1851
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1853,
    "end": 1854,
    "range": [
      1853,
      1854
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 1855,
    "end": 1856,
    "range": [
      1855,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1856,
    "end": 1857,
    "range": [
      1856,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1859,
    "end": 1867,
    "range": [
      1859,
      1867
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1868,
    "end": 1873,
    "range": [
      1868,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1875,
    "end": 1876,
    "range": [
      1875,
      1876
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1877,
    "end": 1883,
    "range": [
      1877,
      1883
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1897,
    "end": 1905,
    "range": [
      1897,
      1905
    ]
  },
  {
    "type": "Identifier",
    "value": "foo14",
    "start": 1906,
    "end": 1911,
    "range": [
      1906,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1911,
    "end": 1912,
    "range": [
      1911,
      1912
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1912,
    "end": 1913,
    "range": [
      1912,
      1913
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1913,
    "end": 1914,
    "range": [
      1913,
      1914
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1915,
    "end": 1918,
    "range": [
      1915,
      1918
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1920,
    "end": 1921,
    "range": [
      1920,
      1921
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1925,
    "end": 1933,
    "range": [
      1925,
      1933
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1934,
    "end": 1939,
    "range": [
      1934,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1941,
    "end": 1942,
    "range": [
      1941,
      1942
    ]
  },
  {
    "type": "Identifier",
    "value": "I2",
    "start": 1943,
    "end": 1945,
    "range": [
      1943,
      1945
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1946,
    "end": 1952,
    "range": [
      1946,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1956,
    "end": 1964,
    "range": [
      1956,
      1964
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 1965,
    "end": 1970,
    "range": [
      1965,
      1970
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1970,
    "end": 1971,
    "range": [
      1970,
      1971
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1974,
    "end": 1975,
    "range": [
      1974,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1976,
    "end": 1982,
    "range": [
      1976,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1982,
    "end": 1983,
    "range": [
      1982,
      1983
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1983,
    "end": 1984,
    "range": [
      1983,
      1984
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1984,
    "end": 1985,
    "range": [
      1984,
      1985
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1992,
    "end": 2000,
    "range": [
      1992,
      2000
    ]
  },
  {
    "type": "Identifier",
    "value": "foo15",
    "start": 2001,
    "end": 2006,
    "range": [
      2001,
      2006
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
      2009
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2010,
    "end": 2013,
    "range": [
      2010,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2017,
    "end": 2018,
    "range": [
      2017,
      2018
    ]
  }
]
```
