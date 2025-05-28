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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
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
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 44,
        "decorators": [],
        "name": "incrementIdx",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 148,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 64,
            "end": 83,
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
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 88,
            "end": 130,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 92,
                "end": 129,
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
                  "callee": {
                    "type": "MemberExpression",
                    "start": 98,
                    "end": 108,
                    "object": {
                      "type": "Identifier",
                      "start": 98,
                      "end": 102,
                      "decorators": [],
                      "name": "Math",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 103,
                      "end": 108,
                      "decorators": [],
                      "name": "floor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "BinaryExpression",
                      "start": 109,
                      "end": 128,
                      "left": {
                        "type": "CallExpression",
                        "start": 109,
                        "end": 122,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 109,
                          "end": 120,
                          "object": {
                            "type": "Identifier",
                            "start": 109,
                            "end": 113,
                            "decorators": [],
                            "name": "Math",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 114,
                            "end": 120,
                            "decorators": [],
                            "name": "random",
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
                      "operator": "*",
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
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
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
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 150,
      "end": 179,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 154,
          "end": 178,
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 167,
                "end": 168,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 170,
                "end": 171,
                "value": 3,
                "raw": "3"
              },
              {
                "type": "Literal",
                "start": 173,
                "end": 174,
                "value": 4,
                "raw": "4"
              },
              {
                "type": "Literal",
                "start": 176,
                "end": 177,
                "value": 5,
                "raw": "5"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 181,
      "end": 223,
      "expression": {
        "type": "AssignmentExpression",
        "start": 181,
        "end": 222,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 181,
          "end": 216,
          "object": {
            "type": "Identifier",
            "start": 181,
            "end": 187,
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "CallExpression",
            "start": 188,
            "end": 215,
            "callee": {
              "type": "Identifier",
              "start": 188,
              "end": 200,
              "decorators": [],
              "name": "incrementIdx",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 201,
                "end": 214,
                "object": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 207,
                  "decorators": [],
                  "name": "array1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 214,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ],
            "optional": false
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Literal",
          "start": 221,
          "end": 222,
          "value": 3,
          "raw": "3"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 307,
      "expression": {
        "type": "AssignmentExpression",
        "start": 225,
        "end": 306,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 225,
          "end": 260,
          "object": {
            "type": "Identifier",
            "start": 225,
            "end": 231,
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "CallExpression",
            "start": 232,
            "end": 259,
            "callee": {
              "type": "Identifier",
              "start": 232,
              "end": 244,
              "decorators": [],
              "name": "incrementIdx",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 245,
                "end": 258,
                "object": {
                  "type": "Identifier",
                  "start": 245,
                  "end": 251,
                  "decorators": [],
                  "name": "array1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 258,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ],
            "optional": false
          },
          "optional": false,
          "computed": true
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
            "object": {
              "type": "Identifier",
              "start": 265,
              "end": 271,
              "decorators": [],
              "name": "array1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "CallExpression",
              "start": 272,
              "end": 299,
              "callee": {
                "type": "Identifier",
                "start": 272,
                "end": 284,
                "decorators": [],
                "name": "incrementIdx",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 285,
                  "end": 298,
                  "object": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 291,
                    "decorators": [],
                    "name": "array1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 292,
                    "end": 298,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              ],
              "optional": false
            },
            "optional": false,
            "computed": true
          },
          "right": {
            "type": "Literal",
            "start": 305,
            "end": 306,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 309,
      "end": 390,
      "expression": {
        "type": "AssignmentExpression",
        "start": 309,
        "end": 389,
        "operator": "**=",
        "left": {
          "type": "MemberExpression",
          "start": 309,
          "end": 344,
          "object": {
            "type": "Identifier",
            "start": 309,
            "end": 315,
            "decorators": [],
            "name": "array1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "CallExpression",
            "start": 316,
            "end": 343,
            "callee": {
              "type": "Identifier",
              "start": 316,
              "end": 328,
              "decorators": [],
              "name": "incrementIdx",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "MemberExpression",
                "start": 329,
                "end": 342,
                "object": {
                  "type": "Identifier",
                  "start": 329,
                  "end": 335,
                  "decorators": [],
                  "name": "array1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 336,
                  "end": 342,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            ],
            "optional": false
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "BinaryExpression",
          "start": 349,
          "end": 389,
          "left": {
            "type": "MemberExpression",
            "start": 349,
            "end": 384,
            "object": {
              "type": "Identifier",
              "start": 349,
              "end": 355,
              "decorators": [],
              "name": "array1",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "CallExpression",
              "start": 356,
              "end": 383,
              "callee": {
                "type": "Identifier",
                "start": 356,
                "end": 368,
                "decorators": [],
                "name": "incrementIdx",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 369,
                  "end": 382,
                  "object": {
                    "type": "Identifier",
                    "start": 369,
                    "end": 375,
                    "decorators": [],
                    "name": "array1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 376,
                    "end": 382,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              ],
              "optional": false
            },
            "optional": false,
            "computed": true
          },
          "operator": "**",
          "right": {
            "type": "Literal",
            "start": 388,
            "end": 389,
            "value": 2,
            "raw": "2"
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
