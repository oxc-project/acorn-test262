__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 95,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 38,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 38,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 7,
                "end": 38,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 8,
                    "end": 17,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 9,
                      "end": 17,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 11,
                        "end": 17
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 19,
                    "end": 29,
                    "decorators": [],
                    "name": "n",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 21,
                      "end": 29,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 23,
                        "end": 29
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 31,
                  "end": 38,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 34,
                    "end": 38
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 40,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 79,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 79,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 47,
                "end": 79,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 48,
                    "end": 57,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 51,
                        "end": 57
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 59,
                    "end": 70,
                    "decorators": [],
                    "name": "b",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 61,
                      "end": 70,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 63,
                        "end": 70
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 72,
                  "end": 79,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 75,
                    "end": 79
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 82,
      "end": 88,
      "expression": {
        "type": "AssignmentExpression",
        "start": 82,
        "end": 87,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 82,
          "end": 83,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 86,
          "end": 87,
          "decorators": [],
          "name": "g",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 89,
      "end": 95,
      "expression": {
        "type": "AssignmentExpression",
        "start": 89,
        "end": 94,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 89,
          "end": 90,
          "decorators": [],
          "name": "g",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 93,
          "end": 94,
          "decorators": [],
          "name": "f",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
