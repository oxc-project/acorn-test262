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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 38,
        "decorators": [],
        "name": "LengthDown",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 105,
        "end": 303,
        "checkType": {
          "type": "TSTypeReference",
          "start": 105,
          "end": 107,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 105,
            "end": 107,
            "decorators": [],
            "name": "It",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 116,
          "end": 132,
          "typeArguments": null,
          "typeName": {
            "type": "TSQualifiedName",
            "start": 116,
            "end": 132,
            "left": {
              "type": "Identifier",
              "start": 116,
              "end": 123,
              "decorators": [],
              "name": "StrIter",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 124,
              "end": 132,
              "decorators": [],
              "name": "Iterator",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 297,
          "end": 303,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 297,
            "end": 303,
            "decorators": [],
            "name": "Length",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "trueType": {
          "type": "TSConditionalType",
          "start": 137,
          "end": 292,
          "checkType": {
            "type": "TSTypeReference",
            "start": 137,
            "end": 159,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 150,
              "end": 159,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 151,
                  "end": 154,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 154,
                    "decorators": [],
                    "name": "Str",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 156,
                  "end": 158,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 158,
                    "decorators": [],
                    "name": "It",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "TSQualifiedName",
              "start": 137,
              "end": 150,
              "left": {
                "type": "Identifier",
                "start": 137,
                "end": 144,
                "decorators": [],
                "name": "StrIter",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 145,
                "end": 150,
                "decorators": [],
                "name": "CutAt",
                "optional": false,
                "typeAnnotation": null
              }
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
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              },
              {
                "type": "TemplateElement",
                "start": 182,
                "end": 184,
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
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
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 177,
                    "end": 182,
                    "decorators": [],
                    "name": "$Rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            ]
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 251,
            "end": 292,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 261,
              "end": 292,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 262,
                  "end": 265,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 265,
                    "decorators": [],
                    "name": "Str",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 267,
                  "end": 273,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 267,
                    "end": 273,
                    "decorators": [],
                    "name": "Length",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 275,
                  "end": 291,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 287,
                    "end": 291,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 288,
                        "end": 290,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 288,
                          "end": 290,
                          "decorators": [],
                          "name": "It",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 275,
                    "end": 287,
                    "left": {
                      "type": "Identifier",
                      "start": 275,
                      "end": 282,
                      "decorators": [],
                      "name": "StrIter",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 283,
                      "end": 287,
                      "decorators": [],
                      "name": "Prev",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 251,
              "end": 261,
              "decorators": [],
              "name": "LengthDown",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 191,
            "end": 244,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 201,
              "end": 244,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 202,
                  "end": 207,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 202,
                    "end": 207,
                    "decorators": [],
                    "name": "$Rest",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 209,
                  "end": 239,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 212,
                    "end": 239,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 213,
                        "end": 219,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 213,
                          "end": 219,
                          "decorators": [],
                          "name": "Length",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 221,
                        "end": 238,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 234,
                          "end": 238,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 235,
                              "end": 237,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 235,
                                "end": 237,
                                "decorators": [],
                                "name": "It",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 221,
                          "end": 234,
                          "left": {
                            "type": "Identifier",
                            "start": 221,
                            "end": 228,
                            "decorators": [],
                            "name": "StrIter",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 229,
                            "end": 234,
                            "decorators": [],
                            "name": "Value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 209,
                    "end": 212,
                    "decorators": [],
                    "name": "Add",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 241,
                  "end": 243,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 243,
                    "decorators": [],
                    "name": "It",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 191,
              "end": 201,
              "decorators": [],
              "name": "LengthDown",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
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
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 45,
              "decorators": [],
              "name": "Str",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 64,
            "end": 94,
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 64,
              "end": 70,
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 98,
            "end": 100,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 98,
              "end": 100,
              "decorators": [],
              "name": "It",
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
      "start": 306,
      "end": 419,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 314,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 320,
        "end": 418,
        "checkType": {
          "type": "TSTypeReference",
          "start": 320,
          "end": 321,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 320,
            "end": 321,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 330,
          "end": 337
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 411,
          "end": 418
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
                "tail": false,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
              },
              {
                "type": "TemplateElement",
                "start": 372,
                "end": 374,
                "tail": true,
                "value": {
                  "cooked": "",
                  "raw": ""
                }
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
                  "const": false,
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 367,
                    "end": 372,
                    "decorators": [],
                    "name": "$Rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              }
            ]
          },
          "falseType": {
            "type": "TSTypeReference",
            "start": 394,
            "end": 406,
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
            },
            "typeName": {
              "type": "Identifier",
              "start": 394,
              "end": 397,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "trueType": {
            "type": "TSTypeReference",
            "start": 381,
            "end": 387,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 384,
              "end": 387,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 385,
                  "end": 386,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 386,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 381,
              "end": 384,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
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
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 315,
              "end": 316,
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
