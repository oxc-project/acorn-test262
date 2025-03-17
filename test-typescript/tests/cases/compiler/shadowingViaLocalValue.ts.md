__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 105,
  "body": [
    {
      "type": "BlockStatement",
      "start": 0,
      "end": 45,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 6,
          "end": 12,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 10,
              "end": 11,
              "id": {
                "type": "Identifier",
                "start": 10,
                "end": 11,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": null,
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "BlockStatement",
          "start": 17,
          "end": 43,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 27,
              "end": 37,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 31,
                  "end": 36,
                  "id": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 35,
                    "end": 36,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            }
          ]
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 47,
      "end": 103,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 53,
          "end": 60,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 57,
              "end": 59,
              "id": {
                "type": "Identifier",
                "start": 57,
                "end": 59,
                "name": "x1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "init": null,
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "BlockStatement",
          "start": 65,
          "end": 101,
          "body": [
            {
              "type": "ForStatement",
              "start": 75,
              "end": 95,
              "init": {
                "type": "VariableDeclaration",
                "start": 80,
                "end": 90,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 84,
                    "end": 90,
                    "id": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 86,
                      "name": "x1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": {
                      "type": "Literal",
                      "start": 89,
                      "end": 90,
                      "value": 0,
                      "raw": "0"
                    },
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              },
              "test": null,
              "update": null,
              "body": {
                "type": "EmptyStatement",
                "start": 94,
                "end": 95
              }
            }
          ]
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
