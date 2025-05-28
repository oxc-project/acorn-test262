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
        "start": 16,
        "end": 21,
        "decorators": [],
        "name": "async",
        "optional": false,
        "typeAnnotation": null
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
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 29,
            "end": 30,
            "value": 2,
            "raw": "2"
          }
        ]
      },
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 35,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
