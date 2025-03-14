unionPropertyOfProtectedAndIntersectionProperty.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1549,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 34,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 34,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 32,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 27,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 30,
              "end": 31,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 36,
      "end": 70,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 70,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 50,
            "end": 68,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 63,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 66,
              "end": 67,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 42,
        "end": 45,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 72,
      "end": 107,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 77,
        "end": 84,
        "decorators": [],
        "name": "Nothing",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSVoidKeyword",
        "start": 102,
        "end": 106
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
            "const": false,
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
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 109,
      "end": 224,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 120,
        "decorators": [],
        "name": "Broken",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 151,
        "end": 223,
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
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 165,
          "end": 166,
          "decorators": [],
          "name": "P",
          "optional": false
        },
        "nameType": null,
        "readonly": true,
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 180,
          "end": 220,
          "checkType": {
            "type": "TSIndexedAccessType",
            "start": 180,
            "end": 184,
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
                "optional": false
              }
            },
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
                "optional": false
              }
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
              "optional": false
            }
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 215,
            "end": 220
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 199,
            "end": 212,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 206,
              "end": 212,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 207,
                  "end": 211,
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
                      "optional": false
                    }
                  },
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
                      "optional": false
                    }
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 199,
              "end": 206,
              "decorators": [],
              "name": "Nothing",
              "optional": false
            }
          }
        }
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
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 131,
              "end": 147,
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
                          "optional": false
                        }
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
                          "optional": false
                        }
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 131,
                "end": 136,
                "decorators": [],
                "name": "Array",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 345,
      "end": 374,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 350,
        "end": 352,
        "decorators": [],
        "name": "_3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 355,
        "end": 373,
        "indexType": {
          "type": "TSLiteralType",
          "start": 367,
          "end": 372,
          "literal": {
            "type": "Literal",
            "start": 367,
            "end": 372,
            "raw": "'foo'",
            "value": "foo"
          }
        },
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
                "optional": false
              }
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
                "optional": false
              }
            }
          ]
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 389,
      "end": 418,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 394,
        "end": 396,
        "decorators": [],
        "name": "_4",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 399,
        "end": 417,
        "indexType": {
          "type": "TSLiteralType",
          "start": 411,
          "end": 416,
          "literal": {
            "type": "Literal",
            "start": 411,
            "end": 416,
            "raw": "'foo'",
            "value": "foo"
          }
        },
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
                "optional": false
              }
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
                "optional": false
              }
            }
          ]
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 436,
      "end": 473,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 443,
        "decorators": [],
        "name": "_5",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 446,
        "end": 472,
        "indexType": {
          "type": "TSLiteralType",
          "start": 466,
          "end": 471,
          "literal": {
            "type": "Literal",
            "start": 466,
            "end": 471,
            "raw": "'foo'",
            "value": "foo"
          }
        },
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
                "optional": false
              }
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
                    "optional": false
                  }
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
                    "optional": false
                  }
                }
              ]
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script"
}
```
