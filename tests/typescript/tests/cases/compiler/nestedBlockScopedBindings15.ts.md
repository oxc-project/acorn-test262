__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 7,
        "end": 12
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 35,
                      "end": 36
                    },
                    "init": null,
                    "definite": false,
                    "start": 35,
                    "end": 36
                  }
                ],
                "declare": false,
                "start": 31,
                "end": 37
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 52,
                    "end": 53
                  },
                  "id": null,
                  "generator": false,
                  "start": 46,
                  "end": 53
                },
                "directive": null,
                "start": 46,
                "end": 54
              }
            ],
            "start": 21,
            "end": 60
          }
        ],
        "start": 15,
        "end": 62
      },
      "start": 0,
      "end": 62
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 71,
        "end": 76
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 99,
                      "end": 100
                    },
                    "init": null,
                    "definite": false,
                    "start": 99,
                    "end": 100
                  }
                ],
                "declare": false,
                "start": 95,
                "end": 101
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 110,
                    "end": 111
                  },
                  "right": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 114,
                    "end": 115
                  },
                  "start": 110,
                  "end": 115
                },
                "directive": null,
                "start": 110,
                "end": 116
              }
            ],
            "start": 85,
            "end": 122
          }
        ],
        "start": 79,
        "end": 124
      },
      "start": 64,
      "end": 124
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 133,
        "end": 138
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 155,
              "end": 156
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 172,
                  "end": 173
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 191,
                          "end": 193
                        },
                        "init": null,
                        "definite": false,
                        "start": 191,
                        "end": 193
                      }
                    ],
                    "declare": false,
                    "start": 187,
                    "end": 194
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 213,
                        "end": 215
                      },
                      "id": null,
                      "generator": false,
                      "start": 207,
                      "end": 215
                    },
                    "directive": null,
                    "start": 207,
                    "end": 216
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 229,
                    "end": 235
                  }
                ],
                "start": 167,
                "end": 235
              }
            ],
            "start": 147,
            "end": 241
          }
        ],
        "start": 141,
        "end": 243
      },
      "start": 126,
      "end": 243
    },
    {
      "type": "ForStatement",
      "init": null,
      "test": {
        "type": "Literal",
        "value": false,
        "raw": "false",
        "start": 252,
        "end": 257
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 274,
              "end": 275
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 291,
                  "end": 292
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 310,
                          "end": 311
                        },
                        "init": null,
                        "definite": false,
                        "start": 310,
                        "end": 311
                      }
                    ],
                    "declare": false,
                    "start": 306,
                    "end": 312
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 325,
                        "end": 326
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 329,
                        "end": 330
                      },
                      "start": 325,
                      "end": 330
                    },
                    "directive": null,
                    "start": 325,
                    "end": 331
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 344,
                    "end": 350
                  }
                ],
                "start": 286,
                "end": 350
              }
            ],
            "start": 266,
            "end": 356
          }
        ],
        "start": 260,
        "end": 358
      },
      "start": 245,
      "end": 358
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 358
}
```
