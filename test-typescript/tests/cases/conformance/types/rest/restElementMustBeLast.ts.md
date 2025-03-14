restElementMustBeLast.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 128,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 26,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 25,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 4,
            "end": 13,
            "decorators": [],
            "elements": [
              {
                "type": "RestElement",
                "start": 5,
                "end": 9,
                "argument": {
                  "type": "Identifier",
                  "start": 8,
                  "end": 9,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 11,
                "end": 12,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 16,
            "end": 25,
            "elements": [
              {
                "type": "Literal",
                "start": 17,
                "end": 18,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 20,
                "end": 21,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 23,
                "end": 24,
                "raw": "3",
                "value": 3
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 64,
      "end": 86,
      "expression": {
        "type": "AssignmentExpression",
        "start": 64,
        "end": 85,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 64,
          "end": 73,
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 65,
              "end": 69,
              "argument": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          ],
          "optional": false
        },
        "right": {
          "type": "ArrayExpression",
          "start": 76,
          "end": 85,
          "elements": [
            {
              "type": "Literal",
              "start": 77,
              "end": 78,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 80,
              "end": 81,
              "raw": "2",
              "value": 2
            },
            {
              "type": "Literal",
              "start": 83,
              "end": 84,
              "raw": "3",
              "value": 3
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
