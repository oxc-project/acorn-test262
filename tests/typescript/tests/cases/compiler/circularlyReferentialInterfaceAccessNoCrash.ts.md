__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 33,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Mxs",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 11,
        "end": 32,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 13,
          "end": 32,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 14,
              "end": 20,
              "literal": {
                "type": "Literal",
                "start": 14,
                "end": 20,
                "raw": "'list'",
                "value": "list"
              }
            },
            {
              "type": "TSIndexedAccessType",
              "start": 22,
              "end": 31,
              "indexType": {
                "type": "TSLiteralType",
                "start": 26,
                "end": 30,
                "literal": {
                  "type": "Literal",
                  "start": 26,
                  "end": 30,
                  "raw": "'p1'",
                  "value": "p1"
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 22,
                "end": 25,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 25,
                  "decorators": [],
                  "name": "Mxs",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 11,
          "end": 13,
          "decorators": [],
          "name": "Mx",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 35,
      "end": 75,
      "body": {
        "type": "TSInterfaceBody",
        "start": 54,
        "end": 75,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 64,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 60,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 63,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 63,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 67,
            "end": 73,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 69,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 71,
                "end": 72,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 45,
        "end": 47,
        "decorators": [],
        "name": "Mx",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 47,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 48,
            "end": 49,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 51,
            "end": 52,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "K",
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
      "start": 77,
      "end": 123,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 89,
        "decorators": [],
        "name": "ArrElem",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSArrayType",
        "start": 92,
        "end": 122,
        "elementType": {
          "type": "TSTupleType",
          "start": 92,
          "end": 120,
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "start": 93,
              "end": 99,
              "literal": {
                "type": "Literal",
                "start": 93,
                "end": 99,
                "raw": "'list'",
                "value": "list"
              }
            },
            {
              "type": "TSIndexedAccessType",
              "start": 101,
              "end": 119,
              "indexType": {
                "type": "TSLiteralType",
                "start": 117,
                "end": 118,
                "literal": {
                  "type": "Literal",
                  "start": 117,
                  "end": 118,
                  "raw": "0",
                  "value": 0
                }
              },
              "objectType": {
                "type": "TSIndexedAccessType",
                "start": 101,
                "end": 116,
                "indexType": {
                  "type": "TSNumberKeyword",
                  "start": 109,
                  "end": 115
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 101,
                  "end": 108,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 108,
                    "decorators": [],
                    "name": "ArrElem",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 125,
      "end": 170,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 139,
        "decorators": [],
        "name": "TupleElem",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 142,
        "end": 169,
        "elementTypes": [
          {
            "type": "TSTupleType",
            "start": 143,
            "end": 168,
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "start": 144,
                "end": 150,
                "literal": {
                  "type": "Literal",
                  "start": 144,
                  "end": 150,
                  "raw": "'list'",
                  "value": "list"
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 152,
                "end": 167,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 165,
                  "end": 166,
                  "literal": {
                    "type": "Literal",
                    "start": 165,
                    "end": 166,
                    "raw": "0",
                    "value": 0
                  }
                },
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 152,
                  "end": 164,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 162,
                    "end": 163,
                    "literal": {
                      "type": "Literal",
                      "start": 162,
                      "end": 163,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 152,
                    "end": 161,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 161,
                      "decorators": [],
                      "name": "TupleElem",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
