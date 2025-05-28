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
      "type": "TSModuleDeclaration",
      "start": 191,
      "end": 320,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 199,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 200,
        "end": 320,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 206,
            "end": 250,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 213,
              "end": 250,
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
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 221,
                "end": 250,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 231,
                    "end": 244,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 235,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
            "start": 256,
            "end": 318,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 263,
              "end": 318,
              "id": {
                "type": "Identifier",
                "start": 272,
                "end": 274,
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
                      "callee": {
                        "type": "MemberExpression",
                        "start": 303,
                        "end": 313,
                        "object": {
                          "type": "Identifier",
                          "start": 303,
                          "end": 304,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 305,
                          "end": 313,
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
      "start": 322,
      "end": 348,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 347,
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
      "start": 349,
      "end": 390,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 389,
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
      "start": 391,
      "end": 422,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 421,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 406,
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
            "type": "NewExpression",
            "start": 409,
            "end": 421,
            "callee": {
              "type": "Identifier",
              "start": 413,
              "end": 417,
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 418,
                "end": 420,
                "value": 12,
                "raw": "12"
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
      "start": 423,
      "end": 459,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 458,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 437,
                  "end": 443,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 446,
            "end": 458,
            "callee": {
              "type": "Identifier",
              "start": 450,
              "end": 456,
              "decorators": [],
              "name": "Object",
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
      "start": 461,
      "end": 483,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 465,
          "end": 482,
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
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 484,
      "end": 516,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 488,
          "end": 515,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 517,
      "end": 545,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 521,
          "end": 544,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 547,
      "end": 576,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 551,
          "end": 575,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 565,
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
            "start": 568,
            "end": 575,
            "callee": {
              "type": "Identifier",
              "start": 572,
              "end": 573,
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
      "start": 577,
      "end": 601,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 581,
          "end": 600,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 589,
                  "end": 590,
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
            "start": 593,
            "end": 600,
            "callee": {
              "type": "Identifier",
              "start": 597,
              "end": 598,
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
      "start": 602,
      "end": 649,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 606,
          "end": 648,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 621,
                  "end": 622,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
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
                }
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 633,
            "end": 648,
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
            },
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 650,
      "end": 686,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 685,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 672,
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
            "start": 675,
            "end": 685,
            "properties": [
              {
                "type": "Property",
                "start": 677,
                "end": 683,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 677,
                  "end": 679,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 681,
                  "end": 683,
                  "value": 12,
                  "raw": "12"
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
      "start": 687,
      "end": 738,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 691,
          "end": 737,
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 715,
                      "end": 717,
                      "decorators": [],
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 717,
                      "end": 725,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 719,
                        "end": 725
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
            "start": 730,
            "end": 737,
            "callee": {
              "type": "Identifier",
              "start": 734,
              "end": 735,
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
      "start": 740,
      "end": 768,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 744,
          "end": 767,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 769,
      "end": 816,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 773,
          "end": 815,
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
                "typeParameters": null,
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
                }
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 817,
      "end": 850,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 821,
          "end": 849,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "Literal",
              "start": 848,
              "end": 849,
              "value": 2,
              "raw": "2"
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
      "start": 852,
      "end": 878,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 856,
          "end": 877,
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
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 879,
      "end": 915,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 883,
          "end": 914,
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
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "NewExpression",
            "start": 905,
            "end": 914,
            "callee": {
              "type": "MemberExpression",
              "start": 909,
              "end": 912,
              "object": {
                "type": "Identifier",
                "start": 909,
                "end": 910,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 911,
                "end": 912,
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
      "start": 916,
      "end": 979,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 920,
          "end": 978,
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
            "expression": true,
            "async": false,
            "typeParameters": null,
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
            "body": {
              "type": "Literal",
              "start": 960,
              "end": 978,
              "value": "this is a string",
              "raw": "'this is a string'"
            },
            "id": null,
            "generator": false
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
