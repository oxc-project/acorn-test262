__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 89,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 14,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 14,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 16,
      "end": 77,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 25,
        "end": 76,
        "checkType": {
          "type": "TSTypeReference",
          "start": 25,
          "end": 26,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 35,
          "end": 56,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 41,
            "end": 56,
            "params": [
              {
                "type": "TSLiteralType",
                "start": 42,
                "end": 47,
                "literal": {
                  "type": "Literal",
                  "start": 42,
                  "end": 47,
                  "raw": "'foo'",
                  "value": "foo"
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 49,
                "end": 55
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 35,
            "end": 41,
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "falseType": {
          "type": "TSStringKeyword",
          "start": 70,
          "end": 76
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "start": 59,
          "end": 67,
          "indexType": {
            "type": "TSLiteralType",
            "start": 61,
            "end": 66,
            "literal": {
              "type": "Literal",
              "start": 61,
              "end": 66,
              "raw": "'foo'",
              "value": "foo"
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 59,
            "end": 60,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
