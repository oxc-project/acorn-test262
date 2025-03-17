__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 420,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 23,
      "end": 304,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 38,
        "name": "LengthDown",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 38,
        "end": 102,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 60,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "name": "Str",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 64,
            "end": 94,
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 70,
              "name": "Length",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 79,
              "end": 94,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 79,
                  "end": 85
                },
                {
                  "type": "TSBigIntKeyword",
                  "start": 88,
                  "end": 94
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 100,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 100,
              "name": "It",
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
        "start": 105,
        "end": 303,
        "checkType": {
          "type": "TSTypeReference",
          "start": 105,
          "end": 107,
          "typeName": {
            "type": "Identifier",
            "start": 105,
            "end": 107,
            "name": "It",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 116,
          "end": 132,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 116,
            "end": 132,
            "left": {
              "type": "Identifier",
              "start": 116,
              "end": 123,
              "name": "StrIter",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 124,
              "end": 132,
              "name": "Iterator",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeArguments": null
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 137,
          "end": 292,
          "checkType": {
            "type": "TSTypeReference",
            "start": 137,
            "end": 159,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 137,
              "end": 150,
              "left": {
                "type": "Identifier",
                "start": 137,
                "end": 144,
                "name": "StrIter",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 145,
                "end": 150,
                "name": "CutAt",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 150,
              "end": 159,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 151,
                  "end": 154,
                  "typeName": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 154,
                    "name": "Str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 156,
                  "end": 158,
                  "typeName": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 158,
                    "name": "It",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "start": 168,
            "end": 184,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 168,
                "end": 171,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 182,
                "end": 184,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "start": 171,
                "end": 182,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 177,
                  "end": 182,
                  "name": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 182,
                    "name": "$Rest",
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
              }
            ]
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 191,
            "end": 244,
            "typeName": {
              "type": "Identifier",
              "start": 191,
              "end": 201,
              "name": "LengthDown",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 201,
              "end": 244,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 202,
                  "end": 207,
                  "typeName": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 207,
                    "name": "$Rest",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 209,
                  "end": 239,
                  "typeName": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 212,
                    "name": "Add",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 212,
                    "end": 239,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 213,
                        "end": 219,
                        "typeName": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 219,
                          "name": "Length",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 221,
                        "end": 238,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 221,
                          "end": 234,
                          "left": {
                            "type": "Identifier",
                            "start": 221,
                            "end": 228,
                            "name": "StrIter",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 234,
                            "name": "Value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 234,
                          "end": 238,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 235,
                              "end": 237,
                              "typeName": {
                                "type": "Identifier",
                                "start": 235,
                                "end": 237,
                                "name": "It",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 241,
                  "end": 243,
                  "typeName": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 243,
                    "name": "It",
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
            "start": 251,
            "end": 292,
            "typeName": {
              "type": "Identifier",
              "start": 251,
              "end": 261,
              "name": "LengthDown",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 261,
              "end": 292,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 262,
                  "end": 265,
                  "typeName": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 265,
                    "name": "Str",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 267,
                  "end": 273,
                  "typeName": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 273,
                    "name": "Length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 275,
                  "end": 291,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 275,
                    "end": 287,
                    "left": {
                      "type": "Identifier",
                      "start": 275,
                      "end": 282,
                      "name": "StrIter",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 283,
                      "end": 287,
                      "name": "Prev",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 287,
                    "end": 291,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 288,
                        "end": 290,
                        "typeName": {
                          "type": "Identifier",
                          "start": 288,
                          "end": 290,
                          "name": "It",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 297,
          "end": 303,
          "typeName": {
            "type": "Identifier",
            "start": 297,
            "end": 303,
            "name": "Length",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 306,
      "end": 419,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 314,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 314,
        "end": 317,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 315,
            "end": 316,
            "name": {
              "type": "Identifier",
              "start": 315,
              "end": 316,
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
        "type": "TSConditionalType",
        "start": 320,
        "end": 418,
        "checkType": {
          "type": "TSTypeReference",
          "start": 320,
          "end": 321,
          "typeName": {
            "type": "Identifier",
            "start": 320,
            "end": 321,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 330,
          "end": 337
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 342,
          "end": 406,
          "checkType": {
            "type": "TSUnknownKeyword",
            "start": 342,
            "end": 349
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "start": 358,
            "end": 374,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 358,
                "end": 361,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 372,
                "end": 374,
                "value": {
                  "cooked": "",
                  "raw": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "start": 361,
                "end": 372,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 367,
                  "end": 372,
                  "name": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 372,
                    "name": "$Rest",
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
              }
            ]
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 381,
            "end": 387,
            "typeName": {
              "type": "Identifier",
              "start": 381,
              "end": 384,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 384,
              "end": 387,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 385,
                  "end": 386,
                  "typeName": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 386,
                    "name": "T",
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
            "start": 394,
            "end": 406,
            "typeName": {
              "type": "Identifier",
              "start": 394,
              "end": 397,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 397,
              "end": 406,
              "params": [
                {
                  "type": "TSUnknownKeyword",
                  "start": 398,
                  "end": 405
                }
              ]
            }
          }
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 411,
          "end": 418
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
