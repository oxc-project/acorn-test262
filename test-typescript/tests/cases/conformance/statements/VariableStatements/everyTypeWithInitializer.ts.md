__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 791,
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
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 339,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 333,
            "name": "aNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 336,
            "end": 339,
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
      "start": 341,
      "end": 374,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 345,
          "end": 373,
          "id": {
            "type": "Identifier",
            "start": 345,
            "end": 352,
            "name": "aString",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 355,
            "end": 373,
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
      "start": 375,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 379,
          "end": 399,
          "id": {
            "type": "Identifier",
            "start": 379,
            "end": 384,
            "name": "aDate",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 387,
            "end": 399,
            "callee": {
              "type": "Identifier",
              "start": 391,
              "end": 395,
              "name": "Date",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 396,
                "end": 398,
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
      "start": 401,
      "end": 429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 428,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 413,
            "name": "anObject",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 416,
            "end": 428,
            "callee": {
              "type": "Identifier",
              "start": 420,
              "end": 426,
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
      "start": 431,
      "end": 448,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 435,
          "end": 447,
          "id": {
            "type": "Identifier",
            "start": 435,
            "end": 440,
            "name": "anAny",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 443,
            "end": 447,
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
      "start": 449,
      "end": 480,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 453,
          "end": 479,
          "id": {
            "type": "Identifier",
            "start": 453,
            "end": 463,
            "name": "anOtherAny",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 466,
            "end": 479,
            "expression": {
              "type": "NewExpression",
              "start": 472,
              "end": 479,
              "callee": {
                "type": "Identifier",
                "start": 476,
                "end": 477,
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
              "start": 467,
              "end": 470
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
      "start": 481,
      "end": 509,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 485,
          "end": 508,
          "id": {
            "type": "Identifier",
            "start": 485,
            "end": 496,
            "name": "anUndefined",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 499,
            "end": 508,
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
      "start": 512,
      "end": 533,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 516,
          "end": 532,
          "id": {
            "type": "Identifier",
            "start": 516,
            "end": 522,
            "name": "aClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 525,
            "end": 532,
            "callee": {
              "type": "Identifier",
              "start": 529,
              "end": 530,
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
      "start": 534,
      "end": 570,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 538,
          "end": 569,
          "id": {
            "type": "Identifier",
            "start": 538,
            "end": 551,
            "name": "aGenericClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 554,
            "end": 569,
            "callee": {
              "type": "Identifier",
              "start": 558,
              "end": 559,
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 575,
            "end": 590,
            "name": "anObjectLiteral",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 595,
                  "end": 597,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 599,
                  "end": 601,
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
      "start": 606,
      "end": 624,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 610,
          "end": 623,
          "id": {
            "type": "Identifier",
            "start": 610,
            "end": 619,
            "name": "aFunction",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 622,
            "end": 623,
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
      "start": 625,
      "end": 648,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 629,
          "end": 647,
          "id": {
            "type": "Identifier",
            "start": 629,
            "end": 636,
            "name": "aLambda",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 639,
            "end": 647,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 640,
                "end": 641,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Literal",
              "start": 646,
              "end": 647,
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
      "start": 650,
      "end": 666,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 654,
          "end": 665,
          "id": {
            "type": "Identifier",
            "start": 654,
            "end": 661,
            "name": "aModule",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 664,
            "end": 665,
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
      "start": 667,
      "end": 698,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 671,
          "end": 697,
          "id": {
            "type": "Identifier",
            "start": 671,
            "end": 685,
            "name": "aClassInModule",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 688,
            "end": 697,
            "callee": {
              "type": "MemberExpression",
              "start": 692,
              "end": 695,
              "object": {
                "type": "Identifier",
                "start": 692,
                "end": 693,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 694,
                "end": 695,
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
      "start": 699,
      "end": 728,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 703,
          "end": 727,
          "id": {
            "type": "Identifier",
            "start": 703,
            "end": 720,
            "name": "aFunctionInModule",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 723,
            "end": 727,
            "object": {
              "type": "Identifier",
              "start": 723,
              "end": 724,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 725,
              "end": 727,
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
      "type": "VariableDeclaration",
      "start": 783,
      "end": 789,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 787,
          "end": 788,
          "id": {
            "type": "Identifier",
            "start": 787,
            "end": 788,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
