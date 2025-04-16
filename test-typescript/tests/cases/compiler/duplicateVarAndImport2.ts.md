__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 38,
  "end": 89,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 38,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "name": "a",
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
    {
      "type": "TSModuleDeclaration",
      "start": 45,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 53,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 54,
        "end": 75,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 56,
            "end": 73,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 63,
              "end": 73,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 67,
                  "end": 72,
                  "id": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 71,
                    "end": 72,
                    "value": 1,
                    "raw": "1"
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
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 76,
      "end": 89,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 87,
        "end": 88,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "importKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
