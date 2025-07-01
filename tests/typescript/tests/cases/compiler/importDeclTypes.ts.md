__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 20
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null,
                "start": 27,
                "end": 30
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 32,
                  "end": 38
                },
                "start": 30,
                "end": 38
              },
              "accessibility": null,
              "static": false,
              "start": 27,
              "end": 39
            }
          ],
          "start": 21,
          "end": 41
        },
        "declare": false,
        "start": 7,
        "end": 41
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 41
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 63
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 12
          },
          "importKind": "value",
          "start": 9,
          "end": 12
        }
      ],
      "source": {
        "type": "Literal",
        "value": "@types/foo-bar",
        "raw": "\"@types/foo-bar\"",
        "start": 20,
        "end": 36
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 37
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 37
}
```
