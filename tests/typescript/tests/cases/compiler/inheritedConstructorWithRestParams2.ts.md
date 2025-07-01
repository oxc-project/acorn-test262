__ESTREE_TEST__:PASS:
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
        "name": "IBaseBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 15
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
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 15,
        "end": 21
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 39
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
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 43,
                        "end": 44
                      },
                      "typeArguments": null,
                      "start": 43,
                      "end": 44
                    },
                    "start": 41,
                    "end": 44
                  },
                  "start": 40,
                  "end": 44
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 46,
                "end": 49
              },
              "expression": false,
              "start": 39,
              "end": 49
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 28,
            "end": 49
          }
        ],
        "start": 22,
        "end": 51
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 51
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 68
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
              "start": 69,
              "end": 70
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 69,
            "end": 70
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 73
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 72,
            "end": 73
          }
        ],
        "start": 68,
        "end": 74
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IBaseBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 83,
            "end": 92
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
                  "start": 93,
                  "end": 94
                },
                "typeArguments": null,
                "start": 93,
                "end": 94
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 96,
                  "end": 97
                },
                "typeArguments": null,
                "start": 96,
                "end": 97
              }
            ],
            "start": 92,
            "end": 98
          },
          "start": 83,
          "end": 98
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 99,
        "end": 102
      },
      "declare": false,
      "start": 53,
      "end": 102
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseBase2",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 119
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 137
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
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 149,
                "end": 152
              },
              "expression": false,
              "start": 137,
              "end": 152
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 126,
            "end": 152
          }
        ],
        "start": 120,
        "end": 154
      },
      "abstract": false,
      "declare": false,
      "start": 104,
      "end": 154
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 178
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
              "start": 179,
              "end": 180
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 179,
            "end": 180
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 183
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 182,
            "end": 183
          }
        ],
        "start": 178,
        "end": 184
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseBase2",
        "optional": false,
        "typeAnnotation": null,
        "start": 193,
        "end": 202
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "IBase",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 219
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
                  "start": 220,
                  "end": 221
                },
                "typeArguments": null,
                "start": 220,
                "end": 221
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 224
                },
                "typeArguments": null,
                "start": 223,
                "end": 224
              }
            ],
            "start": 219,
            "end": 225
          },
          "start": 214,
          "end": 225
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 232,
              "end": 243
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
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
                        "start": 247,
                        "end": 248
                      },
                      "typeArguments": null,
                      "start": 247,
                      "end": 248
                    },
                    "start": 245,
                    "end": 248
                  },
                  "start": 244,
                  "end": 248
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 254
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 256,
                          "end": 257
                        },
                        "typeArguments": null,
                        "start": 256,
                        "end": 257
                      },
                      "start": 256,
                      "end": 259
                    },
                    "start": 254,
                    "end": 259
                  },
                  "value": null,
                  "start": 250,
                  "end": 259
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 243,
              "end": 261
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 232,
            "end": 261
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 277
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
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
                        "start": 282,
                        "end": 283
                      },
                      "typeArguments": null,
                      "start": 282,
                      "end": 283
                    },
                    "start": 280,
                    "end": 283
                  },
                  "start": 278,
                  "end": 283
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
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
                        "start": 289,
                        "end": 290
                      },
                      "typeArguments": null,
                      "start": 289,
                      "end": 290
                    },
                    "start": 287,
                    "end": 290
                  },
                  "start": 285,
                  "end": 290
                },
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 295,
                    "end": 296
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 298,
                          "end": 299
                        },
                        "typeArguments": null,
                        "start": 298,
                        "end": 299
                      },
                      "start": 298,
                      "end": 301
                    },
                    "start": 296,
                    "end": 301
                  },
                  "value": null,
                  "start": 292,
                  "end": 301
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 277,
              "end": 303
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 266,
            "end": 303
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 319
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x1",
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
                        "start": 324,
                        "end": 325
                      },
                      "typeArguments": null,
                      "start": 324,
                      "end": 325
                    },
                    "start": 322,
                    "end": 325
                  },
                  "start": 320,
                  "end": 325
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 331,
                        "end": 332
                      },
                      "typeArguments": null,
                      "start": 331,
                      "end": 332
                    },
                    "start": 329,
                    "end": 332
                  },
                  "start": 327,
                  "end": 332
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
                        "start": 337,
                        "end": 338
                      },
                      "typeArguments": null,
                      "start": 337,
                      "end": 338
                    },
                    "start": 335,
                    "end": 338
                  },
                  "start": 334,
                  "end": 338
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 319,
              "end": 340
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 308,
            "end": 340
          }
        ],
        "start": 226,
        "end": 342
      },
      "abstract": false,
      "declare": true,
      "start": 156,
      "end": 342
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 350,
        "end": 354
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 363,
        "end": 371
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSStringKeyword",
            "start": 372,
            "end": 378
          },
          {
            "type": "TSNumberKeyword",
            "start": 380,
            "end": 386
          }
        ],
        "start": 371,
        "end": 387
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 388,
        "end": 391
      },
      "abstract": false,
      "declare": false,
      "start": 344,
      "end": 391
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 399,
        "end": 406
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 419
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 420,
        "end": 423
      },
      "abstract": false,
      "declare": false,
      "start": 393,
      "end": 423
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null,
          "start": 435,
          "end": 442
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 443,
            "end": 445
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 447,
            "end": 449
          }
        ],
        "start": 431,
        "end": 450
      },
      "directive": null,
      "start": 431,
      "end": 451
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null,
          "start": 456,
          "end": 463
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 464,
            "end": 466
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 468,
            "end": 469
          }
        ],
        "start": 452,
        "end": 470
      },
      "directive": null,
      "start": 452,
      "end": 471
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null,
          "start": 476,
          "end": 483
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 484,
            "end": 486
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 488,
            "end": 489
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 491,
            "end": 492
          }
        ],
        "start": 472,
        "end": 493
      },
      "directive": null,
      "start": 472,
      "end": 494
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null,
          "start": 499,
          "end": 506
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 507,
            "end": 509
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 511,
            "end": 512
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 514,
            "end": 515
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 517,
            "end": 518
          }
        ],
        "start": 495,
        "end": 519
      },
      "directive": null,
      "start": 495,
      "end": 520
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null,
          "start": 525,
          "end": 532
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 533,
            "end": 535
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 537,
            "end": 538
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 540,
            "end": 542
          }
        ],
        "start": 521,
        "end": 543
      },
      "directive": null,
      "start": 521,
      "end": 544
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null,
          "start": 549,
          "end": 556
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 557,
            "end": 559
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 561,
            "end": 563
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 565,
            "end": 566
          }
        ],
        "start": 545,
        "end": 567
      },
      "directive": null,
      "start": 545,
      "end": 568
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null,
          "start": 573,
          "end": 580
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 581,
            "end": 583
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 585,
            "end": 587
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 589,
            "end": 590
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 592,
            "end": 593
          }
        ],
        "start": 569,
        "end": 594
      },
      "directive": null,
      "start": 569,
      "end": 595
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null,
          "start": 611,
          "end": 618
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 619,
            "end": 620
          }
        ],
        "start": 607,
        "end": 621
      },
      "directive": null,
      "start": 607,
      "end": 622
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null,
          "start": 627,
          "end": 634
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 635,
            "end": 637
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 639,
            "end": 640
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 642,
            "end": 644
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 646,
            "end": 647
          }
        ],
        "start": 623,
        "end": 648
      },
      "directive": null,
      "start": 623,
      "end": 649
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Derived",
          "optional": false,
          "typeAnnotation": null,
          "start": 654,
          "end": 661
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 662,
            "end": 664
          },
          {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 666,
            "end": 667
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 669,
            "end": 671
          },
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 673,
            "end": 675
          }
        ],
        "start": 650,
        "end": 676
      },
      "directive": null,
      "start": 650,
      "end": 677
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 677
}
```
