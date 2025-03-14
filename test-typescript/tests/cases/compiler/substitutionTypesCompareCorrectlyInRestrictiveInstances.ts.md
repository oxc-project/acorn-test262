substitutionTypesCompareCorrectlyInRestrictiveInstances.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 319,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 52,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "UnionKeys",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 20,
        "end": 51,
        "checkType": {
          "type": "TSTypeReference",
          "start": 20,
          "end": 21,
          "typeName": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSAnyKeyword",
          "start": 30,
          "end": 33
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 46,
          "end": 51
        },
        "trueType": {
          "type": "TSTypeOperator",
          "start": 36,
          "end": 43,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 42,
            "end": 43,
            "typeName": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 53,
      "end": 136,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 67,
        "decorators": [],
        "name": "BugHelper",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 79,
        "end": 136,
        "checkType": {
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
        },
        "extendsType": {
          "type": "TSAnyKeyword",
          "start": 89,
          "end": 92
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 131,
          "end": 136
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 95,
          "end": 128,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 102,
            "end": 128,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 103,
                "end": 118,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 112,
                  "end": 118,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 113,
                      "end": 117,
                      "typeName": {
                        "type": "Identifier",
                        "start": 113,
                        "end": 117,
                        "decorators": [],
                        "name": "TAll",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 103,
                  "end": 112,
                  "decorators": [],
                  "name": "UnionKeys",
                  "optional": false
                }
              },
              {
                "type": "TSTypeOperator",
                "start": 120,
                "end": 127,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 126,
                  "end": 127,
                  "typeName": {
                    "type": "Identifier",
                    "start": 126,
                    "end": 127,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 95,
            "end": 102,
            "decorators": [],
            "name": "Exclude",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 67,
        "end": 76,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 68,
            "end": 69,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 68,
              "end": 69,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 71,
            "end": 75,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 75,
              "decorators": [],
              "name": "TAll",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 137,
      "end": 176,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 142,
        "end": 145,
        "decorators": [],
        "name": "Bug",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 155,
        "end": 176,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 164,
          "end": 176,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 165,
              "end": 169,
              "typeName": {
                "type": "Identifier",
                "start": 165,
                "end": 169,
                "decorators": [],
                "name": "TAll",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 171,
              "end": 175,
              "typeName": {
                "type": "Identifier",
                "start": 171,
                "end": 175,
                "decorators": [],
                "name": "TAll",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 155,
          "end": 164,
          "decorators": [],
          "name": "BugHelper",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 145,
        "end": 151,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 146,
            "end": 150,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 146,
              "end": 150,
              "decorators": [],
              "name": "TAll",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 177,
      "end": 221,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 183,
        "decorators": [],
        "name": "Q",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 186,
        "end": 221,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 195,
          "end": 221,
          "params": [
            {
              "type": "TSUnionType",
              "start": 196,
              "end": 220,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 196,
                  "end": 207,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 198,
                      "end": 205,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 198,
                        "end": 199,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 200,
                        "end": 205,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 202,
                          "end": 205
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 210,
                  "end": 220,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 212,
                      "end": 218,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 212,
                        "end": 213,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 213,
                        "end": 218,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 215,
                          "end": 218
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 186,
          "end": 195,
          "decorators": [],
          "name": "UnionKeys",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 248,
      "end": 286,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 253,
        "end": 254,
        "decorators": [],
        "name": "R",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 257,
        "end": 286,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 260,
          "end": 286,
          "params": [
            {
              "type": "TSUnionType",
              "start": 261,
              "end": 285,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 261,
                  "end": 272,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 263,
                      "end": 270,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 263,
                        "end": 264,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 265,
                        "end": 270,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 267,
                          "end": 270
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 275,
                  "end": 285,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 277,
                      "end": 283,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 277,
                        "end": 278,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 278,
                        "end": 283,
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 280,
                          "end": 283
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 257,
          "end": 260,
          "decorators": [],
          "name": "Bug",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
