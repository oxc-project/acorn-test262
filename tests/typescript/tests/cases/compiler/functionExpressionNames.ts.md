__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 7
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "E",
            "optional": false,
            "typeAnnotation": null,
            "start": 8,
            "end": 9
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 9
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 29,
                      "end": 33
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 34,
                      "end": 35
                    },
                    "optional": false,
                    "computed": false,
                    "start": 29,
                    "end": 35
                  },
                  "right": {
                    "type": "Literal",
                    "value": "exported",
                    "raw": "'exported'",
                    "start": 38,
                    "end": 48
                  },
                  "start": 29,
                  "end": 48
                },
                "directive": null,
                "start": 29,
                "end": 48
              }
            ],
            "start": 23,
            "end": 50
          },
          "expression": false,
          "start": 12,
          "end": 50
        },
        "start": 0,
        "end": 50
      },
      "directive": null,
      "start": 0,
      "end": 50
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 55,
            "end": 56
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 70
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 71,
                "end": 72
              },
              "optional": false,
              "computed": false,
              "start": 63,
              "end": 72
            },
            "typeArguments": null,
            "arguments": [],
            "start": 59,
            "end": 74
          },
          "definite": false,
          "start": 55,
          "end": 74
        }
      ],
      "declare": false,
      "start": 51,
      "end": 75
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 82
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 91,
                  "end": 92
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 116,
                              "end": 120
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 121,
                              "end": 122
                            },
                            "optional": false,
                            "computed": false,
                            "start": 116,
                            "end": 122
                          },
                          "right": {
                            "type": "Literal",
                            "value": "nested object",
                            "raw": "'nested object'",
                            "start": 125,
                            "end": 140
                          },
                          "start": 116,
                          "end": 140
                        },
                        "directive": null,
                        "start": 116,
                        "end": 140
                      }
                    ],
                    "start": 106,
                    "end": 146
                  },
                  "expression": false,
                  "start": 94,
                  "end": 146
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 91,
                "end": 146
              }
            ],
            "start": 85,
            "end": 148
          },
          "definite": false,
          "start": 81,
          "end": 148
        }
      ],
      "declare": false,
      "start": 77,
      "end": 148
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "og",
            "optional": false,
            "typeAnnotation": null,
            "start": 153,
            "end": 155
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "o",
                "optional": false,
                "typeAnnotation": null,
                "start": 162,
                "end": 163
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 165
              },
              "optional": false,
              "computed": false,
              "start": 162,
              "end": 165
            },
            "typeArguments": null,
            "arguments": [],
            "start": 158,
            "end": 167
          },
          "definite": false,
          "start": 153,
          "end": 167
        }
      ],
      "declare": false,
      "start": 149,
      "end": 168
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null,
            "start": 174,
            "end": 175
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 196,
                        "end": 200
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 201,
                        "end": 202
                      },
                      "optional": false,
                      "computed": false,
                      "start": 196,
                      "end": 202
                    },
                    "right": {
                      "type": "Literal",
                      "value": "simple",
                      "raw": "'simple'",
                      "start": 205,
                      "end": 213
                    },
                    "start": 196,
                    "end": 213
                  },
                  "directive": null,
                  "start": 196,
                  "end": 213
                }
              ],
              "start": 190,
              "end": 215
            },
            "expression": false,
            "start": 178,
            "end": 215
          },
          "definite": false,
          "start": 174,
          "end": 215
        }
      ],
      "declare": false,
      "start": 170,
      "end": 215
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 220,
            "end": 221
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 229
            },
            "typeArguments": null,
            "arguments": [],
            "start": 224,
            "end": 231
          },
          "definite": false,
          "start": 220,
          "end": 231
        }
      ],
      "declare": false,
      "start": 216,
      "end": 232
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 239
          },
          "init": null,
          "definite": false,
          "start": 238,
          "end": 239
        }
      ],
      "declare": false,
      "start": 234,
      "end": 240
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 241,
          "end": 242
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 263,
                      "end": 267
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 268,
                      "end": 269
                    },
                    "optional": false,
                    "computed": false,
                    "start": 263,
                    "end": 269
                  },
                  "right": {
                    "type": "Literal",
                    "value": "assignment",
                    "raw": "'assignment'",
                    "start": 272,
                    "end": 284
                  },
                  "start": 263,
                  "end": 284
                },
                "directive": null,
                "start": 263,
                "end": 284
              }
            ],
            "start": 257,
            "end": 286
          },
          "expression": false,
          "start": 245,
          "end": 286
        },
        "start": 241,
        "end": 286
      },
      "directive": null,
      "start": 241,
      "end": 286
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 291,
            "end": 292
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 300
            },
            "typeArguments": null,
            "arguments": [],
            "start": 295,
            "end": 302
          },
          "definite": false,
          "start": 291,
          "end": 302
        }
      ],
      "declare": false,
      "start": 287,
      "end": 303
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 318
                },
                "value": {
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 318
                  },
                  "right": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 342,
                                "end": 346
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "b",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 347,
                                "end": 348
                              },
                              "optional": false,
                              "computed": false,
                              "start": 342,
                              "end": 348
                            },
                            "right": {
                              "type": "Literal",
                              "value": "binding pattern",
                              "raw": "'binding pattern'",
                              "start": 351,
                              "end": 368
                            },
                            "start": 342,
                            "end": 368
                          },
                          "directive": null,
                          "start": 342,
                          "end": 368
                        }
                      ],
                      "start": 332,
                      "end": 374
                    },
                    "expression": false,
                    "start": 321,
                    "end": 374
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 374
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 317,
                "end": 374
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 311,
            "end": 376
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 381,
                  "end": 382
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 393
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 381,
                "end": 393
              }
            ],
            "start": 379,
            "end": 395
          },
          "definite": false,
          "start": 311,
          "end": 395
        }
      ],
      "declare": false,
      "start": 305,
      "end": 396
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 401,
            "end": 402
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 410
            },
            "typeArguments": null,
            "arguments": [],
            "start": 405,
            "end": 412
          },
          "definite": false,
          "start": 401,
          "end": 412
        }
      ],
      "declare": false,
      "start": 397,
      "end": 413
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 413
}
```
