objectTypesIdentityWithStringIndexers2.ts
```json
{
  "type": "Program",
  "start": 44,
  "end": 2337,
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
              "optional": false
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
        "optional": false
      },
      "implements": [],
      "superClass": null
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
              "optional": false
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
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 94,
        "end": 98,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
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
                    "type": "TSStringKeyword",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 148,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
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
        "optional": false
      },
      "implements": [],
      "superClass": null
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
                    "type": "TSStringKeyword",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 180,
                  "end": 187,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false
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
        "optional": false
      },
      "implements": [],
      "superClass": null
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
                    "type": "TSStringKeyword",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 199,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null,
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
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
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
                    "type": "TSStringKeyword",
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
                "typeName": {
                  "type": "Identifier",
                  "start": 259,
                  "end": 266,
                  "decorators": [],
                  "name": "Derived",
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
        "start": 238,
        "end": 239,
        "decorators": [],
        "name": "I",
        "optional": false
      }
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
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 288,
        "end": 289,
        "decorators": [],
        "name": "A",
        "optional": false
      }
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
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 312,
        "end": 313,
        "decorators": [],
        "name": "B",
        "optional": false
      }
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
                            "type": "TSStringKeyword",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 345,
                          "end": 349,
                          "decorators": [],
                          "name": "Base",
                          "optional": false
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
      "end": 411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 357,
          "end": 410,
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
                            "type": "TSStringKeyword",
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 375,
                          "end": 382,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false
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
            "end": 410,
            "properties": [
              {
                "type": "Property",
                "start": 390,
                "end": 408,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 393,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 395,
                  "end": 408,
                  "expression": {
                    "type": "Literal",
                    "start": 404,
                    "end": 408,
                    "raw": "null",
                    "value": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 396,
                    "end": 403,
                    "typeName": {
                      "type": "Identifier",
                      "start": 396,
                      "end": 403,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false
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
      "start": 413,
      "end": 433,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 422,
        "end": 426,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 427,
          "end": 431,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 428,
            "end": 431,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 430,
              "end": 431,
              "typeName": {
                "type": "Identifier",
                "start": 430,
                "end": 431,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 434,
      "end": 454,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 443,
        "end": 447,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 448,
          "end": 452,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 449,
            "end": 452,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 451,
              "end": 452,
              "typeName": {
                "type": "Identifier",
                "start": 451,
                "end": 452,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 464,
      "end": 489,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 486,
        "end": 489,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 473,
        "end": 477,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 478,
          "end": 484,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 479,
            "end": 484,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 481,
              "end": 484
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 491,
      "end": 512,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 500,
        "end": 505,
        "decorators": [],
        "name": "foo1b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 506,
          "end": 510,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 507,
            "end": 510,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 509,
              "end": 510,
              "typeName": {
                "type": "Identifier",
                "start": 509,
                "end": 510,
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
      "start": 513,
      "end": 534,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 522,
        "end": 527,
        "decorators": [],
        "name": "foo1b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 528,
          "end": 532,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 529,
            "end": 532,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 531,
              "end": 532,
              "typeName": {
                "type": "Identifier",
                "start": 531,
                "end": 532,
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
      "start": 544,
      "end": 570,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 567,
        "end": 570,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 553,
        "end": 558,
        "decorators": [],
        "name": "foo1b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 559,
          "end": 565,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 560,
            "end": 565,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 562,
              "end": 565
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 572,
      "end": 601,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 581,
        "end": 586,
        "decorators": [],
        "name": "foo1c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 587,
          "end": 599,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 588,
            "end": 599,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 590,
              "end": 599,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 591,
                "end": 599,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 592,
                    "end": 598
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 590,
                "end": 591,
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
      "start": 602,
      "end": 631,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 611,
        "end": 616,
        "decorators": [],
        "name": "foo1c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 617,
          "end": 629,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 618,
            "end": 629,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 620,
              "end": 629,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 621,
                "end": 629,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 622,
                    "end": 628
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 620,
                "end": 621,
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
      "start": 641,
      "end": 667,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 664,
        "end": 667,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 650,
        "end": 655,
        "decorators": [],
        "name": "foo1c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 656,
          "end": 662,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 657,
            "end": 662,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 659,
              "end": 662
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 669,
      "end": 689,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 678,
        "end": 682,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 683,
          "end": 687,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 684,
            "end": 687,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 686,
              "end": 687,
              "typeName": {
                "type": "Identifier",
                "start": 686,
                "end": 687,
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
      "start": 690,
      "end": 710,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 699,
        "end": 703,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 704,
          "end": 708,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 705,
            "end": 708,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 707,
              "end": 708,
              "typeName": {
                "type": "Identifier",
                "start": 707,
                "end": 708,
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
      "start": 720,
      "end": 745,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 742,
        "end": 745,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 729,
        "end": 733,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 734,
          "end": 740,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 735,
            "end": 740,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 737,
              "end": 740
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 747,
      "end": 774,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 756,
        "end": 760,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 761,
          "end": 772,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 762,
            "end": 772,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 764,
              "end": 772,
              "exprName": {
                "type": "Identifier",
                "start": 771,
                "end": 772,
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
      "start": 775,
      "end": 802,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 784,
        "end": 788,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 789,
          "end": 800,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 790,
            "end": 800,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 792,
              "end": 800,
              "exprName": {
                "type": "Identifier",
                "start": 799,
                "end": 800,
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
      "start": 812,
      "end": 837,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 834,
        "end": 837,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 821,
        "end": 825,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 826,
          "end": 832,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 827,
            "end": 832,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 829,
              "end": 832
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 839,
      "end": 866,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 848,
        "end": 852,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 853,
          "end": 864,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 854,
            "end": 864,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 856,
              "end": 864,
              "exprName": {
                "type": "Identifier",
                "start": 863,
                "end": 864,
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
      "start": 867,
      "end": 894,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 876,
        "end": 880,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 881,
          "end": 892,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 882,
            "end": 892,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 884,
              "end": 892,
              "exprName": {
                "type": "Identifier",
                "start": 891,
                "end": 892,
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
      "start": 904,
      "end": 929,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 926,
        "end": 929,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 913,
        "end": 917,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 918,
          "end": 924,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 919,
            "end": 924,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 921,
              "end": 924
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 931,
      "end": 951,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 940,
        "end": 944,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 945,
          "end": 949,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 946,
            "end": 949,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 948,
              "end": 949,
              "typeName": {
                "type": "Identifier",
                "start": 948,
                "end": 949,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 952,
      "end": 972,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 961,
        "end": 965,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 966,
          "end": 970,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 967,
            "end": 970,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 969,
              "end": 970,
              "typeName": {
                "type": "Identifier",
                "start": 969,
                "end": 970,
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
      "start": 979,
      "end": 1004,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1001,
        "end": 1004,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 988,
        "end": 992,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 993,
          "end": 999,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 994,
            "end": 999,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 996,
              "end": 999
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1006,
      "end": 1027,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1015,
        "end": 1020,
        "decorators": [],
        "name": "foo5b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1021,
          "end": 1025,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1022,
            "end": 1025,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1024,
              "end": 1025,
              "typeName": {
                "type": "Identifier",
                "start": 1024,
                "end": 1025,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1028,
      "end": 1058,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1037,
        "end": 1042,
        "decorators": [],
        "name": "foo5b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1043,
          "end": 1056,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1044,
            "end": 1056,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1046,
              "end": 1056,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1047,
                "end": 1056,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1048,
                    "end": 1055,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1048,
                      "end": 1055,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1046,
                "end": 1047,
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
      "start": 1065,
      "end": 1091,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1088,
        "end": 1091,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1074,
        "end": 1079,
        "decorators": [],
        "name": "foo5b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1080,
          "end": 1086,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1081,
            "end": 1086,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1083,
              "end": 1086
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1093,
      "end": 1114,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1102,
        "end": 1107,
        "decorators": [],
        "name": "foo5c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1108,
          "end": 1112,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1109,
            "end": 1112,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1111,
              "end": 1112,
              "typeName": {
                "type": "Identifier",
                "start": 1111,
                "end": 1112,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1115,
      "end": 1137,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1124,
        "end": 1129,
        "decorators": [],
        "name": "foo5c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1130,
          "end": 1135,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1131,
            "end": 1135,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1133,
              "end": 1135,
              "typeName": {
                "type": "Identifier",
                "start": 1133,
                "end": 1135,
                "decorators": [],
                "name": "PA",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1147,
      "end": 1173,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1170,
        "end": 1173,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1156,
        "end": 1161,
        "decorators": [],
        "name": "foo5c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1162,
          "end": 1168,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1163,
            "end": 1168,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1165,
              "end": 1168
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1175,
      "end": 1196,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1184,
        "end": 1189,
        "decorators": [],
        "name": "foo5d",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1190,
          "end": 1194,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1191,
            "end": 1194,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1193,
              "end": 1194,
              "typeName": {
                "type": "Identifier",
                "start": 1193,
                "end": 1194,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1197,
      "end": 1219,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1206,
        "end": 1211,
        "decorators": [],
        "name": "foo5d",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1212,
          "end": 1217,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1213,
            "end": 1217,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1215,
              "end": 1217,
              "typeName": {
                "type": "Identifier",
                "start": 1215,
                "end": 1217,
                "decorators": [],
                "name": "PB",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1226,
      "end": 1252,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1249,
        "end": 1252,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1235,
        "end": 1240,
        "decorators": [],
        "name": "foo5d",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1241,
          "end": 1247,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1242,
            "end": 1247,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1244,
              "end": 1247
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1254,
      "end": 1274,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1263,
        "end": 1267,
        "decorators": [],
        "name": "foo6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1268,
          "end": 1272,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1269,
            "end": 1272,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1271,
              "end": 1272,
              "typeName": {
                "type": "Identifier",
                "start": 1271,
                "end": 1272,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1275,
      "end": 1295,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1284,
        "end": 1288,
        "decorators": [],
        "name": "foo6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1289,
          "end": 1293,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1290,
            "end": 1293,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1292,
              "end": 1293,
              "typeName": {
                "type": "Identifier",
                "start": 1292,
                "end": 1293,
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
      "start": 1302,
      "end": 1327,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1324,
        "end": 1327,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1311,
        "end": 1315,
        "decorators": [],
        "name": "foo6",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1316,
          "end": 1322,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1317,
            "end": 1322,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1319,
              "end": 1322
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1329,
      "end": 1349,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1338,
        "end": 1342,
        "decorators": [],
        "name": "foo7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1343,
          "end": 1347,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1344,
            "end": 1347,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1346,
              "end": 1347,
              "typeName": {
                "type": "Identifier",
                "start": 1346,
                "end": 1347,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1350,
      "end": 1377,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1359,
        "end": 1363,
        "decorators": [],
        "name": "foo7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1364,
          "end": 1375,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1365,
            "end": 1375,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1367,
              "end": 1375,
              "exprName": {
                "type": "Identifier",
                "start": 1374,
                "end": 1375,
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
      "start": 1387,
      "end": 1412,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1409,
        "end": 1412,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1396,
        "end": 1400,
        "decorators": [],
        "name": "foo7",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1401,
          "end": 1407,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1402,
            "end": 1407,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1404,
              "end": 1407
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1414,
      "end": 1434,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1423,
        "end": 1427,
        "decorators": [],
        "name": "foo8",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1428,
          "end": 1432,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1429,
            "end": 1432,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1431,
              "end": 1432,
              "typeName": {
                "type": "Identifier",
                "start": 1431,
                "end": 1432,
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
      "start": 1435,
      "end": 1455,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1444,
        "end": 1448,
        "decorators": [],
        "name": "foo8",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1449,
          "end": 1453,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1450,
            "end": 1453,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1452,
              "end": 1453,
              "typeName": {
                "type": "Identifier",
                "start": 1452,
                "end": 1453,
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
      "start": 1465,
      "end": 1490,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1487,
        "end": 1490,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1474,
        "end": 1478,
        "decorators": [],
        "name": "foo8",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1479,
          "end": 1485,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1480,
            "end": 1485,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1482,
              "end": 1485
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1492,
      "end": 1512,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1501,
        "end": 1505,
        "decorators": [],
        "name": "foo9",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1506,
          "end": 1510,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1507,
            "end": 1510,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1509,
              "end": 1510,
              "typeName": {
                "type": "Identifier",
                "start": 1509,
                "end": 1510,
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
      "start": 1513,
      "end": 1539,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1522,
        "end": 1526,
        "decorators": [],
        "name": "foo9",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1527,
          "end": 1537,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1528,
            "end": 1537,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1530,
              "end": 1537,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1531,
                "end": 1537,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1532,
                    "end": 1536,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1532,
                      "end": 1536,
                      "decorators": [],
                      "name": "Base",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1530,
                "end": 1531,
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
      "start": 1546,
      "end": 1571,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1568,
        "end": 1571,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1555,
        "end": 1559,
        "decorators": [],
        "name": "foo9",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1560,
          "end": 1566,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1561,
            "end": 1566,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1563,
              "end": 1566
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1573,
      "end": 1594,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1582,
        "end": 1587,
        "decorators": [],
        "name": "foo10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1588,
          "end": 1592,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1589,
            "end": 1592,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1591,
              "end": 1592,
              "typeName": {
                "type": "Identifier",
                "start": 1591,
                "end": 1592,
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
      "start": 1595,
      "end": 1623,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1604,
        "end": 1609,
        "decorators": [],
        "name": "foo10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1610,
          "end": 1621,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1611,
            "end": 1621,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1613,
              "end": 1621,
              "exprName": {
                "type": "Identifier",
                "start": 1620,
                "end": 1621,
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
      "start": 1630,
      "end": 1656,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1653,
        "end": 1656,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1639,
        "end": 1644,
        "decorators": [],
        "name": "foo10",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1645,
          "end": 1651,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1646,
            "end": 1651,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1648,
              "end": 1651
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1658,
      "end": 1679,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1667,
        "end": 1672,
        "decorators": [],
        "name": "foo11",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1673,
          "end": 1677,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1674,
            "end": 1677,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1676,
              "end": 1677,
              "typeName": {
                "type": "Identifier",
                "start": 1676,
                "end": 1677,
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
      "start": 1680,
      "end": 1708,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1689,
        "end": 1694,
        "decorators": [],
        "name": "foo11",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1695,
          "end": 1706,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1696,
            "end": 1706,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1698,
              "end": 1706,
              "exprName": {
                "type": "Identifier",
                "start": 1705,
                "end": 1706,
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
      "start": 1718,
      "end": 1744,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1741,
        "end": 1744,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1727,
        "end": 1732,
        "decorators": [],
        "name": "foo11",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1733,
          "end": 1739,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1734,
            "end": 1739,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1736,
              "end": 1739
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1746,
      "end": 1768,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1755,
        "end": 1761,
        "decorators": [],
        "name": "foo11b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1762,
          "end": 1766,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1763,
            "end": 1766,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1765,
              "end": 1766,
              "typeName": {
                "type": "Identifier",
                "start": 1765,
                "end": 1766,
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
      "start": 1769,
      "end": 1792,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1778,
        "end": 1784,
        "decorators": [],
        "name": "foo11b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1785,
          "end": 1790,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1786,
            "end": 1790,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1788,
              "end": 1790,
              "typeName": {
                "type": "Identifier",
                "start": 1788,
                "end": 1790,
                "decorators": [],
                "name": "PA",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1799,
      "end": 1826,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1823,
        "end": 1826,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1808,
        "end": 1814,
        "decorators": [],
        "name": "foo11b",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1815,
          "end": 1821,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1816,
            "end": 1821,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1818,
              "end": 1821
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1828,
      "end": 1850,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1837,
        "end": 1843,
        "decorators": [],
        "name": "foo11c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1844,
          "end": 1848,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1845,
            "end": 1848,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1847,
              "end": 1848,
              "typeName": {
                "type": "Identifier",
                "start": 1847,
                "end": 1848,
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
      "start": 1851,
      "end": 1874,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1860,
        "end": 1866,
        "decorators": [],
        "name": "foo11c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1867,
          "end": 1872,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1868,
            "end": 1872,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1870,
              "end": 1872,
              "typeName": {
                "type": "Identifier",
                "start": 1870,
                "end": 1872,
                "decorators": [],
                "name": "PB",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1884,
      "end": 1911,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1908,
        "end": 1911,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1893,
        "end": 1899,
        "decorators": [],
        "name": "foo11c",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1900,
          "end": 1906,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1901,
            "end": 1906,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1903,
              "end": 1906
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1913,
      "end": 1934,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1922,
        "end": 1927,
        "decorators": [],
        "name": "foo12",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1928,
          "end": 1932,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1929,
            "end": 1932,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1931,
              "end": 1932,
              "typeName": {
                "type": "Identifier",
                "start": 1931,
                "end": 1932,
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
      "start": 1935,
      "end": 1965,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1944,
        "end": 1949,
        "decorators": [],
        "name": "foo12",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1950,
          "end": 1963,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1951,
            "end": 1963,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1953,
              "end": 1963,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1954,
                "end": 1963,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1955,
                    "end": 1962,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1955,
                      "end": 1962,
                      "decorators": [],
                      "name": "Derived",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1953,
                "end": 1954,
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
      "start": 1975,
      "end": 2001,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1998,
        "end": 2001,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1984,
        "end": 1989,
        "decorators": [],
        "name": "foo12",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1990,
          "end": 1996,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1991,
            "end": 1996,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1993,
              "end": 1996
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 2003,
      "end": 2024,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2012,
        "end": 2017,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2018,
          "end": 2022,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2019,
            "end": 2022,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2021,
              "end": 2022,
              "typeName": {
                "type": "Identifier",
                "start": 2021,
                "end": 2022,
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
      "start": 2025,
      "end": 2053,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2034,
        "end": 2039,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2040,
          "end": 2051,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2041,
            "end": 2051,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2043,
              "end": 2051,
              "exprName": {
                "type": "Identifier",
                "start": 2050,
                "end": 2051,
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
      "start": 2060,
      "end": 2086,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2083,
        "end": 2086,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2069,
        "end": 2074,
        "decorators": [],
        "name": "foo13",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2075,
          "end": 2081,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2076,
            "end": 2081,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2078,
              "end": 2081
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 2088,
      "end": 2109,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2097,
        "end": 2102,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2103,
          "end": 2107,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2104,
            "end": 2107,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2106,
              "end": 2107,
              "typeName": {
                "type": "Identifier",
                "start": 2106,
                "end": 2107,
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
      "start": 2110,
      "end": 2138,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2119,
        "end": 2124,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2125,
          "end": 2136,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2126,
            "end": 2136,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2128,
              "end": 2136,
              "exprName": {
                "type": "Identifier",
                "start": 2135,
                "end": 2136,
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
      "start": 2148,
      "end": 2174,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2171,
        "end": 2174,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2157,
        "end": 2162,
        "decorators": [],
        "name": "foo14",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2163,
          "end": 2169,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2164,
            "end": 2169,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2166,
              "end": 2169
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 2176,
      "end": 2197,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2185,
        "end": 2190,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2191,
          "end": 2195,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2192,
            "end": 2195,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2194,
              "end": 2195,
              "typeName": {
                "type": "Identifier",
                "start": 2194,
                "end": 2195,
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
      "start": 2198,
      "end": 2220,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2207,
        "end": 2212,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2213,
          "end": 2218,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2214,
            "end": 2218,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2216,
              "end": 2218,
              "typeName": {
                "type": "Identifier",
                "start": 2216,
                "end": 2218,
                "decorators": [],
                "name": "PA",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2227,
      "end": 2253,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2250,
        "end": 2253,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2236,
        "end": 2241,
        "decorators": [],
        "name": "foo15",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2242,
          "end": 2248,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2243,
            "end": 2248,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2245,
              "end": 2248
            }
          }
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 2255,
      "end": 2276,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2264,
        "end": 2269,
        "decorators": [],
        "name": "foo16",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2270,
          "end": 2274,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2271,
            "end": 2274,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2273,
              "end": 2274,
              "typeName": {
                "type": "Identifier",
                "start": 2273,
                "end": 2274,
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
      "start": 2277,
      "end": 2299,
      "async": false,
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2286,
        "end": 2291,
        "decorators": [],
        "name": "foo16",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2292,
          "end": 2297,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2293,
            "end": 2297,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2295,
              "end": 2297,
              "typeName": {
                "type": "Identifier",
                "start": 2295,
                "end": 2297,
                "decorators": [],
                "name": "PB",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2309,
      "end": 2335,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2332,
        "end": 2335,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2318,
        "end": 2323,
        "decorators": [],
        "name": "foo16",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2324,
          "end": 2330,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2325,
            "end": 2330,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2327,
              "end": 2330
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
