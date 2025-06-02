__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 66,
  "end": 5396,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 66,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 75,
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 75,
        "end": 78,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 77,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
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
        "start": 81,
        "end": 117,
        "checkType": {
          "type": "TSTypeReference",
          "start": 81,
          "end": 82,
          "typeName": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 91,
          "end": 105,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 91,
              "end": 95,
              "value": {
                "raw": "*",
                "cooked": "*"
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 102,
              "end": 105,
              "value": {
                "raw": "*",
                "cooked": "*"
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 95,
              "end": 102,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 101,
                "end": 102,
                "name": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "decorators": [],
                  "name": "U",
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
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 108,
          "end": 109,
          "typeName": {
            "type": "Identifier",
            "start": 108,
            "end": 109,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 112,
          "end": 117
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 120,
      "end": 145,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 128,
        "decorators": [],
        "name": "T01",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 131,
        "end": 144,
        "typeName": {
          "type": "Identifier",
          "start": 131,
          "end": 135,
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 135,
          "end": 144,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 136,
              "end": 143,
              "literal": {
                "type": "Literal",
                "start": 136,
                "end": 143,
                "value": "hello",
                "raw": "'hello'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 146,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 151,
        "end": 154,
        "decorators": [],
        "name": "T02",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 157,
        "end": 172,
        "typeName": {
          "type": "Identifier",
          "start": 157,
          "end": 161,
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 161,
          "end": 172,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 162,
              "end": 171,
              "literal": {
                "type": "Literal",
                "start": 162,
                "end": 171,
                "value": "*hello*",
                "raw": "'*hello*'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 174,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 182,
        "decorators": [],
        "name": "T03",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 185,
        "end": 202,
        "typeName": {
          "type": "Identifier",
          "start": 185,
          "end": 189,
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 189,
          "end": 202,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 190,
              "end": 201,
              "literal": {
                "type": "Literal",
                "start": 190,
                "end": 201,
                "value": "**hello**",
                "raw": "'**hello**'"
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 204,
      "end": 235,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 212,
        "decorators": [],
        "name": "T04",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 215,
        "end": 234,
        "typeName": {
          "type": "Identifier",
          "start": 215,
          "end": 219,
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 219,
          "end": 234,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 220,
              "end": 233,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 220,
                  "end": 224,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 230,
                  "end": 233,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 224,
                  "end": 230
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
      "start": 236,
      "end": 267,
      "id": {
        "type": "Identifier",
        "start": 241,
        "end": 244,
        "decorators": [],
        "name": "T05",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 247,
        "end": 266,
        "typeName": {
          "type": "Identifier",
          "start": 247,
          "end": 251,
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 251,
          "end": 266,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 252,
              "end": 265,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 252,
                  "end": 256,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 262,
                  "end": 265,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 256,
                  "end": 262
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
      "start": 268,
      "end": 299,
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 276,
        "decorators": [],
        "name": "T06",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 279,
        "end": 298,
        "typeName": {
          "type": "Identifier",
          "start": 279,
          "end": 283,
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 283,
          "end": 298,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 284,
              "end": 297,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 284,
                  "end": 288,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 294,
                  "end": 297,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSBigIntKeyword",
                  "start": 288,
                  "end": 294
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
      "start": 300,
      "end": 328,
      "id": {
        "type": "Identifier",
        "start": 305,
        "end": 308,
        "decorators": [],
        "name": "T07",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 311,
        "end": 327,
        "typeName": {
          "type": "Identifier",
          "start": 311,
          "end": 315,
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 315,
          "end": 327,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 316,
              "end": 326,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 316,
                  "end": 320,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 323,
                  "end": 326,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSAnyKeyword",
                  "start": 320,
                  "end": 323
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
      "start": 329,
      "end": 362,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 337,
        "decorators": [],
        "name": "T08",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 340,
        "end": 361,
        "typeName": {
          "type": "Identifier",
          "start": 340,
          "end": 344,
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 344,
          "end": 361,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 345,
              "end": 360,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 345,
                  "end": 350,
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 356,
                  "end": 360,
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 350,
                  "end": 356
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
      "start": 363,
      "end": 407,
      "id": {
        "type": "Identifier",
        "start": 368,
        "end": 371,
        "decorators": [],
        "name": "T09",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 374,
        "end": 406,
        "typeName": {
          "type": "Identifier",
          "start": 374,
          "end": 378,
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 378,
          "end": 406,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 379,
              "end": 405,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 379,
                  "end": 384,
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 390,
                  "end": 395,
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 401,
                  "end": 405,
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 384,
                  "end": 390
                },
                {
                  "type": "TSStringKeyword",
                  "start": 395,
                  "end": 401
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
      "start": 408,
      "end": 450,
      "id": {
        "type": "Identifier",
        "start": 413,
        "end": 416,
        "decorators": [],
        "name": "T10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 419,
        "end": 449,
        "typeName": {
          "type": "Identifier",
          "start": 419,
          "end": 423,
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 423,
          "end": 449,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 424,
              "end": 448,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 424,
                  "end": 429,
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 444,
                  "end": 448,
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSUnionType",
                  "start": 429,
                  "end": 444,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 429,
                      "end": 432,
                      "literal": {
                        "type": "Literal",
                        "start": 429,
                        "end": 432,
                        "value": "a",
                        "raw": "'a'"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 435,
                      "end": 438,
                      "literal": {
                        "type": "Literal",
                        "start": 435,
                        "end": 438,
                        "value": "b",
                        "raw": "'b'"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 441,
                      "end": 444,
                      "literal": {
                        "type": "Literal",
                        "start": 441,
                        "end": 444,
                        "value": "c",
                        "raw": "'c'"
                      }
                    }
                  ]
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
      "start": 451,
      "end": 497,
      "id": {
        "type": "Identifier",
        "start": 456,
        "end": 459,
        "decorators": [],
        "name": "T11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 462,
        "end": 496,
        "typeName": {
          "type": "Identifier",
          "start": 462,
          "end": 466,
          "decorators": [],
          "name": "Foo1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 466,
          "end": 496,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 467,
              "end": 495,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 467,
                  "end": 472,
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 479,
                  "end": 484,
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 491,
                  "end": 495,
                  "value": {
                    "raw": "**",
                    "cooked": "**"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 472,
                  "end": 479
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 484,
                  "end": 491
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 499,
      "end": 557,
      "id": {
        "type": "Identifier",
        "start": 516,
        "end": 520,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 520,
        "end": 538,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 521,
            "end": 537,
            "name": {
              "type": "Identifier",
              "start": 521,
              "end": 522,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 531,
              "end": 537
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 539,
          "end": 552,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 542,
            "end": 552,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 544,
              "end": 552,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 544,
                  "end": 548,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 549,
                  "end": 552,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 548,
                  "end": 549,
                  "typeName": {
                    "type": "Identifier",
                    "start": 548,
                    "end": 549,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 553,
        "end": 556,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 555,
          "end": 556,
          "typeName": {
            "type": "Identifier",
            "start": 555,
            "end": 556,
            "decorators": [],
            "name": "V",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 559,
      "end": 924,
      "id": {
        "type": "Identifier",
        "start": 568,
        "end": 570,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 570,
        "end": 588,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 571,
            "end": 587,
            "name": {
              "type": "Identifier",
              "start": 571,
              "end": 572,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 581,
              "end": 587
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 589,
          "end": 598,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 590,
            "end": 598,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 592,
              "end": 598
            }
          }
        },
        {
          "type": "Identifier",
          "start": 600,
          "end": 609,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 601,
            "end": 609,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 603,
              "end": 609
            }
          }
        },
        {
          "type": "Identifier",
          "start": 611,
          "end": 621,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 612,
            "end": 621,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 614,
              "end": 621
            }
          }
        },
        {
          "type": "Identifier",
          "start": 623,
          "end": 627,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 624,
            "end": 627,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 626,
              "end": 627,
              "typeName": {
                "type": "Identifier",
                "start": 626,
                "end": 627,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 629,
        "end": 924,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 635,
            "end": 658,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 639,
                "end": 657,
                "id": {
                  "type": "Identifier",
                  "start": 639,
                  "end": 641,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 644,
                  "end": 657,
                  "callee": {
                    "type": "Identifier",
                    "start": 644,
                    "end": 648,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 649,
                      "end": 656,
                      "value": "hello",
                      "raw": "'hello'"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 673,
            "end": 698,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 677,
                "end": 697,
                "id": {
                  "type": "Identifier",
                  "start": 677,
                  "end": 679,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 682,
                  "end": 697,
                  "callee": {
                    "type": "Identifier",
                    "start": 682,
                    "end": 686,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 687,
                      "end": 696,
                      "value": "*hello*",
                      "raw": "'*hello*'"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 703,
            "end": 730,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 707,
                "end": 729,
                "id": {
                  "type": "Identifier",
                  "start": 707,
                  "end": 709,
                  "decorators": [],
                  "name": "x3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 712,
                  "end": 729,
                  "callee": {
                    "type": "Identifier",
                    "start": 712,
                    "end": 716,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 717,
                      "end": 728,
                      "value": "**hello**",
                      "raw": "'**hello**'"
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 735,
            "end": 768,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 739,
                "end": 767,
                "id": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 741,
                  "decorators": [],
                  "name": "x4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 744,
                  "end": 767,
                  "callee": {
                    "type": "Identifier",
                    "start": 744,
                    "end": 748,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "start": 749,
                      "end": 766,
                      "expression": {
                        "type": "TemplateLiteral",
                        "start": 749,
                        "end": 757,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 749,
                            "end": 753,
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 754,
                            "end": 757,
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": true
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "start": 753,
                            "end": 754,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 761,
                        "end": 766,
                        "typeName": {
                          "type": "Identifier",
                          "start": 761,
                          "end": 766,
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 773,
            "end": 806,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 777,
                "end": 805,
                "id": {
                  "type": "Identifier",
                  "start": 777,
                  "end": 779,
                  "decorators": [],
                  "name": "x5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 782,
                  "end": 805,
                  "callee": {
                    "type": "Identifier",
                    "start": 782,
                    "end": 786,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "start": 787,
                      "end": 804,
                      "expression": {
                        "type": "TemplateLiteral",
                        "start": 787,
                        "end": 795,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 787,
                            "end": 791,
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 792,
                            "end": 795,
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": true
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "start": 791,
                            "end": 792,
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 799,
                        "end": 804,
                        "typeName": {
                          "type": "Identifier",
                          "start": 799,
                          "end": 804,
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 811,
            "end": 844,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 815,
                "end": 843,
                "id": {
                  "type": "Identifier",
                  "start": 815,
                  "end": 817,
                  "decorators": [],
                  "name": "x6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 820,
                  "end": 843,
                  "callee": {
                    "type": "Identifier",
                    "start": 820,
                    "end": 824,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "start": 825,
                      "end": 842,
                      "expression": {
                        "type": "TemplateLiteral",
                        "start": 825,
                        "end": 833,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 825,
                            "end": 829,
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 830,
                            "end": 833,
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": true
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "start": 829,
                            "end": 830,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 837,
                        "end": 842,
                        "typeName": {
                          "type": "Identifier",
                          "start": 837,
                          "end": 842,
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 849,
            "end": 882,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 853,
                "end": 881,
                "id": {
                  "type": "Identifier",
                  "start": 853,
                  "end": 855,
                  "decorators": [],
                  "name": "x7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 858,
                  "end": 881,
                  "callee": {
                    "type": "Identifier",
                    "start": 858,
                    "end": 862,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "start": 863,
                      "end": 880,
                      "expression": {
                        "type": "TemplateLiteral",
                        "start": 863,
                        "end": 871,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 863,
                            "end": 867,
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 868,
                            "end": 871,
                            "value": {
                              "raw": "*",
                              "cooked": "*"
                            },
                            "tail": true
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "start": 867,
                            "end": 868,
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 875,
                        "end": 880,
                        "typeName": {
                          "type": "Identifier",
                          "start": 875,
                          "end": 880,
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 887,
            "end": 922,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 891,
                "end": 921,
                "id": {
                  "type": "Identifier",
                  "start": 891,
                  "end": 893,
                  "decorators": [],
                  "name": "x8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 896,
                  "end": 921,
                  "callee": {
                    "type": "Identifier",
                    "start": 896,
                    "end": 900,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "TSAsExpression",
                      "start": 901,
                      "end": 920,
                      "expression": {
                        "type": "TemplateLiteral",
                        "start": 901,
                        "end": 911,
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 901,
                            "end": 906,
                            "value": {
                              "raw": "**",
                              "cooked": "**"
                            },
                            "tail": false
                          },
                          {
                            "type": "TemplateElement",
                            "start": 907,
                            "end": 911,
                            "value": {
                              "raw": "**",
                              "cooked": "**"
                            },
                            "tail": true
                          }
                        ],
                        "expressions": [
                          {
                            "type": "Identifier",
                            "start": 906,
                            "end": 907,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 915,
                        "end": 920,
                        "typeName": {
                          "type": "Identifier",
                          "start": 915,
                          "end": 920,
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1062,
      "end": 1182,
      "id": {
        "type": "Identifier",
        "start": 1067,
        "end": 1072,
        "decorators": [],
        "name": "Parts",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1072,
        "end": 1075,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1073,
            "end": 1074,
            "name": {
              "type": "Identifier",
              "start": 1073,
              "end": 1074,
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
        "start": 1082,
        "end": 1181,
        "checkType": {
          "type": "TSTypeReference",
          "start": 1082,
          "end": 1083,
          "typeName": {
            "type": "Identifier",
            "start": 1082,
            "end": 1083,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 1092,
          "end": 1094,
          "literal": {
            "type": "Literal",
            "start": 1092,
            "end": 1094,
            "value": "",
            "raw": "''"
          }
        },
        "trueType": {
          "type": "TSTupleType",
          "start": 1097,
          "end": 1099,
          "elementTypes": []
        },
        "falseType": {
          "type": "TSConditionalType",
          "start": 1106,
          "end": 1181,
          "checkType": {
            "type": "TSTypeReference",
            "start": 1106,
            "end": 1107,
            "typeName": {
              "type": "Identifier",
              "start": 1106,
              "end": 1107,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "extendsType": {
            "type": "TSTemplateLiteralType",
            "start": 1116,
            "end": 1144,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 1116,
                "end": 1119,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 1129,
                "end": 1132,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 1142,
                "end": 1144,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSInferType",
                "start": 1119,
                "end": 1129,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1125,
                  "end": 1129,
                  "name": {
                    "type": "Identifier",
                    "start": 1125,
                    "end": 1129,
                    "decorators": [],
                    "name": "Head",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              },
              {
                "type": "TSInferType",
                "start": 1132,
                "end": 1142,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 1138,
                  "end": 1142,
                  "name": {
                    "type": "Identifier",
                    "start": 1138,
                    "end": 1142,
                    "decorators": [],
                    "name": "Tail",
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
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 1147,
            "end": 1169,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 1148,
                "end": 1152,
                "typeName": {
                  "type": "Identifier",
                  "start": 1148,
                  "end": 1152,
                  "decorators": [],
                  "name": "Head",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "TSRestType",
                "start": 1154,
                "end": 1168,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1157,
                  "end": 1168,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1157,
                    "end": 1162,
                    "decorators": [],
                    "name": "Parts",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1162,
                    "end": 1168,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1163,
                        "end": 1167,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1163,
                          "end": 1167,
                          "decorators": [],
                          "name": "Tail",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            ]
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1176,
            "end": 1181
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1184,
      "end": 1208,
      "id": {
        "type": "Identifier",
        "start": 1189,
        "end": 1192,
        "decorators": [],
        "name": "T20",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1195,
        "end": 1207,
        "typeName": {
          "type": "Identifier",
          "start": 1195,
          "end": 1200,
          "decorators": [],
          "name": "Parts",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1200,
          "end": 1207,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 1201,
              "end": 1206,
              "literal": {
                "type": "TemplateLiteral",
                "start": 1201,
                "end": 1206,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 1201,
                    "end": 1206,
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1209,
      "end": 1241,
      "id": {
        "type": "Identifier",
        "start": 1214,
        "end": 1217,
        "decorators": [],
        "name": "T21",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1220,
        "end": 1240,
        "typeName": {
          "type": "Identifier",
          "start": 1220,
          "end": 1225,
          "decorators": [],
          "name": "Parts",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1225,
          "end": 1240,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 1226,
              "end": 1239,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1226,
                  "end": 1230,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1236,
                  "end": 1239,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1230,
                  "end": 1236
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
      "start": 1242,
      "end": 1274,
      "id": {
        "type": "Identifier",
        "start": 1247,
        "end": 1250,
        "decorators": [],
        "name": "T22",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1253,
        "end": 1273,
        "typeName": {
          "type": "Identifier",
          "start": 1253,
          "end": 1258,
          "decorators": [],
          "name": "Parts",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1258,
          "end": 1273,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 1259,
              "end": 1272,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1259,
                  "end": 1263,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1269,
                  "end": 1272,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1263,
                  "end": 1269
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
      "start": 1275,
      "end": 1327,
      "id": {
        "type": "Identifier",
        "start": 1280,
        "end": 1283,
        "decorators": [],
        "name": "T23",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1286,
        "end": 1326,
        "typeName": {
          "type": "Identifier",
          "start": 1286,
          "end": 1291,
          "decorators": [],
          "name": "Parts",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1291,
          "end": 1326,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 1292,
              "end": 1325,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1292,
                  "end": 1296,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1302,
                  "end": 1306,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1312,
                  "end": 1316,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 1322,
                  "end": 1325,
                  "value": {
                    "raw": "*",
                    "cooked": "*"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1296,
                  "end": 1302
                },
                {
                  "type": "TSStringKeyword",
                  "start": 1306,
                  "end": 1312
                },
                {
                  "type": "TSBigIntKeyword",
                  "start": 1316,
                  "end": 1322
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1329,
      "end": 1699,
      "id": {
        "type": "Identifier",
        "start": 1338,
        "end": 1340,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1343,
        "end": 1699,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1349,
            "end": 1388,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1353,
                "end": 1387,
                "id": {
                  "type": "Identifier",
                  "start": 1353,
                  "end": 1387,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1354,
                    "end": 1387,
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "start": 1356,
                      "end": 1387,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 1356,
                          "end": 1359,
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 1365,
                          "end": 1369,
                          "value": {
                            "raw": ".",
                            "cooked": "."
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 1375,
                          "end": 1379,
                          "value": {
                            "raw": ".",
                            "cooked": "."
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 1385,
                          "end": 1387,
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1359,
                          "end": 1365
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1369,
                          "end": 1375
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1379,
                          "end": 1385
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1393,
            "end": 1405,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1393,
              "end": 1404,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1393,
                "end": 1394,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1397,
                "end": 1404,
                "value": "1.1.1",
                "raw": "'1.1.1'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1410,
            "end": 1441,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1410,
              "end": 1440,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1410,
                "end": 1411,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 1414,
                "end": 1440,
                "expression": {
                  "type": "Literal",
                  "start": 1414,
                  "end": 1421,
                  "value": "1.1.1",
                  "raw": "'1.1.1'"
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "start": 1425,
                  "end": 1440,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1425,
                      "end": 1432,
                      "value": {
                        "raw": "1.1.",
                        "cooked": "1.1."
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1438,
                      "end": 1440,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1432,
                      "end": 1438
                    }
                  ]
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1446,
            "end": 1477,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1446,
              "end": 1476,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1446,
                "end": 1447,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 1450,
                "end": 1476,
                "expression": {
                  "type": "Literal",
                  "start": 1450,
                  "end": 1457,
                  "value": "1.1.1",
                  "raw": "'1.1.1'"
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "start": 1461,
                  "end": 1476,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1461,
                      "end": 1466,
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1472,
                      "end": 1476,
                      "value": {
                        "raw": ".1",
                        "cooked": ".1"
                      },
                      "tail": true
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1466,
                      "end": 1472
                    }
                  ]
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1482,
            "end": 1521,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1482,
              "end": 1520,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1482,
                "end": 1483,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 1486,
                "end": 1520,
                "expression": {
                  "type": "Literal",
                  "start": 1486,
                  "end": 1493,
                  "value": "1.1.1",
                  "raw": "'1.1.1'"
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "start": 1497,
                  "end": 1520,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1497,
                      "end": 1502,
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1508,
                      "end": 1512,
                      "value": {
                        "raw": ".",
                        "cooked": "."
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1518,
                      "end": 1520,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1502,
                      "end": 1508
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1512,
                      "end": 1518
                    }
                  ]
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1526,
            "end": 1557,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1526,
              "end": 1556,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1526,
                "end": 1527,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 1530,
                "end": 1556,
                "expression": {
                  "type": "Literal",
                  "start": 1530,
                  "end": 1537,
                  "value": "1.1.1",
                  "raw": "'1.1.1'"
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "start": 1541,
                  "end": 1556,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1541,
                      "end": 1544,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1550,
                      "end": 1556,
                      "value": {
                        "raw": ".1.1",
                        "cooked": ".1.1"
                      },
                      "tail": true
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1544,
                      "end": 1550
                    }
                  ]
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1562,
            "end": 1601,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1562,
              "end": 1600,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1562,
                "end": 1563,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 1566,
                "end": 1600,
                "expression": {
                  "type": "Literal",
                  "start": 1566,
                  "end": 1573,
                  "value": "1.1.1",
                  "raw": "'1.1.1'"
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "start": 1577,
                  "end": 1600,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1577,
                      "end": 1580,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1586,
                      "end": 1592,
                      "value": {
                        "raw": ".1.",
                        "cooked": ".1."
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1598,
                      "end": 1600,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1580,
                      "end": 1586
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1592,
                      "end": 1598
                    }
                  ]
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1606,
            "end": 1645,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1606,
              "end": 1644,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1606,
                "end": 1607,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 1610,
                "end": 1644,
                "expression": {
                  "type": "Literal",
                  "start": 1610,
                  "end": 1617,
                  "value": "1.1.1",
                  "raw": "'1.1.1'"
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "start": 1621,
                  "end": 1644,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1621,
                      "end": 1624,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1630,
                      "end": 1634,
                      "value": {
                        "raw": ".",
                        "cooked": "."
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1640,
                      "end": 1644,
                      "value": {
                        "raw": ".1",
                        "cooked": ".1"
                      },
                      "tail": true
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1624,
                      "end": 1630
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1634,
                      "end": 1640
                    }
                  ]
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1650,
            "end": 1697,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1650,
              "end": 1696,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1650,
                "end": 1651,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 1654,
                "end": 1696,
                "expression": {
                  "type": "Literal",
                  "start": 1654,
                  "end": 1661,
                  "value": "1.1.1",
                  "raw": "'1.1.1'"
                },
                "typeAnnotation": {
                  "type": "TSTemplateLiteralType",
                  "start": 1665,
                  "end": 1696,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1665,
                      "end": 1668,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1674,
                      "end": 1678,
                      "value": {
                        "raw": ".",
                        "cooked": "."
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1684,
                      "end": 1688,
                      "value": {
                        "raw": ".",
                        "cooked": "."
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1694,
                      "end": 1696,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true
                    }
                  ],
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 1668,
                      "end": 1674
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1678,
                      "end": 1684
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 1688,
                      "end": 1694
                    }
                  ]
                }
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1701,
      "end": 2004,
      "id": {
        "type": "Identifier",
        "start": 1710,
        "end": 1712,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1712,
        "end": 1730,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1713,
            "end": 1729,
            "name": {
              "type": "Identifier",
              "start": 1713,
              "end": 1714,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 1723,
              "end": 1729
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1731,
          "end": 1740,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1732,
            "end": 1740,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 1734,
              "end": 1740
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1742,
          "end": 1751,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1743,
            "end": 1751,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 1745,
              "end": 1751
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1753,
          "end": 1763,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1754,
            "end": 1763,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 1756,
              "end": 1763
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1765,
          "end": 1769,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1766,
            "end": 1769,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1768,
              "end": 1769,
              "typeName": {
                "type": "Identifier",
                "start": 1768,
                "end": 1769,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1771,
        "end": 2004,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1777,
            "end": 1798,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1781,
                "end": 1797,
                "id": {
                  "type": "Identifier",
                  "start": 1781,
                  "end": 1797,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1782,
                    "end": 1797,
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "start": 1784,
                      "end": 1797,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 1784,
                          "end": 1788,
                          "value": {
                            "raw": "*",
                            "cooked": "*"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 1794,
                          "end": 1797,
                          "value": {
                            "raw": "*",
                            "cooked": "*"
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1788,
                          "end": 1794
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1803,
            "end": 1815,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1803,
              "end": 1814,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1803,
                "end": 1804,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1807,
                "end": 1814,
                "value": "hello",
                "raw": "'hello'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1830,
            "end": 1844,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1830,
              "end": 1843,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1830,
                "end": 1831,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1834,
                "end": 1843,
                "value": "*hello*",
                "raw": "'*hello*'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1849,
            "end": 1865,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1849,
              "end": 1864,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1849,
                "end": 1850,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 1853,
                "end": 1864,
                "value": "**hello**",
                "raw": "'**hello**'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1870,
            "end": 1892,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1870,
              "end": 1891,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1870,
                "end": 1871,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 1874,
                "end": 1891,
                "expression": {
                  "type": "TemplateLiteral",
                  "start": 1874,
                  "end": 1882,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1874,
                      "end": 1878,
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1879,
                      "end": 1882,
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 1878,
                      "end": 1879,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1886,
                  "end": 1891,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1886,
                    "end": 1891,
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1897,
            "end": 1919,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1897,
              "end": 1918,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1897,
                "end": 1898,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 1901,
                "end": 1918,
                "expression": {
                  "type": "TemplateLiteral",
                  "start": 1901,
                  "end": 1909,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1901,
                      "end": 1905,
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1906,
                      "end": 1909,
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 1905,
                      "end": 1906,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1913,
                  "end": 1918,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1913,
                    "end": 1918,
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1924,
            "end": 1946,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1924,
              "end": 1945,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1924,
                "end": 1925,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 1928,
                "end": 1945,
                "expression": {
                  "type": "TemplateLiteral",
                  "start": 1928,
                  "end": 1936,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1928,
                      "end": 1932,
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1933,
                      "end": 1936,
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 1932,
                      "end": 1933,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1940,
                  "end": 1945,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1940,
                    "end": 1945,
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1951,
            "end": 1973,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1951,
              "end": 1972,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1951,
                "end": 1952,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 1955,
                "end": 1972,
                "expression": {
                  "type": "TemplateLiteral",
                  "start": 1955,
                  "end": 1963,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1955,
                      "end": 1959,
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1960,
                      "end": 1963,
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 1959,
                      "end": 1960,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1967,
                  "end": 1972,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1967,
                    "end": 1972,
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 1978,
            "end": 2002,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1978,
              "end": 2001,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1978,
                "end": 1979,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 1982,
                "end": 2001,
                "expression": {
                  "type": "TemplateLiteral",
                  "start": 1982,
                  "end": 1992,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 1982,
                      "end": 1987,
                      "value": {
                        "raw": "**",
                        "cooked": "**"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 1988,
                      "end": 1992,
                      "value": {
                        "raw": "**",
                        "cooked": "**"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 1987,
                      "end": 1988,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1996,
                  "end": 2001,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1996,
                    "end": 2001,
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2006,
      "end": 2304,
      "id": {
        "type": "Identifier",
        "start": 2015,
        "end": 2017,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2017,
        "end": 2035,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2018,
            "end": 2034,
            "name": {
              "type": "Identifier",
              "start": 2018,
              "end": 2019,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 2028,
              "end": 2034
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2036,
          "end": 2045,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2037,
            "end": 2045,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2039,
              "end": 2045
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2047,
          "end": 2056,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2048,
            "end": 2056,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 2050,
              "end": 2056
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2058,
          "end": 2068,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2059,
            "end": 2068,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 2061,
              "end": 2068
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2070,
          "end": 2074,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2071,
            "end": 2074,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2073,
              "end": 2074,
              "typeName": {
                "type": "Identifier",
                "start": 2073,
                "end": 2074,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2076,
        "end": 2304,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2082,
            "end": 2103,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2086,
                "end": 2102,
                "id": {
                  "type": "Identifier",
                  "start": 2086,
                  "end": 2102,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2087,
                    "end": 2102,
                    "typeAnnotation": {
                      "type": "TSTemplateLiteralType",
                      "start": 2089,
                      "end": 2102,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 2089,
                          "end": 2093,
                          "value": {
                            "raw": "*",
                            "cooked": "*"
                          },
                          "tail": false
                        },
                        {
                          "type": "TemplateElement",
                          "start": 2099,
                          "end": 2102,
                          "value": {
                            "raw": "*",
                            "cooked": "*"
                          },
                          "tail": true
                        }
                      ],
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 2093,
                          "end": 2099
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 2108,
            "end": 2118,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2108,
              "end": 2117,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2108,
                "end": 2109,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2112,
                "end": 2117,
                "value": "123",
                "raw": "'123'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2133,
            "end": 2145,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2133,
              "end": 2144,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2133,
                "end": 2134,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2137,
                "end": 2144,
                "value": "*123*",
                "raw": "'*123*'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2150,
            "end": 2164,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2150,
              "end": 2163,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2150,
                "end": 2151,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 2154,
                "end": 2163,
                "value": "**123**",
                "raw": "'**123**'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2179,
            "end": 2201,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2179,
              "end": 2200,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2179,
                "end": 2180,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 2183,
                "end": 2200,
                "expression": {
                  "type": "TemplateLiteral",
                  "start": 2183,
                  "end": 2191,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 2183,
                      "end": 2187,
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 2188,
                      "end": 2191,
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 2187,
                      "end": 2188,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2195,
                  "end": 2200,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2195,
                    "end": 2200,
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2216,
            "end": 2238,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2216,
              "end": 2237,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2216,
                "end": 2217,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 2220,
                "end": 2237,
                "expression": {
                  "type": "TemplateLiteral",
                  "start": 2220,
                  "end": 2228,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 2220,
                      "end": 2224,
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 2225,
                      "end": 2228,
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 2224,
                      "end": 2225,
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2232,
                  "end": 2237,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2232,
                    "end": 2237,
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2243,
            "end": 2265,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2243,
              "end": 2264,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2243,
                "end": 2244,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 2247,
                "end": 2264,
                "expression": {
                  "type": "TemplateLiteral",
                  "start": 2247,
                  "end": 2255,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 2247,
                      "end": 2251,
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 2252,
                      "end": 2255,
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 2251,
                      "end": 2252,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2259,
                  "end": 2264,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2259,
                    "end": 2264,
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2280,
            "end": 2302,
            "expression": {
              "type": "AssignmentExpression",
              "start": 2280,
              "end": 2301,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 2280,
                "end": 2281,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "TSAsExpression",
                "start": 2284,
                "end": 2301,
                "expression": {
                  "type": "TemplateLiteral",
                  "start": 2284,
                  "end": 2292,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 2284,
                      "end": 2288,
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 2289,
                      "end": 2292,
                      "value": {
                        "raw": "*",
                        "cooked": "*"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 2288,
                      "end": 2289,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 2296,
                  "end": 2301,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2296,
                    "end": 2301,
                    "decorators": [],
                    "name": "const",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2328,
      "end": 2389,
      "id": {
        "type": "Identifier",
        "start": 2333,
        "end": 2334,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2334,
        "end": 2337,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2335,
            "end": 2336,
            "name": {
              "type": "Identifier",
              "start": 2335,
              "end": 2336,
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
        "start": 2340,
        "end": 2389,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2340,
          "end": 2341,
          "typeName": {
            "type": "Identifier",
            "start": 2340,
            "end": 2341,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 2350,
          "end": 2373,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2350,
              "end": 2353,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2360,
              "end": 2364,
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2371,
              "end": 2373,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 2353,
              "end": 2360,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2359,
                "end": 2360,
                "name": {
                  "type": "Identifier",
                  "start": 2359,
                  "end": 2360,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            {
              "type": "TSInferType",
              "start": 2364,
              "end": 2371,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2370,
                "end": 2371,
                "name": {
                  "type": "Identifier",
                  "start": 2370,
                  "end": 2371,
                  "decorators": [],
                  "name": "V",
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
        },
        "trueType": {
          "type": "TSUnionType",
          "start": 2376,
          "end": 2381,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2376,
              "end": 2377,
              "typeName": {
                "type": "Identifier",
                "start": 2376,
                "end": 2377,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 2380,
              "end": 2381,
              "typeName": {
                "type": "Identifier",
                "start": 2380,
                "end": 2381,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2384,
          "end": 2389
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2390,
      "end": 2414,
      "id": {
        "type": "Identifier",
        "start": 2395,
        "end": 2396,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2399,
        "end": 2413,
        "typeName": {
          "type": "Identifier",
          "start": 2399,
          "end": 2400,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2400,
          "end": 2413,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 2401,
              "end": 2412,
              "literal": {
                "type": "TemplateLiteral",
                "start": 2401,
                "end": 2412,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 2401,
                    "end": 2412,
                    "value": {
                      "raw": "test.1024",
                      "cooked": "test.1024"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2435,
      "end": 2464,
      "id": {
        "type": "Identifier",
        "start": 2440,
        "end": 2441,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2444,
        "end": 2463,
        "typeName": {
          "type": "Identifier",
          "start": 2444,
          "end": 2445,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2445,
          "end": 2463,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 2446,
              "end": 2462,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 2446,
                  "end": 2454,
                  "value": {
                    "raw": "test.",
                    "cooked": "test."
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 2460,
                  "end": 2462,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2454,
                  "end": 2460
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
      "start": 2491,
      "end": 2547,
      "id": {
        "type": "Identifier",
        "start": 2496,
        "end": 2497,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2497,
        "end": 2500,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2498,
            "end": 2499,
            "name": {
              "type": "Identifier",
              "start": 2498,
              "end": 2499,
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
        "start": 2503,
        "end": 2547,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2503,
          "end": 2504,
          "typeName": {
            "type": "Identifier",
            "start": 2503,
            "end": 2504,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 2513,
          "end": 2535,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2513,
              "end": 2516,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2523,
              "end": 2527,
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2533,
              "end": 2535,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 2516,
              "end": 2523,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2522,
                "end": 2523,
                "name": {
                  "type": "Identifier",
                  "start": 2522,
                  "end": 2523,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            {
              "type": "TSNumberKeyword",
              "start": 2527,
              "end": 2533
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 2538,
          "end": 2539,
          "typeName": {
            "type": "Identifier",
            "start": 2538,
            "end": 2539,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2542,
          "end": 2547
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2548,
      "end": 2572,
      "id": {
        "type": "Identifier",
        "start": 2553,
        "end": 2554,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2557,
        "end": 2571,
        "typeName": {
          "type": "Identifier",
          "start": 2557,
          "end": 2558,
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2558,
          "end": 2571,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 2559,
              "end": 2570,
              "literal": {
                "type": "TemplateLiteral",
                "start": 2559,
                "end": 2570,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 2559,
                    "end": 2570,
                    "value": {
                      "raw": "test.1024",
                      "cooked": "test.1024"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2584,
      "end": 2613,
      "id": {
        "type": "Identifier",
        "start": 2589,
        "end": 2590,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2593,
        "end": 2612,
        "typeName": {
          "type": "Identifier",
          "start": 2593,
          "end": 2594,
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2594,
          "end": 2612,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 2595,
              "end": 2611,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 2595,
                  "end": 2603,
                  "value": {
                    "raw": "test.",
                    "cooked": "test."
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 2609,
                  "end": 2611,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 2603,
                  "end": 2609
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
      "start": 2626,
      "end": 2687,
      "id": {
        "type": "Identifier",
        "start": 2631,
        "end": 2632,
        "decorators": [],
        "name": "G",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2632,
        "end": 2635,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2633,
            "end": 2634,
            "name": {
              "type": "Identifier",
              "start": 2633,
              "end": 2634,
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
        "start": 2638,
        "end": 2687,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2638,
          "end": 2639,
          "typeName": {
            "type": "Identifier",
            "start": 2638,
            "end": 2639,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 2648,
          "end": 2671,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2648,
              "end": 2651,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2658,
              "end": 2662,
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2669,
              "end": 2671,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 2651,
              "end": 2658,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2657,
                "end": 2658,
                "name": {
                  "type": "Identifier",
                  "start": 2657,
                  "end": 2658,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            {
              "type": "TSInferType",
              "start": 2662,
              "end": 2669,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2668,
                "end": 2669,
                "name": {
                  "type": "Identifier",
                  "start": 2668,
                  "end": 2669,
                  "decorators": [],
                  "name": "V",
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
        },
        "trueType": {
          "type": "TSUnionType",
          "start": 2674,
          "end": 2679,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 2674,
              "end": 2675,
              "typeName": {
                "type": "Identifier",
                "start": 2674,
                "end": 2675,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 2678,
              "end": 2679,
              "typeName": {
                "type": "Identifier",
                "start": 2678,
                "end": 2679,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2682,
          "end": 2687
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2688,
      "end": 2712,
      "id": {
        "type": "Identifier",
        "start": 2693,
        "end": 2694,
        "decorators": [],
        "name": "H",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2697,
        "end": 2711,
        "typeName": {
          "type": "Identifier",
          "start": 2697,
          "end": 2698,
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2698,
          "end": 2711,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 2699,
              "end": 2710,
              "literal": {
                "type": "TemplateLiteral",
                "start": 2699,
                "end": 2710,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 2699,
                    "end": 2710,
                    "value": {
                      "raw": "test.hoge",
                      "cooked": "test.hoge"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2733,
      "end": 2762,
      "id": {
        "type": "Identifier",
        "start": 2738,
        "end": 2739,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2742,
        "end": 2761,
        "typeName": {
          "type": "Identifier",
          "start": 2742,
          "end": 2743,
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2743,
          "end": 2761,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 2744,
              "end": 2760,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 2744,
                  "end": 2752,
                  "value": {
                    "raw": "test.",
                    "cooked": "test."
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 2758,
                  "end": 2760,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2752,
                  "end": 2758
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
      "start": 2811,
      "end": 2867,
      "id": {
        "type": "Identifier",
        "start": 2816,
        "end": 2817,
        "decorators": [],
        "name": "J",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2817,
        "end": 2820,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2818,
            "end": 2819,
            "name": {
              "type": "Identifier",
              "start": 2818,
              "end": 2819,
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
        "start": 2823,
        "end": 2867,
        "checkType": {
          "type": "TSTypeReference",
          "start": 2823,
          "end": 2824,
          "typeName": {
            "type": "Identifier",
            "start": 2823,
            "end": 2824,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTemplateLiteralType",
          "start": 2833,
          "end": 2855,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 2833,
              "end": 2836,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2843,
              "end": 2847,
              "value": {
                "raw": ".",
                "cooked": "."
              },
              "tail": false
            },
            {
              "type": "TemplateElement",
              "start": 2853,
              "end": 2855,
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true
            }
          ],
          "types": [
            {
              "type": "TSInferType",
              "start": 2836,
              "end": 2843,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 2842,
                "end": 2843,
                "name": {
                  "type": "Identifier",
                  "start": 2842,
                  "end": 2843,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            },
            {
              "type": "TSStringKeyword",
              "start": 2847,
              "end": 2853
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 2858,
          "end": 2859,
          "typeName": {
            "type": "Identifier",
            "start": 2858,
            "end": 2859,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 2862,
          "end": 2867
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2868,
      "end": 2892,
      "id": {
        "type": "Identifier",
        "start": 2873,
        "end": 2874,
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2877,
        "end": 2891,
        "typeName": {
          "type": "Identifier",
          "start": 2877,
          "end": 2878,
          "decorators": [],
          "name": "J",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2878,
          "end": 2891,
          "params": [
            {
              "type": "TSLiteralType",
              "start": 2879,
              "end": 2890,
              "literal": {
                "type": "TemplateLiteral",
                "start": 2879,
                "end": 2890,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 2879,
                    "end": 2890,
                    "value": {
                      "raw": "test.hoge",
                      "cooked": "test.hoge"
                    },
                    "tail": true
                  }
                ],
                "expressions": []
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2904,
      "end": 2933,
      "id": {
        "type": "Identifier",
        "start": 2909,
        "end": 2910,
        "decorators": [],
        "name": "L",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 2913,
        "end": 2932,
        "typeName": {
          "type": "Identifier",
          "start": 2913,
          "end": 2914,
          "decorators": [],
          "name": "J",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 2914,
          "end": 2932,
          "params": [
            {
              "type": "TSTemplateLiteralType",
              "start": 2915,
              "end": 2931,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 2915,
                  "end": 2923,
                  "value": {
                    "raw": "test.",
                    "cooked": "test."
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 2929,
                  "end": 2931,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 2923,
                  "end": 2929
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
      "start": 2969,
      "end": 3008,
      "id": {
        "type": "Identifier",
        "start": 2974,
        "end": 2983,
        "decorators": [],
        "name": "Templated",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 2986,
        "end": 3007,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 2986,
            "end": 2989,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 2995,
            "end": 2999,
            "value": {
              "raw": " ",
              "cooked": " "
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 3005,
            "end": 3007,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 2989,
            "end": 2995
          },
          {
            "type": "TSStringKeyword",
            "start": 2999,
            "end": 3005
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3010,
      "end": 3039,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3016,
          "end": 3038,
          "id": {
            "type": "Identifier",
            "start": 3016,
            "end": 3030,
            "decorators": [],
            "name": "value1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3022,
              "end": 3030,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3024,
                "end": 3030
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 3033,
            "end": 3038,
            "value": "abc",
            "raw": "\"abc\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3040,
      "end": 3095,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3046,
          "end": 3094,
          "id": {
            "type": "Identifier",
            "start": 3046,
            "end": 3067,
            "decorators": [],
            "name": "templated1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3056,
              "end": 3067,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3058,
                "end": 3067,
                "typeName": {
                  "type": "Identifier",
                  "start": 3058,
                  "end": 3067,
                  "decorators": [],
                  "name": "Templated",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 3070,
            "end": 3094,
            "expression": {
              "type": "TemplateLiteral",
              "start": 3070,
              "end": 3085,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 3070,
                  "end": 3073,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 3079,
                  "end": 3085,
                  "value": {
                    "raw": " abc",
                    "cooked": " abc"
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 3073,
                  "end": 3079,
                  "decorators": [],
                  "name": "value1",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3089,
              "end": 3094,
              "typeName": {
                "type": "Identifier",
                "start": 3089,
                "end": 3094,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3174,
      "end": 3195,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3180,
          "end": 3194,
          "id": {
            "type": "Identifier",
            "start": 3180,
            "end": 3186,
            "decorators": [],
            "name": "value2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 3189,
            "end": 3194,
            "value": "abc",
            "raw": "\"abc\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3196,
      "end": 3251,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3202,
          "end": 3250,
          "id": {
            "type": "Identifier",
            "start": 3202,
            "end": 3223,
            "decorators": [],
            "name": "templated2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3212,
              "end": 3223,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3214,
                "end": 3223,
                "typeName": {
                  "type": "Identifier",
                  "start": 3214,
                  "end": 3223,
                  "decorators": [],
                  "name": "Templated",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 3226,
            "end": 3250,
            "expression": {
              "type": "TemplateLiteral",
              "start": 3226,
              "end": 3241,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 3226,
                  "end": 3229,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 3235,
                  "end": 3241,
                  "value": {
                    "raw": " abc",
                    "cooked": " abc"
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 3229,
                  "end": 3235,
                  "decorators": [],
                  "name": "value2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3245,
              "end": 3250,
              "typeName": {
                "type": "Identifier",
                "start": 3245,
                "end": 3250,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3275,
      "end": 3305,
      "id": {
        "type": "Identifier",
        "start": 3280,
        "end": 3288,
        "decorators": [],
        "name": "Prefixes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 3291,
        "end": 3304,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 3291,
            "end": 3296,
            "literal": {
              "type": "Literal",
              "start": 3291,
              "end": 3296,
              "value": "foo",
              "raw": "\"foo\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3299,
            "end": 3304,
            "literal": {
              "type": "Literal",
              "start": 3299,
              "end": 3304,
              "value": "bar",
              "raw": "\"bar\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3307,
      "end": 3350,
      "id": {
        "type": "Identifier",
        "start": 3312,
        "end": 3325,
        "decorators": [],
        "name": "AllPrefixData",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 3328,
        "end": 3349,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 3328,
            "end": 3337,
            "literal": {
              "type": "Literal",
              "start": 3328,
              "end": 3337,
              "value": "foo:baz",
              "raw": "\"foo:baz\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 3340,
            "end": 3349,
            "literal": {
              "type": "Literal",
              "start": 3340,
              "end": 3349,
              "value": "bar:baz",
              "raw": "\"bar:baz\""
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3352,
      "end": 3401,
      "id": {
        "type": "Identifier",
        "start": 3357,
        "end": 3367,
        "decorators": [],
        "name": "PrefixData",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3367,
        "end": 3387,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3368,
            "end": 3386,
            "name": {
              "type": "Identifier",
              "start": 3368,
              "end": 3369,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3378,
              "end": 3386,
              "typeName": {
                "type": "Identifier",
                "start": 3378,
                "end": 3386,
                "decorators": [],
                "name": "Prefixes",
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
        "type": "TSTemplateLiteralType",
        "start": 3390,
        "end": 3400,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 3390,
            "end": 3393,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 3394,
            "end": 3400,
            "value": {
              "raw": ":baz",
              "cooked": ":baz"
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 3393,
            "end": 3394,
            "typeName": {
              "type": "Identifier",
              "start": 3393,
              "end": 3394,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 3403,
      "end": 3501,
      "id": {
        "type": "Identifier",
        "start": 3413,
        "end": 3418,
        "decorators": [],
        "name": "ITest",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3418,
        "end": 3479,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3419,
            "end": 3437,
            "name": {
              "type": "Identifier",
              "start": 3419,
              "end": 3420,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3429,
              "end": 3437,
              "typeName": {
                "type": "Identifier",
                "start": 3429,
                "end": 3437,
                "decorators": [],
                "name": "Prefixes",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3439,
            "end": 3478,
            "name": {
              "type": "Identifier",
              "start": 3439,
              "end": 3440,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3449,
              "end": 3462,
              "typeName": {
                "type": "Identifier",
                "start": 3449,
                "end": 3462,
                "decorators": [],
                "name": "AllPrefixData",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": {
              "type": "TSTypeReference",
              "start": 3465,
              "end": 3478,
              "typeName": {
                "type": "Identifier",
                "start": 3465,
                "end": 3475,
                "decorators": [],
                "name": "PrefixData",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3475,
                "end": 3478,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3476,
                    "end": 3477,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3476,
                      "end": 3477,
                      "decorators": [],
                      "name": "P",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 3480,
        "end": 3501,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 3486,
            "end": 3499,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3486,
              "end": 3490,
              "decorators": [],
              "name": "blah",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3490,
              "end": 3498,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3492,
                "end": 3498
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
      "start": 3525,
      "end": 3567,
      "id": {
        "type": "Identifier",
        "start": 3530,
        "end": 3536,
        "decorators": [],
        "name": "Schema",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3539,
        "end": 3566,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3541,
            "end": 3564,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 3541,
              "end": 3542,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3542,
              "end": 3564,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 3544,
                "end": 3564,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3546,
                    "end": 3562,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3546,
                      "end": 3547,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3547,
                      "end": 3562,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 3549,
                        "end": 3562,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 3551,
                            "end": 3560,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3551,
                              "end": 3552,
                              "decorators": [],
                              "name": "c",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3552,
                              "end": 3560,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3554,
                                "end": 3560
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
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
      "type": "TSDeclareFunction",
      "start": 3569,
      "end": 3646,
      "id": {
        "type": "Identifier",
        "start": 3586,
        "end": 3591,
        "decorators": [],
        "name": "chain",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3591,
        "end": 3615,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3592,
            "end": 3614,
            "name": {
              "type": "Identifier",
              "start": 3592,
              "end": 3593,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3602,
              "end": 3614,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3608,
                "end": 3614,
                "typeName": {
                  "type": "Identifier",
                  "start": 3608,
                  "end": 3614,
                  "decorators": [],
                  "name": "Schema",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3616,
          "end": 3638,
          "decorators": [],
          "name": "field",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3621,
            "end": 3638,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 3623,
              "end": 3638,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3623,
                  "end": 3624,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3623,
                    "end": 3624,
                    "decorators": [],
                    "name": "F",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTemplateLiteralType",
                  "start": 3627,
                  "end": 3638,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 3627,
                      "end": 3630,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 3631,
                      "end": 3635,
                      "value": {
                        "raw": ".",
                        "cooked": "."
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 3636,
                      "end": 3638,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true
                    }
                  ],
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 3630,
                      "end": 3631,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3630,
                        "end": 3631,
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    {
                      "type": "TSTypeReference",
                      "start": 3635,
                      "end": 3636,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3635,
                        "end": 3636,
                        "decorators": [],
                        "name": "F",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 3639,
        "end": 3645,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3641,
          "end": 3645
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 3648,
      "end": 3659,
      "expression": {
        "type": "CallExpression",
        "start": 3648,
        "end": 3658,
        "callee": {
          "type": "Identifier",
          "start": 3648,
          "end": 3653,
          "decorators": [],
          "name": "chain",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 3654,
            "end": 3657,
            "value": "a",
            "raw": "\"a\""
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 3683,
      "end": 3850,
      "id": {
        "type": "Identifier",
        "start": 3692,
        "end": 3695,
        "decorators": [],
        "name": "ff1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 3696,
          "end": 3714,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3697,
            "end": 3714,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 3699,
              "end": 3714,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 3699,
                  "end": 3706,
                  "value": {
                    "raw": "foo-",
                    "cooked": "foo-"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 3712,
                  "end": 3714,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3706,
                  "end": 3712
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3716,
          "end": 3734,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3717,
            "end": 3734,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 3719,
              "end": 3734,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 3719,
                  "end": 3722,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 3728,
                  "end": 3734,
                  "value": {
                    "raw": "-bar",
                    "cooked": "-bar"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3722,
                  "end": 3728
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3736,
          "end": 3754,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3737,
            "end": 3754,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 3739,
              "end": 3754,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 3739,
                  "end": 3746,
                  "value": {
                    "raw": "baz-",
                    "cooked": "baz-"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 3752,
                  "end": 3754,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3746,
                  "end": 3752
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3756,
        "end": 3850,
        "body": [
          {
            "type": "IfStatement",
            "start": 3762,
            "end": 3813,
            "test": {
              "type": "BinaryExpression",
              "start": 3766,
              "end": 3773,
              "left": {
                "type": "Identifier",
                "start": 3766,
                "end": 3767,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3772,
                "end": 3773,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3775,
              "end": 3813,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3785,
                  "end": 3787,
                  "expression": {
                    "type": "Identifier",
                    "start": 3785,
                    "end": 3786,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3818,
            "end": 3848,
            "test": {
              "type": "BinaryExpression",
              "start": 3822,
              "end": 3829,
              "left": {
                "type": "Identifier",
                "start": 3822,
                "end": 3823,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3828,
                "end": 3829,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3831,
              "end": 3848,
              "body": []
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3852,
      "end": 4017,
      "id": {
        "type": "Identifier",
        "start": 3861,
        "end": 3864,
        "decorators": [],
        "name": "ff2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3864,
        "end": 3882,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3865,
            "end": 3881,
            "name": {
              "type": "Identifier",
              "start": 3865,
              "end": 3866,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 3875,
              "end": 3881
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 3883,
          "end": 3896,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3884,
            "end": 3896,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 3886,
              "end": 3896,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 3886,
                  "end": 3893,
                  "value": {
                    "raw": "foo-",
                    "cooked": "foo-"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 3894,
                  "end": 3896,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3893,
                  "end": 3894,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3893,
                    "end": 3894,
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
        },
        {
          "type": "Identifier",
          "start": 3898,
          "end": 3911,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3899,
            "end": 3911,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 3901,
              "end": 3911,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 3901,
                  "end": 3904,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 3905,
                  "end": 3911,
                  "value": {
                    "raw": "-bar",
                    "cooked": "-bar"
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3904,
                  "end": 3905,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3904,
                    "end": 3905,
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
        },
        {
          "type": "Identifier",
          "start": 3913,
          "end": 3926,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3914,
            "end": 3926,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 3916,
              "end": 3926,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 3916,
                  "end": 3923,
                  "value": {
                    "raw": "baz-",
                    "cooked": "baz-"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 3924,
                  "end": 3926,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3923,
                  "end": 3924,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3923,
                    "end": 3924,
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
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3928,
        "end": 4017,
        "body": [
          {
            "type": "IfStatement",
            "start": 3934,
            "end": 3980,
            "test": {
              "type": "BinaryExpression",
              "start": 3938,
              "end": 3945,
              "left": {
                "type": "Identifier",
                "start": 3938,
                "end": 3939,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3944,
                "end": 3945,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3947,
              "end": 3980,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3957,
                  "end": 3959,
                  "expression": {
                    "type": "Identifier",
                    "start": 3957,
                    "end": 3958,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 3985,
            "end": 4015,
            "test": {
              "type": "BinaryExpression",
              "start": 3989,
              "end": 3996,
              "left": {
                "type": "Identifier",
                "start": 3989,
                "end": 3990,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 3995,
                "end": 3996,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 3998,
              "end": 4015,
              "body": []
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4019,
      "end": 4138,
      "id": {
        "type": "Identifier",
        "start": 4028,
        "end": 4031,
        "decorators": [],
        "name": "ff3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 4032,
          "end": 4041,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4033,
            "end": 4041,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 4035,
              "end": 4041
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4043,
          "end": 4069,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4044,
            "end": 4069,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4046,
              "end": 4069,
              "types": [
                {
                  "type": "TSTemplateLiteralType",
                  "start": 4046,
                  "end": 4061,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 4046,
                      "end": 4053,
                      "value": {
                        "raw": "foo-",
                        "cooked": "foo-"
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 4059,
                      "end": 4061,
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true
                    }
                  ],
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 4053,
                      "end": 4059
                    }
                  ]
                },
                {
                  "type": "TSLiteralType",
                  "start": 4064,
                  "end": 4069,
                  "literal": {
                    "type": "Literal",
                    "start": 4064,
                    "end": 4069,
                    "value": "bar",
                    "raw": "'bar'"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4071,
        "end": 4138,
        "body": [
          {
            "type": "IfStatement",
            "start": 4077,
            "end": 4136,
            "test": {
              "type": "BinaryExpression",
              "start": 4081,
              "end": 4088,
              "left": {
                "type": "Identifier",
                "start": 4081,
                "end": 4082,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 4087,
                "end": 4088,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4090,
              "end": 4136,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4100,
                  "end": 4102,
                  "expression": {
                    "type": "Identifier",
                    "start": 4100,
                    "end": 4101,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4140,
      "end": 4307,
      "id": {
        "type": "Identifier",
        "start": 4149,
        "end": 4152,
        "decorators": [],
        "name": "ff4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 4153,
          "end": 4162,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4154,
            "end": 4162,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 4156,
              "end": 4162
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4164,
          "end": 4182,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4165,
            "end": 4182,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 4167,
              "end": 4182,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 4167,
                  "end": 4174,
                  "value": {
                    "raw": "foo-",
                    "cooked": "foo-"
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 4180,
                  "end": 4182,
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4174,
                  "end": 4180
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4184,
        "end": 4307,
        "body": [
          {
            "type": "IfStatement",
            "start": 4190,
            "end": 4245,
            "test": {
              "type": "BinaryExpression",
              "start": 4194,
              "end": 4210,
              "left": {
                "type": "Identifier",
                "start": 4194,
                "end": 4195,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 4200,
                "end": 4210,
                "value": "foo-test",
                "raw": "'foo-test'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4212,
              "end": 4245,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4222,
                  "end": 4224,
                  "expression": {
                    "type": "Identifier",
                    "start": 4222,
                    "end": 4223,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 4250,
            "end": 4305,
            "test": {
              "type": "BinaryExpression",
              "start": 4254,
              "end": 4270,
              "left": {
                "type": "Identifier",
                "start": 4254,
                "end": 4255,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 4260,
                "end": 4270,
                "value": "foo-test",
                "raw": "'foo-test'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4272,
              "end": 4305,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4282,
                  "end": 4284,
                  "expression": {
                    "type": "Identifier",
                    "start": 4282,
                    "end": 4283,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4331,
      "end": 4435,
      "id": {
        "type": "Identifier",
        "start": 4336,
        "end": 4342,
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 4349,
        "end": 4434,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 4351,
            "end": 4380,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 4353,
                "end": 4378,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 4353,
                  "end": 4357,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4357,
                  "end": 4378,
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 4359,
                    "end": 4378,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 4359,
                        "end": 4362,
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 4368,
                        "end": 4378,
                        "value": {
                          "raw": "_REQUEST",
                          "cooked": "_REQUEST"
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4362,
                        "end": 4368
                      }
                    ]
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 4387,
            "end": 4434,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 4389,
                "end": 4415,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 4389,
                  "end": 4393,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4393,
                  "end": 4414,
                  "typeAnnotation": {
                    "type": "TSTemplateLiteralType",
                    "start": 4395,
                    "end": 4414,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 4395,
                        "end": 4398,
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 4404,
                        "end": 4414,
                        "value": {
                          "raw": "_SUCCESS",
                          "cooked": "_SUCCESS"
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4398,
                        "end": 4404
                      }
                    ]
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 4416,
                "end": 4432,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 4416,
                  "end": 4424,
                  "decorators": [],
                  "name": "response",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4424,
                  "end": 4432,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4426,
                    "end": 4432
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4437,
      "end": 4566,
      "id": {
        "type": "Identifier",
        "start": 4446,
        "end": 4453,
        "decorators": [],
        "name": "reducer",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 4454,
          "end": 4468,
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4460,
            "end": 4468,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4462,
              "end": 4468,
              "typeName": {
                "type": "Identifier",
                "start": 4462,
                "end": 4468,
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4470,
        "end": 4566,
        "body": [
          {
            "type": "IfStatement",
            "start": 4476,
            "end": 4564,
            "test": {
              "type": "BinaryExpression",
              "start": 4480,
              "end": 4509,
              "left": {
                "type": "MemberExpression",
                "start": 4480,
                "end": 4491,
                "object": {
                  "type": "Identifier",
                  "start": 4480,
                  "end": 4486,
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 4487,
                  "end": 4491,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 4496,
                "end": 4509,
                "value": "FOO_SUCCESS",
                "raw": "'FOO_SUCCESS'"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4511,
              "end": 4564,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4521,
                  "end": 4533,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4521,
                    "end": 4532,
                    "object": {
                      "type": "Identifier",
                      "start": 4521,
                      "end": 4527,
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4528,
                      "end": 4532,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 4542,
                  "end": 4558,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 4542,
                    "end": 4557,
                    "object": {
                      "type": "Identifier",
                      "start": 4542,
                      "end": 4548,
                      "decorators": [],
                      "name": "action",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 4549,
                      "end": 4557,
                      "decorators": [],
                      "name": "response",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4590,
      "end": 4639,
      "id": {
        "type": "Identifier",
        "start": 4595,
        "end": 4604,
        "decorators": [],
        "name": "DotString",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 4607,
        "end": 4638,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 4607,
            "end": 4610,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 4616,
            "end": 4620,
            "value": {
              "raw": ".",
              "cooked": "."
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 4626,
            "end": 4630,
            "value": {
              "raw": ".",
              "cooked": "."
            },
            "tail": false
          },
          {
            "type": "TemplateElement",
            "start": 4636,
            "end": 4638,
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 4610,
            "end": 4616
          },
          {
            "type": "TSStringKeyword",
            "start": 4620,
            "end": 4626
          },
          {
            "type": "TSStringKeyword",
            "start": 4630,
            "end": 4636
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 4641,
      "end": 4702,
      "id": {
        "type": "Identifier",
        "start": 4658,
        "end": 4666,
        "decorators": [],
        "name": "noSpread",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4666,
        "end": 4687,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4667,
            "end": 4686,
            "name": {
              "type": "Identifier",
              "start": 4667,
              "end": 4668,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 4677,
              "end": 4686,
              "typeName": {
                "type": "Identifier",
                "start": 4677,
                "end": 4686,
                "decorators": [],
                "name": "DotString",
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
      "params": [
        {
          "type": "Identifier",
          "start": 4688,
          "end": 4697,
          "decorators": [],
          "name": "args",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4692,
            "end": 4697,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 4694,
              "end": 4697,
              "elementType": {
                "type": "TSTypeReference",
                "start": 4694,
                "end": 4695,
                "typeName": {
                  "type": "Identifier",
                  "start": 4694,
                  "end": 4695,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4698,
        "end": 4701,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4700,
          "end": 4701,
          "typeName": {
            "type": "Identifier",
            "start": 4700,
            "end": 4701,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 4703,
      "end": 4765,
      "id": {
        "type": "Identifier",
        "start": 4720,
        "end": 4726,
        "decorators": [],
        "name": "spread",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4726,
        "end": 4747,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4727,
            "end": 4746,
            "name": {
              "type": "Identifier",
              "start": 4727,
              "end": 4728,
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 4737,
              "end": 4746,
              "typeName": {
                "type": "Identifier",
                "start": 4737,
                "end": 4746,
                "decorators": [],
                "name": "DotString",
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
      "params": [
        {
          "type": "RestElement",
          "start": 4748,
          "end": 4760,
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "start": 4751,
            "end": 4755,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4755,
            "end": 4760,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 4757,
              "end": 4760,
              "elementType": {
                "type": "TSTypeReference",
                "start": 4757,
                "end": 4758,
                "typeName": {
                  "type": "Identifier",
                  "start": 4757,
                  "end": 4758,
                  "decorators": [],
                  "name": "P",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4761,
        "end": 4764,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 4763,
          "end": 4764,
          "typeName": {
            "type": "Identifier",
            "start": 4763,
            "end": 4764,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 4767,
      "end": 4806,
      "expression": {
        "type": "CallExpression",
        "start": 4767,
        "end": 4805,
        "callee": {
          "type": "Identifier",
          "start": 4767,
          "end": 4775,
          "decorators": [],
          "name": "noSpread",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 4776,
            "end": 4804,
            "elements": [
              {
                "type": "TemplateLiteral",
                "start": 4777,
                "end": 4789,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 4777,
                    "end": 4782,
                    "value": {
                      "raw": "1.",
                      "cooked": "1."
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 4785,
                    "end": 4789,
                    "value": {
                      "raw": ".3",
                      "cooked": ".3"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 4782,
                    "end": 4785,
                    "value": "2",
                    "raw": "'2'"
                  }
                ]
              },
              {
                "type": "TemplateLiteral",
                "start": 4791,
                "end": 4803,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 4791,
                    "end": 4796,
                    "value": {
                      "raw": "1.",
                      "cooked": "1."
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 4799,
                    "end": 4803,
                    "value": {
                      "raw": ".4",
                      "cooked": ".4"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "start": 4796,
                    "end": 4799,
                    "value": "2",
                    "raw": "'2'"
                  }
                ]
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4807,
      "end": 4866,
      "expression": {
        "type": "CallExpression",
        "start": 4807,
        "end": 4865,
        "callee": {
          "type": "Identifier",
          "start": 4807,
          "end": 4815,
          "decorators": [],
          "name": "noSpread",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 4816,
            "end": 4864,
            "elements": [
              {
                "type": "TemplateLiteral",
                "start": 4817,
                "end": 4839,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 4817,
                    "end": 4822,
                    "value": {
                      "raw": "1.",
                      "cooked": "1."
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 4835,
                    "end": 4839,
                    "value": {
                      "raw": ".3",
                      "cooked": ".3"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "TSAsExpression",
                    "start": 4822,
                    "end": 4835,
                    "expression": {
                      "type": "Literal",
                      "start": 4822,
                      "end": 4825,
                      "value": "2",
                      "raw": "'2'"
                    },
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4829,
                      "end": 4835
                    }
                  }
                ]
              },
              {
                "type": "TemplateLiteral",
                "start": 4841,
                "end": 4863,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 4841,
                    "end": 4846,
                    "value": {
                      "raw": "1.",
                      "cooked": "1."
                    },
                    "tail": false
                  },
                  {
                    "type": "TemplateElement",
                    "start": 4859,
                    "end": 4863,
                    "value": {
                      "raw": ".4",
                      "cooked": ".4"
                    },
                    "tail": true
                  }
                ],
                "expressions": [
                  {
                    "type": "TSAsExpression",
                    "start": 4846,
                    "end": 4859,
                    "expression": {
                      "type": "Literal",
                      "start": 4846,
                      "end": 4849,
                      "value": "2",
                      "raw": "'2'"
                    },
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 4853,
                      "end": 4859
                    }
                  }
                ]
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4868,
      "end": 4903,
      "expression": {
        "type": "CallExpression",
        "start": 4868,
        "end": 4902,
        "callee": {
          "type": "Identifier",
          "start": 4868,
          "end": 4874,
          "decorators": [],
          "name": "spread",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 4875,
            "end": 4887,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 4875,
                "end": 4880,
                "value": {
                  "raw": "1.",
                  "cooked": "1."
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 4883,
                "end": 4887,
                "value": {
                  "raw": ".3",
                  "cooked": ".3"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "start": 4880,
                "end": 4883,
                "value": "2",
                "raw": "'2'"
              }
            ]
          },
          {
            "type": "TemplateLiteral",
            "start": 4889,
            "end": 4901,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 4889,
                "end": 4894,
                "value": {
                  "raw": "1.",
                  "cooked": "1."
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 4897,
                "end": 4901,
                "value": {
                  "raw": ".4",
                  "cooked": ".4"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "Literal",
                "start": 4894,
                "end": 4897,
                "value": "2",
                "raw": "'2'"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 4904,
      "end": 4959,
      "expression": {
        "type": "CallExpression",
        "start": 4904,
        "end": 4958,
        "callee": {
          "type": "Identifier",
          "start": 4904,
          "end": 4910,
          "decorators": [],
          "name": "spread",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "TemplateLiteral",
            "start": 4911,
            "end": 4933,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 4911,
                "end": 4916,
                "value": {
                  "raw": "1.",
                  "cooked": "1."
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 4929,
                "end": 4933,
                "value": {
                  "raw": ".3",
                  "cooked": ".3"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "TSAsExpression",
                "start": 4916,
                "end": 4929,
                "expression": {
                  "type": "Literal",
                  "start": 4916,
                  "end": 4919,
                  "value": "2",
                  "raw": "'2'"
                },
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4923,
                  "end": 4929
                }
              }
            ]
          },
          {
            "type": "TemplateLiteral",
            "start": 4935,
            "end": 4957,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 4935,
                "end": 4940,
                "value": {
                  "raw": "1.",
                  "cooked": "1."
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 4953,
                "end": 4957,
                "value": {
                  "raw": ".4",
                  "cooked": ".4"
                },
                "tail": true
              }
            ],
            "expressions": [
              {
                "type": "TSAsExpression",
                "start": 4940,
                "end": 4953,
                "expression": {
                  "type": "Literal",
                  "start": 4940,
                  "end": 4943,
                  "value": "2",
                  "raw": "'2'"
                },
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 4947,
                  "end": 4953
                }
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 4961,
      "end": 5164,
      "id": {
        "type": "Identifier",
        "start": 4970,
        "end": 4973,
        "decorators": [],
        "name": "ft1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4973,
        "end": 4991,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4974,
            "end": 4990,
            "name": {
              "type": "Identifier",
              "start": 4974,
              "end": 4975,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4984,
              "end": 4990
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4992,
          "end": 4996,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4993,
            "end": 4996,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4995,
              "end": 4996,
              "typeName": {
                "type": "Identifier",
                "start": 4995,
                "end": 4996,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4998,
          "end": 5013,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4999,
            "end": 5013,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5001,
              "end": 5013,
              "typeName": {
                "type": "Identifier",
                "start": 5001,
                "end": 5010,
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 5010,
                "end": 5013,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 5011,
                    "end": 5012,
                    "typeName": {
                      "type": "Identifier",
                      "start": 5011,
                      "end": 5012,
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
          }
        },
        {
          "type": "Identifier",
          "start": 5015,
          "end": 5040,
          "decorators": [],
          "name": "u1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5017,
            "end": 5040,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5019,
              "end": 5040,
              "typeName": {
                "type": "Identifier",
                "start": 5019,
                "end": 5028,
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 5028,
                "end": 5040,
                "params": [
                  {
                    "type": "TSTemplateLiteralType",
                    "start": 5029,
                    "end": 5039,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 5029,
                        "end": 5034,
                        "value": {
                          "raw": "1.",
                          "cooked": "1."
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 5035,
                        "end": 5039,
                        "value": {
                          "raw": ".3",
                          "cooked": ".3"
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 5034,
                        "end": 5035,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5034,
                          "end": 5035,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 5042,
          "end": 5067,
          "decorators": [],
          "name": "u2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5044,
            "end": 5067,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 5046,
              "end": 5067,
              "typeName": {
                "type": "Identifier",
                "start": 5046,
                "end": 5055,
                "decorators": [],
                "name": "Uppercase",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 5055,
                "end": 5067,
                "params": [
                  {
                    "type": "TSTemplateLiteralType",
                    "start": 5056,
                    "end": 5066,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 5056,
                        "end": 5061,
                        "value": {
                          "raw": "1.",
                          "cooked": "1."
                        },
                        "tail": false
                      },
                      {
                        "type": "TemplateElement",
                        "start": 5062,
                        "end": 5066,
                        "value": {
                          "raw": ".4",
                          "cooked": ".4"
                        },
                        "tail": true
                      }
                    ],
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 5061,
                        "end": 5062,
                        "typeName": {
                          "type": "Identifier",
                          "start": 5061,
                          "end": 5062,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 5069,
        "end": 5164,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 5075,
            "end": 5106,
            "expression": {
              "type": "CallExpression",
              "start": 5075,
              "end": 5105,
              "callee": {
                "type": "Identifier",
                "start": 5075,
                "end": 5081,
                "decorators": [],
                "name": "spread",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "start": 5082,
                  "end": 5092,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 5082,
                      "end": 5087,
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 5088,
                      "end": 5092,
                      "value": {
                        "raw": ".3",
                        "cooked": ".3"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 5087,
                      "end": 5088,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                {
                  "type": "TemplateLiteral",
                  "start": 5094,
                  "end": 5104,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 5094,
                      "end": 5099,
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 5100,
                      "end": 5104,
                      "value": {
                        "raw": ".4",
                        "cooked": ".4"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 5099,
                      "end": 5100,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 5111,
            "end": 5142,
            "expression": {
              "type": "CallExpression",
              "start": 5111,
              "end": 5141,
              "callee": {
                "type": "Identifier",
                "start": 5111,
                "end": 5117,
                "decorators": [],
                "name": "spread",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "start": 5118,
                  "end": 5128,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 5118,
                      "end": 5123,
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 5124,
                      "end": 5128,
                      "value": {
                        "raw": ".3",
                        "cooked": ".3"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 5123,
                      "end": 5124,
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                },
                {
                  "type": "TemplateLiteral",
                  "start": 5130,
                  "end": 5140,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 5130,
                      "end": 5135,
                      "value": {
                        "raw": "1.",
                        "cooked": "1."
                      },
                      "tail": false
                    },
                    {
                      "type": "TemplateElement",
                      "start": 5136,
                      "end": 5140,
                      "value": {
                        "raw": ".4",
                        "cooked": ".4"
                      },
                      "tail": true
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "start": 5135,
                      "end": 5136,
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ]
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 5147,
            "end": 5162,
            "expression": {
              "type": "CallExpression",
              "start": 5147,
              "end": 5161,
              "callee": {
                "type": "Identifier",
                "start": 5147,
                "end": 5153,
                "decorators": [],
                "name": "spread",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 5154,
                  "end": 5156,
                  "decorators": [],
                  "name": "u1",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 5158,
                  "end": 5160,
                  "decorators": [],
                  "name": "u2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 5188,
      "end": 5249,
      "id": {
        "type": "Identifier",
        "start": 5193,
        "end": 5197,
        "decorators": [],
        "name": "Boom",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 5200,
        "end": 5248,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 5200,
            "end": 5205,
            "literal": {
              "type": "Literal",
              "start": 5200,
              "end": 5205,
              "value": "abc",
              "raw": "'abc'"
            }
          },
          {
            "type": "TSLiteralType",
            "start": 5208,
            "end": 5213,
            "literal": {
              "type": "Literal",
              "start": 5208,
              "end": 5213,
              "value": "def",
              "raw": "'def'"
            }
          },
          {
            "type": "TSTemplateLiteralType",
            "start": 5216,
            "end": 5228,
            "quasis": [
              {
                "type": "TemplateElement",
                "start": 5216,
                "end": 5220,
                "value": {
                  "raw": "a",
                  "cooked": "a"
                },
                "tail": false
              },
              {
                "type": "TemplateElement",
                "start": 5226,
                "end": 5228,
                "value": {
                  "raw": "",
                  "cooked": ""
                },
                "tail": true
              }
            ],
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 5220,
                "end": 5226
              }
            ]
          },
          {
            "type": "TSTypeReference",
            "start": 5231,
            "end": 5248,
            "typeName": {
              "type": "Identifier",
              "start": 5231,
              "end": 5240,
              "decorators": [],
              "name": "Lowercase",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 5240,
              "end": 5248,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 5241,
                  "end": 5247
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 5273,
      "end": 5396,
      "id": {
        "type": "Identifier",
        "start": 5282,
        "end": 5283,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 5283,
        "end": 5307,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 5284,
            "end": 5306,
            "name": {
              "type": "Identifier",
              "start": 5284,
              "end": 5285,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 5294,
              "end": 5306,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 5295,
                  "end": 5305,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 5295,
                    "end": 5297,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5297,
                    "end": 5305,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5299,
                      "end": 5305
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 5310,
        "end": 5396,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 5316,
            "end": 5365,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 5320,
                "end": 5364,
                "id": {
                  "type": "Identifier",
                  "start": 5320,
                  "end": 5364,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 5321,
                    "end": 5364,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 5323,
                      "end": 5364,
                      "types": [
                        {
                          "type": "TSIntersectionType",
                          "start": 5323,
                          "end": 5339,
                          "types": [
                            {
                              "type": "TSTypeOperator",
                              "start": 5323,
                              "end": 5330,
                              "operator": "keyof",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 5329,
                                "end": 5330,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 5329,
                                  "end": 5330,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 5333,
                              "end": 5339
                            }
                          ]
                        },
                        {
                          "type": "TSTemplateLiteralType",
                          "start": 5342,
                          "end": 5364,
                          "quasis": [
                            {
                              "type": "TemplateElement",
                              "start": 5342,
                              "end": 5346,
                              "value": {
                                "raw": "-",
                                "cooked": "-"
                              },
                              "tail": false
                            },
                            {
                              "type": "TemplateElement",
                              "start": 5362,
                              "end": 5364,
                              "value": {
                                "raw": "",
                                "cooked": ""
                              },
                              "tail": true
                            }
                          ],
                          "types": [
                            {
                              "type": "TSIntersectionType",
                              "start": 5346,
                              "end": 5362,
                              "types": [
                                {
                                  "type": "TSTypeOperator",
                                  "start": 5346,
                                  "end": 5353,
                                  "operator": "keyof",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 5352,
                                    "end": 5353,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 5352,
                                      "end": 5353,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null
                                  }
                                },
                                {
                                  "type": "TSStringKeyword",
                                  "start": 5356,
                                  "end": 5362
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 5370,
            "end": 5379,
            "expression": {
              "type": "AssignmentExpression",
              "start": 5370,
              "end": 5378,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 5370,
                "end": 5371,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 5374,
                "end": 5378,
                "value": "id",
                "raw": "\"id\""
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 5384,
            "end": 5394,
            "expression": {
              "type": "AssignmentExpression",
              "start": 5384,
              "end": 5393,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 5384,
                "end": 5385,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 5388,
                "end": 5393,
                "value": "-id",
                "raw": "\"-id\""
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
