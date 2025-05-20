__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 71,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 20,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 15,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSLiteralType",
          "start": 18,
          "end": 19,
          "literal": {
            "type": "Literal",
            "start": 18,
            "end": 19,
            "raw": "5",
            "value": 5
          }
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 50,
      "end": 71,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 57,
        "end": 71,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 63,
            "end": 70,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 66,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "Literal",
              "start": 69,
              "end": 70,
              "raw": "5",
              "value": 5
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
