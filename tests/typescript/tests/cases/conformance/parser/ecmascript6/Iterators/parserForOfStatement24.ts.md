__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 35,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "async",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ForOfStatement",
      "start": 11,
      "end": 35,
      "await": false,
      "left": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "async",
        "optional": false,
        "typeAnnotation": null
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
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 31,
            "end": 32,
            "value": 2,
            "raw": "2"
          }
        ]
      },
      "body": {
        "type": "EmptyStatement",
        "start": 34,
        "end": 35
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
