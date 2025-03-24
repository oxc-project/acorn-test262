__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "name": "Validation",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 21,
        "end": 65,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 27,
            "end": 63,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 33,
                "end": 62,
                "id": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 46,
                  "name": "lettersRegexp",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 49,
                  "end": 62,
                  "value": null,
                  "raw": "/^[A-Za-z]+$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^[A-Za-z]+$"
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
