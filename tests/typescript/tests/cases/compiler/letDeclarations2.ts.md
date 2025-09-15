__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "l1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 24
                },
                "init": {
                  "type": "Literal",
                  "value": "s",
                  "raw": "\"s\"",
                  "start": 27,
                  "end": 30
                },
                "definite": false,
                "start": 22,
                "end": 30
              }
            ],
            "declare": false,
            "start": 18,
            "end": 31
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "let",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "l2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 47,
                    "end": 49
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 52,
                    "end": 53
                  },
                  "definite": false,
                  "start": 47,
                  "end": 53
                }
              ],
              "declare": false,
              "start": 43,
              "end": 54
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 36,
            "end": 54
          }
        ],
        "start": 12,
        "end": 56
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 56
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 56
}
```
