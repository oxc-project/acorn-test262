__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1040,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 29,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 20,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 20,
              "end": 28,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 33,
      "end": 73,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
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
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 73,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 71,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 62,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
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
      "start": 75,
      "end": 143,
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 82,
        "end": 85,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 83,
            "end": 84,
            "name": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 143,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 91,
            "end": 101,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 97,
              "decorators": [],
              "name": "source",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 97,
              "end": 100,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 99,
                "end": 100,
                "typeName": {
                  "type": "Identifier",
                  "start": 99,
                  "end": 100,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
          },
          {
            "type": "PropertyDefinition",
            "start": 106,
            "end": 120,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 113,
              "decorators": [],
              "name": "recurse",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 113,
              "end": 119,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 115,
                "end": 119,
                "typeName": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 116,
                  "end": 119,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 117,
                      "end": 118,
                      "typeName": {
                        "type": "Identifier",
                        "start": 117,
                        "end": 118,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
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
          },
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 141,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 132,
              "decorators": [],
              "name": "wrapped",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 141,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 141,
                "typeName": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 135,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 135,
                  "end": 141,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 136,
                      "end": 140,
                      "typeName": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 137,
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 137,
                        "end": 140,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 138,
                            "end": 139,
                            "typeName": {
                              "type": "Identifier",
                              "start": 138,
                              "end": 139,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
                }
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
      "type": "FunctionDeclaration",
      "start": 145,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 155,
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "value": 42,
              "raw": "42"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 190,
      "end": 240,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 201,
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
              "left": {
                "type": "Identifier",
                "start": 231,
                "end": 232,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 235,
                "end": 237,
                "value": 42,
                "raw": "42"
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 242,
      "end": 371,
      "id": {
        "type": "Identifier",
        "start": 249,
        "end": 250,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 251,
        "end": 371,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 257,
            "end": 301,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 264,
              "end": 301,
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
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 272,
                "end": 301,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 282,
                    "end": 295,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 282,
                      "end": 286,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 307,
            "end": 369,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 314,
              "end": 369,
              "id": {
                "type": "Identifier",
                "start": 323,
                "end": 325,
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 354,
                        "end": 364,
                        "object": {
                          "type": "Identifier",
                          "start": 354,
                          "end": 355,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 356,
                          "end": 364,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
    {
      "type": "TSModuleDeclaration",
      "start": 373,
      "end": 500,
      "id": {
        "type": "Identifier",
        "start": 380,
        "end": 381,
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 382,
        "end": 500,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 388,
            "end": 430,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 395,
              "end": 430,
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
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 403,
                "end": 430,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 413,
                    "end": 424,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 415,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 436,
            "end": 498,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 443,
              "end": 498,
              "id": {
                "type": "Identifier",
                "start": 452,
                "end": 454,
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 483,
                        "end": 493,
                        "object": {
                          "type": "Identifier",
                          "start": 483,
                          "end": 484,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 485,
                          "end": 493,
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
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
    {
      "type": "VariableDeclaration",
      "start": 502,
      "end": 543,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 506,
          "end": 542,
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
            "value": "this is a string",
            "raw": "'this is a string'"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 544,
      "end": 570,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 548,
          "end": 569,
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
            "value": 9.9,
            "raw": "9.9"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 571,
      "end": 593,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 575,
          "end": 592,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 586,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 589,
            "end": 592,
            "value": 9.9,
            "raw": "9.9"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 595,
      "end": 617,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 599,
          "end": 616,
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
            "value": 9.9,
            "raw": "9.9"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 619,
      "end": 648,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 623,
          "end": 647,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 636,
                  "end": 637,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 640,
            "end": 647,
            "callee": {
              "type": "Identifier",
              "start": 644,
              "end": 645,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 649,
      "end": 673,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 653,
          "end": 672,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 661,
                  "end": 662,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 665,
            "end": 672,
            "callee": {
              "type": "Identifier",
              "start": 669,
              "end": 670,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 674,
      "end": 713,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 678,
          "end": 712,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 693,
                  "end": 694,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 705,
            "end": 712,
            "callee": {
              "type": "Identifier",
              "start": 709,
              "end": 710,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 714,
      "end": 758,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 718,
          "end": 757,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 735,
                  "end": 736,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 743,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 745,
                  "end": 755,
                  "value": "a string",
                  "raw": "'a string'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
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
      "start": 759,
      "end": 810,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 763,
          "end": 809,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 787,
                      "end": 789,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 789,
                      "end": 797,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 791,
                        "end": 797
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 802,
            "end": 809,
            "callee": {
              "type": "Identifier",
              "start": 806,
              "end": 807,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 812,
      "end": 841,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 816,
          "end": 840,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 842,
      "end": 890,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 846,
          "end": 889,
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
                "typeParameters": null,
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
                }
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 891,
      "end": 933,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 895,
          "end": 932,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "Literal",
              "start": 922,
              "end": 932,
              "value": "a string",
              "raw": "'a string'"
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 935,
      "end": 961,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 939,
          "end": 960,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 962,
      "end": 998,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 966,
          "end": 997,
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
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 988,
            "end": 997,
            "callee": {
              "type": "MemberExpression",
              "start": 992,
              "end": 995,
              "object": {
                "type": "Identifier",
                "start": 992,
                "end": 993,
                "decorators": [],
                "name": "N",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 994,
                "end": 995,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 999,
      "end": 1039,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1003,
          "end": 1038,
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
