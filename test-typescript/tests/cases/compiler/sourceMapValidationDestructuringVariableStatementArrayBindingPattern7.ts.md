__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 47,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 47,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 46,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 26,
            "end": 37,
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
              },
              {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "decorators": [],
                "name": "j",
                "optional": false
              }
            ],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 40,
            "end": 46,
            "elements": [
              {
                "type": "Literal",
                "start": 41,
                "end": 42,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 44,
                "end": 45,
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
  "sourceType": "script",
  "hashbang": null
}
```
