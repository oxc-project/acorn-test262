__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 10
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 15,
                  "end": 16
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 18,
                  "end": 19
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 15,
                "end": 19
              }
            ],
            "start": 13,
            "end": 21
          },
          "definite": false,
          "start": 6,
          "end": 21
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
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
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 33
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
                "name": "s",
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
                          "start": 42,
                          "end": 43
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 45,
                              "end": 49
                            },
                            "start": 45,
                            "end": 49
                          },
                          "start": 43,
                          "end": 49
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 42,
                        "end": 49
                      }
                    ],
                    "start": 40,
                    "end": 51
                  },
                  "start": 38,
                  "end": 51
                },
                "start": 37,
                "end": 51
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 56,
              "end": 58
            },
            "id": null,
            "generator": false,
            "start": 36,
            "end": 58
          },
          "definite": false,
          "start": 30,
          "end": 58
        }
      ],
      "declare": false,
      "start": 24,
      "end": 59
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 60,
          "end": 63
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 64,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 77,
              "end": 84
            },
            "start": 64,
            "end": 84
          }
        ],
        "optional": false,
        "start": 60,
        "end": 85
      },
      "directive": null,
      "start": 60,
      "end": 86
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 90
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 93,
                    "end": 94
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 96,
                    "end": 97
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 93,
                  "end": 97
                }
              ],
              "start": 91,
              "end": 99
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 110,
              "end": 117
            },
            "start": 91,
            "end": 117
          }
        ],
        "optional": false,
        "start": 87,
        "end": 118
      },
      "directive": null,
      "start": 87,
      "end": 119
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null,
          "start": 120,
          "end": 123
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 139,
              "end": 146
            },
            "start": 124,
            "end": 146
          }
        ],
        "optional": false,
        "start": 120,
        "end": 147
      },
      "directive": null,
      "start": 120,
      "end": 148
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cls1",
        "optional": false,
        "typeAnnotation": null,
        "start": 156,
        "end": 160
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
              "start": 165,
              "end": 176
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
                  "name": "p",
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
                            "start": 182,
                            "end": 183
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": true,
                                "raw": "true",
                                "start": 185,
                                "end": 189
                              },
                              "start": 185,
                              "end": 189
                            },
                            "start": 183,
                            "end": 189
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 182,
                          "end": 189
                        }
                      ],
                      "start": 180,
                      "end": 191
                    },
                    "start": 178,
                    "end": 191
                  },
                  "start": 177,
                  "end": 191
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 193,
                "end": 195
              },
              "expression": false,
              "start": 176,
              "end": 195
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 165,
            "end": 195
          }
        ],
        "start": 161,
        "end": 197
      },
      "abstract": false,
      "declare": false,
      "start": 150,
      "end": 197
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls1",
          "optional": false,
          "typeAnnotation": null,
          "start": 202,
          "end": 206
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 207,
              "end": 209
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 220,
              "end": 227
            },
            "start": 207,
            "end": 227
          }
        ],
        "start": 198,
        "end": 228
      },
      "directive": null,
      "start": 198,
      "end": 229
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls1",
          "optional": false,
          "typeAnnotation": null,
          "start": 234,
          "end": 238
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 241,
                    "end": 242
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 244,
                    "end": 245
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 241,
                  "end": 245
                }
              ],
              "start": 239,
              "end": 247
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 258,
              "end": 265
            },
            "start": 239,
            "end": 265
          }
        ],
        "start": 230,
        "end": 266
      },
      "directive": null,
      "start": 230,
      "end": 267
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Cls1",
          "optional": false,
          "typeAnnotation": null,
          "start": 272,
          "end": 276
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 277,
              "end": 281
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 292,
              "end": 299
            },
            "start": 277,
            "end": 299
          }
        ],
        "start": 268,
        "end": 300
      },
      "directive": null,
      "start": 268,
      "end": 301
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null,
        "start": 312,
        "end": 315
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
              "start": 316,
              "end": 317
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
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
                      "start": 328,
                      "end": 329
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 331,
                          "end": 335
                        },
                        "start": 331,
                        "end": 335
                      },
                      "start": 329,
                      "end": 335
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 328,
                    "end": 335
                  }
                ],
                "start": 326,
                "end": 337
              },
              "start": 326,
              "end": 339
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 316,
            "end": 339
          }
        ],
        "start": 315,
        "end": 340
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
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
                    "start": 348,
                    "end": 352
                  },
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
                        "start": 354,
                        "end": 355
                      },
                      "typeArguments": null,
                      "start": 354,
                      "end": 355
                    },
                    "start": 352,
                    "end": 355
                  },
                  "value": null,
                  "start": 345,
                  "end": 355
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 360,
                  "end": 364
                },
                "start": 357,
                "end": 364
              },
              "start": 344,
              "end": 364
            },
            "start": 342,
            "end": 364
          },
          "start": 341,
          "end": 364
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
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 371
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 374,
                          "end": 375
                        },
                        "value": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 377,
                          "end": 381
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 374,
                        "end": 381
                      }
                    ],
                    "start": 372,
                    "end": 383
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 394,
                    "end": 401
                  },
                  "start": 372,
                  "end": 401
                }
              ],
              "optional": false,
              "start": 370,
              "end": 402
            },
            "directive": null,
            "start": 370,
            "end": 403
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
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 412,
                  "end": 413
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 418,
                        "end": 419
                      },
                      "value": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "Literal",
                          "value": true,
                          "raw": "true",
                          "start": 421,
                          "end": 425
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 429,
                            "end": 434
                          },
                          "typeArguments": null,
                          "start": 429,
                          "end": 434
                        },
                        "start": 421,
                        "end": 434
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 418,
                      "end": 434
                    }
                  ],
                  "start": 416,
                  "end": 436
                },
                "definite": false,
                "start": 412,
                "end": 436
              }
            ],
            "declare": false,
            "start": 406,
            "end": 437
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 440,
                "end": 441
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 442,
                    "end": 443
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 454,
                    "end": 461
                  },
                  "start": 442,
                  "end": 461
                }
              ],
              "optional": false,
              "start": 440,
              "end": 462
            },
            "directive": null,
            "start": 440,
            "end": 463
          }
        ],
        "start": 366,
        "end": 465
      },
      "expression": false,
      "start": 303,
      "end": 465
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
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 482,
                    "end": 489
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 491,
                    "end": 498
                  }
                ],
                "start": 481,
                "end": 499
              },
              "start": 479,
              "end": 499
            },
            "start": 473,
            "end": 499
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 503,
                "end": 507
              },
              {
                "type": "TSSatisfiesExpression",
                "expression": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 509,
                  "end": 512
                },
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 523,
                  "end": 530
                },
                "start": 509,
                "end": 530
              }
            ],
            "start": 502,
            "end": 531
          },
          "definite": false,
          "start": 473,
          "end": 531
        }
      ],
      "declare": false,
      "start": 467,
      "end": 532
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
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null,
            "start": 540,
            "end": 544
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 549,
                    "end": 550
                  },
                  "value": {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 552,
                    "end": 554
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 549,
                  "end": 554
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 556,
                    "end": 557
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 559,
                    "end": 563
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 556,
                  "end": 563
                }
              ],
              "start": 547,
              "end": 565
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 582
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 583,
                    "end": 589
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 591,
                    "end": 597
                  }
                ],
                "start": 582,
                "end": 598
              },
              "start": 576,
              "end": 598
            },
            "start": 547,
            "end": 598
          },
          "definite": false,
          "start": 540,
          "end": 598
        }
      ],
      "declare": false,
      "start": 534,
      "end": 599
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
            "name": "literal1",
            "optional": false,
            "typeAnnotation": null,
            "start": 607,
            "end": 615
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 618,
              "end": 619
            },
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 630,
              "end": 637
            },
            "start": 618,
            "end": 637
          },
          "definite": false,
          "start": 607,
          "end": 637
        }
      ],
      "declare": false,
      "start": 601,
      "end": 638
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
            "name": "literal2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 655,
                  "end": 659
                },
                "start": 655,
                "end": 659
              },
              "start": 653,
              "end": 659
            },
            "start": 645,
            "end": 659
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 662,
              "end": 663
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 674,
              "end": 680
            },
            "start": 662,
            "end": 680
          },
          "definite": false,
          "start": 645,
          "end": 680
        }
      ],
      "declare": false,
      "start": 639,
      "end": 681
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null,
        "start": 700,
        "end": 703
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
            "start": 707,
            "end": 711
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 713,
                "end": 720
              },
              "start": 713,
              "end": 722
            },
            "start": 711,
            "end": 722
          },
          "value": null,
          "start": 704,
          "end": 722
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 725,
          "end": 729
        },
        "start": 723,
        "end": 729
      },
      "body": null,
      "expression": false,
      "start": 683,
      "end": 730
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 731,
          "end": 734
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 735,
            "end": 737
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 10,
                    "raw": "10",
                    "start": 744,
                    "end": 746
                  },
                  {
                    "type": "Literal",
                    "value": "20",
                    "raw": "\"20\"",
                    "start": 748,
                    "end": 752
                  }
                ],
                "start": 743,
                "end": 753
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 764,
                  "end": 770
                },
                "start": 764,
                "end": 772
              },
              "start": 743,
              "end": 772
            },
            "start": 739,
            "end": 773
          }
        ],
        "optional": false,
        "start": 731,
        "end": 774
      },
      "directive": null,
      "start": 731,
      "end": 775
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
            "name": "tuple2",
            "optional": false,
            "typeAnnotation": null,
            "start": 782,
            "end": 788
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 792,
                  "end": 794
                },
                {
                  "type": "Literal",
                  "value": "20",
                  "raw": "\"20\"",
                  "start": 796,
                  "end": 800
                }
              ],
              "start": 791,
              "end": 801
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 805,
                "end": 810
              },
              "typeArguments": null,
              "start": 805,
              "end": 810
            },
            "start": 791,
            "end": 810
          },
          "definite": false,
          "start": 782,
          "end": 810
        }
      ],
      "declare": false,
      "start": 776,
      "end": 811
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null,
          "start": 812,
          "end": 815
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 816,
            "end": 818
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "tuple2",
                "optional": false,
                "typeAnnotation": null,
                "start": 824,
                "end": 830
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 841,
                  "end": 847
                },
                "start": 841,
                "end": 849
              },
              "start": 824,
              "end": 849
            },
            "start": 820,
            "end": 850
          }
        ],
        "optional": false,
        "start": 812,
        "end": 851
      },
      "directive": null,
      "start": 812,
      "end": 852
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null,
        "start": 871,
        "end": 874
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
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
            "start": 878,
            "end": 882
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 884,
                "end": 890
              },
              "start": 884,
              "end": 892
            },
            "start": 882,
            "end": 892
          },
          "value": null,
          "start": 875,
          "end": 892
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 895,
          "end": 899
        },
        "start": 893,
        "end": 899
      },
      "body": null,
      "expression": false,
      "start": 854,
      "end": 900
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 901,
          "end": 904
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 905,
            "end": 907
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": "10",
                    "raw": "\"10\"",
                    "start": 914,
                    "end": 918
                  },
                  {
                    "type": "Literal",
                    "value": "20",
                    "raw": "\"20\"",
                    "start": 920,
                    "end": 924
                  }
                ],
                "start": 913,
                "end": 925
              },
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 945,
                    "end": 951
                  },
                  "start": 945,
                  "end": 953
                },
                "start": 936,
                "end": 953
              },
              "start": 913,
              "end": 953
            },
            "start": 909,
            "end": 954
          }
        ],
        "optional": false,
        "start": 901,
        "end": 955
      },
      "directive": null,
      "start": 901,
      "end": 956
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
            "name": "tuple3",
            "optional": false,
            "typeAnnotation": null,
            "start": 963,
            "end": 969
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": "10",
                  "raw": "\"10\"",
                  "start": 973,
                  "end": 977
                },
                {
                  "type": "Literal",
                  "value": "20",
                  "raw": "\"20\"",
                  "start": 979,
                  "end": 983
                }
              ],
              "start": 972,
              "end": 984
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null,
                "start": 988,
                "end": 993
              },
              "typeArguments": null,
              "start": 988,
              "end": 993
            },
            "start": 972,
            "end": 993
          },
          "definite": false,
          "start": 963,
          "end": 993
        }
      ],
      "declare": false,
      "start": 957,
      "end": 994
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null,
          "start": 995,
          "end": 998
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 999,
            "end": 1001
          },
          {
            "type": "SpreadElement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "tuple3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1007,
                "end": 1013
              },
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 1033,
                    "end": 1039
                  },
                  "start": 1033,
                  "end": 1041
                },
                "start": 1024,
                "end": 1041
              },
              "start": 1007,
              "end": 1041
            },
            "start": 1003,
            "end": 1042
          }
        ],
        "optional": false,
        "start": 995,
        "end": 1043
      },
      "directive": null,
      "start": 995,
      "end": 1044
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1055,
        "end": 1058
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1062,
          "end": 1068
        },
        "start": 1060,
        "end": 1068
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 1080,
                "end": 1085
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 1096,
                "end": 1103
              },
              "start": 1080,
              "end": 1103
            },
            "start": 1073,
            "end": 1104
          }
        ],
        "start": 1069,
        "end": 1106
      },
      "expression": false,
      "start": 1046,
      "end": 1106
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "typeAnnotation": null,
        "start": 1117,
        "end": 1120
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1124,
          "end": 1130
        },
        "start": 1122,
        "end": 1130
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 1142,
                "end": 1147
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1158,
                "end": 1164
              },
              "start": 1142,
              "end": 1164
            },
            "start": 1135,
            "end": 1165
          }
        ],
        "start": 1131,
        "end": 1167
      },
      "expression": false,
      "start": 1108,
      "end": 1167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": {
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
                    "start": 1176,
                    "end": 1177
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1179,
                        "end": 1183
                      },
                      "start": 1179,
                      "end": 1183
                    },
                    "start": 1177,
                    "end": 1183
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1176,
                  "end": 1183
                }
              ],
              "start": 1174,
              "end": 1185
            },
            "start": 1172,
            "end": 1185
          },
          "body": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 1190,
              "end": 1192
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1204,
              "end": 1211
            },
            "start": 1189,
            "end": 1211
          },
          "id": null,
          "generator": false,
          "start": 1170,
          "end": 1211
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1169,
        "end": 1214
      },
      "directive": null,
      "start": 1169,
      "end": 1215
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": {
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
                    "start": 1223,
                    "end": 1224
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1226,
                        "end": 1230
                      },
                      "start": 1226,
                      "end": 1230
                    },
                    "start": 1224,
                    "end": 1230
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1223,
                  "end": 1230
                }
              ],
              "start": 1221,
              "end": 1232
            },
            "start": 1219,
            "end": 1232
          },
          "body": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1239,
                    "end": 1240
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1242,
                    "end": 1243
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1239,
                  "end": 1243
                }
              ],
              "start": 1237,
              "end": 1245
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1257,
              "end": 1264
            },
            "start": 1236,
            "end": 1264
          },
          "id": null,
          "generator": false,
          "start": 1217,
          "end": 1264
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1216,
        "end": 1267
      },
      "directive": null,
      "start": 1216,
      "end": 1268
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": {
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
                    "start": 1276,
                    "end": 1277
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1279,
                        "end": 1283
                      },
                      "start": 1279,
                      "end": 1283
                    },
                    "start": 1277,
                    "end": 1283
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1276,
                  "end": 1283
                }
              ],
              "start": 1274,
              "end": 1285
            },
            "start": 1272,
            "end": 1285
          },
          "body": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1289,
              "end": 1293
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1304,
              "end": 1311
            },
            "start": 1289,
            "end": 1311
          },
          "id": null,
          "generator": false,
          "start": 1270,
          "end": 1311
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1269,
        "end": 1314
      },
      "directive": null,
      "start": 1269,
      "end": 1315
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": {
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
                    "start": 1324,
                    "end": 1325
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1327,
                        "end": 1331
                      },
                      "start": 1327,
                      "end": 1331
                    },
                    "start": 1325,
                    "end": 1331
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1324,
                  "end": 1331
                }
              ],
              "start": 1322,
              "end": 1333
            },
            "start": 1320,
            "end": 1333
          },
          "body": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1339,
                "end": 1341
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 1353,
                "end": 1360
              },
              "start": 1338,
              "end": 1360
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1372,
              "end": 1379
            },
            "start": 1337,
            "end": 1379
          },
          "id": null,
          "generator": false,
          "start": 1318,
          "end": 1379
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1317,
        "end": 1382
      },
      "directive": null,
      "start": 1317,
      "end": 1383
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": {
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
                    "start": 1391,
                    "end": 1392
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 1394,
                        "end": 1398
                      },
                      "start": 1394,
                      "end": 1398
                    },
                    "start": 1392,
                    "end": 1398
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1391,
                  "end": 1398
                }
              ],
              "start": 1389,
              "end": 1400
            },
            "start": 1387,
            "end": 1400
          },
          "body": {
            "type": "TSSatisfiesExpression",
            "expression": {
              "type": "TSSatisfiesExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1407,
                "end": 1409
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 1421,
                "end": 1428
              },
              "start": 1406,
              "end": 1428
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1441,
              "end": 1448
            },
            "start": 1404,
            "end": 1448
          },
          "id": null,
          "generator": false,
          "start": 1385,
          "end": 1448
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 1384,
        "end": 1451
      },
      "directive": null,
      "start": 1384,
      "end": 1452
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1452
}
```
