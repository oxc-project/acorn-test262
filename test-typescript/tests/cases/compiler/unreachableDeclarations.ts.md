unreachableDeclarations.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 1176,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 262,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 17,
        "end": 262,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 23,
            "end": 31,
            "expression": {
              "type": "CallExpression",
              "start": 23,
              "end": 30,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 23,
                "end": 28,
                "decorators": [],
                "name": "aFunc",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 37,
            "end": 62,
            "expression": {
              "type": "CallExpression",
              "start": 37,
              "end": 61,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 49,
                  "end": 60,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 49,
                    "end": 54,
                    "decorators": [],
                    "name": "EnumA",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 60,
                    "decorators": [],
                    "name": "Value",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 37,
                "end": 48,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 44,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 45,
                  "end": 48,
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
            "start": 67,
            "end": 92,
            "expression": {
              "type": "CallExpression",
              "start": 67,
              "end": 91,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 79,
                  "end": 90,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 79,
                    "end": 84,
                    "decorators": [],
                    "name": "EnumB",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 90,
                    "decorators": [],
                    "name": "Value",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 67,
                "end": 78,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 67,
                  "end": 74,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 75,
                  "end": 78,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 98,
            "end": 105,
            "argument": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 111,
            "end": 203,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 128,
              "end": 203,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 138,
                  "end": 163,
                  "expression": {
                    "type": "CallExpression",
                    "start": 138,
                    "end": 162,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 150,
                        "end": 161,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 150,
                          "end": 155,
                          "decorators": [],
                          "name": "EnumA",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 156,
                          "end": 161,
                          "decorators": [],
                          "name": "Value",
                          "optional": false
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 138,
                      "end": 149,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 138,
                        "end": 145,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 146,
                        "end": 149,
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
                  "start": 172,
                  "end": 197,
                  "expression": {
                    "type": "CallExpression",
                    "start": 172,
                    "end": 196,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 184,
                        "end": 195,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 184,
                          "end": 189,
                          "decorators": [],
                          "name": "EnumB",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 190,
                          "end": 195,
                          "decorators": [],
                          "name": "Value",
                          "optional": false
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 172,
                      "end": 183,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 179,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 183,
                        "decorators": [],
                        "name": "log",
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
            "id": {
              "type": "Identifier",
              "start": 120,
              "end": 125,
              "decorators": [],
              "name": "aFunc",
              "optional": false
            },
            "params": []
          },
          {
            "type": "TSEnumDeclaration",
            "start": 209,
            "end": 229,
            "body": {
              "type": "TSEnumBody",
              "start": 220,
              "end": 229,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 222,
                  "end": 227,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 227,
                    "decorators": [],
                    "name": "Value",
                    "optional": false
                  }
                }
              ]
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 214,
              "end": 219,
              "decorators": [],
              "name": "EnumA",
              "optional": false
            }
          },
          {
            "type": "TSEnumDeclaration",
            "start": 234,
            "end": 260,
            "body": {
              "type": "TSEnumBody",
              "start": 251,
              "end": 260,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 253,
                  "end": 258,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 258,
                    "decorators": [],
                    "name": "Value",
                    "optional": false
                  }
                }
              ]
            },
            "const": true,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 245,
              "end": 250,
              "decorators": [],
              "name": "EnumB",
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
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "func1",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 264,
      "end": 431,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 281,
        "end": 431,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 287,
            "end": 295,
            "expression": {
              "type": "CallExpression",
              "start": 287,
              "end": 294,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 287,
                "end": 292,
                "decorators": [],
                "name": "aFunc",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 301,
            "end": 326,
            "expression": {
              "type": "CallExpression",
              "start": 301,
              "end": 325,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 313,
                  "end": 324,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 313,
                    "end": 318,
                    "decorators": [],
                    "name": "EnumA",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 319,
                    "end": 324,
                    "decorators": [],
                    "name": "Value",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 301,
                "end": 312,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 301,
                  "end": 308,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 312,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 332,
            "end": 339,
            "argument": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 345,
            "end": 403,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 362,
              "end": 403,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 372,
                  "end": 397,
                  "expression": {
                    "type": "CallExpression",
                    "start": 372,
                    "end": 396,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 384,
                        "end": 395,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 384,
                          "end": 389,
                          "decorators": [],
                          "name": "EnumA",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 390,
                          "end": 395,
                          "decorators": [],
                          "name": "Value",
                          "optional": false
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 372,
                      "end": 383,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 372,
                        "end": 379,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 380,
                        "end": 383,
                        "decorators": [],
                        "name": "log",
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
            "id": {
              "type": "Identifier",
              "start": 354,
              "end": 359,
              "decorators": [],
              "name": "aFunc",
              "optional": false
            },
            "params": []
          },
          {
            "type": "TSEnumDeclaration",
            "start": 409,
            "end": 429,
            "body": {
              "type": "TSEnumBody",
              "start": 420,
              "end": 429,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 422,
                  "end": 427,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 422,
                    "end": 427,
                    "decorators": [],
                    "name": "Value",
                    "optional": false
                  }
                }
              ]
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 414,
              "end": 419,
              "decorators": [],
              "name": "EnumA",
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
        "start": 273,
        "end": 278,
        "decorators": [],
        "name": "func2",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 433,
      "end": 606,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 450,
        "end": 606,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 456,
            "end": 464,
            "expression": {
              "type": "CallExpression",
              "start": 456,
              "end": 463,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 456,
                "end": 461,
                "decorators": [],
                "name": "aFunc",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 470,
            "end": 495,
            "expression": {
              "type": "CallExpression",
              "start": 470,
              "end": 494,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 482,
                  "end": 493,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 482,
                    "end": 487,
                    "decorators": [],
                    "name": "EnumB",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 488,
                    "end": 493,
                    "decorators": [],
                    "name": "Value",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 470,
                "end": 481,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 470,
                  "end": 477,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 481,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 501,
            "end": 508,
            "argument": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 514,
            "end": 572,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 531,
              "end": 572,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 541,
                  "end": 566,
                  "expression": {
                    "type": "CallExpression",
                    "start": 541,
                    "end": 565,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 553,
                        "end": 564,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 553,
                          "end": 558,
                          "decorators": [],
                          "name": "EnumB",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 559,
                          "end": 564,
                          "decorators": [],
                          "name": "Value",
                          "optional": false
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 541,
                      "end": 552,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 541,
                        "end": 548,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 549,
                        "end": 552,
                        "decorators": [],
                        "name": "log",
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
            "id": {
              "type": "Identifier",
              "start": 523,
              "end": 528,
              "decorators": [],
              "name": "aFunc",
              "optional": false
            },
            "params": []
          },
          {
            "type": "TSEnumDeclaration",
            "start": 578,
            "end": 604,
            "body": {
              "type": "TSEnumBody",
              "start": 595,
              "end": 604,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 597,
                  "end": 602,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 597,
                    "end": 602,
                    "decorators": [],
                    "name": "Value",
                    "optional": false
                  }
                }
              ]
            },
            "const": true,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 589,
              "end": 594,
              "decorators": [],
              "name": "EnumB",
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
        "start": 442,
        "end": 447,
        "decorators": [],
        "name": "func3",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 608,
      "end": 794,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 625,
        "end": 794,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 631,
            "end": 639,
            "expression": {
              "type": "CallExpression",
              "start": 631,
              "end": 638,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 631,
                "end": 636,
                "decorators": [],
                "name": "aFunc",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 645,
            "end": 671,
            "expression": {
              "type": "CallExpression",
              "start": 645,
              "end": 670,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 657,
                  "end": 669,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 657,
                    "end": 663,
                    "decorators": [],
                    "name": "ClassA",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 664,
                    "end": 669,
                    "decorators": [],
                    "name": "Value",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 645,
                "end": 656,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 645,
                  "end": 652,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 653,
                  "end": 656,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 677,
            "end": 684,
            "argument": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 690,
            "end": 749,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 707,
              "end": 749,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 717,
                  "end": 743,
                  "expression": {
                    "type": "CallExpression",
                    "start": 717,
                    "end": 742,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 729,
                        "end": 741,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 729,
                          "end": 735,
                          "decorators": [],
                          "name": "ClassA",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 736,
                          "end": 741,
                          "decorators": [],
                          "name": "Value",
                          "optional": false
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 717,
                      "end": 728,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 717,
                        "end": 724,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 725,
                        "end": 728,
                        "decorators": [],
                        "name": "log",
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
            "id": {
              "type": "Identifier",
              "start": 699,
              "end": 704,
              "decorators": [],
              "name": "aFunc",
              "optional": false
            },
            "params": []
          },
          {
            "type": "ClassDeclaration",
            "start": 755,
            "end": 792,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 768,
              "end": 792,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 770,
                  "end": 790,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 777,
                    "end": 782,
                    "decorators": [],
                    "name": "Value",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "value": {
                    "type": "Literal",
                    "start": 785,
                    "end": 789,
                    "raw": "1234",
                    "value": 1234
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 761,
              "end": 767,
              "decorators": [],
              "name": "ClassA",
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
      "id": {
        "type": "Identifier",
        "start": 617,
        "end": 622,
        "decorators": [],
        "name": "func4",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 796,
      "end": 1175,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 813,
        "end": 1175,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 816,
            "end": 824,
            "expression": {
              "type": "CallExpression",
              "start": 816,
              "end": 823,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 816,
                "end": 821,
                "decorators": [],
                "name": "aFunc",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 827,
            "end": 846,
            "expression": {
              "type": "CallExpression",
              "start": 827,
              "end": 845,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 839,
                  "end": 844,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 839,
                    "end": 842,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 843,
                    "end": 844,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 827,
                "end": 838,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 827,
                  "end": 834,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 838,
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
            "start": 848,
            "end": 871,
            "expression": {
              "type": "CallExpression",
              "start": 848,
              "end": 870,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 860,
                  "end": 869,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 860,
                    "end": 864,
                    "decorators": [],
                    "name": "blah",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 865,
                    "end": 869,
                    "decorators": [],
                    "name": "prop",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 848,
                "end": 859,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 848,
                  "end": 855,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 856,
                  "end": 859,
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
            "start": 873,
            "end": 895,
            "expression": {
              "type": "CallExpression",
              "start": 873,
              "end": 895,
              "arguments": [
                {
                  "type": "NewExpression",
                  "start": 885,
                  "end": 894,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 889,
                    "end": 892,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 873,
                "end": 884,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 873,
                  "end": 880,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 884,
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
            "start": 897,
            "end": 920,
            "expression": {
              "type": "CallExpression",
              "start": 897,
              "end": 919,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 909,
                  "end": 918,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 909,
                    "end": 912,
                    "decorators": [],
                    "name": "Baz",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 913,
                    "end": 918,
                    "decorators": [],
                    "name": "value",
                    "optional": false
                  }
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 897,
                "end": 908,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 897,
                  "end": 904,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 905,
                  "end": 908,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "ReturnStatement",
            "start": 924,
            "end": 931,
            "argument": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 934,
            "end": 1054,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 951,
              "end": 1054,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 955,
                  "end": 974,
                  "expression": {
                    "type": "CallExpression",
                    "start": 955,
                    "end": 973,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 967,
                        "end": 972,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 967,
                          "end": 970,
                          "decorators": [],
                          "name": "Bar",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 971,
                          "end": 972,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 955,
                      "end": 966,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 955,
                        "end": 962,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 963,
                        "end": 966,
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
                  "start": 977,
                  "end": 1000,
                  "expression": {
                    "type": "CallExpression",
                    "start": 977,
                    "end": 999,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 989,
                        "end": 998,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 989,
                          "end": 993,
                          "decorators": [],
                          "name": "blah",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 994,
                          "end": 998,
                          "decorators": [],
                          "name": "prop",
                          "optional": false
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 977,
                      "end": 988,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 977,
                        "end": 984,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 985,
                        "end": 988,
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
                  "start": 1003,
                  "end": 1025,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1003,
                    "end": 1025,
                    "arguments": [
                      {
                        "type": "NewExpression",
                        "start": 1015,
                        "end": 1024,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 1019,
                          "end": 1022,
                          "decorators": [],
                          "name": "Foo",
                          "optional": false
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1003,
                      "end": 1014,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1003,
                        "end": 1010,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1011,
                        "end": 1014,
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
                  "start": 1028,
                  "end": 1051,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1028,
                    "end": 1050,
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "start": 1040,
                        "end": 1049,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 1040,
                          "end": 1043,
                          "decorators": [],
                          "name": "Baz",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 1044,
                          "end": 1049,
                          "decorators": [],
                          "name": "value",
                          "optional": false
                        }
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 1028,
                      "end": 1039,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1028,
                        "end": 1035,
                        "decorators": [],
                        "name": "console",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1036,
                        "end": 1039,
                        "decorators": [],
                        "name": "log",
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
            "id": {
              "type": "Identifier",
              "start": 943,
              "end": 948,
              "decorators": [],
              "name": "aFunc",
              "optional": false
            },
            "params": []
          },
          {
            "type": "VariableDeclaration",
            "start": 1057,
            "end": 1085,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1063,
                "end": 1084,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1063,
                  "end": 1067,
                  "decorators": [],
                  "name": "blah",
                  "optional": false
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 1070,
                  "end": 1084,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 1072,
                      "end": 1082,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 1072,
                        "end": 1076,
                        "decorators": [],
                        "name": "prop",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 1078,
                        "end": 1082,
                        "raw": "1234",
                        "value": 1234
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
            "type": "TSEnumDeclaration",
            "start": 1088,
            "end": 1102,
            "body": {
              "type": "TSEnumBody",
              "start": 1097,
              "end": 1102,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 1099,
                  "end": 1100,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1099,
                    "end": 1100,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              ]
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 1093,
              "end": 1096,
              "decorators": [],
              "name": "Bar",
              "optional": false
            }
          },
          {
            "type": "ClassDeclaration",
            "start": 1105,
            "end": 1127,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 1115,
              "end": 1127,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 1117,
                  "end": 1125,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1117,
                    "end": 1118,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "Literal",
                    "start": 1121,
                    "end": 1125,
                    "raw": "1234",
                    "value": 1234
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 1111,
              "end": 1114,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "implements": [],
            "superClass": null
          },
          {
            "type": "TSModuleDeclaration",
            "start": 1130,
            "end": 1173,
            "body": {
              "type": "TSModuleBlock",
              "start": 1144,
              "end": 1173,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 1146,
                  "end": 1171,
                  "attributes": [],
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 1153,
                    "end": 1171,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1159,
                        "end": 1171,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 1159,
                          "end": 1164,
                          "decorators": [],
                          "name": "value",
                          "optional": false
                        },
                        "init": {
                          "type": "Literal",
                          "start": 1167,
                          "end": 1171,
                          "raw": "1234",
                          "value": 1234
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  "exportKind": "value",
                  "source": null,
                  "specifiers": []
                }
              ]
            },
            "declare": false,
            "global": false,
            "id": {
              "type": "Identifier",
              "start": 1140,
              "end": 1143,
              "decorators": [],
              "name": "Baz",
              "optional": false
            },
            "kind": "namespace"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 805,
        "end": 810,
        "decorators": [],
        "name": "func5",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
