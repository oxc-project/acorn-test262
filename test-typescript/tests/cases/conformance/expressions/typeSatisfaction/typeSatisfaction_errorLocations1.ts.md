__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1453,
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
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 10,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 16,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 18,
                  "end": 19,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 33,
            "name": "fn1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 36,
            "end": 58,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 37,
                "end": 51,
                "name": "s",
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 42,
                          "end": 43,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                              "value": true,
                              "raw": "true"
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 56,
              "end": 58,
              "body": []
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 60,
      "end": 86,
      "expression": {
        "type": "CallExpression",
        "start": 60,
        "end": 85,
        "callee": {
          "type": "Identifier",
          "start": 60,
          "end": 63,
          "name": "fn1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 119,
      "expression": {
        "type": "CallExpression",
        "start": 87,
        "end": 118,
        "callee": {
          "type": "Identifier",
          "start": 87,
          "end": 90,
          "name": "fn1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 93,
                    "end": 94,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 96,
                    "end": 97,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
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
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 148,
      "expression": {
        "type": "CallExpression",
        "start": 120,
        "end": 147,
        "callee": {
          "type": "Identifier",
          "start": 120,
          "end": 123,
          "name": "fn1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "start": 124,
            "end": 146,
            "expression": {
              "type": "Identifier",
              "start": 124,
              "end": 128,
              "name": "obj1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 139,
              "end": 146
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 150,
      "end": 197,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 160,
        "name": "Cls1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 197,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 165,
            "end": 195,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 165,
              "end": 176,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 176,
              "end": 195,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 177,
                  "end": 191,
                  "name": "p",
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
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 182,
                            "end": 183,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                "value": true,
                                "raw": "true"
                              }
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 193,
                "end": 195,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ExpressionStatement",
      "start": 198,
      "end": 229,
      "expression": {
        "type": "NewExpression",
        "start": 198,
        "end": 228,
        "callee": {
          "type": "Identifier",
          "start": 202,
          "end": 206,
          "name": "Cls1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 230,
      "end": 267,
      "expression": {
        "type": "NewExpression",
        "start": 230,
        "end": 266,
        "callee": {
          "type": "Identifier",
          "start": 234,
          "end": 238,
          "name": "Cls1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 242,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 244,
                    "end": 245,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
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
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 268,
      "end": 301,
      "expression": {
        "type": "NewExpression",
        "start": 268,
        "end": 300,
        "callee": {
          "type": "Identifier",
          "start": 272,
          "end": 276,
          "name": "Cls1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "TSSatisfiesExpression",
            "start": 277,
            "end": 299,
            "expression": {
              "type": "Identifier",
              "start": 277,
              "end": 281,
              "name": "obj1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 292,
              "end": 299
            }
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 303,
      "end": 465,
      "id": {
        "type": "Identifier",
        "start": 312,
        "end": 315,
        "name": "fn2",
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
          "start": 341,
          "end": 364,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 342,
            "end": 364,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 344,
              "end": 364,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 345,
                  "end": 355,
                  "argument": {
                    "type": "Identifier",
                    "start": 348,
                    "end": 352,
                    "name": "args",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 355,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 366,
        "end": 465,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 370,
            "end": 403,
            "expression": {
              "type": "CallExpression",
              "start": 370,
              "end": 402,
              "callee": {
                "type": "Identifier",
                "start": 370,
                "end": 371,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 374,
                          "end": 375,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 377,
                          "end": 381,
                          "value": true,
                          "raw": "true"
                        },
                        "kind": "init",
                        "optional": false
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
              "optional": false,
              "typeArguments": null
            },
            "directive": null
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
                "id": {
                  "type": "Identifier",
                  "start": 412,
                  "end": 413,
                  "name": "o",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 418,
                        "end": 419,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "TSAsExpression",
                        "start": 421,
                        "end": 434,
                        "expression": {
                          "type": "Literal",
                          "start": 421,
                          "end": 425,
                          "value": true,
                          "raw": "true"
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 429,
                          "end": 434,
                          "typeName": {
                            "type": "Identifier",
                            "start": 429,
                            "end": 434,
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
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 440,
            "end": 463,
            "expression": {
              "type": "CallExpression",
              "start": 440,
              "end": 462,
              "callee": {
                "type": "Identifier",
                "start": 440,
                "end": 441,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "TSSatisfiesExpression",
                  "start": 442,
                  "end": 461,
                  "expression": {
                    "type": "Identifier",
                    "start": 442,
                    "end": 443,
                    "name": "o",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 454,
                    "end": 461
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 315,
        "end": 340,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 316,
            "end": 339,
            "name": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 328,
                      "end": 329,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                          "value": true,
                          "raw": "true"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
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
      "start": 467,
      "end": 532,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 531,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 499,
            "name": "tuple1",
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
            },
            "decorators": [],
            "optional": false
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
                "value": true,
                "raw": "true"
              },
              {
                "type": "TSSatisfiesExpression",
                "start": 509,
                "end": 530,
                "expression": {
                  "type": "Literal",
                  "start": 509,
                  "end": 512,
                  "value": 100,
                  "raw": "100"
                },
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 523,
                  "end": 530
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 540,
            "end": 544,
            "name": "obj2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 549,
                    "end": 550,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 552,
                    "end": 554,
                    "value": 10,
                    "raw": "10"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 556,
                  "end": 563,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 556,
                    "end": 557,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 559,
                    "end": 563,
                    "value": true,
                    "raw": "true"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 576,
              "end": 598,
              "typeName": {
                "type": "Identifier",
                "start": 576,
                "end": 582,
                "name": "Record",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 607,
            "end": 615,
            "name": "literal1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 618,
            "end": 637,
            "expression": {
              "type": "Literal",
              "start": 618,
              "end": 619,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 630,
              "end": 637
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 645,
            "end": 659,
            "name": "literal2",
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
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 662,
            "end": 680,
            "expression": {
              "type": "Literal",
              "start": 662,
              "end": 663,
              "value": 1,
              "raw": "1"
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 674,
              "end": 680
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 683,
      "end": 730,
      "id": {
        "type": "Identifier",
        "start": 700,
        "end": 703,
        "name": "fn3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 704,
          "end": 722,
          "argument": {
            "type": "Identifier",
            "start": 707,
            "end": 711,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 723,
        "end": 729,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 725,
          "end": 729
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 731,
      "end": 775,
      "expression": {
        "type": "CallExpression",
        "start": 731,
        "end": 774,
        "callee": {
          "type": "Identifier",
          "start": 731,
          "end": 734,
          "name": "fn3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 735,
            "end": 737,
            "value": 10,
            "raw": "10"
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
                    "value": 10,
                    "raw": "10"
                  },
                  {
                    "type": "Literal",
                    "start": 748,
                    "end": 752,
                    "value": "20",
                    "raw": "\"20\""
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
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 782,
            "end": 788,
            "name": "tuple2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "value": 10,
                  "raw": "10"
                },
                {
                  "type": "Literal",
                  "start": 796,
                  "end": 800,
                  "value": "20",
                  "raw": "\"20\""
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 805,
              "end": 810,
              "typeName": {
                "type": "Identifier",
                "start": 805,
                "end": 810,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 812,
      "end": 852,
      "expression": {
        "type": "CallExpression",
        "start": 812,
        "end": 851,
        "callee": {
          "type": "Identifier",
          "start": 812,
          "end": 815,
          "name": "fn3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 816,
            "end": 818,
            "value": 10,
            "raw": "10"
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
                "name": "tuple2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 854,
      "end": 900,
      "id": {
        "type": "Identifier",
        "start": 871,
        "end": 874,
        "name": "fn4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "RestElement",
          "start": 875,
          "end": 892,
          "argument": {
            "type": "Identifier",
            "start": 878,
            "end": 882,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 893,
        "end": 899,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 895,
          "end": 899
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 901,
      "end": 956,
      "expression": {
        "type": "CallExpression",
        "start": 901,
        "end": 955,
        "callee": {
          "type": "Identifier",
          "start": 901,
          "end": 904,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 905,
            "end": 907,
            "value": 10,
            "raw": "10"
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
                    "value": "10",
                    "raw": "\"10\""
                  },
                  {
                    "type": "Literal",
                    "start": 920,
                    "end": 924,
                    "value": "20",
                    "raw": "\"20\""
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
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 963,
            "end": 969,
            "name": "tuple3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                  "value": "10",
                  "raw": "\"10\""
                },
                {
                  "type": "Literal",
                  "start": 979,
                  "end": 983,
                  "value": "20",
                  "raw": "\"20\""
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 988,
              "end": 993,
              "typeName": {
                "type": "Identifier",
                "start": 988,
                "end": 993,
                "name": "const",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 995,
      "end": 1044,
      "expression": {
        "type": "CallExpression",
        "start": 995,
        "end": 1043,
        "callee": {
          "type": "Identifier",
          "start": 995,
          "end": 998,
          "name": "fn4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 999,
            "end": 1001,
            "value": 10,
            "raw": "10"
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
                "name": "tuple3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1046,
      "end": 1106,
      "id": {
        "type": "Identifier",
        "start": 1055,
        "end": 1058,
        "name": "fn5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "value": "foo",
                "raw": "\"foo\""
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1060,
        "end": 1068,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1062,
          "end": 1068
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1108,
      "end": 1167,
      "id": {
        "type": "Identifier",
        "start": 1117,
        "end": 1120,
        "name": "fn6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "value": "foo",
                "raw": "\"foo\""
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
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1122,
        "end": 1130,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1124,
          "end": 1130
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1169,
      "end": 1215,
      "expression": {
        "type": "CallExpression",
        "start": 1169,
        "end": 1214,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1170,
          "end": 1211,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
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
          "typeParameters": null,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1176,
                    "end": 1177,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                        "value": true,
                        "raw": "true"
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
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1216,
      "end": 1268,
      "expression": {
        "type": "CallExpression",
        "start": 1216,
        "end": 1267,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1217,
          "end": 1264,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1239,
                    "end": 1240,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 1242,
                    "end": 1243,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1257,
              "end": 1264
            }
          },
          "typeParameters": null,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1223,
                    "end": 1224,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                        "value": true,
                        "raw": "true"
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
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1269,
      "end": 1315,
      "expression": {
        "type": "CallExpression",
        "start": 1269,
        "end": 1314,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1270,
          "end": 1311,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "TSSatisfiesExpression",
            "start": 1289,
            "end": 1311,
            "expression": {
              "type": "Identifier",
              "start": 1289,
              "end": 1293,
              "name": "obj1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 1304,
              "end": 1311
            }
          },
          "typeParameters": null,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1276,
                    "end": 1277,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                        "value": true,
                        "raw": "true"
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
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1317,
      "end": 1383,
      "expression": {
        "type": "CallExpression",
        "start": 1317,
        "end": 1382,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1318,
          "end": 1379,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
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
          "typeParameters": null,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1324,
                    "end": 1325,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                        "value": true,
                        "raw": "true"
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
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1384,
      "end": 1452,
      "expression": {
        "type": "CallExpression",
        "start": 1384,
        "end": 1451,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 1385,
          "end": 1448,
          "id": null,
          "expression": true,
          "generator": false,
          "async": false,
          "params": [],
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
          "typeParameters": null,
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1391,
                    "end": 1392,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                        "value": true,
                        "raw": "true"
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
        "arguments": [],
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
