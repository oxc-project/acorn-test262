__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 40,
  "body": [
    {
      "type": "ForInStatement",
      "start": 0,
      "end": 40,
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 10,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 14,
        "end": 23,
        "decorators": [],
        "name": "something",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 25,
        "end": 40,
        "body": [
          {
            "type": "ContinueStatement",
            "start": 29,
            "end": 38,
            "label": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
