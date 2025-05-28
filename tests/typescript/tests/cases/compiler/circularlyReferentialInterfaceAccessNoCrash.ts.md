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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Mxs",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 11,
        "end": 32,
        "typeName": {
          "type": "Identifier",
          "start": 11,
          "end": 13,
          "decorators": [],
          "name": "Mx",
          "optional": false,
          "typeAnnotation": null
        },
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
                "value": "list",
                "raw": "'list'"
              }
            },
            {
              "type": "TSIndexedAccessType",
              "start": 22,
              "end": 31,
              "objectType": {
                "type": "TSTypeReference",
                "start": 22,
                "end": 25,
                "typeName": {
                  "type": "Identifier",
                  "start": 22,
                  "end": 25,
                  "decorators": [],
                  "name": "Mxs",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 26,
                "end": 30,
                "literal": {
                  "type": "Literal",
                  "start": 26,
                  "end": 30,
                  "value": "p1",
                  "raw": "'p1'"
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 35,
      "end": 75,
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
            "name": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 51,
            "end": 52,
            "name": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
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
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 54,
        "end": 75,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 58,
            "end": 64,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 60,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 63,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 62,
                "end": 63,
                "typeName": {
                  "type": "Identifier",
                  "start": 62,
                  "end": 63,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 67,
            "end": 73,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 69,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 71,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 77,
      "end": 123,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 89,
        "decorators": [],
        "name": "ArrElem",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
                "value": "list",
                "raw": "'list'"
              }
            },
            {
              "type": "TSIndexedAccessType",
              "start": 101,
              "end": 119,
              "objectType": {
                "type": "TSIndexedAccessType",
                "start": 101,
                "end": 116,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 101,
                  "end": 108,
                  "typeName": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 108,
                    "decorators": [],
                    "name": "ArrElem",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSNumberKeyword",
                  "start": 109,
                  "end": 115
                }
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 117,
                "end": 118,
                "literal": {
                  "type": "Literal",
                  "start": 117,
                  "end": 118,
                  "value": 0,
                  "raw": "0"
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 125,
      "end": 170,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 139,
        "decorators": [],
        "name": "TupleElem",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
                  "value": "list",
                  "raw": "'list'"
                }
              },
              {
                "type": "TSIndexedAccessType",
                "start": 152,
                "end": 167,
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "start": 152,
                  "end": 164,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 152,
                    "end": 161,
                    "typeName": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 161,
                      "decorators": [],
                      "name": "TupleElem",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 162,
                    "end": 163,
                    "literal": {
                      "type": "Literal",
                      "start": 162,
                      "end": 163,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 165,
                  "end": 166,
                  "literal": {
                    "type": "Literal",
                    "start": 165,
                    "end": 166,
                    "value": 0,
                    "raw": "0"
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
