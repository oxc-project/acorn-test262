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
        "end": 79,
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
            "end": 77,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 36,
              "end": 43,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 42,
                  "end": 43,
                  "id": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 43,
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
              "start": 47,
              "end": 49,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 51,
              "end": 77,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 61,
                  "end": 71,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 65,
                      "end": 70,
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
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
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
