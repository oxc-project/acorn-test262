__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 714,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 86,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 62,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 62,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 37,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 38,
                "end": 62,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 40,
                    "end": 50,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 40,
                      "end": 41,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 43,
                        "end": 49
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 51,
                    "end": 60,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 52,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 52,
                      "end": 60,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 54,
                        "end": 60
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 67,
            "end": 84,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 74,
              "end": 84,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 78,
                  "end": 83,
                  "id": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 79,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 82,
                    "end": 83,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 127,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 126,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 126,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 126,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 118,
                "end": 126,
                "exprName": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 126,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
      "start": 128,
      "end": 138,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 137,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 136,
            "end": 137,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 155,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 154,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 154,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 154,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 148,
                "end": 154
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
      "start": 156,
      "end": 169,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 168,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 162,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 165,
            "end": 168,
            "object": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 167,
              "end": 168,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 171,
      "end": 186,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 185,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 179,
                "end": 185
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
      "start": 187,
      "end": 200,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 199,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 193,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 196,
            "end": 199,
            "object": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 202,
      "end": 408,
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 211,
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 212,
        "end": 408,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 218,
            "end": 332,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 225,
              "end": 332,
              "id": {
                "type": "Identifier",
                "start": 232,
                "end": 237,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 238,
                "end": 332,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 248,
                    "end": 326,
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "start": 255,
                      "end": 326,
                      "id": {
                        "type": "Identifier",
                        "start": 264,
                        "end": 270,
                        "decorators": [],
                        "name": "Origin",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 272,
                        "end": 279,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 274,
                          "end": 279,
                          "typeName": {
                            "type": "Identifier",
                            "start": 274,
                            "end": 279,
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 280,
                        "end": 326,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 294,
                            "end": 316,
                            "argument": {
                              "type": "ObjectExpression",
                              "start": 301,
                              "end": 315,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 303,
                                  "end": 307,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 303,
                                    "end": 304,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 306,
                                    "end": 307,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 309,
                                  "end": 313,
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "start": 309,
                                    "end": 310,
                                    "decorators": [],
                                    "name": "y",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 312,
                                    "end": 313,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 338,
            "end": 406,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 345,
              "end": 406,
              "id": {
                "type": "Identifier",
                "start": 355,
                "end": 360,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 361,
                "end": 406,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 371,
                    "end": 381,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 371,
                      "end": 372,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 372,
                      "end": 380,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 374,
                        "end": 380
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 390,
                    "end": 400,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 390,
                      "end": 391,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 391,
                      "end": 399,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 393,
                        "end": 399
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 410,
      "end": 443,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 414,
          "end": 442,
          "id": {
            "type": "Identifier",
            "start": 414,
            "end": 442,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 415,
              "end": 442,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 417,
                "end": 442,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 419,
                    "end": 429,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 419,
                      "end": 420,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 420,
                      "end": 428,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 422,
                        "end": 428
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 430,
                    "end": 440,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 430,
                      "end": 431,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 431,
                      "end": 439,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 433,
                        "end": 439
                      }
                    },
                    "accessibility": null,
                    "static": false
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
      "type": "VariableDeclaration",
      "start": 444,
      "end": 460,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 448,
          "end": 459,
          "id": {
            "type": "Identifier",
            "start": 448,
            "end": 459,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 449,
              "end": 459,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 451,
                "end": 459,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 451,
                  "end": 459,
                  "left": {
                    "type": "Identifier",
                    "start": 451,
                    "end": 453,
                    "decorators": [],
                    "name": "M2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 454,
                    "end": 459,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "start": 462,
      "end": 511,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 466,
          "end": 510,
          "id": {
            "type": "Identifier",
            "start": 466,
            "end": 510,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 468,
              "end": 510,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 470,
                "end": 510,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 472,
                    "end": 508,
                    "key": {
                      "type": "Identifier",
                      "start": 472,
                      "end": 478,
                      "decorators": [],
                      "name": "Origin",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 481,
                      "end": 508,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 483,
                        "end": 508,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 485,
                            "end": 495,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 485,
                              "end": 486,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 486,
                              "end": 494,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 488,
                                "end": 494
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 496,
                            "end": 506,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 496,
                              "end": 497,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 497,
                              "end": 505,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 499,
                                "end": 505
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
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
      "type": "VariableDeclaration",
      "start": 512,
      "end": 536,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 516,
          "end": 535,
          "id": {
            "type": "Identifier",
            "start": 516,
            "end": 535,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 518,
              "end": 535,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 520,
                "end": 535,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 527,
                  "end": 535,
                  "left": {
                    "type": "Identifier",
                    "start": 527,
                    "end": 529,
                    "decorators": [],
                    "name": "M2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 530,
                    "end": 535,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
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
      "type": "TSModuleDeclaration",
      "start": 538,
      "end": 714,
      "id": {
        "type": "Identifier",
        "start": 545,
        "end": 547,
        "decorators": [],
        "name": "M3",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 548,
        "end": 714,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 554,
            "end": 658,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 561,
              "end": 658,
              "id": {
                "type": "Identifier",
                "start": 568,
                "end": 573,
                "decorators": [],
                "name": "Utils",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 574,
                "end": 658,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 584,
                    "end": 652,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 591,
                      "end": 652,
                      "id": {
                        "type": "Identifier",
                        "start": 601,
                        "end": 606,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "start": 607,
                        "end": 652,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 621,
                            "end": 631,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 621,
                              "end": 622,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 622,
                              "end": 630,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 624,
                                "end": 630
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 632,
                            "end": 642,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 632,
                              "end": 633,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 633,
                              "end": 641,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 635,
                                "end": 641
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      },
                      "declare": false
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": []
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 664,
            "end": 712,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 671,
              "end": 712,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 677,
                "end": 682,
                "decorators": [],
                "name": "Utils",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 683,
                "end": 712,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 693,
                    "end": 706,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 693,
                      "end": 697,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 697,
                      "end": 705,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 699,
                        "end": 705
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
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
