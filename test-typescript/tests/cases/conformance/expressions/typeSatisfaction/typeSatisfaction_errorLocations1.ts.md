__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1452,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 13,
            "end": 21,
            "properties": [
              {
                "type": "Property",
                "start": 15,
                "end": 19,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 16,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 18,
                  "end": 19,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 24,
      "end": 59,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 58,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 33,
            "decorators": [],
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 36,
            "end": 58,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 56,
              "end": 58,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 37,
                "end": 51,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 38,
                  "end": 51,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 40,
                    "end": 51,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 42,
                        "end": 49,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 42,
                          "end": 43,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 43,
                          "end": 49,
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "start": 45,
                            "end": 49,
                            "literal": {
                              "type": "Literal",
                              "start": 45,
                              "end": 49,
                              "raw": "true",
                              "value": true,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 60,
      "end": 86,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 60,
        "end": 85,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "start": 64,
            "end": 84,
            "expression": {
              "type": "ObjectExpression",
              "start": 64,
              "end": 66,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 77,
              "end": 84
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 60,
          "end": 63,
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 119,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 87,
        "end": 118,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "start": 91,
            "end": 117,
            "expression": {
              "type": "ObjectExpression",
              "start": 91,
              "end": 99,
              "properties": [
                {
                  "type": "Property",
                  "start": 93,
                  "end": 97,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 96,
                    "end": 97,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 110,
              "end": 117
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 87,
          "end": 90,
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 148,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 120,
        "end": 147,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "start": 124,
            "end": 146,
            "expression": {
              "type": "Identifier",
              "start": 124,
              "end": 128,
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 139,
              "end": 146
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 120,
          "end": 123,
          "decorators": [],
          "name": "fn1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 150,
      "end": 197,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 197,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 165,
            "end": 195,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 176,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 176,
              "end": 195,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 193,
                "end": 195,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 177,
                  "end": 191,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 178,
                    "end": 191,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 180,
                      "end": 191,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 182,
                          "end": 189,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 182,
                            "end": 183,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 183,
                            "end": 189,
                            "typeAnnotation": {
                              "type": "TSLiteralType",
                              "start": 185,
                              "end": 189,
                              "literal": {
                                "type": "Literal",
                                "start": 185,
                                "end": 189,
                                "raw": "true",
                                "value": true,
                                "regex": null,
                                "bigint": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 160,
        "decorators": [],
        "name": "Cls1",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 229,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 198,
        "end": 228,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "start": 207,
            "end": 227,
            "expression": {
              "type": "ObjectExpression",
              "start": 207,
              "end": 209,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 220,
              "end": 227
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 202,
          "end": 206,
          "decorators": [],
          "name": "Cls1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 230,
      "end": 267,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 230,
        "end": 266,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "start": 239,
            "end": 265,
            "expression": {
              "type": "ObjectExpression",
              "start": 239,
              "end": 247,
              "properties": [
                {
                  "type": "Property",
                  "start": 241,
                  "end": 245,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 242,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 244,
                    "end": 245,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 258,
              "end": 265
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 234,
          "end": 238,
          "decorators": [],
          "name": "Cls1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 268,
      "end": 301,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 268,
        "end": 300,
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "start": 277,
            "end": 299,
            "expression": {
              "type": "Identifier",
              "start": 277,
              "end": 281,
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 292,
              "end": 299
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 272,
          "end": 276,
          "decorators": [],
          "name": "Cls1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 303,
      "end": 465,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 366,
        "end": 465,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 370,
            "end": 403,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 370,
              "end": 402,
              "arguments": [
                {
                  "type": "TSSatisfiesExpression",
                  "start": 372,
                  "end": 401,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 372,
                    "end": 383,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 374,
                        "end": 381,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 374,
                          "end": 375,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 377,
                          "end": 381,
                          "raw": "true",
                          "value": true,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 394,
                    "end": 401
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 370,
                "end": 371,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 406,
            "end": 437,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 412,
                "end": 436,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 413,
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 416,
                  "end": 436,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 418,
                      "end": 434,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 418,
                        "end": 419,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "TSAsExpression",
                        "start": 421,
                        "end": 434,
                        "expression": {
                          "type": "Literal",
                          "start": 421,
                          "end": 425,
                          "raw": "true",
                          "value": true,
                          "regex": null,
                          "bigint": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 429,
                          "end": 434,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 429,
                            "end": 434,
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ExpressionStatement",
            "start": 440,
            "end": 463,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 440,
              "end": 462,
              "arguments": [
                {
                  "type": "TSSatisfiesExpression",
                  "start": 442,
                  "end": 461,
                  "expression": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 443,
                    "decorators": [],
                    "name": "o",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 454,
                    "end": 461
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 440,
                "end": 441,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
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
        "start": 312,
        "end": 315,
        "decorators": [],
        "name": "fn2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 341,
          "end": 364,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 342,
            "end": 364,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 344,
              "end": 364,
              "params": [
                {
                  "type": "RestElement",
                  "start": 345,
                  "end": 355,
                  "argument": {
                    "type": "Identifier",
                    "start": 348,
                    "end": 352,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 352,
                    "end": 355,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 354,
                      "end": 355,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 355,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 357,
                "end": 364,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 360,
                  "end": 364
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
        "start": 315,
        "end": 340,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 316,
            "end": 339,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 326,
              "end": 339,
              "elementType": {
                "type": "TSTypeLiteral",
                "start": 326,
                "end": 337,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 328,
                    "end": 335,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 328,
                      "end": 329,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 329,
                      "end": 335,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 331,
                        "end": 335,
                        "literal": {
                          "type": "Literal",
                          "start": 331,
                          "end": 335,
                          "raw": "true",
                          "value": true,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    }
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "decorators": [],
              "name": "T",
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
      "start": 467,
      "end": 532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 531,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 499,
            "decorators": [],
            "name": "tuple1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 479,
              "end": 499,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 481,
                "end": 499,
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
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 502,
            "end": 531,
            "elements": [
              {
                "type": "Literal",
                "start": 503,
                "end": 507,
                "raw": "true",
                "value": true,
                "regex": null,
                "bigint": null
              },
              {
                "type": "TSSatisfiesExpression",
                "start": 509,
                "end": 530,
                "expression": {
                  "type": "Literal",
                  "start": 509,
                  "end": 512,
                  "raw": "100",
                  "value": 100,
                  "regex": null,
                  "bigint": null
                },
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 523,
                  "end": 530
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 534,
      "end": 599,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 540,
          "end": 598,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 540,
            "end": 544,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 547,
            "end": 598,
            "expression": {
              "type": "ObjectExpression",
              "start": 547,
              "end": 565,
              "properties": [
                {
                  "type": "Property",
                  "start": 549,
                  "end": 554,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 550,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 552,
                    "end": 554,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 556,
                  "end": 563,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 556,
                    "end": 557,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 559,
                    "end": 563,
                    "raw": "true",
                    "value": true,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 576,
              "end": 598,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 582,
                "end": 598,
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
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 576,
                "end": 582,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 601,
      "end": 638,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 607,
          "end": 637,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 607,
            "end": 615,
            "decorators": [],
            "name": "literal1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 618,
            "end": 637,
            "expression": {
              "type": "Literal",
              "start": 618,
              "end": 619,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 630,
              "end": 637
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 639,
      "end": 681,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 645,
          "end": 680,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 645,
            "end": 659,
            "decorators": [],
            "name": "literal2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 653,
              "end": 659,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 655,
                "end": 659,
                "literal": {
                  "type": "Literal",
                  "start": 655,
                  "end": 659,
                  "raw": "true",
                  "value": true,
                  "regex": null,
                  "bigint": null
                }
              }
            }
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 662,
            "end": 680,
            "expression": {
              "type": "Literal",
              "start": 662,
              "end": 663,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 674,
              "end": 680
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 683,
      "end": 730,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 700,
        "end": 703,
        "decorators": [],
        "name": "fn3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 704,
          "end": 722,
          "argument": {
            "type": "Identifier",
            "start": 707,
            "end": 711,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 711,
            "end": 722,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 713,
              "end": 722,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 713,
                "end": 720
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 723,
        "end": 729,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 725,
          "end": 729
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 731,
      "end": 775,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 731,
        "end": 774,
        "arguments": [
          {
            "type": "Literal",
            "start": 735,
            "end": 737,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          },
          {
            "type": "SpreadElement",
            "start": 739,
            "end": 773,
            "argument": {
              "type": "TSSatisfiesExpression",
              "start": 743,
              "end": 772,
              "expression": {
                "type": "ArrayExpression",
                "start": 743,
                "end": 753,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 744,
                    "end": 746,
                    "raw": "10",
                    "value": 10,
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 748,
                    "end": 752,
                    "raw": "\"20\"",
                    "value": "20",
                    "regex": null,
                    "bigint": null
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 764,
                "end": 772,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 764,
                  "end": 770
                }
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 731,
          "end": 734,
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 776,
      "end": 811,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 782,
          "end": 810,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 782,
            "end": 788,
            "decorators": [],
            "name": "tuple2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 791,
            "end": 810,
            "expression": {
              "type": "ArrayExpression",
              "start": 791,
              "end": 801,
              "elements": [
                {
                  "type": "Literal",
                  "start": 792,
                  "end": 794,
                  "raw": "10",
                  "value": 10,
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 796,
                  "end": 800,
                  "raw": "\"20\"",
                  "value": "20",
                  "regex": null,
                  "bigint": null
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 805,
              "end": 810,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 805,
                "end": 810,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 812,
      "end": 852,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 812,
        "end": 851,
        "arguments": [
          {
            "type": "Literal",
            "start": 816,
            "end": 818,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          },
          {
            "type": "SpreadElement",
            "start": 820,
            "end": 850,
            "argument": {
              "type": "TSSatisfiesExpression",
              "start": 824,
              "end": 849,
              "expression": {
                "type": "Identifier",
                "start": 824,
                "end": 830,
                "decorators": [],
                "name": "tuple2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 841,
                "end": 849,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 841,
                  "end": 847
                }
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 812,
          "end": 815,
          "decorators": [],
          "name": "fn3",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 854,
      "end": 900,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 871,
        "end": 874,
        "decorators": [],
        "name": "fn4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 875,
          "end": 892,
          "argument": {
            "type": "Identifier",
            "start": 878,
            "end": 882,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 882,
            "end": 892,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 884,
              "end": 892,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 884,
                "end": 890
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 893,
        "end": 899,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 895,
          "end": 899
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 901,
      "end": 956,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 901,
        "end": 955,
        "arguments": [
          {
            "type": "Literal",
            "start": 905,
            "end": 907,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          },
          {
            "type": "SpreadElement",
            "start": 909,
            "end": 954,
            "argument": {
              "type": "TSSatisfiesExpression",
              "start": 913,
              "end": 953,
              "expression": {
                "type": "ArrayExpression",
                "start": 913,
                "end": 925,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 914,
                    "end": 918,
                    "raw": "\"10\"",
                    "value": "10",
                    "regex": null,
                    "bigint": null
                  },
                  {
                    "type": "Literal",
                    "start": 920,
                    "end": 924,
                    "raw": "\"20\"",
                    "value": "20",
                    "regex": null,
                    "bigint": null
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 936,
                "end": 953,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 945,
                  "end": 953,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 945,
                    "end": 951
                  }
                }
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 901,
          "end": 904,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 957,
      "end": 994,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 963,
          "end": 993,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 963,
            "end": 969,
            "decorators": [],
            "name": "tuple3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 972,
            "end": 993,
            "expression": {
              "type": "ArrayExpression",
              "start": 972,
              "end": 984,
              "elements": [
                {
                  "type": "Literal",
                  "start": 973,
                  "end": 977,
                  "raw": "\"10\"",
                  "value": "10",
                  "regex": null,
                  "bigint": null
                },
                {
                  "type": "Literal",
                  "start": 979,
                  "end": 983,
                  "raw": "\"20\"",
                  "value": "20",
                  "regex": null,
                  "bigint": null
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 988,
              "end": 993,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 988,
                "end": 993,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 995,
      "end": 1044,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 995,
        "end": 1043,
        "arguments": [
          {
            "type": "Literal",
            "start": 999,
            "end": 1001,
            "raw": "10",
            "value": 10,
            "regex": null,
            "bigint": null
          },
          {
            "type": "SpreadElement",
            "start": 1003,
            "end": 1042,
            "argument": {
              "type": "TSSatisfiesExpression",
              "start": 1007,
              "end": 1041,
              "expression": {
                "type": "Identifier",
                "start": 1007,
                "end": 1013,
                "decorators": [],
                "name": "tuple3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 1024,
                "end": 1041,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1033,
                  "end": 1041,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 1033,
                    "end": 1039
                  }
                }
              }
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 995,
          "end": 998,
          "decorators": [],
          "name": "fn4",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1046,
      "end": 1106,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1069,
        "end": 1106,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1073,
            "end": 1104,
            "argument": {
              "type": "TSSatisfiesExpression",
              "start": 1080,
              "end": 1103,
              "expression": {
                "type": "Literal",
                "start": 1080,
                "end": 1085,
                "raw": "\"foo\"",
                "value": "foo",
                "regex": null,
                "bigint": null
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 1096,
                "end": 1103
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1055,
        "end": 1058,
        "decorators": [],
        "name": "fn5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1060,
        "end": 1068,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1062,
          "end": 1068
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1108,
      "end": 1167,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1131,
        "end": 1167,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1135,
            "end": 1165,
            "argument": {
              "type": "TSSatisfiesExpression",
              "start": 1142,
              "end": 1164,
              "expression": {
                "type": "Literal",
                "start": 1142,
                "end": 1147,
                "raw": "\"foo\"",
                "value": "foo",
                "regex": null,
                "bigint": null
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1158,
                "end": 1164
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1117,
        "end": 1120,
        "decorators": [],
        "name": "fn6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1122,
        "end": 1130,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1124,
          "end": 1130
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1169,
      "end": 1215,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1169,
        "end": 1214,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1170,
          "end": 1211,
          "async": false,
          "body": {
            "type": "TSSatisfiesExpression",
            "start": 1189,
            "end": 1211,
            "expression": {
              "type": "ObjectExpression",
              "start": 1190,
              "end": 1192,
              "properties": []
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1204,
              "end": 1211
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1172,
            "end": 1185,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1174,
              "end": 1185,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1176,
                  "end": 1183,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1176,
                    "end": 1177,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1177,
                    "end": 1183,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1179,
                      "end": 1183,
                      "literal": {
                        "type": "Literal",
                        "start": 1179,
                        "end": 1183,
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                }
              ]
            }
          },
          "typeParameters": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1216,
      "end": 1268,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1216,
        "end": 1267,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1217,
          "end": 1264,
          "async": false,
          "body": {
            "type": "TSSatisfiesExpression",
            "start": 1236,
            "end": 1264,
            "expression": {
              "type": "ObjectExpression",
              "start": 1237,
              "end": 1245,
              "properties": [
                {
                  "type": "Property",
                  "start": 1239,
                  "end": 1243,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1239,
                    "end": 1240,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1242,
                    "end": 1243,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1257,
              "end": 1264
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1219,
            "end": 1232,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1221,
              "end": 1232,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1223,
                  "end": 1230,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1223,
                    "end": 1224,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1224,
                    "end": 1230,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1226,
                      "end": 1230,
                      "literal": {
                        "type": "Literal",
                        "start": 1226,
                        "end": 1230,
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                }
              ]
            }
          },
          "typeParameters": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1269,
      "end": 1315,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1269,
        "end": 1314,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1270,
          "end": 1311,
          "async": false,
          "body": {
            "type": "TSSatisfiesExpression",
            "start": 1289,
            "end": 1311,
            "expression": {
              "type": "Identifier",
              "start": 1289,
              "end": 1293,
              "decorators": [],
              "name": "obj1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1304,
              "end": 1311
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1272,
            "end": 1285,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1274,
              "end": 1285,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1276,
                  "end": 1283,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1276,
                    "end": 1277,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1277,
                    "end": 1283,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1279,
                      "end": 1283,
                      "literal": {
                        "type": "Literal",
                        "start": 1279,
                        "end": 1283,
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                }
              ]
            }
          },
          "typeParameters": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1317,
      "end": 1383,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1317,
        "end": 1382,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1318,
          "end": 1379,
          "async": false,
          "body": {
            "type": "TSSatisfiesExpression",
            "start": 1337,
            "end": 1379,
            "expression": {
              "type": "TSSatisfiesExpression",
              "start": 1338,
              "end": 1360,
              "expression": {
                "type": "ObjectExpression",
                "start": 1339,
                "end": 1341,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 1353,
                "end": 1360
              }
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1372,
              "end": 1379
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1320,
            "end": 1333,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1322,
              "end": 1333,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1324,
                  "end": 1331,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1324,
                    "end": 1325,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1325,
                    "end": 1331,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1327,
                      "end": 1331,
                      "literal": {
                        "type": "Literal",
                        "start": 1327,
                        "end": 1331,
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                }
              ]
            }
          },
          "typeParameters": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1384,
      "end": 1452,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1384,
        "end": 1451,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1385,
          "end": 1448,
          "async": false,
          "body": {
            "type": "TSSatisfiesExpression",
            "start": 1404,
            "end": 1448,
            "expression": {
              "type": "TSSatisfiesExpression",
              "start": 1406,
              "end": 1428,
              "expression": {
                "type": "ObjectExpression",
                "start": 1407,
                "end": 1409,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 1421,
                "end": 1428
              }
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1441,
              "end": 1448
            }
          },
          "expression": true,
          "generator": false,
          "id": null,
          "params": [],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 1387,
            "end": 1400,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1389,
              "end": 1400,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1391,
                  "end": 1398,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1391,
                    "end": 1392,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1392,
                    "end": 1398,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 1394,
                      "end": 1398,
                      "literal": {
                        "type": "Literal",
                        "start": 1394,
                        "end": 1398,
                        "raw": "true",
                        "value": true,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                }
              ]
            }
          },
          "typeParameters": null
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
