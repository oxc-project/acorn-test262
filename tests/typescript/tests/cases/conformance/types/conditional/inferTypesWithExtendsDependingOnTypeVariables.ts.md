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
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 76
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 77,
              "end": 78
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 77,
            "end": 78
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 99,
                  "end": 106
                },
                "start": 99,
                "end": 108
              },
              "start": 90,
              "end": 108
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 80,
            "end": 108
          }
        ],
        "start": 76,
        "end": 109
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 112,
            "end": 113
          },
          "typeArguments": null,
          "start": 112,
          "end": 113
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSAnyKeyword",
                "start": 132,
                "end": 135
              },
              {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSInferType",
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 146,
                      "end": 147
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 165,
                            "end": 166
                          },
                          "typeArguments": null,
                          "start": 165,
                          "end": 166
                        },
                        "start": 165,
                        "end": 168
                      },
                      "start": 156,
                      "end": 168
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 146,
                    "end": 168
                  },
                  "start": 140,
                  "end": 168
                },
                "start": 137,
                "end": 168
              }
            ],
            "start": 131,
            "end": 169
          },
          "start": 122,
          "end": 169
        },
        "trueType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null,
            "start": 172,
            "end": 173
          },
          "typeArguments": null,
          "start": 172,
          "end": 173
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 176,
          "end": 181
        },
        "start": 112,
        "end": 181
      },
      "declare": false,
      "start": 68,
      "end": 182
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Res1",
        "optional": false,
        "typeAnnotation": null,
        "start": 188,
        "end": 192
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 195,
          "end": 198
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 199,
                    "end": 202
                  },
                  "start": 199,
                  "end": 202
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 205,
                    "end": 208
                  },
                  "start": 205,
                  "end": 208
                }
              ],
              "start": 199,
              "end": 208
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 211,
                    "end": 214
                  },
                  "start": 211,
                  "end": 214
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 216,
                    "end": 219
                  },
                  "start": 216,
                  "end": 219
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 221,
                    "end": 224
                  },
                  "start": 221,
                  "end": 224
                }
              ],
              "start": 210,
              "end": 225
            }
          ],
          "start": 198,
          "end": 226
        },
        "start": 195,
        "end": 226
      },
      "declare": false,
      "start": 183,
      "end": 226
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 68,
  "end": 226
}
```
