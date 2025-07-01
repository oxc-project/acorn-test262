__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 33
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 35,
                "end": 41
              },
              "start": 33,
              "end": 41
            },
            "accessibility": null,
            "static": false,
            "start": 32,
            "end": 41
          }
        ],
        "start": 31,
        "end": 42
      },
      "declare": false,
      "start": 22,
      "end": 42
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
            "name": "flowtypes",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 59
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 63,
                    "end": 64
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 63,
                  "end": 64
                }
              ],
              "start": 62,
              "end": 65
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
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
                      "start": 69,
                      "end": 70
                    },
                    "typeArguments": null,
                    "start": 69,
                    "end": 70
                  },
                  "start": 67,
                  "end": 70
                },
                "start": 66,
                "end": 70
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "TSTypeAliasDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Combined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 84,
                    "end": 92
                  },
                  "typeParameters": null,
                  "typeAnnotation": {
                    "type": "TSIntersectionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 95,
                          "end": 96
                        },
                        "typeArguments": null,
                        "start": 95,
                        "end": 96
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 99,
                          "end": 100
                        },
                        "typeArguments": null,
                        "start": 99,
                        "end": 100
                      }
                    ],
                    "start": 95,
                    "end": 100
                  },
                  "declare": false,
                  "start": 79,
                  "end": 100
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
                        "name": "combined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 110,
                        "end": 118
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "combined",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Combined",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 137,
                                          "end": 145
                                        },
                                        "typeArguments": null,
                                        "start": 137,
                                        "end": 145
                                      },
                                      "start": 135,
                                      "end": 145
                                    },
                                    "start": 127,
                                    "end": 145
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 150,
                                    "end": 154
                                  },
                                  "start": 147,
                                  "end": 154
                                },
                                "start": 126,
                                "end": 154
                              },
                              "start": 124,
                              "end": 154
                            },
                            "start": 122,
                            "end": 154
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 159,
                          "end": 163
                        },
                        "id": null,
                        "generator": false,
                        "start": 121,
                        "end": 163
                      },
                      "definite": false,
                      "start": 110,
                      "end": 163
                    }
                  ],
                  "declare": false,
                  "start": 104,
                  "end": 163
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
                        "name": "literal",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 179
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "aPlusB",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSIntersectionType",
                                        "types": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "A",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 196,
                                              "end": 197
                                            },
                                            "typeArguments": null,
                                            "start": 196,
                                            "end": 197
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "B",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 200,
                                              "end": 201
                                            },
                                            "typeArguments": null,
                                            "start": 200,
                                            "end": 201
                                          }
                                        ],
                                        "start": 196,
                                        "end": 201
                                      },
                                      "start": 194,
                                      "end": 201
                                    },
                                    "start": 188,
                                    "end": 201
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 206,
                                    "end": 210
                                  },
                                  "start": 203,
                                  "end": 210
                                },
                                "start": 187,
                                "end": 210
                              },
                              "start": 185,
                              "end": 210
                            },
                            "start": 183,
                            "end": 210
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 215,
                          "end": 219
                        },
                        "id": null,
                        "generator": false,
                        "start": 182,
                        "end": 219
                      },
                      "definite": false,
                      "start": 172,
                      "end": 219
                    }
                  ],
                  "declare": false,
                  "start": 166,
                  "end": 219
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "combined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 239
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "combined",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 231,
                          "end": 239
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 231,
                        "end": 239
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "literal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 241,
                          "end": 248
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "literal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 241,
                          "end": 248
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 241,
                        "end": 248
                      }
                    ],
                    "start": 230,
                    "end": 249
                  },
                  "start": 223,
                  "end": 249
                }
              ],
              "start": 75,
              "end": 251
            },
            "id": null,
            "generator": false,
            "start": 62,
            "end": 251
          },
          "definite": false,
          "start": 50,
          "end": 251
        }
      ],
      "declare": false,
      "start": 44,
      "end": 251
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "combined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 268
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "combined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 268
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 260,
                "end": 268
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "literal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 277
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "literal",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 277
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 270,
                "end": 277
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 259,
            "end": 278
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "flowtypes",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 290
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
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
                        "start": 292,
                        "end": 293
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 295,
                          "end": 301
                        },
                        "start": 293,
                        "end": 301
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 292,
                      "end": 301
                    }
                  ],
                  "start": 291,
                  "end": 302
                }
              ],
              "start": 290,
              "end": 303
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 305,
                      "end": 306
                    },
                    "value": {
                      "type": "Literal",
                      "value": "b-value",
                      "raw": "'b-value'",
                      "start": 308,
                      "end": 317
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 305,
                    "end": 317
                  }
                ],
                "start": 304,
                "end": 318
              }
            ],
            "optional": false,
            "start": 281,
            "end": 319
          },
          "definite": false,
          "start": 259,
          "end": 319
        }
      ],
      "declare": false,
      "start": 253,
      "end": 319
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "literal",
          "optional": false,
          "typeAnnotation": null,
          "start": 321,
          "end": 328
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "aPlusB",
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 335
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
                      "name": "aPlusB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 343,
                      "end": 349
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 351
                    },
                    "optional": false,
                    "computed": false,
                    "start": 343,
                    "end": 351
                  },
                  "directive": null,
                  "start": 343,
                  "end": 351
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "aPlusB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 354,
                      "end": 360
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 361,
                      "end": 362
                    },
                    "optional": false,
                    "computed": false,
                    "start": 354,
                    "end": 362
                  },
                  "directive": null,
                  "start": 354,
                  "end": 362
                }
              ],
              "start": 339,
              "end": 364
            },
            "id": null,
            "generator": false,
            "start": 329,
            "end": 364
          }
        ],
        "optional": false,
        "start": 321,
        "end": 365
      },
      "directive": null,
      "start": 321,
      "end": 365
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "combined",
          "optional": false,
          "typeAnnotation": null,
          "start": 367,
          "end": 375
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "comb",
                "optional": false,
                "typeAnnotation": null,
                "start": 376,
                "end": 380
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
                      "name": "comb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 388,
                      "end": 392
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 393,
                      "end": 394
                    },
                    "optional": false,
                    "computed": false,
                    "start": 388,
                    "end": 394
                  },
                  "directive": null,
                  "start": 388,
                  "end": 394
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "comb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 401
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 402,
                      "end": 403
                    },
                    "optional": false,
                    "computed": false,
                    "start": 397,
                    "end": 403
                  },
                  "directive": null,
                  "start": 397,
                  "end": 403
                }
              ],
              "start": 384,
              "end": 405
            },
            "id": null,
            "generator": false,
            "start": 376,
            "end": 405
          }
        ],
        "optional": false,
        "start": 367,
        "end": 406
      },
      "directive": null,
      "start": 367,
      "end": 406
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 447,
        "end": 448
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
              "start": 449,
              "end": 450
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 449,
            "end": 450
          }
        ],
        "start": 448,
        "end": 451
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                "start": 455,
                "end": 456
              },
              "typeArguments": null,
              "start": 455,
              "end": 456
            },
            "start": 453,
            "end": 456
          },
          "start": 452,
          "end": 456
        }
      ],
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
                "start": 461,
                "end": 462
              },
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
                    "start": 471,
                    "end": 472
                  },
                  "typeArguments": null,
                  "start": 464,
                  "end": 472
                },
                "start": 462,
                "end": 472
              },
              "accessibility": null,
              "static": false,
              "start": 461,
              "end": 472
            }
          ],
          "start": 459,
          "end": 474
        },
        "start": 457,
        "end": 474
      },
      "body": null,
      "expression": false,
      "start": 430,
      "end": 475
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 483,
                "end": 489
              },
              "start": 481,
              "end": 489
            },
            "start": 480,
            "end": 489
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 492,
                "end": 493
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 494,
                  "end": 495
                }
              ],
              "optional": false,
              "start": 492,
              "end": 496
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 498
            },
            "optional": false,
            "computed": false,
            "start": 492,
            "end": 498
          },
          "definite": false,
          "start": 480,
          "end": 498
        }
      ],
      "declare": false,
      "start": 476,
      "end": 499
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 499
}
```
