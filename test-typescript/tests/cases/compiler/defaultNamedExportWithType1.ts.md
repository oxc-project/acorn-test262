__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 61,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 18,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 40,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 26,
        "end": 40,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 32,
            "end": 39,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 35,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "Literal",
              "start": 38,
              "end": 39,
              "value": 1,
              "raw": "1"
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
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 41,
      "end": 60,
      "declaration": {
        "type": "Identifier",
        "start": 56,
        "end": 59,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
