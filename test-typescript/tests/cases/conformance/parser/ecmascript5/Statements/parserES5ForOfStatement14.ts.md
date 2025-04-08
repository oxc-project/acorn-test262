__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "ForOfStatement",
      "start": 0,
      "end": 25,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 15,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 15,
            "id": {
              "type": "ArrayPattern",
              "start": 9,
              "end": 15,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 13,
                  "end": 14,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "right": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 25,
        "body": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
