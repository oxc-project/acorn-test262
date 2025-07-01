__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "iNext",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 70
              },
              "init": null,
              "definite": false,
              "start": 65,
              "end": 70
            }
          ],
          "declare": false,
          "start": 61,
          "end": 71
        },
        {
          "type": "ForStatement",
          "init": {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 88,
                  "end": 89
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 92,
                  "end": 93
                },
                "definite": false,
                "start": 88,
                "end": 93
              }
            ],
            "declare": false,
            "start": 84,
            "end": 93
          },
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 100
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 103,
              "end": 105
            },
            "start": 99,
            "end": 105
          },
          "update": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 112
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iNext",
              "optional": false,
              "typeAnnotation": null,
              "start": 115,
              "end": 120
            },
            "start": 111,
            "end": 120
          },
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 144,
                    "end": 145
                  },
                  "operator": "==",
                  "right": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 149,
                    "end": 150
                  },
                  "start": 144,
                  "end": 150
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "iNext",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 160,
                          "end": 165
                        },
                        "right": {
                          "type": "Literal",
                          "value": "bad",
                          "raw": "\"bad\"",
                          "start": 168,
                          "end": 173
                        },
                        "start": 160,
                        "end": 173
                      },
                      "directive": null,
                      "start": 160,
                      "end": 174
                    },
                    {
                      "type": "ContinueStatement",
                      "label": null,
                      "start": 181,
                      "end": 190
                    }
                  ],
                  "start": 152,
                  "end": 196
                },
                "alternate": null,
                "start": 140,
                "end": 196
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iNext",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 201,
                    "end": 206
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 209,
                      "end": 210
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 213,
                      "end": 214
                    },
                    "start": 209,
                    "end": 214
                  },
                  "start": 201,
                  "end": 214
                },
                "directive": null,
                "start": 201,
                "end": 215
              }
            ],
            "start": 134,
            "end": 219
          },
          "start": 74,
          "end": 219
        }
      ],
      "start": 57,
      "end": 221
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "iNext",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 238,
                        "end": 244
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 247,
                        "end": 253
                      }
                    ],
                    "start": 238,
                    "end": 253
                  },
                  "start": 236,
                  "end": 253
                },
                "start": 231,
                "end": 253
              },
              "init": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 256,
                "end": 258
              },
              "definite": false,
              "start": 231,
              "end": 258
            }
          ],
          "declare": false,
          "start": 227,
          "end": 259
        },
        {
          "type": "ForStatement",
          "init": {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 277
                },
                "init": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 280,
                  "end": 281
                },
                "definite": false,
                "start": 276,
                "end": 281
              }
            ],
            "declare": false,
            "start": 272,
            "end": 281
          },
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 287,
              "end": 288
            },
            "operator": "<",
            "right": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 291,
              "end": 293
            },
            "start": 287,
            "end": 293
          },
          "update": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 300
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "iNext",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 308
            },
            "start": 299,
            "end": 308
          },
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "IfStatement",
                "test": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 332,
                    "end": 333
                  },
                  "operator": "==",
                  "right": {
                    "type": "Literal",
                    "value": 5,
                    "raw": "5",
                    "start": 337,
                    "end": 338
                  },
                  "start": 332,
                  "end": 338
                },
                "consequent": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "iNext",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 348,
                          "end": 353
                        },
                        "right": {
                          "type": "Literal",
                          "value": "bad",
                          "raw": "\"bad\"",
                          "start": 356,
                          "end": 361
                        },
                        "start": 348,
                        "end": 361
                      },
                      "directive": null,
                      "start": 348,
                      "end": 362
                    },
                    {
                      "type": "ContinueStatement",
                      "label": null,
                      "start": 369,
                      "end": 378
                    }
                  ],
                  "start": 340,
                  "end": 384
                },
                "alternate": null,
                "start": 328,
                "end": 384
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "iNext",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 389,
                    "end": 394
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 397,
                      "end": 398
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 401,
                      "end": 402
                    },
                    "start": 397,
                    "end": 402
                  },
                  "start": 389,
                  "end": 402
                },
                "directive": null,
                "start": 389,
                "end": 403
              }
            ],
            "start": 322,
            "end": 407
          },
          "start": 262,
          "end": 407
        }
      ],
      "start": 223,
      "end": 409
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 409
}
```
