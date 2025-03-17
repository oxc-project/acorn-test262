__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1921,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 1920,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 1920,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 33,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 14,
              "end": 19,
              "name": "test"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              }
            },
            "value": {
              "type": "Literal",
              "start": 30,
              "end": 32,
              "raw": "24",
              "value": 24
            }
          },
          {
            "type": "MethodDefinition",
            "start": 38,
            "end": 764,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 49,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 49,
              "end": 764,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 52,
                "end": 764,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 62,
                    "end": 75,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 62,
                      "end": 74,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 62,
                        "end": 72,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 62,
                          "end": 66
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 67,
                          "end": 72,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 84,
                    "end": 97,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 84,
                      "end": 96,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 84,
                        "end": 94,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 84,
                          "end": 88
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 89,
                          "end": 94,
                          "name": "test"
                        }
                      },
                      "operator": "--",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 106,
                    "end": 119,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 106,
                      "end": 118,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 108,
                        "end": 118,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 108,
                          "end": 112
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 113,
                          "end": 118,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 141,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 128,
                      "end": 140,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 130,
                        "end": 140,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 130,
                          "end": 134
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 135,
                          "end": 140,
                          "name": "test"
                        }
                      },
                      "operator": "--",
                      "prefix": true
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 150,
                    "end": 173,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 156,
                        "end": 172,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 157,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 160,
                          "end": 172,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 160,
                            "end": 170,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 160,
                              "end": 164
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 165,
                              "end": 170,
                              "name": "test"
                            }
                          },
                          "operator": "++",
                          "prefix": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 182,
                    "end": 205,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 188,
                        "end": 204,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 188,
                          "end": 189,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 192,
                          "end": 204,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 192,
                            "end": 202,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 192,
                              "end": 196
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 197,
                              "end": 202,
                              "name": "test"
                            }
                          },
                          "operator": "--",
                          "prefix": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 214,
                    "end": 237,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 220,
                        "end": 236,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 220,
                          "end": 221,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 224,
                          "end": 236,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 226,
                            "end": 236,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 226,
                              "end": 230
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 231,
                              "end": 236,
                              "name": "test"
                            }
                          },
                          "operator": "++",
                          "prefix": true
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 246,
                    "end": 269,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 252,
                        "end": 268,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 252,
                          "end": 253,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 256,
                          "end": 268,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 258,
                            "end": 268,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 258,
                              "end": 262
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 263,
                              "end": 268,
                              "name": "test"
                            }
                          },
                          "operator": "--",
                          "prefix": true
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ForStatement",
                    "start": 278,
                    "end": 332,
                    "body": {
                      "type": "BlockStatement",
                      "start": 330,
                      "end": 332,
                      "body": []
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 283,
                      "end": 297,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 283,
                        "end": 293,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 283,
                          "end": 287
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 288,
                          "end": 293,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 296,
                        "end": 297,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 299,
                      "end": 314,
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "start": 299,
                        "end": 309,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 299,
                          "end": 303
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 304,
                          "end": 309,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 312,
                        "end": 314,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 316,
                      "end": 328,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 318,
                        "end": 328,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 318,
                          "end": 322
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 323,
                          "end": 328,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ForStatement",
                    "start": 341,
                    "end": 395,
                    "body": {
                      "type": "BlockStatement",
                      "start": 393,
                      "end": 395,
                      "body": []
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 346,
                      "end": 360,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 346,
                        "end": 356,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 346,
                          "end": 350
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 351,
                          "end": 356,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 359,
                        "end": 360,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 362,
                      "end": 377,
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "start": 362,
                        "end": 372,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 362,
                          "end": 366
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 367,
                          "end": 372,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 375,
                        "end": 377,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 379,
                      "end": 391,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 379,
                        "end": 389,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 379,
                          "end": 383
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 384,
                          "end": 389,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 405,
                    "end": 420,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 405,
                      "end": 419,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 406,
                        "end": 416,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 406,
                          "end": 410
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 411,
                          "end": 416,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 429,
                    "end": 444,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 429,
                      "end": 443,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 430,
                        "end": 440,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 430,
                          "end": 434
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 435,
                          "end": 440,
                          "name": "test"
                        }
                      },
                      "operator": "--",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 453,
                    "end": 468,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 453,
                      "end": 467,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 456,
                        "end": 466,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 456,
                          "end": 460
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 461,
                          "end": 466,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 477,
                    "end": 492,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 477,
                      "end": 491,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 480,
                        "end": 490,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 480,
                          "end": 484
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 485,
                          "end": 490,
                          "name": "test"
                        }
                      },
                      "operator": "--",
                      "prefix": true
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 501,
                    "end": 526,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 507,
                        "end": 525,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 507,
                          "end": 508,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 511,
                          "end": 525,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 512,
                            "end": 522,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 512,
                              "end": 516
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 517,
                              "end": 522,
                              "name": "test"
                            }
                          },
                          "operator": "++",
                          "prefix": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 535,
                    "end": 560,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 541,
                        "end": 559,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 541,
                          "end": 542,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 545,
                          "end": 559,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 546,
                            "end": 556,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 546,
                              "end": 550
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 551,
                              "end": 556,
                              "name": "test"
                            }
                          },
                          "operator": "--",
                          "prefix": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 569,
                    "end": 594,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 575,
                        "end": 593,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 575,
                          "end": 576,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 579,
                          "end": 593,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 582,
                            "end": 592,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 582,
                              "end": 586
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 587,
                              "end": 592,
                              "name": "test"
                            }
                          },
                          "operator": "++",
                          "prefix": true
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 603,
                    "end": 628,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 609,
                        "end": 627,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 609,
                          "end": 610,
                          "decorators": [],
                          "name": "h",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 613,
                          "end": 627,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 616,
                            "end": 626,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 616,
                              "end": 620
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 621,
                              "end": 626,
                              "name": "test"
                            }
                          },
                          "operator": "--",
                          "prefix": true
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ForStatement",
                    "start": 637,
                    "end": 693,
                    "body": {
                      "type": "BlockStatement",
                      "start": 691,
                      "end": 693,
                      "body": []
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 642,
                      "end": 656,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 642,
                        "end": 652,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 642,
                          "end": 646
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 647,
                          "end": 652,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 655,
                        "end": 656,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 658,
                      "end": 673,
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "start": 658,
                        "end": 668,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 658,
                          "end": 662
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 663,
                          "end": 668,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 671,
                        "end": 673,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 675,
                      "end": 689,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 678,
                        "end": 688,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 678,
                          "end": 682
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 683,
                          "end": 688,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ForStatement",
                    "start": 702,
                    "end": 758,
                    "body": {
                      "type": "BlockStatement",
                      "start": 756,
                      "end": 758,
                      "body": []
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 707,
                      "end": 721,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 707,
                        "end": 717,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 707,
                          "end": 711
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 712,
                          "end": 717,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 720,
                        "end": 721,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 723,
                      "end": 738,
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "start": 723,
                        "end": 733,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 723,
                          "end": 727
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 728,
                          "end": 733,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 736,
                        "end": 738,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 740,
                      "end": 754,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 741,
                        "end": 751,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 741,
                          "end": 745
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 746,
                          "end": 751,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 769,
            "end": 1880,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 769,
              "end": 773,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 773,
              "end": 1880,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 776,
                "end": 1880,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 786,
                    "end": 813,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 786,
                      "end": 812,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 786,
                        "end": 810,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 786,
                          "end": 804,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 786,
                            "end": 802,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 786,
                              "end": 790
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 791,
                              "end": 802,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 805,
                          "end": 810,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 822,
                    "end": 849,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 822,
                      "end": 848,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 822,
                        "end": 846,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 822,
                          "end": 840,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 822,
                            "end": 838,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 822,
                              "end": 826
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 827,
                              "end": 838,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 841,
                          "end": 846,
                          "name": "test"
                        }
                      },
                      "operator": "--",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 858,
                    "end": 885,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 858,
                      "end": 884,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 860,
                        "end": 884,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 860,
                          "end": 878,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 860,
                            "end": 876,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 860,
                              "end": 864
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 865,
                              "end": 876,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 879,
                          "end": 884,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 894,
                    "end": 921,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 894,
                      "end": 920,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 896,
                        "end": 920,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 896,
                          "end": 914,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 896,
                            "end": 912,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 896,
                              "end": 900
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 901,
                              "end": 912,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 915,
                          "end": 920,
                          "name": "test"
                        }
                      },
                      "operator": "--",
                      "prefix": true
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 930,
                    "end": 967,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 936,
                        "end": 966,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 936,
                          "end": 937,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 940,
                          "end": 966,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 940,
                            "end": 964,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 940,
                              "end": 958,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 940,
                                "end": 956,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 940,
                                  "end": 944
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 945,
                                  "end": 956,
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 959,
                              "end": 964,
                              "name": "test"
                            }
                          },
                          "operator": "++",
                          "prefix": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 976,
                    "end": 1013,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 982,
                        "end": 1012,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 982,
                          "end": 983,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 986,
                          "end": 1012,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 986,
                            "end": 1010,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 986,
                              "end": 1004,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 986,
                                "end": 1002,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 986,
                                  "end": 990
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 991,
                                  "end": 1002,
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1005,
                              "end": 1010,
                              "name": "test"
                            }
                          },
                          "operator": "--",
                          "prefix": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1022,
                    "end": 1059,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1028,
                        "end": 1058,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1028,
                          "end": 1029,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 1032,
                          "end": 1058,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1034,
                            "end": 1058,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 1034,
                              "end": 1052,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1034,
                                "end": 1050,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1034,
                                  "end": 1038
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1039,
                                  "end": 1050,
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1053,
                              "end": 1058,
                              "name": "test"
                            }
                          },
                          "operator": "++",
                          "prefix": true
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1068,
                    "end": 1105,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1074,
                        "end": 1104,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1074,
                          "end": 1075,
                          "decorators": [],
                          "name": "d",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 1078,
                          "end": 1104,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1080,
                            "end": 1104,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 1080,
                              "end": 1098,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1080,
                                "end": 1096,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1080,
                                  "end": 1084
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1085,
                                  "end": 1096,
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1099,
                              "end": 1104,
                              "name": "test"
                            }
                          },
                          "operator": "--",
                          "prefix": true
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ForStatement",
                    "start": 1114,
                    "end": 1210,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1208,
                      "end": 1210,
                      "body": []
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 1119,
                      "end": 1147,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1119,
                        "end": 1143,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 1119,
                          "end": 1137,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1119,
                            "end": 1135,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1119,
                              "end": 1123
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1124,
                              "end": 1135,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1138,
                          "end": 1143,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1146,
                        "end": 1147,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1149,
                      "end": 1178,
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1149,
                        "end": 1173,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 1149,
                          "end": 1167,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1149,
                            "end": 1165,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1149,
                              "end": 1153
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1154,
                              "end": 1165,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1168,
                          "end": 1173,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1176,
                        "end": 1178,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 1180,
                      "end": 1206,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1182,
                        "end": 1206,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 1182,
                          "end": 1200,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1182,
                            "end": 1198,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1182,
                              "end": 1186
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1187,
                              "end": 1198,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1201,
                          "end": 1206,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ForStatement",
                    "start": 1219,
                    "end": 1315,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1313,
                      "end": 1315,
                      "body": []
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 1224,
                      "end": 1252,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1224,
                        "end": 1248,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 1224,
                          "end": 1242,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1224,
                            "end": 1240,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1224,
                              "end": 1228
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1229,
                              "end": 1240,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1243,
                          "end": 1248,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1251,
                        "end": 1252,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1254,
                      "end": 1283,
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1254,
                        "end": 1278,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 1254,
                          "end": 1272,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1254,
                            "end": 1270,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1254,
                              "end": 1258
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1259,
                              "end": 1270,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1273,
                          "end": 1278,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1281,
                        "end": 1283,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 1285,
                      "end": 1311,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1285,
                        "end": 1309,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 1285,
                          "end": 1303,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1285,
                            "end": 1301,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1285,
                              "end": 1289
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1290,
                              "end": 1301,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1304,
                          "end": 1309,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1325,
                    "end": 1354,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 1325,
                      "end": 1353,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1326,
                        "end": 1350,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 1326,
                          "end": 1344,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1326,
                            "end": 1342,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1326,
                              "end": 1330
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1331,
                              "end": 1342,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1345,
                          "end": 1350,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1363,
                    "end": 1392,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 1363,
                      "end": 1391,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1364,
                        "end": 1388,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 1364,
                          "end": 1382,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1364,
                            "end": 1380,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1364,
                              "end": 1368
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1369,
                              "end": 1380,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1383,
                          "end": 1388,
                          "name": "test"
                        }
                      },
                      "operator": "--",
                      "prefix": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1401,
                    "end": 1430,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 1401,
                      "end": 1429,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1404,
                        "end": 1428,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 1404,
                          "end": 1422,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1404,
                            "end": 1420,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1404,
                              "end": 1408
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1409,
                              "end": 1420,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1423,
                          "end": 1428,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1439,
                    "end": 1468,
                    "directive": null,
                    "expression": {
                      "type": "UpdateExpression",
                      "start": 1439,
                      "end": 1467,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1442,
                        "end": 1466,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 1442,
                          "end": 1460,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1442,
                            "end": 1458,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1442,
                              "end": 1446
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1447,
                              "end": 1458,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1461,
                          "end": 1466,
                          "name": "test"
                        }
                      },
                      "operator": "--",
                      "prefix": true
                    }
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1477,
                    "end": 1516,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1483,
                        "end": 1515,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1483,
                          "end": 1484,
                          "decorators": [],
                          "name": "e",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 1487,
                          "end": 1515,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1488,
                            "end": 1512,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 1488,
                              "end": 1506,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1488,
                                "end": 1504,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1488,
                                  "end": 1492
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1493,
                                  "end": 1504,
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1507,
                              "end": 1512,
                              "name": "test"
                            }
                          },
                          "operator": "++",
                          "prefix": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1525,
                    "end": 1564,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1531,
                        "end": 1563,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1531,
                          "end": 1532,
                          "decorators": [],
                          "name": "f",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 1535,
                          "end": 1563,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1536,
                            "end": 1560,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 1536,
                              "end": 1554,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1536,
                                "end": 1552,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1536,
                                  "end": 1540
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1541,
                                  "end": 1552,
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1555,
                              "end": 1560,
                              "name": "test"
                            }
                          },
                          "operator": "--",
                          "prefix": false
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1573,
                    "end": 1612,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1579,
                        "end": 1611,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1579,
                          "end": 1580,
                          "decorators": [],
                          "name": "g",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 1583,
                          "end": 1611,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1586,
                            "end": 1610,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 1586,
                              "end": 1604,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1586,
                                "end": 1602,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1586,
                                  "end": 1590
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1591,
                                  "end": 1602,
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1605,
                              "end": 1610,
                              "name": "test"
                            }
                          },
                          "operator": "++",
                          "prefix": true
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 1621,
                    "end": 1660,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1627,
                        "end": 1659,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1627,
                          "end": 1628,
                          "decorators": [],
                          "name": "h",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UpdateExpression",
                          "start": 1631,
                          "end": 1659,
                          "argument": {
                            "type": "MemberExpression",
                            "start": 1634,
                            "end": 1658,
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "start": 1634,
                              "end": 1652,
                              "arguments": [],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1634,
                                "end": 1650,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1634,
                                  "end": 1638
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1639,
                                  "end": 1650,
                                  "decorators": [],
                                  "name": "getInstance",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1653,
                              "end": 1658,
                              "name": "test"
                            }
                          },
                          "operator": "--",
                          "prefix": true
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ForStatement",
                    "start": 1669,
                    "end": 1767,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1765,
                      "end": 1767,
                      "body": []
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 1674,
                      "end": 1702,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1674,
                        "end": 1698,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 1674,
                          "end": 1692,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1674,
                            "end": 1690,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1674,
                              "end": 1678
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1679,
                              "end": 1690,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1693,
                          "end": 1698,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1701,
                        "end": 1702,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1704,
                      "end": 1733,
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1704,
                        "end": 1728,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 1704,
                          "end": 1722,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1704,
                            "end": 1720,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1704,
                              "end": 1708
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1709,
                              "end": 1720,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1723,
                          "end": 1728,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1731,
                        "end": 1733,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 1735,
                      "end": 1763,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1738,
                        "end": 1762,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 1738,
                          "end": 1756,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1738,
                            "end": 1754,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1738,
                              "end": 1742
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1743,
                              "end": 1754,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1757,
                          "end": 1762,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ForStatement",
                    "start": 1776,
                    "end": 1874,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1872,
                      "end": 1874,
                      "body": []
                    },
                    "init": {
                      "type": "AssignmentExpression",
                      "start": 1781,
                      "end": 1809,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1781,
                        "end": 1805,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 1781,
                          "end": 1799,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1781,
                            "end": 1797,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1781,
                              "end": 1785
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1786,
                              "end": 1797,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1800,
                          "end": 1805,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1808,
                        "end": 1809,
                        "raw": "0",
                        "value": 0
                      }
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "start": 1811,
                      "end": 1840,
                      "operator": "<",
                      "left": {
                        "type": "MemberExpression",
                        "start": 1811,
                        "end": 1835,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 1811,
                          "end": 1829,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1811,
                            "end": 1827,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1811,
                              "end": 1815
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1816,
                              "end": 1827,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1830,
                          "end": 1835,
                          "name": "test"
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 1838,
                        "end": 1840,
                        "raw": "10",
                        "value": 10
                      }
                    },
                    "update": {
                      "type": "UpdateExpression",
                      "start": 1842,
                      "end": 1870,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 1843,
                        "end": 1867,
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "start": 1843,
                          "end": 1861,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 1843,
                            "end": 1859,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1843,
                              "end": 1847
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 1848,
                              "end": 1859,
                              "decorators": [],
                              "name": "getInstance",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1862,
                          "end": 1867,
                          "name": "test"
                        }
                      },
                      "operator": "++",
                      "prefix": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 1885,
            "end": 1918,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1885,
              "end": 1896,
              "decorators": [],
              "name": "getInstance",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 1896,
              "end": 1918,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 1899,
                "end": 1918,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1901,
                    "end": 1916,
                    "argument": {
                      "type": "NewExpression",
                      "start": 1908,
                      "end": 1915,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 1912,
                        "end": 1913,
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
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
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
