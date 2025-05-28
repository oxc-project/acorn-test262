__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1083,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 576,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "c1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 576,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 111,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 111,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 36,
                  "decorators": [],
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 28,
                    "end": 36,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 30,
                      "end": 36
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 38,
                  "end": 55,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 55,
                    "decorators": [],
                    "name": "restParameters",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 111,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 81,
                    "end": 93,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 85,
                        "end": 92,
                        "id": {
                          "type": "Identifier",
                          "start": 85,
                          "end": 87,
                          "decorators": [],
                          "name": "_i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 90,
                          "end": 92,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 116,
            "end": 198,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 133,
              "decorators": [],
              "name": "fooNoError",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 133,
              "end": 198,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 134,
                  "end": 144,
                  "decorators": [],
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 136,
                    "end": 144,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 138,
                      "end": 144
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 198,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 168,
                    "end": 180,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 172,
                        "end": 179,
                        "id": {
                          "type": "Identifier",
                          "start": 172,
                          "end": 174,
                          "decorators": [],
                          "name": "_i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 177,
                          "end": 179,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 203,
            "end": 234,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 212,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 212,
              "end": 234,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 213,
                  "end": 223,
                  "decorators": [],
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 215,
                    "end": 223,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 217,
                      "end": 223
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 225,
                  "end": 232,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 232,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 262,
            "end": 293,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 271,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 271,
              "end": 293,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 272,
                  "end": 282,
                  "decorators": [],
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 274,
                    "end": 282,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 276,
                      "end": 282
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 284,
                  "end": 291,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 291,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 321,
            "end": 398,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 328,
              "end": 330,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 330,
              "end": 398,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 331,
                  "end": 338,
                  "decorators": [],
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 333,
                    "end": 338,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 335,
                      "end": 338
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 340,
                  "end": 347,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 343,
                    "end": 347,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 349,
                "end": 398,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 368,
                    "end": 380,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 372,
                        "end": 379,
                        "id": {
                          "type": "Identifier",
                          "start": 372,
                          "end": 379,
                          "decorators": [],
                          "name": "_i",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 374,
                            "end": 379,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 376,
                              "end": 379
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 404,
            "end": 433,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 411,
              "end": 420,
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 420,
              "end": 433,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 421,
                  "end": 431,
                  "decorators": [],
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 423,
                    "end": 431,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 425,
                      "end": 431
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 450,
            "end": 479,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 457,
              "end": 466,
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 466,
              "end": 479,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 467,
                  "end": 477,
                  "decorators": [],
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 469,
                    "end": 477,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 471,
                      "end": 477
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 496,
            "end": 574,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 503,
              "end": 512,
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 512,
              "end": 574,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 513,
                  "end": 520,
                  "decorators": [],
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 515,
                    "end": 520,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 517,
                      "end": 520
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 522,
                "end": 574,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 544,
                    "end": 556,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 548,
                        "end": 555,
                        "id": {
                          "type": "Identifier",
                          "start": 548,
                          "end": 555,
                          "decorators": [],
                          "name": "_i",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 550,
                            "end": 555,
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 552,
                              "end": 555
                            }
                          }
                        },
                        "init": null,
                        "definite": false
                      }
                    ],
                    "declare": false
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 578,
      "end": 929,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 594,
        "decorators": [],
        "name": "c2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 595,
        "end": 929,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 601,
            "end": 643,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 608,
              "end": 611,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 611,
              "end": 643,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 612,
                  "end": 622,
                  "decorators": [],
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 614,
                    "end": 622,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 616,
                      "end": 622
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 624,
                  "end": 641,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 641,
                    "decorators": [],
                    "name": "restParameters",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 674,
            "end": 704,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 681,
              "end": 691,
              "decorators": [],
              "name": "fooNoError",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 691,
              "end": 704,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 692,
                  "end": 702,
                  "decorators": [],
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 694,
                    "end": 702,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 696,
                      "end": 702
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 722,
            "end": 753,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 729,
              "end": 731,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 731,
              "end": 753,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 732,
                  "end": 742,
                  "decorators": [],
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 734,
                    "end": 742,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 736,
                      "end": 742
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 744,
                  "end": 751,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 747,
                    "end": 751,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 781,
            "end": 812,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 788,
              "end": 790,
              "decorators": [],
              "name": "f4",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 790,
              "end": 812,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 791,
                  "end": 801,
                  "decorators": [],
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 793,
                    "end": 801,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 795,
                      "end": 801
                    }
                  }
                },
                {
                  "type": "RestElement",
                  "start": 803,
                  "end": 810,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 806,
                    "end": 810,
                    "decorators": [],
                    "name": "rest",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 840,
            "end": 869,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 847,
              "end": 856,
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 856,
              "end": 869,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 857,
                  "end": 867,
                  "decorators": [],
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 859,
                    "end": 867,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 861,
                      "end": 867
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 886,
            "end": 915,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 893,
              "end": 902,
              "decorators": [],
              "name": "f4NoError",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 902,
              "end": 915,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 903,
                  "end": 913,
                  "decorators": [],
                  "name": "_i",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 905,
                    "end": 913,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 907,
                      "end": 913
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 931,
      "end": 1083,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 937,
        "end": 939,
        "decorators": [],
        "name": "c3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 940,
        "end": 1083,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 946,
            "end": 1016,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 953,
              "end": 956,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 956,
              "end": 1016,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 957,
                  "end": 974,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 960,
                    "end": 974,
                    "decorators": [],
                    "name": "restParameters",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "value": null
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 976,
                "end": 1016,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 986,
                    "end": 998,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 990,
                        "end": 997,
                        "id": {
                          "type": "Identifier",
                          "start": 990,
                          "end": 992,
                          "decorators": [],
                          "name": "_i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 995,
                          "end": 997,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 1021,
            "end": 1081,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1028,
              "end": 1038,
              "decorators": [],
              "name": "fooNoError",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1038,
              "end": 1081,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 1041,
                "end": 1081,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1051,
                    "end": 1063,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1055,
                        "end": 1062,
                        "id": {
                          "type": "Identifier",
                          "start": 1055,
                          "end": 1057,
                          "decorators": [],
                          "name": "_i",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1060,
                          "end": 1062,
                          "value": 10,
                          "raw": "10"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
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
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
