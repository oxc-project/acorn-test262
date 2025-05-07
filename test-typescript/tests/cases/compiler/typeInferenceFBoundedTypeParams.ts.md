__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 435,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 202,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 104,
        "end": 202,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 110,
            "end": 181,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 136,
              "end": 181,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 146,
                  "end": 175,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 146,
                    "end": 174,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 152,
                      "decorators": [],
                      "name": "result",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 155,
                      "end": 174,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 160,
                          "end": 166,
                          "decorators": [],
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 168,
                          "end": 173,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 159,
                        "decorators": [],
                        "name": "fold",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 115,
              "end": 124,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 119,
                  "end": 124,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 124,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "right": {
              "type": "Identifier",
              "start": 128,
              "end": 134,
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 186,
            "end": 200,
            "argument": {
              "type": "Identifier",
              "start": 193,
              "end": 199,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 36,
        "decorators": [],
        "name": "fold",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 43,
          "end": 54,
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 54,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 51,
              "end": 54,
              "elementType": {
                "type": "TSTypeReference",
                "start": 51,
                "end": 52,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 56,
          "end": 65,
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 65,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 64,
              "end": 65,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 67,
          "end": 99,
          "decorators": [],
          "name": "fold",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 99,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 73,
              "end": 99,
              "params": [
                {
                  "type": "Identifier",
                  "start": 74,
                  "end": 83,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 83,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 82,
                      "end": 83,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 83,
                        "decorators": [],
                        "name": "r",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 85,
                  "end": 93,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 92,
                      "end": 93,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 95,
                "end": 99,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 98,
                  "end": 99,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "decorators": [],
                    "name": "r",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 100,
        "end": 103,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 102,
          "end": 103,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 42,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 38,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 40,
            "end": 41,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 204,
      "end": 310,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 264,
        "end": 310,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 270,
            "end": 289,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 270,
              "end": 288,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 282,
                  "end": 287,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 270,
                "end": 281,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 276,
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 281,
                  "decorators": [],
                  "name": "push",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ReturnStatement",
            "start": 294,
            "end": 308,
            "argument": {
              "type": "Identifier",
              "start": 301,
              "end": 307,
              "decorators": [],
              "name": "values",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 219,
        "decorators": [],
        "name": "append",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 236,
          "end": 247,
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 242,
            "end": 247,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 244,
              "end": 247,
              "elementType": {
                "type": "TSTypeReference",
                "start": 244,
                "end": 245,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 245,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 249,
          "end": 257,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 254,
            "end": 257,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 256,
              "end": 257,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 258,
        "end": 263,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 260,
          "end": 263,
          "elementType": {
            "type": "TSTypeReference",
            "start": 260,
            "end": 261,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 219,
        "end": 235,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 220,
            "end": 221,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 223,
            "end": 234,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 233,
              "end": 234,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "decorators": [],
              "name": "b",
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
      "start": 312,
      "end": 435,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 312,
        "end": 434,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 322,
            "end": 331,
            "elements": [
              {
                "type": "Literal",
                "start": 323,
                "end": 324,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 326,
                "end": 327,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 329,
                "end": 330,
                "raw": "3",
                "value": 3,
                "regex": null,
                "bigint": null
              }
            ]
          },
          {
            "type": "TSAsExpression",
            "start": 337,
            "end": 361,
            "expression": {
              "type": "ArrayExpression",
              "start": 337,
              "end": 339,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 343,
              "end": 361,
              "elementType": {
                "type": "TSTupleType",
                "start": 343,
                "end": 359,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 344,
                    "end": 350
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 352,
                    "end": 358
                  }
                ]
              }
            }
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 367,
            "end": 432,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 386,
              "end": 432,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 402,
                  "end": 408,
                  "decorators": [],
                  "name": "result",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "ArrayExpression",
                  "start": 418,
                  "end": 426,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 419,
                      "end": 421,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    },
                    {
                      "type": "Literal",
                      "start": 423,
                      "end": 425,
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  ]
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 386,
                "end": 392,
                "decorators": [],
                "name": "append",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 368,
                "end": 374,
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 376,
                "end": 381,
                "decorators": [],
                "name": "value",
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
          "start": 312,
          "end": 316,
          "decorators": [],
          "name": "fold",
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
