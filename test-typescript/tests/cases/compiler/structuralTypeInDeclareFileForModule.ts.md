__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 37,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 26,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 11,
            "end": 24,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 18,
              "end": 24,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 22,
                  "end": 23,
                  "id": {
                    "type": "Identifier",
                    "start": 22,
                    "end": 23,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 37,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 36,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 32,
            "name": "m",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 35,
            "end": 36,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
