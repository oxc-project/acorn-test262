__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 948,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 467,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 17,
        "decorators": [],
        "name": "NonGeneric",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 467,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 24,
            "end": 74,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 32,
              "end": 74,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 42,
                  "end": 68,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 53,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 53,
                    "end": 68,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 54,
                        "end": 63,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 55,
                          "end": 63,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 57,
                            "end": 63
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 65,
                      "end": 68,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 80,
            "end": 96,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 84,
                "end": 95,
                "id": {
                  "type": "Identifier",
                  "start": 84,
                  "end": 85,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 88,
                  "end": 95,
                  "callee": {
                    "type": "Identifier",
                    "start": 92,
                    "end": 93,
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
            "start": 110,
            "end": 129,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 114,
                "end": 128,
                "id": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 116,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 119,
                  "end": 128,
                  "callee": {
                    "type": "Identifier",
                    "start": 123,
                    "end": 124,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 125,
                      "end": 127,
                      "value": "",
                      "raw": "''"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 141,
            "end": 253,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 147,
              "end": 149,
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 150,
              "end": 253,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 160,
                  "end": 183,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 171,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 171,
                    "end": 183,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 172,
                        "end": 181,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 173,
                          "end": 181,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 175,
                            "end": 181
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 192,
                  "end": 215,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 192,
                    "end": 203,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 203,
                    "end": 215,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 204,
                        "end": 213,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 205,
                          "end": 213,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 207,
                            "end": 213
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 224,
                  "end": 247,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 235,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 235,
                    "end": 247,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 236,
                        "end": 242,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 237,
                          "end": 242,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 239,
                            "end": 242
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 244,
                      "end": 247,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 259,
            "end": 277,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 263,
                "end": 276,
                "id": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 265,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 268,
                  "end": 276,
                  "callee": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 274,
                    "decorators": [],
                    "name": "C2",
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
            "start": 291,
            "end": 311,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 295,
                "end": 310,
                "id": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 297,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 300,
                  "end": 310,
                  "callee": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 306,
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 307,
                      "end": 309,
                      "value": "",
                      "raw": "''"
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
            "start": 322,
            "end": 341,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 326,
                "end": 340,
                "id": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 328,
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 331,
                  "end": 340,
                  "callee": {
                    "type": "Identifier",
                    "start": 335,
                    "end": 337,
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 338,
                      "end": 339,
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 353,
            "end": 375,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 359,
              "end": 360,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 369,
              "end": 371,
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 372,
              "end": 375,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 381,
            "end": 397,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 385,
                "end": 396,
                "id": {
                  "type": "Identifier",
                  "start": 385,
                  "end": 386,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 389,
                  "end": 396,
                  "callee": {
                    "type": "Identifier",
                    "start": 393,
                    "end": 394,
                    "decorators": [],
                    "name": "D",
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
            "start": 411,
            "end": 429,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 415,
                "end": 428,
                "id": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 417,
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 420,
                  "end": 428,
                  "callee": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 425,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 426,
                      "end": 427,
                      "value": 1,
                      "raw": "1"
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
            "start": 440,
            "end": 459,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 444,
                "end": 458,
                "id": {
                  "type": "Identifier",
                  "start": 444,
                  "end": 446,
                  "decorators": [],
                  "name": "d3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 449,
                  "end": 458,
                  "callee": {
                    "type": "Identifier",
                    "start": 453,
                    "end": 454,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 455,
                      "end": 457,
                      "value": "",
                      "raw": "''"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 469,
      "end": 948,
      "id": {
        "type": "Identifier",
        "start": 476,
        "end": 484,
        "decorators": [],
        "name": "Generics",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 485,
        "end": 948,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 491,
            "end": 539,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 497,
              "end": 498,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 498,
              "end": 501,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 499,
                  "end": 500,
                  "name": {
                    "type": "Identifier",
                    "start": 499,
                    "end": 500,
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
              "start": 502,
              "end": 539,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 512,
                  "end": 533,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 512,
                    "end": 523,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 523,
                    "end": 533,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 524,
                        "end": 528,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 525,
                          "end": 528,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 527,
                            "end": 528,
                            "typeName": {
                              "type": "Identifier",
                              "start": 527,
                              "end": 528,
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
                      "type": "BlockStatement",
                      "start": 530,
                      "end": 533,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 545,
            "end": 561,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 549,
                "end": 560,
                "id": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 550,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 553,
                  "end": 560,
                  "callee": {
                    "type": "Identifier",
                    "start": 557,
                    "end": 558,
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
            "start": 575,
            "end": 594,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 579,
                "end": 593,
                "id": {
                  "type": "Identifier",
                  "start": 579,
                  "end": 581,
                  "decorators": [],
                  "name": "c2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 584,
                  "end": 593,
                  "callee": {
                    "type": "Identifier",
                    "start": 588,
                    "end": 589,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 590,
                      "end": 592,
                      "value": "",
                      "raw": "''"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 606,
            "end": 719,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 612,
              "end": 614,
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 614,
              "end": 619,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 615,
                  "end": 616,
                  "name": {
                    "type": "Identifier",
                    "start": 615,
                    "end": 616,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 617,
                  "end": 618,
                  "name": {
                    "type": "Identifier",
                    "start": 617,
                    "end": 618,
                    "decorators": [],
                    "name": "U",
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
              "start": 620,
              "end": 719,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 630,
                  "end": 648,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 630,
                    "end": 641,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 641,
                    "end": 648,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 642,
                        "end": 646,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 643,
                          "end": 646,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 645,
                            "end": 646,
                            "typeName": {
                              "type": "Identifier",
                              "start": 645,
                              "end": 646,
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
                    "body": null,
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 657,
                  "end": 681,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 657,
                    "end": 668,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "TSEmptyBodyFunctionExpression",
                    "start": 668,
                    "end": 681,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 669,
                        "end": 673,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 670,
                          "end": 673,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 672,
                            "end": 673,
                            "typeName": {
                              "type": "Identifier",
                              "start": 672,
                              "end": 673,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 675,
                        "end": 679,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 676,
                          "end": 679,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 678,
                            "end": 679,
                            "typeName": {
                              "type": "Identifier",
                              "start": 678,
                              "end": 679,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": null,
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 690,
                  "end": 713,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 690,
                    "end": 701,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 701,
                    "end": 713,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 702,
                        "end": 708,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 703,
                          "end": 708,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 705,
                            "end": 708
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 710,
                      "end": 713,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 725,
            "end": 743,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 729,
                "end": 742,
                "id": {
                  "type": "Identifier",
                  "start": 729,
                  "end": 731,
                  "decorators": [],
                  "name": "c3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 734,
                  "end": 742,
                  "callee": {
                    "type": "Identifier",
                    "start": 738,
                    "end": 740,
                    "decorators": [],
                    "name": "C2",
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
            "start": 757,
            "end": 777,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 761,
                "end": 776,
                "id": {
                  "type": "Identifier",
                  "start": 761,
                  "end": 763,
                  "decorators": [],
                  "name": "c4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 766,
                  "end": 776,
                  "callee": {
                    "type": "Identifier",
                    "start": 770,
                    "end": 772,
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 773,
                      "end": 775,
                      "value": "",
                      "raw": "''"
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
            "start": 788,
            "end": 810,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 792,
                "end": 809,
                "id": {
                  "type": "Identifier",
                  "start": 792,
                  "end": 794,
                  "decorators": [],
                  "name": "c5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 797,
                  "end": 809,
                  "callee": {
                    "type": "Identifier",
                    "start": 801,
                    "end": 803,
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 804,
                      "end": 805,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 807,
                      "end": 808,
                      "value": 2,
                      "raw": "2"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 822,
            "end": 856,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 828,
              "end": 829,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 829,
              "end": 835,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 830,
                  "end": 831,
                  "name": {
                    "type": "Identifier",
                    "start": 830,
                    "end": 831,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 833,
                  "end": 834,
                  "name": {
                    "type": "Identifier",
                    "start": 833,
                    "end": 834,
                    "decorators": [],
                    "name": "U",
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
            "superClass": {
              "type": "Identifier",
              "start": 844,
              "end": 846,
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null
            },
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 846,
              "end": 852,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 847,
                  "end": 848,
                  "typeName": {
                    "type": "Identifier",
                    "start": 847,
                    "end": 848,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 850,
                  "end": 851,
                  "typeName": {
                    "type": "Identifier",
                    "start": 850,
                    "end": 851,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 853,
              "end": 856,
              "body": []
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 862,
            "end": 878,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 866,
                "end": 877,
                "id": {
                  "type": "Identifier",
                  "start": 866,
                  "end": 867,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 870,
                  "end": 877,
                  "callee": {
                    "type": "Identifier",
                    "start": 874,
                    "end": 875,
                    "decorators": [],
                    "name": "D",
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
            "start": 892,
            "end": 910,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 896,
                "end": 909,
                "id": {
                  "type": "Identifier",
                  "start": 896,
                  "end": 898,
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 901,
                  "end": 909,
                  "callee": {
                    "type": "Identifier",
                    "start": 905,
                    "end": 906,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 907,
                      "end": 908,
                      "value": 1,
                      "raw": "1"
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
            "start": 921,
            "end": 940,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 925,
                "end": 939,
                "id": {
                  "type": "Identifier",
                  "start": 925,
                  "end": 927,
                  "decorators": [],
                  "name": "d3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 930,
                  "end": 939,
                  "callee": {
                    "type": "Identifier",
                    "start": 934,
                    "end": 935,
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 936,
                      "end": 938,
                      "value": "",
                      "raw": "''"
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
