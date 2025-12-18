__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 12,
              "end": 13
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 22,
                  "end": 28
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 31,
                  "end": 40
                }
              ],
              "start": 22,
              "end": 40
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 40
          }
        ],
        "start": 11,
        "end": 41
      },
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
                "start": 45,
                "end": 46
              },
              "typeArguments": null,
              "start": 45,
              "end": 46
            },
            "start": 43,
            "end": 46
          },
          "start": 42,
          "end": 46
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 53,
                    "end": 54
                  },
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
                        "start": 56,
                        "end": 57
                      },
                      "typeArguments": null,
                      "start": 56,
                      "end": 57
                    },
                    "start": 54,
                    "end": 57
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 53,
                  "end": 57
                }
              ],
              "start": 51,
              "end": 59
            },
            "start": 49,
            "end": 59
          },
          "start": 48,
          "end": 59
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 66
                  },
                  "typeArguments": null,
                  "start": 65,
                  "end": 66
                }
              ],
              "start": 64,
              "end": 67
            },
            "start": 62,
            "end": 67
          },
          "start": 61,
          "end": 67
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 70,
          "end": 76
        },
        "start": 68,
        "end": 76
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 100,
                    "end": 101
                  },
                  "directive": null,
                  "start": 100,
                  "end": 102
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 112
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 113,
                      "end": 119
                    },
                    "optional": false,
                    "computed": false,
                    "start": 111,
                    "end": 119
                  },
                  "directive": null,
                  "start": 111,
                  "end": 120
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 136,
                    "end": 137
                  },
                  "start": 129,
                  "end": 138
                }
              ],
              "start": 90,
              "end": 144
            },
            "alternate": null,
            "start": 83,
            "end": 144
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 153,
                "end": 154
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 156
              },
              "optional": false,
              "computed": false,
              "start": 153,
              "end": 156
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 168,
                        "end": 169
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 171
                      },
                      "optional": false,
                      "computed": false,
                      "start": 168,
                      "end": 171
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 172,
                      "end": 178
                    },
                    "optional": false,
                    "computed": false,
                    "start": 168,
                    "end": 178
                  },
                  "directive": null,
                  "start": 168,
                  "end": 179
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 195,
                      "end": 196
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 197,
                      "end": 198
                    },
                    "optional": false,
                    "computed": false,
                    "start": 195,
                    "end": 198
                  },
                  "start": 188,
                  "end": 199
                }
              ],
              "start": 158,
              "end": 205
            },
            "alternate": null,
            "start": 149,
            "end": 205
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 214,
                "end": 215
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 216,
                "end": 217
              },
              "optional": false,
              "computed": true,
              "start": 214,
              "end": 218
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 231
                      },
                      "property": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 232,
                        "end": 233
                      },
                      "optional": false,
                      "computed": true,
                      "start": 230,
                      "end": 234
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 235,
                      "end": 241
                    },
                    "optional": false,
                    "computed": false,
                    "start": 230,
                    "end": 241
                  },
                  "directive": null,
                  "start": 230,
                  "end": 242
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 258,
                      "end": 259
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 260,
                      "end": 261
                    },
                    "optional": false,
                    "computed": true,
                    "start": 258,
                    "end": 262
                  },
                  "start": 251,
                  "end": 263
                }
              ],
              "start": 220,
              "end": 269
            },
            "alternate": null,
            "start": 210,
            "end": 269
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 281,
              "end": 288
            },
            "start": 274,
            "end": 289
          }
        ],
        "start": 77,
        "end": 291
      },
      "expression": false,
      "start": 0,
      "end": 291
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 302,
        "end": 304
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 305,
              "end": 306
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 305,
            "end": 306
          }
        ],
        "start": 304,
        "end": 307
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Extract",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 311,
                    "end": 318
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 319,
                          "end": 320
                        },
                        "typeArguments": null,
                        "start": 319,
                        "end": 320
                      },
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 322,
                            "end": 328
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 331,
                            "end": 340
                          }
                        ],
                        "start": 322,
                        "end": 340
                      }
                    ],
                    "start": 318,
                    "end": 341
                  },
                  "start": 311,
                  "end": 341
                },
                {
                  "type": "TSNullKeyword",
                  "start": 344,
                  "end": 348
                }
              ],
              "start": 311,
              "end": 348
            },
            "start": 309,
            "end": 348
          },
          "start": 308,
          "end": 348
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 351,
          "end": 357
        },
        "start": 349,
        "end": 357
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 369
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 381,
                    "end": 382
                  },
                  "directive": null,
                  "start": 381,
                  "end": 383
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 392,
                      "end": 393
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 394,
                      "end": 400
                    },
                    "optional": false,
                    "computed": false,
                    "start": 392,
                    "end": 400
                  },
                  "directive": null,
                  "start": 392,
                  "end": 401
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 417,
                    "end": 418
                  },
                  "start": 410,
                  "end": 419
                }
              ],
              "start": 371,
              "end": 425
            },
            "alternate": null,
            "start": 364,
            "end": 425
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 437,
              "end": 444
            },
            "start": 430,
            "end": 445
          }
        ],
        "start": 358,
        "end": 447
      },
      "expression": false,
      "start": 293,
      "end": 447
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null,
        "start": 459,
        "end": 462
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
              "start": 463,
              "end": 464
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 463,
            "end": 464
          }
        ],
        "start": 462,
        "end": 465
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 476
            },
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
                  "start": 478,
                  "end": 479
                },
                "typeArguments": null,
                "start": 478,
                "end": 479
              },
              "start": 476,
              "end": 479
            },
            "accessibility": null,
            "static": false,
            "start": 472,
            "end": 480
          }
        ],
        "start": 466,
        "end": 482
      },
      "declare": false,
      "start": 449,
      "end": 482
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isBox",
        "optional": false,
        "typeAnnotation": null,
        "start": 501,
        "end": 506
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 510,
              "end": 513
            },
            "start": 508,
            "end": 513
          },
          "start": 507,
          "end": 513
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 516,
            "end": 517
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Box",
                "optional": false,
                "typeAnnotation": null,
                "start": 521,
                "end": 524
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 525,
                    "end": 532
                  }
                ],
                "start": 524,
                "end": 533
              },
              "start": 521,
              "end": 533
            },
            "start": 521,
            "end": 533
          },
          "start": 516,
          "end": 533
        },
        "start": 514,
        "end": 533
      },
      "body": null,
      "expression": false,
      "start": 484,
      "end": 534
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 552,
        "end": 563
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSUnknownKeyword",
              "start": 567,
              "end": 574
            },
            "start": 565,
            "end": 574
          },
          "start": 564,
          "end": 574
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 578
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 582,
              "end": 591
            },
            "start": 582,
            "end": 591
          },
          "start": 577,
          "end": 591
        },
        "start": 575,
        "end": 591
      },
      "body": null,
      "expression": false,
      "start": 535,
      "end": 592
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unbox",
        "optional": false,
        "typeAnnotation": null,
        "start": 610,
        "end": 615
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 616,
              "end": 617
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 616,
            "end": 617
          }
        ],
        "start": 615,
        "end": 618
      },
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
                "name": "Box",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 625
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 626,
                      "end": 627
                    },
                    "typeArguments": null,
                    "start": 626,
                    "end": 627
                  }
                ],
                "start": 625,
                "end": 628
              },
              "start": 622,
              "end": 628
            },
            "start": 620,
            "end": 628
          },
          "start": 619,
          "end": 628
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
            "start": 631,
            "end": 632
          },
          "typeArguments": null,
          "start": 631,
          "end": 632
        },
        "start": 629,
        "end": 632
      },
      "body": null,
      "expression": false,
      "start": 593,
      "end": 633
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 644,
        "end": 646
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 647,
              "end": 648
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 657,
                    "end": 660
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 661,
                          "end": 662
                        },
                        "typeArguments": null,
                        "start": 661,
                        "end": 662
                      }
                    ],
                    "start": 660,
                    "end": 663
                  },
                  "start": 657,
                  "end": 663
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 666,
                  "end": 675
                }
              ],
              "start": 657,
              "end": 675
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 647,
            "end": 675
          }
        ],
        "start": 646,
        "end": 676
      },
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
                "start": 680,
                "end": 681
              },
              "typeArguments": null,
              "start": 680,
              "end": 681
            },
            "start": 678,
            "end": 681
          },
          "start": 677,
          "end": 681
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isBox",
                "optional": false,
                "typeAnnotation": null,
                "start": 693,
                "end": 698
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 699,
                  "end": 700
                }
              ],
              "optional": false,
              "start": 693,
              "end": 701
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unbox",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 713,
                      "end": 718
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 719,
                        "end": 720
                      }
                    ],
                    "optional": false,
                    "start": 713,
                    "end": 721
                  },
                  "directive": null,
                  "start": 713,
                  "end": 722
                }
              ],
              "start": 703,
              "end": 728
            },
            "alternate": null,
            "start": 689,
            "end": 728
          }
        ],
        "start": 683,
        "end": 730
      },
      "expression": false,
      "start": 635,
      "end": 730
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null,
        "start": 741,
        "end": 743
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 744,
              "end": 745
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 754,
                    "end": 757
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 758,
                          "end": 759
                        },
                        "typeArguments": null,
                        "start": 758,
                        "end": 759
                      }
                    ],
                    "start": 757,
                    "end": 760
                  },
                  "start": 754,
                  "end": 760
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 763,
                  "end": 772
                }
              ],
              "start": 754,
              "end": 772
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 744,
            "end": 772
          }
        ],
        "start": 743,
        "end": 773
      },
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
                "start": 777,
                "end": 778
              },
              "typeArguments": null,
              "start": 777,
              "end": 778
            },
            "start": 775,
            "end": 778
          },
          "start": 774,
          "end": 778
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isUndefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 791,
                  "end": 802
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 803,
                    "end": 804
                  }
                ],
                "optional": false,
                "start": 791,
                "end": 805
              },
              "prefix": true,
              "start": 790,
              "end": 805
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unbox",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 817,
                      "end": 822
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 823,
                        "end": 824
                      }
                    ],
                    "optional": false,
                    "start": 817,
                    "end": 825
                  },
                  "directive": null,
                  "start": 817,
                  "end": 826
                }
              ],
              "start": 807,
              "end": 832
            },
            "alternate": null,
            "start": 786,
            "end": 832
          }
        ],
        "start": 780,
        "end": 834
      },
      "expression": false,
      "start": 732,
      "end": 834
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null,
        "start": 845,
        "end": 847
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 848,
              "end": 849
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 858,
                    "end": 861
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 862,
                          "end": 863
                        },
                        "typeArguments": null,
                        "start": 862,
                        "end": 863
                      }
                    ],
                    "start": 861,
                    "end": 864
                  },
                  "start": 858,
                  "end": 864
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 867,
                  "end": 876
                }
              ],
              "start": 858,
              "end": 876
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 848,
            "end": 876
          }
        ],
        "start": 847,
        "end": 877
      },
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
                "start": 881,
                "end": 882
              },
              "typeArguments": null,
              "start": 881,
              "end": 882
            },
            "start": 879,
            "end": 882
          },
          "start": 878,
          "end": 882
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isBox",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 895,
                  "end": 900
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 901,
                    "end": 902
                  }
                ],
                "optional": false,
                "start": 895,
                "end": 903
              },
              "prefix": true,
              "start": 894,
              "end": 903
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unbox",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 915,
                      "end": 920
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 921,
                        "end": 922
                      }
                    ],
                    "optional": false,
                    "start": 915,
                    "end": 923
                  },
                  "directive": null,
                  "start": 915,
                  "end": 924
                }
              ],
              "start": 905,
              "end": 940
            },
            "alternate": null,
            "start": 890,
            "end": 940
          }
        ],
        "start": 884,
        "end": 942
      },
      "expression": false,
      "start": 836,
      "end": 942
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null,
        "start": 953,
        "end": 955
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 956,
              "end": 957
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 966,
                    "end": 969
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 970,
                          "end": 971
                        },
                        "typeArguments": null,
                        "start": 970,
                        "end": 971
                      }
                    ],
                    "start": 969,
                    "end": 972
                  },
                  "start": 966,
                  "end": 972
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 975,
                  "end": 984
                }
              ],
              "start": 966,
              "end": 984
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 956,
            "end": 984
          }
        ],
        "start": 955,
        "end": 985
      },
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
                "start": 989,
                "end": 990
              },
              "typeArguments": null,
              "start": 989,
              "end": 990
            },
            "start": 987,
            "end": 990
          },
          "start": 986,
          "end": 990
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isUndefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1002,
                "end": 1013
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1014,
                  "end": 1015
                }
              ],
              "optional": false,
              "start": 1002,
              "end": 1016
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "unbox",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1028,
                      "end": 1033
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1034,
                        "end": 1035
                      }
                    ],
                    "optional": false,
                    "start": 1028,
                    "end": 1036
                  },
                  "directive": null,
                  "start": 1028,
                  "end": 1037
                }
              ],
              "start": 1018,
              "end": 1053
            },
            "alternate": null,
            "start": 998,
            "end": 1053
          }
        ],
        "start": 992,
        "end": 1055
      },
      "expression": false,
      "start": 944,
      "end": 1055
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeA",
        "optional": false,
        "typeAnnotation": null,
        "start": 1096,
        "end": 1101
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "A",
                "raw": "'A'",
                "start": 1107,
                "end": 1110
              },
              "start": 1107,
              "end": 1110
            },
            "start": 1105,
            "end": 1110
          },
          "start": 1102,
          "end": 1110
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1113,
          "end": 1117
        },
        "start": 1111,
        "end": 1117
      },
      "body": null,
      "expression": false,
      "start": 1079,
      "end": 1118
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "bounceAndTakeIfA",
          "optional": false,
          "typeAnnotation": null,
          "start": 1135,
          "end": 1151
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null,
                "start": 1152,
                "end": 1154
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 1163,
                      "end": 1166
                    },
                    "start": 1163,
                    "end": 1166
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 1169,
                      "end": 1172
                    },
                    "start": 1169,
                    "end": 1172
                  }
                ],
                "start": 1163,
                "end": 1172
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 1152,
              "end": 1172
            }
          ],
          "start": 1151,
          "end": 1173
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1181,
                  "end": 1183
                },
                "typeArguments": null,
                "start": 1181,
                "end": 1183
              },
              "start": 1179,
              "end": 1183
            },
            "start": 1174,
            "end": 1183
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1186,
              "end": 1188
            },
            "typeArguments": null,
            "start": 1186,
            "end": 1188
          },
          "start": 1184,
          "end": 1188
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1199,
                  "end": 1204
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "'A'",
                  "start": 1209,
                  "end": 1212
                },
                "start": 1199,
                "end": 1212
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "takeA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1224,
                        "end": 1229
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1230,
                          "end": 1235
                        }
                      ],
                      "optional": false,
                      "start": 1224,
                      "end": 1236
                    },
                    "directive": null,
                    "start": 1224,
                    "end": 1237
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1253,
                      "end": 1258
                    },
                    "start": 1246,
                    "end": 1259
                  }
                ],
                "start": 1214,
                "end": 1265
              },
              "alternate": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1292,
                      "end": 1297
                    },
                    "start": 1285,
                    "end": 1298
                  }
                ],
                "start": 1275,
                "end": 1304
              },
              "start": 1195,
              "end": 1304
            }
          ],
          "start": 1189,
          "end": 1306
        },
        "expression": false,
        "start": 1126,
        "end": 1306
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1119,
      "end": 1306
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Common",
        "optional": false,
        "typeAnnotation": null,
        "start": 1335,
        "end": 1341
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1346,
              "end": 1348
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1350,
                "end": 1356
              },
              "start": 1348,
              "end": 1356
            },
            "accessibility": null,
            "static": false,
            "start": 1346,
            "end": 1356
          }
        ],
        "start": 1344,
        "end": 1358
      },
      "declare": false,
      "start": 1330,
      "end": 1359
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null,
        "start": 1365,
        "end": 1367
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 1372,
              "end": 1375
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "'A'",
                  "start": 1377,
                  "end": 1380
                },
                "start": 1377,
                "end": 1380
              },
              "start": 1375,
              "end": 1380
            },
            "accessibility": null,
            "static": false,
            "start": 1372,
            "end": 1381
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1382,
              "end": 1384
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1386,
                "end": 1392
              },
              "start": 1384,
              "end": 1392
            },
            "accessibility": null,
            "static": false,
            "start": 1382,
            "end": 1392
          }
        ],
        "start": 1370,
        "end": 1394
      },
      "declare": false,
      "start": 1360,
      "end": 1395
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null,
        "start": 1401,
        "end": 1403
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "tag",
              "optional": false,
              "typeAnnotation": null,
              "start": 1408,
              "end": 1411
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "'B'",
                  "start": 1413,
                  "end": 1416
                },
                "start": 1413,
                "end": 1416
              },
              "start": 1411,
              "end": 1416
            },
            "accessibility": null,
            "static": false,
            "start": 1408,
            "end": 1417
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 1418,
              "end": 1420
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1422,
                "end": 1428
              },
              "start": 1420,
              "end": 1428
            },
            "accessibility": null,
            "static": false,
            "start": 1418,
            "end": 1429
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1430,
              "end": 1433
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1435,
                "end": 1441
              },
              "start": 1433,
              "end": 1441
            },
            "accessibility": null,
            "static": false,
            "start": 1430,
            "end": 1441
          }
        ],
        "start": 1406,
        "end": 1443
      },
      "declare": false,
      "start": 1396,
      "end": 1444
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 1451,
        "end": 1458
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1461,
              "end": 1463
            },
            "typeArguments": null,
            "start": 1461,
            "end": 1463
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "BB",
              "optional": false,
              "typeAnnotation": null,
              "start": 1466,
              "end": 1468
            },
            "typeArguments": null,
            "start": 1466,
            "end": 1468
          }
        ],
        "start": 1461,
        "end": 1468
      },
      "declare": false,
      "start": 1446,
      "end": 1469
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null,
            "start": 1477,
            "end": 1479
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyUnion",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1490,
                      "end": 1497
                    },
                    "typeArguments": null,
                    "start": 1490,
                    "end": 1497
                  },
                  "start": 1488,
                  "end": 1497
                },
                "start": 1483,
                "end": 1497
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1508,
                      "end": 1513
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1514,
                      "end": 1517
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1508,
                    "end": 1517
                  },
                  "directive": null,
                  "start": 1508,
                  "end": 1518
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 1537,
                      "end": 1542
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1546,
                      "end": 1551
                    },
                    "start": 1537,
                    "end": 1551
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1563,
                            "end": 1568
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1569,
                            "end": 1572
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1563,
                          "end": 1572
                        },
                        "directive": null,
                        "start": 1563,
                        "end": 1573
                      }
                    ],
                    "start": 1553,
                    "end": 1579
                  },
                  "alternate": null,
                  "start": 1533,
                  "end": 1579
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1588,
                        "end": 1593
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1594,
                        "end": 1597
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1588,
                      "end": 1597
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 1602,
                      "end": 1605
                    },
                    "start": 1588,
                    "end": 1605
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1617,
                            "end": 1622
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1623,
                            "end": 1626
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1617,
                          "end": 1626
                        },
                        "directive": null,
                        "start": 1617,
                        "end": 1627
                      }
                    ],
                    "start": 1607,
                    "end": 1633
                  },
                  "alternate": null,
                  "start": 1584,
                  "end": 1633
                }
              ],
              "start": 1502,
              "end": 1635
            },
            "id": null,
            "generator": false,
            "start": 1482,
            "end": 1635
          },
          "definite": false,
          "start": 1477,
          "end": 1635
        }
      ],
      "declare": false,
      "start": 1471,
      "end": 1636
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1644,
            "end": 1647
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
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
                    "start": 1651,
                    "end": 1652
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyUnion",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1661,
                      "end": 1668
                    },
                    "typeArguments": null,
                    "start": 1661,
                    "end": 1668
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1651,
                  "end": 1668
                }
              ],
              "start": 1650,
              "end": 1669
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
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
                      "start": 1677,
                      "end": 1678
                    },
                    "typeArguments": null,
                    "start": 1677,
                    "end": 1678
                  },
                  "start": 1675,
                  "end": 1678
                },
                "start": 1670,
                "end": 1678
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyUnion",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1681,
                  "end": 1688
                },
                "typeArguments": null,
                "start": 1681,
                "end": 1688
              },
              "start": 1679,
              "end": 1688
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1698,
                      "end": 1703
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1704,
                      "end": 1707
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1698,
                    "end": 1707
                  },
                  "directive": null,
                  "start": 1698,
                  "end": 1708
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 1727,
                      "end": 1732
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1736,
                      "end": 1741
                    },
                    "start": 1727,
                    "end": 1741
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1753,
                            "end": 1758
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1759,
                            "end": 1762
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1753,
                          "end": 1762
                        },
                        "directive": null,
                        "start": 1753,
                        "end": 1763
                      }
                    ],
                    "start": 1743,
                    "end": 1769
                  },
                  "alternate": null,
                  "start": 1723,
                  "end": 1769
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1778,
                        "end": 1783
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1784,
                        "end": 1787
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1778,
                      "end": 1787
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 1792,
                      "end": 1795
                    },
                    "start": 1778,
                    "end": 1795
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1807,
                            "end": 1812
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1813,
                            "end": 1816
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1807,
                          "end": 1816
                        },
                        "directive": null,
                        "start": 1807,
                        "end": 1817
                      }
                    ],
                    "start": 1797,
                    "end": 1823
                  },
                  "alternate": null,
                  "start": 1774,
                  "end": 1823
                }
              ],
              "start": 1692,
              "end": 1825
            },
            "id": null,
            "generator": false,
            "start": 1650,
            "end": 1825
          },
          "definite": false,
          "start": 1644,
          "end": 1825
        }
      ],
      "declare": false,
      "start": 1638,
      "end": 1826
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1855,
        "end": 1857
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1866,
              "end": 1874
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 1876,
                  "end": 1880
                },
                "start": 1876,
                "end": 1880
              },
              "start": 1874,
              "end": 1880
            },
            "accessibility": null,
            "static": false,
            "start": 1866,
            "end": 1880
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "doTest",
              "optional": false,
              "typeAnnotation": null,
              "start": 1885,
              "end": 1891
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1899,
                    "end": 1903
                  },
                  "start": 1896,
                  "end": 1903
                },
                "start": 1893,
                "end": 1903
              },
              "start": 1891,
              "end": 1903
            },
            "accessibility": null,
            "static": false,
            "start": 1885,
            "end": 1903
          }
        ],
        "start": 1860,
        "end": 1905
      },
      "declare": false,
      "start": 1850,
      "end": 1905
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1911,
        "end": 1913
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "testable",
              "optional": false,
              "typeAnnotation": null,
              "start": 1922,
              "end": 1930
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 1932,
                  "end": 1937
                },
                "start": 1932,
                "end": 1937
              },
              "start": 1930,
              "end": 1937
            },
            "accessibility": null,
            "static": false,
            "start": 1922,
            "end": 1937
          }
        ],
        "start": 1916,
        "end": 1939
      },
      "declare": false,
      "start": 1906,
      "end": 1940
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Union",
        "optional": false,
        "typeAnnotation": null,
        "start": 1947,
        "end": 1952
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1955,
              "end": 1957
            },
            "typeArguments": null,
            "start": 1955,
            "end": 1957
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1960,
              "end": 1962
            },
            "typeArguments": null,
            "start": 1960,
            "end": 1962
          }
        ],
        "start": 1955,
        "end": 1962
      },
      "declare": false,
      "start": 1942,
      "end": 1962
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "notWorking",
        "optional": false,
        "typeAnnotation": null,
        "start": 1973,
        "end": 1983
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 1984,
              "end": 1985
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Union",
                "optional": false,
                "typeAnnotation": null,
                "start": 1994,
                "end": 1999
              },
              "typeArguments": null,
              "start": 1994,
              "end": 1999
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1984,
            "end": 1999
          }
        ],
        "start": 1983,
        "end": 2000
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "object",
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
                "start": 2009,
                "end": 2010
              },
              "typeArguments": null,
              "start": 2009,
              "end": 2010
            },
            "start": 2007,
            "end": 2010
          },
          "start": 2001,
          "end": 2010
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2023,
                  "end": 2029
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "testable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2030,
                  "end": 2038
                },
                "optional": false,
                "computed": false,
                "start": 2023,
                "end": 2038
              },
              "prefix": true,
              "start": 2022,
              "end": 2038
            },
            "consequent": {
              "type": "ReturnStatement",
              "argument": null,
              "start": 2040,
              "end": 2047
            },
            "alternate": null,
            "start": 2018,
            "end": 2047
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2052,
                  "end": 2058
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "doTest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2059,
                  "end": 2065
                },
                "optional": false,
                "computed": false,
                "start": 2052,
                "end": 2065
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 2052,
              "end": 2067
            },
            "directive": null,
            "start": 2052,
            "end": 2068
          }
        ],
        "start": 2012,
        "end": 2070
      },
      "expression": false,
      "start": 1964,
      "end": 2070
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 2104,
        "end": 2105
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 2112,
              "end": 2113
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2115,
                    "end": 2121
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 2124,
                    "end": 2128
                  }
                ],
                "start": 2115,
                "end": 2128
              },
              "start": 2113,
              "end": 2128
            },
            "accessibility": null,
            "static": false,
            "start": 2112,
            "end": 2129
          }
        ],
        "start": 2106,
        "end": 2131
      },
      "declare": false,
      "start": 2094,
      "end": 2131
    },
    {
      "type": "EmptyStatement",
      "start": 2131,
      "end": 2132
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "get",
        "optional": false,
        "typeAnnotation": null,
        "start": 2143,
        "end": 2146
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2147,
              "end": 2148
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2163,
                  "end": 2164
                },
                "typeArguments": null,
                "start": 2163,
                "end": 2164
              },
              "start": 2157,
              "end": 2164
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2147,
            "end": 2164
          }
        ],
        "start": 2146,
        "end": 2165
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2171,
                "end": 2172
              },
              "typeArguments": null,
              "start": 2171,
              "end": 2172
            },
            "start": 2169,
            "end": 2172
          },
          "start": 2166,
          "end": 2172
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 2179,
                "end": 2180
              },
              "typeArguments": null,
              "start": 2179,
              "end": 2180
            },
            "start": 2177,
            "end": 2180
          },
          "start": 2174,
          "end": 2180
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2183,
          "end": 2189
        },
        "start": 2181,
        "end": 2189
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2202,
                  "end": 2207
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2210,
                    "end": 2213
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2214,
                    "end": 2217
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2210,
                  "end": 2218
                },
                "definite": false,
                "start": 2202,
                "end": 2218
              }
            ],
            "declare": false,
            "start": 2196,
            "end": 2219
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 2228,
                "end": 2233
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 2238,
                "end": 2242
              },
              "start": 2228,
              "end": 2242
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2261,
                    "end": 2266
                  },
                  "start": 2254,
                  "end": 2267
                }
              ],
              "start": 2244,
              "end": 2273
            },
            "alternate": null,
            "start": 2224,
            "end": 2273
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 2285,
              "end": 2286
            },
            "start": 2278,
            "end": 2287
          }
        ],
        "start": 2190,
        "end": 2289
      },
      "expression": false,
      "start": 2134,
      "end": 2289
    },
    {
      "type": "EmptyStatement",
      "start": 2289,
      "end": 2290
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventEmitter",
        "optional": false,
        "typeAnnotation": null,
        "start": 2320,
        "end": 2332
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ET",
              "optional": false,
              "typeAnnotation": null,
              "start": 2333,
              "end": 2335
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2333,
            "end": 2335
          }
        ],
        "start": 2332,
        "end": 2336
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
              "name": "off",
              "optional": false,
              "typeAnnotation": null,
              "start": 2343,
              "end": 2346
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2347,
                      "end": 2348
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ET",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2363,
                          "end": 2365
                        },
                        "typeArguments": null,
                        "start": 2363,
                        "end": 2365
                      },
                      "start": 2357,
                      "end": 2365
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2347,
                    "end": 2365
                  }
                ],
                "start": 2346,
                "end": 2366
              },
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2370,
                    "end": 2374
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2377,
                                "end": 2378
                              },
                              "typeArguments": null,
                              "start": 2377,
                              "end": 2378
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 2380,
                              "end": 2386
                            }
                          ],
                          "start": 2376,
                          "end": 2387
                        },
                        {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSUnknownKeyword",
                              "start": 2391,
                              "end": 2398
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 2400,
                              "end": 2406
                            }
                          ],
                          "start": 2390,
                          "end": 2407
                        }
                      ],
                      "start": 2376,
                      "end": 2407
                    },
                    "start": 2374,
                    "end": 2407
                  },
                  "value": null,
                  "start": 2367,
                  "end": 2407
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2409,
                  "end": 2413
                },
                "start": 2408,
                "end": 2413
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 2414,
                "end": 2416
              },
              "expression": false,
              "start": 2346,
              "end": 2416
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 2343,
            "end": 2416
          }
        ],
        "start": 2337,
        "end": 2418
      },
      "abstract": false,
      "declare": false,
      "start": 2314,
      "end": 2418
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "once",
        "optional": false,
        "typeAnnotation": null,
        "start": 2428,
        "end": 2432
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "ET",
              "optional": false,
              "typeAnnotation": null,
              "start": 2433,
              "end": 2435
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2433,
            "end": 2435
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2437,
              "end": 2438
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "EventEmitter",
                "optional": false,
                "typeAnnotation": null,
                "start": 2447,
                "end": 2459
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ET",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2460,
                      "end": 2462
                    },
                    "typeArguments": null,
                    "start": 2460,
                    "end": 2462
                  }
                ],
                "start": 2459,
                "end": 2463
              },
              "start": 2447,
              "end": 2463
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2437,
            "end": 2463
          }
        ],
        "start": 2432,
        "end": 2464
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "emittingObject",
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
                "start": 2481,
                "end": 2482
              },
              "typeArguments": null,
              "start": 2481,
              "end": 2482
            },
            "start": 2479,
            "end": 2482
          },
          "start": 2465,
          "end": 2482
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "eventName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ET",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2501,
                  "end": 2503
                },
                "typeArguments": null,
                "start": 2501,
                "end": 2503
              },
              "start": 2495,
              "end": 2503
            },
            "start": 2493,
            "end": 2503
          },
          "start": 2484,
          "end": 2503
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2506,
          "end": 2510
        },
        "start": 2504,
        "end": 2510
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "emittingObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2517,
                  "end": 2531
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "off",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2532,
                  "end": 2535
                },
                "optional": false,
                "computed": false,
                "start": 2517,
                "end": 2535
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "eventName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2536,
                  "end": 2545
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2547,
                  "end": 2548
                }
              ],
              "optional": false,
              "start": 2517,
              "end": 2549
            },
            "directive": null,
            "start": 2517,
            "end": 2550
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "emittingObject",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2555,
                  "end": 2569
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "off",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2570,
                  "end": 2573
                },
                "optional": false,
                "computed": false,
                "start": 2555,
                "end": 2573
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "eventName",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2574,
                    "end": 2583
                  },
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "eventName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2594,
                      "end": 2603
                    },
                    "typeArguments": null,
                    "start": 2587,
                    "end": 2603
                  },
                  "start": 2574,
                  "end": 2603
                },
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2605,
                  "end": 2606
                }
              ],
              "optional": false,
              "start": 2555,
              "end": 2607
            },
            "directive": null,
            "start": 2555,
            "end": 2608
          }
        ],
        "start": 2511,
        "end": 2610
      },
      "expression": false,
      "start": 2419,
      "end": 2610
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx1",
        "optional": false,
        "typeAnnotation": null,
        "start": 2905,
        "end": 2908
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 2909,
              "end": 2910
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2909,
            "end": 2910
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 2912,
              "end": 2913
            },
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
                  "typeAnnotation": null,
                  "start": 2928,
                  "end": 2929
                },
                "typeArguments": null,
                "start": 2928,
                "end": 2929
              },
              "start": 2922,
              "end": 2929
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2912,
            "end": 2929
          }
        ],
        "start": 2908,
        "end": 2930
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 2936,
                "end": 2937
              },
              "typeArguments": null,
              "start": 2936,
              "end": 2937
            },
            "start": 2934,
            "end": 2937
          },
          "start": 2931,
          "end": 2937
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 2944,
                "end": 2945
              },
              "typeArguments": null,
              "start": 2944,
              "end": 2945
            },
            "start": 2942,
            "end": 2945
          },
          "start": 2939,
          "end": 2945
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2959,
                  "end": 2961
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2964,
                    "end": 2967
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2968,
                    "end": 2971
                  },
                  "optional": false,
                  "computed": true,
                  "start": 2964,
                  "end": 2972
                },
                "definite": false,
                "start": 2959,
                "end": 2972
              }
            ],
            "declare": false,
            "start": 2953,
            "end": 2973
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2984,
                  "end": 2986
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2989,
                    "end": 2992
                  },
                  "operator": "&&",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2996,
                      "end": 2999
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3000,
                      "end": 3003
                    },
                    "optional": false,
                    "computed": true,
                    "start": 2996,
                    "end": 3004
                  },
                  "start": 2989,
                  "end": 3004
                },
                "definite": false,
                "start": 2984,
                "end": 3004
              }
            ],
            "declare": false,
            "start": 2978,
            "end": 3005
          }
        ],
        "start": 2947,
        "end": 3007
      },
      "expression": false,
      "start": 2896,
      "end": 3007
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx2",
        "optional": false,
        "typeAnnotation": null,
        "start": 3018,
        "end": 3021
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 3022,
              "end": 3023
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3032,
                "end": 3038
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
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
                        "typeAnnotation": null,
                        "start": 3045,
                        "end": 3046
                      },
                      "typeArguments": null,
                      "start": 3045,
                      "end": 3046
                    },
                    "start": 3039,
                    "end": 3046
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 3048,
                    "end": 3054
                  }
                ],
                "start": 3038,
                "end": 3055
              },
              "start": 3032,
              "end": 3055
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3022,
            "end": 3055
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3057,
              "end": 3058
            },
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
                  "typeAnnotation": null,
                  "start": 3073,
                  "end": 3074
                },
                "typeArguments": null,
                "start": 3073,
                "end": 3074
              },
              "start": 3067,
              "end": 3074
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3057,
            "end": 3074
          }
        ],
        "start": 3021,
        "end": 3075
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 3081,
                "end": 3082
              },
              "typeArguments": null,
              "start": 3081,
              "end": 3082
            },
            "start": 3079,
            "end": 3082
          },
          "start": 3076,
          "end": 3082
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3089,
                "end": 3090
              },
              "typeArguments": null,
              "start": 3089,
              "end": 3090
            },
            "start": 3087,
            "end": 3090
          },
          "start": 3084,
          "end": 3090
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3104,
                  "end": 3106
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3109,
                    "end": 3112
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3113,
                    "end": 3116
                  },
                  "optional": false,
                  "computed": true,
                  "start": 3109,
                  "end": 3117
                },
                "definite": false,
                "start": 3104,
                "end": 3117
              }
            ],
            "declare": false,
            "start": 3098,
            "end": 3118
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3129,
                  "end": 3131
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3134,
                    "end": 3137
                  },
                  "operator": "&&",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3141,
                      "end": 3144
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3145,
                      "end": 3148
                    },
                    "optional": false,
                    "computed": true,
                    "start": 3141,
                    "end": 3149
                  },
                  "start": 3134,
                  "end": 3149
                },
                "definite": false,
                "start": 3129,
                "end": 3149
              }
            ],
            "declare": false,
            "start": 3123,
            "end": 3150
          }
        ],
        "start": 3092,
        "end": 3152
      },
      "expression": false,
      "start": 3009,
      "end": 3152
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3163,
        "end": 3166
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 3167,
              "end": 3168
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3177,
                    "end": 3183
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
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
                            "typeAnnotation": null,
                            "start": 3190,
                            "end": 3191
                          },
                          "typeArguments": null,
                          "start": 3190,
                          "end": 3191
                        },
                        "start": 3184,
                        "end": 3191
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 3193,
                        "end": 3199
                      }
                    ],
                    "start": 3183,
                    "end": 3200
                  },
                  "start": 3177,
                  "end": 3200
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3203,
                  "end": 3212
                }
              ],
              "start": 3177,
              "end": 3212
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3167,
            "end": 3212
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 3214,
              "end": 3215
            },
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
                  "typeAnnotation": null,
                  "start": 3230,
                  "end": 3231
                },
                "typeArguments": null,
                "start": 3230,
                "end": 3231
              },
              "start": 3224,
              "end": 3231
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3214,
            "end": 3231
          }
        ],
        "start": 3166,
        "end": 3232
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                "start": 3238,
                "end": 3239
              },
              "typeArguments": null,
              "start": 3238,
              "end": 3239
            },
            "start": 3236,
            "end": 3239
          },
          "start": 3233,
          "end": 3239
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 3246,
                "end": 3247
              },
              "typeArguments": null,
              "start": 3246,
              "end": 3247
            },
            "start": 3244,
            "end": 3247
          },
          "start": 3241,
          "end": 3247
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3261,
                  "end": 3263
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3266,
                    "end": 3269
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3270,
                    "end": 3273
                  },
                  "optional": false,
                  "computed": true,
                  "start": 3266,
                  "end": 3274
                },
                "definite": false,
                "start": 3261,
                "end": 3274
              }
            ],
            "declare": false,
            "start": 3255,
            "end": 3275
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3296,
                  "end": 3298
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3301,
                    "end": 3304
                  },
                  "operator": "&&",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3308,
                      "end": 3311
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3312,
                      "end": 3315
                    },
                    "optional": false,
                    "computed": true,
                    "start": 3308,
                    "end": 3316
                  },
                  "start": 3301,
                  "end": 3316
                },
                "definite": false,
                "start": 3296,
                "end": 3316
              }
            ],
            "declare": false,
            "start": 3290,
            "end": 3317
          }
        ],
        "start": 3249,
        "end": 3319
      },
      "expression": false,
      "start": 3154,
      "end": 3319
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TableBaseEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 3349,
        "end": 3362
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "PublicSpec",
              "optional": false,
              "typeAnnotation": null,
              "start": 3368,
              "end": 3378
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 3387,
                "end": 3393
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "InternalSpec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3400,
                        "end": 3412
                      },
                      "typeArguments": null,
                      "start": 3400,
                      "end": 3412
                    },
                    "start": 3394,
                    "end": 3412
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 3414,
                    "end": 3417
                  }
                ],
                "start": 3393,
                "end": 3418
              },
              "start": 3387,
              "end": 3418
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3368,
            "end": 3418
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "InternalSpec",
              "optional": false,
              "typeAnnotation": null,
              "start": 3424,
              "end": 3436
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3445,
                    "end": 3451
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "PublicSpec",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3458,
                            "end": 3468
                          },
                          "typeArguments": null,
                          "start": 3458,
                          "end": 3468
                        },
                        "start": 3452,
                        "end": 3468
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 3470,
                        "end": 3473
                      }
                    ],
                    "start": 3451,
                    "end": 3474
                  },
                  "start": 3445,
                  "end": 3474
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3478,
                  "end": 3487
                }
              ],
              "start": 3445,
              "end": 3487
            },
            "default": {
              "type": "TSUndefinedKeyword",
              "start": 3490,
              "end": 3499
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 3424,
            "end": 3499
          }
        ],
        "start": 3362,
        "end": 3500
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3507,
              "end": 3508
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "iSpec",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3525,
                          "end": 3530
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "TSNonNullExpression",
                            "expression": {
                              "type": "Literal",
                              "value": null,
                              "raw": "null",
                              "start": 3533,
                              "end": 3537
                            },
                            "start": 3533,
                            "end": 3538
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "InternalSpec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3542,
                              "end": 3554
                            },
                            "typeArguments": null,
                            "start": 3542,
                            "end": 3554
                          },
                          "start": 3533,
                          "end": 3554
                        },
                        "definite": false,
                        "start": 3525,
                        "end": 3554
                      }
                    ],
                    "declare": false,
                    "start": 3521,
                    "end": 3555
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iSpec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3564,
                        "end": 3569
                      },
                      "property": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 3570,
                            "end": 3574
                          },
                          "start": 3570,
                          "end": 3575
                        },
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "InternalSpec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3585,
                              "end": 3597
                            },
                            "typeArguments": null,
                            "start": 3585,
                            "end": 3597
                          },
                          "start": 3579,
                          "end": 3597
                        },
                        "start": 3570,
                        "end": 3597
                      },
                      "optional": false,
                      "computed": true,
                      "start": 3564,
                      "end": 3598
                    },
                    "directive": null,
                    "start": 3564,
                    "end": 3599
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iSpec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3645,
                        "end": 3650
                      },
                      "property": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 3651,
                            "end": 3655
                          },
                          "start": 3651,
                          "end": 3656
                        },
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PublicSpec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3666,
                              "end": 3676
                            },
                            "typeArguments": null,
                            "start": 3666,
                            "end": 3676
                          },
                          "start": 3660,
                          "end": 3676
                        },
                        "start": 3651,
                        "end": 3676
                      },
                      "optional": false,
                      "computed": true,
                      "start": 3645,
                      "end": 3677
                    },
                    "directive": null,
                    "start": 3645,
                    "end": 3678
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iSpec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3730,
                        "end": 3735
                      },
                      "operator": "===",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3740,
                        "end": 3749
                      },
                      "start": 3730,
                      "end": 3749
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": null,
                          "start": 3765,
                          "end": 3772
                        }
                      ],
                      "start": 3751,
                      "end": 3782
                    },
                    "alternate": null,
                    "start": 3726,
                    "end": 3782
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iSpec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3791,
                        "end": 3796
                      },
                      "property": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 3797,
                            "end": 3801
                          },
                          "start": 3797,
                          "end": 3802
                        },
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "InternalSpec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3812,
                              "end": 3824
                            },
                            "typeArguments": null,
                            "start": 3812,
                            "end": 3824
                          },
                          "start": 3806,
                          "end": 3824
                        },
                        "start": 3797,
                        "end": 3824
                      },
                      "optional": false,
                      "computed": true,
                      "start": 3791,
                      "end": 3825
                    },
                    "directive": null,
                    "start": 3791,
                    "end": 3826
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iSpec",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3835,
                        "end": 3840
                      },
                      "property": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "TSNonNullExpression",
                          "expression": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 3841,
                            "end": 3845
                          },
                          "start": 3841,
                          "end": 3846
                        },
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "PublicSpec",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3856,
                              "end": 3866
                            },
                            "typeArguments": null,
                            "start": 3856,
                            "end": 3866
                          },
                          "start": 3850,
                          "end": 3866
                        },
                        "start": 3841,
                        "end": 3866
                      },
                      "optional": false,
                      "computed": true,
                      "start": 3835,
                      "end": 3867
                    },
                    "directive": null,
                    "start": 3835,
                    "end": 3868
                  }
                ],
                "start": 3511,
                "end": 3874
              },
              "expression": false,
              "start": 3508,
              "end": 3874
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 3507,
            "end": 3874
          }
        ],
        "start": 3501,
        "end": 3876
      },
      "abstract": false,
      "declare": false,
      "start": 3343,
      "end": 3876
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 3910,
        "end": 3913
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 3914,
              "end": 3915
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3926,
                        "end": 3927
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3929,
                          "end": 3935
                        },
                        "start": 3927,
                        "end": 3935
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3926,
                      "end": 3935
                    }
                  ],
                  "start": 3924,
                  "end": 3937
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3940,
                  "end": 3949
                }
              ],
              "start": 3924,
              "end": 3949
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3914,
            "end": 3949
          }
        ],
        "start": 3913,
        "end": 3950
      },
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
                "start": 3954,
                "end": 3955
              },
              "typeArguments": null,
              "start": 3954,
              "end": 3955
            },
            "start": 3952,
            "end": 3955
          },
          "start": 3951,
          "end": 3955
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
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null,
                "start": 3960,
                "end": 3967
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3968,
                      "end": 3969
                    },
                    "typeArguments": null,
                    "start": 3968,
                    "end": 3969
                  }
                ],
                "start": 3967,
                "end": 3970
              },
              "start": 3960,
              "end": 3970
            },
            "start": 3958,
            "end": 3970
          },
          "start": 3957,
          "end": 3970
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 3978,
                "end": 3979
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3982,
                "end": 3983
              },
              "start": 3978,
              "end": 3983
            },
            "directive": null,
            "start": 3978,
            "end": 3984
          }
        ],
        "start": 3972,
        "end": 3986
      },
      "expression": false,
      "start": 3901,
      "end": 3986
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SqlInsertSet",
        "optional": false,
        "typeAnnotation": null,
        "start": 3993,
        "end": 4005
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
              "start": 4006,
              "end": 4007
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4006,
            "end": 4007
          }
        ],
        "start": 4005,
        "end": 4008
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
            "typeAnnotation": null,
            "start": 4011,
            "end": 4012
          },
          "typeArguments": null,
          "start": 4011,
          "end": 4012
        },
        "extendsType": {
          "type": "TSUndefinedKeyword",
          "start": 4021,
          "end": 4030
        },
        "trueType": {
          "type": "TSObjectKeyword",
          "start": 4033,
          "end": 4039
        },
        "falseType": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 4045,
            "end": 4046
          },
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
                "typeAnnotation": null,
                "start": 4056,
                "end": 4057
              },
              "typeArguments": null,
              "start": 4056,
              "end": 4057
            },
            "start": 4050,
            "end": 4057
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSUnknownKeyword",
            "start": 4060,
            "end": 4067
          },
          "optional": false,
          "readonly": null,
          "start": 4042,
          "end": 4069
        },
        "start": 4011,
        "end": 4069
      },
      "declare": false,
      "start": 3988,
      "end": 4070
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SqlTable",
        "optional": false,
        "typeAnnotation": null,
        "start": 4078,
        "end": 4086
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
              "start": 4087,
              "end": 4088
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4087,
            "end": 4088
          }
        ],
        "start": 4086,
        "end": 4089
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
              "name": "validateRow",
              "optional": false,
              "typeAnnotation": null,
              "start": 4106,
              "end": 4117
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
                  "name": "_row",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4124,
                        "end": 4131
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "SqlInsertSet",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4132,
                              "end": 4144
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4145,
                                    "end": 4146
                                  },
                                  "typeArguments": null,
                                  "start": 4145,
                                  "end": 4146
                                }
                              ],
                              "start": 4144,
                              "end": 4147
                            },
                            "start": 4132,
                            "end": 4147
                          }
                        ],
                        "start": 4131,
                        "end": 4148
                      },
                      "start": 4124,
                      "end": 4148
                    },
                    "start": 4122,
                    "end": 4148
                  },
                  "start": 4118,
                  "end": 4148
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4151,
                  "end": 4155
                },
                "start": 4149,
                "end": 4155
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 4156,
                "end": 4163
              },
              "expression": false,
              "start": 4117,
              "end": 4163
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 4096,
            "end": 4163
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "insertRow",
              "optional": false,
              "typeAnnotation": null,
              "start": 4175,
              "end": 4184
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
                  "name": "row",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SqlInsertSet",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4190,
                        "end": 4202
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4203,
                              "end": 4204
                            },
                            "typeArguments": null,
                            "start": 4203,
                            "end": 4204
                          }
                        ],
                        "start": 4202,
                        "end": 4205
                      },
                      "start": 4190,
                      "end": 4205
                    },
                    "start": 4188,
                    "end": 4205
                  },
                  "start": 4185,
                  "end": 4205
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 4217,
                          "end": 4221
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "validateRow",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4222,
                          "end": 4233
                        },
                        "optional": false,
                        "computed": false,
                        "start": 4217,
                        "end": 4233
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "row",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4234,
                          "end": 4237
                        }
                      ],
                      "optional": false,
                      "start": 4217,
                      "end": 4238
                    },
                    "directive": null,
                    "start": 4217,
                    "end": 4239
                  }
                ],
                "start": 4207,
                "end": 4245
              },
              "expression": false,
              "start": 4184,
              "end": 4245
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 4168,
            "end": 4245
          }
        ],
        "start": 4090,
        "end": 4247
      },
      "abstract": false,
      "declare": false,
      "start": 4072,
      "end": 4247
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null,
        "start": 4281,
        "end": 4287
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 4294,
              "end": 4298
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "button",
                  "raw": "\"button\"",
                  "start": 4300,
                  "end": 4308
                },
                "start": 4300,
                "end": 4308
              },
              "start": 4298,
              "end": 4308
            },
            "accessibility": null,
            "static": false,
            "start": 4294,
            "end": 4309
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "text",
              "optional": false,
              "typeAnnotation": null,
              "start": 4314,
              "end": 4318
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4320,
                "end": 4326
              },
              "start": 4318,
              "end": 4326
            },
            "accessibility": null,
            "static": false,
            "start": 4314,
            "end": 4327
          }
        ],
        "start": 4288,
        "end": 4329
      },
      "declare": false,
      "start": 4271,
      "end": 4329
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Checkbox",
        "optional": false,
        "typeAnnotation": null,
        "start": 4341,
        "end": 4349
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 4356,
              "end": 4360
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "checkbox",
                  "raw": "\"checkbox\"",
                  "start": 4362,
                  "end": 4372
                },
                "start": 4362,
                "end": 4372
              },
              "start": 4360,
              "end": 4372
            },
            "accessibility": null,
            "static": false,
            "start": 4356,
            "end": 4373
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "isChecked",
              "optional": false,
              "typeAnnotation": null,
              "start": 4378,
              "end": 4387
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4389,
                "end": 4396
              },
              "start": 4387,
              "end": 4396
            },
            "accessibility": null,
            "static": false,
            "start": 4378,
            "end": 4397
          }
        ],
        "start": 4350,
        "end": 4399
      },
      "declare": false,
      "start": 4331,
      "end": 4399
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null,
        "start": 4406,
        "end": 4413
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Button",
              "optional": false,
              "typeAnnotation": null,
              "start": 4416,
              "end": 4422
            },
            "typeArguments": null,
            "start": 4416,
            "end": 4422
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Checkbox",
              "optional": false,
              "typeAnnotation": null,
              "start": 4425,
              "end": 4433
            },
            "typeArguments": null,
            "start": 4425,
            "end": 4433
          }
        ],
        "start": 4416,
        "end": 4433
      },
      "declare": false,
      "start": 4401,
      "end": 4434
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "update",
        "optional": false,
        "typeAnnotation": null,
        "start": 4445,
        "end": 4451
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 4452,
              "end": 4453
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Control",
                "optional": false,
                "typeAnnotation": null,
                "start": 4462,
                "end": 4469
              },
              "typeArguments": null,
              "start": 4462,
              "end": 4469
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4452,
            "end": 4469
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 4471,
              "end": 4472
            },
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
                  "typeAnnotation": null,
                  "start": 4487,
                  "end": 4488
                },
                "typeArguments": null,
                "start": 4487,
                "end": 4488
              },
              "start": 4481,
              "end": 4488
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4471,
            "end": 4488
          }
        ],
        "start": 4451,
        "end": 4489
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "control",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4500,
                    "end": 4501
                  },
                  "typeArguments": null,
                  "start": 4500,
                  "end": 4501
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 4504,
                  "end": 4513
                }
              ],
              "start": 4500,
              "end": 4513
            },
            "start": 4498,
            "end": 4513
          },
          "start": 4490,
          "end": 4513
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 4520,
                "end": 4521
              },
              "typeArguments": null,
              "start": 4520,
              "end": 4521
            },
            "start": 4518,
            "end": 4521
          },
          "start": 4515,
          "end": 4521
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4530,
                  "end": 4531
                },
                "typeArguments": null,
                "start": 4530,
                "end": 4531
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4532,
                  "end": 4533
                },
                "typeArguments": null,
                "start": 4532,
                "end": 4533
              },
              "start": 4530,
              "end": 4534
            },
            "start": 4528,
            "end": 4534
          },
          "start": 4523,
          "end": 4534
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4537,
          "end": 4541
        },
        "start": 4535,
        "end": 4541
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "control",
                "optional": false,
                "typeAnnotation": null,
                "start": 4552,
                "end": 4559
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 4564,
                "end": 4573
              },
              "start": 4552,
              "end": 4573
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "control",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4585,
                        "end": 4592
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4593,
                        "end": 4596
                      },
                      "optional": false,
                      "computed": true,
                      "start": 4585,
                      "end": 4597
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4600,
                      "end": 4605
                    },
                    "start": 4585,
                    "end": 4605
                  },
                  "directive": null,
                  "start": 4585,
                  "end": 4606
                }
              ],
              "start": 4575,
              "end": 4612
            },
            "alternate": null,
            "start": 4548,
            "end": 4612
          }
        ],
        "start": 4542,
        "end": 4614
      },
      "expression": false,
      "start": 4436,
      "end": 4614
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Column",
        "optional": false,
        "typeAnnotation": null,
        "start": 4643,
        "end": 4649
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
              "start": 4650,
              "end": 4651
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4650,
            "end": 4651
          }
        ],
        "start": 4649,
        "end": 4652
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4662,
                  "end": 4663
                },
                "typeArguments": null,
                "start": 4662,
                "end": 4663
              },
              "start": 4656,
              "end": 4663
            },
            "extendsType": {
              "type": "TSNeverKeyword",
              "start": 4672,
              "end": 4677
            },
            "trueType": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4682,
                    "end": 4684
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 4687,
                          "end": 4693
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 4696,
                          "end": 4702
                        }
                      ],
                      "start": 4687,
                      "end": 4702
                    },
                    "start": 4685,
                    "end": 4702
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4682,
                  "end": 4702
                }
              ],
              "start": 4680,
              "end": 4704
            },
            "falseType": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4709,
                    "end": 4711
                  },
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
                        "start": 4713,
                        "end": 4714
                      },
                      "typeArguments": null,
                      "start": 4713,
                      "end": 4714
                    },
                    "start": 4711,
                    "end": 4714
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4709,
                  "end": 4714
                }
              ],
              "start": 4707,
              "end": 4716
            },
            "start": 4656,
            "end": 4716
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4722,
                  "end": 4727
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4730,
                    "end": 4736
                  },
                  "start": 4728,
                  "end": 4736
                },
                "accessibility": null,
                "static": false,
                "start": 4722,
                "end": 4737
              }
            ],
            "start": 4720,
            "end": 4739
          }
        ],
        "start": 4655,
        "end": 4739
      },
      "declare": false,
      "start": 4638,
      "end": 4739
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getColumnProperty",
        "optional": false,
        "typeAnnotation": null,
        "start": 4750,
        "end": 4767
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 4768,
              "end": 4769
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4768,
            "end": 4769
          }
        ],
        "start": 4767,
        "end": 4770
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "column",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Column",
                "optional": false,
                "typeAnnotation": null,
                "start": 4779,
                "end": 4785
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4786,
                      "end": 4787
                    },
                    "typeArguments": null,
                    "start": 4786,
                    "end": 4787
                  }
                ],
                "start": 4785,
                "end": 4788
              },
              "start": 4779,
              "end": 4788
            },
            "start": 4777,
            "end": 4788
          },
          "start": 4771,
          "end": 4788
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Column",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4801,
                  "end": 4807
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4808,
                        "end": 4809
                      },
                      "typeArguments": null,
                      "start": 4808,
                      "end": 4809
                    }
                  ],
                  "start": 4807,
                  "end": 4810
                },
                "start": 4801,
                "end": 4810
              },
              "start": 4795,
              "end": 4810
            },
            "start": 4793,
            "end": 4810
          },
          "start": 4790,
          "end": 4810
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "column",
                "optional": false,
                "typeAnnotation": null,
                "start": 4823,
                "end": 4829
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 4830,
                "end": 4833
              },
              "optional": false,
              "computed": true,
              "start": 4823,
              "end": 4834
            },
            "start": 4816,
            "end": 4835
          }
        ],
        "start": 4812,
        "end": 4837
      },
      "expression": false,
      "start": 4741,
      "end": 4837
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 4837
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 0,
    "end": 8,
    "range": [
      0,
      8
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 9,
    "end": 11,
    "range": [
      9,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 14,
    "end": 21,
    "range": [
      14,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28,
    "range": [
      22,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 29,
    "end": 30,
    "range": [
      29,
      30
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 31,
    "end": 40,
    "range": [
      31,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 48,
    "end": 49,
    "range": [
      48,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 66,
    "end": 67,
    "range": [
      66,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 70,
    "end": 76,
    "range": [
      70,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 83,
    "end": 85,
    "range": [
      83,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "type": "Identifier",
    "value": "x",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 113,
    "end": 119,
    "range": [
      113,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 129,
    "end": 135,
    "range": [
      129,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 149,
    "end": 151,
    "range": [
      149,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 172,
    "end": 178,
    "range": [
      172,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 188,
    "end": 194,
    "range": [
      188,
      194
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 210,
    "end": 212,
    "range": [
      210,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 235,
    "end": 241,
    "range": [
      235,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 251,
    "end": 257,
    "range": [
      251,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
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
    "type": "Numeric",
    "value": "0",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 274,
    "end": 280,
    "range": [
      274,
      280
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 281,
    "end": 288,
    "range": [
      281,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 293,
    "end": 301,
    "range": [
      293,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 302,
    "end": 304,
    "range": [
      302,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 306,
    "end": 307,
    "range": [
      306,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "Extract",
    "start": 311,
    "end": 318,
    "range": [
      311,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 322,
    "end": 328,
    "range": [
      322,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 331,
    "end": 340,
    "range": [
      331,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 344,
    "end": 348,
    "range": [
      344,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 351,
    "end": 357,
    "range": [
      351,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 364,
    "end": 366,
    "range": [
      364,
      366
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
    "value": ")",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 394,
    "end": 400,
    "range": [
      394,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 410,
    "end": 416,
    "range": [
      410,
      416
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 430,
    "end": 436,
    "range": [
      430,
      436
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 437,
    "end": 444,
    "range": [
      437,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 446,
    "end": 447,
    "range": [
      446,
      447
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 449,
    "end": 458,
    "range": [
      449,
      458
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 459,
    "end": 462,
    "range": [
      459,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 463,
    "end": 464,
    "range": [
      463,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 472,
    "end": 476,
    "range": [
      472,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 484,
    "end": 491,
    "range": [
      484,
      491
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 492,
    "end": 500,
    "range": [
      492,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "isBox",
    "start": 501,
    "end": 506,
    "range": [
      501,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 508,
    "end": 509,
    "range": [
      508,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 510,
    "end": 513,
    "range": [
      510,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "x",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 518,
    "end": 520,
    "range": [
      518,
      520
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 521,
    "end": 524,
    "range": [
      521,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 525,
    "end": 532,
    "range": [
      525,
      532
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 535,
    "end": 542,
    "range": [
      535,
      542
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 543,
    "end": 551,
    "range": [
      543,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "isUndefined",
    "start": 552,
    "end": 563,
    "range": [
      552,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 567,
    "end": 574,
    "range": [
      567,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 579,
    "end": 581,
    "range": [
      579,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 582,
    "end": 591,
    "range": [
      582,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 593,
    "end": 600,
    "range": [
      593,
      600
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 601,
    "end": 609,
    "range": [
      601,
      609
    ]
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 610,
    "end": 615,
    "range": [
      610,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 617,
    "end": 618,
    "range": [
      617,
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
    "value": "Box",
    "start": 622,
    "end": 625,
    "range": [
      622,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 632,
    "end": 633,
    "range": [
      632,
      633
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
    "value": "g1",
    "start": 644,
    "end": 646,
    "range": [
      644,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 649,
    "end": 656,
    "range": [
      649,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 657,
    "end": 660,
    "range": [
      657,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 666,
    "end": 675,
    "range": [
      666,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 676,
    "end": 677,
    "range": [
      676,
      677
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 689,
    "end": 691,
    "range": [
      689,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "isBox",
    "start": 693,
    "end": 698,
    "range": [
      693,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 713,
    "end": 718,
    "range": [
      713,
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
    "value": ")",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "g2",
    "start": 741,
    "end": 743,
    "range": [
      741,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 746,
    "end": 753,
    "range": [
      746,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 754,
    "end": 757,
    "range": [
      754,
      757
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 763,
    "end": 772,
    "range": [
      763,
      772
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 772,
    "end": 773,
    "range": [
      772,
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
    "type": "Identifier",
    "value": "T",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 786,
    "end": 788,
    "range": [
      786,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "isUndefined",
    "start": 791,
    "end": 802,
    "range": [
      791,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 803,
    "end": 804,
    "range": [
      803,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 804,
    "end": 805,
    "range": [
      804,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 807,
    "end": 808,
    "range": [
      807,
      808
    ]
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 817,
    "end": 822,
    "range": [
      817,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 825,
    "end": 826,
    "range": [
      825,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 831,
    "end": 832,
    "range": [
      831,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 836,
    "end": 844,
    "range": [
      836,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "g3",
    "start": 845,
    "end": 847,
    "range": [
      845,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 850,
    "end": 857,
    "range": [
      850,
      857
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 858,
    "end": 861,
    "range": [
      858,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 867,
    "end": 876,
    "range": [
      867,
      876
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 877,
    "end": 878,
    "range": [
      877,
      878
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 879,
    "end": 880,
    "range": [
      879,
      880
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 884,
    "end": 885,
    "range": [
      884,
      885
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 890,
    "end": 892,
    "range": [
      890,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Identifier",
    "value": "isBox",
    "start": 895,
    "end": 900,
    "range": [
      895,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 901,
    "end": 902,
    "range": [
      901,
      902
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 915,
    "end": 920,
    "range": [
      915,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 944,
    "end": 952,
    "range": [
      944,
      952
    ]
  },
  {
    "type": "Identifier",
    "value": "g4",
    "start": 953,
    "end": 955,
    "range": [
      953,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 955,
    "end": 956,
    "range": [
      955,
      956
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 956,
    "end": 957,
    "range": [
      956,
      957
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 958,
    "end": 965,
    "range": [
      958,
      965
    ]
  },
  {
    "type": "Identifier",
    "value": "Box",
    "start": 966,
    "end": 969,
    "range": [
      966,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 975,
    "end": 984,
    "range": [
      975,
      984
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 987,
    "end": 988,
    "range": [
      987,
      988
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 989,
    "end": 990,
    "range": [
      989,
      990
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 998,
    "end": 1000,
    "range": [
      998,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1001,
    "end": 1002,
    "range": [
      1001,
      1002
    ]
  },
  {
    "type": "Identifier",
    "value": "isUndefined",
    "start": 1002,
    "end": 1013,
    "range": [
      1002,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1016,
    "end": 1017,
    "range": [
      1016,
      1017
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1018,
    "end": 1019,
    "range": [
      1018,
      1019
    ]
  },
  {
    "type": "Identifier",
    "value": "unbox",
    "start": 1028,
    "end": 1033,
    "range": [
      1028,
      1033
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1033,
    "end": 1034,
    "range": [
      1033,
      1034
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1035,
    "end": 1036,
    "range": [
      1035,
      1036
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1036,
    "end": 1037,
    "range": [
      1036,
      1037
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1079,
    "end": 1086,
    "range": [
      1079,
      1086
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1087,
    "end": 1095,
    "range": [
      1087,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "takeA",
    "start": 1096,
    "end": 1101,
    "range": [
      1096,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 1102,
    "end": 1105,
    "range": [
      1102,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 1107,
    "end": 1110,
    "range": [
      1107,
      1110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1113,
    "end": 1117,
    "range": [
      1113,
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
    "value": "export",
    "start": 1119,
    "end": 1125,
    "range": [
      1119,
      1125
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1126,
    "end": 1134,
    "range": [
      1126,
      1134
    ]
  },
  {
    "type": "Identifier",
    "value": "bounceAndTakeIfA",
    "start": 1135,
    "end": 1151,
    "range": [
      1135,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 1152,
    "end": 1154,
    "range": [
      1152,
      1154
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1155,
    "end": 1162,
    "range": [
      1155,
      1162
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 1163,
    "end": 1166,
    "range": [
      1163,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 1169,
    "end": 1172,
    "range": [
      1169,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1174,
    "end": 1179,
    "range": [
      1174,
      1179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1179,
    "end": 1180,
    "range": [
      1179,
      1180
    ]
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 1181,
    "end": 1183,
    "range": [
      1181,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1184,
    "end": 1185,
    "range": [
      1184,
      1185
    ]
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 1186,
    "end": 1188,
    "range": [
      1186,
      1188
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1189,
    "end": 1190,
    "range": [
      1189,
      1190
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1195,
    "end": 1197,
    "range": [
      1195,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1199,
    "end": 1204,
    "range": [
      1199,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1205,
    "end": 1208,
    "range": [
      1205,
      1208
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 1209,
    "end": 1212,
    "range": [
      1209,
      1212
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1212,
    "end": 1213,
    "range": [
      1212,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Identifier",
    "value": "takeA",
    "start": 1224,
    "end": 1229,
    "range": [
      1224,
      1229
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1230,
    "end": 1235,
    "range": [
      1230,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1235,
    "end": 1236,
    "range": [
      1235,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1236,
    "end": 1237,
    "range": [
      1236,
      1237
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1246,
    "end": 1252,
    "range": [
      1246,
      1252
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1253,
    "end": 1258,
    "range": [
      1253,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1264,
    "end": 1265,
    "range": [
      1264,
      1265
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1270,
    "end": 1274,
    "range": [
      1270,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1285,
    "end": 1291,
    "range": [
      1285,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1292,
    "end": 1297,
    "range": [
      1292,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1330,
    "end": 1334,
    "range": [
      1330,
      1334
    ]
  },
  {
    "type": "Identifier",
    "value": "Common",
    "start": 1335,
    "end": 1341,
    "range": [
      1335,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1346,
    "end": 1348,
    "range": [
      1346,
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
    "value": "number",
    "start": 1350,
    "end": 1356,
    "range": [
      1350,
      1356
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1357,
    "end": 1358,
    "range": [
      1357,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1360,
    "end": 1364,
    "range": [
      1360,
      1364
    ]
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 1365,
    "end": 1367,
    "range": [
      1365,
      1367
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1368,
    "end": 1369,
    "range": [
      1368,
      1369
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1372,
    "end": 1375,
    "range": [
      1372,
      1375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 1377,
    "end": 1380,
    "range": [
      1377,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1382,
    "end": 1384,
    "range": [
      1382,
      1384
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1386,
    "end": 1392,
    "range": [
      1386,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1396,
    "end": 1400,
    "range": [
      1396,
      1400
    ]
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 1401,
    "end": 1403,
    "range": [
      1401,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1408,
    "end": 1411,
    "range": [
      1408,
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
    "type": "String",
    "value": "'B'",
    "start": 1413,
    "end": 1416,
    "range": [
      1413,
      1416
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 1418,
    "end": 1420,
    "range": [
      1418,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1422,
    "end": 1428,
    "range": [
      1422,
      1428
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1428,
    "end": 1429,
    "range": [
      1428,
      1429
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1430,
    "end": 1433,
    "range": [
      1430,
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
    "type": "Identifier",
    "value": "number",
    "start": 1435,
    "end": 1441,
    "range": [
      1435,
      1441
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1446,
    "end": 1450,
    "range": [
      1446,
      1450
    ]
  },
  {
    "type": "Identifier",
    "value": "MyUnion",
    "start": 1451,
    "end": 1458,
    "range": [
      1451,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Identifier",
    "value": "AA",
    "start": 1461,
    "end": 1463,
    "range": [
      1461,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1464,
    "end": 1465,
    "range": [
      1464,
      1465
    ]
  },
  {
    "type": "Identifier",
    "value": "BB",
    "start": 1466,
    "end": 1468,
    "range": [
      1466,
      1468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1471,
    "end": 1476,
    "range": [
      1471,
      1476
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 1477,
    "end": 1479,
    "range": [
      1477,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1480,
    "end": 1481,
    "range": [
      1480,
      1481
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1483,
    "end": 1488,
    "range": [
      1483,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Identifier",
    "value": "MyUnion",
    "start": 1490,
    "end": 1497,
    "range": [
      1490,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1499,
    "end": 1501,
    "range": [
      1499,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1508,
    "end": 1513,
    "range": [
      1508,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1513,
    "end": 1514,
    "range": [
      1513,
      1514
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1514,
    "end": 1517,
    "range": [
      1514,
      1517
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1517,
    "end": 1518,
    "range": [
      1517,
      1518
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1533,
    "end": 1535,
    "range": [
      1533,
      1535
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1536,
    "end": 1537,
    "range": [
      1536,
      1537
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1537,
    "end": 1542,
    "range": [
      1537,
      1542
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1543,
    "end": 1545,
    "range": [
      1543,
      1545
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1546,
    "end": 1551,
    "range": [
      1546,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1553,
    "end": 1554,
    "range": [
      1553,
      1554
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1563,
    "end": 1568,
    "range": [
      1563,
      1568
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1568,
    "end": 1569,
    "range": [
      1568,
      1569
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1569,
    "end": 1572,
    "range": [
      1569,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 1578,
    "end": 1579,
    "range": [
      1578,
      1579
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1584,
    "end": 1586,
    "range": [
      1584,
      1586
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1588,
    "end": 1593,
    "range": [
      1588,
      1593
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1593,
    "end": 1594,
    "range": [
      1593,
      1594
    ]
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1594,
    "end": 1597,
    "range": [
      1594,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1598,
    "end": 1601,
    "range": [
      1598,
      1601
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 1602,
    "end": 1605,
    "range": [
      1602,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1605,
    "end": 1606,
    "range": [
      1605,
      1606
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1617,
    "end": 1622,
    "range": [
      1617,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1622,
    "end": 1623,
    "range": [
      1622,
      1623
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1623,
    "end": 1626,
    "range": [
      1623,
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
    "type": "Punctuator",
    "value": "}",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1638,
    "end": 1643,
    "range": [
      1638,
      1643
    ]
  },
  {
    "type": "Identifier",
    "value": "fn2",
    "start": 1644,
    "end": 1647,
    "range": [
      1644,
      1647
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1651,
    "end": 1652,
    "range": [
      1651,
      1652
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1653,
    "end": 1660,
    "range": [
      1653,
      1660
    ]
  },
  {
    "type": "Identifier",
    "value": "MyUnion",
    "start": 1661,
    "end": 1668,
    "range": [
      1661,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
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
    "value": "value",
    "start": 1670,
    "end": 1675,
    "range": [
      1670,
      1675
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1677,
    "end": 1678,
    "range": [
      1677,
      1678
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "MyUnion",
    "start": 1681,
    "end": 1688,
    "range": [
      1681,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1689,
    "end": 1691,
    "range": [
      1689,
      1691
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1692,
    "end": 1693,
    "range": [
      1692,
      1693
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1698,
    "end": 1703,
    "range": [
      1698,
      1703
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1704,
    "end": 1707,
    "range": [
      1704,
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
    "value": "if",
    "start": 1723,
    "end": 1725,
    "range": [
      1723,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1727,
    "end": 1732,
    "range": [
      1727,
      1732
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 1733,
    "end": 1735,
    "range": [
      1733,
      1735
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1736,
    "end": 1741,
    "range": [
      1736,
      1741
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1741,
    "end": 1742,
    "range": [
      1741,
      1742
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1753,
    "end": 1758,
    "range": [
      1753,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1759,
    "end": 1762,
    "range": [
      1759,
      1762
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1762,
    "end": 1763,
    "range": [
      1762,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1774,
    "end": 1776,
    "range": [
      1774,
      1776
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1778,
    "end": 1783,
    "range": [
      1778,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1784,
    "end": 1787,
    "range": [
      1784,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1788,
    "end": 1791,
    "range": [
      1788,
      1791
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 1792,
    "end": 1795,
    "range": [
      1792,
      1795
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1795,
    "end": 1796,
    "range": [
      1795,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1807,
    "end": 1812,
    "range": [
      1807,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1813,
    "end": 1816,
    "range": [
      1813,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1816,
    "end": 1817,
    "range": [
      1816,
      1817
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1824,
    "end": 1825,
    "range": [
      1824,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1850,
    "end": 1854,
    "range": [
      1850,
      1854
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1855,
    "end": 1857,
    "range": [
      1855,
      1857
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1860,
    "end": 1861,
    "range": [
      1860,
      1861
    ]
  },
  {
    "type": "Identifier",
    "value": "testable",
    "start": 1866,
    "end": 1874,
    "range": [
      1866,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1876,
    "end": 1880,
    "range": [
      1876,
      1880
    ]
  },
  {
    "type": "Identifier",
    "value": "doTest",
    "start": 1885,
    "end": 1891,
    "range": [
      1885,
      1891
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1891,
    "end": 1892,
    "range": [
      1891,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1893,
    "end": 1894,
    "range": [
      1893,
      1894
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1894,
    "end": 1895,
    "range": [
      1894,
      1895
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1896,
    "end": 1898,
    "range": [
      1896,
      1898
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1899,
    "end": 1903,
    "range": [
      1899,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1906,
    "end": 1910,
    "range": [
      1906,
      1910
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 1911,
    "end": 1913,
    "range": [
      1911,
      1913
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1916,
    "end": 1917,
    "range": [
      1916,
      1917
    ]
  },
  {
    "type": "Identifier",
    "value": "testable",
    "start": 1922,
    "end": 1930,
    "range": [
      1922,
      1930
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1932,
    "end": 1937,
    "range": [
      1932,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1942,
    "end": 1946,
    "range": [
      1942,
      1946
    ]
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 1947,
    "end": 1952,
    "range": [
      1947,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 1955,
    "end": 1957,
    "range": [
      1955,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1958,
    "end": 1959,
    "range": [
      1958,
      1959
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 1960,
    "end": 1962,
    "range": [
      1960,
      1962
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1964,
    "end": 1972,
    "range": [
      1964,
      1972
    ]
  },
  {
    "type": "Identifier",
    "value": "notWorking",
    "start": 1973,
    "end": 1983,
    "range": [
      1973,
      1983
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1983,
    "end": 1984,
    "range": [
      1983,
      1984
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1984,
    "end": 1985,
    "range": [
      1984,
      1985
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1986,
    "end": 1993,
    "range": [
      1986,
      1993
    ]
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 1994,
    "end": 1999,
    "range": [
      1994,
      1999
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1999,
    "end": 2000,
    "range": [
      1999,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2001,
    "end": 2007,
    "range": [
      2001,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2010,
    "end": 2011,
    "range": [
      2010,
      2011
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2012,
    "end": 2013,
    "range": [
      2012,
      2013
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2018,
    "end": 2020,
    "range": [
      2018,
      2020
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2021,
    "end": 2022,
    "range": [
      2021,
      2022
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2023,
    "end": 2029,
    "range": [
      2023,
      2029
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2029,
    "end": 2030,
    "range": [
      2029,
      2030
    ]
  },
  {
    "type": "Identifier",
    "value": "testable",
    "start": 2030,
    "end": 2038,
    "range": [
      2030,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2040,
    "end": 2046,
    "range": [
      2040,
      2046
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 2052,
    "end": 2058,
    "range": [
      2052,
      2058
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Identifier",
    "value": "doTest",
    "start": 2059,
    "end": 2065,
    "range": [
      2059,
      2065
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2065,
    "end": 2066,
    "range": [
      2065,
      2066
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2066,
    "end": 2067,
    "range": [
      2066,
      2067
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2067,
    "end": 2068,
    "range": [
      2067,
      2068
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2094,
    "end": 2103,
    "range": [
      2094,
      2103
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2104,
    "end": 2105,
    "range": [
      2104,
      2105
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2106,
    "end": 2107,
    "range": [
      2106,
      2107
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2115,
    "end": 2121,
    "range": [
      2115,
      2121
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2124,
    "end": 2128,
    "range": [
      2124,
      2128
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 2134,
    "end": 2142,
    "range": [
      2134,
      2142
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 2143,
    "end": 2146,
    "range": [
      2143,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2147,
    "end": 2148,
    "range": [
      2147,
      2148
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2149,
    "end": 2156,
    "range": [
      2149,
      2156
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2157,
    "end": 2162,
    "range": [
      2157,
      2162
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2163,
    "end": 2164,
    "range": [
      2163,
      2164
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2164,
    "end": 2165,
    "range": [
      2164,
      2165
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2165,
    "end": 2166,
    "range": [
      2165,
      2166
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2166,
    "end": 2169,
    "range": [
      2166,
      2169
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2169,
    "end": 2170,
    "range": [
      2169,
      2170
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2171,
    "end": 2172,
    "range": [
      2171,
      2172
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2174,
    "end": 2177,
    "range": [
      2174,
      2177
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2180,
    "end": 2181,
    "range": [
      2180,
      2181
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2181,
    "end": 2182,
    "range": [
      2181,
      2182
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2183,
    "end": 2189,
    "range": [
      2183,
      2189
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2190,
    "end": 2191,
    "range": [
      2190,
      2191
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2196,
    "end": 2201,
    "range": [
      2196,
      2201
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2202,
    "end": 2207,
    "range": [
      2202,
      2207
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2208,
    "end": 2209,
    "range": [
      2208,
      2209
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2210,
    "end": 2213,
    "range": [
      2210,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2213,
    "end": 2214,
    "range": [
      2213,
      2214
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2214,
    "end": 2217,
    "range": [
      2214,
      2217
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2218,
    "end": 2219,
    "range": [
      2218,
      2219
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2224,
    "end": 2226,
    "range": [
      2224,
      2226
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2227,
    "end": 2228,
    "range": [
      2227,
      2228
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2228,
    "end": 2233,
    "range": [
      2228,
      2233
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 2234,
    "end": 2237,
    "range": [
      2234,
      2237
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2238,
    "end": 2242,
    "range": [
      2238,
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
    "type": "Keyword",
    "value": "return",
    "start": 2254,
    "end": 2260,
    "range": [
      2254,
      2260
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2261,
    "end": 2266,
    "range": [
      2261,
      2266
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2278,
    "end": 2284,
    "range": [
      2278,
      2284
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2286,
    "end": 2287,
    "range": [
      2286,
      2287
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2288,
    "end": 2289,
    "range": [
      2288,
      2289
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2289,
    "end": 2290,
    "range": [
      2289,
      2290
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 2314,
    "end": 2319,
    "range": [
      2314,
      2319
    ]
  },
  {
    "type": "Identifier",
    "value": "EventEmitter",
    "start": 2320,
    "end": 2332,
    "range": [
      2320,
      2332
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2332,
    "end": 2333,
    "range": [
      2332,
      2333
    ]
  },
  {
    "type": "Identifier",
    "value": "ET",
    "start": 2333,
    "end": 2335,
    "range": [
      2333,
      2335
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2335,
    "end": 2336,
    "range": [
      2335,
      2336
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2337,
    "end": 2338,
    "range": [
      2337,
      2338
    ]
  },
  {
    "type": "Identifier",
    "value": "off",
    "start": 2343,
    "end": 2346,
    "range": [
      2343,
      2346
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2346,
    "end": 2347,
    "range": [
      2346,
      2347
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2347,
    "end": 2348,
    "range": [
      2347,
      2348
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2349,
    "end": 2356,
    "range": [
      2349,
      2356
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2357,
    "end": 2362,
    "range": [
      2357,
      2362
    ]
  },
  {
    "type": "Identifier",
    "value": "ET",
    "start": 2363,
    "end": 2365,
    "range": [
      2363,
      2365
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2365,
    "end": 2366,
    "range": [
      2365,
      2366
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2366,
    "end": 2367,
    "range": [
      2366,
      2367
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2367,
    "end": 2370,
    "range": [
      2367,
      2370
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 2370,
    "end": 2374,
    "range": [
      2370,
      2374
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2374,
    "end": 2375,
    "range": [
      2374,
      2375
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2376,
    "end": 2377,
    "range": [
      2376,
      2377
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2377,
    "end": 2378,
    "range": [
      2377,
      2378
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2378,
    "end": 2379,
    "range": [
      2378,
      2379
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2380,
    "end": 2386,
    "range": [
      2380,
      2386
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2386,
    "end": 2387,
    "range": [
      2386,
      2387
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2388,
    "end": 2389,
    "range": [
      2388,
      2389
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2390,
    "end": 2391,
    "range": [
      2390,
      2391
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 2391,
    "end": 2398,
    "range": [
      2391,
      2398
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2398,
    "end": 2399,
    "range": [
      2398,
      2399
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2400,
    "end": 2406,
    "range": [
      2400,
      2406
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2406,
    "end": 2407,
    "range": [
      2406,
      2407
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2407,
    "end": 2408,
    "range": [
      2407,
      2408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2408,
    "end": 2409,
    "range": [
      2408,
      2409
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2409,
    "end": 2413,
    "range": [
      2409,
      2413
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2414,
    "end": 2415,
    "range": [
      2414,
      2415
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2415,
    "end": 2416,
    "range": [
      2415,
      2416
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2417,
    "end": 2418,
    "range": [
      2417,
      2418
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2419,
    "end": 2427,
    "range": [
      2419,
      2427
    ]
  },
  {
    "type": "Identifier",
    "value": "once",
    "start": 2428,
    "end": 2432,
    "range": [
      2428,
      2432
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2432,
    "end": 2433,
    "range": [
      2432,
      2433
    ]
  },
  {
    "type": "Identifier",
    "value": "ET",
    "start": 2433,
    "end": 2435,
    "range": [
      2433,
      2435
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2435,
    "end": 2436,
    "range": [
      2435,
      2436
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2437,
    "end": 2438,
    "range": [
      2437,
      2438
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2439,
    "end": 2446,
    "range": [
      2439,
      2446
    ]
  },
  {
    "type": "Identifier",
    "value": "EventEmitter",
    "start": 2447,
    "end": 2459,
    "range": [
      2447,
      2459
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2459,
    "end": 2460,
    "range": [
      2459,
      2460
    ]
  },
  {
    "type": "Identifier",
    "value": "ET",
    "start": 2460,
    "end": 2462,
    "range": [
      2460,
      2462
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2463,
    "end": 2464,
    "range": [
      2463,
      2464
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2464,
    "end": 2465,
    "range": [
      2464,
      2465
    ]
  },
  {
    "type": "Identifier",
    "value": "emittingObject",
    "start": 2465,
    "end": 2479,
    "range": [
      2465,
      2479
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2479,
    "end": 2480,
    "range": [
      2479,
      2480
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2481,
    "end": 2482,
    "range": [
      2481,
      2482
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2482,
    "end": 2483,
    "range": [
      2482,
      2483
    ]
  },
  {
    "type": "Identifier",
    "value": "eventName",
    "start": 2484,
    "end": 2493,
    "range": [
      2484,
      2493
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2493,
    "end": 2494,
    "range": [
      2493,
      2494
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2495,
    "end": 2500,
    "range": [
      2495,
      2500
    ]
  },
  {
    "type": "Identifier",
    "value": "ET",
    "start": 2501,
    "end": 2503,
    "range": [
      2501,
      2503
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2504,
    "end": 2505,
    "range": [
      2504,
      2505
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2506,
    "end": 2510,
    "range": [
      2506,
      2510
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2511,
    "end": 2512,
    "range": [
      2511,
      2512
    ]
  },
  {
    "type": "Identifier",
    "value": "emittingObject",
    "start": 2517,
    "end": 2531,
    "range": [
      2517,
      2531
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2531,
    "end": 2532,
    "range": [
      2531,
      2532
    ]
  },
  {
    "type": "Identifier",
    "value": "off",
    "start": 2532,
    "end": 2535,
    "range": [
      2532,
      2535
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2535,
    "end": 2536,
    "range": [
      2535,
      2536
    ]
  },
  {
    "type": "Identifier",
    "value": "eventName",
    "start": 2536,
    "end": 2545,
    "range": [
      2536,
      2545
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2545,
    "end": 2546,
    "range": [
      2545,
      2546
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2547,
    "end": 2548,
    "range": [
      2547,
      2548
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2549,
    "end": 2550,
    "range": [
      2549,
      2550
    ]
  },
  {
    "type": "Identifier",
    "value": "emittingObject",
    "start": 2555,
    "end": 2569,
    "range": [
      2555,
      2569
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2569,
    "end": 2570,
    "range": [
      2569,
      2570
    ]
  },
  {
    "type": "Identifier",
    "value": "off",
    "start": 2570,
    "end": 2573,
    "range": [
      2570,
      2573
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2573,
    "end": 2574,
    "range": [
      2573,
      2574
    ]
  },
  {
    "type": "Identifier",
    "value": "eventName",
    "start": 2574,
    "end": 2583,
    "range": [
      2574,
      2583
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 2584,
    "end": 2586,
    "range": [
      2584,
      2586
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2587,
    "end": 2593,
    "range": [
      2587,
      2593
    ]
  },
  {
    "type": "Identifier",
    "value": "eventName",
    "start": 2594,
    "end": 2603,
    "range": [
      2594,
      2603
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2603,
    "end": 2604,
    "range": [
      2603,
      2604
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2605,
    "end": 2606,
    "range": [
      2605,
      2606
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2606,
    "end": 2607,
    "range": [
      2606,
      2607
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2607,
    "end": 2608,
    "range": [
      2607,
      2608
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2609,
    "end": 2610,
    "range": [
      2609,
      2610
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2896,
    "end": 2904,
    "range": [
      2896,
      2904
    ]
  },
  {
    "type": "Identifier",
    "value": "fx1",
    "start": 2905,
    "end": 2908,
    "range": [
      2905,
      2908
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2908,
    "end": 2909,
    "range": [
      2908,
      2909
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2909,
    "end": 2910,
    "range": [
      2909,
      2910
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2910,
    "end": 2911,
    "range": [
      2910,
      2911
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2912,
    "end": 2913,
    "range": [
      2912,
      2913
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2914,
    "end": 2921,
    "range": [
      2914,
      2921
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 2922,
    "end": 2927,
    "range": [
      2922,
      2927
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2928,
    "end": 2929,
    "range": [
      2928,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2929,
    "end": 2930,
    "range": [
      2929,
      2930
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2930,
    "end": 2931,
    "range": [
      2930,
      2931
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2931,
    "end": 2934,
    "range": [
      2931,
      2934
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2934,
    "end": 2935,
    "range": [
      2934,
      2935
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2936,
    "end": 2937,
    "range": [
      2936,
      2937
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2937,
    "end": 2938,
    "range": [
      2937,
      2938
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2939,
    "end": 2942,
    "range": [
      2939,
      2942
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2942,
    "end": 2943,
    "range": [
      2942,
      2943
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 2944,
    "end": 2945,
    "range": [
      2944,
      2945
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2945,
    "end": 2946,
    "range": [
      2945,
      2946
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2947,
    "end": 2948,
    "range": [
      2947,
      2948
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2953,
    "end": 2958,
    "range": [
      2953,
      2958
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 2959,
    "end": 2961,
    "range": [
      2959,
      2961
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2962,
    "end": 2963,
    "range": [
      2962,
      2963
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2964,
    "end": 2967,
    "range": [
      2964,
      2967
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2967,
    "end": 2968,
    "range": [
      2967,
      2968
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 2968,
    "end": 2971,
    "range": [
      2968,
      2971
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2971,
    "end": 2972,
    "range": [
      2971,
      2972
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2972,
    "end": 2973,
    "range": [
      2972,
      2973
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2978,
    "end": 2983,
    "range": [
      2978,
      2983
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 2984,
    "end": 2986,
    "range": [
      2984,
      2986
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2987,
    "end": 2988,
    "range": [
      2987,
      2988
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2989,
    "end": 2992,
    "range": [
      2989,
      2992
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2993,
    "end": 2995,
    "range": [
      2993,
      2995
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 2996,
    "end": 2999,
    "range": [
      2996,
      2999
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2999,
    "end": 3000,
    "range": [
      2999,
      3000
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3000,
    "end": 3003,
    "range": [
      3000,
      3003
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3003,
    "end": 3004,
    "range": [
      3003,
      3004
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3004,
    "end": 3005,
    "range": [
      3004,
      3005
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3006,
    "end": 3007,
    "range": [
      3006,
      3007
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3009,
    "end": 3017,
    "range": [
      3009,
      3017
    ]
  },
  {
    "type": "Identifier",
    "value": "fx2",
    "start": 3018,
    "end": 3021,
    "range": [
      3018,
      3021
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3021,
    "end": 3022,
    "range": [
      3021,
      3022
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3022,
    "end": 3023,
    "range": [
      3022,
      3023
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3024,
    "end": 3031,
    "range": [
      3024,
      3031
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3032,
    "end": 3038,
    "range": [
      3032,
      3038
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3038,
    "end": 3039,
    "range": [
      3038,
      3039
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3039,
    "end": 3044,
    "range": [
      3039,
      3044
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3045,
    "end": 3046,
    "range": [
      3045,
      3046
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3046,
    "end": 3047,
    "range": [
      3046,
      3047
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3048,
    "end": 3054,
    "range": [
      3048,
      3054
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3054,
    "end": 3055,
    "range": [
      3054,
      3055
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3055,
    "end": 3056,
    "range": [
      3055,
      3056
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3057,
    "end": 3058,
    "range": [
      3057,
      3058
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3059,
    "end": 3066,
    "range": [
      3059,
      3066
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3067,
    "end": 3072,
    "range": [
      3067,
      3072
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3073,
    "end": 3074,
    "range": [
      3073,
      3074
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3074,
    "end": 3075,
    "range": [
      3074,
      3075
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3075,
    "end": 3076,
    "range": [
      3075,
      3076
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3076,
    "end": 3079,
    "range": [
      3076,
      3079
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3079,
    "end": 3080,
    "range": [
      3079,
      3080
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3081,
    "end": 3082,
    "range": [
      3081,
      3082
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3082,
    "end": 3083,
    "range": [
      3082,
      3083
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3084,
    "end": 3087,
    "range": [
      3084,
      3087
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3087,
    "end": 3088,
    "range": [
      3087,
      3088
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3089,
    "end": 3090,
    "range": [
      3089,
      3090
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3090,
    "end": 3091,
    "range": [
      3090,
      3091
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3092,
    "end": 3093,
    "range": [
      3092,
      3093
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3098,
    "end": 3103,
    "range": [
      3098,
      3103
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 3104,
    "end": 3106,
    "range": [
      3104,
      3106
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3107,
    "end": 3108,
    "range": [
      3107,
      3108
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3109,
    "end": 3112,
    "range": [
      3109,
      3112
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3112,
    "end": 3113,
    "range": [
      3112,
      3113
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3113,
    "end": 3116,
    "range": [
      3113,
      3116
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3116,
    "end": 3117,
    "range": [
      3116,
      3117
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3117,
    "end": 3118,
    "range": [
      3117,
      3118
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3123,
    "end": 3128,
    "range": [
      3123,
      3128
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 3129,
    "end": 3131,
    "range": [
      3129,
      3131
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3132,
    "end": 3133,
    "range": [
      3132,
      3133
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3134,
    "end": 3137,
    "range": [
      3134,
      3137
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3138,
    "end": 3140,
    "range": [
      3138,
      3140
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3141,
    "end": 3144,
    "range": [
      3141,
      3144
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3144,
    "end": 3145,
    "range": [
      3144,
      3145
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3145,
    "end": 3148,
    "range": [
      3145,
      3148
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3148,
    "end": 3149,
    "range": [
      3148,
      3149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3149,
    "end": 3150,
    "range": [
      3149,
      3150
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3151,
    "end": 3152,
    "range": [
      3151,
      3152
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3154,
    "end": 3162,
    "range": [
      3154,
      3162
    ]
  },
  {
    "type": "Identifier",
    "value": "fx3",
    "start": 3163,
    "end": 3166,
    "range": [
      3163,
      3166
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3166,
    "end": 3167,
    "range": [
      3166,
      3167
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3167,
    "end": 3168,
    "range": [
      3167,
      3168
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3169,
    "end": 3176,
    "range": [
      3169,
      3176
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3177,
    "end": 3183,
    "range": [
      3177,
      3183
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3183,
    "end": 3184,
    "range": [
      3183,
      3184
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3184,
    "end": 3189,
    "range": [
      3184,
      3189
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3190,
    "end": 3191,
    "range": [
      3190,
      3191
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3191,
    "end": 3192,
    "range": [
      3191,
      3192
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3193,
    "end": 3199,
    "range": [
      3193,
      3199
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3199,
    "end": 3200,
    "range": [
      3199,
      3200
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3201,
    "end": 3202,
    "range": [
      3201,
      3202
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3203,
    "end": 3212,
    "range": [
      3203,
      3212
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3212,
    "end": 3213,
    "range": [
      3212,
      3213
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3214,
    "end": 3215,
    "range": [
      3214,
      3215
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3216,
    "end": 3223,
    "range": [
      3216,
      3223
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3224,
    "end": 3229,
    "range": [
      3224,
      3229
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3230,
    "end": 3231,
    "range": [
      3230,
      3231
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3231,
    "end": 3232,
    "range": [
      3231,
      3232
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3232,
    "end": 3233,
    "range": [
      3232,
      3233
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3233,
    "end": 3236,
    "range": [
      3233,
      3236
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3236,
    "end": 3237,
    "range": [
      3236,
      3237
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3238,
    "end": 3239,
    "range": [
      3238,
      3239
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3239,
    "end": 3240,
    "range": [
      3239,
      3240
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3241,
    "end": 3244,
    "range": [
      3241,
      3244
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3244,
    "end": 3245,
    "range": [
      3244,
      3245
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 3246,
    "end": 3247,
    "range": [
      3246,
      3247
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3247,
    "end": 3248,
    "range": [
      3247,
      3248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3249,
    "end": 3250,
    "range": [
      3249,
      3250
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3255,
    "end": 3260,
    "range": [
      3255,
      3260
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 3261,
    "end": 3263,
    "range": [
      3261,
      3263
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3264,
    "end": 3265,
    "range": [
      3264,
      3265
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3266,
    "end": 3269,
    "range": [
      3266,
      3269
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3269,
    "end": 3270,
    "range": [
      3269,
      3270
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3270,
    "end": 3273,
    "range": [
      3270,
      3273
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3273,
    "end": 3274,
    "range": [
      3273,
      3274
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3274,
    "end": 3275,
    "range": [
      3274,
      3275
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3290,
    "end": 3295,
    "range": [
      3290,
      3295
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 3296,
    "end": 3298,
    "range": [
      3296,
      3298
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3299,
    "end": 3300,
    "range": [
      3299,
      3300
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3301,
    "end": 3304,
    "range": [
      3301,
      3304
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 3305,
    "end": 3307,
    "range": [
      3305,
      3307
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 3308,
    "end": 3311,
    "range": [
      3308,
      3311
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3311,
    "end": 3312,
    "range": [
      3311,
      3312
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 3312,
    "end": 3315,
    "range": [
      3312,
      3315
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3315,
    "end": 3316,
    "range": [
      3315,
      3316
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3316,
    "end": 3317,
    "range": [
      3316,
      3317
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3318,
    "end": 3319,
    "range": [
      3318,
      3319
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 3343,
    "end": 3348,
    "range": [
      3343,
      3348
    ]
  },
  {
    "type": "Identifier",
    "value": "TableBaseEnum",
    "start": 3349,
    "end": 3362,
    "range": [
      3349,
      3362
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3362,
    "end": 3363,
    "range": [
      3362,
      3363
    ]
  },
  {
    "type": "Identifier",
    "value": "PublicSpec",
    "start": 3368,
    "end": 3378,
    "range": [
      3368,
      3378
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3379,
    "end": 3386,
    "range": [
      3379,
      3386
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3387,
    "end": 3393,
    "range": [
      3387,
      3393
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3393,
    "end": 3394,
    "range": [
      3393,
      3394
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3394,
    "end": 3399,
    "range": [
      3394,
      3399
    ]
  },
  {
    "type": "Identifier",
    "value": "InternalSpec",
    "start": 3400,
    "end": 3412,
    "range": [
      3400,
      3412
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3412,
    "end": 3413,
    "range": [
      3412,
      3413
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3414,
    "end": 3417,
    "range": [
      3414,
      3417
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3417,
    "end": 3418,
    "range": [
      3417,
      3418
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3418,
    "end": 3419,
    "range": [
      3418,
      3419
    ]
  },
  {
    "type": "Identifier",
    "value": "InternalSpec",
    "start": 3424,
    "end": 3436,
    "range": [
      3424,
      3436
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3437,
    "end": 3444,
    "range": [
      3437,
      3444
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 3445,
    "end": 3451,
    "range": [
      3445,
      3451
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3451,
    "end": 3452,
    "range": [
      3451,
      3452
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3452,
    "end": 3457,
    "range": [
      3452,
      3457
    ]
  },
  {
    "type": "Identifier",
    "value": "PublicSpec",
    "start": 3458,
    "end": 3468,
    "range": [
      3458,
      3468
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3468,
    "end": 3469,
    "range": [
      3468,
      3469
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3470,
    "end": 3473,
    "range": [
      3470,
      3473
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3473,
    "end": 3474,
    "range": [
      3473,
      3474
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3476,
    "end": 3477,
    "range": [
      3476,
      3477
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3478,
    "end": 3487,
    "range": [
      3478,
      3487
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3488,
    "end": 3489,
    "range": [
      3488,
      3489
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3490,
    "end": 3499,
    "range": [
      3490,
      3499
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3499,
    "end": 3500,
    "range": [
      3499,
      3500
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3501,
    "end": 3502,
    "range": [
      3501,
      3502
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3507,
    "end": 3508,
    "range": [
      3507,
      3508
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3508,
    "end": 3509,
    "range": [
      3508,
      3509
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3509,
    "end": 3510,
    "range": [
      3509,
      3510
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3521,
    "end": 3524,
    "range": [
      3521,
      3524
    ]
  },
  {
    "type": "Identifier",
    "value": "iSpec",
    "start": 3525,
    "end": 3530,
    "range": [
      3525,
      3530
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3531,
    "end": 3532,
    "range": [
      3531,
      3532
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3533,
    "end": 3537,
    "range": [
      3533,
      3537
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3537,
    "end": 3538,
    "range": [
      3537,
      3538
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3539,
    "end": 3541,
    "range": [
      3539,
      3541
    ]
  },
  {
    "type": "Identifier",
    "value": "InternalSpec",
    "start": 3542,
    "end": 3554,
    "range": [
      3542,
      3554
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3554,
    "end": 3555,
    "range": [
      3554,
      3555
    ]
  },
  {
    "type": "Identifier",
    "value": "iSpec",
    "start": 3564,
    "end": 3569,
    "range": [
      3564,
      3569
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3569,
    "end": 3570,
    "range": [
      3569,
      3570
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3570,
    "end": 3574,
    "range": [
      3570,
      3574
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3574,
    "end": 3575,
    "range": [
      3574,
      3575
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3576,
    "end": 3578,
    "range": [
      3576,
      3578
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3579,
    "end": 3584,
    "range": [
      3579,
      3584
    ]
  },
  {
    "type": "Identifier",
    "value": "InternalSpec",
    "start": 3585,
    "end": 3597,
    "range": [
      3585,
      3597
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3597,
    "end": 3598,
    "range": [
      3597,
      3598
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3598,
    "end": 3599,
    "range": [
      3598,
      3599
    ]
  },
  {
    "type": "Identifier",
    "value": "iSpec",
    "start": 3645,
    "end": 3650,
    "range": [
      3645,
      3650
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3650,
    "end": 3651,
    "range": [
      3650,
      3651
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3651,
    "end": 3655,
    "range": [
      3651,
      3655
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3655,
    "end": 3656,
    "range": [
      3655,
      3656
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3657,
    "end": 3659,
    "range": [
      3657,
      3659
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3660,
    "end": 3665,
    "range": [
      3660,
      3665
    ]
  },
  {
    "type": "Identifier",
    "value": "PublicSpec",
    "start": 3666,
    "end": 3676,
    "range": [
      3666,
      3676
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3676,
    "end": 3677,
    "range": [
      3676,
      3677
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3677,
    "end": 3678,
    "range": [
      3677,
      3678
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3726,
    "end": 3728,
    "range": [
      3726,
      3728
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3729,
    "end": 3730,
    "range": [
      3729,
      3730
    ]
  },
  {
    "type": "Identifier",
    "value": "iSpec",
    "start": 3730,
    "end": 3735,
    "range": [
      3730,
      3735
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3736,
    "end": 3739,
    "range": [
      3736,
      3739
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3740,
    "end": 3749,
    "range": [
      3740,
      3749
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3749,
    "end": 3750,
    "range": [
      3749,
      3750
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3751,
    "end": 3752,
    "range": [
      3751,
      3752
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3765,
    "end": 3771,
    "range": [
      3765,
      3771
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3771,
    "end": 3772,
    "range": [
      3771,
      3772
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3781,
    "end": 3782,
    "range": [
      3781,
      3782
    ]
  },
  {
    "type": "Identifier",
    "value": "iSpec",
    "start": 3791,
    "end": 3796,
    "range": [
      3791,
      3796
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3796,
    "end": 3797,
    "range": [
      3796,
      3797
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3797,
    "end": 3801,
    "range": [
      3797,
      3801
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3801,
    "end": 3802,
    "range": [
      3801,
      3802
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3803,
    "end": 3805,
    "range": [
      3803,
      3805
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3806,
    "end": 3811,
    "range": [
      3806,
      3811
    ]
  },
  {
    "type": "Identifier",
    "value": "InternalSpec",
    "start": 3812,
    "end": 3824,
    "range": [
      3812,
      3824
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3824,
    "end": 3825,
    "range": [
      3824,
      3825
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3825,
    "end": 3826,
    "range": [
      3825,
      3826
    ]
  },
  {
    "type": "Identifier",
    "value": "iSpec",
    "start": 3835,
    "end": 3840,
    "range": [
      3835,
      3840
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3840,
    "end": 3841,
    "range": [
      3840,
      3841
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3841,
    "end": 3845,
    "range": [
      3841,
      3845
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3845,
    "end": 3846,
    "range": [
      3845,
      3846
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 3847,
    "end": 3849,
    "range": [
      3847,
      3849
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 3850,
    "end": 3855,
    "range": [
      3850,
      3855
    ]
  },
  {
    "type": "Identifier",
    "value": "PublicSpec",
    "start": 3856,
    "end": 3866,
    "range": [
      3856,
      3866
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3866,
    "end": 3867,
    "range": [
      3866,
      3867
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3867,
    "end": 3868,
    "range": [
      3867,
      3868
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3873,
    "end": 3874,
    "range": [
      3873,
      3874
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3875,
    "end": 3876,
    "range": [
      3875,
      3876
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3901,
    "end": 3909,
    "range": [
      3901,
      3909
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 3910,
    "end": 3913,
    "range": [
      3910,
      3913
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3913,
    "end": 3914,
    "range": [
      3913,
      3914
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3914,
    "end": 3915,
    "range": [
      3914,
      3915
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 3916,
    "end": 3923,
    "range": [
      3916,
      3923
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3924,
    "end": 3925,
    "range": [
      3924,
      3925
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 3926,
    "end": 3927,
    "range": [
      3926,
      3927
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3927,
    "end": 3928,
    "range": [
      3927,
      3928
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3929,
    "end": 3935,
    "range": [
      3929,
      3935
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3936,
    "end": 3937,
    "range": [
      3936,
      3937
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3938,
    "end": 3939,
    "range": [
      3938,
      3939
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3940,
    "end": 3949,
    "range": [
      3940,
      3949
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3949,
    "end": 3950,
    "range": [
      3949,
      3950
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3950,
    "end": 3951,
    "range": [
      3950,
      3951
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3951,
    "end": 3952,
    "range": [
      3951,
      3952
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3952,
    "end": 3953,
    "range": [
      3952,
      3953
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3954,
    "end": 3955,
    "range": [
      3954,
      3955
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3955,
    "end": 3956,
    "range": [
      3955,
      3956
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3957,
    "end": 3958,
    "range": [
      3957,
      3958
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3958,
    "end": 3959,
    "range": [
      3958,
      3959
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 3960,
    "end": 3967,
    "range": [
      3960,
      3967
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3967,
    "end": 3968,
    "range": [
      3967,
      3968
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3968,
    "end": 3969,
    "range": [
      3968,
      3969
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3969,
    "end": 3970,
    "range": [
      3969,
      3970
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3970,
    "end": 3971,
    "range": [
      3970,
      3971
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3972,
    "end": 3973,
    "range": [
      3972,
      3973
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3978,
    "end": 3979,
    "range": [
      3978,
      3979
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3980,
    "end": 3981,
    "range": [
      3980,
      3981
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3982,
    "end": 3983,
    "range": [
      3982,
      3983
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3983,
    "end": 3984,
    "range": [
      3983,
      3984
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3985,
    "end": 3986,
    "range": [
      3985,
      3986
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3988,
    "end": 3992,
    "range": [
      3988,
      3992
    ]
  },
  {
    "type": "Identifier",
    "value": "SqlInsertSet",
    "start": 3993,
    "end": 4005,
    "range": [
      3993,
      4005
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4005,
    "end": 4006,
    "range": [
      4005,
      4006
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4006,
    "end": 4007,
    "range": [
      4006,
      4007
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4007,
    "end": 4008,
    "range": [
      4007,
      4008
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4009,
    "end": 4010,
    "range": [
      4009,
      4010
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4011,
    "end": 4012,
    "range": [
      4011,
      4012
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4013,
    "end": 4020,
    "range": [
      4013,
      4020
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4021,
    "end": 4030,
    "range": [
      4021,
      4030
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4031,
    "end": 4032,
    "range": [
      4031,
      4032
    ]
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 4033,
    "end": 4039,
    "range": [
      4033,
      4039
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4040,
    "end": 4041,
    "range": [
      4040,
      4041
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4042,
    "end": 4043,
    "range": [
      4042,
      4043
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4044,
    "end": 4045,
    "range": [
      4044,
      4045
    ]
  },
  {
    "type": "Identifier",
    "value": "P",
    "start": 4045,
    "end": 4046,
    "range": [
      4045,
      4046
    ]
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 4047,
    "end": 4049,
    "range": [
      4047,
      4049
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4050,
    "end": 4055,
    "range": [
      4050,
      4055
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4056,
    "end": 4057,
    "range": [
      4056,
      4057
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4057,
    "end": 4058,
    "range": [
      4057,
      4058
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4058,
    "end": 4059,
    "range": [
      4058,
      4059
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4060,
    "end": 4067,
    "range": [
      4060,
      4067
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4068,
    "end": 4069,
    "range": [
      4068,
      4069
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4069,
    "end": 4070,
    "range": [
      4069,
      4070
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4072,
    "end": 4077,
    "range": [
      4072,
      4077
    ]
  },
  {
    "type": "Identifier",
    "value": "SqlTable",
    "start": 4078,
    "end": 4086,
    "range": [
      4078,
      4086
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4086,
    "end": 4087,
    "range": [
      4086,
      4087
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4087,
    "end": 4088,
    "range": [
      4087,
      4088
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4088,
    "end": 4089,
    "range": [
      4088,
      4089
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4090,
    "end": 4091,
    "range": [
      4090,
      4091
    ]
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 4096,
    "end": 4105,
    "range": [
      4096,
      4105
    ]
  },
  {
    "type": "Identifier",
    "value": "validateRow",
    "start": 4106,
    "end": 4117,
    "range": [
      4106,
      4117
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4117,
    "end": 4118,
    "range": [
      4117,
      4118
    ]
  },
  {
    "type": "Identifier",
    "value": "_row",
    "start": 4118,
    "end": 4122,
    "range": [
      4118,
      4122
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4122,
    "end": 4123,
    "range": [
      4122,
      4123
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 4124,
    "end": 4131,
    "range": [
      4124,
      4131
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4131,
    "end": 4132,
    "range": [
      4131,
      4132
    ]
  },
  {
    "type": "Identifier",
    "value": "SqlInsertSet",
    "start": 4132,
    "end": 4144,
    "range": [
      4132,
      4144
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4144,
    "end": 4145,
    "range": [
      4144,
      4145
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4145,
    "end": 4146,
    "range": [
      4145,
      4146
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4146,
    "end": 4147,
    "range": [
      4146,
      4147
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4147,
    "end": 4148,
    "range": [
      4147,
      4148
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4148,
    "end": 4149,
    "range": [
      4148,
      4149
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4149,
    "end": 4150,
    "range": [
      4149,
      4150
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4151,
    "end": 4155,
    "range": [
      4151,
      4155
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4156,
    "end": 4157,
    "range": [
      4156,
      4157
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4162,
    "end": 4163,
    "range": [
      4162,
      4163
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4168,
    "end": 4174,
    "range": [
      4168,
      4174
    ]
  },
  {
    "type": "Identifier",
    "value": "insertRow",
    "start": 4175,
    "end": 4184,
    "range": [
      4175,
      4184
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4184,
    "end": 4185,
    "range": [
      4184,
      4185
    ]
  },
  {
    "type": "Identifier",
    "value": "row",
    "start": 4185,
    "end": 4188,
    "range": [
      4185,
      4188
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4188,
    "end": 4189,
    "range": [
      4188,
      4189
    ]
  },
  {
    "type": "Identifier",
    "value": "SqlInsertSet",
    "start": 4190,
    "end": 4202,
    "range": [
      4190,
      4202
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4202,
    "end": 4203,
    "range": [
      4202,
      4203
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4203,
    "end": 4204,
    "range": [
      4203,
      4204
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4204,
    "end": 4205,
    "range": [
      4204,
      4205
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4205,
    "end": 4206,
    "range": [
      4205,
      4206
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4207,
    "end": 4208,
    "range": [
      4207,
      4208
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4217,
    "end": 4221,
    "range": [
      4217,
      4221
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4221,
    "end": 4222,
    "range": [
      4221,
      4222
    ]
  },
  {
    "type": "Identifier",
    "value": "validateRow",
    "start": 4222,
    "end": 4233,
    "range": [
      4222,
      4233
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4233,
    "end": 4234,
    "range": [
      4233,
      4234
    ]
  },
  {
    "type": "Identifier",
    "value": "row",
    "start": 4234,
    "end": 4237,
    "range": [
      4234,
      4237
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4237,
    "end": 4238,
    "range": [
      4237,
      4238
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4238,
    "end": 4239,
    "range": [
      4238,
      4239
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4244,
    "end": 4245,
    "range": [
      4244,
      4245
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4246,
    "end": 4247,
    "range": [
      4246,
      4247
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4271,
    "end": 4280,
    "range": [
      4271,
      4280
    ]
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 4281,
    "end": 4287,
    "range": [
      4281,
      4287
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4288,
    "end": 4289,
    "range": [
      4288,
      4289
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4294,
    "end": 4298,
    "range": [
      4294,
      4298
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4298,
    "end": 4299,
    "range": [
      4298,
      4299
    ]
  },
  {
    "type": "String",
    "value": "\"button\"",
    "start": 4300,
    "end": 4308,
    "range": [
      4300,
      4308
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4308,
    "end": 4309,
    "range": [
      4308,
      4309
    ]
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 4314,
    "end": 4318,
    "range": [
      4314,
      4318
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4318,
    "end": 4319,
    "range": [
      4318,
      4319
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4320,
    "end": 4326,
    "range": [
      4320,
      4326
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4326,
    "end": 4327,
    "range": [
      4326,
      4327
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4328,
    "end": 4329,
    "range": [
      4328,
      4329
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4331,
    "end": 4340,
    "range": [
      4331,
      4340
    ]
  },
  {
    "type": "Identifier",
    "value": "Checkbox",
    "start": 4341,
    "end": 4349,
    "range": [
      4341,
      4349
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4350,
    "end": 4351,
    "range": [
      4350,
      4351
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4356,
    "end": 4360,
    "range": [
      4356,
      4360
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4360,
    "end": 4361,
    "range": [
      4360,
      4361
    ]
  },
  {
    "type": "String",
    "value": "\"checkbox\"",
    "start": 4362,
    "end": 4372,
    "range": [
      4362,
      4372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4372,
    "end": 4373,
    "range": [
      4372,
      4373
    ]
  },
  {
    "type": "Identifier",
    "value": "isChecked",
    "start": 4378,
    "end": 4387,
    "range": [
      4378,
      4387
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4387,
    "end": 4388,
    "range": [
      4387,
      4388
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 4389,
    "end": 4396,
    "range": [
      4389,
      4396
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4396,
    "end": 4397,
    "range": [
      4396,
      4397
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4398,
    "end": 4399,
    "range": [
      4398,
      4399
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4401,
    "end": 4405,
    "range": [
      4401,
      4405
    ]
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 4406,
    "end": 4413,
    "range": [
      4406,
      4413
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4414,
    "end": 4415,
    "range": [
      4414,
      4415
    ]
  },
  {
    "type": "Identifier",
    "value": "Button",
    "start": 4416,
    "end": 4422,
    "range": [
      4416,
      4422
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4423,
    "end": 4424,
    "range": [
      4423,
      4424
    ]
  },
  {
    "type": "Identifier",
    "value": "Checkbox",
    "start": 4425,
    "end": 4433,
    "range": [
      4425,
      4433
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4433,
    "end": 4434,
    "range": [
      4433,
      4434
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4436,
    "end": 4444,
    "range": [
      4436,
      4444
    ]
  },
  {
    "type": "Identifier",
    "value": "update",
    "start": 4445,
    "end": 4451,
    "range": [
      4445,
      4451
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4451,
    "end": 4452,
    "range": [
      4451,
      4452
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4452,
    "end": 4453,
    "range": [
      4452,
      4453
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4454,
    "end": 4461,
    "range": [
      4454,
      4461
    ]
  },
  {
    "type": "Identifier",
    "value": "Control",
    "start": 4462,
    "end": 4469,
    "range": [
      4462,
      4469
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4469,
    "end": 4470,
    "range": [
      4469,
      4470
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4471,
    "end": 4472,
    "range": [
      4471,
      4472
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4473,
    "end": 4480,
    "range": [
      4473,
      4480
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4481,
    "end": 4486,
    "range": [
      4481,
      4486
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4487,
    "end": 4488,
    "range": [
      4487,
      4488
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4488,
    "end": 4489,
    "range": [
      4488,
      4489
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4489,
    "end": 4490,
    "range": [
      4489,
      4490
    ]
  },
  {
    "type": "Identifier",
    "value": "control",
    "start": 4490,
    "end": 4497,
    "range": [
      4490,
      4497
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4498,
    "end": 4499,
    "range": [
      4498,
      4499
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4500,
    "end": 4501,
    "range": [
      4500,
      4501
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4502,
    "end": 4503,
    "range": [
      4502,
      4503
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4504,
    "end": 4513,
    "range": [
      4504,
      4513
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4513,
    "end": 4514,
    "range": [
      4513,
      4514
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4515,
    "end": 4518,
    "range": [
      4515,
      4518
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4518,
    "end": 4519,
    "range": [
      4518,
      4519
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4520,
    "end": 4521,
    "range": [
      4520,
      4521
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4521,
    "end": 4522,
    "range": [
      4521,
      4522
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4523,
    "end": 4528,
    "range": [
      4523,
      4528
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4528,
    "end": 4529,
    "range": [
      4528,
      4529
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4530,
    "end": 4531,
    "range": [
      4530,
      4531
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4531,
    "end": 4532,
    "range": [
      4531,
      4532
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 4532,
    "end": 4533,
    "range": [
      4532,
      4533
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4533,
    "end": 4534,
    "range": [
      4533,
      4534
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4534,
    "end": 4535,
    "range": [
      4534,
      4535
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4535,
    "end": 4536,
    "range": [
      4535,
      4536
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4537,
    "end": 4541,
    "range": [
      4537,
      4541
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4542,
    "end": 4543,
    "range": [
      4542,
      4543
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4548,
    "end": 4550,
    "range": [
      4548,
      4550
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4551,
    "end": 4552,
    "range": [
      4551,
      4552
    ]
  },
  {
    "type": "Identifier",
    "value": "control",
    "start": 4552,
    "end": 4559,
    "range": [
      4552,
      4559
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 4560,
    "end": 4563,
    "range": [
      4560,
      4563
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4564,
    "end": 4573,
    "range": [
      4564,
      4573
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4573,
    "end": 4574,
    "range": [
      4573,
      4574
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4575,
    "end": 4576,
    "range": [
      4575,
      4576
    ]
  },
  {
    "type": "Identifier",
    "value": "control",
    "start": 4585,
    "end": 4592,
    "range": [
      4585,
      4592
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4592,
    "end": 4593,
    "range": [
      4592,
      4593
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4593,
    "end": 4596,
    "range": [
      4593,
      4596
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4596,
    "end": 4597,
    "range": [
      4596,
      4597
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4598,
    "end": 4599,
    "range": [
      4598,
      4599
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 4600,
    "end": 4605,
    "range": [
      4600,
      4605
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4605,
    "end": 4606,
    "range": [
      4605,
      4606
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4611,
    "end": 4612,
    "range": [
      4611,
      4612
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4613,
    "end": 4614,
    "range": [
      4613,
      4614
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4638,
    "end": 4642,
    "range": [
      4638,
      4642
    ]
  },
  {
    "type": "Identifier",
    "value": "Column",
    "start": 4643,
    "end": 4649,
    "range": [
      4643,
      4649
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4649,
    "end": 4650,
    "range": [
      4649,
      4650
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4650,
    "end": 4651,
    "range": [
      4650,
      4651
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4651,
    "end": 4652,
    "range": [
      4651,
      4652
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4653,
    "end": 4654,
    "range": [
      4653,
      4654
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4655,
    "end": 4656,
    "range": [
      4655,
      4656
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4656,
    "end": 4661,
    "range": [
      4656,
      4661
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4662,
    "end": 4663,
    "range": [
      4662,
      4663
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4664,
    "end": 4671,
    "range": [
      4664,
      4671
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 4672,
    "end": 4677,
    "range": [
      4672,
      4677
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4678,
    "end": 4679,
    "range": [
      4678,
      4679
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4680,
    "end": 4681,
    "range": [
      4680,
      4681
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 4682,
    "end": 4684,
    "range": [
      4682,
      4684
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4684,
    "end": 4685,
    "range": [
      4684,
      4685
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4685,
    "end": 4686,
    "range": [
      4685,
      4686
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4687,
    "end": 4693,
    "range": [
      4687,
      4693
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4694,
    "end": 4695,
    "range": [
      4694,
      4695
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4696,
    "end": 4702,
    "range": [
      4696,
      4702
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4703,
    "end": 4704,
    "range": [
      4703,
      4704
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4705,
    "end": 4706,
    "range": [
      4705,
      4706
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4707,
    "end": 4708,
    "range": [
      4707,
      4708
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 4709,
    "end": 4711,
    "range": [
      4709,
      4711
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4711,
    "end": 4712,
    "range": [
      4711,
      4712
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4713,
    "end": 4714,
    "range": [
      4713,
      4714
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4715,
    "end": 4716,
    "range": [
      4715,
      4716
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4716,
    "end": 4717,
    "range": [
      4716,
      4717
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 4718,
    "end": 4719,
    "range": [
      4718,
      4719
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4720,
    "end": 4721,
    "range": [
      4720,
      4721
    ]
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 4722,
    "end": 4727,
    "range": [
      4722,
      4727
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4727,
    "end": 4728,
    "range": [
      4727,
      4728
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4728,
    "end": 4729,
    "range": [
      4728,
      4729
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4730,
    "end": 4736,
    "range": [
      4730,
      4736
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4736,
    "end": 4737,
    "range": [
      4736,
      4737
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4738,
    "end": 4739,
    "range": [
      4738,
      4739
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4741,
    "end": 4749,
    "range": [
      4741,
      4749
    ]
  },
  {
    "type": "Identifier",
    "value": "getColumnProperty",
    "start": 4750,
    "end": 4767,
    "range": [
      4750,
      4767
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4767,
    "end": 4768,
    "range": [
      4767,
      4768
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4768,
    "end": 4769,
    "range": [
      4768,
      4769
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4769,
    "end": 4770,
    "range": [
      4769,
      4770
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4770,
    "end": 4771,
    "range": [
      4770,
      4771
    ]
  },
  {
    "type": "Identifier",
    "value": "column",
    "start": 4771,
    "end": 4777,
    "range": [
      4771,
      4777
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4777,
    "end": 4778,
    "range": [
      4777,
      4778
    ]
  },
  {
    "type": "Identifier",
    "value": "Column",
    "start": 4779,
    "end": 4785,
    "range": [
      4779,
      4785
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4785,
    "end": 4786,
    "range": [
      4785,
      4786
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4786,
    "end": 4787,
    "range": [
      4786,
      4787
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4787,
    "end": 4788,
    "range": [
      4787,
      4788
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4788,
    "end": 4789,
    "range": [
      4788,
      4789
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4790,
    "end": 4793,
    "range": [
      4790,
      4793
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4793,
    "end": 4794,
    "range": [
      4793,
      4794
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 4795,
    "end": 4800,
    "range": [
      4795,
      4800
    ]
  },
  {
    "type": "Identifier",
    "value": "Column",
    "start": 4801,
    "end": 4807,
    "range": [
      4801,
      4807
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4807,
    "end": 4808,
    "range": [
      4807,
      4808
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 4808,
    "end": 4809,
    "range": [
      4808,
      4809
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4809,
    "end": 4810,
    "range": [
      4809,
      4810
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4810,
    "end": 4811,
    "range": [
      4810,
      4811
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4812,
    "end": 4813,
    "range": [
      4812,
      4813
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4816,
    "end": 4822,
    "range": [
      4816,
      4822
    ]
  },
  {
    "type": "Identifier",
    "value": "column",
    "start": 4823,
    "end": 4829,
    "range": [
      4823,
      4829
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4829,
    "end": 4830,
    "range": [
      4829,
      4830
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 4830,
    "end": 4833,
    "range": [
      4830,
      4833
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4833,
    "end": 4834,
    "range": [
      4833,
      4834
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4834,
    "end": 4835,
    "range": [
      4834,
      4835
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4836,
    "end": 4837,
    "range": [
      4836,
      4837
    ]
  }
]
```
