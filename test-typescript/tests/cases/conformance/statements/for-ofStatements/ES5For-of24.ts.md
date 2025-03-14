ES5For-of24.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 8,
            "end": 17,
            "elements": [
              {
                "type": "Literal",
                "start": 9,
                "end": 10,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 12,
                "end": 13,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 15,
                "end": 16,
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
      "type": "ForOfStatement",
      "start": 19,
      "end": 54,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 54,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 42,
            "end": 52,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 46,
                "end": 51,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 50,
                  "end": 51,
                  "raw": "0",
                  "value": 0
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 24,
        "end": 29,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 28,
            "end": 29,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
