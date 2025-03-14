letInLetDeclarations_ES5.ts
```json
{
  "type": "Program",
  "start": 58,
  "end": 109,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 58,
      "end": 78,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 68,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 66,
            "end": 68,
            "raw": "50",
            "value": 50
          }
        },
        {
          "type": "VariableDeclarator",
          "start": 70,
          "end": 77,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 70,
            "end": 73,
            "decorators": [],
            "name": "let",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 76,
            "end": 77,
            "raw": "5",
            "value": 5
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "BlockStatement",
      "start": 80,
      "end": 109,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 86,
          "end": 107,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 90,
              "end": 96,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 94,
                "end": 96,
                "raw": "10",
                "value": 10
              }
            },
            {
              "type": "VariableDeclarator",
              "start": 98,
              "end": 106,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 98,
                "end": 101,
                "decorators": [],
                "name": "let",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 104,
                "end": 106,
                "raw": "20",
                "value": 20
              }
            }
          ],
          "declare": false,
          "kind": "let"
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
