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
              "optional": false
            }
          },
          {
            "type": "ForOfStatement",
            "start": 31,
            "end": 89,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 50,
              "end": 89,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 60,
                  "end": 70,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 64,
                      "end": 69,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 64,
                        "end": 65,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 69,
                        "decorators": [],
                        "name": "v",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 79,
                  "end": 83,
                  "expression": {
                    "type": "UpdateExpression",
                    "start": 79,
                    "end": 82,
                    "argument": {
                      "type": "Identifier",
                      "start": 79,
                      "end": 80,
                      "decorators": [],
                      "name": "v",
                      "optional": false
                    },
                    "operator": "++",
                    "prefix": false
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 36,
              "end": 41,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 40,
                  "end": 41,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 40,
                    "end": 41,
                    "decorators": [],
                    "name": "v",
                    "optional": false
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "let"
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
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 14,
        "end": 16,
        "elements": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
