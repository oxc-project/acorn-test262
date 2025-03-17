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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 32,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 30,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 34,
      "end": 66,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 66,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 46,
            "end": 64,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 40,
        "end": 41,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 68,
      "end": 113,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
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
            "indexType": {
              "type": "TSLiteralType",
              "start": 93,
              "end": 96,
              "literal": {
                "type": "Literal",
                "start": 93,
                "end": 96,
                "raw": "\"a\"",
                "value": "a"
              }
            },
            "objectType": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 92,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 92,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "TSIndexedAccessType",
            "start": 99,
            "end": 111,
            "indexType": {
              "type": "TSLiteralType",
              "start": 107,
              "end": 110,
              "literal": {
                "type": "Literal",
                "start": 107,
                "end": 110,
                "raw": "\"a\"",
                "value": "a"
              }
            },
            "objectType": {
              "type": "TSUnionType",
              "start": 100,
              "end": 105,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 100,
                  "end": 101,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 104,
                  "end": 105,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 104,
                    "end": 105,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
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
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 85,
              "end": 86,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 85,
                "end": 86,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
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
      "start": 114,
      "end": 147,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 119,
        "end": 120,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 140,
        "end": 146,
        "indexType": {
          "type": "TSLiteralType",
          "start": 142,
          "end": 145,
          "literal": {
            "type": "Literal",
            "start": 142,
            "end": 145,
            "raw": "\"a\"",
            "value": "a"
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 140,
          "end": 141,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 140,
            "end": 141,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 131,
              "end": 136,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 131,
                  "end": 132,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 135,
                  "end": 136,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 136,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
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
      "start": 148,
      "end": 181,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 154,
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 174,
        "end": 180,
        "indexType": {
          "type": "TSLiteralType",
          "start": 176,
          "end": 179,
          "literal": {
            "type": "Literal",
            "start": 176,
            "end": 179,
            "raw": "\"a\"",
            "value": "a"
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 174,
          "end": 175,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 174,
            "end": 175,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
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
            "const": false,
            "constraint": {
              "type": "TSIntersectionType",
              "start": 165,
              "end": 170,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 165,
                  "end": 166,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 165,
                    "end": 166,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 169,
                  "end": 170,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
