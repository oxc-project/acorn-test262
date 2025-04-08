__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 41,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 41,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 20,
          "name": "Bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 21,
          "end": 41,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 27,
              "end": 39,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 27,
                "end": 31,
                "name": "prop",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 31,
                "end": 39,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 33,
                  "end": 39
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
