typeRelationships.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 870,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 428,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 428,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 26,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 18,
              "decorators": [],
              "name": "self",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ThisExpression",
              "start": 21,
              "end": 25
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 43,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "NewExpression",
              "start": 35,
              "end": 42,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 39,
                "end": 40,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 48,
            "end": 82,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 51,
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
              "start": 51,
              "end": 82,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 82,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 64,
                    "end": 76,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 71,
                      "end": 75
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
            "start": 87,
            "end": 165,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 89,
              "decorators": [],
              "name": "f1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 89,
              "end": 165,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 92,
                "end": 165,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 102,
                    "end": 121,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 102,
                      "end": 120,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 102,
                        "end": 108,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 102,
                          "end": 106
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 107,
                          "end": 108,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 111,
                        "end": 120,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 111,
                          "end": 115
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 116,
                          "end": 120,
                          "decorators": [],
                          "name": "self",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 130,
                    "end": 149,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 130,
                      "end": 148,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 130,
                        "end": 139,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 130,
                          "end": 134
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 139,
                          "decorators": [],
                          "name": "self",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 142,
                        "end": 148,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 142,
                          "end": 146
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 147,
                          "end": 148,
                          "decorators": [],
                          "name": "c",
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
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 170,
            "end": 344,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 170,
              "end": 172,
              "decorators": [],
              "name": "f2",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 172,
              "end": 344,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 175,
                "end": 344,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 185,
                    "end": 196,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 189,
                        "end": 195,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 189,
                          "end": 195,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 190,
                            "end": 195,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 192,
                              "end": 195,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 192,
                                "end": 193,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 192,
                                  "end": 193,
                                  "decorators": [],
                                  "name": "C",
                                  "optional": false
                                }
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 205,
                    "end": 228,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 209,
                        "end": 227,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 209,
                          "end": 210,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 213,
                          "end": 227,
                          "elements": [
                            {
                              "type": "ThisExpression",
                              "start": 214,
                              "end": 218
                            },
                            {
                              "type": "MemberExpression",
                              "start": 220,
                              "end": 226,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 220,
                                "end": 224
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 225,
                                "end": 226,
                                "decorators": [],
                                "name": "c",
                                "optional": false
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 272,
                    "end": 286,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 276,
                        "end": 285,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 276,
                          "end": 285,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 277,
                            "end": 285,
                            "typeAnnotation": {
                              "type": "TSArrayType",
                              "start": 279,
                              "end": 285,
                              "elementType": {
                                "type": "TSThisType",
                                "start": 279,
                                "end": 283
                              }
                            }
                          }
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 295,
                    "end": 338,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 299,
                        "end": 337,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 299,
                          "end": 300,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "start": 303,
                          "end": 337,
                          "elements": [
                            {
                              "type": "ThisExpression",
                              "start": 304,
                              "end": 308
                            },
                            {
                              "type": "MemberExpression",
                              "start": 310,
                              "end": 319,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 310,
                                "end": 314
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 315,
                                "end": 319,
                                "decorators": [],
                                "name": "self",
                                "optional": false
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 321,
                              "end": 325,
                              "raw": "null",
                              "value": null
                            },
                            {
                              "type": "Identifier",
                              "start": 327,
                              "end": 336,
                              "decorators": [],
                              "name": "undefined",
                              "optional": false
                            }
                          ]
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
          },
          {
            "type": "MethodDefinition",
            "start": 349,
            "end": 426,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 349,
              "end": 351,
              "decorators": [],
              "name": "f3",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 351,
              "end": 426,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 364,
                "end": 426,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 374,
                    "end": 404,
                    "argument": {
                      "type": "ConditionalExpression",
                      "start": 381,
                      "end": 403,
                      "alternate": {
                        "type": "MemberExpression",
                        "start": 394,
                        "end": 403,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 394,
                          "end": 398
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 399,
                          "end": 403,
                          "decorators": [],
                          "name": "self",
                          "optional": false
                        }
                      },
                      "consequent": {
                        "type": "MemberExpression",
                        "start": 385,
                        "end": 391,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 385,
                          "end": 389
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 390,
                          "end": 391,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      },
                      "test": {
                        "type": "Identifier",
                        "start": 381,
                        "end": 382,
                        "decorators": [],
                        "name": "b",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 352,
                  "end": 362,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 353,
                    "end": 362,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 355,
                      "end": 362
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
        "end": 7,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 430,
      "end": 869,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 448,
        "end": 869,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 454,
            "end": 467,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 454,
              "end": 459,
              "decorators": [],
              "name": "self1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "ThisExpression",
              "start": 462,
              "end": 466
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 472,
            "end": 490,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 472,
              "end": 477,
              "decorators": [],
              "name": "self2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 480,
              "end": 489,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 480,
                "end": 484
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 485,
                "end": 489,
                "decorators": [],
                "name": "self",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 495,
            "end": 514,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 495,
              "end": 500,
              "decorators": [],
              "name": "self3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "CallExpression",
              "start": 503,
              "end": 513,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 503,
                "end": 511,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 503,
                  "end": 507
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 511,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 519,
            "end": 531,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 519,
              "end": 520,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "NewExpression",
              "start": 523,
              "end": 530,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 527,
                "end": 528,
                "decorators": [],
                "name": "D",
                "optional": false
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 536,
            "end": 867,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 536,
              "end": 539,
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
              "start": 539,
              "end": 867,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 542,
                "end": 867,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 552,
                    "end": 575,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 552,
                      "end": 574,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 552,
                        "end": 561,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 552,
                          "end": 556
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 557,
                          "end": 561,
                          "decorators": [],
                          "name": "self",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 564,
                        "end": 574,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 564,
                          "end": 568
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 569,
                          "end": 574,
                          "decorators": [],
                          "name": "self1",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 584,
                    "end": 607,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 584,
                      "end": 606,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 584,
                        "end": 593,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 584,
                          "end": 588
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 589,
                          "end": 593,
                          "decorators": [],
                          "name": "self",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 596,
                        "end": 606,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 596,
                          "end": 600
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 601,
                          "end": 606,
                          "decorators": [],
                          "name": "self2",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 616,
                    "end": 639,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 616,
                      "end": 638,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 616,
                        "end": 625,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 616,
                          "end": 620
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 621,
                          "end": 625,
                          "decorators": [],
                          "name": "self",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 628,
                        "end": 638,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 628,
                          "end": 632
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 633,
                          "end": 638,
                          "decorators": [],
                          "name": "self3",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 648,
                    "end": 671,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 648,
                      "end": 670,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 648,
                        "end": 658,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 648,
                          "end": 652
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 653,
                          "end": 658,
                          "decorators": [],
                          "name": "self1",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 661,
                        "end": 670,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 661,
                          "end": 665
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 666,
                          "end": 670,
                          "decorators": [],
                          "name": "self",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 680,
                    "end": 703,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 680,
                      "end": 702,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 680,
                        "end": 690,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 680,
                          "end": 684
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 685,
                          "end": 690,
                          "decorators": [],
                          "name": "self2",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 693,
                        "end": 702,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 693,
                          "end": 697
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 698,
                          "end": 702,
                          "decorators": [],
                          "name": "self",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 712,
                    "end": 735,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 712,
                      "end": 734,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 712,
                        "end": 722,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 712,
                          "end": 716
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 717,
                          "end": 722,
                          "decorators": [],
                          "name": "self3",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 725,
                        "end": 734,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 725,
                          "end": 729
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 730,
                          "end": 734,
                          "decorators": [],
                          "name": "self",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 744,
                    "end": 763,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 744,
                      "end": 762,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 744,
                        "end": 750,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 744,
                          "end": 748
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 749,
                          "end": 750,
                          "decorators": [],
                          "name": "d",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 753,
                        "end": 762,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 753,
                          "end": 757
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 758,
                          "end": 762,
                          "decorators": [],
                          "name": "self",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 772,
                    "end": 788,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 772,
                      "end": 787,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 772,
                        "end": 778,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 772,
                          "end": 776
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 777,
                          "end": 778,
                          "decorators": [],
                          "name": "d",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 781,
                        "end": 787,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 781,
                          "end": 785
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 786,
                          "end": 787,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 807,
                    "end": 826,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 807,
                      "end": 825,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 807,
                        "end": 816,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 807,
                          "end": 811
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 812,
                          "end": 816,
                          "decorators": [],
                          "name": "self",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 819,
                        "end": 825,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 819,
                          "end": 823
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 824,
                          "end": 825,
                          "decorators": [],
                          "name": "d",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 845,
                    "end": 861,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 845,
                      "end": 860,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 845,
                        "end": 851,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 845,
                          "end": 849
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 850,
                          "end": 851,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 854,
                        "end": 860,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 854,
                          "end": 858
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 859,
                          "end": 860,
                          "decorators": [],
                          "name": "d",
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
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 436,
        "end": 437,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 446,
        "end": 447,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
