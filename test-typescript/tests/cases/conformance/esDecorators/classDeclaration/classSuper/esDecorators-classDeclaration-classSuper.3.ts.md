__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 766,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 67,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 67,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 65,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
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
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 79,
            "end": 82,
            "raw": "\"x\"",
            "value": "x"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 85,
      "end": 765,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 111,
        "end": 765,
        "body": [
          {
            "type": "StaticBlock",
            "start": 117,
            "end": 763,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 134,
                "end": 142,
                "expression": {
                  "type": "MemberExpression",
                  "start": 134,
                  "end": 141,
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "start": 134,
                    "end": 139
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 151,
                "end": 163,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 151,
                  "end": 162,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 151,
                    "end": 158,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 151,
                      "end": 156
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 157,
                      "end": 158,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 161,
                    "end": 162,
                    "raw": "1",
                    "value": 1
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 172,
                "end": 185,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 172,
                  "end": 184,
                  "operator": "+=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 172,
                    "end": 179,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 172,
                      "end": 177
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 183,
                    "end": 184,
                    "raw": "1",
                    "value": 1
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 194,
                "end": 204,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 194,
                  "end": 203,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 194,
                    "end": 201,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 194,
                      "end": 199
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 201,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "operator": "++",
                  "prefix": false
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 213,
                "end": 223,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 213,
                  "end": 222,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 213,
                    "end": 220,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 213,
                      "end": 218
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 219,
                      "end": 220,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "operator": "--",
                  "prefix": false
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 232,
                "end": 242,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 232,
                  "end": 241,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 234,
                    "end": 241,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 234,
                      "end": 239
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 240,
                      "end": 241,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "operator": "++",
                  "prefix": true
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 251,
                "end": 261,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 251,
                  "end": 260,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 253,
                    "end": 260,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 253,
                      "end": 258
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "operator": "--",
                  "prefix": true
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 270,
                "end": 298,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 271,
                  "end": 296,
                  "operator": "=",
                  "left": {
                    "type": "ObjectPattern",
                    "start": 271,
                    "end": 285,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 273,
                        "end": 283,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 273,
                          "end": 274,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "MemberExpression",
                          "start": 276,
                          "end": 283,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 276,
                            "end": 281
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 282,
                            "end": 283,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 288,
                    "end": 296,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 290,
                        "end": 294,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 290,
                          "end": 291,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 293,
                          "end": 294,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ]
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 307,
                "end": 323,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 307,
                  "end": 322,
                  "operator": "=",
                  "left": {
                    "type": "ArrayPattern",
                    "start": 307,
                    "end": 316,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "start": 308,
                        "end": 315,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 308,
                          "end": 313
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 314,
                          "end": 315,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "optional": false
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 319,
                    "end": 322,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 320,
                        "end": 321,
                        "raw": "1",
                        "value": 1
                      }
                    ]
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 333,
                "end": 344,
                "expression": {
                  "type": "MemberExpression",
                  "start": 333,
                  "end": 343,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 333,
                    "end": 338
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 339,
                    "end": 342,
                    "raw": "\"x\"",
                    "value": "x"
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 353,
                "end": 368,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 353,
                  "end": 367,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 353,
                    "end": 363,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 353,
                      "end": 358
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 359,
                      "end": 362,
                      "raw": "\"x\"",
                      "value": "x"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 366,
                    "end": 367,
                    "raw": "1",
                    "value": 1
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 377,
                "end": 393,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 377,
                  "end": 392,
                  "operator": "+=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 377,
                    "end": 387,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 377,
                      "end": 382
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 383,
                      "end": 386,
                      "raw": "\"x\"",
                      "value": "x"
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 391,
                    "end": 392,
                    "raw": "1",
                    "value": 1
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 402,
                "end": 415,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 402,
                  "end": 414,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 402,
                    "end": 412,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 402,
                      "end": 407
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 408,
                      "end": 411,
                      "raw": "\"x\"",
                      "value": "x"
                    }
                  },
                  "operator": "++",
                  "prefix": false
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 424,
                "end": 437,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 424,
                  "end": 436,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 424,
                    "end": 434,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 424,
                      "end": 429
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 430,
                      "end": 433,
                      "raw": "\"x\"",
                      "value": "x"
                    }
                  },
                  "operator": "--",
                  "prefix": false
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 446,
                "end": 459,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 446,
                  "end": 458,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 448,
                    "end": 458,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 448,
                      "end": 453
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 454,
                      "end": 457,
                      "raw": "\"x\"",
                      "value": "x"
                    }
                  },
                  "operator": "++",
                  "prefix": true
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 468,
                "end": 481,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 468,
                  "end": 480,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 470,
                    "end": 480,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 470,
                      "end": 475
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 476,
                      "end": 479,
                      "raw": "\"x\"",
                      "value": "x"
                    }
                  },
                  "operator": "--",
                  "prefix": true
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 490,
                "end": 521,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 491,
                  "end": 519,
                  "operator": "=",
                  "left": {
                    "type": "ObjectPattern",
                    "start": 491,
                    "end": 508,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 493,
                        "end": 506,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 493,
                          "end": 494,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "MemberExpression",
                          "start": 496,
                          "end": 506,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 496,
                            "end": 501
                          },
                          "optional": false,
                          "property": {
                            "type": "Literal",
                            "start": 502,
                            "end": 505,
                            "raw": "\"x\"",
                            "value": "x"
                          }
                        }
                      }
                    ]
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 511,
                    "end": 519,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 513,
                        "end": 517,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 513,
                          "end": 514,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 516,
                          "end": 517,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ]
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 530,
                "end": 549,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 530,
                  "end": 548,
                  "operator": "=",
                  "left": {
                    "type": "ArrayPattern",
                    "start": 530,
                    "end": 542,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "start": 531,
                        "end": 541,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 531,
                          "end": 536
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 537,
                          "end": 540,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      }
                    ],
                    "optional": false
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 545,
                    "end": 548,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 546,
                        "end": 547,
                        "raw": "1",
                        "value": 1
                      }
                    ]
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 559,
                "end": 568,
                "expression": {
                  "type": "MemberExpression",
                  "start": 559,
                  "end": 567,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 559,
                    "end": 564
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 565,
                    "end": 566,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 577,
                "end": 590,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 577,
                  "end": 589,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 577,
                    "end": 585,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 577,
                      "end": 582
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 583,
                      "end": 584,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 588,
                    "end": 589,
                    "raw": "1",
                    "value": 1
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 599,
                "end": 613,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 599,
                  "end": 612,
                  "operator": "+=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 599,
                    "end": 607,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 599,
                      "end": 604
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 605,
                      "end": 606,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 611,
                    "end": 612,
                    "raw": "1",
                    "value": 1
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 622,
                "end": 633,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 622,
                  "end": 632,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 622,
                    "end": 630,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 622,
                      "end": 627
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 628,
                      "end": 629,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "operator": "++",
                  "prefix": false
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 642,
                "end": 653,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 642,
                  "end": 652,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 642,
                    "end": 650,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 642,
                      "end": 647
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 648,
                      "end": 649,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "operator": "--",
                  "prefix": false
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 662,
                "end": 673,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 662,
                  "end": 672,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 664,
                    "end": 672,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 664,
                      "end": 669
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 670,
                      "end": 671,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "operator": "++",
                  "prefix": true
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 682,
                "end": 693,
                "expression": {
                  "type": "UpdateExpression",
                  "start": 682,
                  "end": 692,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 684,
                    "end": 692,
                    "computed": true,
                    "object": {
                      "type": "Super",
                      "start": 684,
                      "end": 689
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 690,
                      "end": 691,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  },
                  "operator": "--",
                  "prefix": true
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 702,
                "end": 731,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 703,
                  "end": 729,
                  "operator": "=",
                  "left": {
                    "type": "ObjectPattern",
                    "start": 703,
                    "end": 718,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 705,
                        "end": 716,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 705,
                          "end": 706,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "MemberExpression",
                          "start": 708,
                          "end": 716,
                          "computed": true,
                          "object": {
                            "type": "Super",
                            "start": 708,
                            "end": 713
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 714,
                            "end": 715,
                            "decorators": [],
                            "name": "x",
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 721,
                    "end": 729,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 723,
                        "end": 727,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 723,
                          "end": 724,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 726,
                          "end": 727,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ]
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 740,
                "end": 757,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 740,
                  "end": 756,
                  "operator": "=",
                  "left": {
                    "type": "ArrayPattern",
                    "start": 740,
                    "end": 750,
                    "decorators": [],
                    "elements": [
                      {
                        "type": "MemberExpression",
                        "start": 741,
                        "end": 749,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 741,
                          "end": 746
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 747,
                          "end": 748,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    ],
                    "optional": false
                  },
                  "right": {
                    "type": "ArrayExpression",
                    "start": 753,
                    "end": 756,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 754,
                        "end": 755,
                        "raw": "1",
                        "value": 1
                      }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [
        {
          "type": "Decorator",
          "start": 85,
          "end": 89,
          "expression": {
            "type": "Identifier",
            "start": 86,
            "end": 89,
            "decorators": [],
            "name": "dec",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 97,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 106,
        "end": 110,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
