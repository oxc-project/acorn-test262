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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 576,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 15,
            "end": 111,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 25,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 25,
              "end": 111,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 111,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 81,
                    "end": 93,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 85,
                        "end": 92,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 85,
                          "end": 87,
                          "decorators": [],
                          "name": "_i",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 90,
                          "end": 92,
                          "raw": "10",
                          "value": 10
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "argument": {
                    "type": "Identifier",
                    "start": 41,
                    "end": 55,
                    "decorators": [],
                    "name": "restParameters",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 116,
            "end": 198,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 133,
              "decorators": [],
              "name": "fooNoError",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 133,
              "end": 198,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 198,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 168,
                    "end": 180,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 172,
                        "end": 179,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 172,
                          "end": 174,
                          "decorators": [],
                          "name": "_i",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 177,
                          "end": 179,
                          "raw": "10",
                          "value": 10
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 203,
            "end": 234,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 210,
              "end": 212,
              "decorators": [],
              "name": "f4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 212,
              "end": 234,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                  "argument": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 232,
                    "decorators": [],
                    "name": "rest",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 262,
            "end": 293,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 271,
              "decorators": [],
              "name": "f4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 271,
              "end": 293,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                  "argument": {
                    "type": "Identifier",
                    "start": 287,
                    "end": 291,
                    "decorators": [],
                    "name": "rest",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 321,
            "end": 398,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 328,
              "end": 330,
              "decorators": [],
              "name": "f4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 330,
              "end": 398,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 349,
                "end": 398,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 368,
                    "end": 380,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 372,
                        "end": 379,
                        "definite": false,
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
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                  "argument": {
                    "type": "Identifier",
                    "start": 343,
                    "end": 347,
                    "decorators": [],
                    "name": "rest",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 404,
            "end": 433,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 411,
              "end": 420,
              "decorators": [],
              "name": "f4NoError",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 420,
              "end": 433,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 450,
            "end": 479,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 457,
              "end": 466,
              "decorators": [],
              "name": "f4NoError",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 466,
              "end": 479,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 496,
            "end": 574,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 503,
              "end": 512,
              "decorators": [],
              "name": "f4NoError",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 512,
              "end": 574,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 522,
                "end": 574,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 544,
                    "end": 556,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 548,
                        "end": 555,
                        "definite": false,
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
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 8,
        "decorators": [],
        "name": "c1",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 578,
      "end": 929,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 595,
        "end": 929,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 601,
            "end": 643,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 608,
              "end": 611,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 611,
              "end": 643,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                  "argument": {
                    "type": "Identifier",
                    "start": 627,
                    "end": 641,
                    "decorators": [],
                    "name": "restParameters",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 674,
            "end": 704,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 681,
              "end": 691,
              "decorators": [],
              "name": "fooNoError",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 691,
              "end": 704,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 722,
            "end": 753,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 729,
              "end": 731,
              "decorators": [],
              "name": "f4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 731,
              "end": 753,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                  "argument": {
                    "type": "Identifier",
                    "start": 747,
                    "end": 751,
                    "decorators": [],
                    "name": "rest",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 781,
            "end": 812,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 788,
              "end": 790,
              "decorators": [],
              "name": "f4",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 790,
              "end": 812,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
                  "argument": {
                    "type": "Identifier",
                    "start": 806,
                    "end": 810,
                    "decorators": [],
                    "name": "rest",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 840,
            "end": 869,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 847,
              "end": 856,
              "decorators": [],
              "name": "f4NoError",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 856,
              "end": 869,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 886,
            "end": 915,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 893,
              "end": 902,
              "decorators": [],
              "name": "f4NoError",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 902,
              "end": 915,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 594,
        "decorators": [],
        "name": "c2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 931,
      "end": 1083,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 940,
        "end": 1083,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 946,
            "end": 1016,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 953,
              "end": 956,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 956,
              "end": 1016,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 976,
                "end": 1016,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 986,
                    "end": 998,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 990,
                        "end": 997,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 990,
                          "end": 992,
                          "decorators": [],
                          "name": "_i",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 995,
                          "end": 997,
                          "raw": "10",
                          "value": 10
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 957,
                  "end": 974,
                  "argument": {
                    "type": "Identifier",
                    "start": 960,
                    "end": 974,
                    "decorators": [],
                    "name": "restParameters",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1021,
            "end": 1081,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1028,
              "end": 1038,
              "decorators": [],
              "name": "fooNoError",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1038,
              "end": 1081,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1041,
                "end": 1081,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1051,
                    "end": 1063,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1055,
                        "end": 1062,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1055,
                          "end": 1057,
                          "decorators": [],
                          "name": "_i",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1060,
                          "end": 1062,
                          "raw": "10",
                          "value": 10
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
        "start": 937,
        "end": 939,
        "decorators": [],
        "name": "c3",
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
