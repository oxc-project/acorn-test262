__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1548,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 34,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 34,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 32,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 30,
              "end": 31,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 36,
      "end": 70,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 70,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 68,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 63,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 66,
              "end": 67,
              "value": 0,
              "raw": "0"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "protected"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 72,
      "end": 107,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 84,
        "decorators": [],
        "name": "Nothing",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 84,
        "end": 99,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 85,
            "end": 98,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 95,
              "end": 98,
              "typeName": {
                "type": "Identifier",
                "start": 95,
                "end": 98,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
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
        "type": "TSVoidKeyword",
        "start": 102,
        "end": 106
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 109,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 120,
        "decorators": [],
        "name": "Broken",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 120,
        "end": 148,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 121,
            "end": 147,
            "name": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 131,
              "end": 147,
              "typeName": {
                "type": "Identifier",
                "start": 131,
                "end": 136,
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 136,
                "end": 147,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 137,
                    "end": 146,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 137,
                        "end": 140,
                        "typeName": {
                          "type": "Identifier",
                          "start": 137,
                          "end": 140,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 143,
                        "end": 146,
                        "typeName": {
                          "type": "Identifier",
                          "start": 143,
                          "end": 146,
                          "decorators": [],
                          "name": "Bar",
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 151,
        "end": 223,
        "key": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "decorators": [],
          "name": "P",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 170,
          "end": 177,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 176,
            "end": 177,
            "typeName": {
              "type": "Identifier",
              "start": 176,
              "end": 177,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 180,
          "end": 220,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 180,
            "end": 184,
            "objectType": {
              "type": "TSTypeReference",
              "start": 180,
              "end": 181,
              "typeName": {
                "type": "Identifier",
                "start": 180,
                "end": 181,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "indexType": {
              "type": "TSTypeReference",
              "start": 182,
              "end": 183,
              "typeName": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 193,
            "end": 196,
            "typeName": {
              "type": "Identifier",
              "start": 193,
              "end": 196,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 199,
            "end": 212,
            "typeName": {
              "type": "Identifier",
              "start": 199,
              "end": 206,
              "decorators": [],
              "name": "Nothing",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 206,
              "end": 212,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 207,
                  "end": 211,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 207,
                    "end": 208,
                    "typeName": {
                      "type": "Identifier",
                      "start": 207,
                      "end": 208,
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 209,
                    "end": 210,
                    "typeName": {
                      "type": "Identifier",
                      "start": 209,
                      "end": 210,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 215,
            "end": 220
          }
        },
        "optional": false,
        "readonly": true
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 345,
      "end": 374,
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 352,
        "decorators": [],
        "name": "_3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 355,
        "end": 373,
        "objectType": {
          "type": "TSIntersectionType",
          "start": 356,
          "end": 365,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 356,
              "end": 359,
              "typeName": {
                "type": "Identifier",
                "start": 356,
                "end": 359,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 362,
              "end": 365,
              "typeName": {
                "type": "Identifier",
                "start": 362,
                "end": 365,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 367,
          "end": 372,
          "literal": {
            "type": "Literal",
            "start": 367,
            "end": 372,
            "value": "foo",
            "raw": "'foo'"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 389,
      "end": 418,
      "id": {
        "type": "Identifier",
        "start": 394,
        "end": 396,
        "decorators": [],
        "name": "_4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 399,
        "end": 417,
        "objectType": {
          "type": "TSUnionType",
          "start": 400,
          "end": 409,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 400,
              "end": 403,
              "typeName": {
                "type": "Identifier",
                "start": 400,
                "end": 403,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 406,
              "end": 409,
              "typeName": {
                "type": "Identifier",
                "start": 406,
                "end": 409,
                "decorators": [],
                "name": "Bar",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 411,
          "end": 416,
          "literal": {
            "type": "Literal",
            "start": 411,
            "end": 416,
            "value": "foo",
            "raw": "'foo'"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 436,
      "end": 473,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 443,
        "decorators": [],
        "name": "_5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 446,
        "end": 472,
        "objectType": {
          "type": "TSUnionType",
          "start": 447,
          "end": 464,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 447,
              "end": 450,
              "typeName": {
                "type": "Identifier",
                "start": 447,
                "end": 450,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSIntersectionType",
              "start": 454,
              "end": 463,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 454,
                  "end": 457,
                  "typeName": {
                    "type": "Identifier",
                    "start": 454,
                    "end": 457,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 460,
                  "end": 463,
                  "typeName": {
                    "type": "Identifier",
                    "start": 460,
                    "end": 463,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          ]
        },
        "indexType": {
          "type": "TSLiteralType",
          "start": 466,
          "end": 471,
          "literal": {
            "type": "Literal",
            "start": 466,
            "end": 471,
            "value": "foo",
            "raw": "'foo'"
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
