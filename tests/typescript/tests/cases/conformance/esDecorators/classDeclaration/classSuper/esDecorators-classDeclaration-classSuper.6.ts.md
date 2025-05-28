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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 124,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 124,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 86,
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
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 61,
              "end": 86,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 62,
                  "end": 76,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 69,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 91,
            "end": 122,
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
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 97,
              "end": 122,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 98,
                  "end": 112,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 105,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 184,
      "end": 543,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 210,
        "end": 543,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 216,
            "end": 246,
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
            "value": {
              "type": "FunctionExpression",
              "start": 224,
              "end": 246,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 227,
                "end": 246,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 229,
                    "end": 244,
                    "expression": {
                      "type": "CallExpression",
                      "start": 229,
                      "end": 243,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 229,
                        "end": 241,
                        "object": {
                          "type": "Super",
                          "start": 229,
                          "end": 234
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 235,
                          "end": 241,
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 251,
            "end": 292,
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
            "value": {
              "type": "FunctionExpression",
              "start": 263,
              "end": 292,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 275,
                        "end": 287,
                        "object": {
                          "type": "Super",
                          "start": 275,
                          "end": 280
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 281,
                          "end": 287,
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 297,
            "end": 340,
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
            "value": {
              "type": "FunctionExpression",
              "start": 309,
              "end": 340,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 321,
                "end": 340,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 323,
                    "end": 338,
                    "expression": {
                      "type": "CallExpression",
                      "start": 323,
                      "end": 337,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 323,
                        "end": 335,
                        "object": {
                          "type": "Super",
                          "start": 323,
                          "end": 328
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 329,
                          "end": 335,
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 346,
            "end": 408,
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
            "value": {
              "type": "FunctionExpression",
              "start": 357,
              "end": 408,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 360,
                "end": 408,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 370,
                    "end": 378,
                    "expression": {
                      "type": "CallExpression",
                      "start": 370,
                      "end": 377,
                      "callee": {
                        "type": "Super",
                        "start": 370,
                        "end": 375
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 387,
                    "end": 402,
                    "expression": {
                      "type": "CallExpression",
                      "start": 387,
                      "end": 401,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 387,
                        "end": 399,
                        "object": {
                          "type": "Super",
                          "start": 387,
                          "end": 392
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 393,
                          "end": 399,
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 414,
            "end": 433,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 418,
              "end": 432,
              "callee": {
                "type": "MemberExpression",
                "start": 418,
                "end": 430,
                "object": {
                  "type": "Super",
                  "start": 418,
                  "end": 423
                },
                "property": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 430,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 438,
            "end": 461,
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
            "value": {
              "type": "FunctionExpression",
              "start": 439,
              "end": 461,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 442,
                "end": 461,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 444,
                    "end": 459,
                    "expression": {
                      "type": "CallExpression",
                      "start": 444,
                      "end": 458,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 444,
                        "end": 456,
                        "object": {
                          "type": "Super",
                          "start": 444,
                          "end": 449
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 450,
                          "end": 456,
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 466,
            "end": 500,
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
            "value": {
              "type": "FunctionExpression",
              "start": 471,
              "end": 500,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 483,
                        "end": 495,
                        "object": {
                          "type": "Super",
                          "start": 483,
                          "end": 488
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 489,
                          "end": 495,
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 505,
            "end": 541,
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
            "value": {
              "type": "FunctionExpression",
              "start": 510,
              "end": 541,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 522,
                "end": 541,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 524,
                    "end": 539,
                    "expression": {
                      "type": "CallExpression",
                      "start": 524,
                      "end": 538,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 524,
                        "end": 536,
                        "object": {
                          "type": "Super",
                          "start": 524,
                          "end": 529
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 530,
                          "end": 536,
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
