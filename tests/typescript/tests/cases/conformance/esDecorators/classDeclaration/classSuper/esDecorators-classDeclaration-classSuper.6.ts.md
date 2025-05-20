__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 543,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 124,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 124,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 86,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 61,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 61,
              "end": 86,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 62,
                  "end": 76,
                  "argument": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 76,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 71,
                      "end": 76,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 71,
                        "end": 74
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 77,
                "end": 85,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 79,
                  "end": 85
                }
              },
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 122,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 97,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 97,
              "end": 122,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 98,
                  "end": 112,
                  "argument": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 105,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 105,
                    "end": 112,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 107,
                      "end": 112,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 107,
                        "end": 110
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 113,
                "end": 121,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 115,
                  "end": 121
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 184,
      "end": 543,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 210,
        "end": 543,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 246,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 224,
              "end": 246,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 227,
                "end": 246,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 229,
                    "end": 244,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 229,
                      "end": 243,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 229,
                        "end": 241,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 229,
                          "end": 234
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 241,
                          "decorators": [],
                          "name": "method",
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
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 251,
            "end": 292,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 262,
              "end": 263,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 263,
              "end": 292,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 266,
                "end": 292,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 268,
                    "end": 290,
                    "argument": {
                      "type": "CallExpression",
                      "start": 275,
                      "end": 289,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 275,
                        "end": 287,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 275,
                          "end": 280
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 281,
                          "end": 287,
                          "decorators": [],
                          "name": "method",
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
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 297,
            "end": 340,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 308,
              "end": 309,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 309,
              "end": 340,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 321,
                "end": 340,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 323,
                    "end": 338,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 323,
                      "end": 337,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 323,
                        "end": 335,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 323,
                          "end": 328
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 329,
                          "end": 335,
                          "decorators": [],
                          "name": "method",
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
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 310,
                  "end": 319,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 311,
                    "end": 319,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 313,
                      "end": 319
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 346,
            "end": 408,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 346,
              "end": 357,
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
              "start": 357,
              "end": 408,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 360,
                "end": 408,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 370,
                    "end": 378,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 370,
                      "end": 377,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 370,
                        "end": 375
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 387,
                    "end": 402,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 387,
                      "end": 401,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 387,
                        "end": 399,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 387,
                          "end": 392
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 393,
                          "end": 399,
                          "decorators": [],
                          "name": "method",
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
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 414,
            "end": 433,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 418,
              "end": 432,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 418,
                "end": 430,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 418,
                  "end": 423
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 430,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 438,
            "end": 461,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 438,
              "end": 439,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 439,
              "end": 461,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 442,
                "end": 461,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 444,
                    "end": 459,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 444,
                      "end": 458,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 444,
                        "end": 456,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 444,
                          "end": 449
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 450,
                          "end": 456,
                          "decorators": [],
                          "name": "method",
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
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 466,
            "end": 500,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 470,
              "end": 471,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 471,
              "end": 500,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 474,
                "end": 500,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 476,
                    "end": 498,
                    "argument": {
                      "type": "CallExpression",
                      "start": 483,
                      "end": 497,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 483,
                        "end": 495,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 483,
                          "end": 488
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 489,
                          "end": 495,
                          "decorators": [],
                          "name": "method",
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
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 505,
            "end": 541,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 509,
              "end": 510,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 510,
              "end": 541,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 522,
                "end": 541,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 524,
                    "end": 539,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 524,
                      "end": 538,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 524,
                        "end": 536,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 524,
                          "end": 529
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 530,
                          "end": 536,
                          "decorators": [],
                          "name": "method",
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
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 511,
                  "end": 520,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 512,
                    "end": 520,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 514,
                      "end": 520
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
      "decorators": [
        {
          "type": "Decorator",
          "start": 184,
          "end": 188,
          "expression": {
            "type": "Identifier",
            "start": 185,
            "end": 188,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 196,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 205,
        "end": 209,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
