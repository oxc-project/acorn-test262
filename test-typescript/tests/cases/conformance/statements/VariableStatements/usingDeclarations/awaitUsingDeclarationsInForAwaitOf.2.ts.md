__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 122,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 57,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "name": "test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 79,
        "end": 121,
        "body": [
          {
            "type": "ForOfStatement",
            "start": 83,
            "end": 118,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 94,
              "end": 108,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 106,
                  "end": 108,
                  "id": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 108,
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
              "start": 112,
              "end": 114,
              "name": "of",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 116,
              "end": 118,
              "body": []
            }
          },
          {
            "type": "EmptyStatement",
            "start": 118,
            "end": 119
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
