__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 104,
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
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 10,
                "end": 11,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "let"
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
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 31,
                    "end": 32,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 35,
                    "end": 36,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
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
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 57,
                "end": 59,
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null
              },
              "init": null
            }
          ],
          "declare": false,
          "kind": "let"
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
              "body": {
                "type": "EmptyStatement",
                "start": 94,
                "end": 95
              },
              "init": {
                "type": "VariableDeclaration",
                "start": 80,
                "end": 90,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 84,
                    "end": 90,
                    "definite": false,
                    "id": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 86,
                      "decorators": [],
                      "name": "x1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "init": {
                      "type": "Literal",
                      "start": 89,
                      "end": 90,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    }
                  }
                ],
                "declare": false,
                "kind": "var"
              },
              "test": null,
              "update": null
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
