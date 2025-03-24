__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 980,
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
      "type": "TSModuleDeclaration",
      "start": 191,
      "end": 320,
      "body": {
        "type": "TSModuleBlock",
        "start": 200,
        "end": 320,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 206,
            "end": 250,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 213,
              "end": 250,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 221,
                "end": 250,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 231,
                    "end": 244,
                    "accessibility": null,
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 235,
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
                      "start": 235,
                      "end": 243,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 237,
                        "end": 243
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
                "end": 220,
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
            "start": 256,
            "end": 318,
            "attributes": [],
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 263,
              "end": 318,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 294,
                "end": 318,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 296,
                    "end": 316,
                    "argument": {
                      "type": "CallExpression",
                      "start": 303,
                      "end": 315,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 303,
                        "end": 313,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 303,
                          "end": 304,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 305,
                          "end": 313,
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
                "start": 272,
                "end": 274,
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 275,
                  "end": 284,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 276,
                    "end": 284,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 278,
                      "end": 284
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 285,
                "end": 293,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 287,
                  "end": 293
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
        "start": 198,
        "end": 199,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 322,
      "end": 348,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 347,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 341,
            "decorators": [],
            "name": "aNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 333,
              "end": 341,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 335,
                "end": 341
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 344,
            "end": 347,
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
      "start": 349,
      "end": 390,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 389,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 368,
            "decorators": [],
            "name": "aString",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 360,
              "end": 368,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 362,
                "end": 368
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 371,
            "end": 389,
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
      "start": 391,
      "end": 422,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 421,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 406,
            "decorators": [],
            "name": "aDate",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 400,
              "end": 406,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 402,
                "end": 406,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 406,
                  "decorators": [],
                  "name": "Date",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 409,
            "end": 421,
            "arguments": [
              {
                "type": "Literal",
                "start": 418,
                "end": 420,
                "raw": "12",
                "value": 12
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 413,
              "end": 417,
              "decorators": [],
              "name": "Date",
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
      "start": 423,
      "end": 459,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 458,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 443,
            "decorators": [],
            "name": "anObject",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 435,
              "end": 443,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 437,
                "end": 443,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 443,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 446,
            "end": 458,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 450,
              "end": 456,
              "decorators": [],
              "name": "Object",
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
      "start": 461,
      "end": 483,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 465,
          "end": 482,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 465,
            "end": 475,
            "decorators": [],
            "name": "anAny",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 470,
              "end": 475,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 472,
                "end": 475
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 478,
            "end": 482,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 484,
      "end": 516,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 488,
          "end": 515,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 488,
            "end": 503,
            "decorators": [],
            "name": "aSecondAny",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 498,
              "end": 503,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 500,
                "end": 503
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 506,
            "end": 515,
            "decorators": [],
            "name": "undefined",
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
      "start": 517,
      "end": 545,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 521,
          "end": 544,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 521,
            "end": 532,
            "decorators": [],
            "name": "aVoid",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 526,
              "end": 532,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 528,
                "end": 532
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 535,
            "end": 544,
            "decorators": [],
            "name": "undefined",
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
      "start": 547,
      "end": 576,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 551,
          "end": 575,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 551,
            "end": 565,
            "decorators": [],
            "name": "anInterface",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 562,
              "end": 565,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 564,
                "end": 565,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 565,
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
            "start": 568,
            "end": 575,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 572,
              "end": 573,
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
      "start": 577,
      "end": 601,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 581,
          "end": 600,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 581,
            "end": 590,
            "decorators": [],
            "name": "aClass",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 587,
              "end": 590,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 589,
                "end": 590,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 589,
                  "end": 590,
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
            "start": 593,
            "end": 600,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 597,
              "end": 598,
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
      "start": 602,
      "end": 649,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 606,
          "end": 648,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 606,
            "end": 630,
            "decorators": [],
            "name": "aGenericClass",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 619,
              "end": 630,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 621,
                "end": 630,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 622,
                  "end": 630,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 623,
                      "end": 629
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 621,
                  "end": 622,
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
            "start": 633,
            "end": 648,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 637,
              "end": 638,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 638,
              "end": 646,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 639,
                  "end": 645
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 650,
      "end": 686,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 685,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 672,
            "decorators": [],
            "name": "anObjectLiteral",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 669,
              "end": 672,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 671,
                "end": 672,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 672,
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
            "start": 675,
            "end": 685,
            "properties": [
              {
                "type": "Property",
                "start": 677,
                "end": 683,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 677,
                  "end": 679,
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
                  "start": 681,
                  "end": 683,
                  "raw": "12",
                  "value": 12
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
      "start": 687,
      "end": 738,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 691,
          "end": 737,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 691,
            "end": 727,
            "decorators": [],
            "name": "anOtherObjectLiteral",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 711,
              "end": 727,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 713,
                "end": 727,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 715,
                    "end": 725,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 715,
                      "end": 717,
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
                      "start": 717,
                      "end": 725,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 719,
                        "end": 725
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 730,
            "end": 737,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 734,
              "end": 735,
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
      "start": 740,
      "end": 768,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 744,
          "end": 767,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 744,
            "end": 763,
            "decorators": [],
            "name": "aFunction",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 753,
              "end": 763,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 755,
                "end": 763,
                "exprName": {
                  "type": "Identifier",
                  "start": 762,
                  "end": 763,
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
            "start": 766,
            "end": 767,
            "decorators": [],
            "name": "F",
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
      "start": 769,
      "end": 816,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 773,
          "end": 815,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 773,
            "end": 811,
            "decorators": [],
            "name": "anOtherFunction",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 788,
              "end": 811,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 790,
                "end": 811,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 791,
                    "end": 800,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 792,
                      "end": 800,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 794,
                        "end": 800
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 802,
                  "end": 811,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 805,
                    "end": 811
                  }
                },
                "typeParameters": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 814,
            "end": 815,
            "decorators": [],
            "name": "F",
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
      "start": 817,
      "end": 850,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 821,
          "end": 849,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 821,
            "end": 838,
            "decorators": [],
            "name": "aLambda",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 828,
              "end": 838,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 830,
                "end": 838,
                "exprName": {
                  "type": "Identifier",
                  "start": 837,
                  "end": 838,
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
            "start": 841,
            "end": 849,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 848,
              "end": 849,
              "raw": "2",
              "value": 2
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 842,
                "end": 843,
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
      "start": 852,
      "end": 878,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 856,
          "end": 877,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 856,
            "end": 873,
            "decorators": [],
            "name": "aModule",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 863,
              "end": 873,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 865,
                "end": 873,
                "exprName": {
                  "type": "Identifier",
                  "start": 872,
                  "end": 873,
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
            "start": 876,
            "end": 877,
            "decorators": [],
            "name": "M",
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
      "start": 879,
      "end": 915,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 883,
          "end": 914,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 883,
            "end": 902,
            "decorators": [],
            "name": "aClassInModule",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 897,
              "end": 902,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 899,
                "end": 902,
                "typeArguments": null,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 899,
                  "end": 902,
                  "left": {
                    "type": "Identifier",
                    "start": 899,
                    "end": 900,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 901,
                    "end": 902,
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
            "start": 905,
            "end": 914,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 909,
              "end": 912,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 909,
                "end": 910,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 911,
                "end": 912,
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
      "start": 916,
      "end": 979,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 920,
          "end": 978,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 920,
            "end": 950,
            "decorators": [],
            "name": "aFunctionInModule",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 937,
              "end": 950,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 939,
                "end": 950,
                "exprName": {
                  "type": "TSQualifiedName",
                  "start": 946,
                  "end": 950,
                  "left": {
                    "type": "Identifier",
                    "start": 946,
                    "end": 947,
                    "decorators": [],
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 948,
                    "end": 950,
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
            "type": "ArrowFunctionExpression",
            "start": 953,
            "end": 978,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 960,
              "end": 978,
              "raw": "'this is a string'",
              "value": "this is a string"
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 954,
                "end": 955,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
