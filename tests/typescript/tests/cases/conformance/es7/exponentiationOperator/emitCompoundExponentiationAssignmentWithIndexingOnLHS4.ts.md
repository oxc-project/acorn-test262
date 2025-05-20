__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 390,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "decorators": [],
            "name": "globalCounter",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 20,
            "end": 21,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 148,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 148,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 64,
            "end": 83,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 64,
              "end": 82,
              "operator": "+=",
              "left": {
                "type": "Identifier",
                "start": 64,
                "end": 77,
                "decorators": [],
                "name": "globalCounter",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 81,
                "end": 82,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 88,
            "end": 130,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 92,
                "end": 129,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 95,
                  "decorators": [],
                  "name": "idx",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 98,
                  "end": 129,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 109,
                      "end": 128,
                      "operator": "*",
                      "left": {
                        "type": "CallExpression",
                        "start": 109,
                        "end": 122,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 109,
                          "end": 120,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 113,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 120,
                            "decorators": [],
                            "name": "random",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 125,
                        "end": 128,
                        "decorators": [],
                        "name": "max",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 98,
                    "end": 108,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 102,
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 108,
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "optional": false,
                  "typeArguments": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ReturnStatement",
            "start": 135,
            "end": 146,
            "argument": {
              "type": "Identifier",
              "start": 142,
              "end": 145,
              "decorators": [],
              "name": "idx",
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
        "end": 44,
        "decorators": [],
        "name": "incrementIdx",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 45,
          "end": 56,
          "decorators": [],
          "name": "max",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 56,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 50,
              "end": 56
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 178,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 154,
            "end": 160,
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 163,
            "end": 178,
            "elements": [
              {
                "type": "Literal",
                "start": 164,
                "end": 165,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 167,
                "end": 168,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 170,
                "end": 171,
                "raw": "3",
                "value": 3
              },
              {
                "type": "Literal",
                "start": 173,
                "end": 174,
                "raw": "4",
                "value": 4
              },
              {
                "type": "Literal",
                "start": 176,
                "end": 177,
                "raw": "5",
                "value": 5
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 223,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 181,
        "end": 222,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 181,
          "end": 216,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 181,
            "end": 187,
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "CallExpression",
            "start": 188,
            "end": 215,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 201,
                "end": 214,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 207,
                  "decorators": [],
                  "name": "array1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 214,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 188,
              "end": 200,
              "decorators": [],
              "name": "incrementIdx",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 221,
          "end": 222,
          "raw": "3",
          "value": 3
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 307,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 225,
        "end": 306,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 225,
          "end": 260,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 225,
            "end": 231,
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "CallExpression",
            "start": 232,
            "end": 259,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 245,
                "end": 258,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 251,
                  "decorators": [],
                  "name": "array1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 258,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 232,
              "end": 244,
              "decorators": [],
              "name": "incrementIdx",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 265,
          "end": 306,
          "operator": "**=",
          "left": {
            "type": "MemberExpression",
            "start": 265,
            "end": 300,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 265,
              "end": 271,
              "decorators": [],
              "name": "array1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "CallExpression",
              "start": 272,
              "end": 299,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 285,
                  "end": 298,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 291,
                    "decorators": [],
                    "name": "array1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 298,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 272,
                "end": 284,
                "decorators": [],
                "name": "incrementIdx",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          "right": {
            "type": "Literal",
            "start": 305,
            "end": 306,
            "raw": "2",
            "value": 2
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 309,
      "end": 390,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 309,
        "end": 389,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 309,
          "end": 344,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 309,
            "end": 315,
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "CallExpression",
            "start": 316,
            "end": 343,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 329,
                "end": 342,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 335,
                  "decorators": [],
                  "name": "array1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 342,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 316,
              "end": 328,
              "decorators": [],
              "name": "incrementIdx",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 349,
          "end": 389,
          "operator": "**",
          "left": {
            "type": "MemberExpression",
            "start": 349,
            "end": 384,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 349,
              "end": 355,
              "decorators": [],
              "name": "array1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "CallExpression",
              "start": 356,
              "end": 383,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 369,
                  "end": 382,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 369,
                    "end": 375,
                    "decorators": [],
                    "name": "array1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 376,
                    "end": 382,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 356,
                "end": 368,
                "decorators": [],
                "name": "incrementIdx",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          "right": {
            "type": "Literal",
            "start": 388,
            "end": 389,
            "raw": "2",
            "value": 2
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
