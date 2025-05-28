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
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 15,
            "id": {
              "type": "ArrayPattern",
              "start": 9,
              "end": 15,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 10,
                  "end": 11,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 13,
                  "end": 14,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
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
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
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
