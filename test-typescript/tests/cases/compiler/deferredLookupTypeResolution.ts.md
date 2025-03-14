__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 697,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 151,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 41,
        "decorators": [],
        "name": "StringContains",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 80,
        "end": 151,
        "indexType": {
          "type": "TSTypeReference",
          "start": 149,
          "end": 150,
          "typeName": {
            "type": "Identifier",
            "start": 149,
            "end": 150,
            "decorators": [],
            "name": "L",
            "optional": false
          }
        },
        "objectType": {
          "type": "TSIntersectionType",
          "start": 86,
          "end": 144,
          "types": [
            {
              "type": "TSMappedType",
              "start": 86,
              "end": 111,
              "constraint": {
                "type": "TSTypeReference",
                "start": 94,
                "end": 95,
                "typeName": {
                  "type": "Identifier",
                  "start": 94,
                  "end": 95,
                  "decorators": [],
                  "name": "S",
                  "optional": false
                }
              },
              "key": {
                "type": "Identifier",
                "start": 89,
                "end": 90,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 103,
                "end": 109,
                "literal": {
                  "type": "Literal",
                  "start": 103,
                  "end": 109,
                  "raw": "'true'",
                  "value": "true"
                }
              }
            },
            {
              "type": "TSTypeLiteral",
              "start": 118,
              "end": 144,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 120,
                  "end": 142,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 121,
                      "end": 132,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 124,
                        "end": 132,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 126,
                          "end": 132
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 133,
                    "end": 142,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 135,
                      "end": 142,
                      "literal": {
                        "type": "Literal",
                        "start": 135,
                        "end": 142,
                        "raw": "'false'",
                        "value": "false"
                      }
                    }
                  }
                }
              ]
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 41,
        "end": 77,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 58,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 52,
              "end": 58
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
              "decorators": [],
              "name": "S",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 60,
            "end": 76,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 70,
              "end": 76
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 60,
              "end": 61,
              "decorators": [],
              "name": "L",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 153,
      "end": 237,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 170,
        "decorators": [],
        "name": "ObjectHasKey",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 194,
        "end": 237,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 208,
          "end": 237,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 209,
              "end": 233,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 216,
                "end": 233,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 217,
                    "end": 224,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 223,
                      "end": 224,
                      "typeName": {
                        "type": "Identifier",
                        "start": 223,
                        "end": 224,
                        "decorators": [],
                        "name": "O",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 226,
                    "end": 232
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 209,
                "end": 216,
                "decorators": [],
                "name": "Extract",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 235,
              "end": 236,
              "typeName": {
                "type": "Identifier",
                "start": 235,
                "end": 236,
                "decorators": [],
                "name": "L",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 194,
          "end": 208,
          "decorators": [],
          "name": "StringContains",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 170,
        "end": 191,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 171,
            "end": 172,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 171,
              "end": 172,
              "decorators": [],
              "name": "O",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 174,
            "end": 190,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 184,
              "end": 190
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "L",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 239,
      "end": 276,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 244,
        "end": 249,
        "decorators": [],
        "name": "First",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 255,
        "end": 275,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 267,
          "end": 275,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 268,
              "end": 269,
              "typeName": {
                "type": "Identifier",
                "start": 268,
                "end": 269,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            {
              "type": "TSLiteralType",
              "start": 271,
              "end": 274,
              "literal": {
                "type": "Literal",
                "start": 271,
                "end": 274,
                "raw": "'0'",
                "value": "0"
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 255,
          "end": 267,
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 249,
        "end": 252,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 250,
            "end": 251,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
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
      "start": 301,
      "end": 344,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 306,
        "end": 308,
        "decorators": [],
        "name": "T1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 311,
        "end": 343,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 323,
          "end": 343,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 324,
              "end": 337,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 326,
                  "end": 335,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 327,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 327,
                    "end": 335,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 329,
                      "end": 335
                    }
                  }
                }
              ]
            },
            {
              "type": "TSLiteralType",
              "start": 339,
              "end": 342,
              "literal": {
                "type": "Literal",
                "start": 339,
                "end": 342,
                "raw": "'a'",
                "value": "a"
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 311,
          "end": 323,
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 356,
      "end": 399,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 363,
        "decorators": [],
        "name": "T2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 366,
        "end": 398,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 378,
          "end": 398,
          "params": [
            {
              "type": "TSTypeLiteral",
              "start": 379,
              "end": 392,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 381,
                  "end": 390,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 381,
                    "end": 382,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 382,
                    "end": 390,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 384,
                      "end": 390
                    }
                  }
                }
              ]
            },
            {
              "type": "TSLiteralType",
              "start": 394,
              "end": 397,
              "literal": {
                "type": "Literal",
                "start": 394,
                "end": 397,
                "raw": "'b'",
                "value": "b"
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 366,
          "end": 378,
          "decorators": [],
          "name": "ObjectHasKey",
          "optional": false
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 492,
      "end": 583,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 509,
        "end": 511,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 548,
          "end": 552,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 549,
            "end": 552,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 551,
              "end": 552,
              "typeName": {
                "type": "Identifier",
                "start": 551,
                "end": 552,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 554,
          "end": 558,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 555,
            "end": 558,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 557,
              "end": 558,
              "typeName": {
                "type": "Identifier",
                "start": 557,
                "end": 558,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 559,
        "end": 582,
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 561,
          "end": 582,
          "constraint": {
            "type": "TSUnionType",
            "start": 569,
            "end": 574,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 569,
                "end": 570,
                "typeName": {
                  "type": "Identifier",
                  "start": 569,
                  "end": 570,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 573,
                "end": 574,
                "typeName": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 574,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            ]
          },
          "key": {
            "type": "Identifier",
            "start": 564,
            "end": 565,
            "decorators": [],
            "name": "P",
            "optional": false
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 577,
            "end": 580
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 511,
        "end": 547,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 512,
            "end": 528,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 522,
              "end": 528
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 512,
              "end": 513,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 530,
            "end": 546,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 540,
              "end": 546
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 530,
              "end": 531,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 585,
      "end": 647,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 621,
        "end": 647,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 627,
            "end": 645,
            "argument": {
              "type": "CallExpression",
              "start": 634,
              "end": 644,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 637,
                  "end": 638,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                {
                  "type": "Literal",
                  "start": 640,
                  "end": 643,
                  "raw": "'x'",
                  "value": "x"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 634,
                "end": 636,
                "decorators": [],
                "name": "f1",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 594,
        "end": 596,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 615,
          "end": 619,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 616,
            "end": 619,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 618,
              "end": 619,
              "typeName": {
                "type": "Identifier",
                "start": 618,
                "end": 619,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 596,
        "end": 614,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 597,
            "end": 613,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 607,
              "end": 613
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 597,
              "end": 598,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 649,
      "end": 696,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 675,
        "end": 696,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 681,
            "end": 694,
            "argument": {
              "type": "CallExpression",
              "start": 688,
              "end": 693,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 691,
                  "end": 692,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 688,
                "end": 690,
                "decorators": [],
                "name": "f2",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 658,
        "end": 660,
        "decorators": [],
        "name": "f3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 661,
          "end": 673,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 662,
            "end": 673,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 664,
              "end": 673,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 664,
                  "end": 667,
                  "literal": {
                    "type": "Literal",
                    "start": 664,
                    "end": 667,
                    "raw": "'a'",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 670,
                  "end": 673,
                  "literal": {
                    "type": "Literal",
                    "start": 670,
                    "end": 673,
                    "raw": "'b'",
                    "value": "b"
                  }
                }
              ]
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
