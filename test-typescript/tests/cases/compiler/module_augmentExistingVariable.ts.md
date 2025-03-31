__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 16,
            "name": "console",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 16,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 13,
                "end": 16
              }
            },
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
    {
      "type": "TSModuleDeclaration",
      "start": 19,
      "end": 59,
      "id": {
        "type": "Identifier",
        "start": 26,
        "end": 33,
        "name": "console",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 34,
        "end": 59,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 40,
            "end": 57,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 47,
              "end": 57,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 51,
                  "end": 56,
                  "id": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 55,
                    "end": 56,
                    "value": 2,
                    "raw": "2"
                  },
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
