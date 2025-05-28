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
      "label": {
        "type": "Identifier",
        "start": 78,
        "end": 81,
        "decorators": [],
        "name": "ONE",
        "optional": false,
        "typeAnnotation": null
      },
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
            "decorators": [],
            "name": "TWO",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 139,
      "end": 203,
      "label": {
        "type": "Identifier",
        "start": 139,
        "end": 142,
        "decorators": [],
        "name": "TWO",
        "optional": false,
        "typeAnnotation": null
      },
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 162,
                  "end": 201,
                  "id": {
                    "type": "Identifier",
                    "start": 162,
                    "end": 163,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "ArrowFunctionExpression",
                    "start": 166,
                    "end": 201,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                            "decorators": [],
                            "name": "TWO",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        }
      }
    },
    {
      "type": "LabeledStatement",
      "start": 205,
      "end": 280,
      "label": {
        "type": "Identifier",
        "start": 205,
        "end": 210,
        "decorators": [],
        "name": "THREE",
        "optional": false,
        "typeAnnotation": null
      },
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 230,
                  "end": 278,
                  "id": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 232,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "FunctionExpression",
                    "start": 235,
                    "end": 278,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                            "decorators": [],
                            "name": "THREE",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "expression": false
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        }
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
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "LabeledStatement",
            "start": 335,
            "end": 358,
            "label": {
              "type": "Identifier",
              "start": 335,
              "end": 339,
              "decorators": [],
              "name": "FIVE",
              "optional": false,
              "typeAnnotation": null
            },
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
            }
          }
        ]
      }
    },
    {
      "type": "LabeledStatement",
      "start": 392,
      "end": 409,
      "label": {
        "type": "Identifier",
        "start": 392,
        "end": 396,
        "decorators": [],
        "name": "NINE",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "VariableDeclaration",
        "start": 398,
        "end": 409,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 402,
            "end": 408,
            "id": {
              "type": "Identifier",
              "start": 402,
              "end": 403,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
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
        "declare": false
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
              "decorators": [],
              "name": "NINE",
              "optional": false,
              "typeAnnotation": null
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
