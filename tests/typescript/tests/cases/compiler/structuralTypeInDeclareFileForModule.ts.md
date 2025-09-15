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
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 25,
                    "end": 26
                  },
                  "init": null,
                  "definite": false,
                  "start": 25,
                  "end": 26
                }
              ],
              "declare": false,
              "start": 21,
              "end": 27
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 14,
            "end": 27
          }
        ],
        "start": 12,
        "end": 29
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 34,
            "end": 35
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 38,
            "end": 39
          },
          "definite": false,
          "start": 34,
          "end": 39
        }
      ],
      "declare": false,
      "start": 30,
      "end": 40
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 40
}
```
