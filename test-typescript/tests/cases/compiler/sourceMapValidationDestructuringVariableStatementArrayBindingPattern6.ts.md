sourceMapValidationDestructuringVariableStatementArrayBindingPattern6.ts
```json
{
  "type": "Program",
  "start": 22,
  "end": 44,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 43,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 26,
            "end": 34,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 27,
                "end": 33,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 31,
                  "end": 33,
                  "raw": "20",
                  "value": 20
                }
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 37,
            "end": 43,
            "elements": [
              {
                "type": "Literal",
                "start": 38,
                "end": 39,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 41,
                "end": 42,
                "raw": "2",
                "value": 2
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
