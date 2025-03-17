__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 3352,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 129,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 112,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 129,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 127,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 118,
              "end": 126,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 120,
                "end": 126
              }
            },
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
      "start": 130,
      "end": 173,
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 143,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 152,
        "end": 156,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 157,
        "end": 173,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 159,
            "end": 171,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 162,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 162,
              "end": 170,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 164,
                "end": 170
              }
            },
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
      "start": 174,
      "end": 221,
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 188,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 197,
        "end": 204,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 205,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 207,
            "end": 219,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 210,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 218,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 212,
                "end": 218
              }
            },
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
      "start": 222,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 240,
        "name": "OtherDerived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 249,
        "end": 253,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 254,
        "end": 271,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 256,
            "end": 269,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 260,
              "name": "bing",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 268,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 262,
                "end": 268
              }
            },
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
      "type": "TSDeclareFunction",
      "start": 273,
      "end": 316,
      "id": {
        "type": "Identifier",
        "start": 290,
        "end": 294,
        "name": "foo1",
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
          "start": 295,
          "end": 314,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 296,
            "end": 314,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 298,
              "end": 314,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 298,
                "end": 301,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 299,
                    "end": 300,
                    "name": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 300,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 302,
                  "end": 306,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 303,
                    "end": 306,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 305,
                      "end": 306,
                      "typeName": {
                        "type": "Identifier",
                        "start": 305,
                        "end": 306,
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
                "start": 308,
                "end": 314,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 311,
                  "end": 314,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 311,
                    "end": 312,
                    "typeName": {
                      "type": "Identifier",
                      "start": 311,
                      "end": 312,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 317,
      "end": 352,
      "id": {
        "type": "Identifier",
        "start": 334,
        "end": 338,
        "name": "foo1",
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
          "start": 339,
          "end": 345,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 340,
            "end": 345,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 342,
              "end": 345
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 346,
        "end": 351,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 348,
          "end": 351
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 354,
      "end": 403,
      "id": {
        "type": "Identifier",
        "start": 371,
        "end": 375,
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
          "start": 376,
          "end": 401,
          "name": "a2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 378,
            "end": 401,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 380,
              "end": 401,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 380,
                "end": 383,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 381,
                    "end": 382,
                    "name": {
                      "type": "Identifier",
                      "start": 381,
                      "end": 382,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 384,
                  "end": 388,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 385,
                    "end": 388,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 387,
                      "end": 388,
                      "typeName": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 388,
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
                "start": 390,
                "end": 401,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 393,
                  "end": 401,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 393,
                    "end": 399
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 404,
      "end": 439,
      "id": {
        "type": "Identifier",
        "start": 421,
        "end": 425,
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
          "start": 426,
          "end": 432,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 427,
            "end": 432,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 429,
              "end": 432
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 433,
        "end": 438,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 435,
          "end": 438
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 441,
      "end": 486,
      "id": {
        "type": "Identifier",
        "start": 458,
        "end": 462,
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
          "start": 463,
          "end": 484,
          "name": "a3",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 465,
            "end": 484,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 467,
              "end": 484,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 467,
                "end": 470,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 468,
                    "end": 469,
                    "name": {
                      "type": "Identifier",
                      "start": 468,
                      "end": 469,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 471,
                  "end": 475,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 472,
                    "end": 475,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 474,
                      "end": 475,
                      "typeName": {
                        "type": "Identifier",
                        "start": 474,
                        "end": 475,
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
                "start": 477,
                "end": 484,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 480,
                  "end": 484
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 487,
      "end": 522,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 508,
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
          "start": 509,
          "end": 515,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 510,
            "end": 515,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 512,
              "end": 515
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 516,
        "end": 521,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 518,
          "end": 521
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 524,
      "end": 580,
      "id": {
        "type": "Identifier",
        "start": 541,
        "end": 545,
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
          "start": 546,
          "end": 578,
          "name": "a4",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 548,
            "end": 578,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 550,
              "end": 578,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 550,
                "end": 556,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 551,
                    "end": 552,
                    "name": {
                      "type": "Identifier",
                      "start": 551,
                      "end": 552,
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 554,
                    "end": 555,
                    "name": {
                      "type": "Identifier",
                      "start": 554,
                      "end": 555,
                      "name": "U",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 557,
                  "end": 561,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 558,
                    "end": 561,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 560,
                      "end": 561,
                      "typeName": {
                        "type": "Identifier",
                        "start": 560,
                        "end": 561,
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
                  "start": 563,
                  "end": 567,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 564,
                    "end": 567,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 566,
                      "end": 567,
                      "typeName": {
                        "type": "Identifier",
                        "start": 566,
                        "end": 567,
                        "name": "U",
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
                "start": 569,
                "end": 578,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 572,
                  "end": 578
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 581,
      "end": 616,
      "id": {
        "type": "Identifier",
        "start": 598,
        "end": 602,
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
          "start": 603,
          "end": 609,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 604,
            "end": 609,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 606,
              "end": 609
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 610,
        "end": 615,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 612,
          "end": 615
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 618,
      "end": 675,
      "id": {
        "type": "Identifier",
        "start": 635,
        "end": 639,
        "name": "foo5",
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
          "start": 640,
          "end": 673,
          "name": "a5",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 642,
            "end": 673,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 644,
              "end": 673,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 644,
                "end": 650,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 645,
                    "end": 646,
                    "name": {
                      "type": "Identifier",
                      "start": 645,
                      "end": 646,
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 648,
                    "end": 649,
                    "name": {
                      "type": "Identifier",
                      "start": 648,
                      "end": 649,
                      "name": "U",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 651,
                  "end": 667,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 652,
                    "end": 667,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 654,
                      "end": 667,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 655,
                          "end": 661,
                          "name": "arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 658,
                            "end": 661,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 660,
                              "end": 661,
                              "typeName": {
                                "type": "Identifier",
                                "start": 660,
                                "end": 661,
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
                        "start": 663,
                        "end": 667,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 666,
                          "end": 667,
                          "typeName": {
                            "type": "Identifier",
                            "start": 666,
                            "end": 667,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 669,
                "end": 673,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 672,
                  "end": 673,
                  "typeName": {
                    "type": "Identifier",
                    "start": 672,
                    "end": 673,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 676,
      "end": 711,
      "id": {
        "type": "Identifier",
        "start": 693,
        "end": 697,
        "name": "foo5",
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
          "start": 698,
          "end": 704,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 699,
            "end": 704,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 701,
              "end": 704
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 705,
        "end": 710,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 707,
          "end": 710
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 713,
      "end": 786,
      "id": {
        "type": "Identifier",
        "start": 730,
        "end": 734,
        "name": "foo6",
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
          "start": 735,
          "end": 784,
          "name": "a6",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 737,
            "end": 784,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 739,
              "end": 784,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 739,
                "end": 755,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 740,
                    "end": 754,
                    "name": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 741,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 750,
                      "end": 754,
                      "typeName": {
                        "type": "Identifier",
                        "start": 750,
                        "end": 754,
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "start": 756,
                  "end": 778,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 757,
                    "end": 778,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 759,
                      "end": 778,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 760,
                          "end": 766,
                          "name": "arg",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 763,
                            "end": 766,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 765,
                              "end": 766,
                              "typeName": {
                                "type": "Identifier",
                                "start": 765,
                                "end": 766,
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
                        "start": 768,
                        "end": 778,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 771,
                          "end": 778,
                          "typeName": {
                            "type": "Identifier",
                            "start": 771,
                            "end": 778,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 780,
                "end": 784,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 783,
                  "end": 784,
                  "typeName": {
                    "type": "Identifier",
                    "start": 783,
                    "end": 784,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 787,
      "end": 822,
      "id": {
        "type": "Identifier",
        "start": 804,
        "end": 808,
        "name": "foo6",
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
          "start": 809,
          "end": 815,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 810,
            "end": 815,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 812,
              "end": 815
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 816,
        "end": 821,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 818,
          "end": 821
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 824,
      "end": 903,
      "id": {
        "type": "Identifier",
        "start": 841,
        "end": 846,
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
          "start": 847,
          "end": 901,
          "name": "a11",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 850,
            "end": 901,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 852,
              "end": 901,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 852,
                "end": 855,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 853,
                    "end": 854,
                    "name": {
                      "type": "Identifier",
                      "start": 853,
                      "end": 854,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 856,
                  "end": 869,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 857,
                    "end": 869,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 859,
                      "end": 869,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 861,
                          "end": 867,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 861,
                            "end": 864,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 864,
                            "end": 867,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 866,
                              "end": 867,
                              "typeName": {
                                "type": "Identifier",
                                "start": 866,
                                "end": 867,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 871,
                  "end": 892,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 872,
                    "end": 892,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 874,
                      "end": 892,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 876,
                          "end": 883,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 876,
                            "end": 879,
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 879,
                            "end": 882,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 881,
                              "end": 882,
                              "typeName": {
                                "type": "Identifier",
                                "start": 881,
                                "end": 882,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 884,
                          "end": 890,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 884,
                            "end": 887,
                            "name": "bar",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 887,
                            "end": 890,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 889,
                              "end": 890,
                              "typeName": {
                                "type": "Identifier",
                                "start": 889,
                                "end": 890,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 894,
                "end": 901,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 897,
                  "end": 901,
                  "typeName": {
                    "type": "Identifier",
                    "start": 897,
                    "end": 901,
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 904,
      "end": 940,
      "id": {
        "type": "Identifier",
        "start": 921,
        "end": 926,
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
          "start": 927,
          "end": 933,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 928,
            "end": 933,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 930,
              "end": 933
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 934,
        "end": 939,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 936,
          "end": 939
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 942,
      "end": 1001,
      "id": {
        "type": "Identifier",
        "start": 959,
        "end": 964,
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
          "start": 965,
          "end": 999,
          "name": "a15",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 968,
            "end": 999,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 970,
              "end": 999,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 970,
                "end": 973,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 971,
                    "end": 972,
                    "name": {
                      "type": "Identifier",
                      "start": 971,
                      "end": 972,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 974,
                  "end": 991,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 975,
                    "end": 991,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 977,
                      "end": 991,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 979,
                          "end": 984,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 979,
                            "end": 980,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 980,
                            "end": 983,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 982,
                              "end": 983,
                              "typeName": {
                                "type": "Identifier",
                                "start": 982,
                                "end": 983,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 985,
                          "end": 989,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 985,
                            "end": 986,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 986,
                            "end": 989,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 988,
                              "end": 989,
                              "typeName": {
                                "type": "Identifier",
                                "start": 988,
                                "end": 989,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 993,
                "end": 999,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 996,
                  "end": 999,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 996,
                    "end": 997,
                    "typeName": {
                      "type": "Identifier",
                      "start": 996,
                      "end": 997,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1002,
      "end": 1038,
      "id": {
        "type": "Identifier",
        "start": 1019,
        "end": 1024,
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
          "start": 1025,
          "end": 1031,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1026,
            "end": 1031,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1028,
              "end": 1031
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1032,
        "end": 1037,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1034,
          "end": 1037
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1040,
      "end": 1112,
      "id": {
        "type": "Identifier",
        "start": 1057,
        "end": 1062,
        "name": "foo16",
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
          "start": 1063,
          "end": 1110,
          "name": "a16",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1066,
            "end": 1110,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 1068,
              "end": 1110,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1068,
                "end": 1084,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1069,
                    "end": 1083,
                    "name": {
                      "type": "Identifier",
                      "start": 1069,
                      "end": 1070,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1079,
                      "end": 1083,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1079,
                        "end": 1083,
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                  "start": 1085,
                  "end": 1102,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1086,
                    "end": 1102,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1088,
                      "end": 1102,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1090,
                          "end": 1095,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1090,
                            "end": 1091,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1091,
                            "end": 1094,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1093,
                              "end": 1094,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1093,
                                "end": 1094,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 1096,
                          "end": 1100,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1096,
                            "end": 1097,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1097,
                            "end": 1100,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1099,
                              "end": 1100,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1099,
                                "end": 1100,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1104,
                "end": 1110,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1107,
                  "end": 1110,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 1107,
                    "end": 1108,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1107,
                      "end": 1108,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1113,
      "end": 1149,
      "id": {
        "type": "Identifier",
        "start": 1130,
        "end": 1135,
        "name": "foo16",
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
          "start": 1136,
          "end": 1142,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1137,
            "end": 1142,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1139,
              "end": 1142
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1143,
        "end": 1148,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1145,
          "end": 1148
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1151,
      "end": 1281,
      "id": {
        "type": "Identifier",
        "start": 1168,
        "end": 1173,
        "name": "foo17",
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
          "start": 1174,
          "end": 1279,
          "name": "a17",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1177,
            "end": 1279,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1179,
              "end": 1279,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 1185,
                  "end": 1226,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1185,
                    "end": 1204,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1186,
                        "end": 1203,
                        "name": {
                          "type": "Identifier",
                          "start": 1186,
                          "end": 1187,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1196,
                          "end": 1203,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1196,
                            "end": 1203,
                            "name": "Derived",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                      "start": 1205,
                      "end": 1219,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1206,
                        "end": 1219,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 1208,
                          "end": 1219,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1209,
                              "end": 1213,
                              "name": "a",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1210,
                                "end": 1213,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1212,
                                  "end": 1213,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1212,
                                    "end": 1213,
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
                            "start": 1215,
                            "end": 1219,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1218,
                              "end": 1219,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1218,
                                "end": 1219,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1220,
                    "end": 1225,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1222,
                      "end": 1225,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1222,
                        "end": 1223,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1222,
                          "end": 1223,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 1231,
                  "end": 1269,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1231,
                    "end": 1247,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1232,
                        "end": 1246,
                        "name": {
                          "type": "Identifier",
                          "start": 1232,
                          "end": 1233,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1242,
                          "end": 1246,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1242,
                            "end": 1246,
                            "name": "Base",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                      "start": 1248,
                      "end": 1262,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1249,
                        "end": 1262,
                        "typeAnnotation": {
                          "type": "TSFunctionType",
                          "start": 1251,
                          "end": 1262,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1252,
                              "end": 1256,
                              "name": "a",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1253,
                                "end": 1256,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1255,
                                  "end": 1256,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1255,
                                    "end": 1256,
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
                            "start": 1258,
                            "end": 1262,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1261,
                              "end": 1262,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1261,
                                "end": 1262,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1263,
                    "end": 1268,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1265,
                      "end": 1268,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1265,
                        "end": 1266,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1265,
                          "end": 1266,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1282,
      "end": 1318,
      "id": {
        "type": "Identifier",
        "start": 1299,
        "end": 1304,
        "name": "foo17",
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
          "start": 1305,
          "end": 1311,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1306,
            "end": 1311,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1308,
              "end": 1311
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1312,
        "end": 1317,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1314,
          "end": 1317
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1320,
      "end": 1550,
      "id": {
        "type": "Identifier",
        "start": 1337,
        "end": 1342,
        "name": "foo18",
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
          "start": 1343,
          "end": 1548,
          "name": "a18",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1346,
            "end": 1548,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1348,
              "end": 1548,
              "members": [
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 1354,
                  "end": 1447,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1355,
                      "end": 1438,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1356,
                        "end": 1438,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 1358,
                          "end": 1438,
                          "members": [
                            {
                              "type": "TSCallSignatureDeclaration",
                              "start": 1368,
                              "end": 1397,
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 1368,
                                "end": 1387,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 1369,
                                    "end": 1386,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 1369,
                                      "end": 1370,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 1379,
                                      "end": 1386,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1379,
                                        "end": 1386,
                                        "name": "Derived",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                                  "start": 1388,
                                  "end": 1392,
                                  "name": "a",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1389,
                                    "end": 1392,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1391,
                                      "end": 1392,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1391,
                                        "end": 1392,
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
                                "start": 1393,
                                "end": 1396,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1395,
                                  "end": 1396,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1395,
                                    "end": 1396,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            {
                              "type": "TSCallSignatureDeclaration",
                              "start": 1406,
                              "end": 1432,
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 1406,
                                "end": 1422,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 1407,
                                    "end": 1421,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 1407,
                                      "end": 1408,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 1417,
                                      "end": 1421,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1417,
                                        "end": 1421,
                                        "name": "Base",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                                  "start": 1423,
                                  "end": 1427,
                                  "name": "a",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1424,
                                    "end": 1427,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1426,
                                      "end": 1427,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1426,
                                        "end": 1427,
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
                                "start": 1428,
                                "end": 1431,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1430,
                                  "end": 1431,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1430,
                                    "end": 1431,
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
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1439,
                    "end": 1446,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1441,
                      "end": 1446,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1441,
                        "end": 1444
                      }
                    }
                  }
                },
                {
                  "type": "TSCallSignatureDeclaration",
                  "start": 1452,
                  "end": 1546,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1453,
                      "end": 1537,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1454,
                        "end": 1537,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 1456,
                          "end": 1537,
                          "members": [
                            {
                              "type": "TSCallSignatureDeclaration",
                              "start": 1466,
                              "end": 1496,
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 1466,
                                "end": 1486,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 1467,
                                    "end": 1485,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 1467,
                                      "end": 1468,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 1477,
                                      "end": 1485,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1477,
                                        "end": 1485,
                                        "name": "Derived2",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                                  "start": 1487,
                                  "end": 1491,
                                  "name": "a",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1488,
                                    "end": 1491,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1490,
                                      "end": 1491,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1490,
                                        "end": 1491,
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
                                "start": 1492,
                                "end": 1495,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1494,
                                  "end": 1495,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1494,
                                    "end": 1495,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            },
                            {
                              "type": "TSCallSignatureDeclaration",
                              "start": 1505,
                              "end": 1531,
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 1505,
                                "end": 1521,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 1506,
                                    "end": 1520,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 1506,
                                      "end": 1507,
                                      "name": "T",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 1516,
                                      "end": 1520,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1516,
                                        "end": 1520,
                                        "name": "Base",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                                  "start": 1522,
                                  "end": 1526,
                                  "name": "a",
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1523,
                                    "end": 1526,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1525,
                                      "end": 1526,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1525,
                                        "end": 1526,
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
                                "start": 1527,
                                "end": 1530,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1529,
                                  "end": 1530,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1529,
                                    "end": 1530,
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
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1538,
                    "end": 1545,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1540,
                      "end": 1545,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1540,
                        "end": 1543
                      }
                    }
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1551,
      "end": 1587,
      "id": {
        "type": "Identifier",
        "start": 1568,
        "end": 1573,
        "name": "foo18",
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
          "start": 1574,
          "end": 1580,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1575,
            "end": 1580,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1577,
              "end": 1580
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1581,
        "end": 1586,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1583,
          "end": 1586
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1589,
      "end": 1624,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1593,
          "end": 1623,
          "id": {
            "type": "Identifier",
            "start": 1593,
            "end": 1598,
            "name": "r1arg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1601,
            "end": 1623,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1605,
                "end": 1609,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1606,
                  "end": 1609,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1608,
                    "end": 1609,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1608,
                      "end": 1609,
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
              "type": "TSTypeAssertion",
              "start": 1614,
              "end": 1623,
              "expression": {
                "type": "Literal",
                "start": 1619,
                "end": 1623,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1615,
                "end": 1618,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 1615,
                  "end": 1616,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1615,
                    "end": 1616,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1601,
              "end": 1604,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1602,
                  "end": 1603,
                  "name": {
                    "type": "Identifier",
                    "start": 1602,
                    "end": 1603,
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1625,
      "end": 1661,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1629,
          "end": 1660,
          "id": {
            "type": "Identifier",
            "start": 1629,
            "end": 1635,
            "name": "r1arg2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1638,
            "end": 1660,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1642,
                "end": 1646,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1643,
                  "end": 1646,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1645,
                    "end": 1646,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1645,
                      "end": 1646,
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
              "type": "TSTypeAssertion",
              "start": 1651,
              "end": 1660,
              "expression": {
                "type": "Literal",
                "start": 1656,
                "end": 1660,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1652,
                "end": 1655,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 1652,
                  "end": 1653,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1652,
                    "end": 1653,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1638,
              "end": 1641,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1639,
                  "end": 1640,
                  "name": {
                    "type": "Identifier",
                    "start": 1639,
                    "end": 1640,
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1662,
      "end": 1683,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1666,
          "end": 1682,
          "id": {
            "type": "Identifier",
            "start": 1666,
            "end": 1668,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1671,
            "end": 1682,
            "callee": {
              "type": "Identifier",
              "start": 1671,
              "end": 1675,
              "name": "foo1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1676,
                "end": 1681,
                "name": "r1arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1684,
      "end": 1710,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1688,
          "end": 1709,
          "id": {
            "type": "Identifier",
            "start": 1688,
            "end": 1691,
            "name": "r1a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1694,
            "end": 1709,
            "elements": [
              {
                "type": "Identifier",
                "start": 1695,
                "end": 1700,
                "name": "r1arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1702,
                "end": 1708,
                "name": "r1arg2",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 1711,
      "end": 1737,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1715,
          "end": 1736,
          "id": {
            "type": "Identifier",
            "start": 1715,
            "end": 1718,
            "name": "r1b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1721,
            "end": 1736,
            "elements": [
              {
                "type": "Identifier",
                "start": 1722,
                "end": 1728,
                "name": "r1arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1730,
                "end": 1735,
                "name": "r1arg",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 1739,
      "end": 1769,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1743,
          "end": 1768,
          "id": {
            "type": "Identifier",
            "start": 1743,
            "end": 1748,
            "name": "r2arg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1751,
            "end": 1768,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1755,
                "end": 1759,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1756,
                  "end": 1759,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1758,
                    "end": 1759,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1758,
                      "end": 1759,
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
              "type": "ArrayExpression",
              "start": 1764,
              "end": 1768,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1765,
                  "end": 1767,
                  "value": "",
                  "raw": "''"
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1751,
              "end": 1754,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1752,
                  "end": 1753,
                  "name": {
                    "type": "Identifier",
                    "start": 1752,
                    "end": 1753,
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1770,
      "end": 1801,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1774,
          "end": 1800,
          "id": {
            "type": "Identifier",
            "start": 1774,
            "end": 1780,
            "name": "r2arg2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1783,
            "end": 1800,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1787,
                "end": 1791,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1788,
                  "end": 1791,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1790,
                    "end": 1791,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1790,
                      "end": 1791,
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
              "type": "ArrayExpression",
              "start": 1796,
              "end": 1800,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1797,
                  "end": 1799,
                  "value": "",
                  "raw": "''"
                }
              ]
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1783,
              "end": 1786,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1784,
                  "end": 1785,
                  "name": {
                    "type": "Identifier",
                    "start": 1784,
                    "end": 1785,
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1802,
      "end": 1823,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1806,
          "end": 1822,
          "id": {
            "type": "Identifier",
            "start": 1806,
            "end": 1808,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1811,
            "end": 1822,
            "callee": {
              "type": "Identifier",
              "start": 1811,
              "end": 1815,
              "name": "foo2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1816,
                "end": 1821,
                "name": "r2arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1824,
      "end": 1850,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1828,
          "end": 1849,
          "id": {
            "type": "Identifier",
            "start": 1828,
            "end": 1831,
            "name": "r2a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1834,
            "end": 1849,
            "elements": [
              {
                "type": "Identifier",
                "start": 1835,
                "end": 1840,
                "name": "r2arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1842,
                "end": 1848,
                "name": "r2arg2",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 1851,
      "end": 1877,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1855,
          "end": 1876,
          "id": {
            "type": "Identifier",
            "start": 1855,
            "end": 1858,
            "name": "r2b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1861,
            "end": 1876,
            "elements": [
              {
                "type": "Identifier",
                "start": 1862,
                "end": 1868,
                "name": "r2arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1870,
                "end": 1875,
                "name": "r2arg",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 1879,
      "end": 1912,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1883,
          "end": 1911,
          "id": {
            "type": "Identifier",
            "start": 1883,
            "end": 1888,
            "name": "r3arg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1891,
            "end": 1911,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1895,
                "end": 1899,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1896,
                  "end": 1899,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1898,
                    "end": 1899,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1898,
                      "end": 1899,
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
              "type": "TSTypeAssertion",
              "start": 1904,
              "end": 1911,
              "expression": {
                "type": "Literal",
                "start": 1907,
                "end": 1911,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1905,
                "end": 1906,
                "typeName": {
                  "type": "Identifier",
                  "start": 1905,
                  "end": 1906,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1891,
              "end": 1894,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1892,
                  "end": 1893,
                  "name": {
                    "type": "Identifier",
                    "start": 1892,
                    "end": 1893,
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1913,
      "end": 1943,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1917,
          "end": 1942,
          "id": {
            "type": "Identifier",
            "start": 1917,
            "end": 1923,
            "name": "r3arg2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1926,
            "end": 1942,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1930,
                "end": 1934,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1931,
                  "end": 1934,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1933,
                    "end": 1934,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1933,
                      "end": 1934,
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
              "start": 1939,
              "end": 1942,
              "body": []
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1926,
              "end": 1929,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1927,
                  "end": 1928,
                  "name": {
                    "type": "Identifier",
                    "start": 1927,
                    "end": 1928,
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1944,
      "end": 1965,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1948,
          "end": 1964,
          "id": {
            "type": "Identifier",
            "start": 1948,
            "end": 1950,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1953,
            "end": 1964,
            "callee": {
              "type": "Identifier",
              "start": 1953,
              "end": 1957,
              "name": "foo3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1958,
                "end": 1963,
                "name": "r3arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1966,
      "end": 1992,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1970,
          "end": 1991,
          "id": {
            "type": "Identifier",
            "start": 1970,
            "end": 1973,
            "name": "r3a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1976,
            "end": 1991,
            "elements": [
              {
                "type": "Identifier",
                "start": 1977,
                "end": 1982,
                "name": "r3arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1984,
                "end": 1990,
                "name": "r3arg2",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 1993,
      "end": 2019,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1997,
          "end": 2018,
          "id": {
            "type": "Identifier",
            "start": 1997,
            "end": 2000,
            "name": "r3b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2003,
            "end": 2018,
            "elements": [
              {
                "type": "Identifier",
                "start": 2004,
                "end": 2010,
                "name": "r3arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2012,
                "end": 2017,
                "name": "r3arg",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 2021,
      "end": 2058,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2025,
          "end": 2057,
          "id": {
            "type": "Identifier",
            "start": 2025,
            "end": 2030,
            "name": "r4arg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2033,
            "end": 2057,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2040,
                "end": 2044,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2041,
                  "end": 2044,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2043,
                    "end": 2044,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2043,
                      "end": 2044,
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
                "start": 2046,
                "end": 2050,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2047,
                  "end": 2050,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2049,
                    "end": 2050,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2049,
                      "end": 2050,
                      "name": "U",
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
              "type": "Literal",
              "start": 2055,
              "end": 2057,
              "value": "",
              "raw": "''"
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2033,
              "end": 2039,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2034,
                  "end": 2035,
                  "name": {
                    "type": "Identifier",
                    "start": 2034,
                    "end": 2035,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2037,
                  "end": 2038,
                  "name": {
                    "type": "Identifier",
                    "start": 2037,
                    "end": 2038,
                    "name": "U",
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2059,
      "end": 2097,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2063,
          "end": 2096,
          "id": {
            "type": "Identifier",
            "start": 2063,
            "end": 2069,
            "name": "r4arg2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2072,
            "end": 2096,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2079,
                "end": 2083,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2080,
                  "end": 2083,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2082,
                    "end": 2083,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2082,
                      "end": 2083,
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
                "start": 2085,
                "end": 2089,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2086,
                  "end": 2089,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2088,
                    "end": 2089,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2088,
                      "end": 2089,
                      "name": "U",
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
              "type": "Literal",
              "start": 2094,
              "end": 2096,
              "value": "",
              "raw": "''"
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2072,
              "end": 2078,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2073,
                  "end": 2074,
                  "name": {
                    "type": "Identifier",
                    "start": 2073,
                    "end": 2074,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2076,
                  "end": 2077,
                  "name": {
                    "type": "Identifier",
                    "start": 2076,
                    "end": 2077,
                    "name": "U",
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2098,
      "end": 2119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2102,
          "end": 2118,
          "id": {
            "type": "Identifier",
            "start": 2102,
            "end": 2104,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2107,
            "end": 2118,
            "callee": {
              "type": "Identifier",
              "start": 2107,
              "end": 2111,
              "name": "foo4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2112,
                "end": 2117,
                "name": "r4arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2120,
      "end": 2146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2124,
          "end": 2145,
          "id": {
            "type": "Identifier",
            "start": 2124,
            "end": 2127,
            "name": "r4a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2130,
            "end": 2145,
            "elements": [
              {
                "type": "Identifier",
                "start": 2131,
                "end": 2136,
                "name": "r4arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2138,
                "end": 2144,
                "name": "r4arg2",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 2147,
      "end": 2173,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2151,
          "end": 2172,
          "id": {
            "type": "Identifier",
            "start": 2151,
            "end": 2154,
            "name": "r4b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2157,
            "end": 2172,
            "elements": [
              {
                "type": "Identifier",
                "start": 2158,
                "end": 2164,
                "name": "r4arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2166,
                "end": 2171,
                "name": "r4arg",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 2175,
      "end": 2223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2179,
          "end": 2222,
          "id": {
            "type": "Identifier",
            "start": 2179,
            "end": 2184,
            "name": "r5arg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2187,
            "end": 2222,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2194,
                "end": 2210,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2195,
                  "end": 2210,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2197,
                    "end": 2210,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2198,
                        "end": 2204,
                        "name": "arg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2201,
                          "end": 2204,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2203,
                            "end": 2204,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2203,
                              "end": 2204,
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
                      "start": 2206,
                      "end": 2210,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2209,
                        "end": 2210,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2209,
                          "end": 2210,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "TSTypeAssertion",
              "start": 2215,
              "end": 2222,
              "expression": {
                "type": "Literal",
                "start": 2218,
                "end": 2222,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2216,
                "end": 2217,
                "typeName": {
                  "type": "Identifier",
                  "start": 2216,
                  "end": 2217,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2187,
              "end": 2193,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2188,
                  "end": 2189,
                  "name": {
                    "type": "Identifier",
                    "start": 2188,
                    "end": 2189,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2191,
                  "end": 2192,
                  "name": {
                    "type": "Identifier",
                    "start": 2191,
                    "end": 2192,
                    "name": "U",
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2224,
      "end": 2273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2228,
          "end": 2272,
          "id": {
            "type": "Identifier",
            "start": 2228,
            "end": 2234,
            "name": "r5arg2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2237,
            "end": 2272,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2244,
                "end": 2260,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2245,
                  "end": 2260,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2247,
                    "end": 2260,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2248,
                        "end": 2254,
                        "name": "arg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2251,
                          "end": 2254,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2253,
                            "end": 2254,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2253,
                              "end": 2254,
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
                      "start": 2256,
                      "end": 2260,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2259,
                        "end": 2260,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2259,
                          "end": 2260,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "TSTypeAssertion",
              "start": 2265,
              "end": 2272,
              "expression": {
                "type": "Literal",
                "start": 2268,
                "end": 2272,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2266,
                "end": 2267,
                "typeName": {
                  "type": "Identifier",
                  "start": 2266,
                  "end": 2267,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2237,
              "end": 2243,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2238,
                  "end": 2239,
                  "name": {
                    "type": "Identifier",
                    "start": 2238,
                    "end": 2239,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2241,
                  "end": 2242,
                  "name": {
                    "type": "Identifier",
                    "start": 2241,
                    "end": 2242,
                    "name": "U",
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2274,
      "end": 2295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2278,
          "end": 2294,
          "id": {
            "type": "Identifier",
            "start": 2278,
            "end": 2280,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2283,
            "end": 2294,
            "callee": {
              "type": "Identifier",
              "start": 2283,
              "end": 2287,
              "name": "foo5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2288,
                "end": 2293,
                "name": "r5arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2296,
      "end": 2322,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2300,
          "end": 2321,
          "id": {
            "type": "Identifier",
            "start": 2300,
            "end": 2303,
            "name": "r5a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2306,
            "end": 2321,
            "elements": [
              {
                "type": "Identifier",
                "start": 2307,
                "end": 2312,
                "name": "r5arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2314,
                "end": 2320,
                "name": "r5arg2",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 2323,
      "end": 2349,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2327,
          "end": 2348,
          "id": {
            "type": "Identifier",
            "start": 2327,
            "end": 2330,
            "name": "r5b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2333,
            "end": 2348,
            "elements": [
              {
                "type": "Identifier",
                "start": 2334,
                "end": 2340,
                "name": "r5arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2342,
                "end": 2347,
                "name": "r5arg",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 2351,
      "end": 2428,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2355,
          "end": 2427,
          "id": {
            "type": "Identifier",
            "start": 2355,
            "end": 2360,
            "name": "r6arg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2363,
            "end": 2427,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2399,
                "end": 2415,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2400,
                  "end": 2415,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2402,
                    "end": 2415,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2403,
                        "end": 2409,
                        "name": "arg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2406,
                          "end": 2409,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2408,
                            "end": 2409,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2408,
                              "end": 2409,
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
                      "start": 2411,
                      "end": 2415,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2414,
                        "end": 2415,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2414,
                          "end": 2415,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "TSTypeAssertion",
              "start": 2420,
              "end": 2427,
              "expression": {
                "type": "Literal",
                "start": 2423,
                "end": 2427,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2421,
                "end": 2422,
                "typeName": {
                  "type": "Identifier",
                  "start": 2421,
                  "end": 2422,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2363,
              "end": 2398,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2364,
                  "end": 2378,
                  "name": {
                    "type": "Identifier",
                    "start": 2364,
                    "end": 2365,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2374,
                    "end": 2378,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2374,
                      "end": 2378,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                  "start": 2380,
                  "end": 2397,
                  "name": {
                    "type": "Identifier",
                    "start": 2380,
                    "end": 2381,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2390,
                    "end": 2397,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2390,
                      "end": 2397,
                      "name": "Derived",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2429,
      "end": 2494,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2433,
          "end": 2493,
          "id": {
            "type": "Identifier",
            "start": 2433,
            "end": 2439,
            "name": "r6arg2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2442,
            "end": 2493,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2459,
                "end": 2481,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2460,
                  "end": 2481,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 2462,
                    "end": 2481,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 2463,
                        "end": 2469,
                        "name": "arg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2466,
                          "end": 2469,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2468,
                            "end": 2469,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2468,
                              "end": 2469,
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
                      "start": 2471,
                      "end": 2481,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2474,
                        "end": 2481,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2474,
                          "end": 2481,
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "TSTypeAssertion",
              "start": 2486,
              "end": 2493,
              "expression": {
                "type": "Literal",
                "start": 2489,
                "end": 2493,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2487,
                "end": 2488,
                "typeName": {
                  "type": "Identifier",
                  "start": 2487,
                  "end": 2488,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2442,
              "end": 2458,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2443,
                  "end": 2457,
                  "name": {
                    "type": "Identifier",
                    "start": 2443,
                    "end": 2444,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 2453,
                    "end": 2457,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2453,
                      "end": 2457,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2495,
      "end": 2516,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2499,
          "end": 2515,
          "id": {
            "type": "Identifier",
            "start": 2499,
            "end": 2501,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2504,
            "end": 2515,
            "callee": {
              "type": "Identifier",
              "start": 2504,
              "end": 2508,
              "name": "foo6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2509,
                "end": 2514,
                "name": "r6arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2517,
      "end": 2543,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2521,
          "end": 2542,
          "id": {
            "type": "Identifier",
            "start": 2521,
            "end": 2524,
            "name": "r6a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2527,
            "end": 2542,
            "elements": [
              {
                "type": "Identifier",
                "start": 2528,
                "end": 2533,
                "name": "r6arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2535,
                "end": 2541,
                "name": "r6arg2",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 2544,
      "end": 2570,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2548,
          "end": 2569,
          "id": {
            "type": "Identifier",
            "start": 2548,
            "end": 2551,
            "name": "r6b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2554,
            "end": 2569,
            "elements": [
              {
                "type": "Identifier",
                "start": 2555,
                "end": 2561,
                "name": "r6arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2563,
                "end": 2568,
                "name": "r6arg",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 2572,
      "end": 2644,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2576,
          "end": 2643,
          "id": {
            "type": "Identifier",
            "start": 2576,
            "end": 2582,
            "name": "r11arg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2585,
            "end": 2643,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2592,
                "end": 2605,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2593,
                  "end": 2605,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 2595,
                    "end": 2605,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2597,
                        "end": 2603,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2597,
                          "end": 2600,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2600,
                          "end": 2603,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2602,
                            "end": 2603,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2602,
                              "end": 2603,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2607,
                "end": 2628,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2608,
                  "end": 2628,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 2610,
                    "end": 2628,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2612,
                        "end": 2619,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2612,
                          "end": 2615,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2615,
                          "end": 2618,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2617,
                            "end": 2618,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2617,
                              "end": 2618,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 2620,
                        "end": 2626,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2620,
                          "end": 2623,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2623,
                          "end": 2626,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2625,
                            "end": 2626,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2625,
                              "end": 2626,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "TSTypeAssertion",
              "start": 2633,
              "end": 2643,
              "expression": {
                "type": "Literal",
                "start": 2639,
                "end": 2643,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2634,
                "end": 2638,
                "typeName": {
                  "type": "Identifier",
                  "start": 2634,
                  "end": 2638,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2585,
              "end": 2591,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2586,
                  "end": 2587,
                  "name": {
                    "type": "Identifier",
                    "start": 2586,
                    "end": 2587,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2589,
                  "end": 2590,
                  "name": {
                    "type": "Identifier",
                    "start": 2589,
                    "end": 2590,
                    "name": "U",
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2645,
      "end": 2715,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2649,
          "end": 2714,
          "id": {
            "type": "Identifier",
            "start": 2649,
            "end": 2656,
            "name": "r11arg2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2659,
            "end": 2714,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2663,
                "end": 2676,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2664,
                  "end": 2676,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 2666,
                    "end": 2676,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2668,
                        "end": 2674,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2668,
                          "end": 2671,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2671,
                          "end": 2674,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2673,
                            "end": 2674,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2673,
                              "end": 2674,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2678,
                "end": 2699,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2679,
                  "end": 2699,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 2681,
                    "end": 2699,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2683,
                        "end": 2690,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2683,
                          "end": 2686,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2686,
                          "end": 2689,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2688,
                            "end": 2689,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2688,
                              "end": 2689,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 2691,
                        "end": 2697,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2691,
                          "end": 2694,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2694,
                          "end": 2697,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2696,
                            "end": 2697,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2696,
                              "end": 2697,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "TSTypeAssertion",
              "start": 2704,
              "end": 2714,
              "expression": {
                "type": "Literal",
                "start": 2710,
                "end": 2714,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2705,
                "end": 2709,
                "typeName": {
                  "type": "Identifier",
                  "start": 2705,
                  "end": 2709,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2659,
              "end": 2662,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2660,
                  "end": 2661,
                  "name": {
                    "type": "Identifier",
                    "start": 2660,
                    "end": 2661,
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2716,
      "end": 2740,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2720,
          "end": 2739,
          "id": {
            "type": "Identifier",
            "start": 2720,
            "end": 2723,
            "name": "r11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2726,
            "end": 2739,
            "callee": {
              "type": "Identifier",
              "start": 2726,
              "end": 2731,
              "name": "foo11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2732,
                "end": 2738,
                "name": "r11arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2741,
      "end": 2770,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2745,
          "end": 2769,
          "id": {
            "type": "Identifier",
            "start": 2745,
            "end": 2749,
            "name": "r11a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2752,
            "end": 2769,
            "elements": [
              {
                "type": "Identifier",
                "start": 2753,
                "end": 2759,
                "name": "r11arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2761,
                "end": 2768,
                "name": "r11arg2",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 2771,
      "end": 2800,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2775,
          "end": 2799,
          "id": {
            "type": "Identifier",
            "start": 2775,
            "end": 2779,
            "name": "r11b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2782,
            "end": 2799,
            "elements": [
              {
                "type": "Identifier",
                "start": 2783,
                "end": 2790,
                "name": "r11arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2792,
                "end": 2798,
                "name": "r11arg",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 2802,
      "end": 2855,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2806,
          "end": 2854,
          "id": {
            "type": "Identifier",
            "start": 2806,
            "end": 2812,
            "name": "r15arg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2815,
            "end": 2854,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2822,
                "end": 2840,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2823,
                  "end": 2840,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 2825,
                    "end": 2840,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2827,
                        "end": 2832,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2827,
                          "end": 2828,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2828,
                          "end": 2831,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2830,
                            "end": 2831,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2830,
                              "end": 2831,
                              "name": "U",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 2833,
                        "end": 2838,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2833,
                          "end": 2834,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2834,
                          "end": 2837,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2836,
                            "end": 2837,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2836,
                              "end": 2837,
                              "name": "V",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "TSTypeAssertion",
              "start": 2845,
              "end": 2854,
              "expression": {
                "type": "Literal",
                "start": 2850,
                "end": 2854,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2846,
                "end": 2849,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 2846,
                  "end": 2847,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2846,
                    "end": 2847,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2815,
              "end": 2821,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2816,
                  "end": 2817,
                  "name": {
                    "type": "Identifier",
                    "start": 2816,
                    "end": 2817,
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 2819,
                  "end": 2820,
                  "name": {
                    "type": "Identifier",
                    "start": 2819,
                    "end": 2820,
                    "name": "V",
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2856,
      "end": 2906,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2860,
          "end": 2905,
          "id": {
            "type": "Identifier",
            "start": 2860,
            "end": 2867,
            "name": "r15arg2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2870,
            "end": 2905,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 2874,
                "end": 2891,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2875,
                  "end": 2891,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 2877,
                    "end": 2891,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2879,
                        "end": 2884,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2879,
                          "end": 2880,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2880,
                          "end": 2883,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2882,
                            "end": 2883,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2882,
                              "end": 2883,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 2885,
                        "end": 2889,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2885,
                          "end": 2886,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2886,
                          "end": 2889,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2888,
                            "end": 2889,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2888,
                              "end": 2889,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "TSTypeAssertion",
              "start": 2896,
              "end": 2905,
              "expression": {
                "type": "Literal",
                "start": 2901,
                "end": 2905,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 2897,
                "end": 2900,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 2897,
                  "end": 2898,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2897,
                    "end": 2898,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 2870,
              "end": 2873,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 2871,
                  "end": 2872,
                  "name": {
                    "type": "Identifier",
                    "start": 2871,
                    "end": 2872,
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2907,
      "end": 2931,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2911,
          "end": 2930,
          "id": {
            "type": "Identifier",
            "start": 2911,
            "end": 2914,
            "name": "r15",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 2917,
            "end": 2930,
            "callee": {
              "type": "Identifier",
              "start": 2917,
              "end": 2922,
              "name": "foo15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 2923,
                "end": 2929,
                "name": "r15arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2932,
      "end": 2961,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2936,
          "end": 2960,
          "id": {
            "type": "Identifier",
            "start": 2936,
            "end": 2940,
            "name": "r15a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2943,
            "end": 2960,
            "elements": [
              {
                "type": "Identifier",
                "start": 2944,
                "end": 2950,
                "name": "r15arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2952,
                "end": 2959,
                "name": "r15arg2",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 2962,
      "end": 2991,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2966,
          "end": 2990,
          "id": {
            "type": "Identifier",
            "start": 2966,
            "end": 2970,
            "name": "r15b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2973,
            "end": 2990,
            "elements": [
              {
                "type": "Identifier",
                "start": 2974,
                "end": 2981,
                "name": "r15arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 2983,
                "end": 2989,
                "name": "r15arg",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 2993,
      "end": 3055,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2997,
          "end": 3054,
          "id": {
            "type": "Identifier",
            "start": 2997,
            "end": 3003,
            "name": "r16arg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3006,
            "end": 3054,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 3023,
                "end": 3040,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3024,
                  "end": 3040,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 3026,
                    "end": 3040,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3028,
                        "end": 3033,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3028,
                          "end": 3029,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3029,
                          "end": 3032,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3031,
                            "end": 3032,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3031,
                              "end": 3032,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 3034,
                        "end": 3038,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3034,
                          "end": 3035,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3035,
                          "end": 3038,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3037,
                            "end": 3038,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3037,
                              "end": 3038,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "TSTypeAssertion",
              "start": 3045,
              "end": 3054,
              "expression": {
                "type": "Literal",
                "start": 3050,
                "end": 3054,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 3046,
                "end": 3049,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 3046,
                  "end": 3047,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3046,
                    "end": 3047,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3006,
              "end": 3022,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3007,
                  "end": 3021,
                  "name": {
                    "type": "Identifier",
                    "start": 3007,
                    "end": 3008,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3017,
                    "end": 3021,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3017,
                      "end": 3021,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3056,
      "end": 3119,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3060,
          "end": 3118,
          "id": {
            "type": "Identifier",
            "start": 3060,
            "end": 3067,
            "name": "r16arg2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3070,
            "end": 3118,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 3087,
                "end": 3104,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3088,
                  "end": 3104,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 3090,
                    "end": 3104,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 3092,
                        "end": 3097,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3092,
                          "end": 3093,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3093,
                          "end": 3096,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3095,
                            "end": 3096,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3095,
                              "end": 3096,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 3098,
                        "end": 3102,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 3098,
                          "end": 3099,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3099,
                          "end": 3102,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3101,
                            "end": 3102,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3101,
                              "end": 3102,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "TSTypeAssertion",
              "start": 3109,
              "end": 3118,
              "expression": {
                "type": "Literal",
                "start": 3114,
                "end": 3118,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 3110,
                "end": 3113,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 3110,
                  "end": 3111,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3110,
                    "end": 3111,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3070,
              "end": 3086,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3071,
                  "end": 3085,
                  "name": {
                    "type": "Identifier",
                    "start": 3071,
                    "end": 3072,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 3081,
                    "end": 3085,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3081,
                      "end": 3085,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3120,
      "end": 3144,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3124,
          "end": 3143,
          "id": {
            "type": "Identifier",
            "start": 3124,
            "end": 3127,
            "name": "r16",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3130,
            "end": 3143,
            "callee": {
              "type": "Identifier",
              "start": 3130,
              "end": 3135,
              "name": "foo16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3136,
                "end": 3142,
                "name": "r16arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3145,
      "end": 3174,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3149,
          "end": 3173,
          "id": {
            "type": "Identifier",
            "start": 3149,
            "end": 3153,
            "name": "r16a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3156,
            "end": 3173,
            "elements": [
              {
                "type": "Identifier",
                "start": 3157,
                "end": 3163,
                "name": "r16arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3165,
                "end": 3172,
                "name": "r16arg2",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 3175,
      "end": 3204,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3179,
          "end": 3203,
          "id": {
            "type": "Identifier",
            "start": 3179,
            "end": 3183,
            "name": "r16b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3186,
            "end": 3203,
            "elements": [
              {
                "type": "Identifier",
                "start": 3187,
                "end": 3194,
                "name": "r16arg2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 3196,
                "end": 3202,
                "name": "r16arg",
                "typeAnnotation": null,
                "decorators": [],
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
      "type": "VariableDeclaration",
      "start": 3206,
      "end": 3252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3210,
          "end": 3251,
          "id": {
            "type": "Identifier",
            "start": 3210,
            "end": 3216,
            "name": "r17arg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3219,
            "end": 3251,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 3223,
                "end": 3237,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3224,
                  "end": 3237,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 3226,
                    "end": 3237,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3227,
                        "end": 3231,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3228,
                          "end": 3231,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3230,
                            "end": 3231,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3230,
                              "end": 3231,
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
                      "start": 3233,
                      "end": 3237,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3236,
                        "end": 3237,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3236,
                          "end": 3237,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "TSTypeAssertion",
              "start": 3242,
              "end": 3251,
              "expression": {
                "type": "Literal",
                "start": 3247,
                "end": 3251,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 3243,
                "end": 3246,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 3243,
                  "end": 3244,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3243,
                    "end": 3244,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3219,
              "end": 3222,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3220,
                  "end": 3221,
                  "name": {
                    "type": "Identifier",
                    "start": 3220,
                    "end": 3221,
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
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3253,
      "end": 3277,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3257,
          "end": 3276,
          "id": {
            "type": "Identifier",
            "start": 3257,
            "end": 3260,
            "name": "r17",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3263,
            "end": 3276,
            "callee": {
              "type": "Identifier",
              "start": 3263,
              "end": 3268,
              "name": "foo17",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3269,
                "end": 3275,
                "name": "r17arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3279,
      "end": 3327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3283,
          "end": 3326,
          "id": {
            "type": "Identifier",
            "start": 3283,
            "end": 3289,
            "name": "r18arg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3292,
            "end": 3326,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 3293,
                "end": 3310,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3294,
                  "end": 3310,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 3296,
                    "end": 3310,
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 3296,
                      "end": 3299,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 3297,
                          "end": 3298,
                          "name": {
                            "type": "Identifier",
                            "start": 3297,
                            "end": 3298,
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 3300,
                        "end": 3304,
                        "name": "a",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3301,
                          "end": 3304,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3303,
                            "end": 3304,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3303,
                              "end": 3304,
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
                      "start": 3306,
                      "end": 3310,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 3309,
                        "end": 3310,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3309,
                          "end": 3310,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "TSTypeAssertion",
              "start": 3315,
              "end": 3326,
              "expression": {
                "type": "Literal",
                "start": 3322,
                "end": 3326,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 3316,
                "end": 3321,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 3316,
                  "end": 3319
                }
              }
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3328,
      "end": 3352,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3332,
          "end": 3351,
          "id": {
            "type": "Identifier",
            "start": 3332,
            "end": 3335,
            "name": "r18",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 3338,
            "end": 3351,
            "callee": {
              "type": "Identifier",
              "start": 3338,
              "end": 3343,
              "name": "foo18",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 3344,
                "end": 3350,
                "name": "r18arg",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
