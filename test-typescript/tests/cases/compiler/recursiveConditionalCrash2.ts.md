__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 293,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 82,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 29,
        "end": 82,
        "id": {
          "type": "Identifier",
          "start": 34,
          "end": 47,
          "name": "CanBeExpanded",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 47,
          "end": 65,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 48,
              "end": 64,
              "name": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 58,
                "end": 64
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 68,
          "end": 82,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 72,
              "end": 80,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 72,
                "end": 77,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 77,
                "end": 80,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 79,
                  "end": 80,
                  "typeName": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 80,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 84,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 97,
        "name": "Expand__",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 97,
        "end": 110,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 99,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 101,
            "end": 102,
            "name": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "name": "N",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 104,
            "end": 109,
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 109,
              "name": "Depth",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 115,
        "end": 240,
        "checkType": {
          "type": "TSTypeReference",
          "start": 115,
          "end": 116,
          "typeName": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "name": "N",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 125,
          "end": 130,
          "typeName": {
            "type": "Identifier",
            "start": 125,
            "end": 130,
            "name": "Depth",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSUnknownKeyword",
          "start": 139,
          "end": 146
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 155,
          "end": 240,
          "checkType": {
            "type": "TSTypeReference",
            "start": 155,
            "end": 156,
            "typeName": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 165,
            "end": 183,
            "typeName": {
              "type": "Identifier",
              "start": 165,
              "end": 178,
              "name": "CanBeExpanded",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 178,
              "end": 183,
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 179,
                  "end": 182
                }
              ]
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 196,
            "end": 226,
            "typeName": {
              "type": "Identifier",
              "start": 196,
              "end": 204,
              "name": "Expand__",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 204,
              "end": 226,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 205,
                  "end": 215,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 205,
                    "end": 206,
                    "typeName": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 206,
                      "name": "O",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 207,
                    "end": 214,
                    "literal": {
                      "type": "Literal",
                      "start": 207,
                      "end": 214,
                      "value": "value",
                      "raw": "'value'"
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 217,
                  "end": 218,
                  "typeName": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 218,
                    "name": "N",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 220,
                  "end": 225,
                  "typeName": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 225,
                    "name": "Depth",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 239,
            "end": 240,
            "typeName": {
              "type": "Identifier",
              "start": 239,
              "end": 240,
              "name": "O",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 242,
      "end": 292,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 249,
        "end": 292,
        "id": {
          "type": "Identifier",
          "start": 254,
          "end": 269,
          "name": "UseQueryOptions",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 269,
          "end": 272,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 270,
              "end": 271,
              "name": {
                "type": "Identifier",
                "start": 270,
                "end": 271,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 275,
          "end": 292,
          "typeName": {
            "type": "Identifier",
            "start": 275,
            "end": 283,
            "name": "Expand__",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 283,
            "end": 292,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 284,
                "end": 285,
                "typeName": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 285,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSLiteralType",
                "start": 287,
                "end": 288,
                "literal": {
                  "type": "Literal",
                  "start": 287,
                  "end": 288,
                  "value": 4,
                  "raw": "4"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 290,
                "end": 291,
                "literal": {
                  "type": "Literal",
                  "start": 290,
                  "end": 291,
                  "value": 2,
                  "raw": "2"
                }
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
