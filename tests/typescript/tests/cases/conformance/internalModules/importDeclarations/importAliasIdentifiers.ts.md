__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 760,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 109,
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 109,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 21,
            "end": 107,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 28,
              "end": 107,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 40,
                "end": 107,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 50,
                    "end": 101,
                    "accessibility": null,
                    "computed": false,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 61,
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
                      "start": 61,
                      "end": 101,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 98,
                        "end": 101,
                        "body": []
                      },
                      "declare": false,
                      "expression": false,
                      "generator": false,
                      "id": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 62,
                          "end": 78,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 69,
                            "end": 78,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 70,
                              "end": 78,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 72,
                                "end": 78
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        },
                        {
                          "type": "TSParameterProperty",
                          "start": 80,
                          "end": 96,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 96,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 88,
                              "end": 96,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 90,
                                "end": 96
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
                "start": 34,
                "end": 39,
                "decorators": [],
                "name": "Point",
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
        "start": 7,
        "end": 14,
        "decorators": [],
        "name": "moduleA",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 111,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 123,
        "decorators": [],
        "name": "alias",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "start": 126,
        "end": 133,
        "decorators": [],
        "name": "moduleA",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 140,
          "end": 154,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 154,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 154,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 143,
                "end": 154,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 143,
                  "end": 154,
                  "left": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 148,
                    "decorators": [],
                    "name": "alias",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 154,
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
      "start": 156,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 176,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 176,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 176,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 163,
                "end": 176,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 163,
                  "end": 176,
                  "left": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 170,
                    "decorators": [],
                    "name": "moduleA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 176,
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
      "start": 178,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 210,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 210,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 183,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 185,
                "end": 210,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 187,
                    "end": 197,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 187,
                      "end": 188,
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
                      "start": 188,
                      "end": 196,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 190,
                        "end": 196
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 198,
                    "end": 208,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 199,
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
                      "start": 199,
                      "end": 207,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 201,
                        "end": 207
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
      "type": "ClassDeclaration",
      "start": 213,
      "end": 248,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 227,
        "end": 248,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 233,
            "end": 246,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 237,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 237,
              "end": 245,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 239,
                "end": 245
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
        "start": 219,
        "end": 226,
        "decorators": [],
        "name": "clodule",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 250,
      "end": 372,
      "body": {
        "type": "TSModuleBlock",
        "start": 265,
        "end": 372,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 271,
            "end": 331,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 278,
              "end": 331,
              "body": {
                "type": "TSInterfaceBody",
                "start": 294,
                "end": 331,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 304,
                    "end": 314,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 304,
                      "end": 305,
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
                      "start": 305,
                      "end": 313,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 307,
                        "end": 313
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 315,
                    "end": 325,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 316,
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
                      "start": 316,
                      "end": 324,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 318,
                        "end": 324
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 288,
                "end": 293,
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
            "type": "VariableDeclaration",
            "start": 336,
            "end": 370,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 340,
                "end": 369,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 352,
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 345,
                    "end": 352,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 347,
                      "end": 352,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 347,
                        "end": 352,
                        "decorators": [],
                        "name": "Point",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 355,
                  "end": 369,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 357,
                      "end": 361,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 358,
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
                        "start": 360,
                        "end": 361,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 363,
                      "end": 367,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 363,
                        "end": 364,
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
                        "start": 366,
                        "end": 367,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 264,
        "decorators": [],
        "name": "clodule",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 374,
      "end": 399,
      "id": {
        "type": "Identifier",
        "start": 381,
        "end": 388,
        "decorators": [],
        "name": "clolias",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "start": 391,
        "end": 398,
        "decorators": [],
        "name": "clodule",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 422,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 421,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 421,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 406,
              "end": 421,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 408,
                "end": 421,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 408,
                  "end": 421,
                  "left": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 415,
                    "decorators": [],
                    "name": "clolias",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 421,
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
      "start": 423,
      "end": 444,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 443,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 443,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 443,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 430,
                "end": 443,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 430,
                  "end": 443,
                  "left": {
                    "type": "Identifier",
                    "start": 430,
                    "end": 437,
                    "decorators": [],
                    "name": "clodule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 438,
                    "end": 443,
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
      "start": 445,
      "end": 478,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 449,
          "end": 477,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 449,
            "end": 477,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 450,
              "end": 477,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 452,
                "end": 477,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 454,
                    "end": 464,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 454,
                      "end": 455,
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
                      "start": 455,
                      "end": 463,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 457,
                        "end": 463
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 465,
                    "end": 475,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 466,
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
                      "start": 466,
                      "end": 474,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 468,
                        "end": 474
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
      "type": "FunctionDeclaration",
      "start": 481,
      "end": 530,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 500,
        "end": 530,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 506,
            "end": 528,
            "argument": {
              "type": "ObjectExpression",
              "start": 513,
              "end": 527,
              "properties": [
                {
                  "type": "Property",
                  "start": 515,
                  "end": 519,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 515,
                    "end": 516,
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
                    "start": 518,
                    "end": 519,
                    "raw": "0",
                    "value": 0
                  }
                },
                {
                  "type": "Property",
                  "start": 521,
                  "end": 525,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 521,
                    "end": 522,
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
                    "start": 524,
                    "end": 525,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 490,
        "end": 497,
        "decorators": [],
        "name": "fundule",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 532,
      "end": 654,
      "body": {
        "type": "TSModuleBlock",
        "start": 547,
        "end": 654,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 553,
            "end": 613,
            "attributes": [],
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 560,
              "end": 613,
              "body": {
                "type": "TSInterfaceBody",
                "start": 576,
                "end": 613,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 586,
                    "end": 596,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 586,
                      "end": 587,
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
                      "start": 587,
                      "end": 595,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 589,
                        "end": 595
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 597,
                    "end": 607,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 597,
                      "end": 598,
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
                      "start": 598,
                      "end": 606,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 600,
                        "end": 606
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "extends": [],
              "id": {
                "type": "Identifier",
                "start": 570,
                "end": 575,
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
            "type": "VariableDeclaration",
            "start": 618,
            "end": 652,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 622,
                "end": 651,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 622,
                  "end": 634,
                  "decorators": [],
                  "name": "Point",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 627,
                    "end": 634,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 629,
                      "end": 634,
                      "typeArguments": null,
                      "typeName": {
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
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 637,
                  "end": 651,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 639,
                      "end": 643,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 639,
                        "end": 640,
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
                        "start": 642,
                        "end": 643,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    {
                      "type": "Property",
                      "start": 645,
                      "end": 649,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 645,
                        "end": 646,
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
                        "start": 648,
                        "end": 649,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  ]
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 539,
        "end": 546,
        "decorators": [],
        "name": "fundule",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 656,
      "end": 681,
      "id": {
        "type": "Identifier",
        "start": 663,
        "end": 670,
        "decorators": [],
        "name": "funlias",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "start": 673,
        "end": 680,
        "decorators": [],
        "name": "fundule",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 683,
      "end": 704,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 687,
          "end": 703,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 687,
            "end": 703,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 688,
              "end": 703,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 690,
                "end": 703,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 690,
                  "end": 703,
                  "left": {
                    "type": "Identifier",
                    "start": 690,
                    "end": 697,
                    "decorators": [],
                    "name": "funlias",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 698,
                    "end": 703,
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
      "start": 705,
      "end": 726,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 709,
          "end": 725,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 709,
            "end": 725,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 710,
              "end": 725,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 712,
                "end": 725,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 712,
                  "end": 725,
                  "left": {
                    "type": "Identifier",
                    "start": 712,
                    "end": 719,
                    "decorators": [],
                    "name": "fundule",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 720,
                    "end": 725,
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
      "start": 727,
      "end": 760,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 731,
          "end": 759,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 731,
            "end": 759,
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 732,
              "end": 759,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 734,
                "end": 759,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 736,
                    "end": 746,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 736,
                      "end": 737,
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
                      "start": 737,
                      "end": 745,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 739,
                        "end": 745
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 747,
                    "end": 757,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 747,
                      "end": 748,
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
                      "start": 748,
                      "end": 756,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 750,
                        "end": 756
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
