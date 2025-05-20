__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 79,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 79,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 79,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 24,
            "end": 26,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "v",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ForOfStatement",
            "start": 31,
            "end": 77,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 51,
              "end": 77,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 61,
                  "end": 71,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 65,
                      "end": 70,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 65,
                        "end": 66,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 70,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 36,
              "end": 43,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 42,
                  "end": 43,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "ArrayExpression",
              "start": 47,
              "end": 49,
              "elements": []
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
              "optional": false,
              "typeAnnotation": null
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
