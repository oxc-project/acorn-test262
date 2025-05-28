__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 91,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 91,
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
        "end": 91,
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
            "end": 89,
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
              "end": 48,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "body": {
              "type": "BlockStatement",
              "start": 50,
              "end": 89,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 60,
                  "end": 70,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 64,
                      "end": 69,
                      "id": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 65,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 69,
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
                  "start": 79,
                  "end": 83,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 79,
                    "end": 82,
                    "operator": "++",
                    "prefix": false,
                    "argument": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 80,
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
