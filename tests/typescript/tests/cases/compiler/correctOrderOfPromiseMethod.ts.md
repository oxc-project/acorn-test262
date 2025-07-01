__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 28
          }
        ],
        "start": 12,
        "end": 30
      },
      "declare": false,
      "start": 0,
      "end": 30
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 42,
        "end": 43
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 54,
                "end": 60
              },
              "start": 52,
              "end": 60
            },
            "accessibility": null,
            "static": false,
            "start": 50,
            "end": 60
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fieldB",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 71
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              },
              "start": 71,
              "end": 79
            },
            "accessibility": null,
            "static": false,
            "start": 65,
            "end": 79
          }
        ],
        "start": 44,
        "end": 81
      },
      "declare": false,
      "start": 32,
      "end": 81
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "countEverything",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 113
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null,
            "start": 117,
            "end": 124
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 125,
                "end": 131
              }
            ],
            "start": 124,
            "end": 132
          },
          "start": 117,
          "end": 132
        },
        "start": 115,
        "end": 132
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
                  "name": "providerA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 154
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 174
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 175,
                                "end": 176
                              },
                              "typeArguments": null,
                              "start": 175,
                              "end": 176
                            },
                            "start": 175,
                            "end": 178
                          }
                        ],
                        "start": 174,
                        "end": 179
                      },
                      "start": 167,
                      "end": 179
                    },
                    "start": 165,
                    "end": 179
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 192,
                          "end": 194
                        },
                        "start": 185,
                        "end": 194
                      }
                    ],
                    "start": 183,
                    "end": 196
                  },
                  "id": null,
                  "generator": false,
                  "start": 157,
                  "end": 196
                },
                "definite": false,
                "start": 145,
                "end": 196
              }
            ],
            "declare": false,
            "start": 139,
            "end": 196
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
                  "name": "providerB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 207,
                  "end": 216
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 229,
                        "end": 236
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 237,
                                "end": 238
                              },
                              "typeArguments": null,
                              "start": 237,
                              "end": 238
                            },
                            "start": 237,
                            "end": 240
                          }
                        ],
                        "start": 236,
                        "end": 241
                      },
                      "start": 229,
                      "end": 241
                    },
                    "start": 227,
                    "end": 241
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 254,
                          "end": 256
                        },
                        "start": 247,
                        "end": 256
                      }
                    ],
                    "start": 245,
                    "end": 258
                  },
                  "id": null,
                  "generator": false,
                  "start": 219,
                  "end": 258
                },
                "definite": false,
                "start": 207,
                "end": 258
              }
            ],
            "declare": false,
            "start": 201,
            "end": 258
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resultA",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 278
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resultB",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 280,
                      "end": 287
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 288
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 297,
                        "end": 304
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "all",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 305,
                        "end": 308
                      },
                      "optional": false,
                      "computed": false,
                      "start": 297,
                      "end": 308
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "providerA",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 319,
                              "end": 328
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 319,
                            "end": 330
                          },
                          {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "providerB",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 340,
                              "end": 349
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 340,
                            "end": 351
                          }
                        ],
                        "start": 309,
                        "end": 358
                      }
                    ],
                    "optional": false,
                    "start": 297,
                    "end": 359
                  },
                  "start": 291,
                  "end": 359
                },
                "definite": false,
                "start": 270,
                "end": 359
              }
            ],
            "declare": false,
            "start": 264,
            "end": 360
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
                  "name": "dataA",
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
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 379,
                          "end": 380
                        },
                        "typeArguments": null,
                        "start": 379,
                        "end": 380
                      },
                      "start": 379,
                      "end": 382
                    },
                    "start": 377,
                    "end": 382
                  },
                  "start": 372,
                  "end": 382
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resultA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 385,
                  "end": 392
                },
                "definite": false,
                "start": 372,
                "end": 392
              }
            ],
            "declare": false,
            "start": 366,
            "end": 393
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
                  "name": "dataB",
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
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 411,
                          "end": 412
                        },
                        "typeArguments": null,
                        "start": 411,
                        "end": 412
                      },
                      "start": 411,
                      "end": 414
                    },
                    "start": 409,
                    "end": 414
                  },
                  "start": 404,
                  "end": 414
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resultB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 424
                },
                "definite": false,
                "start": 404,
                "end": 424
              }
            ],
            "declare": false,
            "start": 398,
            "end": 425
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "dataA",
                "optional": false,
                "typeAnnotation": null,
                "start": 434,
                "end": 439
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "dataB",
                "optional": false,
                "typeAnnotation": null,
                "start": 443,
                "end": 448
              },
              "start": 434,
              "end": 448
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dataA",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 467,
                        "end": 472
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 473,
                        "end": 479
                      },
                      "optional": false,
                      "computed": false,
                      "start": 467,
                      "end": 479
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "dataB",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 482,
                        "end": 487
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 488,
                        "end": 494
                      },
                      "optional": false,
                      "computed": false,
                      "start": 482,
                      "end": 494
                    },
                    "start": 467,
                    "end": 494
                  },
                  "start": 460,
                  "end": 495
                }
              ],
              "start": 450,
              "end": 501
            },
            "alternate": null,
            "start": 430,
            "end": 501
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 513,
              "end": 514
            },
            "start": 506,
            "end": 515
          }
        ],
        "start": 133,
        "end": 517
      },
      "expression": false,
      "start": 83,
      "end": 517
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
            "name": "expected",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 546,
                  "end": 553
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTupleType",
                      "elementTypes": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 555,
                            "end": 558
                          },
                          "start": 555,
                          "end": 558
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\"",
                            "start": 560,
                            "end": 563
                          },
                          "start": 560,
                          "end": 563
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "c",
                            "raw": "\"c\"",
                            "start": 565,
                            "end": 568
                          },
                          "start": 565,
                          "end": 568
                        }
                      ],
                      "start": 554,
                      "end": 569
                    }
                  ],
                  "start": 553,
                  "end": 570
                },
                "start": 546,
                "end": 570
              },
              "start": 544,
              "end": 570
            },
            "start": 536,
            "end": 570
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 573,
                "end": 580
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 581,
                "end": 584
              },
              "optional": false,
              "computed": false,
              "start": 573,
              "end": 584
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 585,
                  "end": 594
                },
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 608,
                          "end": 611
                        },
                        "start": 608,
                        "end": 611
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 613,
                          "end": 616
                        },
                        "start": 613,
                        "end": 616
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "c",
                          "raw": "\"c\"",
                          "start": 618,
                          "end": 621
                        },
                        "start": 618,
                        "end": 621
                      }
                    ],
                    "start": 607,
                    "end": 622
                  },
                  "start": 598,
                  "end": 622
                },
                "start": 585,
                "end": 622
              }
            ],
            "optional": false,
            "start": 573,
            "end": 623
          },
          "definite": false,
          "start": 536,
          "end": 623
        }
      ],
      "declare": false,
      "start": 530,
      "end": 624
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 624
}
```
