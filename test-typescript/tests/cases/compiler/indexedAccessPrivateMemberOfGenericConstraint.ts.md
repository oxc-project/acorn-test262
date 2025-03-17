__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 182,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 32,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 32,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 30,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 29,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 23,
                "end": 29
              }
            },
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 66,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 46,
            "end": 64,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 55,
              "end": 63,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 57,
                "end": 63
              }
            },
            "accessibility": "private"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 68,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "name": "X",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 74,
        "end": 87,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 75,
            "end": 86,
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 86,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 90,
        "end": 112,
        "elementTypes": [
          {
            "type": "TSIndexedAccessType",
            "start": 91,
            "end": 97,
            "objectType": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 92,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSLiteralType",
              "start": 93,
              "end": 96,
              "literal": {
                "type": "Literal",
                "start": 93,
                "end": 96,
                "value": "a",
                "raw": "\"a\""
              }
            }
          },
          {
            "type": "TSIndexedAccessType",
            "start": 99,
            "end": 111,
            "objectType": {
              "type": "TSUnionType",
              "start": 100,
              "end": 105,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 100,
                  "end": 101,
                  "typeName": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 104,
                  "end": 105,
                  "typeName": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            },
            "indexType": {
              "type": "TSLiteralType",
              "start": 107,
              "end": 110,
              "literal": {
                "type": "Literal",
                "start": 107,
                "end": 110,
                "value": "a",
                "raw": "\"a\""
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 114,
      "end": 147,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 120,
        "name": "Y",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 120,
        "end": 137,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 121,
            "end": 136,
            "name": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 131,
              "end": 136,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 131,
                  "end": 132,
                  "typeName": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 135,
                  "end": 136,
                  "typeName": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 136,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 140,
        "end": 146,
        "objectType": {
          "type": "TSTypeReference",
          "start": 140,
          "end": 141,
          "typeName": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 142,
          "end": 145,
          "literal": {
            "type": "Literal",
            "start": 142,
            "end": 145,
            "value": "a",
            "raw": "\"a\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 148,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 154,
        "name": "Z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 154,
        "end": 171,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 155,
            "end": 170,
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSIntersectionType",
              "start": 165,
              "end": 170,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 165,
                  "end": 166,
                  "typeName": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 169,
                  "end": 170,
                  "typeName": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 174,
        "end": 180,
        "objectType": {
          "type": "TSTypeReference",
          "start": 174,
          "end": 175,
          "typeName": {
            "type": "Identifier",
            "start": 174,
            "end": 175,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 176,
          "end": 179,
          "literal": {
            "type": "Literal",
            "start": 176,
            "end": 179,
            "value": "a",
            "raw": "\"a\""
          }
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
