__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 436,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 202,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 36,
        "name": "fold",
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
          "start": 43,
          "end": 54,
          "name": "values",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 52,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 56,
          "end": 65,
          "name": "result",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 65,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 64,
              "end": 65,
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "name": "r",
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
          "start": 67,
          "end": 99,
          "name": "fold",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 71,
            "end": 99,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 73,
              "end": 99,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 74,
                  "end": 83,
                  "name": "result",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 80,
                    "end": 83,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 82,
                      "end": 83,
                      "typeName": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 83,
                        "name": "r",
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
                  "start": 85,
                  "end": 93,
                  "name": "value",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 90,
                    "end": 93,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 92,
                      "end": 93,
                      "typeName": {
                        "type": "Identifier",
                        "start": 92,
                        "end": 93,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 98,
                    "end": 99,
                    "name": "r",
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
        "start": 104,
        "end": 202,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 110,
            "end": 181,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 115,
              "end": 124,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 119,
                  "end": 124,
                  "id": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 124,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "let",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 128,
              "end": 134,
              "name": "values",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 136,
              "end": 181,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 146,
                  "end": 175,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 146,
                    "end": 174,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 152,
                      "name": "result",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 155,
                      "end": 174,
                      "callee": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 159,
                        "name": "fold",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 160,
                          "end": 166,
                          "name": "result",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 168,
                          "end": 173,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
                }
              ]
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
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 36,
        "end": 42,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 37,
            "end": 38,
            "name": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "a",
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
            "start": 40,
            "end": 41,
            "name": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "name": "r",
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
        "start": 100,
        "end": 103,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 102,
          "end": 103,
          "typeName": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 204,
      "end": 310,
      "id": {
        "type": "Identifier",
        "start": 213,
        "end": 219,
        "name": "append",
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
          "start": 236,
          "end": 247,
          "name": "values",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 245,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 249,
          "end": 257,
          "name": "value",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 254,
            "end": 257,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 256,
              "end": 257,
              "typeName": {
                "type": "Identifier",
                "start": 256,
                "end": 257,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 264,
        "end": 310,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 270,
            "end": 289,
            "expression": {
              "type": "CallExpression",
              "start": 270,
              "end": 288,
              "callee": {
                "type": "MemberExpression",
                "start": 270,
                "end": 281,
                "object": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 276,
                  "name": "values",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 281,
                  "name": "push",
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
                  "start": 282,
                  "end": 287,
                  "name": "value",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ReturnStatement",
            "start": 294,
            "end": 308,
            "argument": {
              "type": "Identifier",
              "start": 301,
              "end": 307,
              "name": "values",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 219,
        "end": 235,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 220,
            "end": 221,
            "name": {
              "type": "Identifier",
              "start": 220,
              "end": 221,
              "name": "a",
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
            "start": 223,
            "end": 234,
            "name": {
              "type": "Identifier",
              "start": 223,
              "end": 224,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 233,
              "end": 234,
              "typeName": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "typeName": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 312,
      "end": 435,
      "expression": {
        "type": "CallExpression",
        "start": 312,
        "end": 434,
        "callee": {
          "type": "Identifier",
          "start": 312,
          "end": 316,
          "name": "fold",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 326,
                "end": 327,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 329,
                "end": 330,
                "value": 3,
                "raw": "3"
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
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 368,
                "end": 374,
                "name": "result",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 376,
                "end": 381,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 386,
              "end": 432,
              "callee": {
                "type": "Identifier",
                "start": 386,
                "end": 392,
                "name": "append",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 402,
                  "end": 408,
                  "name": "result",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "value": "",
                      "raw": "\"\""
                    },
                    {
                      "type": "Literal",
                      "start": 423,
                      "end": 425,
                      "value": "",
                      "raw": "\"\""
                    }
                  ]
                }
              ],
              "optional": false,
              "typeArguments": null
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
