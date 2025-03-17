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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
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
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 64,
        "end": 76,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 70,
            "end": 75,
            "definite": false,
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
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
