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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 69,
        "decorators": [],
        "name": "TaggedA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 72,
        "end": 85,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 74,
            "end": 83,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 78,
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "\"a\"",
                  "value": "a"
                }
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 87,
      "end": 116,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 99,
        "decorators": [],
        "name": "TaggedB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 102,
        "end": 115,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 104,
            "end": 113,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 104,
              "end": 108,
              "decorators": [],
              "name": "_tag",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "\"b\"",
                  "value": "b"
                }
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 118,
      "end": 155,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 134,
        "decorators": [],
        "name": "TaggedUnion",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 137,
        "end": 154,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 137,
            "end": 144,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 137,
              "end": 144,
              "decorators": [],
              "name": "TaggedA",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 147,
            "end": 154,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 147,
              "end": 154,
              "decorators": [],
              "name": "TaggedB",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
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
          "definite": false,
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
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 174,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 174,
                        "end": 196,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 176,
                          "end": 196,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 183,
                            "end": 196,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 184,
                                "end": 195,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 184,
                                  "end": 195,
                                  "decorators": [],
                                  "name": "TaggedUnion",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 176,
                            "end": 183,
                            "decorators": [],
                            "name": "NoInfer",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
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
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 208,
      "end": 299,
      "async": false,
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
              "callee": {
                "type": "MemberExpression",
                "start": 284,
                "end": 293,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 289,
                  "decorators": [],
                  "name": "items",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 293,
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 220,
        "decorators": [],
        "name": "map",
        "optional": false,
        "typeAnnotation": null
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 244,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
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
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 262,
                        "end": 265,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 263,
                            "end": 264,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 263,
                              "end": 264,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 255,
                        "end": 262,
                        "decorators": [],
                        "name": "NoInfer",
                        "optional": false,
                        "typeAnnotation": null
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
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 270,
                    "end": 271,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 220,
        "end": 226,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 221,
            "end": 222,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 224,
            "end": 225,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
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
          "definite": false,
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
                "async": false,
                "body": {
                  "type": "ConditionalExpression",
                  "start": 335,
                  "end": 392,
                  "alternate": {
                    "type": "Literal",
                    "start": 388,
                    "end": 392,
                    "raw": "null",
                    "value": null
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
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 367,
                          "end": 373,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "MemberExpression",
                          "start": 375,
                          "end": 383,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 375,
                            "end": 376,
                            "decorators": [],
                            "name": "_",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 377,
                            "end": 383,
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 335,
                    "end": 356,
                    "operator": "===",
                    "left": {
                      "type": "MemberExpression",
                      "start": 335,
                      "end": 348,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 335,
                        "end": 343,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 335,
                          "end": 336,
                          "decorators": [],
                          "name": "_",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 337,
                          "end": 343,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 344,
                        "end": 348,
                        "decorators": [],
                        "name": "_tag",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 353,
                      "end": 356,
                      "raw": "\"a\"",
                      "value": "a"
                    }
                  }
                },
                "expression": true,
                "generator": false,
                "id": null,
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
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 319,
              "end": 322,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 398,
      "end": 497,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 415,
        "end": 420,
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 432,
                "end": 434,
                "decorators": [],
                "name": "T1",
                "optional": false,
                "typeAnnotation": null
              }
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 439,
                "end": 441,
                "decorators": [],
                "name": "T2",
                "optional": false,
                "typeAnnotation": null
              }
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
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 462,
                            "end": 466,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 463,
                                "end": 465,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 463,
                                  "end": 465,
                                  "decorators": [],
                                  "name": "T1",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 455,
                            "end": 462,
                            "decorators": [],
                            "name": "NoInfer",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 469,
                          "end": 480,
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 476,
                            "end": 480,
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "start": 477,
                                "end": 479,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 477,
                                  "end": 479,
                                  "decorators": [],
                                  "name": "T2",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 469,
                            "end": 476,
                            "decorators": [],
                            "name": "NoInfer",
                            "optional": false,
                            "typeAnnotation": null
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
              },
              "typeParameters": null
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 420,
        "end": 428,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 421,
            "end": 423,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 421,
              "end": 423,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 425,
            "end": 427,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 425,
              "end": 427,
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 499,
      "end": 634,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 499,
        "end": 633,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 511,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSAsExpression",
                  "start": 513,
                  "end": 525,
                  "expression": {
                    "type": "Literal",
                    "start": 513,
                    "end": 516,
                    "raw": "'a'",
                    "value": "a"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 520,
                    "end": 525,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 520,
                      "end": 525,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 535,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSAsExpression",
                  "start": 537,
                  "end": 549,
                  "expression": {
                    "type": "Literal",
                    "start": 537,
                    "end": 540,
                    "raw": "'b'",
                    "value": "b"
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 544,
                    "end": 549,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 544,
                      "end": 549,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 553,
            "end": 632,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 564,
              "end": 632,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 568,
                  "end": 630,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 614,
                    "end": 630,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 620,
                        "end": 626,
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 620,
                          "end": 625,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
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
                        "directive": null,
                        "expression": {
                          "type": "Identifier",
                          "start": 598,
                          "end": 603,
                          "decorators": [],
                          "name": "thing",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 572,
                    "end": 590,
                    "operator": "===",
                    "left": {
                      "type": "MemberExpression",
                      "start": 572,
                      "end": 582,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 572,
                        "end": 577,
                        "decorators": [],
                        "name": "thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 578,
                        "end": 582,
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 587,
                      "end": 590,
                      "raw": "\"a\"",
                      "value": "a"
                    }
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
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
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 499,
          "end": 504,
          "decorators": [],
          "name": "test2",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
