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
      "body": {
        "type": "BlockStatement",
        "start": 22,
        "end": 25,
        "body": []
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 5,
        "end": 15,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 9,
            "end": 15,
            "definite": false,
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
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "right": {
        "type": "Identifier",
        "start": 19,
        "end": 20,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
