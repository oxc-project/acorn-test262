__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 14,
  "end": 1419,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 14,
      "end": 45,
      "id": {
        "type": "Identifier",
        "start": 24,
        "end": 25,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 54,
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
          "start": 66,
          "end": 67,
          "expression": {
            "type": "Identifier",
            "start": 66,
            "end": 67,
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
        "start": 68,
        "end": 87,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 74,
            "end": 85,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 74,
              "end": 76,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
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
      "start": 89,
      "end": 157,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 96,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
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
        "start": 99,
        "end": 157,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 105,
            "end": 115,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 111,
              "decorators": [],
              "name": "source",
              "optional": false,
              "typeAnnotation": null
            },
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
            "start": 120,
            "end": 134,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 127,
              "decorators": [],
              "name": "recurse",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
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
            "start": 139,
            "end": 155,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 146,
              "decorators": [],
              "name": "wrapped",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
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
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null
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
      "start": 159,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 169,
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
          "start": 170,
          "end": 179,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 171,
            "end": 179,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 173,
              "end": 179
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 180,
        "end": 188,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 182,
          "end": 188
        }
      },
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
      "expression": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 205,
      "end": 334,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 213,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
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
                "start": 235,
                "end": 264,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 245,
                    "end": 258,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 249,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                  "start": 289,
                  "end": 298,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 290,
                    "end": 298,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 292,
                      "end": 298
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 299,
                "end": 307,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 301,
                  "end": 307
                }
              },
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
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 319,
                          "end": 327,
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
      "start": 336,
      "end": 354,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 353,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 347,
            "decorators": [],
            "name": "aNumber",
            "optional": false,
            "typeAnnotation": null
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
        "decorators": [],
        "name": "aNumber",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 370,
      "end": 403,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 374,
          "end": 402,
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 381,
            "decorators": [],
            "name": "aString",
            "optional": false,
            "typeAnnotation": null
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
        "decorators": [],
        "name": "aString",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 419,
      "end": 444,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 423,
          "end": 443,
          "id": {
            "type": "Identifier",
            "start": 423,
            "end": 428,
            "decorators": [],
            "name": "aDate",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 431,
            "end": 443,
            "callee": {
              "type": "Identifier",
              "start": 435,
              "end": 439,
              "decorators": [],
              "name": "Date",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 440,
                "end": 442,
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
      "type": "ThrowStatement",
      "start": 445,
      "end": 457,
      "argument": {
        "type": "Identifier",
        "start": 451,
        "end": 456,
        "decorators": [],
        "name": "aDate",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 458,
      "end": 486,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 462,
          "end": 485,
          "id": {
            "type": "Identifier",
            "start": 462,
            "end": 470,
            "decorators": [],
            "name": "anObject",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 473,
            "end": 485,
            "callee": {
              "type": "Identifier",
              "start": 477,
              "end": 483,
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
      "type": "ThrowStatement",
      "start": 487,
      "end": 502,
      "argument": {
        "type": "Identifier",
        "start": 493,
        "end": 501,
        "decorators": [],
        "name": "anObject",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 504,
      "end": 521,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 508,
          "end": 520,
          "id": {
            "type": "Identifier",
            "start": 508,
            "end": 513,
            "decorators": [],
            "name": "anAny",
            "optional": false,
            "typeAnnotation": null
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
        "decorators": [],
        "name": "anAny",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 535,
      "end": 566,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 539,
          "end": 565,
          "id": {
            "type": "Identifier",
            "start": 539,
            "end": 549,
            "decorators": [],
            "name": "anOtherAny",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 552,
            "end": 565,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 553,
              "end": 556
            },
            "expression": {
              "type": "NewExpression",
              "start": 558,
              "end": 565,
              "callee": {
                "type": "Identifier",
                "start": 562,
                "end": 563,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            }
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "anOtherAny",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 585,
      "end": 613,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 589,
          "end": 612,
          "id": {
            "type": "Identifier",
            "start": 589,
            "end": 600,
            "decorators": [],
            "name": "anUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 603,
            "end": 612,
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
      "type": "ThrowStatement",
      "start": 614,
      "end": 632,
      "argument": {
        "type": "Identifier",
        "start": 620,
        "end": 631,
        "decorators": [],
        "name": "anUndefined",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 634,
      "end": 655,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 638,
          "end": 654,
          "id": {
            "type": "Identifier",
            "start": 638,
            "end": 644,
            "decorators": [],
            "name": "aClass",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 647,
            "end": 654,
            "callee": {
              "type": "Identifier",
              "start": 651,
              "end": 652,
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
      "type": "ThrowStatement",
      "start": 656,
      "end": 669,
      "argument": {
        "type": "Identifier",
        "start": 662,
        "end": 668,
        "decorators": [],
        "name": "aClass",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 670,
      "end": 706,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 674,
          "end": 705,
          "id": {
            "type": "Identifier",
            "start": 674,
            "end": 687,
            "decorators": [],
            "name": "aGenericClass",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 690,
            "end": 705,
            "callee": {
              "type": "Identifier",
              "start": 694,
              "end": 695,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "arguments": []
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "aGenericClass",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 728,
      "end": 761,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 732,
          "end": 760,
          "id": {
            "type": "Identifier",
            "start": 732,
            "end": 747,
            "decorators": [],
            "name": "anObjectLiteral",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 752,
                  "end": 754,
                  "decorators": [],
                  "name": "id",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 756,
                  "end": 758,
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
      "type": "ThrowStatement",
      "start": 762,
      "end": 784,
      "argument": {
        "type": "Identifier",
        "start": 768,
        "end": 783,
        "decorators": [],
        "name": "anObjectLiteral",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 786,
      "end": 804,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 790,
          "end": 803,
          "id": {
            "type": "Identifier",
            "start": 790,
            "end": 799,
            "decorators": [],
            "name": "aFunction",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 802,
            "end": 803,
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
      "type": "ThrowStatement",
      "start": 805,
      "end": 821,
      "argument": {
        "type": "Identifier",
        "start": 811,
        "end": 820,
        "decorators": [],
        "name": "aFunction",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "aFunction",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 838,
            "end": 840,
            "value": "",
            "raw": "''"
          }
        ],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 843,
      "end": 866,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 847,
          "end": 865,
          "id": {
            "type": "Identifier",
            "start": 847,
            "end": 854,
            "decorators": [],
            "name": "aLambda",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 857,
            "end": 865,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 858,
                "end": 859,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "start": 864,
              "end": 865,
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
      "type": "ThrowStatement",
      "start": 867,
      "end": 881,
      "argument": {
        "type": "Identifier",
        "start": 873,
        "end": 880,
        "decorators": [],
        "name": "aLambda",
        "optional": false,
        "typeAnnotation": null
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
          "decorators": [],
          "name": "aLambda",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 896,
            "end": 897,
            "value": 1,
            "raw": "1"
          }
        ],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 901,
      "end": 917,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 905,
          "end": 916,
          "id": {
            "type": "Identifier",
            "start": 905,
            "end": 912,
            "decorators": [],
            "name": "aModule",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 915,
            "end": 916,
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
      "type": "ThrowStatement",
      "start": 918,
      "end": 932,
      "argument": {
        "type": "Identifier",
        "start": 924,
        "end": 931,
        "decorators": [],
        "name": "aModule",
        "optional": false,
        "typeAnnotation": null
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
        "argument": {
          "type": "Identifier",
          "start": 946,
          "end": 947,
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 949,
      "end": 980,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 953,
          "end": 979,
          "id": {
            "type": "Identifier",
            "start": 953,
            "end": 967,
            "decorators": [],
            "name": "aClassInModule",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 976,
                "end": 977,
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
      "type": "ThrowStatement",
      "start": 981,
      "end": 1002,
      "argument": {
        "type": "Identifier",
        "start": 987,
        "end": 1001,
        "decorators": [],
        "name": "aClassInModule",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1003,
      "end": 1032,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1007,
          "end": 1031,
          "id": {
            "type": "Identifier",
            "start": 1007,
            "end": 1024,
            "decorators": [],
            "name": "aFunctionInModule",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 1027,
            "end": 1031,
            "object": {
              "type": "Identifier",
              "start": 1027,
              "end": 1028,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1029,
              "end": 1031,
              "decorators": [],
              "name": "F2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "aFunctionInModule",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1112,
      "end": 1118,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1116,
          "end": 1117,
          "id": {
            "type": "Identifier",
            "start": 1116,
            "end": 1117,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
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
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null
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
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
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
        "expression": false
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
        "expression": true,
        "async": false,
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
        "params": [
          {
            "type": "Identifier",
            "start": 1263,
            "end": 1266,
            "decorators": [],
            "name": "x",
            "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "Literal",
          "start": 1271,
          "end": 1273,
          "value": 42,
          "raw": "42"
        },
        "id": null,
        "generator": false
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
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 1283,
              "end": 1284,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 1286,
              "end": 1288,
              "value": 12,
              "raw": "12"
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false
          },
          {
            "type": "Property",
            "start": 1290,
            "end": 1295,
            "kind": "init",
            "key": {
              "type": "Identifier",
              "start": 1290,
              "end": 1291,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "Literal",
              "start": 1293,
              "end": 1295,
              "value": 13,
              "raw": "13"
            },
            "method": false,
            "shorthand": false,
            "computed": false,
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
          "pattern": "[a-z]",
          "flags": ""
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
          "decorators": [],
          "name": "Date",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
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
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
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
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
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
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null
        },
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
        },
        "arguments": []
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
