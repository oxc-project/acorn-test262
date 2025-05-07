__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 2334,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 71,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 55,
        "end": 71,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 57,
            "end": 69,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 60,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 54,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 72,
      "end": 115,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 99,
        "end": 115,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 101,
            "end": 113,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 104,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 112,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 106,
                "end": 112
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 85,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 94,
        "end": 98,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 117,
      "end": 151,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 125,
        "end": 151,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 131,
            "end": 149,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 132,
                "end": 141,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 133,
                  "end": 141,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 135,
                    "end": 141
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 144,
                "end": 148,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 148,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 153,
      "end": 190,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 161,
        "end": 190,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 167,
            "end": 188,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 168,
                "end": 177,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 169,
                  "end": 177,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 171,
                    "end": 177
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 187,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 180,
                "end": 187,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 187,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 160,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 192,
      "end": 226,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 226,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 209,
            "end": 224,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 210,
                "end": 219,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 211,
                  "end": 219,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 213,
                    "end": 219
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 223,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 222,
                "end": 223,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 199,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 199,
        "end": 202,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 200,
            "end": 201,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
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
      "type": "TSInterfaceDeclaration",
      "start": 228,
      "end": 269,
      "body": {
        "type": "TSInterfaceBody",
        "start": 240,
        "end": 269,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 246,
            "end": 267,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 247,
                "end": 256,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 248,
                  "end": 256,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 250,
                    "end": 256
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 257,
              "end": 266,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 259,
                "end": 266,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 266,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null
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
        "start": 238,
        "end": 239,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 271,
      "end": 293,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 290,
        "end": 293,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 279,
        "decorators": [],
        "name": "PA",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 288,
        "end": 289,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 295,
      "end": 317,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 314,
        "end": 317,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 301,
        "end": 303,
        "decorators": [],
        "name": "PB",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 312,
        "end": 313,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 319,
      "end": 352,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 352,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 352,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 352,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 326,
                "end": 352,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 332,
                    "end": 350,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 333,
                        "end": 342,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 334,
                          "end": 342,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 336,
                            "end": 342
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 343,
                      "end": 349,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 345,
                        "end": 349,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 345,
                          "end": 349,
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null
                        }
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
      "start": 353,
      "end": 409,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 357,
          "end": 408,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 357,
            "end": 385,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 358,
              "end": 385,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 360,
                "end": 385,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 362,
                    "end": 383,
                    "accessibility": null,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 363,
                        "end": 372,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 364,
                          "end": 372,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 366,
                            "end": 372
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 373,
                      "end": 382,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 375,
                        "end": 382,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 375,
                          "end": 382,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 388,
            "end": 408,
            "properties": [
              {
                "type": "Property",
                "start": 390,
                "end": 406,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 390,
                  "end": 391,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 393,
                  "end": 406,
                  "expression": {
                    "type": "Literal",
                    "start": 402,
                    "end": 406,
                    "raw": "null",
                    "value": null,
                    "regex": null,
                    "bigint": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 394,
                    "end": 401,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 394,
                      "end": 401,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
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
      "start": 411,
      "end": 431,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 420,
        "end": 424,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 425,
          "end": 429,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 426,
            "end": 429,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 428,
              "end": 429,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 428,
                "end": 429,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 432,
      "end": 452,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 441,
        "end": 445,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 446,
          "end": 450,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 447,
            "end": 450,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 449,
              "end": 450,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 449,
                "end": 450,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 462,
      "end": 487,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 484,
        "end": 487,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 471,
        "end": 475,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 476,
          "end": 482,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 477,
            "end": 482,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 479,
              "end": 482
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 489,
      "end": 510,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 498,
        "end": 503,
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 504,
          "end": 508,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 505,
            "end": 508,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 507,
              "end": 508,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 507,
                "end": 508,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 511,
      "end": 532,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 520,
        "end": 525,
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 526,
          "end": 530,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 527,
            "end": 530,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 529,
              "end": 530,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 529,
                "end": 530,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 542,
      "end": 568,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 565,
        "end": 568,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 551,
        "end": 556,
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 557,
          "end": 563,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 558,
            "end": 563,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 560,
              "end": 563
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 570,
      "end": 599,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 579,
        "end": 584,
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 585,
          "end": 597,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 586,
            "end": 597,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 588,
              "end": 597,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 589,
                "end": 597,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 590,
                    "end": 596
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 588,
                "end": 589,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 600,
      "end": 629,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 609,
        "end": 614,
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 615,
          "end": 627,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 616,
            "end": 627,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 618,
              "end": 627,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 619,
                "end": 627,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 620,
                    "end": 626
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 618,
                "end": 619,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 639,
      "end": 665,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 662,
        "end": 665,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 648,
        "end": 653,
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 654,
          "end": 660,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 655,
            "end": 660,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 657,
              "end": 660
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 667,
      "end": 687,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 676,
        "end": 680,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 681,
          "end": 685,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 682,
            "end": 685,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 684,
              "end": 685,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 684,
                "end": 685,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 688,
      "end": 708,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 697,
        "end": 701,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 702,
          "end": 706,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 703,
            "end": 706,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 705,
              "end": 706,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 705,
                "end": 706,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 718,
      "end": 743,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 740,
        "end": 743,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 727,
        "end": 731,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 732,
          "end": 738,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 733,
            "end": 738,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 735,
              "end": 738
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 745,
      "end": 772,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 754,
        "end": 758,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 759,
          "end": 770,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 760,
            "end": 770,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 762,
              "end": 770,
              "exprName": {
                "type": "Identifier",
                "start": 769,
                "end": 770,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 773,
      "end": 800,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 782,
        "end": 786,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 787,
          "end": 798,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 788,
            "end": 798,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 790,
              "end": 798,
              "exprName": {
                "type": "Identifier",
                "start": 797,
                "end": 798,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 810,
      "end": 835,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 832,
        "end": 835,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 819,
        "end": 823,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 824,
          "end": 830,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 825,
            "end": 830,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 827,
              "end": 830
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 837,
      "end": 864,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 846,
        "end": 850,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 851,
          "end": 862,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 852,
            "end": 862,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 854,
              "end": 862,
              "exprName": {
                "type": "Identifier",
                "start": 861,
                "end": 862,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 865,
      "end": 892,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 874,
        "end": 878,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 879,
          "end": 890,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 880,
            "end": 890,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 882,
              "end": 890,
              "exprName": {
                "type": "Identifier",
                "start": 889,
                "end": 890,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 902,
      "end": 927,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 924,
        "end": 927,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 911,
        "end": 915,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 916,
          "end": 922,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 917,
            "end": 922,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 919,
              "end": 922
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 929,
      "end": 949,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 938,
        "end": 942,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 943,
          "end": 947,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 944,
            "end": 947,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 946,
              "end": 947,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 946,
                "end": 947,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 950,
      "end": 970,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 959,
        "end": 963,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 964,
          "end": 968,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 965,
            "end": 968,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 967,
              "end": 968,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 967,
                "end": 968,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 977,
      "end": 1002,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 999,
        "end": 1002,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 986,
        "end": 990,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 991,
          "end": 997,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 992,
            "end": 997,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 994,
              "end": 997
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1004,
      "end": 1025,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1013,
        "end": 1018,
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1019,
          "end": 1023,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1020,
            "end": 1023,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1022,
              "end": 1023,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1022,
                "end": 1023,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1026,
      "end": 1056,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1035,
        "end": 1040,
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1041,
          "end": 1054,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1042,
            "end": 1054,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1044,
              "end": 1054,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1045,
                "end": 1054,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1046,
                    "end": 1053,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1046,
                      "end": 1053,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1044,
                "end": 1045,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1063,
      "end": 1089,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1086,
        "end": 1089,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1072,
        "end": 1077,
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1078,
          "end": 1084,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1079,
            "end": 1084,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1081,
              "end": 1084
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1091,
      "end": 1112,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1100,
        "end": 1105,
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1106,
          "end": 1110,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1107,
            "end": 1110,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1109,
              "end": 1110,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1109,
                "end": 1110,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1113,
      "end": 1135,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1122,
        "end": 1127,
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1128,
          "end": 1133,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1129,
            "end": 1133,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1131,
              "end": 1133,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1131,
                "end": 1133,
                "decorators": [],
                "name": "PA",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1145,
      "end": 1171,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1168,
        "end": 1171,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1154,
        "end": 1159,
        "decorators": [],
        "name": "foo5c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1160,
          "end": 1166,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1161,
            "end": 1166,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1163,
              "end": 1166
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1173,
      "end": 1194,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1182,
        "end": 1187,
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1188,
          "end": 1192,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1189,
            "end": 1192,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1191,
              "end": 1192,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1191,
                "end": 1192,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1195,
      "end": 1217,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1204,
        "end": 1209,
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1210,
          "end": 1215,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1211,
            "end": 1215,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1213,
              "end": 1215,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1213,
                "end": 1215,
                "decorators": [],
                "name": "PB",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1224,
      "end": 1250,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1247,
        "end": 1250,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1233,
        "end": 1238,
        "decorators": [],
        "name": "foo5d",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1239,
          "end": 1245,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1240,
            "end": 1245,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1242,
              "end": 1245
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1252,
      "end": 1272,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1261,
        "end": 1265,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1266,
          "end": 1270,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1267,
            "end": 1270,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1269,
              "end": 1270,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1269,
                "end": 1270,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1273,
      "end": 1293,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1282,
        "end": 1286,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1287,
          "end": 1291,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1288,
            "end": 1291,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1290,
              "end": 1291,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1290,
                "end": 1291,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1300,
      "end": 1325,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1322,
        "end": 1325,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1309,
        "end": 1313,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1314,
          "end": 1320,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1315,
            "end": 1320,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1317,
              "end": 1320
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1327,
      "end": 1347,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1336,
        "end": 1340,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1341,
          "end": 1345,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1342,
            "end": 1345,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1344,
              "end": 1345,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1344,
                "end": 1345,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1348,
      "end": 1375,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1357,
        "end": 1361,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1362,
          "end": 1373,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1363,
            "end": 1373,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1365,
              "end": 1373,
              "exprName": {
                "type": "Identifier",
                "start": 1372,
                "end": 1373,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1385,
      "end": 1410,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1407,
        "end": 1410,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1394,
        "end": 1398,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1399,
          "end": 1405,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1400,
            "end": 1405,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1402,
              "end": 1405
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1412,
      "end": 1432,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1421,
        "end": 1425,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1426,
          "end": 1430,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1427,
            "end": 1430,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1429,
              "end": 1430,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1429,
                "end": 1430,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1433,
      "end": 1453,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1442,
        "end": 1446,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1447,
          "end": 1451,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1448,
            "end": 1451,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1450,
              "end": 1451,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1450,
                "end": 1451,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1463,
      "end": 1488,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1485,
        "end": 1488,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1472,
        "end": 1476,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1477,
          "end": 1483,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1478,
            "end": 1483,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1480,
              "end": 1483
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1490,
      "end": 1510,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1499,
        "end": 1503,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1504,
          "end": 1508,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1505,
            "end": 1508,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1507,
              "end": 1508,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1507,
                "end": 1508,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1511,
      "end": 1537,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1520,
        "end": 1524,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1525,
          "end": 1535,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1526,
            "end": 1535,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1528,
              "end": 1535,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1529,
                "end": 1535,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1530,
                    "end": 1534,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1530,
                      "end": 1534,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1528,
                "end": 1529,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1544,
      "end": 1569,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1566,
        "end": 1569,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1553,
        "end": 1557,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1558,
          "end": 1564,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1559,
            "end": 1564,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1561,
              "end": 1564
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1571,
      "end": 1592,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1580,
        "end": 1585,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1586,
          "end": 1590,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1587,
            "end": 1590,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1589,
              "end": 1590,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1589,
                "end": 1590,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1593,
      "end": 1621,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1602,
        "end": 1607,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1608,
          "end": 1619,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1609,
            "end": 1619,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1611,
              "end": 1619,
              "exprName": {
                "type": "Identifier",
                "start": 1618,
                "end": 1619,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1628,
      "end": 1654,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1651,
        "end": 1654,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1637,
        "end": 1642,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1643,
          "end": 1649,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1644,
            "end": 1649,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1646,
              "end": 1649
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1656,
      "end": 1677,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1665,
        "end": 1670,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1671,
          "end": 1675,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1672,
            "end": 1675,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1674,
              "end": 1675,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1674,
                "end": 1675,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1678,
      "end": 1706,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1687,
        "end": 1692,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1693,
          "end": 1704,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1694,
            "end": 1704,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1696,
              "end": 1704,
              "exprName": {
                "type": "Identifier",
                "start": 1703,
                "end": 1704,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1716,
      "end": 1742,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1739,
        "end": 1742,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1725,
        "end": 1730,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1731,
          "end": 1737,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1732,
            "end": 1737,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1734,
              "end": 1737
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1744,
      "end": 1766,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1753,
        "end": 1759,
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1760,
          "end": 1764,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1761,
            "end": 1764,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1763,
              "end": 1764,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1763,
                "end": 1764,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1767,
      "end": 1790,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1776,
        "end": 1782,
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1783,
          "end": 1788,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1784,
            "end": 1788,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1786,
              "end": 1788,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1786,
                "end": 1788,
                "decorators": [],
                "name": "PA",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1797,
      "end": 1824,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1821,
        "end": 1824,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1806,
        "end": 1812,
        "decorators": [],
        "name": "foo11b",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1813,
          "end": 1819,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1814,
            "end": 1819,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1816,
              "end": 1819
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1826,
      "end": 1848,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1835,
        "end": 1841,
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1842,
          "end": 1846,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1843,
            "end": 1846,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1845,
              "end": 1846,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1845,
                "end": 1846,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1849,
      "end": 1872,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1858,
        "end": 1864,
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1865,
          "end": 1870,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1866,
            "end": 1870,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1868,
              "end": 1870,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1868,
                "end": 1870,
                "decorators": [],
                "name": "PB",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1882,
      "end": 1909,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1906,
        "end": 1909,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1891,
        "end": 1897,
        "decorators": [],
        "name": "foo11c",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1898,
          "end": 1904,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1899,
            "end": 1904,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1901,
              "end": 1904
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1911,
      "end": 1932,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1920,
        "end": 1925,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1926,
          "end": 1930,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1927,
            "end": 1930,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1929,
              "end": 1930,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1929,
                "end": 1930,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1933,
      "end": 1963,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1942,
        "end": 1947,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1948,
          "end": 1961,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1949,
            "end": 1961,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1951,
              "end": 1961,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1952,
                "end": 1961,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1953,
                    "end": 1960,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1953,
                      "end": 1960,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1951,
                "end": 1952,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1973,
      "end": 1999,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1996,
        "end": 1999,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1982,
        "end": 1987,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1988,
          "end": 1994,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1989,
            "end": 1994,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1991,
              "end": 1994
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2001,
      "end": 2022,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2010,
        "end": 2015,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2016,
          "end": 2020,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2017,
            "end": 2020,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2019,
              "end": 2020,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2019,
                "end": 2020,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2023,
      "end": 2051,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2032,
        "end": 2037,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2038,
          "end": 2049,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2039,
            "end": 2049,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2041,
              "end": 2049,
              "exprName": {
                "type": "Identifier",
                "start": 2048,
                "end": 2049,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2058,
      "end": 2084,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2081,
        "end": 2084,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2067,
        "end": 2072,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2073,
          "end": 2079,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2074,
            "end": 2079,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2076,
              "end": 2079
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2086,
      "end": 2107,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2095,
        "end": 2100,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2101,
          "end": 2105,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2102,
            "end": 2105,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2104,
              "end": 2105,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2104,
                "end": 2105,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2108,
      "end": 2136,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2117,
        "end": 2122,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2123,
          "end": 2134,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2124,
            "end": 2134,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2126,
              "end": 2134,
              "exprName": {
                "type": "Identifier",
                "start": 2133,
                "end": 2134,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2146,
      "end": 2172,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2169,
        "end": 2172,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2155,
        "end": 2160,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2161,
          "end": 2167,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2162,
            "end": 2167,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2164,
              "end": 2167
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2174,
      "end": 2195,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2183,
        "end": 2188,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2189,
          "end": 2193,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2190,
            "end": 2193,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2192,
              "end": 2193,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2192,
                "end": 2193,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2196,
      "end": 2218,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2205,
        "end": 2210,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2211,
          "end": 2216,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2212,
            "end": 2216,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2214,
              "end": 2216,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2214,
                "end": 2216,
                "decorators": [],
                "name": "PA",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2225,
      "end": 2251,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2248,
        "end": 2251,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2234,
        "end": 2239,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2240,
          "end": 2246,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2241,
            "end": 2246,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2243,
              "end": 2246
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2253,
      "end": 2274,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2262,
        "end": 2267,
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2268,
          "end": 2272,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2269,
            "end": 2272,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2271,
              "end": 2272,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2271,
                "end": 2272,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2275,
      "end": 2297,
      "async": false,
      "body": null,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2284,
        "end": 2289,
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2290,
          "end": 2295,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2291,
            "end": 2295,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2293,
              "end": 2295,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2293,
                "end": 2295,
                "decorators": [],
                "name": "PB",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2307,
      "end": 2333,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2330,
        "end": 2333,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2316,
        "end": 2321,
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2322,
          "end": 2328,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2323,
            "end": 2328,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2325,
              "end": 2328
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
