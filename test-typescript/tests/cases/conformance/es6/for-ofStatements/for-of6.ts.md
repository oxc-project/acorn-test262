__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 29,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 29,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 21,
            "end": 27,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 25,
                "end": 26,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "left": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 10,
        "end": 13,
        "elements": [
          {
            "type": "Literal",
            "start": 11,
            "end": 12,
            "raw": "0",
            "value": 0,
            "regex": null,
            "bigint": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
