__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 929,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 469,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 17,
        "name": "NonGeneric",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 18,
        "end": 469,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 24,
            "end": 254,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 32,
              "end": 254,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 42,
                  "end": 63,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 44,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 44,
                    "end": 63,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 47,
                      "end": 63,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 49,
                          "end": 61,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 56,
                            "end": 60
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 72,
                  "end": 100,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 84,
                    "end": 100,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 87,
                      "end": 100,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 89,
                          "end": 98,
                          "argument": {
                            "type": "Literal",
                            "start": 96,
                            "end": 97,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 109,
                  "end": 128,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 121,
                    "end": 128,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 122,
                        "end": 123,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 125,
                      "end": 128,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 137,
                  "end": 189,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 148,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 148,
                    "end": 189,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 149,
                        "end": 165,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 165,
                          "name": "a",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 157,
                            "end": 165,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 159,
                              "end": 165
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 167,
                        "end": 184,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 175,
                          "end": 184,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 176,
                            "end": 184,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 178,
                              "end": 184
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 186,
                      "end": 189,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 198,
                  "end": 217,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 208,
                    "name": "foo",
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
                    "start": 208,
                    "end": 216,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 210,
                      "end": 216
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
            "type": "TSModuleDeclaration",
            "start": 260,
            "end": 336,
            "id": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 269,
              "end": 336,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 279,
                  "end": 299,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 286,
                    "end": 299,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 290,
                        "end": 298,
                        "id": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 293,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 296,
                          "end": 298,
                          "value": "",
                          "raw": "''"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "start": 342,
            "end": 362,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 346,
                "end": 361,
                "id": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 347,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 350,
                  "end": 361,
                  "callee": {
                    "type": "Identifier",
                    "start": 354,
                    "end": 355,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 356,
                      "end": 357,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 359,
                      "end": 360,
                      "value": 2,
                      "raw": "2"
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
            "start": 367,
            "end": 382,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 371,
                "end": 381,
                "id": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 372,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 375,
                  "end": 381,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 375,
                    "end": 379,
                    "object": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 376,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 379,
                      "name": "fn",
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
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 387,
            "end": 402,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 391,
                "end": 401,
                "id": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 393,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 396,
                  "end": 401,
                  "object": {
                    "type": "Identifier",
                    "start": 396,
                    "end": 397,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 401,
                    "name": "foo",
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
            "start": 416,
            "end": 431,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 420,
                "end": 430,
                "id": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 422,
                  "name": "r5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 425,
                  "end": 430,
                  "object": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 426,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 430,
                    "name": "bar",
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
            "start": 445,
            "end": 458,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 449,
                "end": 457,
                "id": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 451,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 454,
                  "end": 457,
                  "object": {
                    "type": "Identifier",
                    "start": 454,
                    "end": 455,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 456,
                    "end": 457,
                    "name": "x",
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 471,
      "end": 929,
      "id": {
        "type": "Identifier",
        "start": 478,
        "end": 485,
        "name": "Generic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 486,
        "end": 929,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 492,
            "end": 713,
            "id": {
              "type": "Identifier",
              "start": 498,
              "end": 499,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 506,
              "end": 713,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 516,
                  "end": 537,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 516,
                    "end": 518,
                    "name": "fn",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "method",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 518,
                    "end": 537,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 521,
                      "end": 537,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 523,
                          "end": 535,
                          "argument": {
                            "type": "ThisExpression",
                            "start": 530,
                            "end": 534
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 546,
                  "end": 574,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 557,
                    "end": 558,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "get",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 558,
                    "end": 574,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [],
                    "body": {
                      "type": "BlockStatement",
                      "start": 561,
                      "end": 574,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 563,
                          "end": 572,
                          "argument": {
                            "type": "Literal",
                            "start": 570,
                            "end": 571,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 583,
                  "end": 602,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 595,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "set",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 595,
                    "end": 602,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 596,
                        "end": 597,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 599,
                      "end": 602,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 611,
                  "end": 653,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 611,
                    "end": 622,
                    "name": "constructor",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "constructor",
                  "value": {
                    "type": "FunctionExpression",
                    "start": 622,
                    "end": 653,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "TSParameterProperty",
                        "start": 623,
                        "end": 634,
                        "accessibility": "public",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 630,
                          "end": 634,
                          "name": "a",
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
                        "readonly": false,
                        "static": false
                      },
                      {
                        "type": "TSParameterProperty",
                        "start": 636,
                        "end": 648,
                        "accessibility": "private",
                        "decorators": [],
                        "override": false,
                        "parameter": {
                          "type": "Identifier",
                          "start": 644,
                          "end": 648,
                          "name": "b",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 645,
                            "end": 648,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 647,
                              "end": 648,
                              "typeName": {
                                "type": "Identifier",
                                "start": 647,
                                "end": 648,
                                "name": "U",
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
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 650,
                      "end": 653,
                      "body": []
                    },
                    "declare": false,
                    "typeParameters": null,
                    "returnType": null
                  },
                  "decorators": [],
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 662,
                  "end": 676,
                  "static": true,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 669,
                    "end": 672,
                    "name": "foo",
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
                    "start": 672,
                    "end": 675,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 674,
                      "end": 675,
                      "typeName": {
                        "type": "Identifier",
                        "start": 674,
                        "end": 675,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 499,
              "end": 505,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 500,
                  "end": 501,
                  "name": {
                    "type": "Identifier",
                    "start": 500,
                    "end": 501,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 503,
                  "end": 504,
                  "name": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 504,
                    "name": "U",
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
            "type": "TSModuleDeclaration",
            "start": 719,
            "end": 795,
            "id": {
              "type": "Identifier",
              "start": 726,
              "end": 727,
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 728,
              "end": 795,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 738,
                  "end": 758,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 745,
                    "end": 758,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 749,
                        "end": 757,
                        "id": {
                          "type": "Identifier",
                          "start": 749,
                          "end": 752,
                          "name": "bar",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 755,
                          "end": 757,
                          "value": "",
                          "raw": "''"
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
            "start": 801,
            "end": 822,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 805,
                "end": 821,
                "id": {
                  "type": "Identifier",
                  "start": 805,
                  "end": 806,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "NewExpression",
                  "start": 809,
                  "end": 821,
                  "callee": {
                    "type": "Identifier",
                    "start": 813,
                    "end": 814,
                    "name": "C",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 815,
                      "end": 816,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 818,
                      "end": 820,
                      "value": "",
                      "raw": "''"
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
            "start": 827,
            "end": 842,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 831,
                "end": 841,
                "id": {
                  "type": "Identifier",
                  "start": 831,
                  "end": 832,
                  "name": "r",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 835,
                  "end": 841,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 835,
                    "end": 839,
                    "object": {
                      "type": "Identifier",
                      "start": 835,
                      "end": 836,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 837,
                      "end": 839,
                      "name": "fn",
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
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 847,
            "end": 862,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 851,
                "end": 861,
                "id": {
                  "type": "Identifier",
                  "start": 851,
                  "end": 853,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 856,
                  "end": 861,
                  "object": {
                    "type": "Identifier",
                    "start": 856,
                    "end": 857,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 858,
                    "end": 861,
                    "name": "foo",
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
            "start": 876,
            "end": 891,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 880,
                "end": 890,
                "id": {
                  "type": "Identifier",
                  "start": 880,
                  "end": 882,
                  "name": "r5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 885,
                  "end": 890,
                  "object": {
                    "type": "Identifier",
                    "start": 885,
                    "end": 886,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 887,
                    "end": 890,
                    "name": "bar",
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
            "start": 905,
            "end": 918,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 909,
                "end": 917,
                "id": {
                  "type": "Identifier",
                  "start": 909,
                  "end": 911,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 914,
                  "end": 917,
                  "object": {
                    "type": "Identifier",
                    "start": 914,
                    "end": 915,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 916,
                    "end": 917,
                    "name": "x",
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
