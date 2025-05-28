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
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 35,
                    "end": 36,
                    "id": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 36,
                      "decorators": [],
                      "name": "x",
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
                "start": 46,
                "end": 54,
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "start": 46,
                  "end": 53,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Identifier",
                    "start": 52,
                    "end": 53,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "id": null,
                  "generator": false
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
                "kind": "let",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 99,
                    "end": 100,
                    "id": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "y",
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
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
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
                "test": {
                  "type": "Literal",
                  "start": 172,
                  "end": 173,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 187,
                    "end": 194,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 191,
                        "end": 193,
                        "id": {
                          "type": "Identifier",
                          "start": 191,
                          "end": 193,
                          "decorators": [],
                          "name": "z0",
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
                    "start": 207,
                    "end": 216,
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "start": 207,
                      "end": 215,
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 215,
                        "decorators": [],
                        "name": "z0",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 229,
                    "end": 235,
                    "label": null
                  }
                ]
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
                "test": {
                  "type": "Literal",
                  "start": 291,
                  "end": 292,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 306,
                    "end": 312,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 310,
                        "end": 311,
                        "id": {
                          "type": "Identifier",
                          "start": 310,
                          "end": 311,
                          "decorators": [],
                          "name": "z",
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
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
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
                ]
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
