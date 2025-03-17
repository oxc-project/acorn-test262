__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 1420,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 14,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 25,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 26,
        "end": 45,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 32,
            "end": 43,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 34,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 42,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 36,
                "end": 42
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
      "start": 47,
      "end": 87,
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 68,
        "end": 87,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 85,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 76,
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
              "start": 76,
              "end": 84,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 78,
                "end": 84
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
          "start": 66,
          "end": 67,
          "expression": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
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
      "start": 89,
      "end": 157,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 99,
        "end": 157,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 105,
            "end": 115,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 111,
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
              "start": 111,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 113,
                "end": 114,
                "typeName": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 114,
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
            "start": 120,
            "end": 134,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 127,
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
              "start": 127,
              "end": 133,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 129,
                "end": 133,
                "typeName": {
                  "type": "Identifier",
                  "start": 129,
                  "end": 130,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 130,
                  "end": 133,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 131,
                      "end": 132,
                      "typeName": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 132,
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
            "start": 139,
            "end": 155,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 146,
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
              "start": 146,
              "end": 155,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 148,
                "end": 155,
                "typeName": {
                  "type": "Identifier",
                  "start": 148,
                  "end": 149,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 149,
                  "end": 155,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 150,
                      "end": 154,
                      "typeName": {
                        "type": "Identifier",
                        "start": 150,
                        "end": 151,
                        "name": "D",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 151,
                        "end": 154,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 152,
                            "end": 153,
                            "typeName": {
                              "type": "Identifier",
                              "start": 152,
                              "end": 153,
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
        "start": 96,
        "end": 99,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 97,
            "end": 98,
            "name": {
              "type": "Identifier",
              "start": 97,
              "end": 98,
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
      "start": 159,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 169,
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
          "start": 170,
          "end": 179,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 171,
            "end": 179,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 173,
              "end": 179
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 189,
        "end": 203,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 191,
            "end": 201,
            "argument": {
              "type": "Literal",
              "start": 198,
              "end": 200,
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
        "start": 180,
        "end": 188,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 182,
          "end": 188
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 205,
      "end": 334,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 213,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 214,
        "end": 334,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 220,
            "end": 264,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 227,
              "end": 264,
              "id": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 235,
                "end": 264,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 245,
                    "end": 258,
                    "static": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 249,
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
                      "start": 249,
                      "end": 257,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 251,
                        "end": 257
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
            "start": 270,
            "end": 332,
            "declaration": {
              "type": "FunctionDeclaration",
              "start": 277,
              "end": 332,
              "id": {
                "type": "Identifier",
                "start": 286,
                "end": 288,
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
                  "start": 289,
                  "end": 298,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 290,
                    "end": 298,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 292,
                      "end": 298
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 308,
                "end": 332,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 310,
                    "end": 330,
                    "argument": {
                      "type": "CallExpression",
                      "start": 317,
                      "end": 329,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 317,
                        "end": 327,
                        "object": {
                          "type": "Identifier",
                          "start": 317,
                          "end": 318,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 319,
                          "end": 327,
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
                "start": 299,
                "end": 307,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 301,
                  "end": 307
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
      "start": 336,
      "end": 354,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 353,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 347,
            "name": "aNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 350,
            "end": 353,
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
      "type": "ThrowStatement",
      "start": 355,
      "end": 369,
      "argument": {
        "type": "Identifier",
        "start": 361,
        "end": 368,
        "name": "aNumber",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 370,
      "end": 403,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 374,
          "end": 402,
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 381,
            "name": "aString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 384,
            "end": 402,
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
      "type": "ThrowStatement",
      "start": 404,
      "end": 418,
      "argument": {
        "type": "Identifier",
        "start": 410,
        "end": 417,
        "name": "aString",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 419,
      "end": 444,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 423,
          "end": 443,
          "id": {
            "type": "Identifier",
            "start": 423,
            "end": 428,
            "name": "aDate",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 431,
            "end": 443,
            "callee": {
              "type": "Identifier",
              "start": 435,
              "end": 439,
              "name": "Date",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 440,
                "end": 442,
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
      "type": "ThrowStatement",
      "start": 445,
      "end": 457,
      "argument": {
        "type": "Identifier",
        "start": 451,
        "end": 456,
        "name": "aDate",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 458,
      "end": 486,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 462,
          "end": 485,
          "id": {
            "type": "Identifier",
            "start": 462,
            "end": 470,
            "name": "anObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 473,
            "end": 485,
            "callee": {
              "type": "Identifier",
              "start": 477,
              "end": 483,
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
      "type": "ThrowStatement",
      "start": 487,
      "end": 502,
      "argument": {
        "type": "Identifier",
        "start": 493,
        "end": 501,
        "name": "anObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 504,
      "end": 521,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 508,
          "end": 520,
          "id": {
            "type": "Identifier",
            "start": 508,
            "end": 513,
            "name": "anAny",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 516,
            "end": 520,
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
      "type": "ThrowStatement",
      "start": 522,
      "end": 534,
      "argument": {
        "type": "Identifier",
        "start": 528,
        "end": 533,
        "name": "anAny",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 535,
      "end": 566,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 539,
          "end": 565,
          "id": {
            "type": "Identifier",
            "start": 539,
            "end": 549,
            "name": "anOtherAny",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 552,
            "end": 565,
            "expression": {
              "type": "NewExpression",
              "start": 558,
              "end": 565,
              "callee": {
                "type": "Identifier",
                "start": 562,
                "end": 563,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 553,
              "end": 556
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ThrowStatement",
      "start": 567,
      "end": 584,
      "argument": {
        "type": "Identifier",
        "start": 573,
        "end": 583,
        "name": "anOtherAny",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 585,
      "end": 613,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 589,
          "end": 612,
          "id": {
            "type": "Identifier",
            "start": 589,
            "end": 600,
            "name": "anUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 603,
            "end": 612,
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
      "type": "ThrowStatement",
      "start": 614,
      "end": 632,
      "argument": {
        "type": "Identifier",
        "start": 620,
        "end": 631,
        "name": "anUndefined",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 634,
      "end": 655,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 638,
          "end": 654,
          "id": {
            "type": "Identifier",
            "start": 638,
            "end": 644,
            "name": "aClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 647,
            "end": 654,
            "callee": {
              "type": "Identifier",
              "start": 651,
              "end": 652,
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
      "type": "ThrowStatement",
      "start": 656,
      "end": 669,
      "argument": {
        "type": "Identifier",
        "start": 662,
        "end": 668,
        "name": "aClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 670,
      "end": 706,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 674,
          "end": 705,
          "id": {
            "type": "Identifier",
            "start": 674,
            "end": 687,
            "name": "aGenericClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 690,
            "end": 705,
            "callee": {
              "type": "Identifier",
              "start": 694,
              "end": 695,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 695,
              "end": 703,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 696,
                  "end": 702
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
      "type": "ThrowStatement",
      "start": 707,
      "end": 727,
      "argument": {
        "type": "Identifier",
        "start": 713,
        "end": 726,
        "name": "aGenericClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 728,
      "end": 761,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 732,
          "end": 760,
          "id": {
            "type": "Identifier",
            "start": 732,
            "end": 747,
            "name": "anObjectLiteral",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 750,
            "end": 760,
            "properties": [
              {
                "type": "Property",
                "start": 752,
                "end": 758,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 752,
                  "end": 754,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 756,
                  "end": 758,
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
      "type": "ThrowStatement",
      "start": 762,
      "end": 784,
      "argument": {
        "type": "Identifier",
        "start": 768,
        "end": 783,
        "name": "anObjectLiteral",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 786,
      "end": 804,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 790,
          "end": 803,
          "id": {
            "type": "Identifier",
            "start": 790,
            "end": 799,
            "name": "aFunction",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 802,
            "end": 803,
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
      "type": "ThrowStatement",
      "start": 805,
      "end": 821,
      "argument": {
        "type": "Identifier",
        "start": 811,
        "end": 820,
        "name": "aFunction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ThrowStatement",
      "start": 822,
      "end": 842,
      "argument": {
        "type": "CallExpression",
        "start": 828,
        "end": 841,
        "callee": {
          "type": "Identifier",
          "start": 828,
          "end": 837,
          "name": "aFunction",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 838,
            "end": 840,
            "value": "",
            "raw": "''"
          }
        ],
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 843,
      "end": 866,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 847,
          "end": 865,
          "id": {
            "type": "Identifier",
            "start": 847,
            "end": 854,
            "name": "aLambda",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 857,
            "end": 865,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 858,
                "end": 859,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 864,
              "end": 865,
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
      "type": "ThrowStatement",
      "start": 867,
      "end": 881,
      "argument": {
        "type": "Identifier",
        "start": 873,
        "end": 880,
        "name": "aLambda",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ThrowStatement",
      "start": 882,
      "end": 899,
      "argument": {
        "type": "CallExpression",
        "start": 888,
        "end": 898,
        "callee": {
          "type": "Identifier",
          "start": 888,
          "end": 895,
          "name": "aLambda",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 896,
            "end": 897,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 901,
      "end": 917,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 905,
          "end": 916,
          "id": {
            "type": "Identifier",
            "start": 905,
            "end": 912,
            "name": "aModule",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 915,
            "end": 916,
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
      "type": "ThrowStatement",
      "start": 918,
      "end": 932,
      "argument": {
        "type": "Identifier",
        "start": 924,
        "end": 931,
        "name": "aModule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ThrowStatement",
      "start": 933,
      "end": 948,
      "argument": {
        "type": "UnaryExpression",
        "start": 939,
        "end": 947,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 946,
          "end": 947,
          "name": "M",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 949,
      "end": 980,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 953,
          "end": 979,
          "id": {
            "type": "Identifier",
            "start": 953,
            "end": 967,
            "name": "aClassInModule",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 970,
            "end": 979,
            "callee": {
              "type": "MemberExpression",
              "start": 974,
              "end": 977,
              "object": {
                "type": "Identifier",
                "start": 974,
                "end": 975,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 976,
                "end": 977,
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
      "type": "ThrowStatement",
      "start": 981,
      "end": 1002,
      "argument": {
        "type": "Identifier",
        "start": 987,
        "end": 1001,
        "name": "aClassInModule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1003,
      "end": 1032,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1007,
          "end": 1031,
          "id": {
            "type": "Identifier",
            "start": 1007,
            "end": 1024,
            "name": "aFunctionInModule",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1027,
            "end": 1031,
            "object": {
              "type": "Identifier",
              "start": 1027,
              "end": 1028,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1029,
              "end": 1031,
              "name": "F2",
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
      "type": "ThrowStatement",
      "start": 1033,
      "end": 1057,
      "argument": {
        "type": "Identifier",
        "start": 1039,
        "end": 1056,
        "name": "aFunctionInModule",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1112,
      "end": 1118,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1116,
          "end": 1117,
          "id": {
            "type": "Identifier",
            "start": 1116,
            "end": 1117,
            "name": "x",
            "typeAnnotation": null,
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
      "type": "ThrowStatement",
      "start": 1119,
      "end": 1127,
      "argument": {
        "type": "Identifier",
        "start": 1125,
        "end": 1126,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ThrowStatement",
      "start": 1141,
      "end": 1151,
      "argument": {
        "type": "Literal",
        "start": 1147,
        "end": 1150,
        "value": 0,
        "raw": "0.0"
      }
    },
    {
      "type": "ThrowStatement",
      "start": 1152,
      "end": 1164,
      "argument": {
        "type": "Literal",
        "start": 1158,
        "end": 1163,
        "value": false,
        "raw": "false"
      }
    },
    {
      "type": "ThrowStatement",
      "start": 1165,
      "end": 1176,
      "argument": {
        "type": "Literal",
        "start": 1171,
        "end": 1175,
        "value": null,
        "raw": "null"
      }
    },
    {
      "type": "ThrowStatement",
      "start": 1177,
      "end": 1193,
      "argument": {
        "type": "Identifier",
        "start": 1183,
        "end": 1192,
        "name": "undefined",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "ThrowStatement",
      "start": 1194,
      "end": 1211,
      "argument": {
        "type": "Literal",
        "start": 1200,
        "end": 1210,
        "value": "a string",
        "raw": "'a string'"
      }
    },
    {
      "type": "ThrowStatement",
      "start": 1212,
      "end": 1252,
      "argument": {
        "type": "FunctionExpression",
        "start": 1218,
        "end": 1251,
        "id": null,
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 1230,
          "end": 1251,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 1232,
              "end": 1249,
              "argument": {
                "type": "Literal",
                "start": 1239,
                "end": 1249,
                "value": "a string",
                "raw": "'a string'"
              }
            }
          ]
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
      }
    },
    {
      "type": "ThrowStatement",
      "start": 1253,
      "end": 1274,
      "argument": {
        "type": "ArrowFunctionExpression",
        "start": 1259,
        "end": 1273,
        "id": null,
        "expression": true,
        "generator": false,
        "async": false,
        "params": [
          {
            "type": "Identifier",
            "start": 1263,
            "end": 1266,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1264,
              "end": 1266,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1265,
                "end": 1266,
                "typeName": {
                  "type": "Identifier",
                  "start": 1265,
                  "end": 1266,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          }
        ],
        "body": {
          "type": "Literal",
          "start": 1271,
          "end": 1273,
          "value": 42,
          "raw": "42"
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1259,
          "end": 1262,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1260,
              "end": 1261,
              "name": {
                "type": "Identifier",
                "start": 1260,
                "end": 1261,
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
        "returnType": null
      }
    },
    {
      "type": "ThrowStatement",
      "start": 1275,
      "end": 1298,
      "argument": {
        "type": "ObjectExpression",
        "start": 1281,
        "end": 1297,
        "properties": [
          {
            "type": "Property",
            "start": 1283,
            "end": 1288,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1283,
              "end": 1284,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1286,
              "end": 1288,
              "value": 12,
              "raw": "12"
            },
            "kind": "init",
            "optional": false
          },
          {
            "type": "Property",
            "start": 1290,
            "end": 1295,
            "method": false,
            "shorthand": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1290,
              "end": 1291,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 1293,
              "end": 1295,
              "value": 13,
              "raw": "13"
            },
            "kind": "init",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "ThrowStatement",
      "start": 1299,
      "end": 1308,
      "argument": {
        "type": "ArrayExpression",
        "start": 1305,
        "end": 1307,
        "elements": []
      }
    },
    {
      "type": "ThrowStatement",
      "start": 1309,
      "end": 1328,
      "argument": {
        "type": "ArrayExpression",
        "start": 1315,
        "end": 1327,
        "elements": [
          {
            "type": "Literal",
            "start": 1316,
            "end": 1319,
            "value": "a",
            "raw": "'a'"
          },
          {
            "type": "ArrayExpression",
            "start": 1321,
            "end": 1326,
            "elements": [
              {
                "type": "Literal",
                "start": 1322,
                "end": 1325,
                "value": "b",
                "raw": "'b'"
              }
            ]
          }
        ]
      }
    },
    {
      "type": "ThrowStatement",
      "start": 1329,
      "end": 1343,
      "argument": {
        "type": "Literal",
        "start": 1335,
        "end": 1342,
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "flags": "",
          "pattern": "[a-z]"
        }
      }
    },
    {
      "type": "ThrowStatement",
      "start": 1344,
      "end": 1361,
      "argument": {
        "type": "NewExpression",
        "start": 1350,
        "end": 1360,
        "callee": {
          "type": "Identifier",
          "start": 1354,
          "end": 1358,
          "name": "Date",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      }
    },
    {
      "type": "ThrowStatement",
      "start": 1362,
      "end": 1376,
      "argument": {
        "type": "NewExpression",
        "start": 1368,
        "end": 1375,
        "callee": {
          "type": "Identifier",
          "start": 1372,
          "end": 1373,
          "name": "C",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      }
    },
    {
      "type": "ThrowStatement",
      "start": 1377,
      "end": 1396,
      "argument": {
        "type": "NewExpression",
        "start": 1383,
        "end": 1395,
        "callee": {
          "type": "Identifier",
          "start": 1387,
          "end": 1393,
          "name": "Object",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      }
    },
    {
      "type": "ThrowStatement",
      "start": 1397,
      "end": 1419,
      "argument": {
        "type": "NewExpression",
        "start": 1403,
        "end": 1418,
        "callee": {
          "type": "Identifier",
          "start": 1407,
          "end": 1408,
          "name": "D",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1408,
          "end": 1416,
          "params": [
            {
              "type": "TSNumberKeyword",
              "start": 1409,
              "end": 1415
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
