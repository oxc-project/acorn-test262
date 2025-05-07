__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 531,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 10,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
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
      "start": 11,
      "end": 140,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 110,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 50,
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
              "start": 50,
              "end": 110,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 53,
                "end": 110,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 57,
                    "end": 66,
                    "directive": "inject",
                    "expression": {
                      "type": "Literal",
                      "start": 57,
                      "end": 65,
                      "raw": "'inject'",
                      "value": "inject",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 69,
                    "end": 77,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 69,
                      "end": 76,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 69,
                        "end": 74
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 80,
                    "end": 92,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 86,
                        "end": 91,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 87,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 90,
                          "end": 91,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 95,
                    "end": 107,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 101,
                        "end": 106,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 102,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 105,
                          "end": 106,
                          "raw": "1",
                          "value": 1,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
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
            "start": 113,
            "end": 138,
            "accessibility": "public",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 113,
                "end": 117,
                "expression": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 117,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
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
              "start": 127,
              "end": 138,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 138,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 129,
                "end": 135,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 131,
                  "end": 135
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 142,
      "end": 247,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 188,
        "end": 247,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 191,
            "end": 245,
            "argument": {
              "type": "FunctionExpression",
              "start": 198,
              "end": 244,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 219,
                "end": 244,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 223,
                    "end": 241,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 223,
                      "end": 240,
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 235,
                          "end": 239
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 223,
                        "end": 234,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 223,
                          "end": 229,
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 230,
                          "end": 234,
                          "decorators": [],
                          "name": "call",
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
                  "start": 208,
                  "end": 217,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 212,
                    "end": 217,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 214,
                      "end": 217
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 154,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 155,
          "end": 166,
          "decorators": [],
          "name": "method",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 161,
            "end": 166,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 163,
              "end": 166
            }
          }
        },
        {
          "type": "Identifier",
          "start": 168,
          "end": 181,
          "decorators": [],
          "name": "_context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 176,
            "end": 181,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 178,
              "end": 181
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 182,
        "end": 187,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 184,
          "end": 187
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 249,
      "end": 257,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 249,
        "end": 256,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 253,
          "end": 254,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 315,
      "end": 412,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 323,
        "end": 412,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 326,
            "end": 363,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 333,
              "end": 344,
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
              "start": 344,
              "end": 363,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 347,
                "end": 363,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 351,
                    "end": 360,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 351,
                      "end": 359,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 351,
                        "end": 355
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 356,
                        "end": 359,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
            "start": 366,
            "end": 410,
            "accessibility": "public",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 366,
                "end": 370,
                "expression": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 370,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 383,
              "end": 386,
              "decorators": [],
              "name": "val",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 386,
              "end": 410,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 397,
                "end": 410,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 399,
                    "end": 408,
                    "argument": {
                      "type": "Literal",
                      "start": 406,
                      "end": 407,
                      "raw": "3",
                      "value": 3,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 388,
                "end": 396,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 390,
                  "end": 396
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 322,
        "decorators": [],
        "name": "C",
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
      "start": 413,
      "end": 531,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 431,
        "end": 531,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 434,
            "end": 482,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 441,
              "end": 452,
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
              "start": 452,
              "end": 482,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 455,
                "end": 482,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 459,
                    "end": 467,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 459,
                      "end": 466,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 459,
                        "end": 464
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 470,
                    "end": 479,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 470,
                      "end": 478,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 470,
                        "end": 474
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 475,
                        "end": 478,
                        "decorators": [],
                        "name": "val",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
            "start": 485,
            "end": 529,
            "accessibility": "public",
            "computed": false,
            "decorators": [
              {
                "type": "Decorator",
                "start": 485,
                "end": 489,
                "expression": {
                  "type": "Identifier",
                  "start": 486,
                  "end": 489,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "key": {
              "type": "Identifier",
              "start": 502,
              "end": 505,
              "decorators": [],
              "name": "val",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 505,
              "end": 529,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 516,
                "end": 529,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 518,
                    "end": 527,
                    "argument": {
                      "type": "Literal",
                      "start": 525,
                      "end": 526,
                      "raw": "3",
                      "value": 3,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 507,
                "end": 515,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 509,
                  "end": 515
                }
              },
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 420,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 429,
        "end": 430,
        "decorators": [],
        "name": "A",
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
