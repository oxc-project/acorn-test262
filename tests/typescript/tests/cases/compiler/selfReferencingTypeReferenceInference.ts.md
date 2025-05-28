__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 414,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 30,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 16,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 15,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
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
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 30,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 28,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 25,
              "decorators": [],
              "name": "__",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 28,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 27,
                "end": 28,
                "typeName": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 28,
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 32,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 46,
        "decorators": [],
        "name": "Recursive",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 46,
        "end": 49,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 47,
            "end": 48,
            "name": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 56,
        "end": 83,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 58,
            "end": 59,
            "typeName": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 66,
            "end": 83,
            "typeName": {
              "type": "Identifier",
              "start": 66,
              "end": 69,
              "decorators": [],
              "name": "Box",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 69,
              "end": 83,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 70,
                  "end": 82,
                  "typeName": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 79,
                    "decorators": [],
                    "name": "Recursive",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 79,
                    "end": 82,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 80,
                        "end": 81,
                        "typeName": {
                          "type": "Identifier",
                          "start": 80,
                          "end": 81,
                          "decorators": [],
                          "name": "T",
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 85,
      "end": 153,
      "id": {
        "type": "Identifier",
        "start": 90,
        "end": 104,
        "decorators": [],
        "name": "InferRecursive",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 104,
        "end": 107,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 105,
            "end": 106,
            "name": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 110,
        "end": 153,
        "checkType": {
          "type": "TSTypeReference",
          "start": 110,
          "end": 111,
          "typeName": {
            "type": "Identifier",
            "start": 110,
            "end": 111,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 120,
          "end": 138,
          "typeName": {
            "type": "Identifier",
            "start": 120,
            "end": 129,
            "decorators": [],
            "name": "Recursive",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 129,
            "end": 138,
            "params": [
              {
                "type": "TSInferType",
                "start": 130,
                "end": 137,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 136,
                  "end": 137,
                  "name": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 141,
          "end": 142,
          "typeName": {
            "type": "Identifier",
            "start": 141,
            "end": 142,
            "decorators": [],
            "name": "R",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 145,
          "end": 153,
          "literal": {
            "type": "Literal",
            "start": 145,
            "end": 153,
            "value": "never!",
            "raw": "\"never!\""
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 187,
      "end": 232,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 194,
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 197,
        "end": 232,
        "typeName": {
          "type": "Identifier",
          "start": 197,
          "end": 200,
          "decorators": [],
          "name": "Box",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 200,
          "end": 232,
          "params": [
            {
              "type": "TSUnionType",
              "start": 201,
              "end": 231,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 201,
                  "end": 207
                },
                {
                  "type": "TSTypeReference",
                  "start": 210,
                  "end": 231,
                  "typeName": {
                    "type": "Identifier",
                    "start": 210,
                    "end": 213,
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 213,
                    "end": 231,
                    "params": [
                      {
                        "type": "TSUnionType",
                        "start": 214,
                        "end": 230,
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 214,
                            "end": 220
                          },
                          {
                            "type": "TSBooleanKeyword",
                            "start": 223,
                            "end": 230
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 234,
      "end": 262,
      "id": {
        "type": "Identifier",
        "start": 239,
        "end": 241,
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 244,
        "end": 262,
        "typeName": {
          "type": "Identifier",
          "start": 244,
          "end": 258,
          "decorators": [],
          "name": "InferRecursive",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 258,
          "end": 262,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 259,
              "end": 261,
              "typeName": {
                "type": "Identifier",
                "start": 259,
                "end": 261,
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 263,
      "end": 324,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 270,
        "decorators": [],
        "name": "t3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 273,
        "end": 324,
        "typeName": {
          "type": "Identifier",
          "start": 273,
          "end": 287,
          "decorators": [],
          "name": "InferRecursive",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 287,
          "end": 324,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 288,
              "end": 323,
              "typeName": {
                "type": "Identifier",
                "start": 288,
                "end": 291,
                "decorators": [],
                "name": "Box",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 291,
                "end": 323,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 292,
                    "end": 322,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 292,
                        "end": 298
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 301,
                        "end": 322,
                        "typeName": {
                          "type": "Identifier",
                          "start": 301,
                          "end": 304,
                          "decorators": [],
                          "name": "Box",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 304,
                          "end": 322,
                          "params": [
                            {
                              "type": "TSUnionType",
                              "start": 305,
                              "end": 321,
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 305,
                                  "end": 311
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 314,
                                  "end": 321
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
