module.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 42,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 28,
        "raw": "\"./index\"",
        "value": "./index"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 7,
          "end": 13,
          "local": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "i",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 30,
      "end": 42,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 40,
        "end": 42,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 39,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "module"
}
```
index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 26,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 15,
        "end": 25,
        "raw": "\"./module\"",
        "value": "./module"
      },
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 27,
      "end": 65,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 34,
        "end": 65,
        "body": {
          "type": "TSInterfaceBody",
          "start": 48,
          "end": 65,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 54,
              "end": 63,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 55,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 55,
                "end": 63,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 57,
                  "end": 63
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 44,
          "end": 47,
          "decorators": [],
          "name": "Bar",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
