__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 21,
                "end": 24
              },
              "start": 19,
              "end": 24
            },
            "start": 12,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 24
        }
      ],
      "declare": true,
      "start": 0,
      "end": 25
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "console",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 44
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
                    "start": 62,
                    "end": 63
                  },
                  "init": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 66,
                    "end": 67
                  },
                  "definite": false,
                  "start": 62,
                  "end": 67
                }
              ],
              "declare": false,
              "start": 58,
              "end": 68
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 51,
            "end": 68
          }
        ],
        "start": 45,
        "end": 70
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 27,
      "end": 70
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 70
}
```
