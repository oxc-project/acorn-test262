__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 15
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSLiteralType",
          "literal": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 18,
            "end": 19
          },
          "start": 18,
          "end": 19
        },
        "declare": false,
        "start": 7,
        "end": 20
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 20
    },
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 63,
              "end": 66
            },
            "init": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 69,
              "end": 70
            },
            "definite": false,
            "start": 63,
            "end": 70
          }
        ],
        "declare": false,
        "start": 57,
        "end": 71
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 50,
      "end": 71
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 71
}
```
