__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 110,
  "end": 724,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 110,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 120,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 121,
        "end": 139,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 127,
            "end": 137,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "name": "x",
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
              "start": 128,
              "end": 136,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 130,
                "end": 136
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
      "type": "ClassDeclaration",
      "start": 140,
      "end": 185,
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 153,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 162,
        "end": 166,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 167,
        "end": 185,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 173,
            "end": 183,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "name": "y",
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
              "start": 174,
              "end": 182,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 176,
                "end": 182
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
      "type": "FunctionDeclaration",
      "start": 187,
      "end": 268,
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 197,
        "name": "f",
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
          "start": 214,
          "end": 235,
          "name": "x",
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
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 222,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 222,
                    "end": 225,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 224,
                      "end": 225,
                      "typeName": {
                        "type": "Identifier",
                        "start": 224,
                        "end": 225,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 227,
                  "end": 233,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 227,
                    "end": 230,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 230,
                    "end": 233,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 232,
                      "end": 233,
                      "typeName": {
                        "type": "Identifier",
                        "start": 232,
                        "end": 233,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 251,
                  "name": "r",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 248,
                    "end": 251,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 250,
                      "end": 251,
                      "typeName": {
                        "type": "Identifier",
                        "start": 250,
                        "end": 251,
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
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 257,
            "end": 266,
            "argument": {
              "type": "Identifier",
              "start": 264,
              "end": 265,
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 197,
        "end": 213,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 198,
            "end": 212,
            "name": {
              "type": "Identifier",
              "start": 198,
              "end": 199,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 208,
              "end": 212,
              "typeName": {
                "type": "Identifier",
                "start": 208,
                "end": 212,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 273,
            "end": 274,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 277,
            "end": 319,
            "callee": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 281,
                      "end": 284,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 286,
                      "end": 296,
                      "callee": {
                        "type": "Identifier",
                        "start": 290,
                        "end": 294,
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 298,
                    "end": 316,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 298,
                      "end": 301,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 303,
                      "end": 316,
                      "callee": {
                        "type": "Identifier",
                        "start": 307,
                        "end": 314,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
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
      "start": 321,
      "end": 376,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 375,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 330,
            "end": 375,
            "callee": {
              "type": "Identifier",
              "start": 330,
              "end": 331,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 337,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 339,
                      "end": 352,
                      "callee": {
                        "type": "Identifier",
                        "start": 343,
                        "end": 350,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 354,
                    "end": 372,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 357,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 359,
                      "end": 372,
                      "callee": {
                        "type": "Identifier",
                        "start": 363,
                        "end": 370,
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 379,
      "end": 407,
      "id": {
        "type": "Identifier",
        "start": 389,
        "end": 390,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 390,
        "end": 393,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 391,
            "end": 392,
            "name": {
              "type": "Identifier",
              "start": 391,
              "end": 392,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 394,
        "end": 407,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 400,
            "end": 405,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 400,
              "end": 401,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 401,
              "end": 404,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 403,
                "end": 404,
                "typeName": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 404,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "FunctionDeclaration",
      "start": 408,
      "end": 476,
      "id": {
        "type": "Identifier",
        "start": 417,
        "end": 419,
        "name": "f2",
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
          "start": 436,
          "end": 443,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 437,
            "end": 443,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 439,
              "end": 443,
              "typeName": {
                "type": "Identifier",
                "start": 439,
                "end": 440,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 440,
                "end": 443,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 441,
                    "end": 442,
                    "typeName": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 442,
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
          "decorators": [],
          "optional": false
        }
      ],
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
                "id": {
                  "type": "Identifier",
                  "start": 455,
                  "end": 459,
                  "name": "r",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 456,
                    "end": 459,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 458,
                      "end": 459,
                      "typeName": {
                        "type": "Identifier",
                        "start": 458,
                        "end": 459,
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
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 465,
            "end": 474,
            "argument": {
              "type": "Identifier",
              "start": 472,
              "end": 473,
              "name": "r",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 419,
        "end": 435,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 420,
            "end": 434,
            "name": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 430,
              "end": 434,
              "typeName": {
                "type": "Identifier",
                "start": 430,
                "end": 434,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 481,
            "end": 494,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 482,
              "end": 494,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 484,
                "end": 494,
                "typeName": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 485,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 485,
                  "end": 494,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 486,
                      "end": 493,
                      "typeName": {
                        "type": "Identifier",
                        "start": 486,
                        "end": 493,
                        "name": "Derived",
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
      "start": 496,
      "end": 511,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 500,
          "end": 510,
          "id": {
            "type": "Identifier",
            "start": 500,
            "end": 502,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 505,
            "end": 510,
            "callee": {
              "type": "Identifier",
              "start": 505,
              "end": 507,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 508,
                "end": 509,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 514,
      "end": 587,
      "id": {
        "type": "Identifier",
        "start": 523,
        "end": 525,
        "name": "f3",
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
          "start": 542,
          "end": 546,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 543,
            "end": 546,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 545,
              "end": 546,
              "typeName": {
                "type": "Identifier",
                "start": 545,
                "end": 546,
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
        },
        {
          "type": "Identifier",
          "start": 548,
          "end": 562,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 549,
            "end": 562,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 551,
              "end": 562,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 552,
                  "end": 556,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 553,
                    "end": 556,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 555,
                      "end": 556,
                      "typeName": {
                        "type": "Identifier",
                        "start": 555,
                        "end": 556,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 558,
                "end": 562,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 561,
                  "end": 562,
                  "typeName": {
                    "type": "Identifier",
                    "start": 561,
                    "end": 562,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
              "callee": {
                "type": "Identifier",
                "start": 577,
                "end": 578,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 579,
                  "end": 583,
                  "value": null,
                  "raw": "null"
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 525,
        "end": 541,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 526,
            "end": 540,
            "name": {
              "type": "Identifier",
              "start": 526,
              "end": 527,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 536,
              "end": 540,
              "typeName": {
                "type": "Identifier",
                "start": 536,
                "end": 540,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 592,
            "end": 594,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 597,
            "end": 619,
            "callee": {
              "type": "Identifier",
              "start": 597,
              "end": 599,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 600,
                "end": 610,
                "callee": {
                  "type": "Identifier",
                  "start": 604,
                  "end": 608,
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 612,
                "end": 618,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 612,
                    "end": 613,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 617,
                  "end": 618,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
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
      "start": 621,
      "end": 656,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 625,
          "end": 655,
          "id": {
            "type": "Identifier",
            "start": 625,
            "end": 627,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 630,
            "end": 655,
            "callee": {
              "type": "Identifier",
              "start": 630,
              "end": 632,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "NewExpression",
                "start": 633,
                "end": 646,
                "callee": {
                  "type": "Identifier",
                  "start": 637,
                  "end": 644,
                  "name": "Derived",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 648,
                "end": 654,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 648,
                    "end": 649,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 653,
                  "end": 654,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
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
      "start": 658,
      "end": 682,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 662,
          "end": 681,
          "id": {
            "type": "Identifier",
            "start": 662,
            "end": 664,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 667,
            "end": 681,
            "callee": {
              "type": "Identifier",
              "start": 667,
              "end": 669,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 670,
                "end": 674,
                "value": null,
                "raw": "null"
              },
              {
                "type": "Literal",
                "start": 676,
                "end": 680,
                "value": null,
                "raw": "null"
              }
            ],
            "optional": false,
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
      "start": 690,
      "end": 716,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 694,
          "end": 715,
          "id": {
            "type": "Identifier",
            "start": 694,
            "end": 696,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 699,
            "end": 715,
            "callee": {
              "type": "Identifier",
              "start": 699,
              "end": 701,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 702,
                "end": 706,
                "value": null,
                "raw": "null"
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 708,
                "end": 714,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 708,
                    "end": 709,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "Identifier",
                  "start": 713,
                  "end": 714,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
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
