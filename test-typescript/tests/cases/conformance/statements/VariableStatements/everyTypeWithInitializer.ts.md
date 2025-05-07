__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 790,
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
              "value": 42,
              "regex": null,
              "bigint": null
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
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 339,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 333,
            "decorators": [],
            "name": "aNumber",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 336,
            "end": 339,
            "raw": "9.9",
            "value": 9.9,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 341,
      "end": 374,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 345,
          "end": 373,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 352,
            "decorators": [],
            "name": "aString",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 355,
            "end": 373,
            "raw": "'this is a string'",
            "value": "this is a string",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 375,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 379,
          "end": 399,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 379,
            "end": 384,
            "decorators": [],
            "name": "aDate",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 387,
            "end": 399,
            "arguments": [
              {
                "type": "Literal",
                "start": 396,
                "end": 398,
                "raw": "12",
                "value": 12,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 391,
              "end": 395,
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
      "start": 401,
      "end": 429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 428,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 413,
            "decorators": [],
            "name": "anObject",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 416,
            "end": 428,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 420,
              "end": 426,
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
      "start": 431,
      "end": 448,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 435,
          "end": 447,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 440,
            "decorators": [],
            "name": "anAny",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 443,
            "end": 447,
            "raw": "null",
            "value": null,
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 449,
      "end": 480,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 453,
          "end": 479,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 453,
            "end": 463,
            "decorators": [],
            "name": "anOtherAny",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 466,
            "end": 479,
            "expression": {
              "type": "NewExpression",
              "start": 472,
              "end": 479,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 476,
                "end": 477,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 467,
              "end": 470
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 481,
      "end": 509,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 485,
          "end": 508,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 485,
            "end": 496,
            "decorators": [],
            "name": "anUndefined",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 499,
            "end": 508,
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
      "start": 512,
      "end": 533,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 516,
          "end": 532,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 516,
            "end": 522,
            "decorators": [],
            "name": "aClass",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 525,
            "end": 532,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 529,
              "end": 530,
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
      "start": 534,
      "end": 570,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 538,
          "end": 569,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 538,
            "end": 551,
            "decorators": [],
            "name": "aGenericClass",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 554,
            "end": 569,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 558,
              "end": 559,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 559,
              "end": 567,
              "params": [
                {
                  "type": "TSStringKeyword",
                  "start": 560,
                  "end": 566
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
      "start": 571,
      "end": 604,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 575,
          "end": 603,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 575,
            "end": 590,
            "decorators": [],
            "name": "anObjectLiteral",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 593,
            "end": 603,
            "properties": [
              {
                "type": "Property",
                "start": 595,
                "end": 601,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 595,
                  "end": 597,
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
                  "start": 599,
                  "end": 601,
                  "raw": "12",
                  "value": 12,
                  "regex": null,
                  "bigint": null
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
      "start": 606,
      "end": 624,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 610,
          "end": 623,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 610,
            "end": 619,
            "decorators": [],
            "name": "aFunction",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 622,
            "end": 623,
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
      "start": 625,
      "end": 648,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 629,
          "end": 647,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 629,
            "end": 636,
            "decorators": [],
            "name": "aLambda",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 639,
            "end": 647,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 646,
              "end": 647,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 640,
                "end": 641,
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
      "start": 650,
      "end": 666,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 665,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 661,
            "decorators": [],
            "name": "aModule",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 664,
            "end": 665,
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
      "start": 667,
      "end": 698,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 671,
          "end": 697,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 671,
            "end": 685,
            "decorators": [],
            "name": "aClassInModule",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 688,
            "end": 697,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 692,
              "end": 695,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 692,
                "end": 693,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 694,
                "end": 695,
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
      "start": 699,
      "end": 728,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 703,
          "end": 727,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 703,
            "end": 720,
            "decorators": [],
            "name": "aFunctionInModule",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 723,
            "end": 727,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 723,
              "end": 724,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 725,
              "end": 727,
              "decorators": [],
              "name": "F2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 783,
      "end": 789,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 787,
          "end": 788,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 787,
            "end": 788,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null
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
