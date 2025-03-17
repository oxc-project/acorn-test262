__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 45,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 16,
      "end": 45,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 45,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 37,
            "end": 43,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 41,
                "end": 42,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
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
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "v",
        "optional": false,
        "typeAnnotation": null
      },
      "right": {
        "type": "ArrayExpression",
        "start": 26,
        "end": 29,
        "elements": [
          {
            "type": "Literal",
            "start": 27,
            "end": 28,
            "raw": "0",
            "value": 0
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
