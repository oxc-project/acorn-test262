__ESTREE_TEST__:PASS:
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
        "type": "EmptyStatement",
        "start": 34,
        "end": 35
      },
      "left": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "async",
        "optional": false
      },
      "right": {
        "type": "ArrayExpression",
        "start": 27,
        "end": 33,
        "elements": [
          {
            "type": "Literal",
            "start": 28,
            "end": 29,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 31,
            "end": 32,
            "raw": "2",
            "value": 2
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
