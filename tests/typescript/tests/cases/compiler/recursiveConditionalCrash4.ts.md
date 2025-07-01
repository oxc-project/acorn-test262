__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LengthDown",
        "optional": false,
        "typeAnnotation": null,
        "start": 28,
        "end": 38
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Str",
              "optional": false,
              "typeAnnotation": null,
              "start": 42,
              "end": 45
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 54,
              "end": 60
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 42,
            "end": 60
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Length",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 70
            },
            "constraint": {
              "type": "TSUnionType",
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
              ],
              "start": 79,
              "end": 94
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 64,
            "end": 94
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "It",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 100
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 98,
            "end": 100
          }
        ],
        "start": 38,
        "end": 102
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "It",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 107
          },
          "typeArguments": null,
          "start": 105,
          "end": 107
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "StrIter",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 123
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Iterator",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 132
            },
            "start": 116,
            "end": 132
          },
          "typeArguments": null,
          "start": 116,
          "end": 132
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "StrIter",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 144
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "CutAt",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 150
              },
              "start": 137,
              "end": 150
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 151,
                    "end": 154
                  },
                  "typeArguments": null,
                  "start": 151,
                  "end": 154
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "It",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 158
                  },
                  "typeArguments": null,
                  "start": 156,
                  "end": 158
                }
              ],
              "start": 150,
              "end": 159
            },
            "start": 137,
            "end": 159
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 168,
                "end": 171
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 182,
                "end": 184
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "$Rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 182
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 177,
                  "end": 182
                },
                "start": 171,
                "end": 182
              }
            ],
            "start": 168,
            "end": 184
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "LengthDown",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 201
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "$Rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 202,
                    "end": 207
                  },
                  "typeArguments": null,
                  "start": 202,
                  "end": 207
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Add",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 212
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Length",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 213,
                          "end": 219
                        },
                        "typeArguments": null,
                        "start": 213,
                        "end": 219
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "StrIter",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 221,
                            "end": 228
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 229,
                            "end": 234
                          },
                          "start": 221,
                          "end": 234
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "It",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 235,
                                "end": 237
                              },
                              "typeArguments": null,
                              "start": 235,
                              "end": 237
                            }
                          ],
                          "start": 234,
                          "end": 238
                        },
                        "start": 221,
                        "end": 238
                      }
                    ],
                    "start": 212,
                    "end": 239
                  },
                  "start": 209,
                  "end": 239
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "It",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 241,
                    "end": 243
                  },
                  "typeArguments": null,
                  "start": 241,
                  "end": 243
                }
              ],
              "start": 201,
              "end": 244
            },
            "start": 191,
            "end": 244
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "LengthDown",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 261
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 262,
                    "end": 265
                  },
                  "typeArguments": null,
                  "start": 262,
                  "end": 265
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 267,
                    "end": 273
                  },
                  "typeArguments": null,
                  "start": 267,
                  "end": 273
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "StrIter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 275,
                      "end": 282
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Prev",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 283,
                      "end": 287
                    },
                    "start": 275,
                    "end": 287
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "It",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 288,
                          "end": 290
                        },
                        "typeArguments": null,
                        "start": 288,
                        "end": 290
                      }
                    ],
                    "start": 287,
                    "end": 291
                  },
                  "start": 275,
                  "end": 291
                }
              ],
              "start": 261,
              "end": 292
            },
            "start": 251,
            "end": 292
          },
          "start": 137,
          "end": 292
        },
        "falseType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Length",
            "optional": false,
            "typeAnnotation": null,
            "start": 297,
            "end": 303
          },
          "typeArguments": null,
          "start": 297,
          "end": 303
        },
        "start": 105,
        "end": 303
      },
      "declare": false,
      "start": 23,
      "end": 304
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 314
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 315,
              "end": 316
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 315,
            "end": 316
          }
        ],
        "start": 314,
        "end": 317
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 320,
            "end": 321
          },
          "typeArguments": null,
          "start": 320,
          "end": 321
        },
        "extendsType": {
          "type": "TSUnknownKeyword",
          "start": 330,
          "end": 337
        },
        "trueType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSUnknownKeyword",
            "start": 342,
            "end": 349
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false,
                "start": 358,
                "end": 361
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true,
                "start": 372,
                "end": 374
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "$Rest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 367,
                    "end": 372
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 367,
                  "end": 372
                },
                "start": 361,
                "end": 372
              }
            ],
            "start": 358,
            "end": 374
          },
          "trueType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 381,
              "end": 384
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 385,
                    "end": 386
                  },
                  "typeArguments": null,
                  "start": 385,
                  "end": 386
                }
              ],
              "start": 384,
              "end": 387
            },
            "start": 381,
            "end": 387
          },
          "falseType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 394,
              "end": 397
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnknownKeyword",
                  "start": 398,
                  "end": 405
                }
              ],
              "start": 397,
              "end": 406
            },
            "start": 394,
            "end": 406
          },
          "start": 342,
          "end": 406
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 411,
          "end": 418
        },
        "start": 320,
        "end": 418
      },
      "declare": false,
      "start": 306,
      "end": 419
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 419
}
```
