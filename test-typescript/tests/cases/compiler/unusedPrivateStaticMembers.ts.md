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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 95,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 18,
            "end": 40,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 33,
              "end": 35,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 35,
              "end": 40,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 40,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 45,
            "end": 93,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 63,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 93,
              "async": false,
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
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 76,
                        "end": 84,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 76,
                          "end": 81,
                          "decorators": [],
                          "name": "Test1",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 82,
                          "end": 84,
                          "decorators": [],
                          "name": "m1",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Test1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 97,
      "end": 189,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 109,
        "end": 189,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 136,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 132,
              "decorators": [],
              "name": "p1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 135,
              "end": 136,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "MethodDefinition",
            "start": 141,
            "end": 187,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 155,
              "end": 159,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 159,
              "end": 187,
              "async": false,
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
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 177,
                        "decorators": [],
                        "name": "Test2",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 178,
                        "end": 180,
                        "decorators": [],
                        "name": "p1",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 108,
        "decorators": [],
        "name": "Test2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 191,
      "end": 260,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 203,
        "end": 260,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 209,
            "end": 231,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 226,
              "decorators": [],
              "name": "p1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 229,
              "end": 230,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "MethodDefinition",
            "start": 236,
            "end": 258,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 251,
              "end": 253,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 253,
              "end": 258,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 256,
                "end": 258,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 197,
        "end": 202,
        "decorators": [],
        "name": "Test3",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 262,
      "end": 487,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 274,
        "end": 487,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 280,
            "end": 378,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 295,
              "end": 297,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 297,
              "end": 378,
              "async": false,
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
                      "alternate": {
                        "type": "BinaryExpression",
                        "start": 351,
                        "end": 370,
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "start": 351,
                          "end": 352,
                          "decorators": [],
                          "name": "n",
                          "optional": false
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 355,
                          "end": 370,
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "start": 364,
                              "end": 369,
                              "operator": "-",
                              "left": {
                                "type": "Identifier",
                                "start": 364,
                                "end": 365,
                                "decorators": [],
                                "name": "n",
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 368,
                                "end": 369,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 355,
                            "end": 363,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 355,
                              "end": 360,
                              "decorators": [],
                              "name": "Test4",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 361,
                              "end": 363,
                              "decorators": [],
                              "name": "m1",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      },
                      "consequent": {
                        "type": "Literal",
                        "start": 346,
                        "end": 347,
                        "raw": "1",
                        "value": 1
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 335,
                        "end": 342,
                        "operator": "===",
                        "left": {
                          "type": "Identifier",
                          "start": 335,
                          "end": 336,
                          "decorators": [],
                          "name": "n",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 341,
                          "end": 342,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 298,
                  "end": 307,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 299,
                    "end": 307,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 301,
                      "end": 307
                    }
                  }
                }
              ],
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
            }
          },
          {
            "type": "MethodDefinition",
            "start": 384,
            "end": 485,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 399,
              "end": 401,
              "decorators": [],
              "name": "m2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 401,
              "end": 485,
              "async": false,
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
                      "alternate": {
                        "type": "BinaryExpression",
                        "start": 455,
                        "end": 477,
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "start": 455,
                          "end": 456,
                          "decorators": [],
                          "name": "n",
                          "optional": false
                        },
                        "right": {
                          "type": "CallExpression",
                          "start": 459,
                          "end": 477,
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "start": 471,
                              "end": 476,
                              "operator": "-",
                              "left": {
                                "type": "Identifier",
                                "start": 471,
                                "end": 472,
                                "decorators": [],
                                "name": "n",
                                "optional": false
                              },
                              "right": {
                                "type": "Literal",
                                "start": 475,
                                "end": 476,
                                "raw": "1",
                                "value": 1
                              }
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 459,
                            "end": 470,
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "start": 459,
                              "end": 464,
                              "decorators": [],
                              "name": "Test4",
                              "optional": false
                            },
                            "optional": false,
                            "property": {
                              "type": "Literal",
                              "start": 465,
                              "end": 469,
                              "raw": "\"m2\"",
                              "value": "m2"
                            }
                          },
                          "optional": false
                        }
                      },
                      "consequent": {
                        "type": "Literal",
                        "start": 450,
                        "end": 451,
                        "raw": "1",
                        "value": 1
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 439,
                        "end": 446,
                        "operator": "===",
                        "left": {
                          "type": "Identifier",
                          "start": 439,
                          "end": 440,
                          "decorators": [],
                          "name": "n",
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 445,
                          "end": 446,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 402,
                  "end": 411,
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 403,
                    "end": 411,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 405,
                      "end": 411
                    }
                  }
                }
              ],
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
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 268,
        "end": 273,
        "decorators": [],
        "name": "Test4",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 489,
      "end": 587,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 501,
        "end": 587,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 507,
            "end": 529,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 522,
              "end": 524,
              "decorators": [],
              "name": "m1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 524,
              "end": 529,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 527,
                "end": 529,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 534,
            "end": 585,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 548,
              "end": 552,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 552,
              "end": 585,
              "async": false,
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
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 565,
                        "end": 576,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 565,
                          "end": 570,
                          "decorators": [],
                          "name": "Test5",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 571,
                          "end": 575,
                          "raw": "\"m1\"",
                          "value": "m1"
                        }
                      },
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 495,
        "end": 500,
        "decorators": [],
        "name": "Test5",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 589,
      "end": 685,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 601,
        "end": 685,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 607,
            "end": 629,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 622,
              "end": 624,
              "decorators": [],
              "name": "p1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "Literal",
              "start": 627,
              "end": 628,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "MethodDefinition",
            "start": 634,
            "end": 683,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 648,
              "end": 652,
              "decorators": [],
              "name": "test",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 652,
              "end": 683,
              "async": false,
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
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "start": 665,
                        "end": 670,
                        "decorators": [],
                        "name": "Test6",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 671,
                        "end": 675,
                        "raw": "\"p1\"",
                        "value": "p1"
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 595,
        "end": 600,
        "decorators": [],
        "name": "Test6",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
