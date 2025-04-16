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
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 14,
        "name": "moduleA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 15,
        "end": 109,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 21,
            "end": 107,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 28,
              "end": 107,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 39,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 40,
                "end": 107,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 50,
                    "end": 101,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 50,
                      "end": 61,
                      "name": "constructor",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "constructor",
                    "value": {
                      "type": "FunctionExpression",
                      "start": 61,
                      "end": 101,
                      "id": null,
                      "expression": false,
                      "generator": false,
                      "async": false,
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
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 70,
                              "end": 78,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 72,
                                "end": 78
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
                          "start": 80,
                          "end": 96,
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 87,
                            "end": 96,
                            "name": "y",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 88,
                              "end": 96,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 90,
                                "end": 96
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
                        "start": 98,
                        "end": 101,
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
      "type": "TSImportEqualsDeclaration",
      "start": 111,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 118,
        "end": 123,
        "name": "alias",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 126,
        "end": 133,
        "name": "moduleA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 140,
            "end": 154,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 154,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 143,
                "end": 154,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 143,
                  "end": 154,
                  "left": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 148,
                    "name": "alias",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 154,
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
      "start": 156,
      "end": 177,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 176,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 176,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 161,
              "end": 176,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 163,
                "end": 176,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 163,
                  "end": 176,
                  "left": {
                    "type": "Identifier",
                    "start": 163,
                    "end": 170,
                    "name": "moduleA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 176,
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
      "start": 178,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 182,
          "end": 210,
          "id": {
            "type": "Identifier",
            "start": 182,
            "end": 210,
            "name": "p",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 187,
                      "end": 188,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 188,
                      "end": 196,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 190,
                        "end": 196
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 198,
                    "end": 208,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 199,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 199,
                      "end": 207,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 201,
                        "end": 207
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
      "type": "ClassDeclaration",
      "start": 213,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 226,
        "name": "clodule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 227,
        "end": 248,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 233,
            "end": 246,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 233,
              "end": 237,
              "name": "name",
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
              "start": 237,
              "end": 245,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 239,
                "end": 245
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
      "type": "TSModuleDeclaration",
      "start": 250,
      "end": 372,
      "id": {
        "type": "Identifier",
        "start": 257,
        "end": 264,
        "name": "clodule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 265,
        "end": 372,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 271,
            "end": 331,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 278,
              "end": 331,
              "id": {
                "type": "Identifier",
                "start": 288,
                "end": 293,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 294,
                "end": 331,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 304,
                    "end": 314,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 304,
                      "end": 305,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 305,
                      "end": 313,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 307,
                        "end": 313
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 315,
                    "end": 325,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 316,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 316,
                      "end": 324,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 318,
                        "end": 324
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
            "type": "VariableDeclaration",
            "start": 336,
            "end": 370,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 340,
                "end": 369,
                "id": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 352,
                  "name": "Point",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 345,
                    "end": 352,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 347,
                      "end": 352,
                      "typeName": {
                        "type": "Identifier",
                        "start": 347,
                        "end": 352,
                        "name": "Point",
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
                "init": {
                  "type": "ObjectExpression",
                  "start": 355,
                  "end": 369,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 357,
                      "end": 361,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 358,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 360,
                        "end": 361,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 363,
                      "end": 367,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 363,
                        "end": 364,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 366,
                        "end": 367,
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
      "type": "TSImportEqualsDeclaration",
      "start": 374,
      "end": 399,
      "id": {
        "type": "Identifier",
        "start": 381,
        "end": 388,
        "name": "clolias",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 391,
        "end": 398,
        "name": "clodule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 421,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 406,
              "end": 421,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 408,
                "end": 421,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 408,
                  "end": 421,
                  "left": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 415,
                    "name": "clolias",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 421,
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
      "start": 423,
      "end": 444,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 443,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 443,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 443,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 430,
                "end": 443,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 430,
                  "end": 443,
                  "left": {
                    "type": "Identifier",
                    "start": 430,
                    "end": 437,
                    "name": "clodule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 438,
                    "end": 443,
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
      "start": 445,
      "end": 478,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 449,
          "end": 477,
          "id": {
            "type": "Identifier",
            "start": 449,
            "end": 477,
            "name": "p",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 454,
                      "end": 455,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 455,
                      "end": 463,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 457,
                        "end": 463
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 465,
                    "end": 475,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 466,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 466,
                      "end": 474,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 468,
                        "end": 474
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
      "type": "FunctionDeclaration",
      "start": 481,
      "end": 530,
      "id": {
        "type": "Identifier",
        "start": 490,
        "end": 497,
        "name": "fundule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 515,
                    "end": 516,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 518,
                    "end": 519,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 521,
                  "end": 525,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 521,
                    "end": 522,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 524,
                    "end": 525,
                    "value": 0,
                    "raw": "0"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 532,
      "end": 654,
      "id": {
        "type": "Identifier",
        "start": 539,
        "end": 546,
        "name": "fundule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 547,
        "end": 654,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 553,
            "end": 613,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 560,
              "end": 613,
              "id": {
                "type": "Identifier",
                "start": 570,
                "end": 575,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
              "body": {
                "type": "TSInterfaceBody",
                "start": 576,
                "end": 613,
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "start": 586,
                    "end": 596,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 586,
                      "end": 587,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 587,
                      "end": 595,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 589,
                        "end": 595
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 597,
                    "end": 607,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 597,
                      "end": 598,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 598,
                      "end": 606,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 600,
                        "end": 606
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
            "type": "VariableDeclaration",
            "start": 618,
            "end": 652,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 622,
                "end": 651,
                "id": {
                  "type": "Identifier",
                  "start": 622,
                  "end": 634,
                  "name": "Point",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 627,
                    "end": 634,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 629,
                      "end": 634,
                      "typeName": {
                        "type": "Identifier",
                        "start": 629,
                        "end": 634,
                        "name": "Point",
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
                "init": {
                  "type": "ObjectExpression",
                  "start": 637,
                  "end": 651,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 639,
                      "end": 643,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 639,
                        "end": 640,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 642,
                        "end": 643,
                        "value": 0,
                        "raw": "0"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 645,
                      "end": 649,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 645,
                        "end": 646,
                        "name": "y",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 648,
                        "end": 649,
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
      "type": "TSImportEqualsDeclaration",
      "start": 656,
      "end": 681,
      "id": {
        "type": "Identifier",
        "start": 663,
        "end": 670,
        "name": "funlias",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 673,
        "end": 680,
        "name": "fundule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "importKind": "value"
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
          "id": {
            "type": "Identifier",
            "start": 687,
            "end": 703,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 688,
              "end": 703,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 690,
                "end": 703,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 690,
                  "end": 703,
                  "left": {
                    "type": "Identifier",
                    "start": 690,
                    "end": 697,
                    "name": "funlias",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 698,
                    "end": 703,
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
      "start": 705,
      "end": 726,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 709,
          "end": 725,
          "id": {
            "type": "Identifier",
            "start": 709,
            "end": 725,
            "name": "p",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 710,
              "end": 725,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 712,
                "end": 725,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 712,
                  "end": 725,
                  "left": {
                    "type": "Identifier",
                    "start": 712,
                    "end": 719,
                    "name": "fundule",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 720,
                    "end": 725,
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
      "start": 727,
      "end": 760,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 731,
          "end": 759,
          "id": {
            "type": "Identifier",
            "start": 731,
            "end": 759,
            "name": "p",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 736,
                      "end": 737,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 737,
                      "end": 745,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 739,
                        "end": 745
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 747,
                    "end": 757,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 747,
                      "end": 748,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 748,
                      "end": 756,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 750,
                        "end": 756
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
