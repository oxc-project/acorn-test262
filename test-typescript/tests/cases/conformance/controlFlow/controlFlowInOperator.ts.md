__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1101,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 13,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 7,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 10,
            "end": 13,
            "raw": "'a'",
            "value": "a"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 15,
      "end": 29,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 21,
          "end": 28,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 25,
            "end": 28,
            "raw": "'b'",
            "value": "b"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 30,
      "end": 44,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 43,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 37,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 40,
            "end": 43,
            "raw": "'d'",
            "value": "d"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 46,
      "end": 72,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 55,
        "end": 71,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 57,
            "end": 69,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 59,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 68,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 62,
                "end": 68
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 73,
      "end": 99,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 78,
        "end": 79,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 82,
        "end": 98,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 84,
            "end": 96,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 87,
              "end": 95,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 89,
                "end": 95
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 123,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 116,
              "end": 123,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 118,
                "end": 123,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 118,
                    "end": 119,
                    "typeName": {
                      "type": "Identifier",
                      "start": 118,
                      "end": 119,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 122,
                    "end": 123,
                    "typeName": {
                      "type": "Identifier",
                      "start": 122,
                      "end": 123,
                      "decorators": [],
                      "name": "B",
                      "optional": false
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
      "kind": "const"
    },
    {
      "type": "IfStatement",
      "start": 126,
      "end": 183,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 140,
        "end": 183,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 146,
            "end": 148,
            "expression": {
              "type": "Identifier",
              "start": 146,
              "end": 147,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 163,
            "end": 170,
            "expression": {
              "type": "MemberExpression",
              "start": 163,
              "end": 169,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 165,
                "end": 168,
                "raw": "'a'",
                "value": "a"
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 130,
        "end": 138,
        "operator": "in",
        "left": {
          "type": "Literal",
          "start": 130,
          "end": 133,
          "raw": "'a'",
          "value": "a"
        },
        "right": {
          "type": "Identifier",
          "start": 137,
          "end": 138,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 185,
      "end": 218,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 199,
        "end": 218,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 205,
            "end": 207,
            "expression": {
              "type": "Identifier",
              "start": 205,
              "end": 206,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 189,
        "end": 197,
        "operator": "in",
        "left": {
          "type": "Literal",
          "start": 189,
          "end": 192,
          "raw": "'d'",
          "value": "d"
        },
        "right": {
          "type": "Identifier",
          "start": 196,
          "end": 197,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 220,
      "end": 271,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 232,
        "end": 271,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 238,
            "end": 240,
            "expression": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 253,
            "end": 258,
            "expression": {
              "type": "MemberExpression",
              "start": 253,
              "end": 257,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 253,
                "end": 254,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 255,
                "end": 256,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 224,
        "end": 230,
        "operator": "in",
        "left": {
          "type": "Identifier",
          "start": 224,
          "end": 225,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 229,
          "end": 230,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 273,
      "end": 304,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 285,
        "end": 304,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 291,
            "end": 293,
            "expression": {
              "type": "Identifier",
              "start": 291,
              "end": 292,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 277,
        "end": 283,
        "operator": "in",
        "left": {
          "type": "Identifier",
          "start": 277,
          "end": 278,
          "decorators": [],
          "name": "d",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 282,
          "end": 283,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 374,
      "end": 749,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 472,
        "end": 749,
        "body": [
          {
            "type": "IfStatement",
            "start": 476,
            "end": 517,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 498,
              "end": 517,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 504,
                  "end": 513,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 504,
                    "end": 512,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 504,
                      "end": 506,
                      "decorators": [],
                      "name": "id",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 509,
                      "end": 512,
                      "raw": "\"1\"",
                      "value": "1"
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 480,
              "end": 496,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 480,
                "end": 482,
                "decorators": [],
                "name": "id",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 487,
                "end": 496,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 520,
            "end": 562,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 542,
              "end": 562,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 548,
                  "end": 558,
                  "argument": {
                    "type": "Identifier",
                    "start": 555,
                    "end": 557,
                    "decorators": [],
                    "name": "id",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 524,
              "end": 540,
              "argument": {
                "type": "BinaryExpression",
                "start": 526,
                "end": 539,
                "operator": "in",
                "left": {
                  "type": "Identifier",
                  "start": 526,
                  "end": 528,
                  "decorators": [],
                  "name": "id",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 532,
                  "end": 539,
                  "decorators": [],
                  "name": "seenIDs",
                  "optional": false
                }
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "ForStatement",
            "start": 565,
            "end": 702,
            "body": {
              "type": "BlockStatement",
              "start": 608,
              "end": 702,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 614,
                  "end": 641,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 620,
                      "end": 640,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 620,
                        "end": 625,
                        "decorators": [],
                        "name": "newID",
                        "optional": false
                      },
                      "init": {
                        "type": "TemplateLiteral",
                        "start": 628,
                        "end": 640,
                        "expressions": [
                          {
                            "type": "Identifier",
                            "start": 631,
                            "end": 633,
                            "decorators": [],
                            "name": "id",
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 637,
                            "end": 638,
                            "decorators": [],
                            "name": "i",
                            "optional": false
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 628,
                            "end": 631,
                            "tail": false,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 633,
                            "end": 637,
                            "tail": false,
                            "value": {
                              "cooked": "-",
                              "raw": "-"
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 638,
                            "end": 640,
                            "tail": true,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            }
                          }
                        ]
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "IfStatement",
                  "start": 646,
                  "end": 698,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 671,
                    "end": 698,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 679,
                        "end": 692,
                        "argument": {
                          "type": "Identifier",
                          "start": 686,
                          "end": 691,
                          "decorators": [],
                          "name": "newID",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "UnaryExpression",
                    "start": 650,
                    "end": 669,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 652,
                      "end": 668,
                      "operator": "in",
                      "left": {
                        "type": "Identifier",
                        "start": 652,
                        "end": 657,
                        "decorators": [],
                        "name": "newID",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 661,
                        "end": 668,
                        "decorators": [],
                        "name": "seenIDs",
                        "optional": false
                      }
                    },
                    "operator": "!",
                    "prefix": true
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 570,
              "end": 579,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 574,
                  "end": 579,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 574,
                    "end": 575,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 578,
                    "end": 579,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 581,
              "end": 601,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 581,
                "end": 582,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 585,
                "end": 601,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 585,
                  "end": 591,
                  "decorators": [],
                  "name": "Number",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 592,
                  "end": 601,
                  "decorators": [],
                  "name": "MAX_VALUE",
                  "optional": false
                }
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 603,
              "end": 606,
              "argument": {
                "type": "Identifier",
                "start": 603,
                "end": 604,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "operator": "++",
              "prefix": false
            }
          },
          {
            "type": "ThrowStatement",
            "start": 705,
            "end": 747,
            "argument": {
              "type": "CallExpression",
              "start": 711,
              "end": 746,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 717,
                  "end": 745,
                  "raw": "\"heat death of the universe\"",
                  "value": "heat death of the universe"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 711,
                "end": 716,
                "decorators": [],
                "name": "Error",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 397,
        "decorators": [],
        "name": "uniqueID_54790",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 401,
          "end": 423,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 403,
            "end": 423,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 405,
              "end": 423,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 405,
                  "end": 411
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 414,
                  "end": 423
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 427,
          "end": 461,
          "decorators": [],
          "name": "seenIDs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 434,
            "end": 461,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 436,
              "end": 461,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 438,
                  "end": 459,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 439,
                      "end": 450,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 442,
                        "end": 450,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 444,
                          "end": 450
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 451,
                    "end": 459,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 453,
                      "end": 459
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 463,
        "end": 471,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 465,
          "end": 471
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 751,
      "end": 927,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 815,
        "end": 927,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 819,
            "end": 828,
            "expression": {
              "type": "AssignmentExpression",
              "start": 819,
              "end": 827,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 819,
                "end": 821,
                "decorators": [],
                "name": "id",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 824,
                "end": 827,
                "raw": "\"a\"",
                "value": "a"
              }
            }
          },
          {
            "type": "ForStatement",
            "start": 831,
            "end": 925,
            "body": {
              "type": "BlockStatement",
              "start": 859,
              "end": 925,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 865,
                  "end": 887,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 871,
                      "end": 886,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 871,
                        "end": 876,
                        "decorators": [],
                        "name": "newID",
                        "optional": false
                      },
                      "init": {
                        "type": "TemplateLiteral",
                        "start": 879,
                        "end": 886,
                        "expressions": [
                          {
                            "type": "Identifier",
                            "start": 882,
                            "end": 884,
                            "decorators": [],
                            "name": "id",
                            "optional": false
                          }
                        ],
                        "quasis": [
                          {
                            "type": "TemplateElement",
                            "start": 879,
                            "end": 882,
                            "tail": false,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            }
                          },
                          {
                            "type": "TemplateElement",
                            "start": 884,
                            "end": 886,
                            "tail": true,
                            "value": {
                              "cooked": "",
                              "raw": ""
                            }
                          }
                        ]
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "IfStatement",
                  "start": 892,
                  "end": 921,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 914,
                    "end": 921,
                    "body": []
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 896,
                    "end": 912,
                    "operator": "in",
                    "left": {
                      "type": "Identifier",
                      "start": 896,
                      "end": 901,
                      "decorators": [],
                      "name": "newID",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 905,
                      "end": 912,
                      "decorators": [],
                      "name": "seenIDs",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 836,
              "end": 845,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 840,
                  "end": 845,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 840,
                    "end": 841,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 844,
                    "end": 845,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 847,
              "end": 852,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 847,
                "end": 848,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 851,
                "end": 852,
                "raw": "3",
                "value": 3
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 854,
              "end": 857,
              "argument": {
                "type": "Identifier",
                "start": 854,
                "end": 855,
                "decorators": [],
                "name": "i",
                "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 760,
        "end": 776,
        "decorators": [],
        "name": "uniqueID_54790_2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 777,
          "end": 796,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 779,
            "end": 796,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 781,
              "end": 796,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 781,
                  "end": 787
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 790,
                  "end": 796
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 798,
          "end": 813,
          "decorators": [],
          "name": "seenIDs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 805,
            "end": 813,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 807,
              "end": 813
            }
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 929,
      "end": 1100,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 993,
        "end": 1100,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 997,
            "end": 1006,
            "expression": {
              "type": "AssignmentExpression",
              "start": 997,
              "end": 1005,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 997,
                "end": 999,
                "decorators": [],
                "name": "id",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1002,
                "end": 1005,
                "raw": "\"a\"",
                "value": "a"
              }
            }
          },
          {
            "type": "ForStatement",
            "start": 1009,
            "end": 1098,
            "body": {
              "type": "BlockStatement",
              "start": 1037,
              "end": 1098,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1043,
                  "end": 1060,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1049,
                      "end": 1059,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1049,
                        "end": 1054,
                        "decorators": [],
                        "name": "newID",
                        "optional": false
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 1057,
                        "end": 1059,
                        "decorators": [],
                        "name": "id",
                        "optional": false
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "IfStatement",
                  "start": 1065,
                  "end": 1094,
                  "alternate": null,
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1087,
                    "end": 1094,
                    "body": []
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1069,
                    "end": 1085,
                    "operator": "in",
                    "left": {
                      "type": "Identifier",
                      "start": 1069,
                      "end": 1074,
                      "decorators": [],
                      "name": "newID",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1078,
                      "end": 1085,
                      "decorators": [],
                      "name": "seenIDs",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "init": {
              "type": "VariableDeclaration",
              "start": 1014,
              "end": 1023,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1018,
                  "end": 1023,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1018,
                    "end": 1019,
                    "decorators": [],
                    "name": "i",
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 1022,
                    "end": 1023,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1025,
              "end": 1030,
              "operator": "<",
              "left": {
                "type": "Identifier",
                "start": 1025,
                "end": 1026,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1029,
                "end": 1030,
                "raw": "3",
                "value": 3
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 1032,
              "end": 1035,
              "argument": {
                "type": "Identifier",
                "start": 1032,
                "end": 1033,
                "decorators": [],
                "name": "i",
                "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 938,
        "end": 954,
        "decorators": [],
        "name": "uniqueID_54790_3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 955,
          "end": 974,
          "decorators": [],
          "name": "id",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 957,
            "end": 974,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 959,
              "end": 974,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 959,
                  "end": 965
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 968,
                  "end": 974
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 976,
          "end": 991,
          "decorators": [],
          "name": "seenIDs",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 983,
            "end": 991,
            "typeAnnotation": {
              "type": "TSObjectKeyword",
              "start": 985,
              "end": 991
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
