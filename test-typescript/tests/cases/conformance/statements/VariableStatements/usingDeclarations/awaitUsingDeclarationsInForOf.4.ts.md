__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 94,
  "body": [
    {
      "type": "BlockStatement",
      "start": 57,
      "end": 93,
      "body": [
        {
          "type": "ForOfStatement",
          "start": 61,
          "end": 90,
          "await": false,
          "left": {
            "type": "VariableDeclaration",
            "start": 66,
            "end": 80,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 78,
                "end": 80,
                "id": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 80,
                  "name": "of",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "await using",
            "declare": false
          },
          "right": {
            "type": "Identifier",
            "start": 84,
            "end": 86,
            "name": "of",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "body": {
            "type": "BlockStatement",
            "start": 88,
            "end": 90,
            "body": []
          }
        },
        {
          "type": "EmptyStatement",
          "start": 90,
          "end": 91
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
