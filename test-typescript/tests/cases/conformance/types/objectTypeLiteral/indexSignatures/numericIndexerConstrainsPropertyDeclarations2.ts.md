__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 65,
  "end": 726,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 65,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 72,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 73,
        "end": 109,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 79,
            "end": 107,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 82,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 82,
              "end": 107,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 93,
                "end": 107,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 95,
                    "end": 105,
                    "argument": {
                      "type": "Literal",
                      "start": 102,
                      "end": 104,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 84,
                "end": 92,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 86,
                  "end": 92
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 111,
      "end": 165,
      "id": {
        "type": "Identifier",
        "start": 117,
        "end": 118,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 127,
        "end": 128,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 129,
        "end": 165,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 135,
            "end": 163,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 135,
              "end": 138,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 138,
              "end": 163,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 149,
                "end": 163,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 151,
                    "end": 161,
                    "argument": {
                      "type": "Literal",
                      "start": 158,
                      "end": 160,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 140,
                "end": 148,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 142,
                  "end": 148
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
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
      "start": 167,
      "end": 309,
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 176,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 177,
        "end": 309,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 183,
            "end": 198,
            "parameters": [
              {
                "type": "Identifier",
                "start": 184,
                "end": 193,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 185,
                  "end": 193,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 187,
                    "end": 193
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 197,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 196,
                "end": 197,
                "typeName": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 197,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 203,
            "end": 210,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 203,
              "end": 206,
              "value": 1,
              "raw": "1.0"
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
              "start": 206,
              "end": 209,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 208,
                "end": 209,
                "typeName": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 209,
                  "name": "A",
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
            "start": 221,
            "end": 228,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 221,
              "end": 224,
              "value": 2,
              "raw": "2.0"
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
              "start": 224,
              "end": 227,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 227,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "name": "B",
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
            "start": 239,
            "end": 247,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 239,
              "end": 244,
              "value": "2.5",
              "raw": "\"2.5\""
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
              "start": 244,
              "end": 247,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 246,
                "end": 247,
                "typeName": {
                  "type": "Identifier",
                  "start": 246,
                  "end": 247,
                  "name": "B",
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
            "start": 258,
            "end": 270,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 258,
              "end": 261,
              "value": 3,
              "raw": "3.0"
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
              "start": 261,
              "end": 269,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 263,
                "end": 269
              }
            },
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 284,
            "end": 298,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 284,
              "end": 289,
              "value": "4.0",
              "raw": "\"4.0\""
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
              "start": 289,
              "end": 297,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 291,
                "end": 297
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
      "type": "TSInterfaceDeclaration",
      "start": 311,
      "end": 458,
      "id": {
        "type": "Identifier",
        "start": 321,
        "end": 325,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 326,
        "end": 458,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 332,
            "end": 347,
            "parameters": [
              {
                "type": "Identifier",
                "start": 333,
                "end": 342,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 334,
                  "end": 342,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 336,
                    "end": 342
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 343,
              "end": 346,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 345,
                "end": 346,
                "typeName": {
                  "type": "Identifier",
                  "start": 345,
                  "end": 346,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          },
          {
            "type": "TSPropertySignature",
            "start": 352,
            "end": 359,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 352,
              "end": 355,
              "value": 1,
              "raw": "1.0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 355,
              "end": 358,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 357,
                "end": 358,
                "typeName": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 358,
                  "name": "A",
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
            "start": 370,
            "end": 377,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 370,
              "end": 373,
              "value": 2,
              "raw": "2.0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 373,
              "end": 376,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 375,
                "end": 376,
                "typeName": {
                  "type": "Identifier",
                  "start": 375,
                  "end": 376,
                  "name": "B",
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
            "start": 388,
            "end": 396,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 388,
              "end": 393,
              "value": "2.5",
              "raw": "\"2.5\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 393,
              "end": 396,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 395,
                "end": 396,
                "typeName": {
                  "type": "Identifier",
                  "start": 395,
                  "end": 396,
                  "name": "B",
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
            "start": 407,
            "end": 419,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 407,
              "end": 410,
              "value": 3,
              "raw": "3.0"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 410,
              "end": 418,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 412,
                "end": 418
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 433,
            "end": 447,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 433,
              "end": 438,
              "value": "4.0",
              "raw": "\"4.0\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 438,
              "end": 446,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 440,
                "end": 446
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
      "type": "VariableDeclaration",
      "start": 460,
      "end": 600,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 464,
          "end": 599,
          "id": {
            "type": "Identifier",
            "start": 464,
            "end": 599,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 465,
              "end": 599,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 467,
                "end": 599,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 473,
                    "end": 488,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 474,
                        "end": 483,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 475,
                          "end": 483,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 477,
                            "end": 483
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 484,
                      "end": 487,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 486,
                        "end": 487,
                        "typeName": {
                          "type": "Identifier",
                          "start": 486,
                          "end": 487,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 493,
                    "end": 500,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 493,
                      "end": 496,
                      "value": 1,
                      "raw": "1.0"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 496,
                      "end": 499,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 498,
                        "end": 499,
                        "typeName": {
                          "type": "Identifier",
                          "start": 498,
                          "end": 499,
                          "name": "A",
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
                    "start": 511,
                    "end": 518,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 511,
                      "end": 514,
                      "value": 2,
                      "raw": "2.0"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 514,
                      "end": 517,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 516,
                        "end": 517,
                        "typeName": {
                          "type": "Identifier",
                          "start": 516,
                          "end": 517,
                          "name": "B",
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
                    "start": 529,
                    "end": 537,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 529,
                      "end": 534,
                      "value": "2.5",
                      "raw": "\"2.5\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 534,
                      "end": 537,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 536,
                        "end": 537,
                        "typeName": {
                          "type": "Identifier",
                          "start": 536,
                          "end": 537,
                          "name": "B",
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
                    "start": 548,
                    "end": 560,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 548,
                      "end": 551,
                      "value": 3,
                      "raw": "3.0"
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 551,
                      "end": 559,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 553,
                        "end": 559
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 574,
                    "end": 588,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 574,
                      "end": 579,
                      "value": "4.0",
                      "raw": "\"4.0\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 579,
                      "end": 587,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 581,
                        "end": 587
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 611,
      "end": 726,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 615,
          "end": 726,
          "id": {
            "type": "Identifier",
            "start": 615,
            "end": 636,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 616,
              "end": 636,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 618,
                "end": 636,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 620,
                    "end": 634,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 621,
                        "end": 630,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 622,
                          "end": 630,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 624,
                            "end": 630
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 631,
                      "end": 634,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 633,
                        "end": 634,
                        "typeName": {
                          "type": "Identifier",
                          "start": 633,
                          "end": 634,
                          "name": "A",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 639,
            "end": 726,
            "properties": [
              {
                "type": "Property",
                "start": 645,
                "end": 657,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 645,
                  "end": 648,
                  "value": 1,
                  "raw": "1.0"
                },
                "value": {
                  "type": "NewExpression",
                  "start": 650,
                  "end": 657,
                  "callee": {
                    "type": "Identifier",
                    "start": 654,
                    "end": 655,
                    "name": "A",
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
                "start": 664,
                "end": 676,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 664,
                  "end": 667,
                  "value": 2,
                  "raw": "2.0"
                },
                "value": {
                  "type": "NewExpression",
                  "start": 669,
                  "end": 676,
                  "callee": {
                    "type": "Identifier",
                    "start": 673,
                    "end": 674,
                    "name": "B",
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
                "start": 683,
                "end": 697,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 683,
                  "end": 688,
                  "value": "2.5",
                  "raw": "\"2.5\""
                },
                "value": {
                  "type": "NewExpression",
                  "start": 690,
                  "end": 697,
                  "callee": {
                    "type": "Identifier",
                    "start": 694,
                    "end": 695,
                    "name": "B",
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
                "start": 703,
                "end": 709,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 703,
                  "end": 706,
                  "value": 3,
                  "raw": "3.0"
                },
                "value": {
                  "type": "Literal",
                  "start": 708,
                  "end": 709,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 715,
                "end": 724,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 715,
                  "end": 720,
                  "value": "4.0",
                  "raw": "\"4.0\""
                },
                "value": {
                  "type": "Literal",
                  "start": 722,
                  "end": 724,
                  "value": "",
                  "raw": "''"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
