__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 556,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 69,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 66,
            "end": 69,
            "raw": "'a'",
            "value": "a"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 71,
      "end": 88,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 77,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeQuery",
        "start": 80,
        "end": 88,
        "exprName": {
          "type": "Identifier",
          "start": 87,
          "end": 88,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 89,
      "end": 118,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 98,
        "decorators": [],
        "name": "MixA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 101,
        "end": 118,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 101,
            "end": 102,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 105,
            "end": 118,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 106,
                "end": 117,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 109,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 109,
                  "end": 117,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 111,
                    "end": 117
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 120,
      "end": 142,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 133,
        "decorators": [],
        "name": "OriginA1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 136,
        "end": 142,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 136,
            "end": 139,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 140,
            "end": 142,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 139,
            "end": 140,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 139,
              "end": 140,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 143,
      "end": 168,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 148,
        "end": 156,
        "decorators": [],
        "name": "OriginA2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 159,
        "end": 168,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 159,
            "end": 162,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 166,
            "end": 168,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 162,
            "end": 166,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 162,
              "end": 166,
              "decorators": [],
              "name": "MixA",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 170,
      "end": 192,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 175,
        "end": 176,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 179,
        "end": 192,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 179,
            "end": 182,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 190,
            "end": 192,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeQuery",
            "start": 182,
            "end": 190,
            "exprName": {
              "type": "Identifier",
              "start": 189,
              "end": 190,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 193,
      "end": 224,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 202,
        "decorators": [],
        "name": "MixB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 205,
        "end": 224,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 205,
            "end": 206,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 209,
            "end": 224,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 211,
                "end": 222,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 214,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 214,
                  "end": 222,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 216,
                    "end": 222
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 226,
      "end": 248,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 239,
        "decorators": [],
        "name": "OriginB1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 242,
        "end": 248,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 242,
            "end": 245,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 246,
            "end": 248,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 245,
            "end": 246,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 245,
              "end": 246,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 249,
      "end": 274,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 254,
        "end": 262,
        "decorators": [],
        "name": "OriginB2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 265,
        "end": 274,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 265,
            "end": 268,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 272,
            "end": 274,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 268,
            "end": 272,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 268,
              "end": 272,
              "decorators": [],
              "name": "MixB",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 276,
      "end": 307,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 285,
        "decorators": [],
        "name": "MixC",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 288,
        "end": 307,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 288,
            "end": 303,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 290,
                "end": 301,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 293,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 293,
                  "end": 301,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 295,
                    "end": 301
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeReference",
            "start": 306,
            "end": 307,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 309,
      "end": 333,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 321,
        "decorators": [],
        "name": "OriginC",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 324,
        "end": 333,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 324,
            "end": 327,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 331,
            "end": 333,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 327,
            "end": 331,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 327,
              "end": 331,
              "decorators": [],
              "name": "MixC",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 335,
      "end": 393,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 344,
        "decorators": [],
        "name": "MixD",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 369,
        "end": 393,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 369,
            "end": 372,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 391,
            "end": 393,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSIntersectionType",
            "start": 372,
            "end": 391,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 372,
                "end": 373,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 373,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeLiteral",
                "start": 376,
                "end": 391,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 378,
                    "end": 389,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 378,
                      "end": 381,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 381,
                      "end": 389,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 383,
                        "end": 389
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 344,
        "end": 362,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 345,
            "end": 361,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 355,
              "end": 361
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 345,
              "end": 346,
              "decorators": [],
              "name": "T",
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
      "start": 394,
      "end": 458,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 406,
        "decorators": [],
        "name": "OriginD",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 409,
        "end": 457,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 409,
            "end": 412,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 455,
            "end": 457,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSIntersectionType",
            "start": 412,
            "end": 455,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 412,
                "end": 437,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 416,
                  "end": 437,
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "start": 417,
                      "end": 436,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 417,
                          "end": 418,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 417,
                            "end": 418,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 421,
                          "end": 436,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 423,
                              "end": 434,
                              "accessibility": null,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 423,
                                "end": 426,
                                "decorators": [],
                                "name": "foo",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "readonly": false,
                              "static": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 426,
                                "end": 434,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 428,
                                  "end": 434
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
                  "start": 412,
                  "end": 416,
                  "decorators": [],
                  "name": "MixD",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeLiteral",
                "start": 440,
                "end": 455,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 442,
                    "end": 453,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 442,
                      "end": 445,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 445,
                      "end": 453,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 447,
                        "end": 453
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 460,
      "end": 481,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 465,
        "end": 466,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 469,
        "end": 480,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 469,
            "end": 472,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 478,
            "end": 480,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSIntersectionType",
            "start": 472,
            "end": 478,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 472,
                "end": 473,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 473,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSTypeLiteral",
                "start": 476,
                "end": 478,
                "members": []
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 482,
      "end": 500,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 487,
        "end": 491,
        "decorators": [],
        "name": "MixE",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 494,
        "end": 500,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 494,
            "end": 495,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 494,
              "end": 495,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 498,
            "end": 500,
            "members": []
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 501,
      "end": 525,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 506,
        "end": 513,
        "decorators": [],
        "name": "OriginE",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 516,
        "end": 525,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 516,
            "end": 519,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 523,
            "end": 525,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 519,
            "end": 523,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 519,
              "end": 523,
              "decorators": [],
              "name": "MixE",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 527,
      "end": 556,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 532,
        "end": 539,
        "decorators": [],
        "name": "OriginF",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 542,
        "end": 555,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 542,
            "end": 545,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 546,
            "end": 552,
            "tail": false,
            "value": {
              "cooked": "foo",
              "raw": "foo"
            }
          },
          {
            "type": "TemplateElement",
            "start": 553,
            "end": 555,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 545,
            "end": 546,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 545,
              "end": 546,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeReference",
            "start": 552,
            "end": 553,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 552,
              "end": 553,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
