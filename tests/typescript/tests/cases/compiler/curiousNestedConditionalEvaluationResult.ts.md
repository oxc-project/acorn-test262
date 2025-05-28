__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 30,
  "end": 122,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 30,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 38,
        "decorators": [],
        "name": "Hmm",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 41,
        "end": 122,
        "checkType": {
          "type": "TSTupleType",
          "start": 41,
          "end": 44,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 42,
              "end": 43,
              "literal": {
                "type": "Literal",
                "start": 42,
                "end": 43,
                "value": 0,
                "raw": "0"
              }
            }
          ]
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 53,
          "end": 68,
          "elementTypes": [
            {
              "type": "TSInferType",
              "start": 54,
              "end": 61,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 60,
                "end": 61,
                "name": {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            {
              "type": "TSOptionalType",
              "start": 63,
              "end": 67,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 63,
                "end": 66
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 75,
          "end": 110,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 76,
              "end": 77,
              "typeName": {
                "type": "Identifier",
                "start": 76,
                "end": 77,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSConditionalType",
              "start": 79,
              "end": 109,
              "checkType": {
                "type": "TSTupleType",
                "start": 79,
                "end": 82,
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "start": 80,
                    "end": 81,
                    "literal": {
                      "type": "Literal",
                      "start": 80,
                      "end": 81,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "extendsType": {
                "type": "TSTupleType",
                "start": 91,
                "end": 94,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 92,
                    "end": 93,
                    "typeName": {
                      "type": "Identifier",
                      "start": 92,
                      "end": 93,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              },
              "trueType": {
                "type": "TSLiteralType",
                "start": 97,
                "end": 101,
                "literal": {
                  "type": "Literal",
                  "start": 97,
                  "end": 101,
                  "value": true,
                  "raw": "true"
                }
              },
              "falseType": {
                "type": "TSLiteralType",
                "start": 104,
                "end": 109,
                "literal": {
                  "type": "Literal",
                  "start": 104,
                  "end": 109,
                  "value": false,
                  "raw": "false"
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 117,
          "end": 122
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
