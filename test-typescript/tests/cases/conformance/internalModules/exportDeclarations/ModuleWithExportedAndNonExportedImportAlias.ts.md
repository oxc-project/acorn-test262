__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 847,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 149,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 149,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 83,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 83,
              "body": {
                "type": "TSInterfaceBody",
                "start": 38,
                "end": 83,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 48,
                    "end": 58,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 51,
                        "end": 57
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 67,
                    "end": 77,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 76,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 70,
                        "end": 76
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 37,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 89,
            "end": 147,
            "body": {
              "type": "TSInterfaceBody",
              "start": 121,
              "end": 147,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 131,
                  "end": 141,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 132,
                    "end": 140,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 134,
                      "end": 140
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 115,
                "end": 120,
                "expression": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 120,
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 99,
              "end": 106,
              "decorators": [],
              "name": "Point3d",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 151,
      "end": 261,
      "body": {
        "type": "TSModuleBlock",
        "start": 160,
        "end": 261,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 166,
            "end": 259,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 173,
              "end": 259,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 184,
                "end": 259,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 194,
                    "end": 253,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 205,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "constructor",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 205,
                      "end": 253,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 250,
                        "end": 253,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 206,
                          "end": 227,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 213,
                            "end": 227,
                            "decorators": [],
                            "name": "start",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 218,
                              "end": 227,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 220,
                                "end": 227,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 220,
                                  "end": 227,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 220,
                                    "end": 221,
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 222,
                                    "end": 227,
                                    "decorators": [],
                                    "name": "Point",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 229,
                          "end": 248,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 236,
                            "end": 248,
                            "decorators": [],
                            "name": "end",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 239,
                              "end": 248,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 241,
                                "end": 248,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 241,
                                  "end": 248,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 241,
                                    "end": 242,
                                    "decorators": [],
                                    "name": "A",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 243,
                                    "end": 248,
                                    "decorators": [],
                                    "name": "Point",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "typeParameters": null
                    }
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 179,
                "end": 183,
                "decorators": [],
                "name": "Line",
                "optional": false,
                "typeAnnotation": null
              },
              "implements": [],
              "superClass": null,
              "superTypeArguments": null,
              "typeParameters": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 159,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 263,
      "end": 528,
      "body": {
        "type": "TSModuleBlock",
        "start": 279,
        "end": 528,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 285,
            "end": 310,
            "attributes": [],
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 292,
              "end": 310,
              "id": {
                "type": "Identifier",
                "start": 299,
                "end": 305,
                "decorators": [],
                "name": "Points",
                "optional": false,
                "typeAnnotation": null
              },
              "importKind": "value",
              "moduleReference": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 315,
            "end": 332,
            "id": {
              "type": "Identifier",
              "start": 322,
              "end": 327,
              "decorators": [],
              "name": "Lines",
              "optional": false,
              "typeAnnotation": null
            },
            "importKind": "value",
            "moduleReference": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 338,
            "end": 387,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 345,
              "end": 387,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 349,
                  "end": 386,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 369,
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 355,
                      "end": 369,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 357,
                        "end": 369,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 357,
                          "end": 369,
                          "left": {
                            "type": "Identifier",
                            "start": 357,
                            "end": 363,
                            "decorators": [],
                            "name": "Points",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 364,
                            "end": 369,
                            "decorators": [],
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "start": 372,
                    "end": 386,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 374,
                        "end": 378,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 374,
                          "end": 375,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 377,
                          "end": 378,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 380,
                        "end": 384,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 380,
                          "end": 381,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 383,
                          "end": 384,
                          "raw": "0",
                          "value": 0,
                          "regex": null,
                          "bigint": null
                        }
                      }
                    ]
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 457,
            "end": 526,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 464,
              "end": 526,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 468,
                  "end": 525,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 468,
                    "end": 484,
                    "decorators": [],
                    "name": "Unit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 472,
                      "end": 484,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 474,
                        "end": 484,
                        "typeArguments": null,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 474,
                          "end": 484,
                          "left": {
                            "type": "Identifier",
                            "start": 474,
                            "end": 479,
                            "decorators": [],
                            "name": "Lines",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 480,
                            "end": 484,
                            "decorators": [],
                            "name": "Line",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 487,
                    "end": 525,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 502,
                        "end": 508,
                        "decorators": [],
                        "name": "Origin",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "ObjectExpression",
                        "start": 510,
                        "end": 524,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 512,
                            "end": 516,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 512,
                              "end": 513,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 515,
                              "end": 516,
                              "raw": "1",
                              "value": 1,
                              "regex": null,
                              "bigint": null
                            }
                          },
                          {
                            "type": "Property",
                            "start": 518,
                            "end": 522,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 518,
                              "end": 519,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": false,
                            "value": {
                              "type": "Literal",
                              "start": 521,
                              "end": 522,
                              "raw": "0",
                              "value": 0,
                              "regex": null,
                              "bigint": null
                            }
                          }
                        ]
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 491,
                      "end": 501,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 496,
                        "decorators": [],
                        "name": "Lines",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 497,
                        "end": 501,
                        "decorators": [],
                        "name": "Line",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeArguments": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 278,
        "decorators": [],
        "name": "Geometry",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 573,
      "end": 605,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 577,
          "end": 604,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 577,
            "end": 604,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 578,
              "end": 604,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 580,
                "end": 604,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 582,
                    "end": 592,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 582,
                      "end": 583,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 583,
                      "end": 591,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 585,
                        "end": 591
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 593,
                    "end": 602,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 593,
                      "end": 594,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 594,
                      "end": 602,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 596,
                        "end": 602
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
      "start": 606,
      "end": 635,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 610,
          "end": 634,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 610,
            "end": 634,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 611,
              "end": 634,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 613,
                "end": 634,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 613,
                  "end": 634,
                  "left": {
                    "type": "TSQualifiedName",
                    "start": 613,
                    "end": 628,
                    "left": {
                      "type": "Identifier",
                      "start": 613,
                      "end": 621,
                      "decorators": [],
                      "name": "Geometry",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 622,
                      "end": 628,
                      "decorators": [],
                      "name": "Points",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 629,
                    "end": 634,
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
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
      "start": 636,
      "end": 660,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 640,
          "end": 659,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 640,
            "end": 641,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 644,
            "end": 659,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 644,
              "end": 652,
              "decorators": [],
              "name": "Geometry",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 653,
              "end": 659,
              "decorators": [],
              "name": "Origin",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 662,
      "end": 740,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 666,
          "end": 739,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 666,
            "end": 739,
            "decorators": [],
            "name": "line",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 670,
              "end": 739,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 672,
                "end": 739,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 674,
                    "end": 706,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 674,
                      "end": 679,
                      "decorators": [],
                      "name": "start",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 679,
                      "end": 705,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 681,
                        "end": 705,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 683,
                            "end": 693,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 683,
                              "end": 684,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 684,
                              "end": 692,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 686,
                                "end": 692
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 694,
                            "end": 703,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 694,
                              "end": 695,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 695,
                              "end": 703,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 697,
                                "end": 703
                              }
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 707,
                    "end": 737,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 707,
                      "end": 710,
                      "decorators": [],
                      "name": "end",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 710,
                      "end": 737,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 712,
                        "end": 737,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 714,
                            "end": 724,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 714,
                              "end": 715,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 715,
                              "end": 723,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 717,
                                "end": 723
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 725,
                            "end": 735,
                            "accessibility": null,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 725,
                              "end": 726,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 726,
                              "end": 734,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 728,
                                "end": 734
                              }
                            }
                          }
                        ]
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
      "start": 741,
      "end": 766,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 745,
          "end": 765,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 745,
            "end": 749,
            "decorators": [],
            "name": "line",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 752,
            "end": 765,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 752,
              "end": 760,
              "decorators": [],
              "name": "Geometry",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 761,
              "end": 765,
              "decorators": [],
              "name": "Unit",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 815,
      "end": 846,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 819,
          "end": 845,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 819,
            "end": 823,
            "decorators": [],
            "name": "line",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 826,
            "end": 845,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 826,
              "end": 840,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 826,
                "end": 834,
                "decorators": [],
                "name": "Geometry",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 835,
                "end": 840,
                "decorators": [],
                "name": "Lines",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 841,
              "end": 845,
              "decorators": [],
              "name": "Line",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
