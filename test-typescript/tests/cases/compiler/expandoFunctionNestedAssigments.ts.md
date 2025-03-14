__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 809,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 25,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 25,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 14,
        "end": 20,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 16,
          "end": 20
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 67,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 30,
          "end": 66,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 30,
            "end": 39,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 31,
              "end": 39,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 33,
                "end": 39
              }
            }
          },
          "init": {
            "type": "AssignmentExpression",
            "start": 43,
            "end": 65,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 43,
              "end": 61,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 43,
                "end": 46,
                "decorators": [],
                "name": "Foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 47,
                "end": 61,
                "decorators": [],
                "name": "inVariableInit",
                "optional": false
              }
            },
            "right": {
              "type": "Literal",
              "start": 64,
              "end": 65,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 70,
      "end": 119,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 115,
        "end": 119,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 82,
        "decorators": [],
        "name": "bar",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 83,
          "end": 113,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 83,
            "end": 84,
            "decorators": [],
            "name": "p",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "AssignmentExpression",
            "start": 88,
            "end": 112,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 88,
              "end": 108,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 88,
                "end": 91,
                "decorators": [],
                "name": "Foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 92,
                "end": 108,
                "decorators": [],
                "name": "inNestedFunction",
                "optional": false
              }
            },
            "right": {
              "type": "Literal",
              "start": 111,
              "end": 112,
              "raw": "1",
              "value": 1
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 121,
      "end": 180,
      "expression": {
        "type": "AssignmentExpression",
        "start": 121,
        "end": 179,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 121,
          "end": 146,
          "computed": false,
          "object": {
            "type": "AssignmentExpression",
            "start": 122,
            "end": 141,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 122,
              "end": 129,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 122,
                "end": 125,
                "decorators": [],
                "name": "Foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 126,
                "end": 129,
                "decorators": [],
                "name": "bla",
                "optional": false
              }
            },
            "right": {
              "type": "ObjectExpression",
              "start": 132,
              "end": 141,
              "properties": [
                {
                  "type": "Property",
                  "start": 134,
                  "end": 140,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 134,
                    "end": 137,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 139,
                    "end": 140,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 143,
            "end": 146,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 149,
          "end": 179,
          "operator": "+",
          "left": {
            "type": "AssignmentExpression",
            "start": 150,
            "end": 161,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 150,
              "end": 157,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 150,
                "end": 153,
                "decorators": [],
                "name": "Foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 154,
                "end": 157,
                "decorators": [],
                "name": "baz",
                "optional": false
              }
            },
            "right": {
              "type": "Literal",
              "start": 160,
              "end": 161,
              "raw": "1",
              "value": 1
            }
          },
          "right": {
            "type": "AssignmentExpression",
            "start": 166,
            "end": 178,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 166,
              "end": 173,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 166,
                "end": 169,
                "decorators": [],
                "name": "Foo",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 170,
                "end": 173,
                "decorators": [],
                "name": "bar",
                "optional": false
              }
            },
            "right": {
              "type": "Literal",
              "start": 177,
              "end": 178,
              "raw": "0",
              "value": 0
            }
          }
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 182,
      "end": 222,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 201,
        "end": 222,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 207,
            "end": 220,
            "expression": {
              "type": "AssignmentExpression",
              "start": 207,
              "end": 219,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 207,
                "end": 215,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 207,
                  "end": 210,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 215,
                  "decorators": [],
                  "name": "inIf",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 218,
                "end": 219,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "test": {
        "type": "AssignmentExpression",
        "start": 185,
        "end": 199,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 185,
          "end": 195,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 185,
            "end": 188,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 189,
            "end": 195,
            "decorators": [],
            "name": "fromIf",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 198,
          "end": 199,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "WhileStatement",
      "start": 224,
      "end": 337,
      "body": {
        "type": "BlockStatement",
        "start": 258,
        "end": 337,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 264,
            "end": 286,
            "expression": {
              "type": "AssignmentExpression",
              "start": 264,
              "end": 285,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 264,
                "end": 281,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 267,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 281,
                  "decorators": [],
                  "name": "fromWhileBody",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 284,
                "end": 285,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "BlockStatement",
            "start": 291,
            "end": 335,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 301,
                "end": 329,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 301,
                  "end": 328,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 301,
                    "end": 324,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 301,
                      "end": 304,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 305,
                      "end": 324,
                      "decorators": [],
                      "name": "fromWhileBodyNested",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 327,
                    "end": 328,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ]
          }
        ]
      },
      "test": {
        "type": "AssignmentExpression",
        "start": 230,
        "end": 256,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 230,
          "end": 252,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 230,
            "end": 233,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 234,
            "end": 252,
            "decorators": [],
            "name": "fromWhileCondition",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 255,
          "end": 256,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "DoWhileStatement",
      "start": 339,
      "end": 447,
      "body": {
        "type": "BlockStatement",
        "start": 342,
        "end": 415,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 348,
            "end": 367,
            "expression": {
              "type": "AssignmentExpression",
              "start": 348,
              "end": 366,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 348,
                "end": 362,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 351,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 352,
                  "end": 362,
                  "decorators": [],
                  "name": "fromDoBody",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 365,
                "end": 366,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "BlockStatement",
            "start": 372,
            "end": 413,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 382,
                "end": 407,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 382,
                  "end": 406,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 382,
                    "end": 402,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 382,
                      "end": 385,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 386,
                      "end": 402,
                      "decorators": [],
                      "name": "fromDoBodyNested",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 405,
                    "end": 406,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ]
          }
        ]
      },
      "test": {
        "type": "AssignmentExpression",
        "start": 422,
        "end": 445,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 422,
          "end": 441,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 422,
            "end": 425,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 426,
            "end": 441,
            "decorators": [],
            "name": "fromDoCondition",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 444,
          "end": 445,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ForStatement",
      "start": 449,
      "end": 584,
      "body": {
        "type": "BlockStatement",
        "start": 509,
        "end": 584,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 515,
            "end": 535,
            "expression": {
              "type": "AssignmentExpression",
              "start": 515,
              "end": 534,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 515,
                "end": 530,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 518,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 519,
                  "end": 530,
                  "decorators": [],
                  "name": "fromForBody",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 533,
                "end": 534,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "BlockStatement",
            "start": 540,
            "end": 582,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 550,
                "end": 576,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 550,
                  "end": 575,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 550,
                    "end": 571,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 550,
                      "end": 553,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 554,
                      "end": 571,
                      "decorators": [],
                      "name": "fromForBodyNested",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 574,
                    "end": 575,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ]
          }
        ]
      },
      "init": {
        "type": "AssignmentExpression",
        "start": 453,
        "end": 468,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 453,
          "end": 464,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 453,
            "end": 456,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 457,
            "end": 464,
            "decorators": [],
            "name": "forInit",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 467,
          "end": 468,
          "raw": "1",
          "value": 1
        }
      },
      "test": {
        "type": "BinaryExpression",
        "start": 470,
        "end": 491,
        "operator": ">",
        "left": {
          "type": "AssignmentExpression",
          "start": 471,
          "end": 486,
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "start": 471,
            "end": 482,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 471,
              "end": 474,
              "decorators": [],
              "name": "Foo",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 475,
              "end": 482,
              "decorators": [],
              "name": "forCond",
              "optional": false
            }
          },
          "right": {
            "type": "Literal",
            "start": 485,
            "end": 486,
            "raw": "1",
            "value": 1
          }
        },
        "right": {
          "type": "Literal",
          "start": 490,
          "end": 491,
          "raw": "1",
          "value": 1
        }
      },
      "update": {
        "type": "AssignmentExpression",
        "start": 493,
        "end": 508,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 493,
          "end": 504,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 493,
            "end": 496,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 497,
            "end": 504,
            "decorators": [],
            "name": "forIncr",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 507,
          "end": 508,
          "raw": "1",
          "value": 1
        }
      }
    },
    {
      "type": "ForOfStatement",
      "start": 586,
      "end": 696,
      "await": false,
      "body": {
        "type": "BlockStatement",
        "start": 617,
        "end": 696,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 623,
            "end": 645,
            "expression": {
              "type": "AssignmentExpression",
              "start": 623,
              "end": 644,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 623,
                "end": 640,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 623,
                  "end": 626,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 627,
                  "end": 640,
                  "decorators": [],
                  "name": "fromForOfBody",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 643,
                "end": 644,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "BlockStatement",
            "start": 650,
            "end": 694,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 660,
                "end": 688,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 660,
                  "end": 687,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 660,
                    "end": 683,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 660,
                      "end": 663,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 664,
                      "end": 683,
                      "decorators": [],
                      "name": "fromForOfBodyNested",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 686,
                    "end": 687,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ]
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 590,
        "end": 595,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 594,
            "end": 595,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 594,
              "end": 595,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "AssignmentExpression",
        "start": 600,
        "end": 614,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 600,
          "end": 609,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 600,
            "end": 603,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 604,
            "end": 609,
            "decorators": [],
            "name": "forOf",
            "optional": false
          }
        },
        "right": {
          "type": "ArrayExpression",
          "start": 612,
          "end": 614,
          "elements": []
        }
      }
    },
    {
      "type": "ForInStatement",
      "start": 699,
      "end": 809,
      "body": {
        "type": "BlockStatement",
        "start": 730,
        "end": 809,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 736,
            "end": 758,
            "expression": {
              "type": "AssignmentExpression",
              "start": 736,
              "end": 757,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 736,
                "end": 753,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 739,
                  "decorators": [],
                  "name": "Foo",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 740,
                  "end": 753,
                  "decorators": [],
                  "name": "fromForInBody",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 756,
                "end": 757,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "BlockStatement",
            "start": 763,
            "end": 807,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 773,
                "end": 801,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 773,
                  "end": 800,
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "start": 773,
                    "end": 796,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 773,
                      "end": 776,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 777,
                      "end": 796,
                      "decorators": [],
                      "name": "fromForInBodyNested",
                      "optional": false
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "start": 799,
                    "end": 800,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ]
          }
        ]
      },
      "left": {
        "type": "VariableDeclaration",
        "start": 703,
        "end": 708,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 707,
            "end": 708,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 707,
              "end": 708,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "right": {
        "type": "AssignmentExpression",
        "start": 713,
        "end": 727,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 713,
          "end": 722,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 713,
            "end": 716,
            "decorators": [],
            "name": "Foo",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 717,
            "end": 722,
            "decorators": [],
            "name": "forIn",
            "optional": false
          }
        },
        "right": {
          "type": "ArrayExpression",
          "start": 725,
          "end": 727,
          "elements": []
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
