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
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 28,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 29,
          "end": 31,
          "body": []
        },
        "declare": false
      },
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 32,
      "end": 53,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 39,
        "end": 53,
        "id": {
          "type": "Identifier",
          "start": 49,
          "end": 50,
          "decorators": [],
          "name": "I",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 51,
          "end": 53,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 87,
        "end": 108,
        "id": {
          "type": "Identifier",
          "start": 96,
          "end": 99,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
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
        "body": {
          "type": "BlockStatement",
          "start": 106,
          "end": 108,
          "body": []
        },
        "expression": false
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
