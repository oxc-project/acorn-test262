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
        "name": "NodeArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 19
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
              "start": 20,
              "end": 21
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 34
              },
              "typeArguments": null,
              "start": 30,
              "end": 34
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 34
          }
        ],
        "start": 19,
        "end": 35
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "ReadonlyArray",
            "optional": false,
            "typeAnnotation": null,
            "start": 44,
            "end": 57
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
                  "start": 58,
                  "end": 59
                },
                "typeArguments": null,
                "start": 58,
                "end": 59
              }
            ],
            "start": 57,
            "end": 60
          },
          "start": 44,
          "end": 60
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 61,
        "end": 63
      },
      "declare": false,
      "start": 0,
      "end": 63
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Node",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 79
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
              "name": "forEachChild",
              "optional": false,
              "typeAnnotation": null,
              "start": 86,
              "end": 98
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cbNode",
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
                        "name": "node",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Node",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 117,
                              "end": 121
                            },
                            "typeArguments": null,
                            "start": 117,
                            "end": 121
                          },
                          "start": 115,
                          "end": 121
                        },
                        "start": 111,
                        "end": 121
                      }
                    ],
                    "returnType": {
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
                              "start": 126,
                              "end": 127
                            },
                            "typeArguments": null,
                            "start": 126,
                            "end": 127
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 130,
                            "end": 139
                          }
                        ],
                        "start": 126,
                        "end": 139
                      },
                      "start": 123,
                      "end": 139
                    },
                    "start": 110,
                    "end": 139
                  },
                  "start": 108,
                  "end": 139
                },
                "start": 102,
                "end": 139
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cbNodeArray",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "nodes",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "NodeArray",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 163,
                              "end": 172
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Node",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 173,
                                    "end": 177
                                  },
                                  "typeArguments": null,
                                  "start": 173,
                                  "end": 177
                                }
                              ],
                              "start": 172,
                              "end": 178
                            },
                            "start": 163,
                            "end": 178
                          },
                          "start": 161,
                          "end": 178
                        },
                        "start": 156,
                        "end": 178
                      }
                    ],
                    "returnType": {
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
                              "start": 183,
                              "end": 184
                            },
                            "typeArguments": null,
                            "start": 183,
                            "end": 184
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 187,
                            "end": 196
                          }
                        ],
                        "start": 183,
                        "end": 196
                      },
                      "start": 180,
                      "end": 196
                    },
                    "start": 155,
                    "end": 196
                  },
                  "start": 153,
                  "end": 196
                },
                "start": 141,
                "end": 196
              }
            ],
            "returnType": {
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
                      "start": 199,
                      "end": 200
                    },
                    "typeArguments": null,
                    "start": 199,
                    "end": 200
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 203,
                    "end": 212
                  }
                ],
                "start": 199,
                "end": 212
              },
              "start": 197,
              "end": 212
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 86,
            "end": 213
          }
        ],
        "start": 80,
        "end": 215
      },
      "declare": false,
      "start": 65,
      "end": 215
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "toArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 241
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
              "start": 242,
              "end": 243
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 242,
            "end": 243
          }
        ],
        "start": 241,
        "end": 244
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
                    "start": 252,
                    "end": 253
                  },
                  "typeArguments": null,
                  "start": 252,
                  "end": 253
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
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
                }
              ],
              "start": 252,
              "end": 259
            },
            "start": 250,
            "end": 259
          },
          "start": 245,
          "end": 259
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 262,
              "end": 263
            },
            "typeArguments": null,
            "start": 262,
            "end": 263
          },
          "start": 262,
          "end": 265
        },
        "start": 260,
        "end": 265
      },
      "body": null,
      "expression": false,
      "start": 217,
      "end": 266
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "toArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 284,
        "end": 291
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
              "start": 292,
              "end": 293
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 292,
            "end": 293
          }
        ],
        "start": 291,
        "end": 294
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
                    "start": 302,
                    "end": 303
                  },
                  "typeArguments": null,
                  "start": 302,
                  "end": 303
                },
                {
                  "type": "TSTypeOperator",
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 315,
                        "end": 316
                      },
                      "typeArguments": null,
                      "start": 315,
                      "end": 316
                    },
                    "start": 315,
                    "end": 318
                  },
                  "start": 306,
                  "end": 318
                }
              ],
              "start": 302,
              "end": 318
            },
            "start": 300,
            "end": 318
          },
          "start": 295,
          "end": 318
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 331
              },
              "typeArguments": null,
              "start": 330,
              "end": 331
            },
            "start": 330,
            "end": 333
          },
          "start": 321,
          "end": 333
        },
        "start": 319,
        "end": 333
      },
      "body": null,
      "expression": false,
      "start": 267,
      "end": 334
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flatMapChildren",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 360
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
              "start": 361,
              "end": 362
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 361,
            "end": 362
          }
        ],
        "start": 360,
        "end": 363
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 370,
                "end": 374
              },
              "typeArguments": null,
              "start": 370,
              "end": 374
            },
            "start": 368,
            "end": 374
          },
          "start": 364,
          "end": 374
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "child",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 388,
                        "end": 392
                      },
                      "typeArguments": null,
                      "start": 388,
                      "end": 392
                    },
                    "start": 386,
                    "end": 392
                  },
                  "start": 381,
                  "end": 392
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeOperator",
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 406,
                            "end": 407
                          },
                          "typeArguments": null,
                          "start": 406,
                          "end": 407
                        },
                        "start": 406,
                        "end": 409
                      },
                      "start": 397,
                      "end": 409
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 412,
                        "end": 413
                      },
                      "typeArguments": null,
                      "start": 412,
                      "end": 413
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 416,
                      "end": 425
                    }
                  ],
                  "start": 397,
                  "end": 425
                },
                "start": 394,
                "end": 425
              },
              "start": 380,
              "end": 425
            },
            "start": 378,
            "end": 425
          },
          "start": 376,
          "end": 425
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 437,
                "end": 438
              },
              "typeArguments": null,
              "start": 437,
              "end": 438
            },
            "start": 437,
            "end": 440
          },
          "start": 428,
          "end": 440
        },
        "start": 426,
        "end": 440
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
                  "name": "result",
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 461,
                          "end": 462
                        },
                        "typeArguments": null,
                        "start": 461,
                        "end": 462
                      },
                      "start": 461,
                      "end": 464
                    },
                    "start": 459,
                    "end": 464
                  },
                  "start": 453,
                  "end": 464
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 467,
                  "end": 469
                },
                "definite": false,
                "start": 453,
                "end": 469
              }
            ],
            "declare": false,
            "start": 447,
            "end": 470
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
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 475,
                  "end": 479
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEachChild",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 480,
                  "end": 492
                },
                "optional": false,
                "computed": false,
                "start": 475,
                "end": 492
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
                      "name": "child",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 493,
                      "end": 498
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
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 518,
                              "end": 523
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "cb",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 526,
                                "end": 528
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "child",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 529,
                                  "end": 534
                                }
                              ],
                              "optional": false,
                              "start": 526,
                              "end": 535
                            },
                            "definite": false,
                            "start": 518,
                            "end": 535
                          }
                        ],
                        "declare": false,
                        "start": 512,
                        "end": 536
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
                            "start": 549,
                            "end": 554
                          },
                          "operator": "!==",
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 559,
                            "end": 568
                          },
                          "start": 549,
                          "end": 568
                        },
                        "consequent": {
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
                                    "name": "result",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 584,
                                    "end": 590
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "push",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 591,
                                    "end": 595
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 584,
                                  "end": 595
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "argument": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "toArray",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 599,
                                        "end": 606
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 607,
                                          "end": 612
                                        }
                                      ],
                                      "optional": false,
                                      "start": 599,
                                      "end": 613
                                    },
                                    "start": 596,
                                    "end": 613
                                  }
                                ],
                                "optional": false,
                                "start": 584,
                                "end": 614
                              },
                              "directive": null,
                              "start": 584,
                              "end": 615
                            }
                          ],
                          "start": 570,
                          "end": 625
                        },
                        "alternate": null,
                        "start": 545,
                        "end": 625
                      }
                    ],
                    "start": 502,
                    "end": 631
                  },
                  "id": null,
                  "generator": false,
                  "start": 493,
                  "end": 631
                }
              ],
              "optional": false,
              "start": 475,
              "end": 632
            },
            "directive": null,
            "start": 475,
            "end": 633
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 651
            },
            "start": 638,
            "end": 652
          }
        ],
        "start": 441,
        "end": 654
      },
      "expression": false,
      "start": 336,
      "end": 654
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "flatMapChildren2",
        "optional": false,
        "typeAnnotation": null,
        "start": 665,
        "end": 681
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
              "start": 682,
              "end": 683
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 682,
            "end": 683
          }
        ],
        "start": 681,
        "end": 684
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "node",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Node",
                "optional": false,
                "typeAnnotation": null,
                "start": 691,
                "end": 695
              },
              "typeArguments": null,
              "start": 691,
              "end": 695
            },
            "start": 689,
            "end": 695
          },
          "start": 685,
          "end": 695
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
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
                  "name": "child",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Node",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 709,
                        "end": 713
                      },
                      "typeArguments": null,
                      "start": 709,
                      "end": 713
                    },
                    "start": 707,
                    "end": 713
                  },
                  "start": 702,
                  "end": 713
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeOperator",
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 727,
                            "end": 728
                          },
                          "typeArguments": null,
                          "start": 727,
                          "end": 728
                        },
                        "start": 727,
                        "end": 730
                      },
                      "start": 718,
                      "end": 730
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 733,
                        "end": 734
                      },
                      "typeArguments": null,
                      "start": 733,
                      "end": 734
                    },
                    {
                      "type": "TSNullKeyword",
                      "start": 737,
                      "end": 741
                    }
                  ],
                  "start": 718,
                  "end": 741
                },
                "start": 715,
                "end": 741
              },
              "start": 701,
              "end": 741
            },
            "start": 699,
            "end": 741
          },
          "start": 697,
          "end": 741
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSArrayType",
            "elementType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 753,
                "end": 754
              },
              "typeArguments": null,
              "start": 753,
              "end": 754
            },
            "start": 753,
            "end": 756
          },
          "start": 744,
          "end": 756
        },
        "start": 742,
        "end": 756
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
                  "name": "result",
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
                      "start": 777,
                      "end": 780
                    },
                    "start": 775,
                    "end": 780
                  },
                  "start": 769,
                  "end": 780
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 783,
                  "end": 785
                },
                "definite": false,
                "start": 769,
                "end": 785
              }
            ],
            "declare": false,
            "start": 763,
            "end": 786
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
                  "name": "node",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 791,
                  "end": 795
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "forEachChild",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 796,
                  "end": 808
                },
                "optional": false,
                "computed": false,
                "start": 791,
                "end": 808
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
                      "name": "child",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 809,
                      "end": 814
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
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 834,
                              "end": 839
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "cb",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 842,
                                "end": 844
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "child",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 845,
                                  "end": 850
                                }
                              ],
                              "optional": false,
                              "start": 842,
                              "end": 851
                            },
                            "definite": false,
                            "start": 834,
                            "end": 851
                          }
                        ],
                        "declare": false,
                        "start": 828,
                        "end": 852
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
                            "start": 865,
                            "end": 870
                          },
                          "operator": "!==",
                          "right": {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 875,
                            "end": 879
                          },
                          "start": 865,
                          "end": 879
                        },
                        "consequent": {
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
                                    "name": "result",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 895,
                                    "end": 901
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "push",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 902,
                                    "end": 906
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 895,
                                  "end": 906
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "SpreadElement",
                                    "argument": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "toArray",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 910,
                                        "end": 917
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 918,
                                          "end": 923
                                        }
                                      ],
                                      "optional": false,
                                      "start": 910,
                                      "end": 924
                                    },
                                    "start": 907,
                                    "end": 924
                                  }
                                ],
                                "optional": false,
                                "start": 895,
                                "end": 925
                              },
                              "directive": null,
                              "start": 895,
                              "end": 926
                            }
                          ],
                          "start": 881,
                          "end": 936
                        },
                        "alternate": null,
                        "start": 861,
                        "end": 936
                      }
                    ],
                    "start": 818,
                    "end": 942
                  },
                  "id": null,
                  "generator": false,
                  "start": 809,
                  "end": 942
                }
              ],
              "optional": false,
              "start": 791,
              "end": 943
            },
            "directive": null,
            "start": 791,
            "end": 944
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null,
              "start": 956,
              "end": 962
            },
            "start": 949,
            "end": 963
          }
        ],
        "start": 757,
        "end": 965
      },
      "expression": false,
      "start": 656,
      "end": 965
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 965
}
```
