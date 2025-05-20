__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 54,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 31,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 15,
        "end": 31,
        "body": {
          "type": "TSInterfaceBody",
          "start": 29,
          "end": 31,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 28,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 53,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 39,
        "end": 53,
        "body": {
          "type": "TSInterfaceBody",
          "start": 51,
          "end": 53,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
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
  "start": 80,
  "end": 108,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 80,
      "end": 108,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 87,
        "end": 108,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 106,
          "end": 108,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 96,
          "end": 99,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [
          {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "typeParameters": null
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
