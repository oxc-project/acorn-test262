__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 46,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 46,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 19,
        "end": 46,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 25,
            "end": 44,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 37,
                "end": 43,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 38,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 41,
                  "end": 43,
                  "properties": []
                }
              }
            ],
            "declare": false,
            "kind": "await using"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 16,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
