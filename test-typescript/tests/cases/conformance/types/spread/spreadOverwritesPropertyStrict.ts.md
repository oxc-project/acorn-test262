__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1202,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 41,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 40,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 40,
            "decorators": [],
            "name": "ab",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 14,
              "end": 40,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 16,
                "end": 40,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 18,
                    "end": 28,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 18,
                      "end": 19,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
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
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 29,
                    "end": 38,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 29,
                      "end": 30,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 30,
                      "end": 38,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 32,
                        "end": 38
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
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 54,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 54,
            "end": 84,
            "decorators": [],
            "name": "abq",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 84,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 59,
                "end": 84,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 61,
                    "end": 71,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 61,
                      "end": 62,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 62,
                      "end": 70,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 64,
                        "end": 70
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 72,
                    "end": 82,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 73,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 74,
                      "end": 82,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 76,
                        "end": 82
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
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 86,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 90,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 90,
            "end": 97,
            "decorators": [],
            "name": "unused1",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 100,
            "end": 115,
            "properties": [
              {
                "type": "Property",
                "start": 102,
                "end": 106,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 103,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 105,
                  "end": 106,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "SpreadElement",
                "start": 108,
                "end": 113,
                "argument": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 113,
                  "decorators": [],
                  "name": "ab",
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
      "start": 125,
      "end": 155,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 129,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 129,
            "end": 136,
            "decorators": [],
            "name": "unused2",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 139,
            "end": 155,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 141,
                "end": 146,
                "argument": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 146,
                  "decorators": [],
                  "name": "ab",
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 148,
                "end": 153,
                "argument": {
                  "type": "Identifier",
                  "start": 151,
                  "end": 153,
                  "decorators": [],
                  "name": "ab",
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
      "start": 206,
      "end": 236,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 236,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 217,
            "decorators": [],
            "name": "unused3",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 220,
            "end": 236,
            "properties": [
              {
                "type": "Property",
                "start": 222,
                "end": 226,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 225,
                  "end": 226,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "SpreadElement",
                "start": 228,
                "end": 234,
                "argument": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 234,
                  "decorators": [],
                  "name": "abq",
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
      "end": 301,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 276,
          "end": 301,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 276,
            "end": 283,
            "decorators": [],
            "name": "unused4",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 286,
            "end": 301,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 288,
                "end": 293,
                "argument": {
                  "type": "Identifier",
                  "start": 291,
                  "end": 293,
                  "decorators": [],
                  "name": "ab",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 295,
                "end": 299,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 295,
                  "end": 296,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 298,
                  "end": 299,
                  "raw": "1",
                  "value": 1
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
      "start": 351,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 381,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 362,
            "decorators": [],
            "name": "unused5",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 365,
            "end": 381,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 367,
                "end": 373,
                "argument": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 373,
                  "decorators": [],
                  "name": "abq",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 375,
                "end": 379,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 375,
                  "end": 376,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 378,
                  "end": 379,
                  "raw": "1",
                  "value": 1
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
      "type": "FunctionDeclaration",
      "start": 388,
      "end": 498,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 431,
        "end": 498,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 437,
            "end": 461,
            "argument": {
              "type": "ObjectExpression",
              "start": 444,
              "end": 460,
              "properties": [
                {
                  "type": "Property",
                  "start": 446,
                  "end": 450,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 446,
                    "end": 447,
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
                    "start": 449,
                    "end": 450,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 452,
                  "end": 458,
                  "argument": {
                    "type": "Identifier",
                    "start": 455,
                    "end": 458,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 397,
        "end": 398,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 399,
          "end": 429,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 402,
            "end": 429,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 404,
              "end": 429,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 406,
                  "end": 427,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 406,
                    "end": 407,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 407,
                    "end": 427,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 409,
                      "end": 427,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 409,
                          "end": 415
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 418,
                          "end": 427
                        }
                      ]
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 499,
      "end": 604,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 542,
        "end": 604,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 548,
            "end": 572,
            "argument": {
              "type": "ObjectExpression",
              "start": 555,
              "end": 571,
              "properties": [
                {
                  "type": "Property",
                  "start": 557,
                  "end": 561,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 557,
                    "end": 558,
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
                    "start": 560,
                    "end": 561,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 563,
                  "end": 569,
                  "argument": {
                    "type": "Identifier",
                    "start": 566,
                    "end": 569,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 508,
        "end": 509,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 510,
          "end": 540,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 513,
            "end": 540,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 515,
              "end": 540,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 515,
                  "end": 528,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 517,
                      "end": 526,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 517,
                        "end": 518,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 518,
                        "end": 526,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 520,
                          "end": 526
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 531,
                  "end": 540
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 605,
      "end": 692,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 652,
        "end": 692,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 658,
            "end": 681,
            "argument": {
              "type": "ObjectExpression",
              "start": 665,
              "end": 681,
              "properties": [
                {
                  "type": "Property",
                  "start": 667,
                  "end": 671,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 667,
                    "end": 668,
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
                    "start": 670,
                    "end": 671,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 673,
                  "end": 679,
                  "argument": {
                    "type": "Identifier",
                    "start": 676,
                    "end": 679,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 614,
        "end": 615,
        "decorators": [],
        "name": "h",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 616,
          "end": 650,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 619,
            "end": 650,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 621,
              "end": 650,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 621,
                  "end": 634,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 623,
                      "end": 632,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 623,
                        "end": 624,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 624,
                        "end": 632,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 626,
                          "end": 632
                        }
                      }
                    }
                  ]
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 637,
                  "end": 650,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 639,
                      "end": 648,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 639,
                        "end": 640,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 640,
                        "end": 648,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 642,
                          "end": 648
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 693,
      "end": 807,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 752,
        "end": 807,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 758,
            "end": 799,
            "argument": {
              "type": "ObjectExpression",
              "start": 765,
              "end": 799,
              "properties": [
                {
                  "type": "Property",
                  "start": 767,
                  "end": 780,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 767,
                    "end": 774,
                    "decorators": [],
                    "name": "command",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 776,
                    "end": 780,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 782,
                  "end": 797,
                  "argument": {
                    "type": "ConditionalExpression",
                    "start": 786,
                    "end": 796,
                    "alternate": {
                      "type": "ObjectExpression",
                      "start": 794,
                      "end": 796,
                      "properties": []
                    },
                    "consequent": {
                      "type": "Identifier",
                      "start": 790,
                      "end": 791,
                      "decorators": [],
                      "name": "t",
                      "optional": false
                    },
                    "test": {
                      "type": "Identifier",
                      "start": 786,
                      "end": 787,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 702,
        "end": 703,
        "decorators": [],
        "name": "i",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 704,
          "end": 714,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 705,
            "end": 714,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 707,
              "end": 714
            }
          }
        },
        {
          "type": "Identifier",
          "start": 716,
          "end": 750,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 717,
            "end": 750,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 719,
              "end": 750,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 721,
                  "end": 737,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 721,
                    "end": 728,
                    "decorators": [],
                    "name": "command",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 728,
                    "end": 736,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 730,
                      "end": 736
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 738,
                  "end": 748,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 738,
                    "end": 740,
                    "decorators": [],
                    "name": "ok",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 740,
                    "end": 748,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 742,
                      "end": 748
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 808,
      "end": 890,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 821,
        "end": 890,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 827,
            "end": 882,
            "argument": {
              "type": "ObjectExpression",
              "start": 834,
              "end": 882,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 836,
                  "end": 856,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 839,
                    "end": 856,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 841,
                        "end": 854,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 841,
                          "end": 848,
                          "decorators": [],
                          "name": "command",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 850,
                          "end": 854,
                          "raw": "\"hi\"",
                          "value": "hi"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 859,
                  "end": 880,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 862,
                    "end": 880,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 864,
                        "end": 878,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 864,
                          "end": 871,
                          "decorators": [],
                          "name": "command",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 873,
                          "end": 878,
                          "raw": "\"bye\"",
                          "value": "bye"
                        }
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 817,
        "end": 818,
        "decorators": [],
        "name": "j",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 891,
      "end": 1023,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 938,
        "end": 1023,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 944,
            "end": 1012,
            "argument": {
              "type": "ObjectExpression",
              "start": 951,
              "end": 1012,
              "properties": [
                {
                  "type": "Property",
                  "start": 953,
                  "end": 966,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 953,
                    "end": 960,
                    "decorators": [],
                    "name": "command",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 962,
                    "end": 966,
                    "raw": "\"hi\"",
                    "value": "hi"
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 968,
                  "end": 988,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 971,
                    "end": 988,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 973,
                        "end": 986,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 973,
                          "end": 980,
                          "decorators": [],
                          "name": "spoiler",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 982,
                          "end": 986,
                          "raw": "true",
                          "value": true
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "Property",
                  "start": 990,
                  "end": 1004,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 990,
                    "end": 998,
                    "decorators": [],
                    "name": "spoiler2",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1000,
                    "end": 1004,
                    "raw": "true",
                    "value": true
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1006,
                  "end": 1010,
                  "argument": {
                    "type": "Identifier",
                    "start": 1009,
                    "end": 1010,
                    "decorators": [],
                    "name": "t",
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 900,
        "end": 901,
        "decorators": [],
        "name": "k",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 902,
          "end": 936,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 903,
            "end": 936,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 905,
              "end": 936,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 907,
                  "end": 923,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 907,
                    "end": 914,
                    "decorators": [],
                    "name": "command",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 914,
                    "end": 922,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 916,
                      "end": 922
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 924,
                  "end": 934,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 924,
                    "end": 926,
                    "decorators": [],
                    "name": "ok",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 926,
                    "end": 934,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 928,
                      "end": 934
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1025,
      "end": 1113,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1061,
        "end": 1113,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1067,
            "end": 1102,
            "argument": {
              "type": "ObjectExpression",
              "start": 1074,
              "end": 1102,
              "properties": [
                {
                  "type": "Property",
                  "start": 1076,
                  "end": 1084,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1076,
                    "end": 1077,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1079,
                    "end": 1084,
                    "raw": "'zzz'",
                    "value": "zzz"
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1086,
                  "end": 1100,
                  "argument": {
                    "type": "Identifier",
                    "start": 1089,
                    "end": 1100,
                    "decorators": [],
                    "name": "anyrequired",
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1034,
        "end": 1035,
        "decorators": [],
        "name": "l",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1036,
          "end": 1059,
          "decorators": [],
          "name": "anyrequired",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1047,
            "end": 1059,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1049,
              "end": 1059,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1051,
                  "end": 1057,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1051,
                    "end": 1052,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1052,
                    "end": 1057,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1054,
                      "end": 1057
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 1114,
      "end": 1200,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1151,
        "end": 1200,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1157,
            "end": 1192,
            "argument": {
              "type": "ObjectExpression",
              "start": 1164,
              "end": 1192,
              "properties": [
                {
                  "type": "Property",
                  "start": 1166,
                  "end": 1174,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1166,
                    "end": 1167,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 1169,
                    "end": 1174,
                    "raw": "'zzz'",
                    "value": "zzz"
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 1176,
                  "end": 1190,
                  "argument": {
                    "type": "Identifier",
                    "start": 1179,
                    "end": 1190,
                    "decorators": [],
                    "name": "anyoptional",
                    "optional": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1123,
        "end": 1124,
        "decorators": [],
        "name": "m",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1125,
          "end": 1149,
          "decorators": [],
          "name": "anyoptional",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1136,
            "end": 1149,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 1138,
              "end": 1149,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 1140,
                  "end": 1147,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1140,
                    "end": 1141,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1142,
                    "end": 1147,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 1144,
                      "end": 1147
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
