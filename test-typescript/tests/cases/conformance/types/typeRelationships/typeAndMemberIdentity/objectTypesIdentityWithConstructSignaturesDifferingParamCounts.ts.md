__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 110,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 108,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 69,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 69,
              "end": 108,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 70,
                  "end": 79,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 71,
                    "end": 79,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 73,
                      "end": 79
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 81,
                  "end": 90,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 84,
                      "end": 90
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 112,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 119,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 123,
        "end": 171,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 129,
            "end": 169,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 129,
              "end": 140,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 140,
              "end": 169,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 141,
                  "end": 145,
                  "name": "x",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 147,
                  "end": 151,
                  "name": "y",
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 119,
        "end": 122,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 120,
            "end": 121,
            "name": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 173,
      "end": 216,
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 184,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 185,
        "end": 216,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 191,
            "end": 214,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 195,
                "end": 204,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 196,
                  "end": 204,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 198,
                    "end": 204
                  }
                },
                "decorators": [],
                "optional": false
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
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 218,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 230,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 230,
        "end": 233,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 231,
            "end": 232,
            "name": {
              "type": "Identifier",
              "start": 231,
              "end": 232,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 234,
        "end": 255,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 240,
            "end": 253,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 244,
                "end": 248,
                "name": "x",
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 261,
            "end": 301,
            "name": "a",
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
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 270,
                        "end": 279,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 271,
                          "end": 279,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 273,
                            "end": 279
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 281,
                        "end": 290,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 282,
                          "end": 290,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 284,
                            "end": 290
                          }
                        },
                        "decorators": [],
                        "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 307,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
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
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 315,
                  "name": "new",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 315,
                  "end": 341,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 316,
                      "end": 325,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 317,
                        "end": 325,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 319,
                          "end": 325
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                          "value": "",
                          "raw": "''"
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 396,
      "end": 417,
      "id": {
        "type": "Identifier",
        "start": 405,
        "end": 410,
        "name": "foo1b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 411,
          "end": 415,
          "name": "x",
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 418,
      "end": 439,
      "id": {
        "type": "Identifier",
        "start": 427,
        "end": 432,
        "name": "foo1b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 433,
          "end": 437,
          "name": "x",
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 449,
      "end": 475,
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 463,
        "name": "foo1b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 464,
          "end": 470,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 465,
            "end": 470,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 467,
              "end": 470
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 472,
        "end": 475,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 477,
      "end": 506,
      "id": {
        "type": "Identifier",
        "start": 486,
        "end": 491,
        "name": "foo1c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 492,
          "end": 504,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 493,
            "end": 504,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 495,
              "end": 504,
              "typeName": {
                "type": "Identifier",
                "start": 495,
                "end": 496,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 507,
      "end": 536,
      "id": {
        "type": "Identifier",
        "start": 516,
        "end": 521,
        "name": "foo1c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 522,
          "end": 534,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 523,
            "end": 534,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 525,
              "end": 534,
              "typeName": {
                "type": "Identifier",
                "start": 525,
                "end": 526,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 546,
      "end": 572,
      "id": {
        "type": "Identifier",
        "start": 555,
        "end": 560,
        "name": "foo1c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 561,
          "end": 567,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 562,
            "end": 567,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 564,
              "end": 567
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 569,
        "end": 572,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 574,
      "end": 594,
      "id": {
        "type": "Identifier",
        "start": 583,
        "end": 587,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 588,
          "end": 592,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 595,
      "end": 615,
      "id": {
        "type": "Identifier",
        "start": 604,
        "end": 608,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 609,
          "end": 613,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 625,
      "end": 650,
      "id": {
        "type": "Identifier",
        "start": 634,
        "end": 638,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 639,
          "end": 645,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 640,
            "end": 645,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 642,
              "end": 645
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 647,
        "end": 650,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 652,
      "end": 679,
      "id": {
        "type": "Identifier",
        "start": 661,
        "end": 665,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 666,
          "end": 677,
          "name": "x",
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 680,
      "end": 707,
      "id": {
        "type": "Identifier",
        "start": 689,
        "end": 693,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 694,
          "end": 705,
          "name": "x",
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 717,
      "end": 742,
      "id": {
        "type": "Identifier",
        "start": 726,
        "end": 730,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 731,
          "end": 737,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 732,
            "end": 737,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 734,
              "end": 737
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 739,
        "end": 742,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 744,
      "end": 771,
      "id": {
        "type": "Identifier",
        "start": 753,
        "end": 757,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 758,
          "end": 769,
          "name": "x",
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 772,
      "end": 799,
      "id": {
        "type": "Identifier",
        "start": 781,
        "end": 785,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 786,
          "end": 797,
          "name": "x",
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 809,
      "end": 834,
      "id": {
        "type": "Identifier",
        "start": 818,
        "end": 822,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 823,
          "end": 829,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 824,
            "end": 829,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 826,
              "end": 829
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 831,
        "end": 834,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 836,
      "end": 856,
      "id": {
        "type": "Identifier",
        "start": 845,
        "end": 849,
        "name": "foo8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 850,
          "end": 854,
          "name": "x",
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 857,
      "end": 877,
      "id": {
        "type": "Identifier",
        "start": 866,
        "end": 870,
        "name": "foo8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 871,
          "end": 875,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 884,
      "end": 909,
      "id": {
        "type": "Identifier",
        "start": 893,
        "end": 897,
        "name": "foo8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 898,
          "end": 904,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 899,
            "end": 904,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 901,
              "end": 904
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 906,
        "end": 909,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 911,
      "end": 931,
      "id": {
        "type": "Identifier",
        "start": 920,
        "end": 924,
        "name": "foo9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 925,
          "end": 929,
          "name": "x",
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 932,
      "end": 960,
      "id": {
        "type": "Identifier",
        "start": 941,
        "end": 945,
        "name": "foo9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 946,
          "end": 958,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 947,
            "end": 958,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 949,
              "end": 958,
              "typeName": {
                "type": "Identifier",
                "start": 949,
                "end": 950,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1000,
      "end": 1025,
      "id": {
        "type": "Identifier",
        "start": 1009,
        "end": 1013,
        "name": "foo9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1014,
          "end": 1020,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1015,
            "end": 1020,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1017,
              "end": 1020
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1022,
        "end": 1025,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1027,
      "end": 1048,
      "id": {
        "type": "Identifier",
        "start": 1036,
        "end": 1041,
        "name": "foo10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1042,
          "end": 1046,
          "name": "x",
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1049,
      "end": 1077,
      "id": {
        "type": "Identifier",
        "start": 1058,
        "end": 1063,
        "name": "foo10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1064,
          "end": 1075,
          "name": "x",
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1084,
      "end": 1110,
      "id": {
        "type": "Identifier",
        "start": 1093,
        "end": 1098,
        "name": "foo10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1099,
          "end": 1105,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1100,
            "end": 1105,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1102,
              "end": 1105
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1107,
        "end": 1110,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1112,
      "end": 1133,
      "id": {
        "type": "Identifier",
        "start": 1121,
        "end": 1126,
        "name": "foo11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1127,
          "end": 1131,
          "name": "x",
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
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1134,
      "end": 1162,
      "id": {
        "type": "Identifier",
        "start": 1143,
        "end": 1148,
        "name": "foo11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1149,
          "end": 1160,
          "name": "x",
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1169,
      "end": 1195,
      "id": {
        "type": "Identifier",
        "start": 1178,
        "end": 1183,
        "name": "foo11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1184,
          "end": 1190,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1185,
            "end": 1190,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1187,
              "end": 1190
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1192,
        "end": 1195,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1197,
      "end": 1218,
      "id": {
        "type": "Identifier",
        "start": 1206,
        "end": 1211,
        "name": "foo12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1212,
          "end": 1216,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1219,
      "end": 1248,
      "id": {
        "type": "Identifier",
        "start": 1228,
        "end": 1233,
        "name": "foo12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1234,
          "end": 1246,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1235,
            "end": 1246,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1237,
              "end": 1246,
              "typeName": {
                "type": "Identifier",
                "start": 1237,
                "end": 1238,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1255,
      "end": 1281,
      "id": {
        "type": "Identifier",
        "start": 1264,
        "end": 1269,
        "name": "foo12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1270,
          "end": 1276,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1271,
            "end": 1276,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1273,
              "end": 1276
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1278,
        "end": 1281,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1283,
      "end": 1314,
      "id": {
        "type": "Identifier",
        "start": 1292,
        "end": 1298,
        "name": "foo12b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1299,
          "end": 1312,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1300,
            "end": 1312,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1302,
              "end": 1312,
              "typeName": {
                "type": "Identifier",
                "start": 1302,
                "end": 1304,
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1315,
      "end": 1345,
      "id": {
        "type": "Identifier",
        "start": 1324,
        "end": 1330,
        "name": "foo12b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1331,
          "end": 1343,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1332,
            "end": 1343,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1334,
              "end": 1343,
              "typeName": {
                "type": "Identifier",
                "start": 1334,
                "end": 1335,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1352,
      "end": 1379,
      "id": {
        "type": "Identifier",
        "start": 1361,
        "end": 1367,
        "name": "foo12b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1368,
          "end": 1374,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1369,
            "end": 1374,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1371,
              "end": 1374
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1376,
        "end": 1379,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1381,
      "end": 1402,
      "id": {
        "type": "Identifier",
        "start": 1390,
        "end": 1395,
        "name": "foo13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1396,
          "end": 1400,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1403,
      "end": 1431,
      "id": {
        "type": "Identifier",
        "start": 1412,
        "end": 1417,
        "name": "foo13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1418,
          "end": 1429,
          "name": "x",
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1438,
      "end": 1464,
      "id": {
        "type": "Identifier",
        "start": 1447,
        "end": 1452,
        "name": "foo13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1453,
          "end": 1459,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1454,
            "end": 1459,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1456,
              "end": 1459
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1461,
        "end": 1464,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1466,
      "end": 1487,
      "id": {
        "type": "Identifier",
        "start": 1475,
        "end": 1480,
        "name": "foo14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1481,
          "end": 1485,
          "name": "x",
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
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1488,
      "end": 1516,
      "id": {
        "type": "Identifier",
        "start": 1497,
        "end": 1502,
        "name": "foo14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1503,
          "end": 1514,
          "name": "x",
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1523,
      "end": 1549,
      "id": {
        "type": "Identifier",
        "start": 1532,
        "end": 1537,
        "name": "foo14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1538,
          "end": 1544,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1539,
            "end": 1544,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1541,
              "end": 1544
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1546,
        "end": 1549,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1551,
      "end": 1581,
      "id": {
        "type": "Identifier",
        "start": 1560,
        "end": 1565,
        "name": "foo15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1566,
          "end": 1579,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1567,
            "end": 1579,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1569,
              "end": 1579,
              "typeName": {
                "type": "Identifier",
                "start": 1569,
                "end": 1571,
                "name": "I2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1582,
      "end": 1611,
      "id": {
        "type": "Identifier",
        "start": 1591,
        "end": 1596,
        "name": "foo15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1597,
          "end": 1609,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1598,
            "end": 1609,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1600,
              "end": 1609,
              "typeName": {
                "type": "Identifier",
                "start": 1600,
                "end": 1601,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1618,
      "end": 1644,
      "id": {
        "type": "Identifier",
        "start": 1627,
        "end": 1632,
        "name": "foo15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1633,
          "end": 1639,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1634,
            "end": 1639,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1636,
              "end": 1639
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1641,
        "end": 1644,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
