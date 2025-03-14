derivedClassSuperStatementPosition.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1664,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 94,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 94,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 40,
            "end": 49,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 44,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 47,
              "end": 48,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 54,
            "end": 92,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 65,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 65,
              "end": 92,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 68,
                "end": 92,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 78,
                    "end": 86,
                    "expression": {
                      "type": "CallExpression",
                      "start": 78,
                      "end": 85,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 78,
                        "end": 83
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
        "end": 18,
        "decorators": [],
        "name": "DerivedBasic",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 27,
        "end": 33,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 278,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 146,
        "end": 278,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 152,
            "end": 164,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 154,
              "decorators": [],
              "name": "x1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 163,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 156,
                "end": 163
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 169,
            "end": 181,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 171,
              "decorators": [],
              "name": "x2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 171,
              "end": 180,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 173,
                "end": 180
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 186,
            "end": 276,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 186,
              "end": 197,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 197,
              "end": 276,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 209,
                "end": 276,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 219,
                    "end": 231,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 219,
                      "end": 230,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 219,
                        "end": 226,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 219,
                          "end": 223
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 224,
                          "end": 226,
                          "decorators": [],
                          "name": "x1",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 230,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 240,
                    "end": 249,
                    "expression": {
                      "type": "CallExpression",
                      "start": 240,
                      "end": 248,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 246,
                          "end": 247,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 240,
                        "end": 245
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 258,
                    "end": 270,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 258,
                      "end": 269,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 258,
                        "end": 265,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 258,
                          "end": 262
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 263,
                          "end": 265,
                          "decorators": [],
                          "name": "x2",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 268,
                        "end": 269,
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
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 198,
                  "end": 207,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 199,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 202,
                    "end": 207,
                    "raw": "false",
                    "value": false
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
        "start": 102,
        "end": 130,
        "decorators": [],
        "name": "DerivedAfterParameterDefault",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 139,
        "end": 145,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 280,
      "end": 469,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 327,
        "end": 469,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 333,
            "end": 347,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 333,
              "end": 335,
              "decorators": [],
              "name": "x1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 335,
              "end": 346,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 337,
                "end": 346,
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 337,
                  "end": 344
                }
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 352,
            "end": 366,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 352,
              "end": 354,
              "decorators": [],
              "name": "x2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 354,
              "end": 365,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 356,
                "end": 365,
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 356,
                  "end": 363
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 371,
            "end": 467,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 371,
              "end": 382,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 382,
              "end": 467,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 400,
                "end": 467,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 410,
                    "end": 422,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 410,
                      "end": 421,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 410,
                        "end": 417,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 410,
                          "end": 414
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 415,
                          "end": 417,
                          "decorators": [],
                          "name": "x1",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 420,
                        "end": 421,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 431,
                    "end": 440,
                    "expression": {
                      "type": "CallExpression",
                      "start": 431,
                      "end": 439,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 437,
                          "end": 438,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 431,
                        "end": 436
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 449,
                    "end": 461,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 449,
                      "end": 460,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 449,
                        "end": 456,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 449,
                          "end": 453
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 454,
                          "end": 456,
                          "decorators": [],
                          "name": "x2",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 459,
                        "end": 460,
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
              "params": [
                {
                  "type": "RestElement",
                  "start": 383,
                  "end": 398,
                  "argument": {
                    "type": "Identifier",
                    "start": 386,
                    "end": 387,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 387,
                    "end": 398,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 389,
                      "end": 398,
                      "elementType": {
                        "type": "TSBooleanKeyword",
                        "start": 389,
                        "end": 396
                      }
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
        "start": 286,
        "end": 311,
        "decorators": [],
        "name": "DerivedAfterRestParameter",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 320,
        "end": 326,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 471,
      "end": 686,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 508,
        "end": 686,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 514,
            "end": 521,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 514,
              "end": 515,
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
              "start": 515,
              "end": 520,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 517,
                "end": 520
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 526,
            "end": 684,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 526,
              "end": 537,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 537,
              "end": 684,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 540,
                "end": 684,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 564,
                    "end": 578,
                    "expression": {
                      "type": "CallExpression",
                      "start": 564,
                      "end": 577,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 564,
                        "end": 575,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 564,
                          "end": 571,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 572,
                          "end": 575,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 607,
                    "end": 615,
                    "expression": {
                      "type": "CallExpression",
                      "start": 607,
                      "end": 614,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 607,
                        "end": 612
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 644,
                    "end": 658,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 644,
                      "end": 657,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 644,
                        "end": 650,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 644,
                          "end": 648
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 649,
                          "end": 650,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 653,
                        "end": 657,
                        "raw": "null",
                        "value": null
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
        "start": 477,
        "end": 492,
        "decorators": [],
        "name": "DerivedComments",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 501,
        "end": 507,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 688,
      "end": 942,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 736,
        "end": 942,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 742,
            "end": 749,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 742,
              "end": 743,
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
              "start": 743,
              "end": 748,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 745,
                "end": 748
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 754,
            "end": 940,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 754,
              "end": 765,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 765,
              "end": 940,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 768,
                "end": 940,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 792,
                    "end": 797,
                    "expression": {
                      "type": "ThisExpression",
                      "start": 792,
                      "end": 796
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 820,
                    "end": 834,
                    "expression": {
                      "type": "CallExpression",
                      "start": 820,
                      "end": 833,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 820,
                        "end": 831,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 820,
                          "end": 827,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 828,
                          "end": 831,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 863,
                    "end": 871,
                    "expression": {
                      "type": "CallExpression",
                      "start": 863,
                      "end": 870,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 863,
                        "end": 868
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 900,
                    "end": 914,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 900,
                      "end": 913,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 900,
                        "end": 906,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 900,
                          "end": 904
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 905,
                          "end": 906,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 909,
                        "end": 913,
                        "raw": "null",
                        "value": null
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
        "start": 694,
        "end": 720,
        "decorators": [],
        "name": "DerivedCommentsInvalidThis",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 729,
        "end": 735,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 944,
      "end": 1098,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 986,
        "end": 1098,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 992,
            "end": 1001,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 992,
              "end": 996,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 999,
              "end": 1000,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1006,
            "end": 1096,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1006,
              "end": 1017,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1017,
              "end": 1096,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1020,
                "end": 1096,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1030,
                    "end": 1090,
                    "expression": {
                      "type": "ConditionalExpression",
                      "start": 1030,
                      "end": 1089,
                      "alternate": {
                        "type": "CallExpression",
                        "start": 1081,
                        "end": 1089,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1087,
                            "end": 1088,
                            "raw": "0",
                            "value": 0
                          }
                        ],
                        "callee": {
                          "type": "Super",
                          "start": 1081,
                          "end": 1086
                        },
                        "optional": false
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "start": 1058,
                        "end": 1066,
                        "arguments": [
                          {
                            "type": "Literal",
                            "start": 1064,
                            "end": 1065,
                            "raw": "1",
                            "value": 1
                          }
                        ],
                        "callee": {
                          "type": "Super",
                          "start": 1058,
                          "end": 1063
                        },
                        "optional": false
                      },
                      "test": {
                        "type": "CallExpression",
                        "start": 1030,
                        "end": 1043,
                        "arguments": [],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1030,
                          "end": 1041,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 1030,
                            "end": 1034,
                            "decorators": [],
                            "name": "Math",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1035,
                            "end": 1041,
                            "decorators": [],
                            "name": "random",
                            "optional": false
                          }
                        },
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
        "start": 950,
        "end": 970,
        "decorators": [],
        "name": "DerivedInConditional",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 979,
        "end": 985,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1100,
      "end": 1284,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1133,
        "end": 1284,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1139,
            "end": 1148,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1139,
              "end": 1143,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 1146,
              "end": 1147,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1153,
            "end": 1282,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1153,
              "end": 1164,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1164,
              "end": 1282,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1167,
                "end": 1282,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1177,
                    "end": 1276,
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 1243,
                      "end": 1276,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1257,
                          "end": 1266,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1257,
                            "end": 1265,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1263,
                                "end": 1264,
                                "raw": "0",
                                "value": 0
                              }
                            ],
                            "callee": {
                              "type": "Super",
                              "start": 1257,
                              "end": 1262
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1196,
                      "end": 1229,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1210,
                          "end": 1219,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1210,
                            "end": 1218,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1216,
                                "end": 1217,
                                "raw": "1",
                                "value": 1
                              }
                            ],
                            "callee": {
                              "type": "Super",
                              "start": 1210,
                              "end": 1215
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "CallExpression",
                      "start": 1181,
                      "end": 1194,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1181,
                        "end": 1192,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1181,
                          "end": 1185,
                          "decorators": [],
                          "name": "Math",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1186,
                          "end": 1192,
                          "decorators": [],
                          "name": "random",
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
        "start": 1106,
        "end": 1117,
        "decorators": [],
        "name": "DerivedInIf",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1126,
        "end": 1132,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1286,
      "end": 1441,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1336,
        "end": 1441,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1342,
            "end": 1351,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1342,
              "end": 1346,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 1349,
              "end": 1350,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1356,
            "end": 1439,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1356,
              "end": 1367,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1367,
              "end": 1439,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1391,
                "end": 1439,
                "body": [
                  {
                    "type": "BlockStatement",
                    "start": 1401,
                    "end": 1433,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1415,
                        "end": 1423,
                        "expression": {
                          "type": "CallExpression",
                          "start": 1415,
                          "end": 1422,
                          "arguments": [],
                          "callee": {
                            "type": "Super",
                            "start": 1415,
                            "end": 1420
                          },
                          "optional": false
                        }
                      }
                    ]
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 1368,
                  "end": 1389,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 1376,
                    "end": 1389,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1376,
                      "end": 1385,
                      "decorators": [],
                      "name": "paramProp",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 1388,
                      "end": 1389,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  "readonly": false,
                  "static": false
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
        "start": 1292,
        "end": 1320,
        "decorators": [],
        "name": "DerivedInBlockWithProperties",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1329,
        "end": 1335,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 1443,
      "end": 1663,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 1499,
        "end": 1663,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1505,
            "end": 1514,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 1505,
              "end": 1509,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 1512,
              "end": 1513,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1519,
            "end": 1661,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1519,
              "end": 1530,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1530,
              "end": 1661,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1554,
                "end": 1661,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 1564,
                    "end": 1655,
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 1622,
                      "end": 1655,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1636,
                          "end": 1645,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1636,
                            "end": 1644,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1642,
                                "end": 1643,
                                "raw": "0",
                                "value": 0
                              }
                            ],
                            "callee": {
                              "type": "Super",
                              "start": 1636,
                              "end": 1641
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1583,
                      "end": 1616,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1597,
                          "end": 1606,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1597,
                            "end": 1605,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 1603,
                                "end": 1604,
                                "raw": "1",
                                "value": 1
                              }
                            ],
                            "callee": {
                              "type": "Super",
                              "start": 1597,
                              "end": 1602
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "CallExpression",
                      "start": 1568,
                      "end": 1581,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1568,
                        "end": 1579,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1568,
                          "end": 1572,
                          "decorators": [],
                          "name": "Math",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1573,
                          "end": 1579,
                          "decorators": [],
                          "name": "random",
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
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 1531,
                  "end": 1552,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "AssignmentPattern",
                    "start": 1539,
                    "end": 1552,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 1539,
                      "end": 1548,
                      "decorators": [],
                      "name": "paramProp",
                      "optional": false
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 1551,
                      "end": 1552,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  "readonly": false,
                  "static": false
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
        "start": 1449,
        "end": 1483,
        "decorators": [],
        "name": "DerivedInConditionalWithProperties",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 1492,
        "end": 1498,
        "decorators": [],
        "name": "Object",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
