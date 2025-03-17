__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 635,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 57,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 69,
        "name": "TaggedA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "_tag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "TaggedB",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "_tag",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "TaggedUnion",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "TaggedA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "TaggedB",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 200,
            "name": "m",
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
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "name": "NoInfer",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                  "name": "TaggedUnion",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
            },
            "decorators": [],
            "optional": false
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
      "kind": "const",
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
        "name": "map",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 227,
          "end": 246,
          "name": "items",
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
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 248,
          "end": 271,
          "name": "f",
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
                  "name": "a",
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
                        "name": "NoInfer",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "name": "items",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 293,
                  "name": "map",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 294,
                  "end": 295,
                  "name": "f",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 396,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 395,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 316,
            "name": "something",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 319,
            "end": 395,
            "callee": {
              "type": "Identifier",
              "start": 319,
              "end": 322,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 323,
                "end": 324,
                "name": "m",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 326,
                "end": 392,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 327,
                    "end": 328,
                    "name": "_",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
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
                          "name": "_",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 337,
                          "end": 343,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 348,
                        "name": "_tag",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                          "name": "_",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      {
                        "type": "Property",
                        "start": 367,
                        "end": 383,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 367,
                          "end": 373,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "MemberExpression",
                          "start": 375,
                          "end": 383,
                          "object": {
                            "type": "Identifier",
                            "start": 375,
                            "end": 376,
                            "name": "_",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 377,
                            "end": 383,
                            "name": "result",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "kind": "init",
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
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "test2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 429,
          "end": 434,
          "name": "a",
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
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 436,
          "end": 441,
          "name": "b",
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
                "name": "T2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 443,
          "end": 489,
          "name": "cb",
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
                  "name": "thing",
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
                            "name": "NoInfer",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                  "name": "T1",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                            "name": "NoInfer",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                                  "name": "T2",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
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
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "T2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 490,
        "end": 496,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 492,
          "end": 496
        }
      }
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
          "name": "test2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 511,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "const",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "kind": "init",
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 535,
                  "name": "type",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "const",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 553,
            "end": 632,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 554,
                "end": 559,
                "name": "thing",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
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
                        "name": "thing",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 578,
                        "end": 582,
                        "name": "type",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
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
                          "name": "thing",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "thing",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
