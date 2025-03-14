objectTypesIdentityWithConstructSignaturesDifferingParamCounts.ts
```json
{
  "type": "Program",
  "start": 44,
  "end": 1644,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 110,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 110,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 108,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 69,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 69,
              "end": 108,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 108,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 94,
                    "end": 106,
                    "argument": {
                      "type": "Literal",
                      "start": 101,
                      "end": 105,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 70,
                  "end": 79,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 71,
                    "end": 79,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 73,
                      "end": 79
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 81,
                  "end": 90,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 84,
                      "end": 90
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 112,
      "end": 171,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 123,
        "end": 171,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 129,
            "end": 169,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 140,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 169,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 153,
                "end": 169,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 155,
                    "end": 167,
                    "argument": {
                      "type": "Literal",
                      "start": 162,
                      "end": 166,
                      "raw": "null",
                      "value": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 141,
                  "end": 145,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 145,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 144,
                      "end": 145,
                      "typeName": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 145,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 147,
                  "end": 151,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 148,
                    "end": 151,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 150,
                      "end": 151,
                      "typeName": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 151,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 119,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 119,
        "end": 122,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 120,
            "end": 121,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
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
      "type": "TSInterfaceDeclaration",
      "start": 173,
      "end": 216,
      "body": {
        "type": "TSInterfaceBody",
        "start": 185,
        "end": 216,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 191,
            "end": 214,
            "params": [
              {
                "type": "Identifier",
                "start": 195,
                "end": 204,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 196,
                  "end": 204,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 198,
                    "end": 204
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 205,
              "end": 213,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 207,
                "end": 213
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 184,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 218,
      "end": 255,
      "body": {
        "type": "TSInterfaceBody",
        "start": 234,
        "end": 255,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 240,
            "end": 253,
            "params": [
              {
                "type": "Identifier",
                "start": 244,
                "end": 248,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 245,
                  "end": 248,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 247,
                    "end": 248,
                    "typeName": {
                      "type": "Identifier",
                      "start": 247,
                      "end": 248,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 249,
              "end": 252,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 251,
                "end": 252,
                "typeName": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 252,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 230,
        "decorators": [],
        "name": "I2",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 230,
        "end": 233,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 231,
            "end": 232,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
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
      "type": "VariableDeclaration",
      "start": 257,
      "end": 301,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 261,
          "end": 301,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 301,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 262,
              "end": 301,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 264,
                "end": 301,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 266,
                    "end": 299,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 270,
                        "end": 279,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 271,
                          "end": 279,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 273,
                            "end": 279
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 281,
                        "end": 290,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 282,
                          "end": 290,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 284,
                            "end": 290
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 291,
                      "end": 299,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 293,
                        "end": 299
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 344,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 343,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 307,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 310,
            "end": 343,
            "properties": [
              {
                "type": "Property",
                "start": 312,
                "end": 341,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 315,
                  "decorators": [],
                  "name": "new",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 315,
                  "end": 341,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 327,
                    "end": 341,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 329,
                        "end": 339,
                        "argument": {
                          "type": "Literal",
                          "start": 336,
                          "end": 338,
                          "raw": "''",
                          "value": ""
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 316,
                      "end": 325,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 317,
                        "end": 325,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 319,
                          "end": 325
                        }
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 396,
      "end": 417,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 405,
        "end": 410,
        "decorators": [],
        "name": "foo1b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 411,
          "end": 415,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 412,
            "end": 415,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 414,
              "end": 415,
              "typeName": {
                "type": "Identifier",
                "start": 414,
                "end": 415,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 418,
      "end": 439,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 427,
        "end": 432,
        "decorators": [],
        "name": "foo1b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 433,
          "end": 437,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 434,
            "end": 437,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 436,
              "end": 437,
              "typeName": {
                "type": "Identifier",
                "start": 436,
                "end": 437,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 449,
      "end": 475,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 472,
        "end": 475,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 463,
        "decorators": [],
        "name": "foo1b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 464,
          "end": 470,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 465,
            "end": 470,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 467,
              "end": 470
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 477,
      "end": 506,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 486,
        "end": 491,
        "decorators": [],
        "name": "foo1c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 492,
          "end": 504,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 493,
            "end": 504,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 495,
              "end": 504,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 496,
                "end": 504,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 497,
                    "end": 503
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 495,
                "end": 496,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 507,
      "end": 536,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 516,
        "end": 521,
        "decorators": [],
        "name": "foo1c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 522,
          "end": 534,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 523,
            "end": 534,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 525,
              "end": 534,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 526,
                "end": 534,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 527,
                    "end": 533
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 525,
                "end": 526,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 546,
      "end": 572,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 569,
        "end": 572,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 555,
        "end": 560,
        "decorators": [],
        "name": "foo1c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 561,
          "end": 567,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 562,
            "end": 567,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 564,
              "end": 567
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 574,
      "end": 594,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 583,
        "end": 587,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 588,
          "end": 592,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 589,
            "end": 592,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 591,
              "end": 592,
              "typeName": {
                "type": "Identifier",
                "start": 591,
                "end": 592,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 595,
      "end": 615,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 604,
        "end": 608,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 609,
          "end": 613,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 610,
            "end": 613,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 612,
              "end": 613,
              "typeName": {
                "type": "Identifier",
                "start": 612,
                "end": 613,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 625,
      "end": 650,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 647,
        "end": 650,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 634,
        "end": 638,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 639,
          "end": 645,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 640,
            "end": 645,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 642,
              "end": 645
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 652,
      "end": 679,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 661,
        "end": 665,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 666,
          "end": 677,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 667,
            "end": 677,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 669,
              "end": 677,
              "exprName": {
                "type": "Identifier",
                "start": 676,
                "end": 677,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 680,
      "end": 707,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 689,
        "end": 693,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 694,
          "end": 705,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 695,
            "end": 705,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 697,
              "end": 705,
              "exprName": {
                "type": "Identifier",
                "start": 704,
                "end": 705,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 717,
      "end": 742,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 739,
        "end": 742,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 726,
        "end": 730,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 731,
          "end": 737,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 732,
            "end": 737,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 734,
              "end": 737
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 744,
      "end": 771,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 753,
        "end": 757,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 758,
          "end": 769,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 759,
            "end": 769,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 761,
              "end": 769,
              "exprName": {
                "type": "Identifier",
                "start": 768,
                "end": 769,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 772,
      "end": 799,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 781,
        "end": 785,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 786,
          "end": 797,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 787,
            "end": 797,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 789,
              "end": 797,
              "exprName": {
                "type": "Identifier",
                "start": 796,
                "end": 797,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 809,
      "end": 834,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 831,
        "end": 834,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 818,
        "end": 822,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 823,
          "end": 829,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 824,
            "end": 829,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 826,
              "end": 829
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 836,
      "end": 856,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 845,
        "end": 849,
        "decorators": [],
        "name": "foo8",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 850,
          "end": 854,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 851,
            "end": 854,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 853,
              "end": 854,
              "typeName": {
                "type": "Identifier",
                "start": 853,
                "end": 854,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 857,
      "end": 877,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 866,
        "end": 870,
        "decorators": [],
        "name": "foo8",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 871,
          "end": 875,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 872,
            "end": 875,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 874,
              "end": 875,
              "typeName": {
                "type": "Identifier",
                "start": 874,
                "end": 875,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 884,
      "end": 909,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 906,
        "end": 909,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 893,
        "end": 897,
        "decorators": [],
        "name": "foo8",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 898,
          "end": 904,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 899,
            "end": 904,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 901,
              "end": 904
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 911,
      "end": 931,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 920,
        "end": 924,
        "decorators": [],
        "name": "foo9",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 925,
          "end": 929,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 926,
            "end": 929,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 928,
              "end": 929,
              "typeName": {
                "type": "Identifier",
                "start": 928,
                "end": 929,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 932,
      "end": 960,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 941,
        "end": 945,
        "decorators": [],
        "name": "foo9",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 946,
          "end": 958,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 947,
            "end": 958,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 949,
              "end": 958,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 950,
                "end": 958,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 951,
                    "end": 957
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 949,
                "end": 950,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1000,
      "end": 1025,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1022,
        "end": 1025,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1009,
        "end": 1013,
        "decorators": [],
        "name": "foo9",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1014,
          "end": 1020,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1015,
            "end": 1020,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1017,
              "end": 1020
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1027,
      "end": 1048,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1036,
        "end": 1041,
        "decorators": [],
        "name": "foo10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1042,
          "end": 1046,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1043,
            "end": 1046,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1045,
              "end": 1046,
              "typeName": {
                "type": "Identifier",
                "start": 1045,
                "end": 1046,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1049,
      "end": 1077,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1058,
        "end": 1063,
        "decorators": [],
        "name": "foo10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1064,
          "end": 1075,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1065,
            "end": 1075,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1067,
              "end": 1075,
              "exprName": {
                "type": "Identifier",
                "start": 1074,
                "end": 1075,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1084,
      "end": 1110,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1107,
        "end": 1110,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1093,
        "end": 1098,
        "decorators": [],
        "name": "foo10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1099,
          "end": 1105,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1100,
            "end": 1105,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1102,
              "end": 1105
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1112,
      "end": 1133,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1121,
        "end": 1126,
        "decorators": [],
        "name": "foo11",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1127,
          "end": 1131,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1128,
            "end": 1131,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1130,
              "end": 1131,
              "typeName": {
                "type": "Identifier",
                "start": 1130,
                "end": 1131,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1134,
      "end": 1162,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1143,
        "end": 1148,
        "decorators": [],
        "name": "foo11",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1149,
          "end": 1160,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1150,
            "end": 1160,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1152,
              "end": 1160,
              "exprName": {
                "type": "Identifier",
                "start": 1159,
                "end": 1160,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1169,
      "end": 1195,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1192,
        "end": 1195,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1178,
        "end": 1183,
        "decorators": [],
        "name": "foo11",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1184,
          "end": 1190,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1185,
            "end": 1190,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1187,
              "end": 1190
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1197,
      "end": 1218,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1206,
        "end": 1211,
        "decorators": [],
        "name": "foo12",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1212,
          "end": 1216,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1213,
            "end": 1216,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1215,
              "end": 1216,
              "typeName": {
                "type": "Identifier",
                "start": 1215,
                "end": 1216,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1219,
      "end": 1248,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1228,
        "end": 1233,
        "decorators": [],
        "name": "foo12",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1234,
          "end": 1246,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1235,
            "end": 1246,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1237,
              "end": 1246,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1238,
                "end": 1246,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1239,
                    "end": 1245
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1237,
                "end": 1238,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1255,
      "end": 1281,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1278,
        "end": 1281,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1264,
        "end": 1269,
        "decorators": [],
        "name": "foo12",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1270,
          "end": 1276,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1271,
            "end": 1276,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1273,
              "end": 1276
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1283,
      "end": 1314,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1292,
        "end": 1298,
        "decorators": [],
        "name": "foo12b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1299,
          "end": 1312,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1300,
            "end": 1312,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1302,
              "end": 1312,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1304,
                "end": 1312,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1305,
                    "end": 1311
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1302,
                "end": 1304,
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1315,
      "end": 1345,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1324,
        "end": 1330,
        "decorators": [],
        "name": "foo12b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1331,
          "end": 1343,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1332,
            "end": 1343,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1334,
              "end": 1343,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1335,
                "end": 1343,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1336,
                    "end": 1342
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1334,
                "end": 1335,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1352,
      "end": 1379,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1376,
        "end": 1379,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1361,
        "end": 1367,
        "decorators": [],
        "name": "foo12b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1368,
          "end": 1374,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1369,
            "end": 1374,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1371,
              "end": 1374
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1381,
      "end": 1402,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1390,
        "end": 1395,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1396,
          "end": 1400,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1397,
            "end": 1400,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1399,
              "end": 1400,
              "typeName": {
                "type": "Identifier",
                "start": 1399,
                "end": 1400,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1403,
      "end": 1431,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1412,
        "end": 1417,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1418,
          "end": 1429,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1419,
            "end": 1429,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1421,
              "end": 1429,
              "exprName": {
                "type": "Identifier",
                "start": 1428,
                "end": 1429,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1438,
      "end": 1464,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1461,
        "end": 1464,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1447,
        "end": 1452,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1453,
          "end": 1459,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1454,
            "end": 1459,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1456,
              "end": 1459
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1466,
      "end": 1487,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1475,
        "end": 1480,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1481,
          "end": 1485,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1482,
            "end": 1485,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1484,
              "end": 1485,
              "typeName": {
                "type": "Identifier",
                "start": 1484,
                "end": 1485,
                "decorators": [],
                "name": "I",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1488,
      "end": 1516,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1497,
        "end": 1502,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1503,
          "end": 1514,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1504,
            "end": 1514,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1506,
              "end": 1514,
              "exprName": {
                "type": "Identifier",
                "start": 1513,
                "end": 1514,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1523,
      "end": 1549,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1546,
        "end": 1549,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1532,
        "end": 1537,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1538,
          "end": 1544,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1539,
            "end": 1544,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1541,
              "end": 1544
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1551,
      "end": 1581,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1560,
        "end": 1565,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1566,
          "end": 1579,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1567,
            "end": 1579,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1569,
              "end": 1579,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1571,
                "end": 1579,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1572,
                    "end": 1578
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1569,
                "end": 1571,
                "decorators": [],
                "name": "I2",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1582,
      "end": 1611,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1591,
        "end": 1596,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1597,
          "end": 1609,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1598,
            "end": 1609,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1600,
              "end": 1609,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1601,
                "end": 1609,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1602,
                    "end": 1608
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1600,
                "end": 1601,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1618,
      "end": 1644,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1641,
        "end": 1644,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1627,
        "end": 1632,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1633,
          "end": 1639,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1634,
            "end": 1639,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1636,
              "end": 1639
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
