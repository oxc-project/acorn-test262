__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 634,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 69,
        "decorators": [],
        "name": "TaggedA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 72,
        "end": 85,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 74,
            "end": 83,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 78,
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 83,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 80,
                "end": 83,
                "literal": {
                  "type": "Literal",
                  "start": 80,
                  "end": 83,
                  "value": "a",
                  "raw": "\"a\""
                }
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
      "type": "TSTypeAliasDeclaration",
      "start": 87,
      "end": 116,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 99,
        "decorators": [],
        "name": "TaggedB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 102,
        "end": 115,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 104,
            "end": 113,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 108,
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 113,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 110,
                "end": 113,
                "literal": {
                  "type": "Literal",
                  "start": 110,
                  "end": 113,
                  "value": "b",
                  "raw": "\"b\""
                }
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
      "type": "TSTypeAliasDeclaration",
      "start": 118,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 134,
        "decorators": [],
        "name": "TaggedUnion",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 137,
        "end": 154,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 137,
            "end": 144,
            "typeName": {
              "type": "Identifier",
              "start": 137,
              "end": 144,
              "decorators": [],
              "name": "TaggedA",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 147,
            "end": 154,
            "typeName": {
              "type": "Identifier",
              "start": 147,
              "end": 154,
              "decorators": [],
              "name": "TaggedB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 157,
      "end": 206,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 200,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 164,
              "end": 200,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 166,
                "end": 200,
                "elementType": {
                  "type": "TSTypeLiteral",
                  "start": 166,
                  "end": 198,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 168,
                      "end": 196,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 174,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 174,
                        "end": 196,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 176,
                          "end": 196,
                          "typeName": {
                            "type": "Identifier",
                            "start": 176,
                            "end": 183,
                            "decorators": [],
                            "name": "NoInfer",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 183,
                            "end": 196,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 184,
                                "end": 195,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 184,
                                  "end": 195,
                                  "decorators": [],
                                  "name": "TaggedUnion",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 203,
            "end": 205,
            "elements": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 208,
      "end": 299,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 220,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 220,
        "end": 226,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 221,
            "end": 222,
            "name": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 224,
            "end": 225,
            "name": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 227,
          "end": 246,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 232,
            "end": 246,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 234,
              "end": 246,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 243,
                "end": 246,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 243,
                  "end": 244,
                  "typeName": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 244,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 248,
          "end": 271,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 249,
            "end": 271,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 251,
              "end": 271,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 252,
                  "end": 265,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 253,
                    "end": 265,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 255,
                      "end": 265,
                      "typeName": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 262,
                        "decorators": [],
                        "name": "NoInfer",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 262,
                        "end": 265,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 263,
                            "end": 264,
                            "typeName": {
                              "type": "Identifier",
                              "start": 263,
                              "end": 264,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 267,
                "end": 271,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 270,
                  "end": 271,
                  "typeName": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 271,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 273,
        "end": 299,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 277,
            "end": 297,
            "argument": {
              "type": "CallExpression",
              "start": 284,
              "end": 296,
              "callee": {
                "type": "MemberExpression",
                "start": 284,
                "end": 293,
                "object": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 289,
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 293,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 294,
                  "end": 295,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 396,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 395,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 316,
            "decorators": [],
            "name": "something",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 319,
            "end": 395,
            "callee": {
              "type": "Identifier",
              "start": 319,
              "end": 322,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 323,
                "end": 324,
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 326,
                "end": 392,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 327,
                    "end": 328,
                    "decorators": [],
                    "name": "_",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ConditionalExpression",
                  "start": 335,
                  "end": 392,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 335,
                    "end": 356,
                    "left": {
                      "type": "MemberExpression",
                      "start": 335,
                      "end": 348,
                      "object": {
                        "type": "MemberExpression",
                        "start": 335,
                        "end": 343,
                        "object": {
                          "type": "Identifier",
                          "start": 335,
                          "end": 336,
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 337,
                          "end": 343,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 348,
                        "decorators": [],
                        "name": "_tag",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 353,
                      "end": 356,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "start": 359,
                    "end": 385,
                    "properties": [
                      {
                        "type": "SpreadElement",
                        "start": 361,
                        "end": 365,
                        "argument": {
                          "type": "Identifier",
                          "start": 364,
                          "end": 365,
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 367,
                        "end": 383,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 367,
                          "end": 373,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "MemberExpression",
                          "start": 375,
                          "end": 383,
                          "object": {
                            "type": "Identifier",
                            "start": 375,
                            "end": 376,
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 377,
                            "end": 383,
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "alternate": {
                    "type": "Literal",
                    "start": 388,
                    "end": 392,
                    "value": null,
                    "raw": "null"
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 398,
      "end": 497,
      "id": {
        "type": "Identifier",
        "start": 415,
        "end": 420,
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 420,
        "end": 428,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 421,
            "end": 423,
            "name": {
              "type": "Identifier",
              "start": 421,
              "end": 423,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 425,
            "end": 427,
            "name": {
              "type": "Identifier",
              "start": 425,
              "end": 427,
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 429,
          "end": 434,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 430,
            "end": 434,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 432,
              "end": 434,
              "typeName": {
                "type": "Identifier",
                "start": 432,
                "end": 434,
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 436,
          "end": 441,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 437,
            "end": 441,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 439,
              "end": 441,
              "typeName": {
                "type": "Identifier",
                "start": 439,
                "end": 441,
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 443,
          "end": 489,
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 445,
            "end": 489,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 447,
              "end": 489,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 448,
                  "end": 480,
                  "decorators": [],
                  "name": "thing",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 453,
                    "end": 480,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 455,
                      "end": 480,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 455,
                          "end": 466,
                          "typeName": {
                            "type": "Identifier",
                            "start": 455,
                            "end": 462,
                            "decorators": [],
                            "name": "NoInfer",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 462,
                            "end": 466,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 463,
                                "end": 465,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 463,
                                  "end": 465,
                                  "decorators": [],
                                  "name": "T1",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 469,
                          "end": 480,
                          "typeName": {
                            "type": "Identifier",
                            "start": 469,
                            "end": 476,
                            "decorators": [],
                            "name": "NoInfer",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 476,
                            "end": 480,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 477,
                                "end": 479,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 477,
                                  "end": 479,
                                  "decorators": [],
                                  "name": "T2",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 482,
                "end": 489,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 485,
                  "end": 489
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 490,
        "end": 496,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 492,
          "end": 496
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 499,
      "end": 634,
      "expression": {
        "type": "CallExpression",
        "start": 499,
        "end": 633,
        "callee": {
          "type": "Identifier",
          "start": 499,
          "end": 504,
          "decorators": [],
          "name": "test2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 505,
            "end": 527,
            "properties": [
              {
                "type": "Property",
                "start": 507,
                "end": 525,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 511,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 513,
                  "end": 525,
                  "expression": {
                    "type": "Literal",
                    "start": 513,
                    "end": 516,
                    "value": "a",
                    "raw": "'a'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 520,
                    "end": 525,
                    "typeName": {
                      "type": "Identifier",
                      "start": 520,
                      "end": 525,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 529,
            "end": 551,
            "properties": [
              {
                "type": "Property",
                "start": 531,
                "end": 549,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 535,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSAsExpression",
                  "start": 537,
                  "end": 549,
                  "expression": {
                    "type": "Literal",
                    "start": 537,
                    "end": 540,
                    "value": "b",
                    "raw": "'b'"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 544,
                    "end": 549,
                    "typeName": {
                      "type": "Identifier",
                      "start": 544,
                      "end": 549,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 553,
            "end": 632,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 554,
                "end": 559,
                "decorators": [],
                "name": "thing",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 564,
              "end": 632,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 568,
                  "end": 630,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 572,
                    "end": 590,
                    "left": {
                      "type": "MemberExpression",
                      "start": 572,
                      "end": 582,
                      "object": {
                        "type": "Identifier",
                        "start": 572,
                        "end": 577,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 578,
                        "end": 582,
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 587,
                      "end": 590,
                      "value": "a",
                      "raw": "\"a\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 592,
                    "end": 608,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 598,
                        "end": 604,
                        "expression": {
                          "type": "Identifier",
                          "start": 598,
                          "end": 603,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 614,
                    "end": 630,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 620,
                        "end": 626,
                        "expression": {
                          "type": "Identifier",
                          "start": 620,
                          "end": 625,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          }
        ],
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
