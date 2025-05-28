__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 214,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "A",
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
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "B",
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 17,
        "end": 67,
        "checkType": {
          "type": "TSTupleType",
          "start": 17,
          "end": 23,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 18,
              "end": 19,
              "typeName": {
                "type": "Identifier",
                "start": 18,
                "end": 19,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 21,
              "end": 22,
              "typeName": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "extendsType": {
          "type": "TSArrayType",
          "start": 32,
          "end": 43,
          "elementType": {
            "type": "TSArrayType",
            "start": 32,
            "end": 41,
            "elementType": {
              "type": "TSUnknownKeyword",
              "start": 32,
              "end": 39
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 46,
          "end": 58,
          "typeName": {
            "type": "Identifier",
            "start": 46,
            "end": 50,
            "decorators": [],
            "name": "Bar1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 50,
            "end": 58,
            "params": [
              {
                "type": "TSTupleType",
                "start": 51,
                "end": 57,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 52,
                    "end": 53,
                    "typeName": {
                      "type": "Identifier",
                      "start": 52,
                      "end": 53,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 55,
                    "end": 56,
                    "typeName": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 56,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            ]
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 61,
          "end": 67,
          "literal": {
            "type": "Literal",
            "start": 61,
            "end": 67,
            "value": "else",
            "raw": "'else'"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 68,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 77,
        "decorators": [],
        "name": "Bar1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 77,
        "end": 100,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 99,
            "name": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 88,
              "end": 99,
              "elementType": {
                "type": "TSArrayType",
                "start": 88,
                "end": 97,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 88,
                  "end": 95
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
        "type": "TSTypeReference",
        "start": 103,
        "end": 104,
        "typeName": {
          "type": "Identifier",
          "start": 103,
          "end": 104,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 106,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 115,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 115,
        "end": 118,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 116,
            "end": 117,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "A",
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 121,
        "end": 174,
        "checkType": {
          "type": "TSTypeReference",
          "start": 121,
          "end": 127,
          "typeName": {
            "type": "Identifier",
            "start": 121,
            "end": 124,
            "decorators": [],
            "name": "Set",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 124,
            "end": 127,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 125,
                "end": 126,
                "typeName": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 136,
          "end": 150,
          "typeName": {
            "type": "Identifier",
            "start": 136,
            "end": 139,
            "decorators": [],
            "name": "Set",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 139,
            "end": 150,
            "params": [
              {
                "type": "TSArrayType",
                "start": 140,
                "end": 149,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 140,
                  "end": 147
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 153,
          "end": 165,
          "typeName": {
            "type": "Identifier",
            "start": 153,
            "end": 157,
            "decorators": [],
            "name": "Bar2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 157,
            "end": 165,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 158,
                "end": 164,
                "typeName": {
                  "type": "Identifier",
                  "start": 158,
                  "end": 161,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 161,
                  "end": 164,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 162,
                      "end": 163,
                      "typeName": {
                        "type": "Identifier",
                        "start": 162,
                        "end": 163,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ]
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 168,
          "end": 174,
          "literal": {
            "type": "Literal",
            "start": 168,
            "end": 174,
            "value": "else",
            "raw": "'else'"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 175,
      "end": 214,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 184,
        "decorators": [],
        "name": "Bar2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 184,
        "end": 210,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 185,
            "end": 209,
            "name": {
              "type": "Identifier",
              "start": 185,
              "end": 186,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 195,
              "end": 209,
              "typeName": {
                "type": "Identifier",
                "start": 195,
                "end": 198,
                "decorators": [],
                "name": "Set",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 198,
                "end": 209,
                "params": [
                  {
                    "type": "TSArrayType",
                    "start": 199,
                    "end": 208,
                    "elementType": {
                      "type": "TSUnknownKeyword",
                      "start": 199,
                      "end": 206
                    }
                  }
                ]
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
        "type": "TSTypeReference",
        "start": 213,
        "end": 214,
        "typeName": {
          "type": "Identifier",
          "start": 213,
          "end": 214,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
