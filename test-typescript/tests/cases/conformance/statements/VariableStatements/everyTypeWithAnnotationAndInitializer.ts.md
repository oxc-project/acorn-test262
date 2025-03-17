__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 981,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 40,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 54,
        "end": 73,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 60,
            "end": 71,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 60,
              "end": 62,
              "name": "id",
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
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              }
            },
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 52,
          "end": 53,
          "expression": {
            "type": "Identifier",
            "start": 52,
            "end": 53,
            "name": "I",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 75,
      "end": 143,
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 82,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 143,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 91,
            "end": 101,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 97,
              "name": "source",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 106,
            "end": 120,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 106,
              "end": 113,
              "name": "recurse",
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
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 141,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 132,
              "name": "wrapped",
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
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 145,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 154,
        "end": 155,
        "name": "F",
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
          "start": 156,
          "end": 165,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 157,
            "end": 165,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 159,
              "end": 165
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 166,
        "end": 174,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 168,
          "end": 174
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 191,
      "end": 320,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 199,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "id": {
                "type": "Identifier",
                "start": 219,
                "end": 220,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 221,
                "end": 250,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 231,
                    "end": 244,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 235,
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
                      "start": 235,
                      "end": 243,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 237,
                        "end": 243
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
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
                "name": "F2",
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
                  "start": 275,
                  "end": 284,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 276,
                    "end": 284,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 278,
                      "end": 284
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 305,
                          "end": 313,
                          "name": "toString",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 285,
                "end": 293,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 287,
                  "end": 293
                }
              }
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
      "start": 322,
      "end": 348,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 347,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 341,
            "name": "aNumber",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 333,
              "end": 341,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 335,
                "end": 341
              }
            },
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 353,
            "end": 368,
            "name": "aString",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 360,
              "end": 368,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 362,
                "end": 368
              }
            },
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 406,
            "name": "aDate",
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
                  "name": "Date",
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
            "type": "NewExpression",
            "start": 409,
            "end": 421,
            "callee": {
              "type": "Identifier",
              "start": 413,
              "end": 417,
              "name": "Date",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 418,
                "end": 420,
                "value": 12,
                "raw": "12"
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
    {
      "type": "VariableDeclaration",
      "start": 423,
      "end": 459,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 458,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 443,
            "name": "anObject",
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
                  "name": "Object",
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
            "type": "NewExpression",
            "start": 446,
            "end": 458,
            "callee": {
              "type": "Identifier",
              "start": 450,
              "end": 456,
              "name": "Object",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 465,
            "end": 475,
            "name": "anAny",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 470,
              "end": 475,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 472,
                "end": 475
              }
            },
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 488,
            "end": 503,
            "name": "aSecondAny",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 498,
              "end": 503,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 500,
                "end": 503
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 506,
            "end": 515,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
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
      "start": 517,
      "end": 545,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 521,
          "end": 544,
          "id": {
            "type": "Identifier",
            "start": 521,
            "end": 532,
            "name": "aVoid",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 526,
              "end": 532,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 528,
                "end": 532
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 535,
            "end": 544,
            "name": "undefined",
            "typeAnnotation": null,
            "decorators": [],
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
      "start": 547,
      "end": 576,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 551,
          "end": 575,
          "id": {
            "type": "Identifier",
            "start": 551,
            "end": 565,
            "name": "anInterface",
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
                  "name": "I",
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
            "type": "NewExpression",
            "start": 568,
            "end": 575,
            "callee": {
              "type": "Identifier",
              "start": 572,
              "end": 573,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 581,
            "end": 590,
            "name": "aClass",
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
                  "name": "C",
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
            "type": "NewExpression",
            "start": 593,
            "end": 600,
            "callee": {
              "type": "Identifier",
              "start": 597,
              "end": 598,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 606,
            "end": 630,
            "name": "aGenericClass",
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
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 633,
            "end": 648,
            "callee": {
              "type": "Identifier",
              "start": 637,
              "end": 638,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 672,
            "name": "anObjectLiteral",
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
                  "name": "I",
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
            "start": 675,
            "end": 685,
            "properties": [
              {
                "type": "Property",
                "start": 677,
                "end": 683,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 677,
                  "end": 679,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 681,
                  "end": 683,
                  "value": 12,
                  "raw": "12"
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
    {
      "type": "VariableDeclaration",
      "start": 687,
      "end": 738,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 691,
          "end": 737,
          "id": {
            "type": "Identifier",
            "start": 691,
            "end": 727,
            "name": "anOtherObjectLiteral",
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
                      "name": "id",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 730,
            "end": 737,
            "callee": {
              "type": "Identifier",
              "start": 734,
              "end": 735,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 744,
            "end": 763,
            "name": "aFunction",
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
                  "name": "F",
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
            "type": "Identifier",
            "start": 766,
            "end": 767,
            "name": "F",
            "typeAnnotation": null,
            "decorators": [],
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
      "start": 769,
      "end": 816,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 773,
          "end": 815,
          "id": {
            "type": "Identifier",
            "start": 773,
            "end": 811,
            "name": "anOtherFunction",
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
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 792,
                      "end": 800,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 794,
                        "end": 800
                      }
                    },
                    "decorators": [],
                    "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 814,
            "end": 815,
            "name": "F",
            "typeAnnotation": null,
            "decorators": [],
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
      "start": 817,
      "end": 850,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 821,
          "end": 849,
          "id": {
            "type": "Identifier",
            "start": 821,
            "end": 838,
            "name": "aLambda",
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
                  "name": "F",
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
            "type": "ArrowFunctionExpression",
            "start": 841,
            "end": 849,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 842,
                "end": 843,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 848,
              "end": 849,
              "value": 2,
              "raw": "2"
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 856,
            "end": 873,
            "name": "aModule",
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
                  "name": "M",
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
            "type": "Identifier",
            "start": 876,
            "end": 877,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
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
      "start": 879,
      "end": 915,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 883,
          "end": 914,
          "id": {
            "type": "Identifier",
            "start": 883,
            "end": 902,
            "name": "aClassInModule",
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
                    "name": "M",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 901,
                    "end": 902,
                    "name": "A",
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
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 911,
                "end": 912,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 920,
            "end": 950,
            "name": "aFunctionInModule",
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
                    "name": "M",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 948,
                    "end": 950,
                    "name": "F2",
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
            "type": "ArrowFunctionExpression",
            "start": 953,
            "end": 978,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 954,
                "end": 955,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 960,
              "end": 978,
              "value": "this is a string",
              "raw": "'this is a string'"
            },
            "typeParameters": null,
            "returnType": null
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
