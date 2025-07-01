__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 10,
                "end": 11
              },
              "init": null,
              "definite": false,
              "start": 10,
              "end": 11
            }
          ],
          "declare": false,
          "start": 6,
          "end": 12
        },
        {
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
                    "start": 31,
                    "end": 32
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 35,
                    "end": 36
                  },
                  "definite": false,
                  "start": 31,
                  "end": 36
                }
              ],
              "declare": false,
              "start": 27,
              "end": 37
            }
          ],
          "start": 17,
          "end": 43
        }
      ],
      "start": 0,
      "end": 45
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 59
              },
              "init": null,
              "definite": false,
              "start": 57,
              "end": 59
            }
          ],
          "declare": false,
          "start": 53,
          "end": 60
        },
        {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ForStatement",
              "init": {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 86
                    },
                    "init": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 89,
                      "end": 90
                    },
                    "definite": false,
                    "start": 84,
                    "end": 90
                  }
                ],
                "declare": false,
                "start": 80,
                "end": 90
              },
              "test": null,
              "update": null,
              "body": {
                "type": "EmptyStatement",
                "start": 94,
                "end": 95
              },
              "start": 75,
              "end": 95
            }
          ],
          "start": 65,
          "end": 101
        }
      ],
      "start": 47,
      "end": 103
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 104
}
```
