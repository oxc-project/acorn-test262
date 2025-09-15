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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 42,
            "end": 43
          },
          "init": null,
          "definite": false,
          "start": 42,
          "end": 43
        }
      ],
      "declare": false,
      "start": 38,
      "end": 44
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 55,
        "end": 56
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
                    "start": 70,
                    "end": 71
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 74,
                    "end": 75
                  },
                  "definite": false,
                  "start": 70,
                  "end": 75
                }
              ],
              "declare": false,
              "start": 66,
              "end": 76
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 59,
            "end": 76
          }
        ],
        "start": 57,
        "end": 78
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 45,
      "end": 78
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 87
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 91
      },
      "importKind": "value",
      "start": 79,
      "end": 92
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 38,
  "end": 92
}
```
