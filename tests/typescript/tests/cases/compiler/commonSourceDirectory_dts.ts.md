__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 128,
                "end": 134
              },
              "start": 126,
              "end": 134
            },
            "start": 125,
            "end": 134
          },
          "init": null,
          "definite": false,
          "start": 125,
          "end": 134
        }
      ],
      "declare": true,
      "start": 111,
      "end": 135
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 111,
  "end": 136
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
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
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 74,
              "end": 75
            },
            "definite": false,
            "start": 70,
            "end": 75
          }
        ],
        "declare": false,
        "start": 64,
        "end": 76
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 57,
      "end": 76
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 57,
  "end": 77
}
```
