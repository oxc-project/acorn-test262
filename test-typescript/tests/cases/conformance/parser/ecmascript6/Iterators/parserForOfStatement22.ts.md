parserForOfStatement22.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 36,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "async",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ForOfStatement",
      "start": 11,
      "end": 35,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 35,
        "body": []
      },
      "left": {
        "type": "Identifier",
        "start": 16,
        "end": 21,
        "decorators": [],
        "name": "async",
        "optional": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 25,
        "end": 31,
        "elements": [
          {
            "type": "Literal",
            "start": 26,
            "end": 27,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 29,
            "end": 30,
            "raw": "2",
            "value": 2
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
