__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 90,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 14,
        "end": 16,
        "elements": []
      },
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 90,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 24,
            "end": 26,
            "expression": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ForOfStatement",
            "start": 31,
            "end": 88,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 36,
              "end": 41,
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 40,
                  "end": 41,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 45,
              "end": 47,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 49,
              "end": 88,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 59,
                  "end": 69,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 63,
                      "end": 68,
                      "id": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 64,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 68,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 78,
                  "end": 82,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 78,
                    "end": 81,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 78,
                      "end": 79,
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
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
