__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 111,
  "end": 136,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 134,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 134,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 128,
                "end": 134
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 77,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 57,
      "end": 76,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 76,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 70,
            "end": 75,
            "id": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
