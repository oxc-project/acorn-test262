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
      "async": true,
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
            "body": {
              "type": "BlockStatement",
              "start": 116,
              "end": 118,
              "body": []
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 94,
              "end": 108,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 106,
                  "end": 108,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 106,
                    "end": 108,
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
              "start": 112,
              "end": 114,
              "decorators": [],
              "name": "of",
              "optional": false,
              "typeAnnotation": null
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
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
