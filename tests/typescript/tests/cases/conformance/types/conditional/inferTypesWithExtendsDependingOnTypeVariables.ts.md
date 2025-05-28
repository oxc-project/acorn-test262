__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 226,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 68,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 76,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 109,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 78,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 108,
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 90,
              "end": 108,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 99,
                "end": 108,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 99,
                  "end": 106
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 112,
        "end": 181,
        "checkType": {
          "type": "TSTypeReference",
          "start": 112,
          "end": 113,
          "typeName": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "start": 122,
          "end": 169,
          "operator": "readonly",
          "typeAnnotation": {
            "type": "TSTupleType",
            "start": 131,
            "end": 169,
            "elementTypes": [
              {
                "type": "TSAnyKeyword",
                "start": 132,
                "end": 135
              },
              {
                "type": "TSRestType",
                "start": 137,
                "end": 168,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 140,
                  "end": 168,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 146,
                    "end": 168,
                    "name": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 156,
                      "end": 168,
                      "operator": "readonly",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "start": 165,
                        "end": 168,
                        "elementType": {
                          "type": "TSTypeReference",
                          "start": 165,
                          "end": 166,
                          "typeName": {
                            "type": "Identifier",
                            "start": 165,
                            "end": 166,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 172,
          "end": 173,
          "typeName": {
            "type": "Identifier",
            "start": 172,
            "end": 173,
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 176,
          "end": 181
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 183,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 192,
        "decorators": [],
        "name": "Res1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 195,
        "end": 226,
        "typeName": {
          "type": "Identifier",
          "start": 195,
          "end": 198,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 198,
          "end": 226,
          "params": [
            {
              "type": "TSUnionType",
              "start": 199,
              "end": 208,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 199,
                  "end": 202,
                  "literal": {
                    "type": "Literal",
                    "start": 199,
                    "end": 202,
                    "value": "a",
                    "raw": "\"a\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 205,
                  "end": 208,
                  "literal": {
                    "type": "Literal",
                    "start": 205,
                    "end": 208,
                    "value": "b",
                    "raw": "\"b\""
                  }
                }
              ]
            },
            {
              "type": "TSTupleType",
              "start": 210,
              "end": 225,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 211,
                  "end": 214,
                  "literal": {
                    "type": "Literal",
                    "start": 211,
                    "end": 214,
                    "value": "a",
                    "raw": "\"a\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 216,
                  "end": 219,
                  "literal": {
                    "type": "Literal",
                    "start": 216,
                    "end": 219,
                    "value": "b",
                    "raw": "\"b\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 221,
                  "end": 224,
                  "literal": {
                    "type": "Literal",
                    "start": 221,
                    "end": 224,
                    "value": "b",
                    "raw": "\"b\""
                  }
                }
              ]
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
