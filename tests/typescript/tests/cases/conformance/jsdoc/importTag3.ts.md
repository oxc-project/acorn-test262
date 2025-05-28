__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 48,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 47,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 15,
        "end": 47,
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
          "end": 47,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 35,
              "end": 45,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 35,
                "end": 36,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 36,
                "end": 44,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 38,
                  "end": 44
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "exportKind": "value"
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
  "start": 69,
  "end": 94,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 69,
      "end": 94,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 76,
        "end": 94,
        "id": {
          "type": "Identifier",
          "start": 85,
          "end": 86,
          "decorators": [],
          "name": "f",
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
            "start": 87,
            "end": 90,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 92,
          "end": 94,
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
