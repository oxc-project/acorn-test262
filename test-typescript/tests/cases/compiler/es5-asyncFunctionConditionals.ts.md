__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 211,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 15,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 18,
          "end": 19,
          "id": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 22,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 25,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 25,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 28,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 28,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 31,
      "end": 91,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 58,
        "name": "conditional0",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 61,
        "end": 91,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 67,
            "end": 89,
            "expression": {
              "type": "AssignmentExpression",
              "start": 67,
              "end": 88,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ConditionalExpression",
                "start": 71,
                "end": 88,
                "test": {
                  "type": "AwaitExpression",
                  "start": 72,
                  "end": 79,
                  "argument": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "consequent": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "alternate": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 93,
      "end": 151,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 120,
        "name": "conditional1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 123,
        "end": 151,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 129,
            "end": 149,
            "expression": {
              "type": "AssignmentExpression",
              "start": 129,
              "end": 148,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 129,
                "end": 130,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ConditionalExpression",
                "start": 133,
                "end": 148,
                "test": {
                  "type": "Identifier",
                  "start": 133,
                  "end": 134,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "consequent": {
                  "type": "AwaitExpression",
                  "start": 137,
                  "end": 144,
                  "argument": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "alternate": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 153,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 180,
        "name": "conditional2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 183,
        "end": 211,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 189,
            "end": 209,
            "expression": {
              "type": "AssignmentExpression",
              "start": 189,
              "end": 208,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 189,
                "end": 190,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ConditionalExpression",
                "start": 193,
                "end": 208,
                "test": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "consequent": {
                  "type": "Identifier",
                  "start": 197,
                  "end": 198,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "alternate": {
                  "type": "AwaitExpression",
                  "start": 201,
                  "end": 208,
                  "argument": {
                    "type": "Identifier",
                    "start": 207,
                    "end": 208,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
