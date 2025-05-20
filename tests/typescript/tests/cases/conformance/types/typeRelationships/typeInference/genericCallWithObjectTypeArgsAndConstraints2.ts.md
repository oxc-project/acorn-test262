__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 110,
  "end": 723,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 139,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 121,
        "end": 139,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 127,
            "end": 137,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 130,
                "end": 136
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
        "start": 116,
        "end": 120,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 140,
      "end": 185,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 167,
        "end": 185,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 173,
            "end": 183,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 182,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 176,
                "end": 182
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
        "start": 146,
        "end": 153,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 162,
        "end": 166,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 187,
      "end": 268,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 237,
        "end": 268,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 243,
            "end": 252,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 247,
                "end": 251,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 251,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 251,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 250,
                      "end": 251,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 251,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
            "type": "ReturnStatement",
            "start": 257,
            "end": 266,
            "argument": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 197,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 214,
          "end": 235,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 215,
            "end": 235,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 217,
              "end": 235,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 219,
                  "end": 226,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 222,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 222,
                    "end": 225,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 224,
                      "end": 225,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 225,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 227,
                  "end": 233,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 230,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 230,
                    "end": 233,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 232,
                      "end": 233,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 233,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 197,
        "end": 213,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 198,
            "end": 212,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 208,
              "end": 212,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 208,
                "end": 212,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
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
      "type": "VariableDeclaration",
      "start": 269,
      "end": 320,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 273,
          "end": 319,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 273,
            "end": 274,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 277,
            "end": 319,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 279,
                "end": 318,
                "properties": [
                  {
                    "type": "Property",
                    "start": 281,
                    "end": 296,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 284,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 286,
                      "end": 296,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 294,
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 298,
                    "end": 316,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 298,
                      "end": 301,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 303,
                      "end": 316,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 307,
                        "end": 314,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 321,
      "end": 376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 375,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 330,
            "end": 375,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 332,
                "end": 374,
                "properties": [
                  {
                    "type": "Property",
                    "start": 334,
                    "end": 352,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 337,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 339,
                      "end": 352,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 343,
                        "end": 350,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 354,
                    "end": 372,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 357,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 359,
                      "end": 372,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 363,
                        "end": 370,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 379,
      "end": 407,
      "body": {
        "type": "TSInterfaceBody",
        "start": 394,
        "end": 407,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 400,
            "end": 405,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 400,
              "end": 401,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 401,
              "end": 404,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 403,
                "end": 404,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 404,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 390,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 390,
        "end": 393,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 391,
            "end": 392,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 391,
              "end": 392,
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
      "start": 408,
      "end": 476,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 445,
        "end": 476,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 451,
            "end": 460,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 455,
                "end": 459,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 455,
                  "end": 459,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 456,
                    "end": 459,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 458,
                      "end": 459,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 458,
                        "end": 459,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
            "type": "ReturnStatement",
            "start": 465,
            "end": 474,
            "argument": {
              "type": "Identifier",
              "start": 472,
              "end": 473,
              "decorators": [],
              "name": "r",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 419,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 436,
          "end": 443,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 437,
            "end": 443,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 439,
              "end": 443,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 440,
                "end": 443,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 441,
                    "end": 442,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 442,
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
                "start": 439,
                "end": 440,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 419,
        "end": 435,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 420,
            "end": 434,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 430,
              "end": 434,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 430,
                "end": 434,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
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
      "type": "VariableDeclaration",
      "start": 477,
      "end": 495,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 481,
          "end": 494,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 481,
            "end": 494,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 482,
              "end": 494,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 484,
                "end": 494,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 485,
                  "end": 494,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 486,
                      "end": 493,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 486,
                        "end": 493,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 485,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 496,
      "end": 511,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 500,
          "end": 510,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 500,
            "end": 502,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 505,
            "end": 510,
            "arguments": [
              {
                "type": "Identifier",
                "start": 508,
                "end": 509,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 505,
              "end": 507,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 514,
      "end": 587,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 564,
        "end": 587,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 570,
            "end": 585,
            "argument": {
              "type": "CallExpression",
              "start": 577,
              "end": 584,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 579,
                  "end": 583,
                  "raw": "null",
                  "value": null
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 577,
                "end": 578,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
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
        "start": 523,
        "end": 525,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 542,
          "end": 546,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 543,
            "end": 546,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 545,
              "end": 546,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 548,
          "end": 562,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 549,
            "end": 562,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 551,
              "end": 562,
              "params": [
                {
                  "type": "Identifier",
                  "start": 552,
                  "end": 556,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 553,
                    "end": 556,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 555,
                      "end": 556,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 555,
                        "end": 556,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 558,
                "end": 562,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 561,
                  "end": 562,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 561,
                    "end": 562,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 525,
        "end": 541,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 526,
            "end": 540,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 536,
              "end": 540,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 536,
                "end": 540,
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 526,
              "end": 527,
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
      "type": "VariableDeclaration",
      "start": 588,
      "end": 620,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 592,
          "end": 619,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 592,
            "end": 594,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 597,
            "end": 619,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 600,
                "end": 610,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 604,
                  "end": 608,
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 612,
                "end": 618,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 617,
                  "end": 618,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 612,
                    "end": 613,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 597,
              "end": 599,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 621,
      "end": 656,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 625,
          "end": 655,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 625,
            "end": 627,
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 630,
            "end": 655,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 633,
                "end": 646,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 644,
                  "decorators": [],
                  "name": "Derived",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 648,
                "end": 654,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 653,
                  "end": 654,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 648,
                    "end": 649,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 630,
              "end": 632,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 658,
      "end": 682,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 662,
          "end": 681,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 662,
            "end": 664,
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 667,
            "end": 681,
            "arguments": [
              {
                "type": "Literal",
                "start": 670,
                "end": 674,
                "raw": "null",
                "value": null
              },
              {
                "type": "Literal",
                "start": 676,
                "end": 680,
                "raw": "null",
                "value": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 667,
              "end": 669,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 690,
      "end": 716,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 694,
          "end": 715,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 694,
            "end": 696,
            "decorators": [],
            "name": "r7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 699,
            "end": 715,
            "arguments": [
              {
                "type": "Literal",
                "start": 702,
                "end": 706,
                "raw": "null",
                "value": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 708,
                "end": 714,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 713,
                  "end": 714,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 708,
                    "end": 709,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 699,
              "end": 701,
              "decorators": [],
              "name": "f3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
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
