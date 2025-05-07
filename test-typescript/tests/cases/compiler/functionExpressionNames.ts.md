__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 413,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 50,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 50,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 9,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "FunctionExpression",
          "start": 12,
          "end": 50,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 23,
            "end": 50,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 29,
                "end": 48,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 29,
                  "end": 48,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 29,
                    "end": 35,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 29,
                      "end": 33
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 35,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 38,
                    "end": 48,
                    "raw": "'exported'",
                    "value": "exported",
                    "regex": null,
                    "bigint": null
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
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 75,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 74,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 59,
            "end": 74,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 63,
              "end": 72,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 63,
                "end": 70,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 148,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 85,
            "end": 148,
            "properties": [
              {
                "type": "Property",
                "start": 91,
                "end": 146,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 94,
                  "end": 146,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 106,
                    "end": 146,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 116,
                        "end": 140,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 116,
                          "end": 140,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 116,
                            "end": 122,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 116,
                              "end": 120
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 121,
                              "end": 122,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 125,
                            "end": 140,
                            "raw": "'nested object'",
                            "value": "nested object",
                            "regex": null,
                            "bigint": null
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
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 167,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 155,
            "decorators": [],
            "name": "og",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 158,
            "end": 167,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 162,
              "end": 165,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 215,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 174,
            "end": 175,
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 178,
            "end": 215,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 190,
              "end": 215,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 196,
                  "end": 213,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 196,
                    "end": 213,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 196,
                      "end": 202,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 196,
                        "end": 200
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 202,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 205,
                      "end": 213,
                      "raw": "'simple'",
                      "value": "simple",
                      "regex": null,
                      "bigint": null
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
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 231,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 221,
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 224,
            "end": 231,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 228,
              "end": 229,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 240,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 239,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 239,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 241,
      "end": 286,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 241,
        "end": 286,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 241,
          "end": 242,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "FunctionExpression",
          "start": 245,
          "end": 286,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 257,
            "end": 286,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 263,
                "end": 284,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 263,
                  "end": 284,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 263,
                    "end": 269,
                    "computed": false,
                    "object": {
                      "type": "ThisExpression",
                      "start": 263,
                      "end": 267
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 269,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 272,
                    "end": 284,
                    "raw": "'assignment'",
                    "value": "assignment",
                    "regex": null,
                    "bigint": null
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
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 303,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 302,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 292,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 295,
            "end": 302,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 299,
              "end": 300,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 305,
      "end": 396,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 395,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 311,
            "end": 376,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 317,
                "end": 374,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 318,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "AssignmentPattern",
                  "start": 317,
                  "end": 374,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 317,
                    "end": 318,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "right": {
                    "type": "FunctionExpression",
                    "start": 321,
                    "end": 374,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 332,
                      "end": 374,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 342,
                          "end": 368,
                          "directive": null,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 342,
                            "end": 368,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 342,
                              "end": 348,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 342,
                                "end": 346
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 347,
                                "end": 348,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "start": 351,
                              "end": 368,
                              "raw": "'binding pattern'",
                              "value": "binding pattern",
                              "regex": null,
                              "bigint": null
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
                  },
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 379,
            "end": 395,
            "properties": [
              {
                "type": "Property",
                "start": 381,
                "end": 393,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 382,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 393,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 397,
      "end": 413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 412,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 401,
            "end": 402,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 405,
            "end": 412,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 409,
              "end": 410,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
