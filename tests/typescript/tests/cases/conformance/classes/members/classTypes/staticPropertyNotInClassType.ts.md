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
        "decorators": [],
        "name": "NonGeneric",
        "optional": false,
        "typeAnnotation": null
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
              "end": 254,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 42,
                  "end": 63,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 42,
                    "end": 44,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 44,
                    "end": 63,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 72,
                  "end": 100,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 84,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 84,
                    "end": 100,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                    "expression": false
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 109,
                  "end": 128,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 120,
                    "end": 121,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 121,
                    "end": 128,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 122,
                        "end": 123,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 125,
                      "end": 128,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 137,
                  "end": 189,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 148,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 148,
                    "end": 189,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
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
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 157,
                            "end": 165,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 159,
                              "end": 165
                            }
                          }
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
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 176,
                            "end": 184,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 178,
                              "end": 184
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 186,
                      "end": 189,
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
                },
                {
                  "type": "PropertyDefinition",
                  "start": 198,
                  "end": 217,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 208,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "value": null,
                  "computed": false,
                  "static": true,
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
            "type": "TSModuleDeclaration",
            "start": 260,
            "end": 336,
            "id": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
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
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 290,
                        "end": 298,
                        "id": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 293,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
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
                    "declare": false
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
            "start": 342,
            "end": 362,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 346,
                "end": 361,
                "id": {
                  "type": "Identifier",
                  "start": 346,
                  "end": 347,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 350,
                  "end": 361,
                  "callee": {
                    "type": "Identifier",
                    "start": 354,
                    "end": 355,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
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
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 367,
            "end": 382,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 371,
                "end": 381,
                "id": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 372,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 377,
                      "end": 379,
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 387,
            "end": 402,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 391,
                "end": 401,
                "id": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 393,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 396,
                  "end": 401,
                  "object": {
                    "type": "Identifier",
                    "start": 396,
                    "end": 397,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 398,
                    "end": 401,
                    "decorators": [],
                    "name": "foo",
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
            "type": "VariableDeclaration",
            "start": 416,
            "end": 431,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 420,
                "end": 430,
                "id": {
                  "type": "Identifier",
                  "start": 420,
                  "end": 422,
                  "decorators": [],
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 425,
                  "end": 430,
                  "object": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 426,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 427,
                    "end": 430,
                    "decorators": [],
                    "name": "bar",
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
            "type": "VariableDeclaration",
            "start": 445,
            "end": 458,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 449,
                "end": 457,
                "id": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 451,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 454,
                  "end": 457,
                  "object": {
                    "type": "Identifier",
                    "start": 454,
                    "end": 455,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 456,
                    "end": 457,
                    "decorators": [],
                    "name": "x",
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
        "decorators": [],
        "name": "Generic",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 498,
              "end": 499,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "start": 503,
                  "end": 504,
                  "name": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 504,
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
              "start": 506,
              "end": 713,
              "body": [
                {
                  "type": "MethodDefinition",
                  "start": 516,
                  "end": 537,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 516,
                    "end": 518,
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 518,
                    "end": 537,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                    "expression": false
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 546,
                  "end": 574,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 557,
                    "end": 558,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 558,
                    "end": 574,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
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
                    "expression": false
                  },
                  "kind": "get",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 583,
                  "end": 602,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 595,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 595,
                    "end": 602,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 596,
                        "end": 597,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 599,
                      "end": 602,
                      "body": []
                    },
                    "expression": false
                  },
                  "kind": "set",
                  "computed": false,
                  "static": true,
                  "override": false,
                  "optional": false,
                  "accessibility": null
                },
                {
                  "type": "MethodDefinition",
                  "start": 611,
                  "end": 653,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 611,
                    "end": 622,
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "start": 622,
                    "end": 653,
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
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
                          "decorators": [],
                          "name": "a",
                          "optional": false,
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
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
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
                          "decorators": [],
                          "name": "b",
                          "optional": false,
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
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        "readonly": false,
                        "static": false
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 650,
                      "end": 653,
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
                },
                {
                  "type": "PropertyDefinition",
                  "start": 662,
                  "end": 676,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 669,
                    "end": 672,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                  "static": true,
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
            "type": "TSModuleDeclaration",
            "start": 719,
            "end": 795,
            "id": {
              "type": "Identifier",
              "start": 726,
              "end": 727,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
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
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 749,
                        "end": 757,
                        "id": {
                          "type": "Identifier",
                          "start": 749,
                          "end": 752,
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null
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
                    "declare": false
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
            "start": 801,
            "end": 822,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 805,
                "end": 821,
                "id": {
                  "type": "Identifier",
                  "start": 805,
                  "end": 806,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "NewExpression",
                  "start": 809,
                  "end": 821,
                  "callee": {
                    "type": "Identifier",
                    "start": 813,
                    "end": 814,
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
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
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 827,
            "end": 842,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 831,
                "end": 841,
                "id": {
                  "type": "Identifier",
                  "start": 831,
                  "end": 832,
                  "decorators": [],
                  "name": "r",
                  "optional": false,
                  "typeAnnotation": null
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
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 837,
                      "end": 839,
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 847,
            "end": 862,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 851,
                "end": 861,
                "id": {
                  "type": "Identifier",
                  "start": 851,
                  "end": 853,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 856,
                  "end": 861,
                  "object": {
                    "type": "Identifier",
                    "start": 856,
                    "end": 857,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 858,
                    "end": 861,
                    "decorators": [],
                    "name": "foo",
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
            "type": "VariableDeclaration",
            "start": 876,
            "end": 891,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 880,
                "end": 890,
                "id": {
                  "type": "Identifier",
                  "start": 880,
                  "end": 882,
                  "decorators": [],
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 885,
                  "end": 890,
                  "object": {
                    "type": "Identifier",
                    "start": 885,
                    "end": 886,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 887,
                    "end": 890,
                    "decorators": [],
                    "name": "bar",
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
            "type": "VariableDeclaration",
            "start": 905,
            "end": 918,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 909,
                "end": 917,
                "id": {
                  "type": "Identifier",
                  "start": 909,
                  "end": 911,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 914,
                  "end": 917,
                  "object": {
                    "type": "Identifier",
                    "start": 914,
                    "end": 915,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 916,
                    "end": 917,
                    "decorators": [],
                    "name": "x",
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
