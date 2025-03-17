__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1041,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 29,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 33,
      "end": 73,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 73,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 71,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 62,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
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
        "start": 39,
        "end": 40,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 52,
          "end": 53,
          "expression": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 75,
      "end": 143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 143,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 91,
            "end": 101,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 97,
              "decorators": [],
              "name": "source",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 99,
                "end": 100,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 106,
            "end": 120,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 113,
              "decorators": [],
              "name": "recurse",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 119,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 115,
                "end": 119,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 116,
                  "end": 119,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 117,
                      "end": 118,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 141,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 132,
              "decorators": [],
              "name": "wrapped",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 141,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 135,
                  "end": 141,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 136,
                      "end": 140,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 137,
                        "end": 140,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 138,
                            "end": 139,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 138,
                              "end": 139,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 137,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                }
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
        "start": 81,
        "end": 82,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 82,
        "end": 85,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 83,
            "end": 84,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
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
      "type": "FunctionDeclaration",
      "start": 145,
      "end": 189,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 175,
        "end": 189,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 177,
            "end": 187,
            "argument": {
              "type": "Literal",
              "start": 184,
              "end": 186,
              "raw": "42",
              "value": 42
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 155,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 156,
          "end": 165,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 157,
            "end": 165,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 159,
              "end": 165
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 166,
        "end": 174,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 168,
          "end": 174
        }
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 190,
      "end": 240,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 222,
        "end": 240,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 224,
            "end": 238,
            "argument": {
              "type": "BinaryExpression",
              "start": 231,
              "end": 237,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 231,
                "end": 232,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 235,
                "end": 237,
                "raw": "42",
                "value": 42
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 201,
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 202,
          "end": 211,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 203,
            "end": 211,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 205,
              "end": 211
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 212,
        "end": 221,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 214,
          "end": 221
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 242,
      "end": 371,
      "body": {
        "type": "TSModuleBlock",
        "start": 251,
        "end": 371,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 257,
            "end": 301,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 264,
              "end": 301,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 272,
                "end": 301,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 282,
                    "end": 295,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 282,
                      "end": 286,
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
                      "start": 286,
                      "end": 294,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 288,
                        "end": 294
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
                "start": 270,
                "end": 271,
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
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 307,
            "end": 369,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 314,
              "end": 369,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 345,
                "end": 369,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 347,
                    "end": 367,
                    "argument": {
                      "type": "CallExpression",
                      "start": 354,
                      "end": 366,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 354,
                        "end": 364,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 354,
                          "end": 355,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 356,
                          "end": 364,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 323,
                "end": 325,
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 326,
                  "end": 335,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 327,
                    "end": 335,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 329,
                      "end": 335
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 336,
                "end": 344,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 338,
                  "end": 344
                }
              },
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
        "start": 249,
        "end": 250,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 373,
      "end": 500,
      "body": {
        "type": "TSModuleBlock",
        "start": 382,
        "end": 500,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 388,
            "end": 430,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 395,
              "end": 430,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 403,
                "end": 430,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 413,
                    "end": 424,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 415,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 415,
                      "end": 423,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 417,
                        "end": 423
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
                "start": 401,
                "end": 402,
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
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 436,
            "end": 498,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 443,
              "end": 498,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 474,
                "end": 498,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 476,
                    "end": 496,
                    "argument": {
                      "type": "CallExpression",
                      "start": 483,
                      "end": 495,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 483,
                        "end": 493,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 483,
                          "end": 484,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 485,
                          "end": 493,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 452,
                "end": 454,
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 455,
                  "end": 464,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 456,
                    "end": 464,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 458,
                      "end": 464
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 465,
                "end": 473,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 467,
                  "end": 473
                }
              },
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
        "start": 380,
        "end": 381,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 502,
      "end": 543,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 506,
          "end": 542,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 506,
            "end": 521,
            "decorators": [],
            "name": "aNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 513,
              "end": 521,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 515,
                "end": 521
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 524,
            "end": 542,
            "raw": "'this is a string'",
            "value": "this is a string"
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 544,
      "end": 570,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 548,
          "end": 569,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 548,
            "end": 563,
            "decorators": [],
            "name": "aString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 555,
              "end": 563,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 557,
                "end": 563
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 566,
            "end": 569,
            "raw": "9.9",
            "value": 9.9
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 571,
      "end": 593,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 575,
          "end": 592,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 575,
            "end": 586,
            "decorators": [],
            "name": "aDate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 580,
              "end": 586,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 582,
                "end": 586,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 586,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 589,
            "end": 592,
            "raw": "9.9",
            "value": 9.9
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 595,
      "end": 617,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 599,
          "end": 616,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 599,
            "end": 610,
            "decorators": [],
            "name": "aVoid",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 604,
              "end": 610,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 606,
                "end": 610
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 613,
            "end": 616,
            "raw": "9.9",
            "value": 9.9
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 619,
      "end": 648,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 623,
          "end": 647,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 623,
            "end": 637,
            "decorators": [],
            "name": "anInterface",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 634,
              "end": 637,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 636,
                "end": 637,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 637,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 640,
            "end": 647,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 644,
              "end": 645,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 649,
      "end": 673,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 653,
          "end": 672,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 653,
            "end": 662,
            "decorators": [],
            "name": "aClass",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 659,
              "end": 662,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 661,
                "end": 662,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 661,
                  "end": 662,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 665,
            "end": 672,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 669,
              "end": 670,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 674,
      "end": 713,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 678,
          "end": 712,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 678,
            "end": 702,
            "decorators": [],
            "name": "aGenericClass",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 691,
              "end": 702,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 693,
                "end": 702,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 694,
                  "end": 702,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 695,
                      "end": 701
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 694,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 705,
            "end": 712,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 709,
              "end": 710,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 714,
      "end": 758,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 718,
          "end": 757,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 718,
            "end": 736,
            "decorators": [],
            "name": "anObjectLiteral",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 733,
              "end": 736,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 735,
                "end": 736,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 735,
                  "end": 736,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 739,
            "end": 757,
            "properties": [
              {
                "type": "Property",
                "start": 741,
                "end": 755,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 743,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 745,
                  "end": 755,
                  "raw": "'a string'",
                  "value": "a string"
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
      "type": "VariableDeclaration",
      "start": 759,
      "end": 810,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 763,
          "end": 809,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 763,
            "end": 799,
            "decorators": [],
            "name": "anOtherObjectLiteral",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 783,
              "end": 799,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 785,
                "end": 799,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 787,
                    "end": 797,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 787,
                      "end": 789,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 789,
                      "end": 797,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 791,
                        "end": 797
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 802,
            "end": 809,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 806,
              "end": 807,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 812,
      "end": 841,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 816,
          "end": 840,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 816,
            "end": 835,
            "decorators": [],
            "name": "aFunction",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 825,
              "end": 835,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 827,
                "end": 835,
                "exprName": {
                  "type": "Identifier",
                  "start": 834,
                  "end": 835,
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 838,
            "end": 840,
            "decorators": [],
            "name": "F2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 842,
      "end": 890,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 846,
          "end": 889,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 846,
            "end": 884,
            "decorators": [],
            "name": "anOtherFunction",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 861,
              "end": 884,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 863,
                "end": 884,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 864,
                    "end": 873,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 865,
                      "end": 873,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 867,
                        "end": 873
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 875,
                  "end": 884,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 878,
                    "end": 884
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 887,
            "end": 889,
            "decorators": [],
            "name": "F2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 891,
      "end": 933,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 895,
          "end": 932,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 895,
            "end": 912,
            "decorators": [],
            "name": "aLambda",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 902,
              "end": 912,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 904,
                "end": 912,
                "exprName": {
                  "type": "Identifier",
                  "start": 911,
                  "end": 912,
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 915,
            "end": 932,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 922,
              "end": 932,
              "raw": "'a string'",
              "value": "a string"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 916,
                "end": 917,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 935,
      "end": 961,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 939,
          "end": 960,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 939,
            "end": 956,
            "decorators": [],
            "name": "aModule",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 946,
              "end": 956,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 948,
                "end": 956,
                "exprName": {
                  "type": "Identifier",
                  "start": 955,
                  "end": 956,
                  "decorators": [],
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 959,
            "end": 960,
            "decorators": [],
            "name": "N",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 962,
      "end": 998,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 966,
          "end": 997,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 966,
            "end": 985,
            "decorators": [],
            "name": "aClassInModule",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 980,
              "end": 985,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 982,
                "end": 985,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 982,
                  "end": 985,
                  "left": {
                    "type": "Identifier",
                    "start": 982,
                    "end": 983,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 984,
                    "end": 985,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 988,
            "end": 997,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 992,
              "end": 995,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 992,
                "end": 993,
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 994,
                "end": 995,
                "decorators": [],
                "name": "A",
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
    {
      "type": "VariableDeclaration",
      "start": 999,
      "end": 1039,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1003,
          "end": 1038,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1003,
            "end": 1033,
            "decorators": [],
            "name": "aFunctionInModule",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1020,
              "end": 1033,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1022,
                "end": 1033,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 1029,
                  "end": 1033,
                  "left": {
                    "type": "Identifier",
                    "start": 1029,
                    "end": 1030,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1031,
                    "end": 1033,
                    "decorators": [],
                    "name": "F2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 1036,
            "end": 1038,
            "decorators": [],
            "name": "F2",
            "optional": false,
            "typeAnnotation": null
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
