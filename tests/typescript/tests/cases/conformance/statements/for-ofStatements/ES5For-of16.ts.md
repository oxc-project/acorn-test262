__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 9,
              "end": 10
            },
            "init": null,
            "definite": false,
            "start": 9,
            "end": 10
          }
        ],
        "declare": false,
        "start": 5,
        "end": 10
      },
      "right": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 14,
        "end": 16
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "directive": null,
            "start": 24,
            "end": 26
          },
          {
            "type": "ForOfStatement",
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 41
                  },
                  "init": null,
                  "definite": false,
                  "start": 40,
                  "end": 41
                }
              ],
              "declare": false,
              "start": 36,
              "end": 41
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 45,
              "end": 47
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 64
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 67,
                        "end": 68
                      },
                      "definite": false,
                      "start": 63,
                      "end": 68
                    }
                  ],
                  "declare": false,
                  "start": 59,
                  "end": 69
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "UpdateExpression",
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 78,
                      "end": 79
                    },
                    "start": 78,
                    "end": 81
                  },
                  "directive": null,
                  "start": 78,
                  "end": 82
                }
              ],
              "start": 49,
              "end": 88
            },
            "start": 31,
            "end": 88
          }
        ],
        "start": 18,
        "end": 90
      },
      "start": 0,
      "end": 90
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 90
}
```
