__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 848,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 149,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 83,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 22,
              "end": 83,
              "id": {
                "type": "Identifier",
                "start": 32,
                "end": 37,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 38,
                "end": 83,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 48,
                    "end": 58,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 48,
                      "end": 49,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 49,
                      "end": 57,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 51,
                        "end": 57
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 67,
                    "end": 77,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 67,
                      "end": 68,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 68,
                      "end": 76,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 70,
                        "end": 76
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
            "attributes": [],
            "exportKind": "type"
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 89,
            "end": 147,
            "id": {
              "type": "Identifier",
              "start": 99,
              "end": 106,
              "name": "Point3d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 115,
                "end": 120,
                "expression": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 120,
                  "name": "Point",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ],
            "typeParameters": null,
            "body": {
              "type": "TSInterfaceBody",
              "start": 121,
              "end": 147,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 131,
                  "end": 141,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 132,
                    "end": 140,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 134,
                      "end": 140
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 151,
      "end": 261,
      "id": {
        "type": "Identifier",
        "start": 158,
        "end": 159,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 160,
        "end": 261,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 166,
            "end": 259,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 173,
              "end": 259,
              "id": {
                "type": "Identifier",
                "start": 179,
                "end": 183,
                "name": "Line",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 184,
                "end": 259,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 194,
                    "end": 253,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 205,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 205,
                      "end": 253,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
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
                            "name": "start",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 218,
                              "end": 227,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 220,
                                "end": 227,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 220,
                                  "end": 227,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 220,
                                    "end": 221,
                                    "name": "A",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 222,
                                    "end": 227,
                                    "name": "Point",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
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
                            "name": "end",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 239,
                              "end": 248,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 241,
                                "end": 248,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 241,
                                  "end": 248,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 241,
                                    "end": 242,
                                    "name": "A",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 243,
                                    "end": 248,
                                    "name": "Point",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "body": {
                        "type": "BlockStatement",
                        "start": 250,
                        "end": 253,
                        "body": []
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 263,
      "end": 528,
      "id": {
        "type": "Identifier",
        "start": 270,
        "end": 278,
        "name": "Geometry",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 279,
        "end": 528,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 285,
            "end": 310,
            "declaration": {
              "type": "TSImportEqualsDeclaration",
              "start": 292,
              "end": 310,
              "id": {
                "type": "Identifier",
                "start": 299,
                "end": 305,
                "name": "Points",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "moduleReference": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "importKind": "value"
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 315,
            "end": 332,
            "id": {
              "type": "Identifier",
              "start": 322,
              "end": 327,
              "name": "Lines",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 338,
            "end": 387,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 345,
              "end": 387,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 349,
                  "end": 386,
                  "id": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 369,
                    "name": "Origin",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 355,
                      "end": 369,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 357,
                        "end": 369,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 357,
                          "end": 369,
                          "left": {
                            "type": "Identifier",
                            "start": 357,
                            "end": 363,
                            "name": "Points",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 364,
                            "end": 369,
                            "name": "Point",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 374,
                          "end": 375,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 377,
                          "end": 378,
                          "value": 0,
                          "raw": "0"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 380,
                        "end": 384,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 380,
                          "end": 381,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 383,
                          "end": 384,
                          "value": 0,
                          "raw": "0"
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 457,
            "end": 526,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 464,
              "end": 526,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 468,
                  "end": 525,
                  "id": {
                    "type": "Identifier",
                    "start": 468,
                    "end": 484,
                    "name": "Unit",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 472,
                      "end": 484,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 474,
                        "end": 484,
                        "typeName": {
                          "type": "TSQualifiedName",
                          "start": 474,
                          "end": 484,
                          "left": {
                            "type": "Identifier",
                            "start": 474,
                            "end": 479,
                            "name": "Lines",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 480,
                            "end": 484,
                            "name": "Line",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 487,
                    "end": 525,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 491,
                      "end": 501,
                      "object": {
                        "type": "Identifier",
                        "start": 491,
                        "end": 496,
                        "name": "Lines",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 497,
                        "end": 501,
                        "name": "Line",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 502,
                        "end": 508,
                        "name": "Origin",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 512,
                              "end": 513,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 515,
                              "end": 516,
                              "value": 1,
                              "raw": "1"
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 518,
                            "end": 522,
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 518,
                              "end": 519,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Literal",
                              "start": 521,
                              "end": 522,
                              "value": 0,
                              "raw": "0"
                            },
                            "kind": "init",
                            "optional": false
                          }
                        ]
                      }
                    ],
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
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
          "id": {
            "type": "Identifier",
            "start": 577,
            "end": 604,
            "name": "p",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 582,
                      "end": 583,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 583,
                      "end": 591,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 585,
                        "end": 591
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 593,
                    "end": 602,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 593,
                      "end": 594,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 594,
                      "end": 602,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 596,
                        "end": 602
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 610,
            "end": 634,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 611,
              "end": 634,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 613,
                "end": 634,
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
                      "name": "Geometry",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 622,
                      "end": 628,
                      "name": "Points",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 629,
                    "end": 634,
                    "name": "Point",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeArguments": null
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
      "start": 636,
      "end": 660,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 640,
          "end": 659,
          "id": {
            "type": "Identifier",
            "start": 640,
            "end": 641,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 644,
            "end": 659,
            "object": {
              "type": "Identifier",
              "start": 644,
              "end": 652,
              "name": "Geometry",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 653,
              "end": 659,
              "name": "Origin",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 666,
            "end": 739,
            "name": "line",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 674,
                      "end": 679,
                      "name": "start",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 683,
                              "end": 684,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 684,
                              "end": 692,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 686,
                                "end": 692
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 694,
                            "end": 703,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 694,
                              "end": 695,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 695,
                              "end": 703,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 697,
                                "end": 703
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 707,
                    "end": 737,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 707,
                      "end": 710,
                      "name": "end",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 714,
                              "end": 715,
                              "name": "x",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 715,
                              "end": 723,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 717,
                                "end": 723
                              }
                            },
                            "accessibility": null,
                            "static": false
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 725,
                            "end": 735,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 725,
                              "end": 726,
                              "name": "y",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 726,
                              "end": 734,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 728,
                                "end": 734
                              }
                            },
                            "accessibility": null,
                            "static": false
                          }
                        ]
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 745,
            "end": 749,
            "name": "line",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 752,
            "end": 765,
            "object": {
              "type": "Identifier",
              "start": 752,
              "end": 760,
              "name": "Geometry",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 761,
              "end": 765,
              "name": "Unit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 819,
            "end": 823,
            "name": "line",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 826,
            "end": 845,
            "object": {
              "type": "MemberExpression",
              "start": 826,
              "end": 840,
              "object": {
                "type": "Identifier",
                "start": 826,
                "end": 834,
                "name": "Geometry",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 835,
                "end": 840,
                "name": "Lines",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 841,
              "end": 845,
              "name": "Line",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
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
