constDeclarations-useBeforeDefinition.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 69,
  "body": [
    {
      "type": "BlockStatement",
      "start": 0,
      "end": 29,
      "body": [
        {
          "type": "ExpressionStatement",
          "start": 6,
          "end": 9,
          "expression": {
            "type": "Identifier",
            "start": 6,
            "end": 8,
            "decorators": [],
            "name": "c1",
            "optional": false
          }
        },
        {
          "type": "VariableDeclaration",
          "start": 14,
          "end": 27,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 20,
              "end": 26,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 20,
                "end": 22,
                "decorators": [],
                "name": "c1",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 25,
                "end": 26,
                "raw": "0",
                "value": 0
              }
            }
          ],
          "declare": false,
          "kind": "const"
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 37,
            "decorators": [],
            "name": "v1",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "BlockStatement",
      "start": 39,
      "end": 68,
      "body": [
        {
          "type": "ExpressionStatement",
          "start": 45,
          "end": 48,
          "expression": {
            "type": "Identifier",
            "start": 45,
            "end": 47,
            "decorators": [],
            "name": "v1",
            "optional": false
          }
        },
        {
          "type": "VariableDeclaration",
          "start": 53,
          "end": 66,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 59,
              "end": 65,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 59,
                "end": 61,
                "decorators": [],
                "name": "v1",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 64,
                "end": 65,
                "raw": "0",
                "value": 0
              }
            }
          ],
          "declare": false,
          "kind": "const"
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
