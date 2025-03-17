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
          "body": {
            "type": "BlockStatement",
            "start": 88,
            "end": 90,
            "body": []
          },
          "left": {
            "type": "VariableDeclaration",
            "start": 66,
            "end": 80,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 78,
                "end": 80,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 80,
                  "decorators": [],
                  "name": "of",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "await using"
          },
          "right": {
            "type": "Identifier",
            "start": 84,
            "end": 86,
            "decorators": [],
            "name": "of",
            "optional": false,
            "typeAnnotation": null
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
