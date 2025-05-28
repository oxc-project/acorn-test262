__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 102,
  "end": 3447,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 102,
      "end": 129,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 112,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 129,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 127,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 115,
              "end": 118,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 130,
      "end": 173,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 136,
        "end": 143,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 152,
        "end": 156,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 157,
        "end": 173,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 159,
            "end": 171,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 162,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 174,
      "end": 221,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 180,
        "end": 188,
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 197,
        "end": 204,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 205,
        "end": 221,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 207,
            "end": 219,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 210,
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 222,
      "end": 271,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 228,
        "end": 240,
        "decorators": [],
        "name": "OtherDerived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 249,
        "end": 253,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 254,
        "end": 271,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 256,
            "end": 269,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 256,
              "end": 260,
              "decorators": [],
              "name": "bing",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 273,
      "end": 320,
      "id": {
        "type": "Identifier",
        "start": 290,
        "end": 294,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 295,
          "end": 318,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 296,
            "end": 318,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 298,
              "end": 318,
              "abstract": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 302,
                "end": 305,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 303,
                    "end": 304,
                    "name": {
                      "type": "Identifier",
                      "start": 303,
                      "end": 304,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 306,
                  "end": 310,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 307,
                    "end": 310,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 309,
                      "end": 310,
                      "typeName": {
                        "type": "Identifier",
                        "start": 309,
                        "end": 310,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 312,
                "end": 318,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 315,
                  "end": 318,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 315,
                    "end": 316,
                    "typeName": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 316,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 321,
      "end": 356,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 342,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 343,
          "end": 349,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 344,
            "end": 349,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 346,
              "end": 349
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 350,
        "end": 355,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 352,
          "end": 355
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 358,
      "end": 411,
      "id": {
        "type": "Identifier",
        "start": 375,
        "end": 379,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 380,
          "end": 409,
          "decorators": [],
          "name": "a2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 382,
            "end": 409,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 384,
              "end": 409,
              "abstract": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 388,
                "end": 391,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 389,
                    "end": 390,
                    "name": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 390,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 392,
                  "end": 396,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 393,
                    "end": 396,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 395,
                      "end": 396,
                      "typeName": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 396,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 398,
                "end": 409,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 401,
                  "end": 409,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 401,
                    "end": 407
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 412,
      "end": 447,
      "id": {
        "type": "Identifier",
        "start": 429,
        "end": 433,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 434,
          "end": 440,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 435,
            "end": 440,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 437,
              "end": 440
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 441,
        "end": 446,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 443,
          "end": 446
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 449,
      "end": 498,
      "id": {
        "type": "Identifier",
        "start": 466,
        "end": 470,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 471,
          "end": 496,
          "decorators": [],
          "name": "a3",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 473,
            "end": 496,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 475,
              "end": 496,
              "abstract": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 479,
                "end": 482,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 480,
                    "end": 481,
                    "name": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 481,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 483,
                  "end": 487,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 484,
                    "end": 487,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 486,
                      "end": 487,
                      "typeName": {
                        "type": "Identifier",
                        "start": 486,
                        "end": 487,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 489,
                "end": 496,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 492,
                  "end": 496
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 499,
      "end": 534,
      "id": {
        "type": "Identifier",
        "start": 516,
        "end": 520,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 521,
          "end": 527,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 522,
            "end": 527,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 524,
              "end": 527
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 528,
        "end": 533,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 530,
          "end": 533
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 536,
      "end": 596,
      "id": {
        "type": "Identifier",
        "start": 553,
        "end": 557,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 558,
          "end": 594,
          "decorators": [],
          "name": "a4",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 560,
            "end": 594,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 562,
              "end": 594,
              "abstract": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 566,
                "end": 572,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 567,
                    "end": 568,
                    "name": {
                      "type": "Identifier",
                      "start": 567,
                      "end": 568,
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 570,
                    "end": 571,
                    "name": {
                      "type": "Identifier",
                      "start": 570,
                      "end": 571,
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
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 573,
                  "end": 577,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 574,
                    "end": 577,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 576,
                      "end": 577,
                      "typeName": {
                        "type": "Identifier",
                        "start": 576,
                        "end": 577,
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
                  "start": 579,
                  "end": 583,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 580,
                    "end": 583,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 582,
                      "end": 583,
                      "typeName": {
                        "type": "Identifier",
                        "start": 582,
                        "end": 583,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 585,
                "end": 594,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 588,
                  "end": 594
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 597,
      "end": 632,
      "id": {
        "type": "Identifier",
        "start": 614,
        "end": 618,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 619,
          "end": 625,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 620,
            "end": 625,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 622,
              "end": 625
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 626,
        "end": 631,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 628,
          "end": 631
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 634,
      "end": 699,
      "id": {
        "type": "Identifier",
        "start": 651,
        "end": 655,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 656,
          "end": 697,
          "decorators": [],
          "name": "a5",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 658,
            "end": 697,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 660,
              "end": 697,
              "abstract": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 664,
                "end": 670,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 665,
                    "end": 666,
                    "name": {
                      "type": "Identifier",
                      "start": 665,
                      "end": 666,
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 668,
                    "end": 669,
                    "name": {
                      "type": "Identifier",
                      "start": 668,
                      "end": 669,
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
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 671,
                  "end": 691,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 672,
                    "end": 691,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 674,
                      "end": 691,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 679,
                          "end": 685,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 682,
                            "end": 685,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 684,
                              "end": 685,
                              "typeName": {
                                "type": "Identifier",
                                "start": 684,
                                "end": 685,
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 687,
                        "end": 691,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 690,
                          "end": 691,
                          "typeName": {
                            "type": "Identifier",
                            "start": 690,
                            "end": 691,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 693,
                "end": 697,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 696,
                  "end": 697,
                  "typeName": {
                    "type": "Identifier",
                    "start": 696,
                    "end": 697,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 700,
      "end": 735,
      "id": {
        "type": "Identifier",
        "start": 717,
        "end": 721,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 722,
          "end": 728,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 723,
            "end": 728,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 725,
              "end": 728
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 729,
        "end": 734,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 731,
          "end": 734
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 737,
      "end": 818,
      "id": {
        "type": "Identifier",
        "start": 754,
        "end": 758,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 759,
          "end": 816,
          "decorators": [],
          "name": "a6",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 761,
            "end": 816,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 763,
              "end": 816,
              "abstract": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 767,
                "end": 783,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 768,
                    "end": 782,
                    "name": {
                      "type": "Identifier",
                      "start": 768,
                      "end": 769,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 778,
                      "end": 782,
                      "typeName": {
                        "type": "Identifier",
                        "start": 778,
                        "end": 782,
                        "decorators": [],
                        "name": "Base",
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
                  "start": 784,
                  "end": 810,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 785,
                    "end": 810,
                    "typeAnnotation": {
                      "type": "TSConstructorType",
                      "start": 787,
                      "end": 810,
                      "abstract": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 792,
                          "end": 798,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 795,
                            "end": 798,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 797,
                              "end": 798,
                              "typeName": {
                                "type": "Identifier",
                                "start": 797,
                                "end": 798,
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
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 800,
                        "end": 810,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 803,
                          "end": 810,
                          "typeName": {
                            "type": "Identifier",
                            "start": 803,
                            "end": 810,
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 812,
                "end": 816,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 815,
                  "end": 816,
                  "typeName": {
                    "type": "Identifier",
                    "start": 815,
                    "end": 816,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 819,
      "end": 854,
      "id": {
        "type": "Identifier",
        "start": 836,
        "end": 840,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 841,
          "end": 847,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 842,
            "end": 847,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 844,
              "end": 847
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 848,
        "end": 853,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 850,
          "end": 853
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 856,
      "end": 939,
      "id": {
        "type": "Identifier",
        "start": 873,
        "end": 878,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 879,
          "end": 937,
          "decorators": [],
          "name": "a11",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 882,
            "end": 937,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 884,
              "end": 937,
              "abstract": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 888,
                "end": 891,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 889,
                    "end": 890,
                    "name": {
                      "type": "Identifier",
                      "start": 889,
                      "end": 890,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 892,
                  "end": 905,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 893,
                    "end": 905,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 895,
                      "end": 905,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 897,
                          "end": 903,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 897,
                            "end": 900,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 900,
                            "end": 903,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 902,
                              "end": 903,
                              "typeName": {
                                "type": "Identifier",
                                "start": 902,
                                "end": 903,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 907,
                  "end": 928,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 908,
                    "end": 928,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 910,
                      "end": 928,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 912,
                          "end": 919,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 912,
                            "end": 915,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 915,
                            "end": 918,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 917,
                              "end": 918,
                              "typeName": {
                                "type": "Identifier",
                                "start": 917,
                                "end": 918,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 920,
                          "end": 926,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 920,
                            "end": 923,
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 923,
                            "end": 926,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 925,
                              "end": 926,
                              "typeName": {
                                "type": "Identifier",
                                "start": 925,
                                "end": 926,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 930,
                "end": 937,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 933,
                  "end": 937,
                  "typeName": {
                    "type": "Identifier",
                    "start": 933,
                    "end": 937,
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 940,
      "end": 976,
      "id": {
        "type": "Identifier",
        "start": 957,
        "end": 962,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 963,
          "end": 969,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 964,
            "end": 969,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 966,
              "end": 969
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 970,
        "end": 975,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 972,
          "end": 975
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 978,
      "end": 1041,
      "id": {
        "type": "Identifier",
        "start": 995,
        "end": 1000,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1001,
          "end": 1039,
          "decorators": [],
          "name": "a15",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1004,
            "end": 1039,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 1006,
              "end": 1039,
              "abstract": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1010,
                "end": 1013,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1011,
                    "end": 1012,
                    "name": {
                      "type": "Identifier",
                      "start": 1011,
                      "end": 1012,
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 1014,
                  "end": 1031,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1015,
                    "end": 1031,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1017,
                      "end": 1031,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1019,
                          "end": 1024,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1019,
                            "end": 1020,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1020,
                            "end": 1023,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1022,
                              "end": 1023,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1022,
                                "end": 1023,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 1025,
                          "end": 1029,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1025,
                            "end": 1026,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1026,
                            "end": 1029,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1028,
                              "end": 1029,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1028,
                                "end": 1029,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1033,
                "end": 1039,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1036,
                  "end": 1039,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 1036,
                    "end": 1037,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1036,
                      "end": 1037,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1042,
      "end": 1078,
      "id": {
        "type": "Identifier",
        "start": 1059,
        "end": 1064,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1065,
          "end": 1071,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1066,
            "end": 1071,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1068,
              "end": 1071
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1072,
        "end": 1077,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1074,
          "end": 1077
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1080,
      "end": 1156,
      "id": {
        "type": "Identifier",
        "start": 1097,
        "end": 1102,
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1103,
          "end": 1154,
          "decorators": [],
          "name": "a16",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1106,
            "end": 1154,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 1108,
              "end": 1154,
              "abstract": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1112,
                "end": 1128,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1113,
                    "end": 1127,
                    "name": {
                      "type": "Identifier",
                      "start": 1113,
                      "end": 1114,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1123,
                      "end": 1127,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1123,
                        "end": 1127,
                        "decorators": [],
                        "name": "Base",
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
                  "start": 1129,
                  "end": 1146,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1130,
                    "end": 1146,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1132,
                      "end": 1146,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1134,
                          "end": 1139,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1134,
                            "end": 1135,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1135,
                            "end": 1138,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1137,
                              "end": 1138,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1137,
                                "end": 1138,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 1140,
                          "end": 1144,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1140,
                            "end": 1141,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1141,
                            "end": 1144,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1143,
                              "end": 1144,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1143,
                                "end": 1144,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1148,
                "end": 1154,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 1151,
                  "end": 1154,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 1151,
                    "end": 1152,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1151,
                      "end": 1152,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1157,
      "end": 1193,
      "id": {
        "type": "Identifier",
        "start": 1174,
        "end": 1179,
        "decorators": [],
        "name": "foo16",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1180,
          "end": 1186,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1181,
            "end": 1186,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1183,
              "end": 1186
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1187,
        "end": 1192,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1189,
          "end": 1192
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1195,
      "end": 1341,
      "id": {
        "type": "Identifier",
        "start": 1212,
        "end": 1217,
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1218,
          "end": 1339,
          "decorators": [],
          "name": "a17",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1221,
            "end": 1339,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1223,
              "end": 1339,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 1229,
                  "end": 1278,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1233,
                    "end": 1252,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1234,
                        "end": 1251,
                        "name": {
                          "type": "Identifier",
                          "start": 1234,
                          "end": 1235,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1244,
                          "end": 1251,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1244,
                            "end": 1251,
                            "decorators": [],
                            "name": "Derived",
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
                      "start": 1253,
                      "end": 1271,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1254,
                        "end": 1271,
                        "typeAnnotation": {
                          "type": "TSConstructorType",
                          "start": 1256,
                          "end": 1271,
                          "abstract": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1261,
                              "end": 1265,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1262,
                                "end": 1265,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1264,
                                  "end": 1265,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1264,
                                    "end": 1265,
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
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1267,
                            "end": 1271,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1270,
                              "end": 1271,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1270,
                                "end": 1271,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1272,
                    "end": 1277,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1274,
                      "end": 1277,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1274,
                        "end": 1275,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1274,
                          "end": 1275,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 1283,
                  "end": 1329,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 1287,
                    "end": 1303,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 1288,
                        "end": 1302,
                        "name": {
                          "type": "Identifier",
                          "start": 1288,
                          "end": 1289,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "start": 1298,
                          "end": 1302,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1298,
                            "end": 1302,
                            "decorators": [],
                            "name": "Base",
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
                      "start": 1304,
                      "end": 1322,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1305,
                        "end": 1322,
                        "typeAnnotation": {
                          "type": "TSConstructorType",
                          "start": 1307,
                          "end": 1322,
                          "abstract": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 1312,
                              "end": 1316,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1313,
                                "end": 1316,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1315,
                                  "end": 1316,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1315,
                                    "end": 1316,
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
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 1318,
                            "end": 1322,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1321,
                              "end": 1322,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1321,
                                "end": 1322,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1323,
                    "end": 1328,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1325,
                      "end": 1328,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 1325,
                        "end": 1326,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1325,
                          "end": 1326,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1342,
      "end": 1378,
      "id": {
        "type": "Identifier",
        "start": 1359,
        "end": 1364,
        "decorators": [],
        "name": "foo17",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1365,
          "end": 1371,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1366,
            "end": 1371,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1368,
              "end": 1371
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1372,
        "end": 1377,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1374,
          "end": 1377
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1380,
      "end": 1634,
      "id": {
        "type": "Identifier",
        "start": 1397,
        "end": 1402,
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1403,
          "end": 1632,
          "decorators": [],
          "name": "a18",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1406,
            "end": 1632,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1408,
              "end": 1632,
              "members": [
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 1414,
                  "end": 1519,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1419,
                      "end": 1510,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1420,
                        "end": 1510,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 1422,
                          "end": 1510,
                          "members": [
                            {
                              "type": "TSConstructSignatureDeclaration",
                              "start": 1432,
                              "end": 1465,
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 1436,
                                "end": 1455,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 1437,
                                    "end": 1454,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 1437,
                                      "end": 1438,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 1447,
                                      "end": 1454,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1447,
                                        "end": 1454,
                                        "decorators": [],
                                        "name": "Derived",
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
                                  "start": 1456,
                                  "end": 1460,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1457,
                                    "end": 1460,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1459,
                                      "end": 1460,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1459,
                                        "end": 1460,
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
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1461,
                                "end": 1464,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1463,
                                  "end": 1464,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1463,
                                    "end": 1464,
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
                              "type": "TSConstructSignatureDeclaration",
                              "start": 1474,
                              "end": 1504,
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 1478,
                                "end": 1494,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 1479,
                                    "end": 1493,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 1479,
                                      "end": 1480,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 1489,
                                      "end": 1493,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1489,
                                        "end": 1493,
                                        "decorators": [],
                                        "name": "Base",
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
                                  "start": 1495,
                                  "end": 1499,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1496,
                                    "end": 1499,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1498,
                                      "end": 1499,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1498,
                                        "end": 1499,
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
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1500,
                                "end": 1503,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1502,
                                  "end": 1503,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1502,
                                    "end": 1503,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1511,
                    "end": 1518,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1513,
                      "end": 1518,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1513,
                        "end": 1516
                      }
                    }
                  }
                },
                {
                  "type": "TSConstructSignatureDeclaration",
                  "start": 1524,
                  "end": 1630,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 1529,
                      "end": 1621,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1530,
                        "end": 1621,
                        "typeAnnotation": {
                          "type": "TSTypeLiteral",
                          "start": 1532,
                          "end": 1621,
                          "members": [
                            {
                              "type": "TSConstructSignatureDeclaration",
                              "start": 1542,
                              "end": 1576,
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 1546,
                                "end": 1566,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 1547,
                                    "end": 1565,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 1547,
                                      "end": 1548,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 1557,
                                      "end": 1565,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1557,
                                        "end": 1565,
                                        "decorators": [],
                                        "name": "Derived2",
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
                                  "start": 1567,
                                  "end": 1571,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1568,
                                    "end": 1571,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1570,
                                      "end": 1571,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1570,
                                        "end": 1571,
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
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1572,
                                "end": 1575,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1574,
                                  "end": 1575,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1574,
                                    "end": 1575,
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
                              "type": "TSConstructSignatureDeclaration",
                              "start": 1585,
                              "end": 1615,
                              "typeParameters": {
                                "type": "TSTypeParameterDeclaration",
                                "start": 1589,
                                "end": 1605,
                                "params": [
                                  {
                                    "type": "TSTypeParameter",
                                    "start": 1590,
                                    "end": 1604,
                                    "name": {
                                      "type": "Identifier",
                                      "start": 1590,
                                      "end": 1591,
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "constraint": {
                                      "type": "TSTypeReference",
                                      "start": 1600,
                                      "end": 1604,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1600,
                                        "end": 1604,
                                        "decorators": [],
                                        "name": "Base",
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
                                  "start": 1606,
                                  "end": 1610,
                                  "decorators": [],
                                  "name": "a",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 1607,
                                    "end": 1610,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 1609,
                                      "end": 1610,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 1609,
                                        "end": 1610,
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
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 1611,
                                "end": 1614,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 1613,
                                  "end": 1614,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 1613,
                                    "end": 1614,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ]
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 1622,
                    "end": 1629,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 1624,
                      "end": 1629,
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 1624,
                        "end": 1627
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1635,
      "end": 1671,
      "id": {
        "type": "Identifier",
        "start": 1652,
        "end": 1657,
        "decorators": [],
        "name": "foo18",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1658,
          "end": 1664,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1659,
            "end": 1664,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1661,
              "end": 1664
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1665,
        "end": 1670,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 1667,
          "end": 1670
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1673,
      "end": 1705,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1677,
          "end": 1704,
          "id": {
            "type": "Identifier",
            "start": 1677,
            "end": 1704,
            "decorators": [],
            "name": "r1arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1682,
              "end": 1704,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1684,
                "end": 1704,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1688,
                  "end": 1691,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1689,
                      "end": 1690,
                      "name": {
                        "type": "Identifier",
                        "start": 1689,
                        "end": 1690,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1692,
                    "end": 1696,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1693,
                      "end": 1696,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1695,
                        "end": 1696,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1695,
                          "end": 1696,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1698,
                  "end": 1704,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1701,
                    "end": 1704,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1701,
                      "end": 1702,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1701,
                        "end": 1702,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 1706,
      "end": 1739,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1710,
          "end": 1738,
          "id": {
            "type": "Identifier",
            "start": 1710,
            "end": 1738,
            "decorators": [],
            "name": "r1arg2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1716,
              "end": 1738,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1718,
                "end": 1738,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1722,
                  "end": 1725,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1723,
                      "end": 1724,
                      "name": {
                        "type": "Identifier",
                        "start": 1723,
                        "end": 1724,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1726,
                    "end": 1730,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1727,
                      "end": 1730,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1729,
                        "end": 1730,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1729,
                          "end": 1730,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1732,
                  "end": 1738,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1735,
                    "end": 1738,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 1735,
                      "end": 1736,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1735,
                        "end": 1736,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 1740,
      "end": 1761,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1744,
          "end": 1760,
          "id": {
            "type": "Identifier",
            "start": 1744,
            "end": 1746,
            "decorators": [],
            "name": "r1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1749,
            "end": 1760,
            "callee": {
              "type": "Identifier",
              "start": 1749,
              "end": 1753,
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1754,
                "end": 1759,
                "decorators": [],
                "name": "r1arg",
                "optional": false,
                "typeAnnotation": null
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
      "start": 1762,
      "end": 1788,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1766,
          "end": 1787,
          "id": {
            "type": "Identifier",
            "start": 1766,
            "end": 1769,
            "decorators": [],
            "name": "r1a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1772,
            "end": 1787,
            "elements": [
              {
                "type": "Identifier",
                "start": 1773,
                "end": 1778,
                "decorators": [],
                "name": "r1arg",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1780,
                "end": 1786,
                "decorators": [],
                "name": "r1arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1789,
      "end": 1815,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1793,
          "end": 1814,
          "id": {
            "type": "Identifier",
            "start": 1793,
            "end": 1796,
            "decorators": [],
            "name": "r1b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1799,
            "end": 1814,
            "elements": [
              {
                "type": "Identifier",
                "start": 1800,
                "end": 1806,
                "decorators": [],
                "name": "r1arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1808,
                "end": 1813,
                "decorators": [],
                "name": "r1arg",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1817,
      "end": 1854,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1821,
          "end": 1853,
          "id": {
            "type": "Identifier",
            "start": 1821,
            "end": 1853,
            "decorators": [],
            "name": "r2arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1826,
              "end": 1853,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1828,
                "end": 1853,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1832,
                  "end": 1835,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1833,
                      "end": 1834,
                      "name": {
                        "type": "Identifier",
                        "start": 1833,
                        "end": 1834,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1836,
                    "end": 1840,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1837,
                      "end": 1840,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1839,
                        "end": 1840,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1839,
                          "end": 1840,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1842,
                  "end": 1853,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1845,
                    "end": 1853,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1845,
                      "end": 1851
                    }
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 1855,
      "end": 1893,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1859,
          "end": 1892,
          "id": {
            "type": "Identifier",
            "start": 1859,
            "end": 1892,
            "decorators": [],
            "name": "r2arg2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1865,
              "end": 1892,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1867,
                "end": 1892,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1871,
                  "end": 1874,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1872,
                      "end": 1873,
                      "name": {
                        "type": "Identifier",
                        "start": 1872,
                        "end": 1873,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1875,
                    "end": 1879,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1876,
                      "end": 1879,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1878,
                        "end": 1879,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1878,
                          "end": 1879,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1881,
                  "end": 1892,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 1884,
                    "end": 1892,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 1884,
                      "end": 1890
                    }
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 1894,
      "end": 1915,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1898,
          "end": 1914,
          "id": {
            "type": "Identifier",
            "start": 1898,
            "end": 1900,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1903,
            "end": 1914,
            "callee": {
              "type": "Identifier",
              "start": 1903,
              "end": 1907,
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1908,
                "end": 1913,
                "decorators": [],
                "name": "r2arg",
                "optional": false,
                "typeAnnotation": null
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
      "start": 1916,
      "end": 1942,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1920,
          "end": 1941,
          "id": {
            "type": "Identifier",
            "start": 1920,
            "end": 1923,
            "decorators": [],
            "name": "r2a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1926,
            "end": 1941,
            "elements": [
              {
                "type": "Identifier",
                "start": 1927,
                "end": 1932,
                "decorators": [],
                "name": "r2arg",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1934,
                "end": 1940,
                "decorators": [],
                "name": "r2arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1943,
      "end": 1969,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1947,
          "end": 1968,
          "id": {
            "type": "Identifier",
            "start": 1947,
            "end": 1950,
            "decorators": [],
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1953,
            "end": 1968,
            "elements": [
              {
                "type": "Identifier",
                "start": 1954,
                "end": 1960,
                "decorators": [],
                "name": "r2arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1962,
                "end": 1967,
                "decorators": [],
                "name": "r2arg",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1971,
      "end": 2001,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1975,
          "end": 2000,
          "id": {
            "type": "Identifier",
            "start": 1975,
            "end": 2000,
            "decorators": [],
            "name": "r3arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1980,
              "end": 2000,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 1982,
                "end": 2000,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 1986,
                  "end": 1989,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 1987,
                      "end": 1988,
                      "name": {
                        "type": "Identifier",
                        "start": 1987,
                        "end": 1988,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1990,
                    "end": 1994,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1991,
                      "end": 1994,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1993,
                        "end": 1994,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1993,
                          "end": 1994,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1996,
                  "end": 2000,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1999,
                    "end": 2000,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1999,
                      "end": 2000,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 2002,
      "end": 2036,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2006,
          "end": 2035,
          "id": {
            "type": "Identifier",
            "start": 2006,
            "end": 2035,
            "decorators": [],
            "name": "r3arg2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2012,
              "end": 2035,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2014,
                "end": 2035,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2018,
                  "end": 2021,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2019,
                      "end": 2020,
                      "name": {
                        "type": "Identifier",
                        "start": 2019,
                        "end": 2020,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2022,
                    "end": 2026,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2023,
                      "end": 2026,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2025,
                        "end": 2026,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2025,
                          "end": 2026,
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
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2028,
                  "end": 2035,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2031,
                    "end": 2035
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 2037,
      "end": 2058,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2041,
          "end": 2057,
          "id": {
            "type": "Identifier",
            "start": 2041,
            "end": 2043,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2046,
            "end": 2057,
            "callee": {
              "type": "Identifier",
              "start": 2046,
              "end": 2050,
              "decorators": [],
              "name": "foo3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2051,
                "end": 2056,
                "decorators": [],
                "name": "r3arg",
                "optional": false,
                "typeAnnotation": null
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
      "start": 2059,
      "end": 2085,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2063,
          "end": 2084,
          "id": {
            "type": "Identifier",
            "start": 2063,
            "end": 2066,
            "decorators": [],
            "name": "r3a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2069,
            "end": 2084,
            "elements": [
              {
                "type": "Identifier",
                "start": 2070,
                "end": 2075,
                "decorators": [],
                "name": "r3arg",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2077,
                "end": 2083,
                "decorators": [],
                "name": "r3arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2086,
      "end": 2112,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2090,
          "end": 2111,
          "id": {
            "type": "Identifier",
            "start": 2090,
            "end": 2093,
            "decorators": [],
            "name": "r3b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2096,
            "end": 2111,
            "elements": [
              {
                "type": "Identifier",
                "start": 2097,
                "end": 2103,
                "decorators": [],
                "name": "r3arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2105,
                "end": 2110,
                "decorators": [],
                "name": "r3arg",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2114,
      "end": 2158,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2118,
          "end": 2157,
          "id": {
            "type": "Identifier",
            "start": 2118,
            "end": 2157,
            "decorators": [],
            "name": "r4arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2123,
              "end": 2157,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2125,
                "end": 2157,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2129,
                  "end": 2135,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2130,
                      "end": 2131,
                      "name": {
                        "type": "Identifier",
                        "start": 2130,
                        "end": 2131,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2133,
                      "end": 2134,
                      "name": {
                        "type": "Identifier",
                        "start": 2133,
                        "end": 2134,
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
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2136,
                    "end": 2140,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2137,
                      "end": 2140,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2139,
                        "end": 2140,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2139,
                          "end": 2140,
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
                    "start": 2142,
                    "end": 2146,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2143,
                      "end": 2146,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2145,
                        "end": 2146,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2145,
                          "end": 2146,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2148,
                  "end": 2157,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2151,
                    "end": 2157
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 2159,
      "end": 2204,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2163,
          "end": 2203,
          "id": {
            "type": "Identifier",
            "start": 2163,
            "end": 2203,
            "decorators": [],
            "name": "r4arg2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2169,
              "end": 2203,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2171,
                "end": 2203,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2175,
                  "end": 2181,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2176,
                      "end": 2177,
                      "name": {
                        "type": "Identifier",
                        "start": 2176,
                        "end": 2177,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2179,
                      "end": 2180,
                      "name": {
                        "type": "Identifier",
                        "start": 2179,
                        "end": 2180,
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
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2182,
                    "end": 2186,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2183,
                      "end": 2186,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2185,
                        "end": 2186,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2185,
                          "end": 2186,
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
                    "start": 2188,
                    "end": 2192,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2189,
                      "end": 2192,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2191,
                        "end": 2192,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2191,
                          "end": 2192,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2194,
                  "end": 2203,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2197,
                    "end": 2203
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 2205,
      "end": 2226,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2209,
          "end": 2225,
          "id": {
            "type": "Identifier",
            "start": 2209,
            "end": 2211,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2214,
            "end": 2225,
            "callee": {
              "type": "Identifier",
              "start": 2214,
              "end": 2218,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2219,
                "end": 2224,
                "decorators": [],
                "name": "r4arg",
                "optional": false,
                "typeAnnotation": null
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
      "start": 2227,
      "end": 2253,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2231,
          "end": 2252,
          "id": {
            "type": "Identifier",
            "start": 2231,
            "end": 2234,
            "decorators": [],
            "name": "r4a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2237,
            "end": 2252,
            "elements": [
              {
                "type": "Identifier",
                "start": 2238,
                "end": 2243,
                "decorators": [],
                "name": "r4arg",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2245,
                "end": 2251,
                "decorators": [],
                "name": "r4arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2254,
      "end": 2280,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2258,
          "end": 2279,
          "id": {
            "type": "Identifier",
            "start": 2258,
            "end": 2261,
            "decorators": [],
            "name": "r4b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2264,
            "end": 2279,
            "elements": [
              {
                "type": "Identifier",
                "start": 2265,
                "end": 2271,
                "decorators": [],
                "name": "r4arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2273,
                "end": 2278,
                "decorators": [],
                "name": "r4arg",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2282,
      "end": 2331,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2286,
          "end": 2330,
          "id": {
            "type": "Identifier",
            "start": 2286,
            "end": 2330,
            "decorators": [],
            "name": "r5arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2291,
              "end": 2330,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2293,
                "end": 2330,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2297,
                  "end": 2303,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2298,
                      "end": 2299,
                      "name": {
                        "type": "Identifier",
                        "start": 2298,
                        "end": 2299,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2301,
                      "end": 2302,
                      "name": {
                        "type": "Identifier",
                        "start": 2301,
                        "end": 2302,
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
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2304,
                    "end": 2324,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2305,
                      "end": 2324,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 2307,
                        "end": 2324,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2312,
                            "end": 2318,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2315,
                              "end": 2318,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2317,
                                "end": 2318,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2317,
                                  "end": 2318,
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
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2320,
                          "end": 2324,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2323,
                            "end": 2324,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2323,
                              "end": 2324,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2326,
                  "end": 2330,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2329,
                    "end": 2330,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2329,
                      "end": 2330,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 2332,
      "end": 2382,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2336,
          "end": 2381,
          "id": {
            "type": "Identifier",
            "start": 2336,
            "end": 2381,
            "decorators": [],
            "name": "r5arg2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2342,
              "end": 2381,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2344,
                "end": 2381,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2348,
                  "end": 2354,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2349,
                      "end": 2350,
                      "name": {
                        "type": "Identifier",
                        "start": 2349,
                        "end": 2350,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2352,
                      "end": 2353,
                      "name": {
                        "type": "Identifier",
                        "start": 2352,
                        "end": 2353,
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
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2355,
                    "end": 2375,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2356,
                      "end": 2375,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 2358,
                        "end": 2375,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2363,
                            "end": 2369,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2366,
                              "end": 2369,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2368,
                                "end": 2369,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2368,
                                  "end": 2369,
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
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2371,
                          "end": 2375,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2374,
                            "end": 2375,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2374,
                              "end": 2375,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2377,
                  "end": 2381,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2380,
                    "end": 2381,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2380,
                      "end": 2381,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 2383,
      "end": 2404,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2387,
          "end": 2403,
          "id": {
            "type": "Identifier",
            "start": 2387,
            "end": 2389,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2392,
            "end": 2403,
            "callee": {
              "type": "Identifier",
              "start": 2392,
              "end": 2396,
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2397,
                "end": 2402,
                "decorators": [],
                "name": "r5arg",
                "optional": false,
                "typeAnnotation": null
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
      "start": 2405,
      "end": 2431,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2409,
          "end": 2430,
          "id": {
            "type": "Identifier",
            "start": 2409,
            "end": 2412,
            "decorators": [],
            "name": "r5a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2415,
            "end": 2430,
            "elements": [
              {
                "type": "Identifier",
                "start": 2416,
                "end": 2421,
                "decorators": [],
                "name": "r5arg",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2423,
                "end": 2429,
                "decorators": [],
                "name": "r5arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2432,
      "end": 2458,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2436,
          "end": 2457,
          "id": {
            "type": "Identifier",
            "start": 2436,
            "end": 2439,
            "decorators": [],
            "name": "r5b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2442,
            "end": 2457,
            "elements": [
              {
                "type": "Identifier",
                "start": 2443,
                "end": 2449,
                "decorators": [],
                "name": "r5arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2451,
                "end": 2456,
                "decorators": [],
                "name": "r5arg",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2460,
      "end": 2538,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2464,
          "end": 2537,
          "id": {
            "type": "Identifier",
            "start": 2464,
            "end": 2537,
            "decorators": [],
            "name": "r6arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2469,
              "end": 2537,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2471,
                "end": 2537,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2475,
                  "end": 2510,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2476,
                      "end": 2490,
                      "name": {
                        "type": "Identifier",
                        "start": 2476,
                        "end": 2477,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2486,
                        "end": 2490,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2486,
                          "end": 2490,
                          "decorators": [],
                          "name": "Base",
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
                      "start": 2492,
                      "end": 2509,
                      "name": {
                        "type": "Identifier",
                        "start": 2492,
                        "end": 2493,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2502,
                        "end": 2509,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2502,
                          "end": 2509,
                          "decorators": [],
                          "name": "Derived",
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
                    "start": 2511,
                    "end": 2531,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2512,
                      "end": 2531,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 2514,
                        "end": 2531,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2519,
                            "end": 2525,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2522,
                              "end": 2525,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2524,
                                "end": 2525,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2524,
                                  "end": 2525,
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
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2527,
                          "end": 2531,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2530,
                            "end": 2531,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2530,
                              "end": 2531,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2533,
                  "end": 2537,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2536,
                    "end": 2537,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2536,
                      "end": 2537,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 2539,
      "end": 2605,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2543,
          "end": 2604,
          "id": {
            "type": "Identifier",
            "start": 2543,
            "end": 2604,
            "decorators": [],
            "name": "r6arg2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2549,
              "end": 2604,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2551,
                "end": 2604,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2555,
                  "end": 2571,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2556,
                      "end": 2570,
                      "name": {
                        "type": "Identifier",
                        "start": 2556,
                        "end": 2557,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 2566,
                        "end": 2570,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2566,
                          "end": 2570,
                          "decorators": [],
                          "name": "Base",
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
                    "start": 2572,
                    "end": 2598,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2573,
                      "end": 2598,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 2575,
                        "end": 2598,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 2580,
                            "end": 2586,
                            "decorators": [],
                            "name": "arg",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2583,
                              "end": 2586,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2585,
                                "end": 2586,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2585,
                                  "end": 2586,
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
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 2588,
                          "end": 2598,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 2591,
                            "end": 2598,
                            "typeName": {
                              "type": "Identifier",
                              "start": 2591,
                              "end": 2598,
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2600,
                  "end": 2604,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2603,
                    "end": 2604,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2603,
                      "end": 2604,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 2606,
      "end": 2627,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2610,
          "end": 2626,
          "id": {
            "type": "Identifier",
            "start": 2610,
            "end": 2612,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2615,
            "end": 2626,
            "callee": {
              "type": "Identifier",
              "start": 2615,
              "end": 2619,
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2620,
                "end": 2625,
                "decorators": [],
                "name": "r6arg",
                "optional": false,
                "typeAnnotation": null
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
      "start": 2628,
      "end": 2654,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2632,
          "end": 2653,
          "id": {
            "type": "Identifier",
            "start": 2632,
            "end": 2635,
            "decorators": [],
            "name": "r6a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2638,
            "end": 2653,
            "elements": [
              {
                "type": "Identifier",
                "start": 2639,
                "end": 2644,
                "decorators": [],
                "name": "r6arg",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2646,
                "end": 2652,
                "decorators": [],
                "name": "r6arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2655,
      "end": 2681,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2659,
          "end": 2680,
          "id": {
            "type": "Identifier",
            "start": 2659,
            "end": 2662,
            "decorators": [],
            "name": "r6b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2665,
            "end": 2680,
            "elements": [
              {
                "type": "Identifier",
                "start": 2666,
                "end": 2672,
                "decorators": [],
                "name": "r6arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2674,
                "end": 2679,
                "decorators": [],
                "name": "r6arg",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2683,
      "end": 2752,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2687,
          "end": 2751,
          "id": {
            "type": "Identifier",
            "start": 2687,
            "end": 2751,
            "decorators": [],
            "name": "r11arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2693,
              "end": 2751,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2695,
                "end": 2751,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2699,
                  "end": 2705,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2700,
                      "end": 2701,
                      "name": {
                        "type": "Identifier",
                        "start": 2700,
                        "end": 2701,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2703,
                      "end": 2704,
                      "name": {
                        "type": "Identifier",
                        "start": 2703,
                        "end": 2704,
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
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2706,
                    "end": 2719,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2707,
                      "end": 2719,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2709,
                        "end": 2719,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2711,
                            "end": 2717,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2711,
                              "end": 2714,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2714,
                              "end": 2717,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2716,
                                "end": 2717,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2716,
                                  "end": 2717,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2721,
                    "end": 2742,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2722,
                      "end": 2742,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2724,
                        "end": 2742,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2726,
                            "end": 2733,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2726,
                              "end": 2729,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2729,
                              "end": 2732,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2731,
                                "end": 2732,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2731,
                                  "end": 2732,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 2734,
                            "end": 2740,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2734,
                              "end": 2737,
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2737,
                              "end": 2740,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2739,
                                "end": 2740,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2739,
                                  "end": 2740,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2744,
                  "end": 2751,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2747,
                    "end": 2751,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2747,
                      "end": 2751,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 2753,
      "end": 2820,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2757,
          "end": 2819,
          "id": {
            "type": "Identifier",
            "start": 2757,
            "end": 2819,
            "decorators": [],
            "name": "r11arg2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2764,
              "end": 2819,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2766,
                "end": 2819,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2770,
                  "end": 2773,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2771,
                      "end": 2772,
                      "name": {
                        "type": "Identifier",
                        "start": 2771,
                        "end": 2772,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2774,
                    "end": 2787,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2775,
                      "end": 2787,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2777,
                        "end": 2787,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2779,
                            "end": 2785,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2779,
                              "end": 2782,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2782,
                              "end": 2785,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2784,
                                "end": 2785,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2784,
                                  "end": 2785,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 2789,
                    "end": 2810,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2790,
                      "end": 2810,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2792,
                        "end": 2810,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2794,
                            "end": 2801,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2794,
                              "end": 2797,
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2797,
                              "end": 2800,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2799,
                                "end": 2800,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2799,
                                  "end": 2800,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 2802,
                            "end": 2808,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2802,
                              "end": 2805,
                              "decorators": [],
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2805,
                              "end": 2808,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2807,
                                "end": 2808,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2807,
                                  "end": 2808,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2812,
                  "end": 2819,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2815,
                    "end": 2819,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2815,
                      "end": 2819,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 2821,
      "end": 2845,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2825,
          "end": 2844,
          "id": {
            "type": "Identifier",
            "start": 2825,
            "end": 2828,
            "decorators": [],
            "name": "r11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 2831,
            "end": 2844,
            "callee": {
              "type": "Identifier",
              "start": 2831,
              "end": 2836,
              "decorators": [],
              "name": "foo11",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 2837,
                "end": 2843,
                "decorators": [],
                "name": "r11arg",
                "optional": false,
                "typeAnnotation": null
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
      "start": 2846,
      "end": 2875,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2850,
          "end": 2874,
          "id": {
            "type": "Identifier",
            "start": 2850,
            "end": 2854,
            "decorators": [],
            "name": "r11a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2857,
            "end": 2874,
            "elements": [
              {
                "type": "Identifier",
                "start": 2858,
                "end": 2864,
                "decorators": [],
                "name": "r11arg",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2866,
                "end": 2873,
                "decorators": [],
                "name": "r11arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2876,
      "end": 2905,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2880,
          "end": 2904,
          "id": {
            "type": "Identifier",
            "start": 2880,
            "end": 2884,
            "decorators": [],
            "name": "r11b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 2887,
            "end": 2904,
            "elements": [
              {
                "type": "Identifier",
                "start": 2888,
                "end": 2895,
                "decorators": [],
                "name": "r11arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 2897,
                "end": 2903,
                "decorators": [],
                "name": "r11arg",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2907,
      "end": 2957,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2911,
          "end": 2956,
          "id": {
            "type": "Identifier",
            "start": 2911,
            "end": 2956,
            "decorators": [],
            "name": "r15arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2917,
              "end": 2956,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2919,
                "end": 2956,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2923,
                  "end": 2929,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2924,
                      "end": 2925,
                      "name": {
                        "type": "Identifier",
                        "start": 2924,
                        "end": 2925,
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
                    },
                    {
                      "type": "TSTypeParameter",
                      "start": 2927,
                      "end": 2928,
                      "name": {
                        "type": "Identifier",
                        "start": 2927,
                        "end": 2928,
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
                  ]
                },
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2930,
                    "end": 2948,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2931,
                      "end": 2948,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2933,
                        "end": 2948,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2935,
                            "end": 2940,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2935,
                              "end": 2936,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2936,
                              "end": 2939,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2938,
                                "end": 2939,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2938,
                                  "end": 2939,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 2941,
                            "end": 2946,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2941,
                              "end": 2942,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2942,
                              "end": 2945,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2944,
                                "end": 2945,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2944,
                                  "end": 2945,
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2950,
                  "end": 2956,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 2953,
                    "end": 2956,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 2953,
                      "end": 2954,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2953,
                        "end": 2954,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 2958,
      "end": 3005,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2962,
          "end": 3004,
          "id": {
            "type": "Identifier",
            "start": 2962,
            "end": 3004,
            "decorators": [],
            "name": "r15arg2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2969,
              "end": 3004,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 2971,
                "end": 3004,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 2975,
                  "end": 2978,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 2976,
                      "end": 2977,
                      "name": {
                        "type": "Identifier",
                        "start": 2976,
                        "end": 2977,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 2979,
                    "end": 2996,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2980,
                      "end": 2996,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 2982,
                        "end": 2996,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 2984,
                            "end": 2989,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2984,
                              "end": 2985,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2985,
                              "end": 2988,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2987,
                                "end": 2988,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2987,
                                  "end": 2988,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 2990,
                            "end": 2994,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 2990,
                              "end": 2991,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2991,
                              "end": 2994,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 2993,
                                "end": 2994,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 2993,
                                  "end": 2994,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 2998,
                  "end": 3004,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3001,
                    "end": 3004,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3001,
                      "end": 3002,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3001,
                        "end": 3002,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 3006,
      "end": 3030,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3010,
          "end": 3029,
          "id": {
            "type": "Identifier",
            "start": 3010,
            "end": 3013,
            "decorators": [],
            "name": "r15",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3016,
            "end": 3029,
            "callee": {
              "type": "Identifier",
              "start": 3016,
              "end": 3021,
              "decorators": [],
              "name": "foo15",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3022,
                "end": 3028,
                "decorators": [],
                "name": "r15arg",
                "optional": false,
                "typeAnnotation": null
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
      "start": 3031,
      "end": 3060,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3035,
          "end": 3059,
          "id": {
            "type": "Identifier",
            "start": 3035,
            "end": 3039,
            "decorators": [],
            "name": "r15a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3042,
            "end": 3059,
            "elements": [
              {
                "type": "Identifier",
                "start": 3043,
                "end": 3049,
                "decorators": [],
                "name": "r15arg",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3051,
                "end": 3058,
                "decorators": [],
                "name": "r15arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3061,
      "end": 3090,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3065,
          "end": 3089,
          "id": {
            "type": "Identifier",
            "start": 3065,
            "end": 3069,
            "decorators": [],
            "name": "r15b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3072,
            "end": 3089,
            "elements": [
              {
                "type": "Identifier",
                "start": 3073,
                "end": 3080,
                "decorators": [],
                "name": "r15arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3082,
                "end": 3088,
                "decorators": [],
                "name": "r15arg",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3092,
      "end": 3151,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3096,
          "end": 3150,
          "id": {
            "type": "Identifier",
            "start": 3096,
            "end": 3150,
            "decorators": [],
            "name": "r16arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3102,
              "end": 3150,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3104,
                "end": 3150,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3108,
                  "end": 3124,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3109,
                      "end": 3123,
                      "name": {
                        "type": "Identifier",
                        "start": 3109,
                        "end": 3110,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 3119,
                        "end": 3123,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3119,
                          "end": 3123,
                          "decorators": [],
                          "name": "Base",
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
                    "start": 3125,
                    "end": 3142,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3126,
                      "end": 3142,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 3128,
                        "end": 3142,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 3130,
                            "end": 3135,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3130,
                              "end": 3131,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3131,
                              "end": 3134,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3133,
                                "end": 3134,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3133,
                                  "end": 3134,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 3136,
                            "end": 3140,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3136,
                              "end": 3137,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3137,
                              "end": 3140,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3139,
                                "end": 3140,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3139,
                                  "end": 3140,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3144,
                  "end": 3150,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3147,
                    "end": 3150,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3147,
                      "end": 3148,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3147,
                        "end": 3148,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 3152,
      "end": 3212,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3156,
          "end": 3211,
          "id": {
            "type": "Identifier",
            "start": 3156,
            "end": 3211,
            "decorators": [],
            "name": "r16arg2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3163,
              "end": 3211,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3165,
                "end": 3211,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3169,
                  "end": 3185,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3170,
                      "end": 3184,
                      "name": {
                        "type": "Identifier",
                        "start": 3170,
                        "end": 3171,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "constraint": {
                        "type": "TSTypeReference",
                        "start": 3180,
                        "end": 3184,
                        "typeName": {
                          "type": "Identifier",
                          "start": 3180,
                          "end": 3184,
                          "decorators": [],
                          "name": "Base",
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
                    "start": 3186,
                    "end": 3203,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3187,
                      "end": 3203,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 3189,
                        "end": 3203,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 3191,
                            "end": 3196,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3191,
                              "end": 3192,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3192,
                              "end": 3195,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3194,
                                "end": 3195,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3194,
                                  "end": 3195,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 3197,
                            "end": 3201,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 3197,
                              "end": 3198,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3198,
                              "end": 3201,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3200,
                                "end": 3201,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3200,
                                  "end": 3201,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3205,
                  "end": 3211,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3208,
                    "end": 3211,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3208,
                      "end": 3209,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3208,
                        "end": 3209,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 3213,
      "end": 3237,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3217,
          "end": 3236,
          "id": {
            "type": "Identifier",
            "start": 3217,
            "end": 3220,
            "decorators": [],
            "name": "r16",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3223,
            "end": 3236,
            "callee": {
              "type": "Identifier",
              "start": 3223,
              "end": 3228,
              "decorators": [],
              "name": "foo16",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3229,
                "end": 3235,
                "decorators": [],
                "name": "r16arg",
                "optional": false,
                "typeAnnotation": null
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
      "start": 3238,
      "end": 3267,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3242,
          "end": 3266,
          "id": {
            "type": "Identifier",
            "start": 3242,
            "end": 3246,
            "decorators": [],
            "name": "r16a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3249,
            "end": 3266,
            "elements": [
              {
                "type": "Identifier",
                "start": 3250,
                "end": 3256,
                "decorators": [],
                "name": "r16arg",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3258,
                "end": 3265,
                "decorators": [],
                "name": "r16arg2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3268,
      "end": 3297,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3272,
          "end": 3296,
          "id": {
            "type": "Identifier",
            "start": 3272,
            "end": 3276,
            "decorators": [],
            "name": "r16b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 3279,
            "end": 3296,
            "elements": [
              {
                "type": "Identifier",
                "start": 3280,
                "end": 3287,
                "decorators": [],
                "name": "r16arg2",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 3289,
                "end": 3295,
                "decorators": [],
                "name": "r16arg",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3299,
      "end": 3346,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3303,
          "end": 3345,
          "id": {
            "type": "Identifier",
            "start": 3303,
            "end": 3345,
            "decorators": [],
            "name": "r17arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3309,
              "end": 3345,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3311,
                "end": 3345,
                "abstract": false,
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "start": 3315,
                  "end": 3318,
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "start": 3316,
                      "end": 3317,
                      "name": {
                        "type": "Identifier",
                        "start": 3316,
                        "end": 3317,
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
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3319,
                    "end": 3337,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3320,
                      "end": 3337,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 3322,
                        "end": 3337,
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3327,
                            "end": 3331,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3328,
                              "end": 3331,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3330,
                                "end": 3331,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3330,
                                  "end": 3331,
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
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3333,
                          "end": 3337,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3336,
                            "end": 3337,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3336,
                              "end": 3337,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3339,
                  "end": 3345,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3342,
                    "end": 3345,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 3342,
                      "end": 3343,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3342,
                        "end": 3343,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 3347,
      "end": 3371,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3351,
          "end": 3370,
          "id": {
            "type": "Identifier",
            "start": 3351,
            "end": 3354,
            "decorators": [],
            "name": "r17",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3357,
            "end": 3370,
            "callee": {
              "type": "Identifier",
              "start": 3357,
              "end": 3362,
              "decorators": [],
              "name": "foo17",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3363,
                "end": 3369,
                "decorators": [],
                "name": "r17arg",
                "optional": false,
                "typeAnnotation": null
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
      "start": 3373,
      "end": 3422,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3377,
          "end": 3421,
          "id": {
            "type": "Identifier",
            "start": 3377,
            "end": 3421,
            "decorators": [],
            "name": "r18arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3383,
              "end": 3421,
              "typeAnnotation": {
                "type": "TSConstructorType",
                "start": 3385,
                "end": 3421,
                "abstract": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 3390,
                    "end": 3411,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3391,
                      "end": 3411,
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "start": 3393,
                        "end": 3411,
                        "abstract": false,
                        "typeParameters": {
                          "type": "TSTypeParameterDeclaration",
                          "start": 3397,
                          "end": 3400,
                          "params": [
                            {
                              "type": "TSTypeParameter",
                              "start": 3398,
                              "end": 3399,
                              "name": {
                                "type": "Identifier",
                                "start": 3398,
                                "end": 3399,
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 3401,
                            "end": 3405,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 3402,
                              "end": 3405,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 3404,
                                "end": 3405,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 3404,
                                  "end": 3405,
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
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 3407,
                          "end": 3411,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3410,
                            "end": 3411,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3410,
                              "end": 3411,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 3413,
                  "end": 3421,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 3416,
                    "end": 3421,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 3416,
                      "end": 3419
                    }
                  }
                }
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
      "type": "VariableDeclaration",
      "start": 3423,
      "end": 3447,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3427,
          "end": 3446,
          "id": {
            "type": "Identifier",
            "start": 3427,
            "end": 3430,
            "decorators": [],
            "name": "r18",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 3433,
            "end": 3446,
            "callee": {
              "type": "Identifier",
              "start": 3433,
              "end": 3438,
              "decorators": [],
              "name": "foo18",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 3439,
                "end": 3445,
                "decorators": [],
                "name": "r18arg",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
