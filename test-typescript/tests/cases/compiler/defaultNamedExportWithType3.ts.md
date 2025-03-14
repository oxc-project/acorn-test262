__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 16,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 16,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 17,
      "end": 39,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 24,
        "end": 39,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 30,
            "end": 38,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 33,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 36,
              "end": 38,
              "properties": []
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
        "optional": false
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
