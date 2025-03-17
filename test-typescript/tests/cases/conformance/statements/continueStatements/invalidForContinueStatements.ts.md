__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 45,
  "end": 441,
  "body": [
    {
      "type": "ContinueStatement",
      "start": 45,
      "end": 54,
      "label": null
    },
    {
      "type": "LabeledStatement",
      "start": 78,
      "end": 104,
      "body": {
        "type": "ForStatement",
        "start": 83,
        "end": 104,
        "init": null,
        "test": null,
        "update": null,
        "body": {
          "type": "ContinueStatement",
          "start": 91,
          "end": 104,
          "label": {
            "type": "Identifier",
            "start": 100,
            "end": 103,
            "name": "TWO",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      },
      "label": {
        "type": "Identifier",
        "start": 78,
        "end": 81,
        "name": "ONE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 139,
      "end": 203,
      "body": {
        "type": "ForStatement",
        "start": 144,
        "end": 203,
        "init": null,
        "test": null,
        "update": null,
        "body": {
          "type": "BlockStatement",
          "start": 152,
          "end": 203,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 158,
              "end": 201,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 162,
                  "end": 201,
                  "id": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 163,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 166,
                    "end": 201,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 172,
                      "end": 201,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 182,
                          "end": 195,
                          "label": {
                            "type": "Identifier",
                            "start": 191,
                            "end": 194,
                            "name": "TWO",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 139,
        "end": 142,
        "name": "TWO",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 205,
      "end": 280,
      "body": {
        "type": "ForStatement",
        "start": 212,
        "end": 280,
        "init": null,
        "test": null,
        "update": null,
        "body": {
          "type": "BlockStatement",
          "start": 220,
          "end": 280,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 226,
              "end": 278,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 230,
                  "end": 278,
                  "id": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 232,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 235,
                    "end": 278,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 247,
                      "end": 278,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 257,
                          "end": 272,
                          "label": {
                            "type": "Identifier",
                            "start": 266,
                            "end": 271,
                            "name": "THREE",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 205,
        "end": 210,
        "name": "THREE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ForStatement",
      "start": 302,
      "end": 360,
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 310,
        "end": 360,
        "body": [
          {
            "type": "ContinueStatement",
            "start": 316,
            "end": 330,
            "label": {
              "type": "Identifier",
              "start": 325,
              "end": 329,
              "name": "FIVE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "LabeledStatement",
            "start": 335,
            "end": 358,
            "body": {
              "type": "ForStatement",
              "start": 345,
              "end": 358,
              "init": null,
              "test": null,
              "update": null,
              "body": {
                "type": "BlockStatement",
                "start": 355,
                "end": 358,
                "body": []
              }
            },
            "label": {
              "type": "Identifier",
              "start": 335,
              "end": 339,
              "name": "FIVE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "LabeledStatement",
      "start": 392,
      "end": 409,
      "body": {
        "type": "VariableDeclaration",
        "start": 398,
        "end": 409,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 402,
            "end": 408,
            "id": {
              "type": "Identifier",
              "start": 402,
              "end": 403,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 406,
              "end": 408,
              "value": 12,
              "raw": "12"
            },
            "definite": false
          }
        ],
        "kind": "var",
        "declare": false
      },
      "label": {
        "type": "Identifier",
        "start": 392,
        "end": 396,
        "name": "NINE",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ForStatement",
      "start": 411,
      "end": 441,
      "init": null,
      "test": null,
      "update": null,
      "body": {
        "type": "BlockStatement",
        "start": 419,
        "end": 441,
        "body": [
          {
            "type": "ContinueStatement",
            "start": 425,
            "end": 439,
            "label": {
              "type": "Identifier",
              "start": 434,
              "end": 438,
              "name": "NINE",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
