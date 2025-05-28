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
      "expression": {
        "type": "AssignmentExpression",
        "start": 0,
        "end": 50,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 0,
          "end": 9,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 7,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "FunctionExpression",
          "start": 12,
          "end": 50,
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 23,
            "end": 50,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 29,
                "end": 48,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 29,
                  "end": 48,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 29,
                    "end": 35,
                    "object": {
                      "type": "ThisExpression",
                      "start": 29,
                      "end": 33
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 35,
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 38,
                    "end": 48,
                    "value": "exported",
                    "raw": "'exported'"
                  }
                },
                "directive": null
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 75,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 74,
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
            "callee": {
              "type": "MemberExpression",
              "start": 63,
              "end": 72,
              "object": {
                "type": "Identifier",
                "start": 63,
                "end": 70,
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 77,
      "end": 148,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 148,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 92,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 94,
                  "end": 146,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 106,
                    "end": 146,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 116,
                        "end": 140,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 116,
                          "end": 140,
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "start": 116,
                            "end": 122,
                            "object": {
                              "type": "ThisExpression",
                              "start": 116,
                              "end": 120
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 121,
                              "end": 122,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 125,
                            "end": 140,
                            "value": "nested object",
                            "raw": "'nested object'"
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 168,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 167,
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
            "callee": {
              "type": "MemberExpression",
              "start": 162,
              "end": 165,
              "object": {
                "type": "Identifier",
                "start": 162,
                "end": 163,
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 164,
                "end": 165,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 170,
      "end": 215,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 174,
          "end": 215,
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
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 190,
              "end": 215,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 196,
                  "end": 213,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 196,
                    "end": 213,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 196,
                      "end": 202,
                      "object": {
                        "type": "ThisExpression",
                        "start": 196,
                        "end": 200
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 201,
                        "end": 202,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 205,
                      "end": 213,
                      "value": "simple",
                      "raw": "'simple'"
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 232,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 231,
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
            "callee": {
              "type": "Identifier",
              "start": 228,
              "end": 229,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 240,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 239,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 241,
      "end": 286,
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
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "start": 257,
            "end": 286,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 263,
                "end": 284,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 263,
                  "end": 284,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 263,
                    "end": 269,
                    "object": {
                      "type": "ThisExpression",
                      "start": 263,
                      "end": 267
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 268,
                      "end": 269,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 272,
                    "end": 284,
                    "value": "assignment",
                    "raw": "'assignment'"
                  }
                },
                "directive": null
              }
            ]
          },
          "expression": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 303,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 302,
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
            "callee": {
              "type": "Identifier",
              "start": 299,
              "end": 300,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 305,
      "end": 396,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 395,
          "id": {
            "type": "ObjectPattern",
            "start": 311,
            "end": 376,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 317,
                "end": 374,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 318,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                  "right": {
                    "type": "FunctionExpression",
                    "start": 321,
                    "end": 374,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 332,
                      "end": 374,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 342,
                          "end": 368,
                          "expression": {
                            "type": "AssignmentExpression",
                            "start": 342,
                            "end": 368,
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "start": 342,
                              "end": 348,
                              "object": {
                                "type": "ThisExpression",
                                "start": 342,
                                "end": 346
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 347,
                                "end": 348,
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 351,
                              "end": 368,
                              "value": "binding pattern",
                              "raw": "'binding pattern'"
                            }
                          },
                          "directive": null
                        }
                      ]
                    },
                    "expression": false
                  },
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 382,
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 384,
                  "end": 393,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 397,
      "end": 413,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 401,
          "end": 412,
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
            "callee": {
              "type": "Identifier",
              "start": 409,
              "end": 410,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
