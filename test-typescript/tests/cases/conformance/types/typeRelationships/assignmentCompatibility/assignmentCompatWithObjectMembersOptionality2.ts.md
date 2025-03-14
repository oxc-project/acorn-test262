__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 137,
  "end": 1436,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 137,
      "end": 164,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 148,
        "end": 164,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 150,
            "end": 162,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 153,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 161,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 155,
                "end": 161
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
        "start": 143,
        "end": 147,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 165,
      "end": 208,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 192,
        "end": 208,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 194,
            "end": 206,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 194,
              "end": 197,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 205,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 199,
                "end": 205
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
        "start": 171,
        "end": 178,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 187,
        "end": 191,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 209,
      "end": 256,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 240,
        "end": 256,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 242,
            "end": 254,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 242,
              "end": 245,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 245,
              "end": 253,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 247,
                "end": 253
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
        "start": 215,
        "end": 223,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 232,
        "end": 239,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 258,
      "end": 823,
      "body": {
        "type": "TSModuleBlock",
        "start": 283,
        "end": 823,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 304,
            "end": 342,
            "body": {
              "type": "TSInterfaceBody",
              "start": 316,
              "end": 342,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 326,
                  "end": 336,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 329,
                    "decorators": [],
                    "name": "opt",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 330,
                    "end": 336,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 332,
                      "end": 336,
                      "typeName": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 336,
                        "decorators": [],
                        "name": "Base",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 314,
              "end": 315,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 347,
            "end": 356,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 351,
                "end": 355,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 351,
                  "end": 355,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 352,
                    "end": 355,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 354,
                      "end": 355,
                      "typeName": {
                        "type": "Identifier",
                        "start": 354,
                        "end": 355,
                        "decorators": [],
                        "name": "C",
                        "optional": false
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
            "start": 362,
            "end": 384,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 366,
                "end": 384,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 366,
                  "end": 384,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 367,
                    "end": 384,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 369,
                      "end": 384,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 371,
                          "end": 382,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 371,
                            "end": 374,
                            "decorators": [],
                            "name": "opt",
                            "optional": false
                          },
                          "optional": true,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 375,
                            "end": 381,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 377,
                              "end": 381,
                              "typeName": {
                                "type": "Identifier",
                                "start": 377,
                                "end": 381,
                                "decorators": [],
                                "name": "Base",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
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
            "start": 389,
            "end": 426,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 393,
                "end": 426,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 393,
                  "end": 404,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 394,
                    "end": 404,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 396,
                      "end": 404,
                      "exprName": {
                        "type": "Identifier",
                        "start": 403,
                        "end": 404,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  }
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 407,
                  "end": 426,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 409,
                      "end": 424,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 409,
                        "end": 412,
                        "decorators": [],
                        "name": "opt",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "NewExpression",
                        "start": 414,
                        "end": 424,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 418,
                          "end": 422,
                          "decorators": [],
                          "name": "Base",
                          "optional": false
                        }
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
            "type": "TSInterfaceDeclaration",
            "start": 447,
            "end": 487,
            "body": {
              "type": "TSInterfaceBody",
              "start": 459,
              "end": 487,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 469,
                  "end": 481,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 469,
                    "end": 474,
                    "decorators": [],
                    "name": "other",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 474,
                    "end": 480,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 476,
                      "end": 480,
                      "typeName": {
                        "type": "Identifier",
                        "start": 476,
                        "end": 480,
                        "decorators": [],
                        "name": "Base",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 457,
              "end": 458,
              "decorators": [],
              "name": "D",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 492,
            "end": 535,
            "body": {
              "type": "TSInterfaceBody",
              "start": 504,
              "end": 535,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 514,
                  "end": 529,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 514,
                    "end": 519,
                    "decorators": [],
                    "name": "other",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 519,
                    "end": 528,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 521,
                      "end": 528,
                      "typeName": {
                        "type": "Identifier",
                        "start": 521,
                        "end": 528,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 502,
              "end": 503,
              "decorators": [],
              "name": "E",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 540,
            "end": 584,
            "body": {
              "type": "TSInterfaceBody",
              "start": 552,
              "end": 584,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 562,
                  "end": 578,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 562,
                    "end": 567,
                    "decorators": [],
                    "name": "other",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 568,
                    "end": 577,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 570,
                      "end": 577,
                      "typeName": {
                        "type": "Identifier",
                        "start": 570,
                        "end": 577,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 550,
              "end": 551,
              "decorators": [],
              "name": "F",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 589,
            "end": 598,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 593,
                "end": 597,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 593,
                  "end": 597,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 594,
                    "end": 597,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 596,
                      "end": 597,
                      "typeName": {
                        "type": "Identifier",
                        "start": 596,
                        "end": 597,
                        "decorators": [],
                        "name": "D",
                        "optional": false
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
            "start": 603,
            "end": 612,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 607,
                "end": 611,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 607,
                  "end": 611,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 608,
                    "end": 611,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 610,
                      "end": 611,
                      "typeName": {
                        "type": "Identifier",
                        "start": 610,
                        "end": 611,
                        "decorators": [],
                        "name": "E",
                        "optional": false
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
            "start": 617,
            "end": 626,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 621,
                "end": 625,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 621,
                  "end": 625,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 622,
                    "end": 625,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 624,
                      "end": 625,
                      "typeName": {
                        "type": "Identifier",
                        "start": 624,
                        "end": 625,
                        "decorators": [],
                        "name": "F",
                        "optional": false
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
            "type": "ExpressionStatement",
            "start": 672,
            "end": 678,
            "expression": {
              "type": "AssignmentExpression",
              "start": 672,
              "end": 677,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 672,
                "end": 673,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 676,
                "end": 677,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 683,
            "end": 689,
            "expression": {
              "type": "AssignmentExpression",
              "start": 683,
              "end": 688,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 683,
                "end": 684,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 687,
                "end": 688,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 694,
            "end": 700,
            "expression": {
              "type": "AssignmentExpression",
              "start": 694,
              "end": 699,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 694,
                "end": 695,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 698,
                "end": 699,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 705,
            "end": 711,
            "expression": {
              "type": "AssignmentExpression",
              "start": 705,
              "end": 710,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 705,
                "end": 706,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 709,
                "end": 710,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 716,
            "end": 722,
            "expression": {
              "type": "AssignmentExpression",
              "start": 716,
              "end": 721,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 716,
                "end": 717,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 720,
                "end": 721,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 727,
            "end": 733,
            "expression": {
              "type": "AssignmentExpression",
              "start": 727,
              "end": 732,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 727,
                "end": 728,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 731,
                "end": 732,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 738,
            "end": 744,
            "expression": {
              "type": "AssignmentExpression",
              "start": 738,
              "end": 743,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 738,
                "end": 739,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 742,
                "end": 743,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 749,
            "end": 755,
            "expression": {
              "type": "AssignmentExpression",
              "start": 749,
              "end": 754,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 749,
                "end": 750,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 753,
                "end": 754,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 760,
            "end": 766,
            "expression": {
              "type": "AssignmentExpression",
              "start": 760,
              "end": 765,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 760,
                "end": 761,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 764,
                "end": 765,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 782,
            "end": 788,
            "expression": {
              "type": "AssignmentExpression",
              "start": 782,
              "end": 787,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 782,
                "end": 783,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 786,
                "end": 787,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 793,
            "end": 799,
            "expression": {
              "type": "AssignmentExpression",
              "start": 793,
              "end": 798,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 793,
                "end": 794,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 797,
                "end": 798,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 804,
            "end": 810,
            "expression": {
              "type": "AssignmentExpression",
              "start": 804,
              "end": 809,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 804,
                "end": 805,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 808,
                "end": 809,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 815,
            "end": 821,
            "expression": {
              "type": "AssignmentExpression",
              "start": 815,
              "end": 820,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 815,
                "end": 816,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 819,
                "end": 820,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 282,
        "decorators": [],
        "name": "TargetHasOptional",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 825,
      "end": 1435,
      "body": {
        "type": "TSModuleBlock",
        "start": 850,
        "end": 1435,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 871,
            "end": 908,
            "body": {
              "type": "TSInterfaceBody",
              "start": 883,
              "end": 908,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 893,
                  "end": 902,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 893,
                    "end": 896,
                    "decorators": [],
                    "name": "opt",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 896,
                    "end": 902,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 898,
                      "end": 902,
                      "typeName": {
                        "type": "Identifier",
                        "start": 898,
                        "end": 902,
                        "decorators": [],
                        "name": "Base",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 881,
              "end": 882,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 913,
            "end": 922,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 917,
                "end": 921,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 917,
                  "end": 921,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 918,
                    "end": 921,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 920,
                      "end": 921,
                      "typeName": {
                        "type": "Identifier",
                        "start": 920,
                        "end": 921,
                        "decorators": [],
                        "name": "C",
                        "optional": false
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
            "start": 928,
            "end": 949,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 932,
                "end": 949,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 932,
                  "end": 949,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 933,
                    "end": 949,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 935,
                      "end": 949,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 937,
                          "end": 947,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 937,
                            "end": 940,
                            "decorators": [],
                            "name": "opt",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 940,
                            "end": 946,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 942,
                              "end": 946,
                              "typeName": {
                                "type": "Identifier",
                                "start": 942,
                                "end": 946,
                                "decorators": [],
                                "name": "Base",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
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
            "start": 954,
            "end": 981,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 958,
                "end": 981,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 958,
                  "end": 959,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 962,
                  "end": 981,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 964,
                      "end": 979,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 964,
                        "end": 967,
                        "decorators": [],
                        "name": "opt",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "NewExpression",
                        "start": 969,
                        "end": 979,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 973,
                          "end": 977,
                          "decorators": [],
                          "name": "Base",
                          "optional": false
                        }
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
            "type": "TSInterfaceDeclaration",
            "start": 1002,
            "end": 1043,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1014,
              "end": 1043,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1024,
                  "end": 1037,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1024,
                    "end": 1029,
                    "decorators": [],
                    "name": "other",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1030,
                    "end": 1036,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1032,
                      "end": 1036,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1032,
                        "end": 1036,
                        "decorators": [],
                        "name": "Base",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 1012,
              "end": 1013,
              "decorators": [],
              "name": "D",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1048,
            "end": 1092,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1060,
              "end": 1092,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1070,
                  "end": 1086,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1070,
                    "end": 1075,
                    "decorators": [],
                    "name": "other",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1076,
                    "end": 1085,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1078,
                      "end": 1085,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1078,
                        "end": 1085,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 1058,
              "end": 1059,
              "decorators": [],
              "name": "E",
              "optional": false
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 1097,
            "end": 1140,
            "body": {
              "type": "TSInterfaceBody",
              "start": 1109,
              "end": 1140,
              "body": [
                {
                  "type": "TSPropertySignature",
                  "start": 1119,
                  "end": 1134,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1119,
                    "end": 1124,
                    "decorators": [],
                    "name": "other",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1124,
                    "end": 1133,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1126,
                      "end": 1133,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1126,
                        "end": 1133,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 1107,
              "end": 1108,
              "decorators": [],
              "name": "F",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 1145,
            "end": 1154,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1149,
                "end": 1153,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1149,
                  "end": 1153,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1150,
                    "end": 1153,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1152,
                      "end": 1153,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1152,
                        "end": 1153,
                        "decorators": [],
                        "name": "D",
                        "optional": false
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
            "start": 1159,
            "end": 1168,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1163,
                "end": 1167,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1163,
                  "end": 1167,
                  "decorators": [],
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1164,
                    "end": 1167,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1166,
                      "end": 1167,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1166,
                        "end": 1167,
                        "decorators": [],
                        "name": "E",
                        "optional": false
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
            "start": 1173,
            "end": 1182,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1177,
                "end": 1181,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1177,
                  "end": 1181,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1178,
                    "end": 1181,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1180,
                      "end": 1181,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1180,
                        "end": 1181,
                        "decorators": [],
                        "name": "F",
                        "optional": false
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
            "type": "ExpressionStatement",
            "start": 1188,
            "end": 1194,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1188,
              "end": 1193,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1188,
                "end": 1189,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1192,
                "end": 1193,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1208,
            "end": 1214,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1208,
              "end": 1213,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1208,
                "end": 1209,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1212,
                "end": 1213,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1228,
            "end": 1234,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1228,
              "end": 1233,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1228,
                "end": 1229,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1232,
                "end": 1233,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1248,
            "end": 1254,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1248,
              "end": 1253,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1248,
                "end": 1249,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1252,
                "end": 1253,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1266,
            "end": 1272,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1266,
              "end": 1271,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1266,
                "end": 1267,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1270,
                "end": 1271,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1286,
            "end": 1292,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1286,
              "end": 1291,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1286,
                "end": 1287,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1290,
                "end": 1291,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1306,
            "end": 1312,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1306,
              "end": 1311,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1306,
                "end": 1307,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1310,
                "end": 1311,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1326,
            "end": 1332,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1326,
              "end": 1331,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1326,
                "end": 1327,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1330,
                "end": 1331,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1344,
            "end": 1350,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1344,
              "end": 1349,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1344,
                "end": 1345,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1348,
                "end": 1349,
                "decorators": [],
                "name": "d",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1364,
            "end": 1370,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1364,
              "end": 1369,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1364,
                "end": 1365,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1368,
                "end": 1369,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1384,
            "end": 1390,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1384,
              "end": 1389,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1384,
                "end": 1385,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1388,
                "end": 1389,
                "decorators": [],
                "name": "f",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1404,
            "end": 1410,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1404,
              "end": 1409,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1404,
                "end": 1405,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1408,
                "end": 1409,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1421,
            "end": 1427,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1421,
              "end": 1426,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1421,
                "end": 1422,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1425,
                "end": 1426,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 832,
        "end": 849,
        "decorators": [],
        "name": "SourceHasOptional",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
