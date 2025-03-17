__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 616,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 198,
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
        "end": 198,
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
            "type": "ExportNamedDeclaration",
            "start": 89,
            "end": 196,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 96,
              "end": 196,
              "id": {
                "type": "Identifier",
                "start": 103,
                "end": 106,
                "name": "inA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 107,
                "end": 196,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 117,
                    "end": 190,
                    "declaration": {
                      "type": "TSInterfaceDeclaration",
                      "start": 124,
                      "end": 190,
                      "id": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 141,
                        "name": "Point3D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "extends": [
                        {
                          "type": "TSInterfaceHeritage",
                          "start": 150,
                          "end": 155,
                          "expression": {
                            "type": "Identifier",
                            "start": 150,
                            "end": 155,
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
                        "start": 156,
                        "end": 190,
                        "body": [
                          {
                            "type": "TSPropertySignature",
                            "start": 170,
                            "end": 180,
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "start": 170,
                              "end": 171,
                              "name": "z",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 171,
                              "end": 179,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 173,
                                "end": 179
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
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
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
      "start": 224,
      "end": 254,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 232,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 233,
        "end": 254,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 239,
            "end": 252,
            "id": {
              "type": "Identifier",
              "start": 246,
              "end": 247,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 280,
      "end": 406,
      "id": {
        "type": "Identifier",
        "start": 287,
        "end": 288,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 289,
        "end": 406,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 295,
            "end": 308,
            "id": {
              "type": "Identifier",
              "start": 302,
              "end": 303,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 306,
              "end": 307,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 313,
            "end": 330,
            "id": {
              "type": "Identifier",
              "start": 320,
              "end": 321,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 324,
              "end": 329,
              "left": {
                "type": "Identifier",
                "start": 324,
                "end": 325,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 326,
                "end": 329,
                "name": "inA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 335,
            "end": 351,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 339,
                "end": 350,
                "id": {
                  "type": "Identifier",
                  "start": 339,
                  "end": 350,
                  "name": "m",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 340,
                    "end": 350,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 342,
                      "end": 350,
                      "exprName": {
                        "type": "Identifier",
                        "start": 349,
                        "end": 350,
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
            "start": 356,
            "end": 373,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 360,
                "end": 372,
                "id": {
                  "type": "Identifier",
                  "start": 360,
                  "end": 372,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 361,
                    "end": 372,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 363,
                      "end": 372,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 363,
                        "end": 372,
                        "left": {
                          "type": "Identifier",
                          "start": 363,
                          "end": 364,
                          "name": "b",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 365,
                          "end": 372,
                          "name": "Point3D",
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
            "start": 378,
            "end": 404,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 382,
                "end": 403,
                "id": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 383,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 386,
                  "end": 403,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 387,
                      "end": 390,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 387,
                        "end": 388,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 389,
                        "end": 390,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 392,
                      "end": 395,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 392,
                        "end": 393,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 394,
                        "end": 395,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 397,
                      "end": 401,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 397,
                        "end": 398,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 400,
                        "end": 401,
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 432,
      "end": 484,
      "id": {
        "type": "Identifier",
        "start": 439,
        "end": 440,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 441,
        "end": 484,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 447,
            "end": 460,
            "id": {
              "type": "Identifier",
              "start": 454,
              "end": 455,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 458,
              "end": 459,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "VariableDeclaration",
            "start": 466,
            "end": 482,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 470,
                "end": 481,
                "id": {
                  "type": "Identifier",
                  "start": 470,
                  "end": 481,
                  "name": "p",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 472,
                    "end": 481,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 474,
                      "end": 481,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 474,
                        "end": 481,
                        "left": {
                          "type": "Identifier",
                          "start": 474,
                          "end": 475,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 476,
                          "end": 481,
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 510,
      "end": 616,
      "id": {
        "type": "Identifier",
        "start": 517,
        "end": 518,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 519,
        "end": 616,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 525,
            "end": 542,
            "id": {
              "type": "Identifier",
              "start": 532,
              "end": 533,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 536,
              "end": 541,
              "left": {
                "type": "Identifier",
                "start": 536,
                "end": 537,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 538,
                "end": 541,
                "name": "inA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 547,
            "end": 614,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 554,
              "end": 614,
              "id": {
                "type": "Identifier",
                "start": 563,
                "end": 568,
                "name": "xDist",
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
                  "start": 569,
                  "end": 581,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 570,
                    "end": 581,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 572,
                      "end": 581,
                      "typeName": {
                        "type": "TSQualifiedName",
                        "start": 572,
                        "end": 581,
                        "left": {
                          "type": "Identifier",
                          "start": 572,
                          "end": 573,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 574,
                          "end": 581,
                          "name": "Point3D",
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
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 583,
                "end": 614,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 593,
                    "end": 608,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 600,
                      "end": 607,
                      "left": {
                        "type": "Literal",
                        "start": 600,
                        "end": 601,
                        "value": 0,
                        "raw": "0"
                      },
                      "operator": "-",
                      "right": {
                        "type": "MemberExpression",
                        "start": 604,
                        "end": 607,
                        "object": {
                          "type": "Identifier",
                          "start": 604,
                          "end": 605,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 606,
                          "end": 607,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
