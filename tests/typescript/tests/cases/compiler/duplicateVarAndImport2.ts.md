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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 42,
          "end": 43,
          "id": {
            "type": "Identifier",
            "start": 42,
            "end": 43,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 67,
                  "end": 72,
                  "id": {
                    "type": "Identifier",
                    "start": 67,
                    "end": 68,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
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
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 87,
        "end": 88,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
