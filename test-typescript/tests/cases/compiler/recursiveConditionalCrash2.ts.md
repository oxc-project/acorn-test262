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
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 29,
        "end": 82,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 34,
          "end": 47,
          "decorators": [],
          "name": "CanBeExpanded",
          "optional": false
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
              "key": {
                "type": "Identifier",
                "start": 72,
                "end": 77,
                "decorators": [],
                "name": "value",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            }
          ]
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
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 58,
                "end": 64
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 48,
                "end": 49,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 84,
      "end": 240,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 89,
        "end": 97,
        "decorators": [],
        "name": "Expand__",
        "optional": false
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
            "decorators": [],
            "name": "N",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 125,
          "end": 130,
          "typeName": {
            "type": "Identifier",
            "start": 125,
            "end": 130,
            "decorators": [],
            "name": "Depth",
            "optional": false
          }
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
              "decorators": [],
              "name": "O",
              "optional": false
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 165,
            "end": 183,
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
            },
            "typeName": {
              "type": "Identifier",
              "start": 165,
              "end": 178,
              "decorators": [],
              "name": "CanBeExpanded",
              "optional": false
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
              "decorators": [],
              "name": "O",
              "optional": false
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 196,
            "end": 226,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 204,
              "end": 226,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 205,
                  "end": 215,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 207,
                    "end": 214,
                    "literal": {
                      "type": "Literal",
                      "start": 207,
                      "end": 214,
                      "raw": "'value'",
                      "value": "value"
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 205,
                    "end": 206,
                    "typeName": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 206,
                      "decorators": [],
                      "name": "O",
                      "optional": false
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
                    "decorators": [],
                    "name": "N",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 220,
                  "end": 225,
                  "typeName": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 225,
                    "decorators": [],
                    "name": "Depth",
                    "optional": false
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 196,
              "end": 204,
              "decorators": [],
              "name": "Expand__",
              "optional": false
            }
          }
        },
        "trueType": {
          "type": "TSUnknownKeyword",
          "start": 139,
          "end": 146
        }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "O",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 101,
            "end": 102,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "N",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 104,
            "end": 109,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 109,
              "decorators": [],
              "name": "Depth",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 242,
      "end": 292,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 249,
        "end": 292,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 254,
          "end": 269,
          "decorators": [],
          "name": "UseQueryOptions",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 275,
          "end": 292,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSLiteralType",
                "start": 287,
                "end": 288,
                "literal": {
                  "type": "Literal",
                  "start": 287,
                  "end": 288,
                  "raw": "4",
                  "value": 4
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
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 275,
            "end": 283,
            "decorators": [],
            "name": "Expand__",
            "optional": false
          }
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
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 270,
                "end": 271,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
