__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 53,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSNumberKeyword",
        "start": 11,
        "end": 17
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 33,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 25,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 25,
            "end": 28,
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 31,
            "end": 32,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 34,
      "end": 53,
      "declaration": {
        "type": "Identifier",
        "start": 49,
        "end": 52,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
