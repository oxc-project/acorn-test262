__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 16,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 16,
        "body": []
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 17,
      "end": 39,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 24,
        "end": 39,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 30,
            "end": 38,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 33,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ObjectExpression",
              "start": 36,
              "end": 38,
              "properties": []
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
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 40,
      "end": 59,
      "declaration": {
        "type": "Identifier",
        "start": 55,
        "end": 58,
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
