__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 532,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 10,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 140,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 140,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 110,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 50,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 50,
              "end": 110,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 53,
                "end": 110,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 57,
                    "end": 66,
                    "expression": {
                      "type": "Literal",
                      "start": 57,
                      "end": 65,
                      "value": "inject",
                      "raw": "'inject'"
                    },
                    "directive": "inject"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 69,
                    "end": 77,
                    "expression": {
                      "type": "CallExpression",
                      "start": 69,
                      "end": 76,
                      "callee": {
                        "type": "Super",
                        "start": 69,
                        "end": 74
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
                        "id": {
                          "type": "Identifier",
                          "start": 86,
                          "end": 87,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 90,
                          "end": 91,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
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
                        "id": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 102,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 105,
                          "end": 106,
                          "value": 1,
                          "raw": "1"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 113,
            "end": 138,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 126,
              "end": 127,
              "name": "m",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 127,
              "end": 138,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 136,
                "end": 138,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 129,
                "end": 135,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 131,
                  "end": 135
                }
              }
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 113,
                "end": 117,
                "expression": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 117,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
      "type": "FunctionDeclaration",
      "start": 142,
      "end": 247,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 154,
        "name": "foo",
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
          "start": 155,
          "end": 166,
          "name": "method",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 161,
            "end": 166,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 163,
              "end": 166
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 168,
          "end": 181,
          "name": "_context",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 176,
            "end": 181,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 178,
              "end": 181
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 208,
                  "end": 217,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 212,
                    "end": 217,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 214,
                      "end": 217
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 219,
                "end": 244,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 223,
                    "end": 241,
                    "expression": {
                      "type": "CallExpression",
                      "start": 223,
                      "end": 240,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 223,
                        "end": 234,
                        "object": {
                          "type": "Identifier",
                          "start": 223,
                          "end": 229,
                          "name": "method",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 230,
                          "end": 234,
                          "name": "call",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 235,
                          "end": 239
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
              "typeParameters": null,
              "returnType": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 182,
        "end": 187,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 184,
          "end": 187
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 249,
      "end": 257,
      "expression": {
        "type": "NewExpression",
        "start": 249,
        "end": 256,
        "callee": {
          "type": "Identifier",
          "start": 253,
          "end": 254,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 315,
      "end": 412,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 322,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 323,
        "end": 412,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 326,
            "end": 363,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 333,
              "end": 344,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 344,
              "end": 363,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 347,
                "end": 363,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 351,
                    "end": 360,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 351,
                      "end": 359,
                      "object": {
                        "type": "ThisExpression",
                        "start": 351,
                        "end": 355
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 356,
                        "end": 359,
                        "name": "val",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 366,
            "end": 410,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 383,
              "end": 386,
              "name": "val",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 386,
              "end": 410,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 3,
                      "raw": "3"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 388,
                "end": 396,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 390,
                  "end": 396
                }
              }
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 366,
                "end": 370,
                "expression": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 370,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": "public"
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
      "type": "ClassDeclaration",
      "start": 413,
      "end": 531,
      "id": {
        "type": "Identifier",
        "start": 419,
        "end": 420,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 429,
        "end": 430,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 431,
        "end": 531,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 434,
            "end": 482,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 441,
              "end": 452,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 452,
              "end": 482,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 455,
                "end": 482,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 459,
                    "end": 467,
                    "expression": {
                      "type": "CallExpression",
                      "start": 459,
                      "end": 466,
                      "callee": {
                        "type": "Super",
                        "start": 459,
                        "end": 464
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 470,
                    "end": 479,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 470,
                      "end": 478,
                      "object": {
                        "type": "ThisExpression",
                        "start": 470,
                        "end": 474
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 475,
                        "end": 478,
                        "name": "val",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 485,
            "end": 529,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 502,
              "end": 505,
              "name": "val",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "get",
            "value": {
              "type": "FunctionExpression",
              "start": 505,
              "end": 529,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 3,
                      "raw": "3"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 507,
                "end": 515,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 509,
                  "end": 515
                }
              }
            },
            "decorators": [
              {
                "type": "Decorator",
                "start": 485,
                "end": 489,
                "expression": {
                  "type": "Identifier",
                  "start": 486,
                  "end": 489,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
