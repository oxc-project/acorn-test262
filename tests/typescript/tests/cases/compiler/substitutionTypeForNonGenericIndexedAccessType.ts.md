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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 14,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 16,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 22,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 25,
        "end": 76,
        "checkType": {
          "type": "TSTypeReference",
          "start": 25,
          "end": 26,
          "typeName": {
            "type": "Identifier",
            "start": 25,
            "end": 26,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 35,
          "end": 56,
          "typeName": {
            "type": "Identifier",
            "start": 35,
            "end": 41,
            "decorators": [],
            "name": "Record",
            "optional": false,
            "typeAnnotation": null
          },
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
                  "value": "foo",
                  "raw": "'foo'"
                }
              },
              {
                "type": "TSStringKeyword",
                "start": 49,
                "end": 55
              }
            ]
          }
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "start": 59,
          "end": 67,
          "objectType": {
            "type": "TSTypeReference",
            "start": 59,
            "end": 60,
            "typeName": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSLiteralType",
            "start": 61,
            "end": 66,
            "literal": {
              "type": "Literal",
              "start": 61,
              "end": 66,
              "value": "foo",
              "raw": "'foo'"
            }
          }
        },
        "falseType": {
          "type": "TSStringKeyword",
          "start": 70,
          "end": 76
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
