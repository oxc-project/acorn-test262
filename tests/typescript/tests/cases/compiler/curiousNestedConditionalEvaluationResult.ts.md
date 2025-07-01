__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Hmm",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 38
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 42,
                "end": 43
              },
              "start": 42,
              "end": 43
            }
          ],
          "start": 41,
          "end": 44
        },
        "extendsType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSInferType",
              "typeParameter": {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 61
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 60,
                "end": 61
              },
              "start": 54,
              "end": 61
            },
            {
              "type": "TSOptionalType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 63,
                "end": 66
              },
              "start": 63,
              "end": 67
            }
          ],
          "start": 53,
          "end": 68
        },
        "trueType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 76,
                "end": 77
              },
              "typeArguments": null,
              "start": 76,
              "end": 77
            },
            {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 80,
                      "end": 81
                    },
                    "start": 80,
                    "end": 81
                  }
                ],
                "start": 79,
                "end": 82
              },
              "extendsType": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 92,
                      "end": 93
                    },
                    "typeArguments": null,
                    "start": 92,
                    "end": 93
                  }
                ],
                "start": 91,
                "end": 94
              },
              "trueType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 97,
                  "end": 101
                },
                "start": 97,
                "end": 101
              },
              "falseType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 104,
                  "end": 109
                },
                "start": 104,
                "end": 109
              },
              "start": 79,
              "end": 109
            }
          ],
          "start": 75,
          "end": 110
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 117,
          "end": 122
        },
        "start": 41,
        "end": 122
      },
      "declare": false,
      "start": 30,
      "end": 122
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 30,
  "end": 122
}
```
