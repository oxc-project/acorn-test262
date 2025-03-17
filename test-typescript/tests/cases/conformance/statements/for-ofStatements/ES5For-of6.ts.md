__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 75,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 75,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "w",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "var",
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
        "end": 75,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 24,
            "end": 73,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 29,
              "end": 34,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 33,
                  "end": 34,
                  "id": {
                    "type": "Identifier",
                    "start": 33,
                    "end": 34,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "right": {
              "type": "ArrayExpression",
              "start": 38,
              "end": 40,
              "elements": []
            },
            "body": {
              "type": "BlockStatement",
              "start": 42,
              "end": 73,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 52,
                  "end": 67,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 56,
                      "end": 66,
                      "id": {
                        "type": "Identifier",
                        "start": 56,
                        "end": 57,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "ArrayExpression",
                        "start": 60,
                        "end": 66,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 61,
                            "end": 62,
                            "name": "w",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 64,
                            "end": 65,
                            "name": "v",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ]
                      },
                      "definite": false
                    }
                  ],
                  "kind": "var",
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
