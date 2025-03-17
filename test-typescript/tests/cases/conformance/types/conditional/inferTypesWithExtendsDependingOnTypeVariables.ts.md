__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 68,
  "end": 227,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 68,
      "end": 182,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 76,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 112,
        "end": 181,
        "checkType": {
          "type": "TSTypeReference",
          "start": 112,
          "end": 113,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 112,
            "end": 113,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
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
                    "const": false,
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 165,
                            "end": 166,
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 146,
                      "end": 147,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              }
            ]
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 176,
          "end": 181
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 172,
          "end": 173,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 172,
            "end": 173,
            "decorators": [],
            "name": "X",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 80,
            "end": 108,
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 183,
      "end": 226,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 192,
        "decorators": [],
        "name": "Res1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 195,
        "end": 226,
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
                    "raw": "\"a\"",
                    "value": "a"
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
                    "raw": "\"b\"",
                    "value": "b"
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
                    "raw": "\"a\"",
                    "value": "a"
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
                    "raw": "\"b\"",
                    "value": "b"
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
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 195,
          "end": 198,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
