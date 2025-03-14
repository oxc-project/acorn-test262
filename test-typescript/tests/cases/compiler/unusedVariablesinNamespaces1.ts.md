unusedVariablesinNamespaces1.ts
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 46,
                  "decorators": [],
                  "name": "lettersRegexp",
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 49,
                  "end": 62,
                  "raw": "/^[A-Za-z]+$/",
                  "regex": {
                    "flags": "",
                    "pattern": "^[A-Za-z]+$"
                  },
                  "value": {}
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 20,
        "decorators": [],
        "name": "Validation",
        "optional": false
      },
      "kind": "namespace"
    }
  ],
  "sourceType": "script"
}
```
