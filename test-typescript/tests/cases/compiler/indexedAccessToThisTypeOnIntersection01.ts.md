__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 86,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 47,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 47,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 16,
            "end": 26,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 19,
                "end": 25
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 29,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 33,
              "decorators": [],
              "name": "getA",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 33,
              "end": 44,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 35,
                "end": 44,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 40,
                  "end": 43,
                  "literal": {
                    "type": "Literal",
                    "start": 40,
                    "end": 43,
                    "raw": "'a'",
                    "value": "a",
                    "regex": null,
                    "bigint": null
                  }
                },
                "objectType": {
                  "type": "TSThisType",
                  "start": 35,
                  "end": 39
                }
              }
            }
          }
        ]
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
      "start": 49,
      "end": 86,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "T",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 58,
        "end": 85,
        "indexType": {
          "type": "TSLiteralType",
          "start": 78,
          "end": 84,
          "literal": {
            "type": "Literal",
            "start": 78,
            "end": 84,
            "raw": "'getA'",
            "value": "getA",
            "regex": null,
            "bigint": null
          }
        },
        "objectType": {
          "type": "TSIntersectionType",
          "start": 59,
          "end": 76,
          "types": [
            {
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
            },
            {
              "type": "TSTypeLiteral",
              "start": 63,
              "end": 76,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 65,
                  "end": 74,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 66,
                    "end": 74,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 68,
                      "end": 74
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
