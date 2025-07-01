__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "callIt",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 46
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
              "start": 47,
              "end": 48
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 47,
            "end": 48
          }
        ],
        "start": 46,
        "end": 49
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
                    "name": "produce",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 61,
                    "end": 68
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 74,
                              "end": 80
                            },
                            "start": 72,
                            "end": 80
                          },
                          "start": 71,
                          "end": 80
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
                            "start": 85,
                            "end": 86
                          },
                          "typeArguments": null,
                          "start": 85,
                          "end": 86
                        },
                        "start": 82,
                        "end": 86
                      },
                      "start": 70,
                      "end": 86
                    },
                    "start": 68,
                    "end": 86
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 61,
                  "end": 87
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consume",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 92,
                    "end": 99
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                                "start": 105,
                                "end": 106
                              },
                              "typeArguments": null,
                              "start": 105,
                              "end": 106
                            },
                            "start": 103,
                            "end": 106
                          },
                          "start": 102,
                          "end": 106
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 111,
                          "end": 115
                        },
                        "start": 108,
                        "end": 115
                      },
                      "start": 101,
                      "end": 115
                    },
                    "start": 99,
                    "end": 115
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 92,
                  "end": 115
                }
              ],
              "start": 55,
              "end": 117
            },
            "start": 53,
            "end": 117
          },
          "start": 50,
          "end": 117
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 120,
          "end": 124
        },
        "start": 118,
        "end": 124
      },
      "body": null,
      "expression": false,
      "start": 23,
      "end": 125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "callIt",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 133
        },
        "typeArguments": null,
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
                  "name": "produce",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 140,
                  "end": 147
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 155,
                    "end": 156
                  },
                  "id": null,
                  "generator": false,
                  "start": 149,
                  "end": 156
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 140,
                "end": 156
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "consume",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 162,
                  "end": 169
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 172
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 176,
                        "end": 177
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 178,
                        "end": 185
                      },
                      "optional": false,
                      "computed": false,
                      "start": 176,
                      "end": 185
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 176,
                    "end": 187
                  },
                  "id": null,
                  "generator": false,
                  "start": 171,
                  "end": 187
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 162,
                "end": 187
              }
            ],
            "start": 134,
            "end": 189
          }
        ],
        "optional": false,
        "start": 127,
        "end": 190
      },
      "directive": null,
      "start": 127,
      "end": 191
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "callIt",
          "optional": false,
          "typeAnnotation": null,
          "start": 193,
          "end": 199
        },
        "typeArguments": null,
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
                  "name": "produce",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 213
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 215,
                      "end": 217
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 221,
                    "end": 222
                  },
                  "id": null,
                  "generator": false,
                  "start": 215,
                  "end": 222
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 206,
                "end": 222
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "consume",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 235
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 237,
                      "end": 238
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 242,
                        "end": 243
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 244,
                        "end": 251
                      },
                      "optional": false,
                      "computed": false,
                      "start": 242,
                      "end": 251
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 242,
                    "end": 253
                  },
                  "id": null,
                  "generator": false,
                  "start": 237,
                  "end": 253
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 228,
                "end": 253
              }
            ],
            "start": 200,
            "end": 256
          }
        ],
        "optional": false,
        "start": 193,
        "end": 257
      },
      "directive": null,
      "start": 193,
      "end": 258
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "callIt",
          "optional": false,
          "typeAnnotation": null,
          "start": 260,
          "end": 266
        },
        "typeArguments": null,
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
                  "name": "produce",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 280
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 300,
                          "end": 301
                        },
                        "start": 293,
                        "end": 302
                      }
                    ],
                    "start": 283,
                    "end": 308
                  },
                  "expression": false,
                  "start": 280,
                  "end": 308
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 273,
                "end": 308
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "consume",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 321
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 323,
                      "end": 324
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 328,
                        "end": 329
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 330,
                        "end": 337
                      },
                      "optional": false,
                      "computed": false,
                      "start": 328,
                      "end": 337
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 328,
                    "end": 339
                  },
                  "id": null,
                  "generator": false,
                  "start": 323,
                  "end": 339
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 314,
                "end": 339
              }
            ],
            "start": 267,
            "end": 341
          }
        ],
        "optional": false,
        "start": 260,
        "end": 342
      },
      "directive": null,
      "start": 260,
      "end": 343
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "callItT",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 369
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
              "start": 370,
              "end": 371
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 370,
            "end": 371
          }
        ],
        "start": 369,
        "end": 372
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
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 383,
                          "end": 389
                        },
                        "start": 381,
                        "end": 389
                      },
                      "start": 380,
                      "end": 389
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
                        "start": 394,
                        "end": 395
                      },
                      "typeArguments": null,
                      "start": 394,
                      "end": 395
                    },
                    "start": 391,
                    "end": 395
                  },
                  "start": 379,
                  "end": 395
                },
                {
                  "type": "TSFunctionType",
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
                            "start": 401,
                            "end": 402
                          },
                          "typeArguments": null,
                          "start": 401,
                          "end": 402
                        },
                        "start": 399,
                        "end": 402
                      },
                      "start": 398,
                      "end": 402
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 407,
                      "end": 411
                    },
                    "start": 404,
                    "end": 411
                  },
                  "start": 397,
                  "end": 411
                }
              ],
              "start": 378,
              "end": 412
            },
            "start": 376,
            "end": 412
          },
          "start": 373,
          "end": 412
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 415,
          "end": 419
        },
        "start": 413,
        "end": 419
      },
      "body": null,
      "expression": false,
      "start": 345,
      "end": 420
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "callItT",
          "optional": false,
          "typeAnnotation": null,
          "start": 422,
          "end": 429
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 437,
                  "end": 438
                },
                "id": null,
                "generator": false,
                "start": 431,
                "end": 438
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 441
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 446
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toFixed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 447,
                      "end": 454
                    },
                    "optional": false,
                    "computed": false,
                    "start": 445,
                    "end": 454
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 445,
                  "end": 456
                },
                "id": null,
                "generator": false,
                "start": 440,
                "end": 456
              }
            ],
            "start": 430,
            "end": 457
          }
        ],
        "optional": false,
        "start": 422,
        "end": 458
      },
      "directive": null,
      "start": 422,
      "end": 459
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "callItT",
          "optional": false,
          "typeAnnotation": null,
          "start": 460,
          "end": 467
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 469,
                    "end": 471
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 475,
                  "end": 476
                },
                "id": null,
                "generator": false,
                "start": 469,
                "end": 476
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 478,
                    "end": 479
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 483,
                      "end": 484
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toFixed",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 485,
                      "end": 492
                    },
                    "optional": false,
                    "computed": false,
                    "start": 483,
                    "end": 492
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 483,
                  "end": 494
                },
                "id": null,
                "generator": false,
                "start": 478,
                "end": 494
              }
            ],
            "start": 468,
            "end": 495
          }
        ],
        "optional": false,
        "start": 460,
        "end": 496
      },
      "directive": null,
      "start": 460,
      "end": 497
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyInterface",
        "optional": false,
        "typeAnnotation": null,
        "start": 531,
        "end": 542
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
              "start": 543,
              "end": 544
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 543,
            "end": 544
          }
        ],
        "start": 542,
        "end": 545
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
              "name": "retrieveGeneric",
              "optional": false,
              "typeAnnotation": null,
              "start": 552,
              "end": 567
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "parameter",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 581,
                        "end": 587
                      },
                      "start": 579,
                      "end": 587
                    },
                    "start": 570,
                    "end": 587
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
                      "start": 592,
                      "end": 593
                    },
                    "typeArguments": null,
                    "start": 592,
                    "end": 593
                  },
                  "start": 589,
                  "end": 593
                },
                "start": 569,
                "end": 593
              },
              "start": 567,
              "end": 593
            },
            "accessibility": null,
            "static": false,
            "start": 552,
            "end": 594
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "operateWithGeneric",
              "optional": false,
              "typeAnnotation": null,
              "start": 599,
              "end": 617
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "generic",
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
                          "start": 629,
                          "end": 630
                        },
                        "typeArguments": null,
                        "start": 629,
                        "end": 630
                      },
                      "start": 627,
                      "end": 630
                    },
                    "start": 620,
                    "end": 630
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 635,
                    "end": 641
                  },
                  "start": 632,
                  "end": 641
                },
                "start": 619,
                "end": 641
              },
              "start": 617,
              "end": 641
            },
            "accessibility": null,
            "static": false,
            "start": 599,
            "end": 641
          }
        ],
        "start": 546,
        "end": 643
      },
      "declare": false,
      "start": 521,
      "end": 643
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
            "name": "inferTypeFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 651,
            "end": 662
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
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
                    "start": 666,
                    "end": 667
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 666,
                  "end": 667
                }
              ],
              "start": 665,
              "end": 668
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "generic",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyInterface",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 678,
                      "end": 689
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
                            "start": 690,
                            "end": 691
                          },
                          "typeArguments": null,
                          "start": 690,
                          "end": 691
                        }
                      ],
                      "start": 689,
                      "end": 692
                    },
                    "start": 678,
                    "end": 692
                  },
                  "start": 676,
                  "end": 692
                },
                "start": 669,
                "end": 692
              }
            ],
            "returnType": null,
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "generic",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 704
            },
            "id": null,
            "generator": false,
            "start": 665,
            "end": 704
          },
          "definite": false,
          "start": 651,
          "end": 704
        }
      ],
      "declare": false,
      "start": 645,
      "end": 705
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
            "name": "myGeneric",
            "optional": false,
            "typeAnnotation": null,
            "start": 713,
            "end": 722
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "inferTypeFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 736
            },
            "typeArguments": null,
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
                      "name": "retrieveGeneric",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 743,
                      "end": 758
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "parameter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 760,
                          "end": 769
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 773,
                        "end": 774
                      },
                      "id": null,
                      "generator": false,
                      "start": 760,
                      "end": 774
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 743,
                    "end": 774
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "operateWithGeneric",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 780,
                      "end": 798
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "generic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 800,
                          "end": 807
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "generic",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 811,
                            "end": 818
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 819,
                            "end": 826
                          },
                          "optional": false,
                          "computed": false,
                          "start": 811,
                          "end": 826
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 811,
                        "end": 828
                      },
                      "id": null,
                      "generator": false,
                      "start": 800,
                      "end": 828
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 780,
                    "end": 828
                  }
                ],
                "start": 737,
                "end": 830
              }
            ],
            "optional": false,
            "start": 725,
            "end": 831
          },
          "definite": false,
          "start": 713,
          "end": 831
        }
      ],
      "declare": false,
      "start": 707,
      "end": 832
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "make",
        "optional": false,
        "typeAnnotation": null,
        "start": 860,
        "end": 864
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
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 865,
              "end": 866
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 865,
            "end": 866
          }
        ],
        "start": 864,
        "end": 867
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
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
                    "name": "mutations",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 873,
                    "end": 882
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "M",
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
                  "accessibility": null,
                  "static": false,
                  "start": 873,
                  "end": 886
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "action",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 888,
                    "end": 894
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "M",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 900,
                                "end": 901
                              },
                              "typeArguments": null,
                              "start": 900,
                              "end": 901
                            },
                            "start": 898,
                            "end": 901
                          },
                          "start": 897,
                          "end": 901
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 906,
                          "end": 910
                        },
                        "start": 903,
                        "end": 910
                      },
                      "start": 896,
                      "end": 910
                    },
                    "start": 894,
                    "end": 910
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 888,
                  "end": 910
                }
              ],
              "start": 871,
              "end": 912
            },
            "start": 869,
            "end": 912
          },
          "start": 868,
          "end": 912
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 914,
        "end": 917
      },
      "expression": false,
      "start": 851,
      "end": 917
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "make",
          "optional": false,
          "typeAnnotation": null,
          "start": 919,
          "end": 923
        },
        "typeArguments": null,
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
                  "name": "mutations",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 929,
                  "end": 938
                },
                "value": {
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
                        "start": 949,
                        "end": 952
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
                          "body": [],
                          "start": 955,
                          "end": 958
                        },
                        "expression": false,
                        "start": 952,
                        "end": 958
                      },
                      "method": true,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 949,
                      "end": 958
                    }
                  ],
                  "start": 940,
                  "end": 963
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 929,
                "end": 963
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 968,
                  "end": 974
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 977,
                      "end": 978
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 985,
                              "end": 986
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 987,
                              "end": 990
                            },
                            "optional": false,
                            "computed": false,
                            "start": 985,
                            "end": 990
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 985,
                          "end": 992
                        },
                        "directive": null,
                        "start": 985,
                        "end": 992
                      }
                    ],
                    "start": 983,
                    "end": 994
                  },
                  "id": null,
                  "generator": false,
                  "start": 976,
                  "end": 994
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 968,
                "end": 994
              }
            ],
            "start": 924,
            "end": 996
          }
        ],
        "optional": false,
        "start": 919,
        "end": 997
      },
      "directive": null,
      "start": 919,
      "end": 998
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 1039,
        "end": 1042
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1043,
              "end": 1044
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1043,
            "end": 1044
          }
        ],
        "start": 1042,
        "end": 1045
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
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
                    "start": 1057,
                    "end": 1058
                  },
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
                        "start": 1060,
                        "end": 1061
                      },
                      "typeArguments": null,
                      "start": 1060,
                      "end": 1061
                    },
                    "start": 1058,
                    "end": 1061
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1057,
                  "end": 1062
                },
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
                    "start": 1063,
                    "end": 1064
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
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
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1070,
                                "end": 1071
                              },
                              "typeArguments": null,
                              "start": 1070,
                              "end": 1071
                            },
                            "start": 1068,
                            "end": 1071
                          },
                          "start": 1067,
                          "end": 1071
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1076,
                          "end": 1080
                        },
                        "start": 1073,
                        "end": 1080
                      },
                      "start": 1066,
                      "end": 1080
                    },
                    "start": 1064,
                    "end": 1080
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1063,
                  "end": 1080
                }
              ],
              "start": 1055,
              "end": 1082
            },
            "start": 1053,
            "end": 1082
          },
          "start": 1046,
          "end": 1082
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1085,
          "end": 1089
        },
        "start": 1083,
        "end": 1089
      },
      "body": null,
      "expression": false,
      "start": 1022,
      "end": 1090
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1092,
          "end": 1095
        },
        "typeArguments": null,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1102,
                  "end": 1103
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 42,
                          "raw": "42",
                          "start": 1120,
                          "end": 1122
                        },
                        "start": 1113,
                        "end": 1122
                      }
                    ],
                    "start": 1111,
                    "end": 1124
                  },
                  "id": null,
                  "generator": false,
                  "start": 1105,
                  "end": 1124
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1102,
                "end": 1124
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
                  "start": 1130,
                  "end": 1131
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1132,
                      "end": 1133
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1135,
                    "end": 1137
                  },
                  "expression": false,
                  "start": 1131,
                  "end": 1137
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1130,
                "end": 1137
              }
            ],
            "start": 1096,
            "end": 1140
          }
        ],
        "optional": false,
        "start": 1092,
        "end": 1141
      },
      "directive": null,
      "start": 1092,
      "end": 1142
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1144,
          "end": 1147
        },
        "typeArguments": null,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1154,
                  "end": 1155
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 42,
                          "raw": "42",
                          "start": 1178,
                          "end": 1180
                        },
                        "start": 1171,
                        "end": 1180
                      }
                    ],
                    "start": 1169,
                    "end": 1182
                  },
                  "expression": false,
                  "start": 1157,
                  "end": 1182
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1154,
                "end": 1182
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
                  "start": 1188,
                  "end": 1189
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1190,
                      "end": 1191
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1193,
                    "end": 1195
                  },
                  "expression": false,
                  "start": 1189,
                  "end": 1195
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1188,
                "end": 1195
              }
            ],
            "start": 1148,
            "end": 1198
          }
        ],
        "optional": false,
        "start": 1144,
        "end": 1199
      },
      "directive": null,
      "start": 1144,
      "end": 1200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 1202,
          "end": 1205
        },
        "typeArguments": null,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1212,
                  "end": 1213
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 42,
                          "raw": "42",
                          "start": 1225,
                          "end": 1227
                        },
                        "start": 1218,
                        "end": 1227
                      }
                    ],
                    "start": 1216,
                    "end": 1229
                  },
                  "expression": false,
                  "start": 1213,
                  "end": 1229
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1212,
                "end": 1229
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
                  "start": 1235,
                  "end": 1236
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1237,
                      "end": 1238
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 1240,
                    "end": 1242
                  },
                  "expression": false,
                  "start": 1236,
                  "end": 1242
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1235,
                "end": 1242
              }
            ],
            "start": 1206,
            "end": 1245
          }
        ],
        "optional": false,
        "start": 1202,
        "end": 1246
      },
      "directive": null,
      "start": 1202,
      "end": 1247
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Chain",
        "optional": false,
        "typeAnnotation": null,
        "start": 1276,
        "end": 1281
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1282,
              "end": 1284
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1282,
            "end": 1284
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1286,
              "end": 1288
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1286,
            "end": 1288
          }
        ],
        "start": 1281,
        "end": 1289
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1298,
              "end": 1299
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1303,
                  "end": 1305
                },
                "typeArguments": null,
                "start": 1303,
                "end": 1305
              },
              "start": 1301,
              "end": 1305
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1298,
            "end": 1306
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1311,
              "end": 1312
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                      "name": "R1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1316,
                      "end": 1318
                    },
                    "typeArguments": null,
                    "start": 1316,
                    "end": 1318
                  },
                  "start": 1314,
                  "end": 1318
                },
                "start": 1313,
                "end": 1318
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1321,
                  "end": 1323
                },
                "typeArguments": null,
                "start": 1321,
                "end": 1323
              },
              "start": 1319,
              "end": 1323
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1311,
            "end": 1324
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1329,
              "end": 1330
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
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
                      "name": "R2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1334,
                      "end": 1336
                    },
                    "typeArguments": null,
                    "start": 1334,
                    "end": 1336
                  },
                  "start": 1332,
                  "end": 1336
                },
                "start": 1331,
                "end": 1336
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1339,
                "end": 1343
              },
              "start": 1337,
              "end": 1343
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1329,
            "end": 1344
          }
        ],
        "start": 1292,
        "end": 1346
      },
      "declare": false,
      "start": 1271,
      "end": 1347
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 1358,
        "end": 1362
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
              "name": "R1",
              "optional": false,
              "typeAnnotation": null,
              "start": 1363,
              "end": 1365
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1363,
            "end": 1365
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1367,
              "end": 1369
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1367,
            "end": 1369
          }
        ],
        "start": 1362,
        "end": 1370
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Chain",
                "optional": false,
                "typeAnnotation": null,
                "start": 1376,
                "end": 1381
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1382,
                      "end": 1384
                    },
                    "typeArguments": null,
                    "start": 1382,
                    "end": 1384
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "R2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1386,
                      "end": 1388
                    },
                    "typeArguments": null,
                    "start": 1386,
                    "end": 1388
                  }
                ],
                "start": 1381,
                "end": 1389
              },
              "start": 1376,
              "end": 1389
            },
            "start": 1374,
            "end": 1389
          },
          "start": 1371,
          "end": 1389
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1391,
        "end": 1393
      },
      "expression": false,
      "start": 1349,
      "end": 1393
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1395,
          "end": 1399
        },
        "typeArguments": null,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1406,
                  "end": 1407
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1415,
                    "end": 1416
                  },
                  "id": null,
                  "generator": false,
                  "start": 1409,
                  "end": 1416
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1406,
                "end": 1416
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
                  "start": 1422,
                  "end": 1423
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1426,
                      "end": 1427
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "'a'",
                    "start": 1432,
                    "end": 1435
                  },
                  "id": null,
                  "generator": false,
                  "start": 1425,
                  "end": 1435
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1422,
                "end": 1435
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1441,
                  "end": 1442
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1445,
                      "end": 1446
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1470,
                                  "end": 1476
                                },
                                "start": 1468,
                                "end": 1476
                              },
                              "start": 1467,
                              "end": 1476
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1479,
                              "end": 1480
                            },
                            "definite": false,
                            "start": 1467,
                            "end": 1480
                          }
                        ],
                        "declare": false,
                        "start": 1461,
                        "end": 1481
                      }
                    ],
                    "start": 1451,
                    "end": 1487
                  },
                  "id": null,
                  "generator": false,
                  "start": 1444,
                  "end": 1487
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1441,
                "end": 1487
              }
            ],
            "start": 1400,
            "end": 1489
          }
        ],
        "optional": false,
        "start": 1395,
        "end": 1490
      },
      "directive": null,
      "start": 1395,
      "end": 1491
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 1493,
          "end": 1497
        },
        "typeArguments": null,
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1504,
                  "end": 1505
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1513,
                    "end": 1514
                  },
                  "id": null,
                  "generator": false,
                  "start": 1507,
                  "end": 1514
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1504,
                "end": 1514
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
                  "start": 1520,
                  "end": 1521
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1524,
                      "end": 1525
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1530,
                    "end": 1531
                  },
                  "id": null,
                  "generator": false,
                  "start": 1523,
                  "end": 1531
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1520,
                "end": 1531
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1537,
                  "end": 1538
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1541,
                      "end": 1542
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 1566,
                                  "end": 1572
                                },
                                "start": 1564,
                                "end": 1572
                              },
                              "start": 1563,
                              "end": 1572
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1575,
                              "end": 1576
                            },
                            "definite": false,
                            "start": 1563,
                            "end": 1576
                          }
                        ],
                        "declare": false,
                        "start": 1557,
                        "end": 1577
                      }
                    ],
                    "start": 1547,
                    "end": 1583
                  },
                  "id": null,
                  "generator": false,
                  "start": 1540,
                  "end": 1583
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1537,
                "end": 1583
              }
            ],
            "start": 1498,
            "end": 1585
          }
        ],
        "optional": false,
        "start": 1493,
        "end": 1586
      },
      "directive": null,
      "start": 1493,
      "end": 1587
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Wrapper",
        "optional": false,
        "typeAnnotation": null,
        "start": 1617,
        "end": 1624
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
              "start": 1625,
              "end": 1626
            },
            "constraint": null,
            "default": {
              "type": "TSAnyKeyword",
              "start": 1629,
              "end": 1632
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1625,
            "end": 1632
          }
        ],
        "start": 1624,
        "end": 1633
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 1647,
              "end": 1652
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
                  "start": 1655,
                  "end": 1656
                },
                "typeArguments": null,
                "start": 1655,
                "end": 1656
              },
              "start": 1653,
              "end": 1656
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": true,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 1640,
            "end": 1657
          }
        ],
        "start": 1634,
        "end": 1659
      },
      "abstract": false,
      "declare": false,
      "start": 1611,
      "end": 1659
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WrappedMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 1666,
        "end": 1676
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null,
          "start": 1679,
          "end": 1685
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 1686,
              "end": 1692
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Wrapper",
                "optional": false,
                "typeAnnotation": null,
                "start": 1694,
                "end": 1701
              },
              "typeArguments": null,
              "start": 1694,
              "end": 1701
            }
          ],
          "start": 1685,
          "end": 1702
        },
        "start": 1679,
        "end": 1702
      },
      "declare": false,
      "start": 1661,
      "end": 1703
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unwrap",
        "optional": false,
        "typeAnnotation": null,
        "start": 1709,
        "end": 1715
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1716,
              "end": 1717
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WrappedMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 1726,
                "end": 1736
              },
              "typeArguments": null,
              "start": 1726,
              "end": 1736
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1716,
            "end": 1736
          }
        ],
        "start": 1715,
        "end": 1737
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "key": {
          "type": "Identifier",
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null,
          "start": 1747,
          "end": 1748
        },
        "constraint": {
          "type": "TSTypeOperator",
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1758,
              "end": 1759
            },
            "typeArguments": null,
            "start": 1758,
            "end": 1759
          },
          "start": 1752,
          "end": 1759
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSIndexedAccessType",
            "objectType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 1762,
                "end": 1763
              },
              "typeArguments": null,
              "start": 1762,
              "end": 1763
            },
            "indexType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 1764,
                "end": 1765
              },
              "typeArguments": null,
              "start": 1764,
              "end": 1765
            },
            "start": 1762,
            "end": 1766
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Wrapper",
              "optional": false,
              "typeAnnotation": null,
              "start": 1775,
              "end": 1782
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1789,
                      "end": 1790
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1789,
                    "end": 1790
                  },
                  "start": 1783,
                  "end": 1790
                }
              ],
              "start": 1782,
              "end": 1791
            },
            "start": 1775,
            "end": 1791
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1794,
              "end": 1795
            },
            "typeArguments": null,
            "start": 1794,
            "end": 1795
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1798,
            "end": 1803
          },
          "start": 1762,
          "end": 1803
        },
        "optional": false,
        "readonly": null,
        "start": 1740,
        "end": 1806
      },
      "declare": false,
      "start": 1704,
      "end": 1807
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MappingComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 1814,
        "end": 1830
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 1831,
              "end": 1832
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WrappedMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 1841,
                "end": 1851
              },
              "typeArguments": null,
              "start": 1841,
              "end": 1851
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1831,
            "end": 1851
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 1853,
              "end": 1854
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WrappedMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 1863,
                "end": 1873
              },
              "typeArguments": null,
              "start": 1863,
              "end": 1873
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1853,
            "end": 1873
          }
        ],
        "start": 1830,
        "end": 1874
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "setup",
              "optional": false,
              "typeAnnotation": null,
              "start": 1883,
              "end": 1888
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                      "name": "inputs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1894,
                      "end": 1900
                    },
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
                          "start": 1902,
                          "end": 1903
                        },
                        "typeArguments": null,
                        "start": 1902,
                        "end": 1903
                      },
                      "start": 1900,
                      "end": 1903
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1894,
                    "end": 1904
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "outputs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1905,
                      "end": 1912
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1914,
                          "end": 1915
                        },
                        "typeArguments": null,
                        "start": 1914,
                        "end": 1915
                      },
                      "start": 1912,
                      "end": 1915
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1905,
                    "end": 1915
                  }
                ],
                "start": 1892,
                "end": 1917
              },
              "start": 1890,
              "end": 1917
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1883,
            "end": 1918
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 1923,
              "end": 1926
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "inputs",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Unwrap",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1938,
                          "end": 1944
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "I",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1945,
                                "end": 1946
                              },
                              "typeArguments": null,
                              "start": 1945,
                              "end": 1946
                            }
                          ],
                          "start": 1944,
                          "end": 1947
                        },
                        "start": 1938,
                        "end": 1947
                      },
                      "start": 1936,
                      "end": 1947
                    },
                    "start": 1930,
                    "end": 1947
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Unwrap",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1952,
                      "end": 1958
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1959,
                            "end": 1960
                          },
                          "typeArguments": null,
                          "start": 1959,
                          "end": 1960
                        }
                      ],
                      "start": 1958,
                      "end": 1961
                    },
                    "start": 1952,
                    "end": 1961
                  },
                  "start": 1949,
                  "end": 1961
                },
                "start": 1929,
                "end": 1961
              },
              "start": 1927,
              "end": 1961
            },
            "accessibility": null,
            "static": false,
            "start": 1923,
            "end": 1962
          }
        ],
        "start": 1877,
        "end": 1964
      },
      "declare": false,
      "start": 1809,
      "end": 1965
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createMappingComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 1984,
        "end": 2006
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
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 2007,
              "end": 2008
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WrappedMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 2017,
                "end": 2027
              },
              "typeArguments": null,
              "start": 2017,
              "end": 2027
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2007,
            "end": 2027
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 2029,
              "end": 2030
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "WrappedMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 2039,
                "end": 2049
              },
              "typeArguments": null,
              "start": 2039,
              "end": 2049
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2029,
            "end": 2049
          }
        ],
        "start": 2006,
        "end": 2050
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "def",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MappingComponent",
                "optional": false,
                "typeAnnotation": null,
                "start": 2056,
                "end": 2072
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2073,
                      "end": 2074
                    },
                    "typeArguments": null,
                    "start": 2073,
                    "end": 2074
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2076,
                      "end": 2077
                    },
                    "typeArguments": null,
                    "start": 2076,
                    "end": 2077
                  }
                ],
                "start": 2072,
                "end": 2078
              },
              "start": 2056,
              "end": 2078
            },
            "start": 2054,
            "end": 2078
          },
          "start": 2051,
          "end": 2078
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2081,
          "end": 2085
        },
        "start": 2079,
        "end": 2085
      },
      "body": null,
      "expression": false,
      "start": 1967,
      "end": 2086
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "createMappingComponent",
          "optional": false,
          "typeAnnotation": null,
          "start": 2088,
          "end": 2110
        },
        "typeArguments": null,
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
                  "name": "setup",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2117,
                  "end": 2122
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
                                "name": "inputs",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2156,
                                "end": 2162
                              },
                              "value": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "num",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2182,
                                      "end": 2185
                                    },
                                    "value": {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Wrapper",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2191,
                                        "end": 2198
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSNumberKeyword",
                                            "start": 2199,
                                            "end": 2205
                                          }
                                        ],
                                        "start": 2198,
                                        "end": 2206
                                      },
                                      "arguments": [],
                                      "start": 2187,
                                      "end": 2208
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 2182,
                                    "end": 2208
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "str",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2226,
                                      "end": 2229
                                    },
                                    "value": {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Wrapper",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2235,
                                        "end": 2242
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSStringKeyword",
                                            "start": 2243,
                                            "end": 2249
                                          }
                                        ],
                                        "start": 2242,
                                        "end": 2250
                                      },
                                      "arguments": [],
                                      "start": 2231,
                                      "end": 2252
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 2226,
                                    "end": 2252
                                  }
                                ],
                                "start": 2164,
                                "end": 2266
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 2156,
                              "end": 2266
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "outputs",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2280,
                                "end": 2287
                              },
                              "value": {
                                "type": "ObjectExpression",
                                "properties": [
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "bool",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2307,
                                      "end": 2311
                                    },
                                    "value": {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Wrapper",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2317,
                                        "end": 2324
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSBooleanKeyword",
                                            "start": 2325,
                                            "end": 2332
                                          }
                                        ],
                                        "start": 2324,
                                        "end": 2333
                                      },
                                      "arguments": [],
                                      "start": 2313,
                                      "end": 2335
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 2307,
                                    "end": 2335
                                  },
                                  {
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "str",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2353,
                                      "end": 2356
                                    },
                                    "value": {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Wrapper",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2362,
                                        "end": 2369
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSStringKeyword",
                                            "start": 2370,
                                            "end": 2376
                                          }
                                        ],
                                        "start": 2369,
                                        "end": 2377
                                      },
                                      "arguments": [],
                                      "start": 2358,
                                      "end": 2379
                                    },
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "optional": false,
                                    "start": 2353,
                                    "end": 2379
                                  }
                                ],
                                "start": 2289,
                                "end": 2393
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 2280,
                              "end": 2393
                            }
                          ],
                          "start": 2142,
                          "end": 2403
                        },
                        "start": 2135,
                        "end": 2404
                      }
                    ],
                    "start": 2125,
                    "end": 2410
                  },
                  "expression": false,
                  "start": 2122,
                  "end": 2410
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2117,
                "end": 2410
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2416,
                  "end": 2419
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
                      "name": "inputs",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2420,
                      "end": 2426
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
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
                                "name": "bool",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2459,
                                "end": 2463
                              },
                              "value": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "inputs",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2465,
                                  "end": 2471
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "nonexistent",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2472,
                                  "end": 2483
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2465,
                                "end": 2483
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 2459,
                              "end": 2483
                            },
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "str",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2497,
                                "end": 2500
                              },
                              "value": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "inputs",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2502,
                                  "end": 2508
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "num",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2509,
                                  "end": 2512
                                },
                                "optional": false,
                                "computed": false,
                                "start": 2502,
                                "end": 2512
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 2497,
                              "end": 2512
                            }
                          ],
                          "start": 2445,
                          "end": 2540
                        },
                        "start": 2438,
                        "end": 2540
                      }
                    ],
                    "start": 2428,
                    "end": 2546
                  },
                  "expression": false,
                  "start": 2419,
                  "end": 2546
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2416,
                "end": 2546
              }
            ],
            "start": 2111,
            "end": 2548
          }
        ],
        "optional": false,
        "start": 2088,
        "end": 2549
      },
      "directive": null,
      "start": 2088,
      "end": 2550
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "simplified",
        "optional": false,
        "typeAnnotation": null,
        "start": 2583,
        "end": 2593
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
              "start": 2594,
              "end": 2595
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2594,
            "end": 2595
          }
        ],
        "start": 2593,
        "end": 2596
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
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
                    "name": "generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2606,
                    "end": 2615
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
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2623,
                            "end": 2624
                          },
                          "typeArguments": null,
                          "start": 2623,
                          "end": 2624
                        },
                        "start": 2620,
                        "end": 2624
                      },
                      "start": 2617,
                      "end": 2624
                    },
                    "start": 2615,
                    "end": 2624
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2606,
                  "end": 2625
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "receiver",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2626,
                    "end": 2634
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
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
                                "start": 2640,
                                "end": 2641
                              },
                              "typeArguments": null,
                              "start": 2640,
                              "end": 2641
                            },
                            "start": 2638,
                            "end": 2641
                          },
                          "start": 2637,
                          "end": 2641
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2646,
                          "end": 2649
                        },
                        "start": 2643,
                        "end": 2649
                      },
                      "start": 2636,
                      "end": 2649
                    },
                    "start": 2634,
                    "end": 2649
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2626,
                  "end": 2649
                }
              ],
              "start": 2604,
              "end": 2651
            },
            "start": 2602,
            "end": 2651
          },
          "start": 2597,
          "end": 2651
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2653,
        "end": 2655
      },
      "expression": false,
      "start": 2574,
      "end": 2655
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "whatIWant",
        "optional": false,
        "typeAnnotation": null,
        "start": 2666,
        "end": 2675
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
              "start": 2676,
              "end": 2677
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2676,
            "end": 2677
          }
        ],
        "start": 2675,
        "end": 2678
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
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
                    "name": "generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2688,
                    "end": 2697
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bob",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 2705,
                              "end": 2708
                            },
                            "start": 2703,
                            "end": 2708
                          },
                          "start": 2700,
                          "end": 2708
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
                            "start": 2713,
                            "end": 2714
                          },
                          "typeArguments": null,
                          "start": 2713,
                          "end": 2714
                        },
                        "start": 2710,
                        "end": 2714
                      },
                      "start": 2699,
                      "end": 2714
                    },
                    "start": 2697,
                    "end": 2714
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2688,
                  "end": 2715
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "receiver",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2716,
                    "end": 2724
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
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
                                "start": 2730,
                                "end": 2731
                              },
                              "typeArguments": null,
                              "start": 2730,
                              "end": 2731
                            },
                            "start": 2728,
                            "end": 2731
                          },
                          "start": 2727,
                          "end": 2731
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2736,
                          "end": 2739
                        },
                        "start": 2733,
                        "end": 2739
                      },
                      "start": 2726,
                      "end": 2739
                    },
                    "start": 2724,
                    "end": 2739
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2716,
                  "end": 2739
                }
              ],
              "start": 2686,
              "end": 2741
            },
            "start": 2684,
            "end": 2741
          },
          "start": 2679,
          "end": 2741
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2743,
        "end": 2745
      },
      "expression": false,
      "start": 2657,
      "end": 2745
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nonObject",
        "optional": false,
        "typeAnnotation": null,
        "start": 2756,
        "end": 2765
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
              "start": 2766,
              "end": 2767
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2766,
            "end": 2767
          }
        ],
        "start": 2765,
        "end": 2768
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "generator",
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
                  "name": "bob",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2786,
                      "end": 2789
                    },
                    "start": 2784,
                    "end": 2789
                  },
                  "start": 2781,
                  "end": 2789
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
                    "start": 2794,
                    "end": 2795
                  },
                  "typeArguments": null,
                  "start": 2794,
                  "end": 2795
                },
                "start": 2791,
                "end": 2795
              },
              "start": 2780,
              "end": 2795
            },
            "start": 2778,
            "end": 2795
          },
          "start": 2769,
          "end": 2795
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "receiver",
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
                  "name": "t",
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
                        "start": 2811,
                        "end": 2812
                      },
                      "typeArguments": null,
                      "start": 2811,
                      "end": 2812
                    },
                    "start": 2809,
                    "end": 2812
                  },
                  "start": 2808,
                  "end": 2812
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 2817,
                  "end": 2820
                },
                "start": 2814,
                "end": 2820
              },
              "start": 2807,
              "end": 2820
            },
            "start": 2805,
            "end": 2820
          },
          "start": 2797,
          "end": 2820
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2822,
        "end": 2824
      },
      "expression": false,
      "start": 2747,
      "end": 2824
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "simplified",
          "optional": false,
          "typeAnnotation": null,
          "start": 2826,
          "end": 2836
        },
        "typeArguments": null,
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
                  "name": "generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2839,
                  "end": 2848
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 2856,
                    "end": 2859
                  },
                  "id": null,
                  "generator": false,
                  "start": 2850,
                  "end": 2859
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2839,
                "end": 2859
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "receiver",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2861,
                  "end": 2869
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2872,
                      "end": 2873
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2878,
                        "end": 2885
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2886,
                        "end": 2889
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2878,
                      "end": 2889
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2890,
                          "end": 2891
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 2894,
                          "end": 2895
                        },
                        "start": 2890,
                        "end": 2895
                      }
                    ],
                    "optional": false,
                    "start": 2878,
                    "end": 2896
                  },
                  "id": null,
                  "generator": false,
                  "start": 2871,
                  "end": 2896
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2861,
                "end": 2896
              }
            ],
            "start": 2837,
            "end": 2898
          }
        ],
        "optional": false,
        "start": 2826,
        "end": 2899
      },
      "directive": null,
      "start": 2826,
      "end": 2899
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "whatIWant",
          "optional": false,
          "typeAnnotation": null,
          "start": 2900,
          "end": 2909
        },
        "typeArguments": null,
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
                  "name": "generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2912,
                  "end": 2921
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bob",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2924,
                      "end": 2927
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bob",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2932,
                      "end": 2935
                    },
                    "consequent": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 2938,
                      "end": 2939
                    },
                    "alternate": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 2942,
                      "end": 2943
                    },
                    "start": 2932,
                    "end": 2943
                  },
                  "id": null,
                  "generator": false,
                  "start": 2923,
                  "end": 2943
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2912,
                "end": 2943
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "receiver",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2945,
                  "end": 2953
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2956,
                      "end": 2957
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2962,
                        "end": 2969
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2970,
                        "end": 2973
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2962,
                      "end": 2973
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2974,
                          "end": 2975
                        },
                        "operator": "+",
                        "right": {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 2978,
                          "end": 2979
                        },
                        "start": 2974,
                        "end": 2979
                      }
                    ],
                    "optional": false,
                    "start": 2962,
                    "end": 2980
                  },
                  "id": null,
                  "generator": false,
                  "start": 2955,
                  "end": 2980
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2945,
                "end": 2980
              }
            ],
            "start": 2910,
            "end": 2982
          }
        ],
        "optional": false,
        "start": 2900,
        "end": 2983
      },
      "directive": null,
      "start": 2900,
      "end": 2983
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nonObject",
          "optional": false,
          "typeAnnotation": null,
          "start": 2984,
          "end": 2993
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "bob",
                "optional": false,
                "typeAnnotation": null,
                "start": 2995,
                "end": 2998
              }
            ],
            "returnType": null,
            "body": {
              "type": "ConditionalExpression",
              "test": {
                "type": "Identifier",
                "decorators": [],
                "name": "bob",
                "optional": false,
                "typeAnnotation": null,
                "start": 3003,
                "end": 3006
              },
              "consequent": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 3009,
                "end": 3010
              },
              "alternate": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 3013,
                "end": 3014
              },
              "start": 3003,
              "end": 3014
            },
            "id": null,
            "generator": false,
            "start": 2994,
            "end": 3014
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 3017,
                "end": 3018
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3023,
                  "end": 3030
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3031,
                  "end": 3034
                },
                "optional": false,
                "computed": false,
                "start": 3023,
                "end": 3034
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3035,
                    "end": 3036
                  },
                  "operator": "+",
                  "right": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 3039,
                    "end": 3040
                  },
                  "start": 3035,
                  "end": 3040
                }
              ],
              "optional": false,
              "start": 3023,
              "end": 3041
            },
            "id": null,
            "generator": false,
            "start": 3016,
            "end": 3041
          }
        ],
        "optional": false,
        "start": 2984,
        "end": 3042
      },
      "directive": null,
      "start": 2984,
      "end": 3042
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Opts",
        "optional": false,
        "typeAnnotation": null,
        "start": 3076,
        "end": 3080
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TParams",
              "optional": false,
              "typeAnnotation": null,
              "start": 3081,
              "end": 3088
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3081,
            "end": 3088
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDone",
              "optional": false,
              "typeAnnotation": null,
              "start": 3090,
              "end": 3095
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3090,
            "end": 3095
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TMapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 3097,
              "end": 3104
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3097,
            "end": 3104
          }
        ],
        "start": 3080,
        "end": 3105
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
              "name": "fetch",
              "optional": false,
              "typeAnnotation": null,
              "start": 3112,
              "end": 3117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "params",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TParams",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3128,
                          "end": 3135
                        },
                        "typeArguments": null,
                        "start": 3128,
                        "end": 3135
                      },
                      "start": 3126,
                      "end": 3135
                    },
                    "start": 3120,
                    "end": 3135
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3142,
                        "end": 3148
                      },
                      "start": 3140,
                      "end": 3148
                    },
                    "start": 3137,
                    "end": 3148
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TDone",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3153,
                      "end": 3158
                    },
                    "typeArguments": null,
                    "start": 3153,
                    "end": 3158
                  },
                  "start": 3150,
                  "end": 3158
                },
                "start": 3119,
                "end": 3158
              },
              "start": 3117,
              "end": 3158
            },
            "accessibility": null,
            "static": false,
            "start": 3112,
            "end": 3159
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null,
              "start": 3164,
              "end": 3167
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TDone",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3176,
                          "end": 3181
                        },
                        "typeArguments": null,
                        "start": 3176,
                        "end": 3181
                      },
                      "start": 3174,
                      "end": 3181
                    },
                    "start": 3170,
                    "end": 3181
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TMapped",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3186,
                      "end": 3193
                    },
                    "typeArguments": null,
                    "start": 3186,
                    "end": 3193
                  },
                  "start": 3183,
                  "end": 3193
                },
                "start": 3169,
                "end": 3193
              },
              "start": 3167,
              "end": 3193
            },
            "accessibility": null,
            "static": false,
            "start": 3164,
            "end": 3193
          }
        ],
        "start": 3106,
        "end": 3195
      },
      "declare": false,
      "start": 3066,
      "end": 3195
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example",
        "optional": false,
        "typeAnnotation": null,
        "start": 3206,
        "end": 3213
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
              "name": "TParams",
              "optional": false,
              "typeAnnotation": null,
              "start": 3214,
              "end": 3221
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3214,
            "end": 3221
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TDone",
              "optional": false,
              "typeAnnotation": null,
              "start": 3223,
              "end": 3228
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3223,
            "end": 3228
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TMapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 3230,
              "end": 3237
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3230,
            "end": 3237
          }
        ],
        "start": 3213,
        "end": 3238
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Opts",
                "optional": false,
                "typeAnnotation": null,
                "start": 3248,
                "end": 3252
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TParams",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3253,
                      "end": 3260
                    },
                    "typeArguments": null,
                    "start": 3253,
                    "end": 3260
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TDone",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3262,
                      "end": 3267
                    },
                    "typeArguments": null,
                    "start": 3262,
                    "end": 3267
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TMapped",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3269,
                      "end": 3276
                    },
                    "typeArguments": null,
                    "start": 3269,
                    "end": 3276
                  }
                ],
                "start": 3252,
                "end": 3277
              },
              "start": 3248,
              "end": 3277
            },
            "start": 3246,
            "end": 3277
          },
          "start": 3239,
          "end": 3277
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "params",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TParams",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3301,
                        "end": 3308
                      },
                      "typeArguments": null,
                      "start": 3301,
                      "end": 3308
                    },
                    "start": 3299,
                    "end": 3308
                  },
                  "start": 3293,
                  "end": 3308
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
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3329,
                          "end": 3333
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "options",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3336,
                              "end": 3343
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fetch",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3344,
                              "end": 3349
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3336,
                            "end": 3349
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "params",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3350,
                              "end": 3356
                            },
                            {
                              "type": "Literal",
                              "value": 123,
                              "raw": "123",
                              "start": 3358,
                              "end": 3361
                            }
                          ],
                          "optional": false,
                          "start": 3336,
                          "end": 3362
                        },
                        "definite": false,
                        "start": 3329,
                        "end": 3362
                      }
                    ],
                    "declare": false,
                    "start": 3323,
                    "end": 3362
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "options",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3378,
                          "end": 3385
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3386,
                          "end": 3389
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3378,
                        "end": 3389
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3390,
                          "end": 3394
                        }
                      ],
                      "optional": false,
                      "start": 3378,
                      "end": 3395
                    },
                    "start": 3371,
                    "end": 3395
                  }
                ],
                "start": 3313,
                "end": 3401
              },
              "id": null,
              "generator": false,
              "start": 3292,
              "end": 3401
            },
            "start": 3285,
            "end": 3401
          }
        ],
        "start": 3279,
        "end": 3403
      },
      "expression": false,
      "start": 3197,
      "end": 3403
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Params",
        "optional": false,
        "typeAnnotation": null,
        "start": 3415,
        "end": 3421
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
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 3428,
              "end": 3431
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3433,
                "end": 3439
              },
              "start": 3431,
              "end": 3439
            },
            "accessibility": null,
            "static": false,
            "start": 3428,
            "end": 3439
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "two",
              "optional": false,
              "typeAnnotation": null,
              "start": 3444,
              "end": 3447
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3449,
                "end": 3455
              },
              "start": 3447,
              "end": 3455
            },
            "accessibility": null,
            "static": false,
            "start": 3444,
            "end": 3455
          }
        ],
        "start": 3422,
        "end": 3457
      },
      "declare": false,
      "start": 3405,
      "end": 3457
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "example",
          "optional": false,
          "typeAnnotation": null,
          "start": 3459,
          "end": 3466
        },
        "typeArguments": null,
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
                  "name": "fetch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3473,
                  "end": 3478
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3489,
                            "end": 3495
                          },
                          "typeArguments": null,
                          "start": 3489,
                          "end": 3495
                        },
                        "start": 3487,
                        "end": 3495
                      },
                      "start": 3481,
                      "end": 3495
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 3500,
                    "end": 3503
                  },
                  "id": null,
                  "generator": false,
                  "start": 3480,
                  "end": 3503
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3473,
                "end": 3503
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3509,
                  "end": 3512
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3515,
                      "end": 3521
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3526,
                      "end": 3532
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3533,
                        "end": 3539
                      }
                    ],
                    "optional": false,
                    "start": 3526,
                    "end": 3540
                  },
                  "id": null,
                  "generator": false,
                  "start": 3514,
                  "end": 3540
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3509,
                "end": 3540
              }
            ],
            "start": 3467,
            "end": 3542
          }
        ],
        "optional": false,
        "start": 3459,
        "end": 3543
      },
      "directive": null,
      "start": 3459,
      "end": 3544
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "example",
          "optional": false,
          "typeAnnotation": null,
          "start": 3546,
          "end": 3553
        },
        "typeArguments": null,
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
                  "name": "fetch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3560,
                  "end": 3565
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3576,
                            "end": 3582
                          },
                          "typeArguments": null,
                          "start": 3576,
                          "end": 3582
                        },
                        "start": 3574,
                        "end": 3582
                      },
                      "start": 3568,
                      "end": 3582
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3589,
                          "end": 3595
                        },
                        "start": 3587,
                        "end": 3595
                      },
                      "start": 3584,
                      "end": 3595
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 3600,
                    "end": 3603
                  },
                  "id": null,
                  "generator": false,
                  "start": 3567,
                  "end": 3603
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3560,
                "end": 3603
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3609,
                  "end": 3612
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3615,
                      "end": 3621
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3626,
                      "end": 3632
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3633,
                        "end": 3639
                      }
                    ],
                    "optional": false,
                    "start": 3626,
                    "end": 3640
                  },
                  "id": null,
                  "generator": false,
                  "start": 3614,
                  "end": 3640
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3609,
                "end": 3640
              }
            ],
            "start": 3554,
            "end": 3642
          }
        ],
        "optional": false,
        "start": 3546,
        "end": 3643
      },
      "directive": null,
      "start": 3546,
      "end": 3644
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "example",
          "optional": false,
          "typeAnnotation": null,
          "start": 3646,
          "end": 3653
        },
        "typeArguments": null,
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
                  "name": "fetch",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3660,
                  "end": 3665
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "params",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Params",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3676,
                            "end": 3682
                          },
                          "typeArguments": null,
                          "start": 3676,
                          "end": 3682
                        },
                        "start": 3674,
                        "end": 3682
                      },
                      "start": 3668,
                      "end": 3682
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3684,
                      "end": 3687
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 3692,
                    "end": 3695
                  },
                  "id": null,
                  "generator": false,
                  "start": 3667,
                  "end": 3695
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3660,
                "end": 3695
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3701,
                  "end": 3704
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "number",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3707,
                      "end": 3713
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "String",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3718,
                      "end": 3724
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "number",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3725,
                        "end": 3731
                      }
                    ],
                    "optional": false,
                    "start": 3718,
                    "end": 3732
                  },
                  "id": null,
                  "generator": false,
                  "start": 3706,
                  "end": 3732
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3701,
                "end": 3732
              }
            ],
            "start": 3654,
            "end": 3734
          }
        ],
        "optional": false,
        "start": 3646,
        "end": 3735
      },
      "directive": null,
      "start": 3646,
      "end": 3736
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
            "name": "branch",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 3785,
                        "end": 3786
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3785,
                      "end": 3786
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3788,
                        "end": 3789
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3798,
                          "end": 3799
                        },
                        "typeArguments": null,
                        "start": 3798,
                        "end": 3799
                      },
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3788,
                      "end": 3799
                    }
                  ],
                  "start": 3784,
                  "end": 3800
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_",
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
                              "name": "test",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3806,
                              "end": 3810
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
                                  "start": 3812,
                                  "end": 3813
                                },
                                "typeArguments": null,
                                "start": 3812,
                                "end": 3813
                              },
                              "start": 3810,
                              "end": 3813
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3806,
                            "end": 3814
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "if",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3815,
                              "end": 3817
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "t",
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
                                          "start": 3823,
                                          "end": 3824
                                        },
                                        "typeArguments": null,
                                        "start": 3823,
                                        "end": 3824
                                      },
                                      "start": 3821,
                                      "end": 3824
                                    },
                                    "start": 3820,
                                    "end": 3824
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypePredicate",
                                    "parameterName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "t",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 3829,
                                      "end": 3830
                                    },
                                    "asserts": false,
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
                                          "start": 3834,
                                          "end": 3835
                                        },
                                        "typeArguments": null,
                                        "start": 3834,
                                        "end": 3835
                                      },
                                      "start": 3834,
                                      "end": 3835
                                    },
                                    "start": 3829,
                                    "end": 3835
                                  },
                                  "start": 3826,
                                  "end": 3835
                                },
                                "start": 3819,
                                "end": 3835
                              },
                              "start": 3817,
                              "end": 3835
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3815,
                            "end": 3836
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "then",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3837,
                              "end": 3841
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSFunctionType",
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "u",
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
                                          "start": 3847,
                                          "end": 3848
                                        },
                                        "typeArguments": null,
                                        "start": 3847,
                                        "end": 3848
                                      },
                                      "start": 3845,
                                      "end": 3848
                                    },
                                    "start": 3844,
                                    "end": 3848
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 3853,
                                    "end": 3857
                                  },
                                  "start": 3850,
                                  "end": 3857
                                },
                                "start": 3843,
                                "end": 3857
                              },
                              "start": 3841,
                              "end": 3857
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3837,
                            "end": 3857
                          }
                        ],
                        "start": 3804,
                        "end": 3859
                      },
                      "start": 3802,
                      "end": 3859
                    },
                    "start": 3801,
                    "end": 3859
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 3864,
                    "end": 3868
                  },
                  "start": 3861,
                  "end": 3868
                },
                "start": 3784,
                "end": 3868
              },
              "start": 3780,
              "end": 3868
            },
            "start": 3774,
            "end": 3868
          },
          "init": null,
          "definite": false,
          "start": 3774,
          "end": 3868
        }
      ],
      "declare": true,
      "start": 3760,
      "end": 3868
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 3887,
                      "end": 3890
                    },
                    "start": 3887,
                    "end": 3890
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 3893,
                      "end": 3896
                    },
                    "start": 3893,
                    "end": 3896
                  }
                ],
                "start": 3887,
                "end": 3896
              },
              "start": 3885,
              "end": 3896
            },
            "start": 3884,
            "end": 3896
          },
          "init": null,
          "definite": false,
          "start": 3884,
          "end": 3896
        }
      ],
      "declare": true,
      "start": 3870,
      "end": 3896
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "branch",
          "optional": false,
          "typeAnnotation": null,
          "start": 3898,
          "end": 3904
        },
        "typeArguments": null,
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
                  "name": "test",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3909,
                  "end": 3913
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3915,
                  "end": 3916
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3909,
                "end": 3916
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "if",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3920,
                  "end": 3922
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3925,
                      "end": 3926
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypePredicate",
                      "parameterName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3929,
                        "end": 3930
                      },
                      "asserts": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 3934,
                            "end": 3937
                          },
                          "start": 3934,
                          "end": 3937
                        },
                        "start": 3934,
                        "end": 3937
                      },
                      "start": 3929,
                      "end": 3937
                    },
                    "start": 3927,
                    "end": 3937
                  },
                  "body": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3941,
                      "end": 3942
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 3947,
                      "end": 3950
                    },
                    "start": 3941,
                    "end": 3950
                  },
                  "id": null,
                  "generator": false,
                  "start": 3924,
                  "end": 3950
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3920,
                "end": 3950
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3954,
                  "end": 3958
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3960,
                      "end": 3961
                    }
                  ],
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
                              "name": "test1",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "a",
                                    "raw": "\"a\"",
                                    "start": 3982,
                                    "end": 3985
                                  },
                                  "start": 3982,
                                  "end": 3985
                                },
                                "start": 3980,
                                "end": 3985
                              },
                              "start": 3975,
                              "end": 3985
                            },
                            "init": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "u",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3988,
                              "end": 3989
                            },
                            "definite": false,
                            "start": 3975,
                            "end": 3989
                          }
                        ],
                        "declare": false,
                        "start": 3971,
                        "end": 3989
                      }
                    ],
                    "start": 3965,
                    "end": 3993
                  },
                  "id": null,
                  "generator": false,
                  "start": 3960,
                  "end": 3993
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 3954,
                "end": 3993
              }
            ],
            "start": 3905,
            "end": 3995
          }
        ],
        "optional": false,
        "start": 3898,
        "end": 3996
      },
      "directive": null,
      "start": 3898,
      "end": 3996
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Props",
        "optional": false,
        "typeAnnotation": null,
        "start": 4008,
        "end": 4013
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
              "start": 4014,
              "end": 4015
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4014,
            "end": 4015
          }
        ],
        "start": 4013,
        "end": 4016
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 4021,
              "end": 4022
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "start": 4028,
                        "end": 4034
                      },
                      "start": 4026,
                      "end": 4034
                    },
                    "start": 4025,
                    "end": 4034
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
                      "start": 4039,
                      "end": 4040
                    },
                    "typeArguments": null,
                    "start": 4039,
                    "end": 4040
                  },
                  "start": 4036,
                  "end": 4040
                },
                "start": 4024,
                "end": 4040
              },
              "start": 4022,
              "end": 4040
            },
            "accessibility": null,
            "static": false,
            "start": 4021,
            "end": 4041
          },
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
              "start": 4044,
              "end": 4045
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
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
                          "start": 4053,
                          "end": 4054
                        },
                        "typeArguments": null,
                        "start": 4053,
                        "end": 4054
                      },
                      "start": 4051,
                      "end": 4054
                    },
                    "start": 4048,
                    "end": 4054
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4059,
                    "end": 4063
                  },
                  "start": 4056,
                  "end": 4063
                },
                "start": 4047,
                "end": 4063
              },
              "start": 4045,
              "end": 4063
            },
            "accessibility": null,
            "static": false,
            "start": 4044,
            "end": 4064
          }
        ],
        "start": 4017,
        "end": 4066
      },
      "declare": false,
      "start": 3998,
      "end": 4066
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 4085,
        "end": 4088
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
              "start": 4089,
              "end": 4090
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4089,
            "end": 4090
          }
        ],
        "start": 4088,
        "end": 4091
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "props",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Props",
                "optional": false,
                "typeAnnotation": null,
                "start": 4099,
                "end": 4104
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
                      "start": 4105,
                      "end": 4106
                    },
                    "typeArguments": null,
                    "start": 4105,
                    "end": 4106
                  }
                ],
                "start": 4104,
                "end": 4107
              },
              "start": 4099,
              "end": 4107
            },
            "start": 4097,
            "end": 4107
          },
          "start": 4092,
          "end": 4107
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNullKeyword",
          "start": 4110,
          "end": 4114
        },
        "start": 4108,
        "end": 4114
      },
      "body": null,
      "expression": false,
      "start": 4068,
      "end": 4115
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 4117,
          "end": 4120
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "SpreadElement",
                "argument": {
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
                        "start": 4134,
                        "end": 4135
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4138,
                            "end": 4139
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "Literal",
                          "value": 10,
                          "raw": "10",
                          "start": 4144,
                          "end": 4146
                        },
                        "id": null,
                        "generator": false,
                        "start": 4137,
                        "end": 4146
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4134,
                      "end": 4146
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
                        "start": 4152,
                        "end": 4153
                      },
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4156,
                            "end": 4159
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
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "arg",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4172,
                                    "end": 4175
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "toString",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4176,
                                    "end": 4184
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4172,
                                  "end": 4184
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 4172,
                                "end": 4186
                              },
                              "directive": null,
                              "start": 4172,
                              "end": 4187
                            }
                          ],
                          "start": 4164,
                          "end": 4193
                        },
                        "id": null,
                        "generator": false,
                        "start": 4155,
                        "end": 4193
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4152,
                      "end": 4193
                    }
                  ],
                  "start": 4128,
                  "end": 4198
                },
                "start": 4125,
                "end": 4198
              }
            ],
            "start": 4121,
            "end": 4201
          }
        ],
        "optional": false,
        "start": 4117,
        "end": 4202
      },
      "directive": null,
      "start": 4117,
      "end": 4203
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nested",
        "optional": false,
        "typeAnnotation": null,
        "start": 4222,
        "end": 4228
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
              "start": 4229,
              "end": 4230
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4229,
            "end": 4230
          }
        ],
        "start": 4228,
        "end": 4231
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "name": "prop",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4241,
                    "end": 4245
                  },
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
                            "name": "produce",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4253,
                            "end": 4260
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg1",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 4269,
                                      "end": 4275
                                    },
                                    "start": 4267,
                                    "end": 4275
                                  },
                                  "start": 4263,
                                  "end": 4275
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
                                    "start": 4280,
                                    "end": 4281
                                  },
                                  "typeArguments": null,
                                  "start": 4280,
                                  "end": 4281
                                },
                                "start": 4277,
                                "end": 4281
                              },
                              "start": 4262,
                              "end": 4281
                            },
                            "start": 4260,
                            "end": 4281
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 4253,
                          "end": 4282
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "consume",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4287,
                            "end": 4294
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg2",
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
                                        "start": 4303,
                                        "end": 4304
                                      },
                                      "typeArguments": null,
                                      "start": 4303,
                                      "end": 4304
                                    },
                                    "start": 4301,
                                    "end": 4304
                                  },
                                  "start": 4297,
                                  "end": 4304
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 4309,
                                  "end": 4313
                                },
                                "start": 4306,
                                "end": 4313
                              },
                              "start": 4296,
                              "end": 4313
                            },
                            "start": 4294,
                            "end": 4313
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 4287,
                          "end": 4314
                        }
                      ],
                      "start": 4247,
                      "end": 4318
                    },
                    "start": 4245,
                    "end": 4318
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4241,
                  "end": 4319
                }
              ],
              "start": 4237,
              "end": 4321
            },
            "start": 4235,
            "end": 4321
          },
          "start": 4232,
          "end": 4321
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
            "start": 4324,
            "end": 4325
          },
          "typeArguments": null,
          "start": 4324,
          "end": 4325
        },
        "start": 4322,
        "end": 4325
      },
      "body": null,
      "expression": false,
      "start": 4205,
      "end": 4326
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
            "name": "resNested",
            "optional": false,
            "typeAnnotation": null,
            "start": 4334,
            "end": 4343
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 4346,
              "end": 4352
            },
            "typeArguments": null,
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
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4357,
                      "end": 4361
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "produce",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4369,
                            "end": 4376
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4379,
                                "end": 4380
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4386,
                                  "end": 4387
                                }
                              ],
                              "start": 4385,
                              "end": 4388
                            },
                            "id": null,
                            "generator": false,
                            "start": 4378,
                            "end": 4388
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4369,
                          "end": 4388
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "consume",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4394,
                            "end": 4401
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4404,
                                "end": 4407
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4412,
                                  "end": 4415
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "join",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4416,
                                  "end": 4420
                                },
                                "optional": false,
                                "computed": false,
                                "start": 4412,
                                "end": 4420
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": ",",
                                  "raw": "\",\"",
                                  "start": 4421,
                                  "end": 4424
                                }
                              ],
                              "optional": false,
                              "start": 4412,
                              "end": 4425
                            },
                            "id": null,
                            "generator": false,
                            "start": 4403,
                            "end": 4425
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 4394,
                          "end": 4425
                        }
                      ],
                      "start": 4363,
                      "end": 4430
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4357,
                    "end": 4430
                  }
                ],
                "start": 4353,
                "end": 4433
              }
            ],
            "optional": false,
            "start": 4346,
            "end": 4434
          },
          "definite": false,
          "start": 4334,
          "end": 4434
        }
      ],
      "declare": false,
      "start": 4328,
      "end": 4435
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "twoConsumers",
        "optional": false,
        "typeAnnotation": null,
        "start": 4454,
        "end": 4466
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
              "start": 4467,
              "end": 4468
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4467,
            "end": 4468
          }
        ],
        "start": 4466,
        "end": 4469
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "start": 4479,
                    "end": 4480
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 4488,
                              "end": 4494
                            },
                            "start": 4486,
                            "end": 4494
                          },
                          "start": 4483,
                          "end": 4494
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
                            "start": 4499,
                            "end": 4500
                          },
                          "typeArguments": null,
                          "start": 4499,
                          "end": 4500
                        },
                        "start": 4496,
                        "end": 4500
                      },
                      "start": 4482,
                      "end": 4500
                    },
                    "start": 4480,
                    "end": 4500
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4479,
                  "end": 4501
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consume1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4504,
                    "end": 4512
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
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
                                "start": 4521,
                                "end": 4522
                              },
                              "typeArguments": null,
                              "start": 4521,
                              "end": 4522
                            },
                            "start": 4519,
                            "end": 4522
                          },
                          "start": 4515,
                          "end": 4522
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 4527,
                          "end": 4531
                        },
                        "start": 4524,
                        "end": 4531
                      },
                      "start": 4514,
                      "end": 4531
                    },
                    "start": 4512,
                    "end": 4531
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4504,
                  "end": 4532
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consume2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4535,
                    "end": 4543
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
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
                                "start": 4552,
                                "end": 4553
                              },
                              "typeArguments": null,
                              "start": 4552,
                              "end": 4553
                            },
                            "start": 4550,
                            "end": 4553
                          },
                          "start": 4546,
                          "end": 4553
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 4558,
                          "end": 4562
                        },
                        "start": 4555,
                        "end": 4562
                      },
                      "start": 4545,
                      "end": 4562
                    },
                    "start": 4543,
                    "end": 4562
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4535,
                  "end": 4563
                }
              ],
              "start": 4475,
              "end": 4565
            },
            "start": 4473,
            "end": 4565
          },
          "start": 4470,
          "end": 4565
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
            "start": 4568,
            "end": 4569
          },
          "typeArguments": null,
          "start": 4568,
          "end": 4569
        },
        "start": 4566,
        "end": 4569
      },
      "body": null,
      "expression": false,
      "start": 4437,
      "end": 4570
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
            "name": "resTwoConsumers",
            "optional": false,
            "typeAnnotation": null,
            "start": 4578,
            "end": 4593
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "twoConsumers",
              "optional": false,
              "typeAnnotation": null,
              "start": 4596,
              "end": 4608
            },
            "typeArguments": null,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4613,
                      "end": 4614
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4617,
                          "end": 4620
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4626,
                            "end": 4629
                          }
                        ],
                        "start": 4625,
                        "end": 4630
                      },
                      "id": null,
                      "generator": false,
                      "start": 4616,
                      "end": 4630
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4613,
                    "end": 4630
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4634,
                      "end": 4642
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4645,
                          "end": 4649
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 4654,
                        "end": 4656
                      },
                      "id": null,
                      "generator": false,
                      "start": 4644,
                      "end": 4656
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4634,
                    "end": 4656
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4660,
                      "end": 4668
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4671,
                          "end": 4675
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 4680,
                        "end": 4682
                      },
                      "id": null,
                      "generator": false,
                      "start": 4670,
                      "end": 4682
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4660,
                    "end": 4682
                  }
                ],
                "start": 4609,
                "end": 4685
              }
            ],
            "optional": false,
            "start": 4596,
            "end": 4686
          },
          "definite": false,
          "start": 4578,
          "end": 4686
        }
      ],
      "declare": false,
      "start": 4572,
      "end": 4687
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "multipleProducersBeforeConsumers",
        "optional": false,
        "typeAnnotation": null,
        "start": 4706,
        "end": 4738
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
              "start": 4739,
              "end": 4740
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4739,
            "end": 4740
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4742,
              "end": 4744
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4742,
            "end": 4744
          }
        ],
        "start": 4738,
        "end": 4745
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "start": 4755,
                    "end": 4756
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 4764,
                              "end": 4770
                            },
                            "start": 4762,
                            "end": 4770
                          },
                          "start": 4759,
                          "end": 4770
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
                            "start": 4775,
                            "end": 4776
                          },
                          "typeArguments": null,
                          "start": 4775,
                          "end": 4776
                        },
                        "start": 4772,
                        "end": 4776
                      },
                      "start": 4758,
                      "end": 4776
                    },
                    "start": 4756,
                    "end": 4776
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4755,
                  "end": 4777
                },
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
                    "start": 4780,
                    "end": 4781
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 4789,
                              "end": 4795
                            },
                            "start": 4787,
                            "end": 4795
                          },
                          "start": 4784,
                          "end": 4795
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4800,
                            "end": 4802
                          },
                          "typeArguments": null,
                          "start": 4800,
                          "end": 4802
                        },
                        "start": 4797,
                        "end": 4802
                      },
                      "start": 4783,
                      "end": 4802
                    },
                    "start": 4781,
                    "end": 4802
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4780,
                  "end": 4803
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consume1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4806,
                    "end": 4814
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
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
                                "start": 4823,
                                "end": 4824
                              },
                              "typeArguments": null,
                              "start": 4823,
                              "end": 4824
                            },
                            "start": 4821,
                            "end": 4824
                          },
                          "start": 4817,
                          "end": 4824
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 4829,
                          "end": 4833
                        },
                        "start": 4826,
                        "end": 4833
                      },
                      "start": 4816,
                      "end": 4833
                    },
                    "start": 4814,
                    "end": 4833
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4806,
                  "end": 4834
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consume2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4837,
                    "end": 4845
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4854,
                                "end": 4856
                              },
                              "typeArguments": null,
                              "start": 4854,
                              "end": 4856
                            },
                            "start": 4852,
                            "end": 4856
                          },
                          "start": 4848,
                          "end": 4856
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 4861,
                          "end": 4865
                        },
                        "start": 4858,
                        "end": 4865
                      },
                      "start": 4847,
                      "end": 4865
                    },
                    "start": 4845,
                    "end": 4865
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4837,
                  "end": 4866
                }
              ],
              "start": 4751,
              "end": 4868
            },
            "start": 4749,
            "end": 4868
          },
          "start": 4746,
          "end": 4868
        }
      ],
      "returnType": {
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
                "start": 4872,
                "end": 4873
              },
              "typeArguments": null,
              "start": 4872,
              "end": 4873
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 4875,
                "end": 4877
              },
              "typeArguments": null,
              "start": 4875,
              "end": 4877
            }
          ],
          "start": 4871,
          "end": 4878
        },
        "start": 4869,
        "end": 4878
      },
      "body": null,
      "expression": false,
      "start": 4689,
      "end": 4879
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
            "name": "resMultipleProducersBeforeConsumers",
            "optional": false,
            "typeAnnotation": null,
            "start": 4887,
            "end": 4922
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "multipleProducersBeforeConsumers",
              "optional": false,
              "typeAnnotation": null,
              "start": 4925,
              "end": 4957
            },
            "typeArguments": null,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4962,
                      "end": 4963
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4966,
                          "end": 4969
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4975,
                            "end": 4978
                          }
                        ],
                        "start": 4974,
                        "end": 4979
                      },
                      "id": null,
                      "generator": false,
                      "start": 4965,
                      "end": 4979
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4962,
                    "end": 4979
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
                      "start": 4983,
                      "end": 4984
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4987,
                          "end": 4990
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Number",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4995,
                          "end": 5001
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5002,
                            "end": 5005
                          }
                        ],
                        "optional": false,
                        "start": 4995,
                        "end": 5006
                      },
                      "id": null,
                      "generator": false,
                      "start": 4986,
                      "end": 5006
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 4983,
                    "end": 5006
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5010,
                      "end": 5018
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5021,
                          "end": 5025
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 5030,
                        "end": 5032
                      },
                      "id": null,
                      "generator": false,
                      "start": 5020,
                      "end": 5032
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5010,
                    "end": 5032
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5036,
                      "end": 5044
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5047,
                          "end": 5051
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 5056,
                        "end": 5058
                      },
                      "id": null,
                      "generator": false,
                      "start": 5046,
                      "end": 5058
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5036,
                    "end": 5058
                  }
                ],
                "start": 4958,
                "end": 5061
              }
            ],
            "optional": false,
            "start": 4925,
            "end": 5062
          },
          "definite": false,
          "start": 4887,
          "end": 5062
        }
      ],
      "declare": false,
      "start": 4881,
      "end": 5063
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "withConditionalExpression",
        "optional": false,
        "typeAnnotation": null,
        "start": 5082,
        "end": 5107
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
              "start": 5108,
              "end": 5109
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5108,
            "end": 5109
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5111,
              "end": 5113
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5111,
            "end": 5113
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T3",
              "optional": false,
              "typeAnnotation": null,
              "start": 5115,
              "end": 5117
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5115,
            "end": 5117
          }
        ],
        "start": 5107,
        "end": 5118
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "start": 5128,
                    "end": 5129
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 5138,
                              "end": 5144
                            },
                            "start": 5136,
                            "end": 5144
                          },
                          "start": 5132,
                          "end": 5144
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
                            "start": 5149,
                            "end": 5150
                          },
                          "typeArguments": null,
                          "start": 5149,
                          "end": 5150
                        },
                        "start": 5146,
                        "end": 5150
                      },
                      "start": 5131,
                      "end": 5150
                    },
                    "start": 5129,
                    "end": 5150
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5128,
                  "end": 5151
                },
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
                    "start": 5154,
                    "end": 5155
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
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
                                "start": 5164,
                                "end": 5165
                              },
                              "typeArguments": null,
                              "start": 5164,
                              "end": 5165
                            },
                            "start": 5162,
                            "end": 5165
                          },
                          "start": 5158,
                          "end": 5165
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5170,
                            "end": 5172
                          },
                          "typeArguments": null,
                          "start": 5170,
                          "end": 5172
                        },
                        "start": 5167,
                        "end": 5172
                      },
                      "start": 5157,
                      "end": 5172
                    },
                    "start": 5155,
                    "end": 5172
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5154,
                  "end": 5173
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5176,
                    "end": 5177
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5186,
                                "end": 5188
                              },
                              "typeArguments": null,
                              "start": 5186,
                              "end": 5188
                            },
                            "start": 5184,
                            "end": 5188
                          },
                          "start": 5180,
                          "end": 5188
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5193,
                            "end": 5195
                          },
                          "typeArguments": null,
                          "start": 5193,
                          "end": 5195
                        },
                        "start": 5190,
                        "end": 5195
                      },
                      "start": 5179,
                      "end": 5195
                    },
                    "start": 5177,
                    "end": 5195
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5176,
                  "end": 5196
                }
              ],
              "start": 5124,
              "end": 5198
            },
            "start": 5122,
            "end": 5198
          },
          "start": 5119,
          "end": 5198
        }
      ],
      "returnType": {
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
                "start": 5202,
                "end": 5203
              },
              "typeArguments": null,
              "start": 5202,
              "end": 5203
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5205,
                "end": 5207
              },
              "typeArguments": null,
              "start": 5205,
              "end": 5207
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 5209,
                "end": 5211
              },
              "typeArguments": null,
              "start": 5209,
              "end": 5211
            }
          ],
          "start": 5201,
          "end": 5212
        },
        "start": 5199,
        "end": 5212
      },
      "body": null,
      "expression": false,
      "start": 5065,
      "end": 5213
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
            "name": "resWithConditionalExpression",
            "optional": false,
            "typeAnnotation": null,
            "start": 5221,
            "end": 5249
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "withConditionalExpression",
              "optional": false,
              "typeAnnotation": null,
              "start": 5252,
              "end": 5277
            },
            "typeArguments": null,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5282,
                      "end": 5283
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5286,
                          "end": 5289
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5295,
                            "end": 5298
                          }
                        ],
                        "start": 5294,
                        "end": 5299
                      },
                      "id": null,
                      "generator": false,
                      "start": 5285,
                      "end": 5299
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5282,
                    "end": 5299
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
                      "start": 5303,
                      "end": 5304
                    },
                    "value": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5306,
                            "end": 5310
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5311,
                            "end": 5317
                          },
                          "optional": false,
                          "computed": false,
                          "start": 5306,
                          "end": 5317
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 5306,
                        "end": 5319
                      },
                      "consequent": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5323,
                            "end": 5326
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Literal",
                            "value": "first",
                            "raw": "\"first\"",
                            "start": 5331,
                            "end": 5338
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "const",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5342,
                              "end": 5347
                            },
                            "typeArguments": null,
                            "start": 5342,
                            "end": 5347
                          },
                          "start": 5331,
                          "end": 5347
                        },
                        "id": null,
                        "generator": false,
                        "start": 5322,
                        "end": 5347
                      },
                      "alternate": {
                        "type": "ArrowFunctionExpression",
                        "expression": true,
                        "async": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5351,
                            "end": 5354
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "TSAsExpression",
                          "expression": {
                            "type": "Literal",
                            "value": "two",
                            "raw": "\"two\"",
                            "start": 5359,
                            "end": 5364
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "const",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5368,
                              "end": 5373
                            },
                            "typeArguments": null,
                            "start": 5368,
                            "end": 5373
                          },
                          "start": 5359,
                          "end": 5373
                        },
                        "id": null,
                        "generator": false,
                        "start": 5350,
                        "end": 5373
                      },
                      "start": 5306,
                      "end": 5373
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5303,
                    "end": 5373
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5377,
                      "end": 5378
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5381,
                          "end": 5384
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Boolean",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5389,
                          "end": 5396
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5397,
                            "end": 5400
                          }
                        ],
                        "optional": false,
                        "start": 5389,
                        "end": 5401
                      },
                      "id": null,
                      "generator": false,
                      "start": 5380,
                      "end": 5401
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5377,
                    "end": 5401
                  }
                ],
                "start": 5278,
                "end": 5404
              }
            ],
            "optional": false,
            "start": 5252,
            "end": 5405
          },
          "definite": false,
          "start": 5221,
          "end": 5405
        }
      ],
      "declare": false,
      "start": 5215,
      "end": 5406
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onion",
        "optional": false,
        "typeAnnotation": null,
        "start": 5425,
        "end": 5430
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
              "start": 5431,
              "end": 5432
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5431,
            "end": 5432
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5434,
              "end": 5436
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5434,
            "end": 5436
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T3",
              "optional": false,
              "typeAnnotation": null,
              "start": 5438,
              "end": 5440
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5438,
            "end": 5440
          }
        ],
        "start": 5430,
        "end": 5441
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "start": 5451,
                    "end": 5452
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 5461,
                              "end": 5467
                            },
                            "start": 5459,
                            "end": 5467
                          },
                          "start": 5455,
                          "end": 5467
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
                            "start": 5472,
                            "end": 5473
                          },
                          "typeArguments": null,
                          "start": 5472,
                          "end": 5473
                        },
                        "start": 5469,
                        "end": 5473
                      },
                      "start": 5454,
                      "end": 5473
                    },
                    "start": 5452,
                    "end": 5473
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5451,
                  "end": 5474
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nested",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5477,
                    "end": 5483
                  },
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
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5491,
                            "end": 5492
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg2",
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
                                        "start": 5501,
                                        "end": 5502
                                      },
                                      "typeArguments": null,
                                      "start": 5501,
                                      "end": 5502
                                    },
                                    "start": 5499,
                                    "end": 5502
                                  },
                                  "start": 5495,
                                  "end": 5502
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5507,
                                    "end": 5509
                                  },
                                  "typeArguments": null,
                                  "start": 5507,
                                  "end": 5509
                                },
                                "start": 5504,
                                "end": 5509
                              },
                              "start": 5494,
                              "end": 5509
                            },
                            "start": 5492,
                            "end": 5509
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 5491,
                          "end": 5510
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nested2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5515,
                            "end": 5522
                          },
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
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5532,
                                    "end": 5533
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSFunctionType",
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "arg2",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "T2",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5542,
                                                "end": 5544
                                              },
                                              "typeArguments": null,
                                              "start": 5542,
                                              "end": 5544
                                            },
                                            "start": 5540,
                                            "end": 5544
                                          },
                                          "start": 5536,
                                          "end": 5544
                                        }
                                      ],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "T3",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5549,
                                            "end": 5551
                                          },
                                          "typeArguments": null,
                                          "start": 5549,
                                          "end": 5551
                                        },
                                        "start": 5546,
                                        "end": 5551
                                      },
                                      "start": 5535,
                                      "end": 5551
                                    },
                                    "start": 5533,
                                    "end": 5551
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 5532,
                                  "end": 5552
                                }
                              ],
                              "start": 5524,
                              "end": 5558
                            },
                            "start": 5522,
                            "end": 5558
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 5515,
                          "end": 5559
                        }
                      ],
                      "start": 5485,
                      "end": 5563
                    },
                    "start": 5483,
                    "end": 5563
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5477,
                  "end": 5564
                }
              ],
              "start": 5447,
              "end": 5566
            },
            "start": 5445,
            "end": 5566
          },
          "start": 5442,
          "end": 5566
        }
      ],
      "returnType": {
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
                "start": 5570,
                "end": 5571
              },
              "typeArguments": null,
              "start": 5570,
              "end": 5571
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5573,
                "end": 5575
              },
              "typeArguments": null,
              "start": 5573,
              "end": 5575
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 5577,
                "end": 5579
              },
              "typeArguments": null,
              "start": 5577,
              "end": 5579
            }
          ],
          "start": 5569,
          "end": 5580
        },
        "start": 5567,
        "end": 5580
      },
      "body": null,
      "expression": false,
      "start": 5408,
      "end": 5581
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
            "name": "resOnion",
            "optional": false,
            "typeAnnotation": null,
            "start": 5589,
            "end": 5597
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "onion",
              "optional": false,
              "typeAnnotation": null,
              "start": 5600,
              "end": 5605
            },
            "typeArguments": null,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5610,
                      "end": 5611
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5614,
                          "end": 5617
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5623,
                            "end": 5626
                          }
                        ],
                        "start": 5622,
                        "end": 5627
                      },
                      "id": null,
                      "generator": false,
                      "start": 5613,
                      "end": 5627
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5610,
                    "end": 5627
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5631,
                      "end": 5637
                    },
                    "value": {
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
                            "start": 5645,
                            "end": 5646
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5649,
                                "end": 5652
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5657,
                                  "end": 5660
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "join",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5661,
                                  "end": 5665
                                },
                                "optional": false,
                                "computed": false,
                                "start": 5657,
                                "end": 5665
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": ",",
                                  "raw": "\",\"",
                                  "start": 5666,
                                  "end": 5669
                                }
                              ],
                              "optional": false,
                              "start": 5657,
                              "end": 5670
                            },
                            "id": null,
                            "generator": false,
                            "start": 5648,
                            "end": 5670
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 5645,
                          "end": 5670
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nested2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5676,
                            "end": 5683
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "c",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5693,
                                  "end": 5694
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "arg",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5697,
                                      "end": 5700
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Boolean",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 5705,
                                      "end": 5712
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5713,
                                        "end": 5716
                                      }
                                    ],
                                    "optional": false,
                                    "start": 5705,
                                    "end": 5717
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 5696,
                                  "end": 5717
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 5693,
                                "end": 5717
                              }
                            ],
                            "start": 5685,
                            "end": 5724
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 5676,
                          "end": 5724
                        }
                      ],
                      "start": 5639,
                      "end": 5729
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5631,
                    "end": 5729
                  }
                ],
                "start": 5606,
                "end": 5732
              }
            ],
            "optional": false,
            "start": 5600,
            "end": 5733
          },
          "definite": false,
          "start": 5589,
          "end": 5733
        }
      ],
      "declare": false,
      "start": 5583,
      "end": 5734
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "onion2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5753,
        "end": 5759
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
              "start": 5760,
              "end": 5761
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5760,
            "end": 5761
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5763,
              "end": 5765
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5763,
            "end": 5765
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T3",
              "optional": false,
              "typeAnnotation": null,
              "start": 5767,
              "end": 5769
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5767,
            "end": 5769
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T4",
              "optional": false,
              "typeAnnotation": null,
              "start": 5771,
              "end": 5773
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 5771,
            "end": 5773
          }
        ],
        "start": 5759,
        "end": 5774
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "start": 5784,
                    "end": 5785
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 5794,
                              "end": 5800
                            },
                            "start": 5792,
                            "end": 5800
                          },
                          "start": 5788,
                          "end": 5800
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
                            "start": 5805,
                            "end": 5806
                          },
                          "typeArguments": null,
                          "start": 5805,
                          "end": 5806
                        },
                        "start": 5802,
                        "end": 5806
                      },
                      "start": 5787,
                      "end": 5806
                    },
                    "start": 5785,
                    "end": 5806
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5784,
                  "end": 5807
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nested",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5810,
                    "end": 5816
                  },
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
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5824,
                            "end": 5825
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg2",
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
                                        "start": 5834,
                                        "end": 5835
                                      },
                                      "typeArguments": null,
                                      "start": 5834,
                                      "end": 5835
                                    },
                                    "start": 5832,
                                    "end": 5835
                                  },
                                  "start": 5828,
                                  "end": 5835
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5840,
                                    "end": 5842
                                  },
                                  "typeArguments": null,
                                  "start": 5840,
                                  "end": 5842
                                },
                                "start": 5837,
                                "end": 5842
                              },
                              "start": 5827,
                              "end": 5842
                            },
                            "start": 5825,
                            "end": 5842
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 5824,
                          "end": 5843
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5848,
                            "end": 5849
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg3",
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
                                        "start": 5858,
                                        "end": 5859
                                      },
                                      "typeArguments": null,
                                      "start": 5858,
                                      "end": 5859
                                    },
                                    "start": 5856,
                                    "end": 5859
                                  },
                                  "start": 5852,
                                  "end": 5859
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "T3",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5864,
                                    "end": 5866
                                  },
                                  "typeArguments": null,
                                  "start": 5864,
                                  "end": 5866
                                },
                                "start": 5861,
                                "end": 5866
                              },
                              "start": 5851,
                              "end": 5866
                            },
                            "start": 5849,
                            "end": 5866
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 5848,
                          "end": 5867
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nested2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5872,
                            "end": 5879
                          },
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
                                    "name": "d",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5889,
                                    "end": 5890
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSFunctionType",
                                      "typeParameters": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "arg4",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "typeName": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "T3",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 5899,
                                                "end": 5901
                                              },
                                              "typeArguments": null,
                                              "start": 5899,
                                              "end": 5901
                                            },
                                            "start": 5897,
                                            "end": 5901
                                          },
                                          "start": 5893,
                                          "end": 5901
                                        }
                                      ],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "T4",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 5906,
                                            "end": 5908
                                          },
                                          "typeArguments": null,
                                          "start": 5906,
                                          "end": 5908
                                        },
                                        "start": 5903,
                                        "end": 5908
                                      },
                                      "start": 5892,
                                      "end": 5908
                                    },
                                    "start": 5890,
                                    "end": 5908
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 5889,
                                  "end": 5909
                                }
                              ],
                              "start": 5881,
                              "end": 5915
                            },
                            "start": 5879,
                            "end": 5915
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 5872,
                          "end": 5916
                        }
                      ],
                      "start": 5818,
                      "end": 5920
                    },
                    "start": 5816,
                    "end": 5920
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5810,
                  "end": 5921
                }
              ],
              "start": 5780,
              "end": 5923
            },
            "start": 5778,
            "end": 5923
          },
          "start": 5775,
          "end": 5923
        }
      ],
      "returnType": {
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
                "start": 5927,
                "end": 5928
              },
              "typeArguments": null,
              "start": 5927,
              "end": 5928
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null,
                "start": 5930,
                "end": 5932
              },
              "typeArguments": null,
              "start": 5930,
              "end": 5932
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T3",
                "optional": false,
                "typeAnnotation": null,
                "start": 5934,
                "end": 5936
              },
              "typeArguments": null,
              "start": 5934,
              "end": 5936
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T4",
                "optional": false,
                "typeAnnotation": null,
                "start": 5938,
                "end": 5940
              },
              "typeArguments": null,
              "start": 5938,
              "end": 5940
            }
          ],
          "start": 5926,
          "end": 5941
        },
        "start": 5924,
        "end": 5941
      },
      "body": null,
      "expression": false,
      "start": 5736,
      "end": 5942
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
            "name": "resOnion2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5950,
            "end": 5959
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "onion2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5962,
              "end": 5968
            },
            "typeArguments": null,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5973,
                      "end": 5974
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5977,
                          "end": 5980
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5986,
                            "end": 5989
                          }
                        ],
                        "start": 5985,
                        "end": 5990
                      },
                      "id": null,
                      "generator": false,
                      "start": 5976,
                      "end": 5990
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5973,
                    "end": 5990
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5994,
                      "end": 6000
                    },
                    "value": {
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
                            "start": 6008,
                            "end": 6009
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6012,
                                "end": 6015
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6020,
                                  "end": 6023
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "join",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6024,
                                  "end": 6028
                                },
                                "optional": false,
                                "computed": false,
                                "start": 6020,
                                "end": 6028
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": ",",
                                  "raw": "\",\"",
                                  "start": 6029,
                                  "end": 6032
                                }
                              ],
                              "optional": false,
                              "start": 6020,
                              "end": 6033
                            },
                            "id": null,
                            "generator": false,
                            "start": 6011,
                            "end": 6033
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 6008,
                          "end": 6033
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6039,
                            "end": 6040
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arg",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6043,
                                "end": 6046
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Number",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6051,
                                "end": 6057
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6058,
                                  "end": 6061
                                }
                              ],
                              "optional": false,
                              "start": 6051,
                              "end": 6062
                            },
                            "id": null,
                            "generator": false,
                            "start": 6042,
                            "end": 6062
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 6039,
                          "end": 6062
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "nested2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6068,
                            "end": 6075
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "d",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6085,
                                  "end": 6086
                                },
                                "value": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "arg",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6089,
                                      "end": 6092
                                    }
                                  ],
                                  "returnType": null,
                                  "body": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Boolean",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 6097,
                                      "end": 6104
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "arg",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6105,
                                        "end": 6108
                                      }
                                    ],
                                    "optional": false,
                                    "start": 6097,
                                    "end": 6109
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 6088,
                                  "end": 6109
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 6085,
                                "end": 6109
                              }
                            ],
                            "start": 6077,
                            "end": 6116
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 6068,
                          "end": 6116
                        }
                      ],
                      "start": 6002,
                      "end": 6121
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 5994,
                    "end": 6121
                  }
                ],
                "start": 5969,
                "end": 6124
              }
            ],
            "optional": false,
            "start": 5962,
            "end": 6125
          },
          "definite": false,
          "start": 5950,
          "end": 6125
        }
      ],
      "declare": false,
      "start": 5944,
      "end": 6126
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "distant",
        "optional": false,
        "typeAnnotation": null,
        "start": 6145,
        "end": 6152
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
              "start": 6153,
              "end": 6154
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 6153,
            "end": 6154
          }
        ],
        "start": 6152,
        "end": 6155
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "args",
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6166,
                    "end": 6169
                  },
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
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6177,
                            "end": 6180
                          },
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
                                    "name": "baz",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6190,
                                    "end": 6193
                                  },
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
                                            "name": "producer",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6205,
                                            "end": 6213
                                          },
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSFunctionType",
                                              "typeParameters": null,
                                              "params": [
                                                {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "arg",
                                                  "optional": false,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeAnnotation",
                                                    "typeAnnotation": {
                                                      "type": "TSStringKeyword",
                                                      "start": 6221,
                                                      "end": 6227
                                                    },
                                                    "start": 6219,
                                                    "end": 6227
                                                  },
                                                  "start": 6216,
                                                  "end": 6227
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
                                                    "start": 6232,
                                                    "end": 6233
                                                  },
                                                  "typeArguments": null,
                                                  "start": 6232,
                                                  "end": 6233
                                                },
                                                "start": 6229,
                                                "end": 6233
                                              },
                                              "start": 6215,
                                              "end": 6233
                                            },
                                            "start": 6213,
                                            "end": 6233
                                          },
                                          "accessibility": null,
                                          "static": false,
                                          "start": 6205,
                                          "end": 6234
                                        }
                                      ],
                                      "start": 6195,
                                      "end": 6242
                                    },
                                    "start": 6193,
                                    "end": 6242
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 6190,
                                  "end": 6243
                                }
                              ],
                              "start": 6182,
                              "end": 6249
                            },
                            "start": 6180,
                            "end": 6249
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 6177,
                          "end": 6250
                        }
                      ],
                      "start": 6171,
                      "end": 6254
                    },
                    "start": 6169,
                    "end": 6254
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6166,
                  "end": 6255
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "consumer",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6258,
                    "end": 6266
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6274,
                                "end": 6275
                              },
                              "typeArguments": null,
                              "start": 6274,
                              "end": 6275
                            },
                            "start": 6272,
                            "end": 6275
                          },
                          "start": 6269,
                          "end": 6275
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnknownKeyword",
                          "start": 6280,
                          "end": 6287
                        },
                        "start": 6277,
                        "end": 6287
                      },
                      "start": 6268,
                      "end": 6287
                    },
                    "start": 6266,
                    "end": 6287
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 6258,
                  "end": 6288
                }
              ],
              "start": 6162,
              "end": 6290
            },
            "start": 6160,
            "end": 6290
          },
          "start": 6156,
          "end": 6290
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
            "start": 6293,
            "end": 6294
          },
          "typeArguments": null,
          "start": 6293,
          "end": 6294
        },
        "start": 6291,
        "end": 6294
      },
      "body": null,
      "expression": false,
      "start": 6128,
      "end": 6295
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
            "name": "distantRes",
            "optional": false,
            "typeAnnotation": null,
            "start": 6303,
            "end": 6313
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "distant",
              "optional": false,
              "typeAnnotation": null,
              "start": 6316,
              "end": 6323
            },
            "typeArguments": null,
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
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6328,
                      "end": 6331
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6339,
                            "end": 6342
                          },
                          "value": {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "baz",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6352,
                                  "end": 6355
                                },
                                "value": {
                                  "type": "ObjectExpression",
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "producer",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6367,
                                        "end": 6375
                                      },
                                      "value": {
                                        "type": "ArrowFunctionExpression",
                                        "expression": true,
                                        "async": false,
                                        "typeParameters": null,
                                        "params": [
                                          {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "arg",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 6378,
                                            "end": 6381
                                          }
                                        ],
                                        "returnType": null,
                                        "body": {
                                          "type": "Literal",
                                          "value": 1,
                                          "raw": "1",
                                          "start": 6386,
                                          "end": 6387
                                        },
                                        "id": null,
                                        "generator": false,
                                        "start": 6377,
                                        "end": 6387
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 6367,
                                      "end": 6387
                                    }
                                  ],
                                  "start": 6357,
                                  "end": 6396
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 6352,
                                "end": 6396
                              }
                            ],
                            "start": 6344,
                            "end": 6403
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 6339,
                          "end": 6403
                        }
                      ],
                      "start": 6333,
                      "end": 6408
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 6328,
                    "end": 6408
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consumer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6412,
                      "end": 6420
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6423,
                          "end": 6426
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 6431,
                        "end": 6433
                      },
                      "id": null,
                      "generator": false,
                      "start": 6422,
                      "end": 6433
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 6412,
                    "end": 6433
                  }
                ],
                "start": 6324,
                "end": 6436
              }
            ],
            "optional": false,
            "start": 6316,
            "end": 6437
          },
          "definite": false,
          "start": 6303,
          "end": 6437
        }
      ],
      "declare": false,
      "start": 6297,
      "end": 6438
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 6438
}
```
