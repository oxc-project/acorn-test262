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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 134,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 134,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 128,
                "end": 134
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 70,
            "end": 75,
            "id": {
              "type": "Identifier",
              "start": 70,
              "end": 71,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Identifier",
              "start": 74,
              "end": 75,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
