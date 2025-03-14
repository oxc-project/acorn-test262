__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 899,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 68,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 68,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 34,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 33,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 27,
                "end": 33
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 39,
            "end": 66,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 65,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 59,
                "end": 65
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 70,
      "end": 851,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 88,
        "end": 851,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 94,
            "end": 130,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 109,
              "end": 130,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 112,
                "end": 130,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 114,
                    "end": 128,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 121,
                      "end": 127,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 121,
                        "end": 125
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 126,
                        "end": 127,
                        "decorators": [],
                        "name": "x",
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
          },
          {
            "type": "MethodDefinition",
            "start": 135,
            "end": 174,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 150,
              "end": 174,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 154,
                "end": 174,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 156,
                    "end": 172,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 156,
                      "end": 171,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 156,
                        "end": 162,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 156,
                          "end": 160
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 161,
                          "end": 162,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 165,
                        "end": 171,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 165,
                          "end": 169
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 170,
                          "end": 171,
                          "decorators": [],
                          "name": "x",
                          "optional": false
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
                  "start": 151,
                  "end": 152,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 179,
            "end": 213,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 189,
              "end": 192,
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
              "start": 192,
              "end": 213,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 195,
                "end": 213,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 197,
                    "end": 211,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 204,
                      "end": 210,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 204,
                        "end": 208
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 209,
                        "end": 210,
                        "decorators": [],
                        "name": "x",
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
          },
          {
            "type": "MethodDefinition",
            "start": 219,
            "end": 262,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 241,
              "end": 262,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 244,
                "end": 262,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 246,
                    "end": 260,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 253,
                      "end": 259,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 253,
                        "end": 257
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 258,
                        "end": 259,
                        "decorators": [],
                        "name": "x",
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
          },
          {
            "type": "MethodDefinition",
            "start": 267,
            "end": 313,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 288,
              "end": 289,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 289,
              "end": 313,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 293,
                "end": 313,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 295,
                    "end": 311,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 295,
                      "end": 310,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 295,
                        "end": 301,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 295,
                          "end": 299
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 300,
                          "end": 301,
                          "decorators": [],
                          "name": "y",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 304,
                        "end": 310,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 304,
                          "end": 308
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 309,
                          "end": 310,
                          "decorators": [],
                          "name": "x",
                          "optional": false
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
                  "start": 290,
                  "end": 291,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 318,
            "end": 359,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 335,
              "end": 338,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 338,
              "end": 359,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 341,
                "end": 359,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 343,
                    "end": 357,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 350,
                      "end": 356,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 350,
                        "end": 354
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 355,
                        "end": 356,
                        "decorators": [],
                        "name": "x",
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
          },
          {
            "type": "MethodDefinition",
            "start": 364,
            "end": 402,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 381,
              "end": 384,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 384,
              "end": 402,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 387,
                "end": 402,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 389,
                    "end": 400,
                    "expression": {
                      "type": "CallExpression",
                      "start": 389,
                      "end": 399,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 389,
                        "end": 397,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 389,
                          "end": 393
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 394,
                          "end": 397,
                          "decorators": [],
                          "name": "foo",
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
          },
          {
            "type": "MethodDefinition",
            "start": 412,
            "end": 849,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 422,
              "end": 425,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 425,
              "end": 849,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 428,
                "end": 849,
                "body": [
                  {
                    "type": "ClassDeclaration",
                    "start": 439,
                    "end": 843,
                    "abstract": false,
                    "body": {
                      "type": "ClassBody",
                      "start": 447,
                      "end": 843,
                      "body": [
                        {
                          "type": "MethodDefinition",
                          "start": 461,
                          "end": 833,
                          "accessibility": "protected",
                          "computed": false,
                          "decorators": [],
                          "key": {
                            "type": "Identifier",
                            "start": 471,
                            "end": 474,
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
                            "start": 474,
                            "end": 833,
                            "async": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 477,
                              "end": 833,
                              "body": [
                                {
                                  "type": "VariableDeclaration",
                                  "start": 495,
                                  "end": 511,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 499,
                                      "end": 510,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 499,
                                        "end": 500,
                                        "decorators": [],
                                        "name": "c",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "NewExpression",
                                        "start": 503,
                                        "end": 510,
                                        "arguments": [],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 507,
                                          "end": 508,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 528,
                                  "end": 541,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 532,
                                      "end": 540,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 532,
                                        "end": 534,
                                        "decorators": [],
                                        "name": "c1",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 537,
                                        "end": 540,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 537,
                                          "end": 538,
                                          "decorators": [],
                                          "name": "c",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 539,
                                          "end": 540,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 558,
                                  "end": 571,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 562,
                                      "end": 570,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 562,
                                        "end": 564,
                                        "decorators": [],
                                        "name": "c2",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 567,
                                        "end": 570,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 567,
                                          "end": 568,
                                          "decorators": [],
                                          "name": "c",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 569,
                                          "end": 570,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 588,
                                  "end": 603,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 592,
                                      "end": 602,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 592,
                                        "end": 594,
                                        "decorators": [],
                                        "name": "c3",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 597,
                                        "end": 602,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 597,
                                          "end": 598,
                                          "decorators": [],
                                          "name": "c",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 599,
                                          "end": 602,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 620,
                                  "end": 635,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 624,
                                      "end": 634,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 624,
                                        "end": 626,
                                        "decorators": [],
                                        "name": "c4",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 629,
                                        "end": 634,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 629,
                                          "end": 630,
                                          "decorators": [],
                                          "name": "c",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 631,
                                          "end": 634,
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 652,
                                  "end": 665,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 656,
                                      "end": 664,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 656,
                                        "end": 658,
                                        "decorators": [],
                                        "name": "c5",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 661,
                                        "end": 664,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 661,
                                          "end": 662,
                                          "decorators": [],
                                          "name": "c",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 663,
                                          "end": 664,
                                          "decorators": [],
                                          "name": "z",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 708,
                                  "end": 722,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 712,
                                      "end": 721,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 712,
                                        "end": 715,
                                        "decorators": [],
                                        "name": "sc1",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 718,
                                        "end": 721,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 718,
                                          "end": 719,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 720,
                                          "end": 721,
                                          "decorators": [],
                                          "name": "x",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 739,
                                  "end": 753,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 743,
                                      "end": 752,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 743,
                                        "end": 746,
                                        "decorators": [],
                                        "name": "sc2",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 749,
                                        "end": 752,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 749,
                                          "end": 750,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 751,
                                          "end": 752,
                                          "decorators": [],
                                          "name": "y",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 770,
                                  "end": 786,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 774,
                                      "end": 785,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 774,
                                        "end": 777,
                                        "decorators": [],
                                        "name": "sc3",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 780,
                                        "end": 785,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 780,
                                          "end": 781,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 782,
                                          "end": 785,
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false
                                        }
                                      }
                                    }
                                  ],
                                  "declare": false,
                                  "kind": "var"
                                },
                                {
                                  "type": "VariableDeclaration",
                                  "start": 803,
                                  "end": 819,
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "start": 807,
                                      "end": 818,
                                      "definite": false,
                                      "id": {
                                        "type": "Identifier",
                                        "start": 807,
                                        "end": 810,
                                        "decorators": [],
                                        "name": "sc4",
                                        "optional": false
                                      },
                                      "init": {
                                        "type": "MemberExpression",
                                        "start": 813,
                                        "end": 818,
                                        "computed": false,
                                        "object": {
                                          "type": "Identifier",
                                          "start": 813,
                                          "end": 814,
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "Identifier",
                                          "start": 815,
                                          "end": 818,
                                          "decorators": [],
                                          "name": "bar",
                                          "optional": false
                                        }
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
                      "start": 445,
                      "end": 446,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    },
                    "implements": [],
                    "superClass": null
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
        "start": 76,
        "end": 77,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 86,
        "end": 87,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 853,
      "end": 899,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 871,
        "end": 899,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 877,
            "end": 897,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 887,
              "end": 888,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 888,
              "end": 896,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 890,
                "end": 896
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
        "start": 859,
        "end": 860,
        "decorators": [],
        "name": "E",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 869,
        "end": 870,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
