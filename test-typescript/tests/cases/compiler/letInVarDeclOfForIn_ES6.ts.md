letInVarDeclOfForIn_ES6.ts
```json
{
  "type": "Program",
  "start": 26,
  "end": 88,
  "body": [
    {
      "type": "ForInStatement",
      "start": 26,
      "end": 53,
      "body": {
        "type": "BlockStatement",
        "start": 51,
        "end": 53,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 31,
        "end": 38,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 35,
            "end": 38,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 35,
              "end": 38,
              "decorators": [],
              "name": "let",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "ArrayExpression",
        "start": 42,
        "end": 49,
        "elements": [
          {
            "type": "Literal",
            "start": 43,
            "end": 44,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 45,
            "end": 46,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 47,
            "end": 48,
            "raw": "3",
            "value": 3
          }
        ]
      }
    },
    {
      "type": "BlockStatement",
      "start": 55,
      "end": 87,
      "body": [
        {
          "type": "ForInStatement",
          "start": 58,
          "end": 85,
          "body": {
            "type": "BlockStatement",
            "start": 83,
            "end": 85,
            "body": []
          },
          "left": {
            "type": "VariableDeclaration",
            "start": 63,
            "end": 70,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 67,
                "end": 70,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 70,
                  "decorators": [],
                  "name": "let",
                  "optional": false
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          "right": {
            "type": "ArrayExpression",
            "start": 74,
            "end": 81,
            "elements": [
              {
                "type": "Literal",
                "start": 75,
                "end": 76,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 77,
                "end": 78,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 79,
                "end": 80,
                "raw": "3",
                "value": 3
              }
            ]
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
