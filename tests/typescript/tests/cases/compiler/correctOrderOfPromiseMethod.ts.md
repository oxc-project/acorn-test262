__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 624,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 30,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 28,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 32,
      "end": 81,
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 43,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 44,
        "end": 81,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 50,
            "end": 60,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 50,
              "end": 52,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 60,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 54,
                "end": 60
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 65,
            "end": 79,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 71,
              "decorators": [],
              "name": "fieldB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 71,
              "end": 79,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 73,
                "end": 79
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 83,
      "end": 517,
      "id": {
        "type": "Identifier",
        "start": 98,
        "end": 113,
        "decorators": [],
        "name": "countEverything",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 115,
        "end": 132,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 117,
          "end": 132,
          "typeName": {
            "type": "Identifier",
            "start": 117,
            "end": 124,
            "decorators": [],
            "name": "Promise",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 124,
            "end": 132,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 125,
                "end": 131
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 133,
        "end": 517,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 139,
            "end": 196,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 145,
                "end": 196,
                "id": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 154,
                  "decorators": [],
                  "name": "providerA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 157,
                  "end": 196,
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 165,
                    "end": 179,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 167,
                      "end": 179,
                      "typeName": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 174,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 174,
                        "end": 179,
                        "params": [
                          {
                            "type": "TSArrayType",
                            "start": 175,
                            "end": 178,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 175,
                              "end": 176,
                              "typeName": {
                                "type": "Identifier",
                                "start": 175,
                                "end": 176,
                                "decorators": [],
                                "name": "A",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        ]
                      }
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 183,
                    "end": 196,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 185,
                        "end": 194,
                        "argument": {
                          "type": "ArrayExpression",
                          "start": 192,
                          "end": 194,
                          "elements": []
                        }
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 201,
            "end": 258,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 207,
                "end": 258,
                "id": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 216,
                  "decorators": [],
                  "name": "providerB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 219,
                  "end": 258,
                  "expression": false,
                  "async": true,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 227,
                    "end": 241,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 229,
                      "end": 241,
                      "typeName": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 236,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 236,
                        "end": 241,
                        "params": [
                          {
                            "type": "TSArrayType",
                            "start": 237,
                            "end": 240,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 237,
                              "end": 238,
                              "typeName": {
                                "type": "Identifier",
                                "start": 237,
                                "end": 238,
                                "decorators": [],
                                "name": "B",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        ]
                      }
                    }
                  },
                  "body": {
                    "type": "BlockStatement",
                    "start": 245,
                    "end": 258,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 247,
                        "end": 256,
                        "argument": {
                          "type": "ArrayExpression",
                          "start": 254,
                          "end": 256,
                          "elements": []
                        }
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 264,
            "end": 360,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 270,
                "end": 359,
                "id": {
                  "type": "ArrayPattern",
                  "start": 270,
                  "end": 288,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 271,
                      "end": 278,
                      "decorators": [],
                      "name": "resultA",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 280,
                      "end": 287,
                      "decorators": [],
                      "name": "resultB",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 291,
                  "end": 359,
                  "argument": {
                    "type": "CallExpression",
                    "start": 297,
                    "end": 359,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 297,
                      "end": 308,
                      "object": {
                        "type": "Identifier",
                        "start": 297,
                        "end": 304,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 305,
                        "end": 308,
                        "decorators": [],
                        "name": "all",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "start": 309,
                        "end": 358,
                        "elements": [
                          {
                            "type": "CallExpression",
                            "start": 319,
                            "end": 330,
                            "callee": {
                              "type": "Identifier",
                              "start": 319,
                              "end": 328,
                              "decorators": [],
                              "name": "providerA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          {
                            "type": "CallExpression",
                            "start": 340,
                            "end": 351,
                            "callee": {
                              "type": "Identifier",
                              "start": 340,
                              "end": 349,
                              "decorators": [],
                              "name": "providerB",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          }
                        ]
                      }
                    ],
                    "optional": false
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 366,
            "end": 393,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 372,
                "end": 392,
                "id": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 382,
                  "decorators": [],
                  "name": "dataA",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 377,
                    "end": 382,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 379,
                      "end": 382,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 379,
                        "end": 380,
                        "typeName": {
                          "type": "Identifier",
                          "start": 379,
                          "end": 380,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 385,
                  "end": 392,
                  "decorators": [],
                  "name": "resultA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 398,
            "end": 425,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 404,
                "end": 424,
                "id": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 414,
                  "decorators": [],
                  "name": "dataB",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 409,
                    "end": 414,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 411,
                      "end": 414,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 411,
                        "end": 412,
                        "typeName": {
                          "type": "Identifier",
                          "start": 411,
                          "end": 412,
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 424,
                  "decorators": [],
                  "name": "resultB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 430,
            "end": 501,
            "test": {
              "type": "LogicalExpression",
              "start": 434,
              "end": 448,
              "left": {
                "type": "Identifier",
                "start": 434,
                "end": 439,
                "decorators": [],
                "name": "dataA",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "start": 443,
                "end": 448,
                "decorators": [],
                "name": "dataB",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 450,
              "end": 501,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 460,
                  "end": 495,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 467,
                    "end": 494,
                    "left": {
                      "type": "MemberExpression",
                      "start": 467,
                      "end": 479,
                      "object": {
                        "type": "Identifier",
                        "start": 467,
                        "end": 472,
                        "decorators": [],
                        "name": "dataA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 473,
                        "end": 479,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "operator": "+",
                    "right": {
                      "type": "MemberExpression",
                      "start": 482,
                      "end": 494,
                      "object": {
                        "type": "Identifier",
                        "start": 482,
                        "end": 487,
                        "decorators": [],
                        "name": "dataB",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 488,
                        "end": 494,
                        "decorators": [],
                        "name": "length",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 506,
            "end": 515,
            "argument": {
              "type": "Literal",
              "start": 513,
              "end": 514,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 530,
      "end": 624,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 536,
          "end": 623,
          "id": {
            "type": "Identifier",
            "start": 536,
            "end": 570,
            "decorators": [],
            "name": "expected",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 544,
              "end": 570,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 546,
                "end": 570,
                "typeName": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 553,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 553,
                  "end": 570,
                  "params": [
                    {
                      "type": "TSTupleType",
                      "start": 554,
                      "end": 569,
                      "elementTypes": [
                        {
                          "type": "TSLiteralType",
                          "start": 555,
                          "end": 558,
                          "literal": {
                            "type": "Literal",
                            "start": 555,
                            "end": 558,
                            "value": "a",
                            "raw": "\"a\""
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 560,
                          "end": 563,
                          "literal": {
                            "type": "Literal",
                            "start": 560,
                            "end": 563,
                            "value": "b",
                            "raw": "\"b\""
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 565,
                          "end": 568,
                          "literal": {
                            "type": "Literal",
                            "start": 565,
                            "end": 568,
                            "value": "c",
                            "raw": "\"c\""
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 573,
            "end": 623,
            "callee": {
              "type": "MemberExpression",
              "start": 573,
              "end": 584,
              "object": {
                "type": "Identifier",
                "start": 573,
                "end": 580,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 581,
                "end": 584,
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSAsExpression",
                "start": 585,
                "end": 622,
                "expression": {
                  "type": "Identifier",
                  "start": 585,
                  "end": 594,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "start": 598,
                  "end": 622,
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 607,
                    "end": 622,
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "start": 608,
                        "end": 611,
                        "literal": {
                          "type": "Literal",
                          "start": 608,
                          "end": 611,
                          "value": "a",
                          "raw": "\"a\""
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 613,
                        "end": 616,
                        "literal": {
                          "type": "Literal",
                          "start": 613,
                          "end": 616,
                          "value": "b",
                          "raw": "\"b\""
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 618,
                        "end": 621,
                        "literal": {
                          "type": "Literal",
                          "start": 618,
                          "end": 621,
                          "value": "c",
                          "raw": "\"c\""
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
