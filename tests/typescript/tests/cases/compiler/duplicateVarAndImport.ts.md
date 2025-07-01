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
            "start": 50,
            "end": 51
          },
          "init": null,
          "definite": false,
          "start": 50,
          "end": 51
        }
      ],
      "declare": false,
      "start": 46,
      "end": 52
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 61
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [],
        "start": 62,
        "end": 65
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 53,
      "end": 65
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 74
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 78
      },
      "importKind": "value",
      "start": 66,
      "end": 79
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 46,
  "end": 79
}
```
