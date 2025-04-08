__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 358,
  "body": [
    {
      "type": "ForStatement",
      "start": 0,
      "end": 62,
      "init": null,
      "test": {
        "type": "Literal",
        "start": 7,
        "end": 12,
        "value": false,
        "raw": "false"
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 62,
        "body": [
          {
            "type": "BlockStatement",
            "start": 21,
            "end": 60,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 31,
                "end": 37,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 35,
                    "end": 36,
                    "id": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 36,
                      "name": "x",
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
              {
                "type": "ExpressionStatement",
                "start": 46,
                "end": 54,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 46,
                  "end": 53,
                  "id": null,
                  "expression": true,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "directive": null
              }
            ]
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 64,
      "end": 124,
      "init": null,
      "test": {
        "type": "Literal",
        "start": 71,
        "end": 76,
        "value": false,
        "raw": "false"
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 79,
        "end": 124,
        "body": [
          {
            "type": "BlockStatement",
            "start": 85,
            "end": 122,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 95,
                "end": 101,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 99,
                    "end": 100,
                    "id": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "name": "y",
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
              {
                "type": "ExpressionStatement",
                "start": 110,
                "end": 116,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 110,
                  "end": 115,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 110,
                    "end": 111,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 114,
                    "end": 115,
                    "value": 1,
                    "raw": "1"
                  }
                },
                "directive": null
              }
            ]
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 126,
      "end": 243,
      "init": null,
      "test": {
        "type": "Literal",
        "start": 133,
        "end": 138,
        "value": false,
        "raw": "false"
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 141,
        "end": 243,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 147,
            "end": 241,
            "discriminant": {
              "type": "Literal",
              "start": 155,
              "end": 156,
              "value": 1,
              "raw": "1"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 167,
                "end": 235,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 187,
                    "end": 194,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 191,
                        "end": 193,
                        "id": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 193,
                          "name": "z0",
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
                  {
                    "type": "ExpressionStatement",
                    "start": 207,
                    "end": 216,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 207,
                      "end": 215,
                      "id": null,
                      "expression": true,
                      "generator": false,
                      "async": false,
                      "params": [],
                      "body": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 215,
                        "name": "z0",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeParameters": null,
                      "returnType": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 229,
                    "end": 235,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 172,
                  "end": 173,
                  "value": 1,
                  "raw": "1"
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "ForStatement",
      "start": 245,
      "end": 358,
      "init": null,
      "test": {
        "type": "Literal",
        "start": 252,
        "end": 257,
        "value": false,
        "raw": "false"
      },
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 260,
        "end": 358,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 266,
            "end": 356,
            "discriminant": {
              "type": "Literal",
              "start": 274,
              "end": 275,
              "value": 1,
              "raw": "1"
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 286,
                "end": 350,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 306,
                    "end": 312,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 310,
                        "end": 311,
                        "id": {
                          "type": "Identifier",
                          "start": 310,
                          "end": 311,
                          "name": "z",
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
                  {
                    "type": "ExpressionStatement",
                    "start": 325,
                    "end": 331,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 325,
                      "end": 330,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 326,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 329,
                        "end": 330,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 344,
                    "end": 350,
                    "label": null
                  }
                ],
                "test": {
                  "type": "Literal",
                  "start": 291,
                  "end": 292,
                  "value": 1,
                  "raw": "1"
                }
              }
            ]
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
