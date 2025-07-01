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
        "name": "Mxs",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "Mx",
          "optional": false,
          "typeAnnotation": null,
          "start": 11,
          "end": 13
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "list",
                "raw": "'list'",
                "start": 14,
                "end": 20
              },
              "start": 14,
              "end": 20
            },
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Mxs",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 25
                },
                "typeArguments": null,
                "start": 22,
                "end": 25
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "p1",
                  "raw": "'p1'",
                  "start": 26,
                  "end": 30
                },
                "start": 26,
                "end": 30
              },
              "start": 22,
              "end": 31
            }
          ],
          "start": 13,
          "end": 32
        },
        "start": 11,
        "end": 32
      },
      "declare": false,
      "start": 0,
      "end": 33
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Mx",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 47
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 48,
            "end": 49
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 52
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 51,
            "end": 52
          }
        ],
        "start": 47,
        "end": 53
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 60
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 62,
                  "end": 63
                },
                "typeArguments": null,
                "start": 62,
                "end": 63
              },
              "start": 60,
              "end": 63
            },
            "accessibility": null,
            "static": false,
            "start": 58,
            "end": 64
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 69
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 72
                },
                "typeArguments": null,
                "start": 71,
                "end": 72
              },
              "start": 69,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 67,
            "end": 73
          }
        ],
        "start": 54,
        "end": 75
      },
      "declare": false,
      "start": 35,
      "end": 75
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ArrElem",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 89
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSArrayType",
        "elementType": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "list",
                "raw": "'list'",
                "start": 93,
                "end": 99
              },
              "start": 93,
              "end": 99
            },
            {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ArrElem",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 101,
                    "end": 108
                  },
                  "typeArguments": null,
                  "start": 101,
                  "end": 108
                },
                "indexType": {
                  "type": "TSNumberKeyword",
                  "start": 109,
                  "end": 115
                },
                "start": 101,
                "end": 116
              },
              "indexType": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 117,
                  "end": 118
                },
                "start": 117,
                "end": 118
              },
              "start": 101,
              "end": 119
            }
          ],
          "start": 92,
          "end": 120
        },
        "start": 92,
        "end": 122
      },
      "declare": false,
      "start": 77,
      "end": 123
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "TupleElem",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 139
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "list",
                  "raw": "'list'",
                  "start": 144,
                  "end": 150
                },
                "start": 144,
                "end": 150
              },
              {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TupleElem",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 152,
                      "end": 161
                    },
                    "typeArguments": null,
                    "start": 152,
                    "end": 161
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 162,
                      "end": 163
                    },
                    "start": 162,
                    "end": 163
                  },
                  "start": 152,
                  "end": 164
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 165,
                    "end": 166
                  },
                  "start": 165,
                  "end": 166
                },
                "start": 152,
                "end": 167
              }
            ],
            "start": 143,
            "end": 168
          }
        ],
        "start": 142,
        "end": 169
      },
      "declare": false,
      "start": 125,
      "end": 170
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
