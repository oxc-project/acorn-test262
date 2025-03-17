__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 686,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 95,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "name": "Test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 95,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 40,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 35,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 40,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 40,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 93,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 63,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 93,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 93,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 76,
                    "end": 87,
                    "expression": {
                      "type": "CallExpression",
                      "start": 76,
                      "end": 86,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 76,
                        "end": 84,
                        "object": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 81,
                          "name": "Test1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 82,
                          "end": 84,
                          "name": "m1",
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
                    "directive": null
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
            "accessibility": "public"
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
      "start": 97,
      "end": 189,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 108,
        "name": "Test2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 189,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 136,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 132,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 135,
              "end": 136,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 141,
            "end": 187,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 159,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 159,
              "end": 187,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 162,
                "end": 187,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 172,
                    "end": 181,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 172,
                      "end": 180,
                      "object": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 177,
                        "name": "Test2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 180,
                        "name": "p1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "directive": null
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
            "accessibility": "public"
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
      "start": 191,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 202,
        "name": "Test3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 260,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 209,
            "end": 231,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 226,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 229,
              "end": 230,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 236,
            "end": 258,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 251,
              "end": 253,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 253,
              "end": 258,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 256,
                "end": 258,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
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
      "start": 262,
      "end": 487,
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 273,
        "name": "Test4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 274,
        "end": 487,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 280,
            "end": 378,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 297,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 297,
              "end": 378,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 298,
                  "end": 307,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 299,
                    "end": 307,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 301,
                      "end": 307
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 317,
                "end": 378,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 327,
                    "end": 372,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 334,
                      "end": 371,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 335,
                        "end": 342,
                        "left": {
                          "type": "Identifier",
                          "start": 335,
                          "end": 336,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 341,
                          "end": 342,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "consequent": {
                        "type": "Literal",
                        "start": 346,
                        "end": 347,
                        "value": 1,
                        "raw": "1"
                      },
                      "alternate": {
                        "type": "BinaryExpression",
                        "start": 351,
                        "end": 370,
                        "left": {
                          "type": "Identifier",
                          "start": 351,
                          "end": 352,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "*",
                        "right": {
                          "type": "CallExpression",
                          "start": 355,
                          "end": 370,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 355,
                            "end": 363,
                            "object": {
                              "type": "Identifier",
                              "start": 355,
                              "end": 360,
                              "name": "Test4",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 361,
                              "end": 363,
                              "name": "m1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "start": 364,
                              "end": 369,
                              "left": {
                                "type": "Identifier",
                                "start": 364,
                                "end": 365,
                                "name": "n",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "-",
                              "right": {
                                "type": "Literal",
                                "start": 368,
                                "end": 369,
                                "value": 1,
                                "raw": "1"
                              }
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 308,
                "end": 316,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 310,
                  "end": 316
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 384,
            "end": 485,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 399,
              "end": 401,
              "name": "m2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 401,
              "end": 485,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 402,
                  "end": 411,
                  "name": "n",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 403,
                    "end": 411,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 405,
                      "end": 411
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 421,
                "end": 485,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 431,
                    "end": 479,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 438,
                      "end": 478,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 439,
                        "end": 446,
                        "left": {
                          "type": "Identifier",
                          "start": 439,
                          "end": 440,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 445,
                          "end": 446,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "consequent": {
                        "type": "Literal",
                        "start": 450,
                        "end": 451,
                        "value": 1,
                        "raw": "1"
                      },
                      "alternate": {
                        "type": "BinaryExpression",
                        "start": 455,
                        "end": 477,
                        "left": {
                          "type": "Identifier",
                          "start": 455,
                          "end": 456,
                          "name": "n",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "*",
                        "right": {
                          "type": "CallExpression",
                          "start": 459,
                          "end": 477,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 459,
                            "end": 470,
                            "object": {
                              "type": "Identifier",
                              "start": 459,
                              "end": 464,
                              "name": "Test4",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Literal",
                              "start": 465,
                              "end": 469,
                              "value": "m2",
                              "raw": "\"m2\""
                            },
                            "computed": true,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "start": 471,
                              "end": 476,
                              "left": {
                                "type": "Identifier",
                                "start": 471,
                                "end": 472,
                                "name": "n",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "-",
                              "right": {
                                "type": "Literal",
                                "start": 475,
                                "end": 476,
                                "value": 1,
                                "raw": "1"
                              }
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 412,
                "end": 420,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 414,
                  "end": 420
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
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
      "start": 489,
      "end": 587,
      "id": {
        "type": "Identifier",
        "start": 495,
        "end": 500,
        "name": "Test5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 501,
        "end": 587,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 507,
            "end": 529,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 522,
              "end": 524,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 524,
              "end": 529,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 527,
                "end": 529,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 534,
            "end": 585,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 548,
              "end": 552,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 552,
              "end": 585,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 555,
                "end": 585,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 565,
                    "end": 579,
                    "expression": {
                      "type": "CallExpression",
                      "start": 565,
                      "end": 578,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 565,
                        "end": 576,
                        "object": {
                          "type": "Identifier",
                          "start": 565,
                          "end": 570,
                          "name": "Test5",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 571,
                          "end": 575,
                          "value": "m1",
                          "raw": "\"m1\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
            "accessibility": "public"
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
      "start": 589,
      "end": 685,
      "id": {
        "type": "Identifier",
        "start": 595,
        "end": 600,
        "name": "Test6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 601,
        "end": 685,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 607,
            "end": 629,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 622,
              "end": 624,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 627,
              "end": 628,
              "value": 0,
              "raw": "0"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 634,
            "end": 683,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 648,
              "end": 652,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 652,
              "end": 683,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 655,
                "end": 683,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 665,
                    "end": 677,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 665,
                      "end": 676,
                      "object": {
                        "type": "Identifier",
                        "start": 665,
                        "end": 670,
                        "name": "Test6",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 671,
                        "end": 675,
                        "value": "p1",
                        "raw": "\"p1\""
                      },
                      "computed": true,
                      "optional": false
                    },
                    "directive": null
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
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
