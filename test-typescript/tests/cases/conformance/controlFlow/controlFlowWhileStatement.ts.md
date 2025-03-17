__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1915,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 17,
            "name": "cond",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 8,
              "end": 17,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 10,
                "end": 17
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 19,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "name": "a",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 32,
        "end": 121,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 38,
            "end": 61,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 42,
                "end": 60,
                "id": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 60,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 43,
                    "end": 60,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 45,
                      "end": 60,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 45,
                          "end": 51
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 54,
                          "end": 60
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 66,
            "end": 73,
            "expression": {
              "type": "AssignmentExpression",
              "start": 66,
              "end": 72,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 70,
                "end": 72,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 78,
            "end": 119,
            "test": {
              "type": "Identifier",
              "start": 85,
              "end": 89,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 91,
              "end": 119,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 101,
                  "end": 103,
                  "expression": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 102,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 122,
      "end": 255,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 132,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 135,
        "end": 255,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 141,
            "end": 164,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 145,
                "end": 163,
                "id": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 163,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 146,
                    "end": 163,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 148,
                      "end": 163,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 148,
                          "end": 154
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 157,
                          "end": 163
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 169,
            "end": 176,
            "expression": {
              "type": "AssignmentExpression",
              "start": 169,
              "end": 175,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 173,
                "end": 175,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 181,
            "end": 253,
            "test": {
              "type": "Identifier",
              "start": 188,
              "end": 192,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 194,
              "end": 253,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 204,
                  "end": 206,
                  "expression": {
                    "type": "Identifier",
                    "start": 204,
                    "end": 205,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 225,
                  "end": 232,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 225,
                    "end": 231,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 226,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 229,
                      "end": 231,
                      "value": 42,
                      "raw": "42"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "BreakStatement",
                  "start": 241,
                  "end": 247,
                  "label": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 256,
      "end": 441,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 266,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 269,
        "end": 441,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 275,
            "end": 298,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 279,
                "end": 297,
                "id": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 297,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 280,
                    "end": 297,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 282,
                      "end": 297,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 282,
                          "end": 288
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 291,
                          "end": 297
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 303,
            "end": 310,
            "expression": {
              "type": "AssignmentExpression",
              "start": 303,
              "end": 309,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 303,
                "end": 304,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 307,
                "end": 309,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 315,
            "end": 439,
            "test": {
              "type": "Identifier",
              "start": 322,
              "end": 326,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 328,
              "end": 439,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 338,
                  "end": 340,
                  "expression": {
                    "type": "Identifier",
                    "start": 338,
                    "end": 339,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 359,
                  "end": 373,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 359,
                    "end": 372,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 359,
                      "end": 360,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 363,
                      "end": 372,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 382,
                  "end": 418,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 386,
                    "end": 407,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 386,
                      "end": 394,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 393,
                        "end": 394,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 399,
                      "end": 407,
                      "value": "string",
                      "raw": "\"string\""
                    }
                  },
                  "consequent": {
                    "type": "ContinueStatement",
                    "start": 409,
                    "end": 418,
                    "label": null
                  },
                  "alternate": null
                },
                {
                  "type": "BreakStatement",
                  "start": 427,
                  "end": 433,
                  "label": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 442,
      "end": 568,
      "id": {
        "type": "Identifier",
        "start": 451,
        "end": 452,
        "name": "d",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 455,
        "end": 568,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 461,
            "end": 484,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 465,
                "end": 483,
                "id": {
                  "type": "Identifier",
                  "start": 465,
                  "end": 483,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 466,
                    "end": 483,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 468,
                      "end": 483,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 468,
                          "end": 474
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 477,
                          "end": 483
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 489,
            "end": 496,
            "expression": {
              "type": "AssignmentExpression",
              "start": 489,
              "end": 495,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 489,
                "end": 490,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 493,
                "end": 495,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 501,
            "end": 566,
            "test": {
              "type": "AssignmentExpression",
              "start": 508,
              "end": 520,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 508,
                "end": 509,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "MemberExpression",
                "start": 512,
                "end": 520,
                "object": {
                  "type": "Identifier",
                  "start": 512,
                  "end": 513,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 514,
                  "end": 520,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 522,
              "end": 566,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 532,
                  "end": 534,
                  "expression": {
                    "type": "Identifier",
                    "start": 532,
                    "end": 533,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 553,
                  "end": 560,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 553,
                    "end": 559,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 553,
                      "end": 554,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 557,
                      "end": 559,
                      "value": "",
                      "raw": "\"\""
                    }
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 569,
      "end": 743,
      "id": {
        "type": "Identifier",
        "start": 578,
        "end": 579,
        "name": "e",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 582,
        "end": 743,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 588,
            "end": 611,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 592,
                "end": 610,
                "id": {
                  "type": "Identifier",
                  "start": 592,
                  "end": 610,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 593,
                    "end": 610,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 595,
                      "end": 610,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 595,
                          "end": 601
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 604,
                          "end": 610
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 616,
            "end": 623,
            "expression": {
              "type": "AssignmentExpression",
              "start": 616,
              "end": 622,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 616,
                "end": 617,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 620,
                "end": 622,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 628,
            "end": 715,
            "test": {
              "type": "Identifier",
              "start": 635,
              "end": 639,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 641,
              "end": 715,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 651,
                  "end": 653,
                  "expression": {
                    "type": "Identifier",
                    "start": 651,
                    "end": 652,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 681,
                  "end": 688,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 681,
                    "end": 687,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 681,
                      "end": 682,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 685,
                      "end": 687,
                      "value": 42,
                      "raw": "42"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 697,
                  "end": 699,
                  "expression": {
                    "type": "Identifier",
                    "start": 697,
                    "end": 698,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 720,
            "end": 722,
            "expression": {
              "type": "Identifier",
              "start": 720,
              "end": 721,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 744,
      "end": 1060,
      "id": {
        "type": "Identifier",
        "start": 753,
        "end": 754,
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 757,
        "end": 1060,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 763,
            "end": 816,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 767,
                "end": 815,
                "id": {
                  "type": "Identifier",
                  "start": 767,
                  "end": 815,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 768,
                    "end": 815,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 770,
                      "end": 815,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 770,
                          "end": 776
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 779,
                          "end": 785
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 788,
                          "end": 795
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 798,
                          "end": 804,
                          "typeName": {
                            "type": "Identifier",
                            "start": 798,
                            "end": 804,
                            "name": "RegExp",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 807,
                          "end": 815,
                          "typeName": {
                            "type": "Identifier",
                            "start": 807,
                            "end": 815,
                            "name": "Function",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 821,
            "end": 828,
            "expression": {
              "type": "AssignmentExpression",
              "start": 821,
              "end": 827,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 821,
                "end": 822,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 825,
                "end": 827,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 833,
            "end": 1013,
            "test": {
              "type": "Identifier",
              "start": 840,
              "end": 844,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 846,
              "end": 1013,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 856,
                  "end": 916,
                  "test": {
                    "type": "Identifier",
                    "start": 860,
                    "end": 864,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 866,
                    "end": 916,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 880,
                        "end": 887,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 880,
                          "end": 886,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 880,
                            "end": 881,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 884,
                            "end": 886,
                            "value": 42,
                            "raw": "42"
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "BreakStatement",
                        "start": 900,
                        "end": 906,
                        "label": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "start": 925,
                  "end": 990,
                  "test": {
                    "type": "Identifier",
                    "start": 929,
                    "end": 933,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 935,
                    "end": 990,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 949,
                        "end": 958,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 949,
                          "end": 957,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 949,
                            "end": 950,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 953,
                            "end": 957,
                            "value": true,
                            "raw": "true"
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ContinueStatement",
                        "start": 971,
                        "end": 980,
                        "label": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 999,
                  "end": 1007,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 999,
                    "end": 1006,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 999,
                      "end": 1000,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1003,
                      "end": 1006,
                      "value": null,
                      "raw": "/a/",
                      "regex": {
                        "flags": "",
                        "pattern": "a"
                      }
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1018,
            "end": 1020,
            "expression": {
              "type": "Identifier",
              "start": 1018,
              "end": 1019,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1061,
      "end": 1349,
      "id": {
        "type": "Identifier",
        "start": 1070,
        "end": 1071,
        "name": "g",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1074,
        "end": 1349,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1080,
            "end": 1133,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1084,
                "end": 1132,
                "id": {
                  "type": "Identifier",
                  "start": 1084,
                  "end": 1132,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1085,
                    "end": 1132,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1087,
                      "end": 1132,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1087,
                          "end": 1093
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1096,
                          "end": 1102
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1105,
                          "end": 1112
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1115,
                          "end": 1121,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1115,
                            "end": 1121,
                            "name": "RegExp",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 1124,
                          "end": 1132,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1124,
                            "end": 1132,
                            "name": "Function",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1138,
            "end": 1145,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1138,
              "end": 1144,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1138,
                "end": 1139,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1142,
                "end": 1144,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 1150,
            "end": 1330,
            "test": {
              "type": "Literal",
              "start": 1157,
              "end": 1161,
              "value": true,
              "raw": "true"
            },
            "body": {
              "type": "BlockStatement",
              "start": 1163,
              "end": 1330,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 1173,
                  "end": 1233,
                  "test": {
                    "type": "Identifier",
                    "start": 1177,
                    "end": 1181,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1183,
                    "end": 1233,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1197,
                        "end": 1204,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1197,
                          "end": 1203,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1197,
                            "end": 1198,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 1201,
                            "end": 1203,
                            "value": 42,
                            "raw": "42"
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "BreakStatement",
                        "start": 1217,
                        "end": 1223,
                        "label": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "start": 1242,
                  "end": 1307,
                  "test": {
                    "type": "Identifier",
                    "start": 1246,
                    "end": 1250,
                    "name": "cond",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1252,
                    "end": 1307,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1266,
                        "end": 1275,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 1266,
                          "end": 1274,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 1266,
                            "end": 1267,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 1270,
                            "end": 1274,
                            "value": true,
                            "raw": "true"
                          }
                        },
                        "directive": null
                      },
                      {
                        "type": "ContinueStatement",
                        "start": 1288,
                        "end": 1297,
                        "label": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1316,
                  "end": 1324,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1316,
                    "end": 1323,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1316,
                      "end": 1317,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1320,
                      "end": 1323,
                      "value": null,
                      "raw": "/a/",
                      "regex": {
                        "flags": "",
                        "pattern": "a"
                      }
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1335,
            "end": 1337,
            "expression": {
              "type": "Identifier",
              "start": 1335,
              "end": 1336,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1350,
      "end": 1535,
      "id": {
        "type": "Identifier",
        "start": 1359,
        "end": 1361,
        "name": "h1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1364,
        "end": 1535,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1370,
            "end": 1403,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1374,
                "end": 1402,
                "id": {
                  "type": "Identifier",
                  "start": 1374,
                  "end": 1402,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1375,
                    "end": 1402,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1377,
                      "end": 1402,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1377,
                          "end": 1383
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1386,
                          "end": 1392
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1395,
                          "end": 1402
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1408,
            "end": 1415,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1408,
              "end": 1414,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1408,
                "end": 1409,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1412,
                "end": 1414,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 1420,
            "end": 1507,
            "test": {
              "type": "BinaryExpression",
              "start": 1427,
              "end": 1432,
              "left": {
                "type": "Identifier",
                "start": 1427,
                "end": 1428,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": ">",
              "right": {
                "type": "Literal",
                "start": 1431,
                "end": 1432,
                "value": 1,
                "raw": "1"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 1434,
              "end": 1507,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1444,
                  "end": 1446,
                  "expression": {
                    "type": "Identifier",
                    "start": 1444,
                    "end": 1445,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1474,
                  "end": 1480,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1474,
                    "end": 1479,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1474,
                      "end": 1475,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 1478,
                      "end": 1479,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1489,
                  "end": 1491,
                  "expression": {
                    "type": "Identifier",
                    "start": 1489,
                    "end": 1490,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1512,
            "end": 1514,
            "expression": {
              "type": "Identifier",
              "start": 1512,
              "end": 1513,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1536,
      "end": 1585,
      "id": {
        "type": "Identifier",
        "start": 1553,
        "end": 1556,
        "name": "len",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1557,
          "end": 1575,
          "name": "s",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1558,
            "end": 1575,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1560,
              "end": 1575,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1560,
                  "end": 1566
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1569,
                  "end": 1575
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1576,
        "end": 1584,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 1578,
          "end": 1584
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1586,
      "end": 1745,
      "id": {
        "type": "Identifier",
        "start": 1595,
        "end": 1597,
        "name": "h2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1600,
        "end": 1745,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1606,
            "end": 1639,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1610,
                "end": 1638,
                "id": {
                  "type": "Identifier",
                  "start": 1610,
                  "end": 1638,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1611,
                    "end": 1638,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1613,
                      "end": 1638,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1613,
                          "end": 1619
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1622,
                          "end": 1628
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1631,
                          "end": 1638
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1644,
            "end": 1651,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1644,
              "end": 1650,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1644,
                "end": 1645,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1648,
                "end": 1650,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 1656,
            "end": 1717,
            "test": {
              "type": "Identifier",
              "start": 1663,
              "end": 1667,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 1669,
              "end": 1717,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1679,
                  "end": 1690,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1679,
                    "end": 1689,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1679,
                      "end": 1680,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 1683,
                      "end": 1689,
                      "callee": {
                        "type": "Identifier",
                        "start": 1683,
                        "end": 1686,
                        "name": "len",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1687,
                          "end": 1688,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1699,
                  "end": 1701,
                  "expression": {
                    "type": "Identifier",
                    "start": 1699,
                    "end": 1700,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1722,
            "end": 1724,
            "expression": {
              "type": "Identifier",
              "start": 1722,
              "end": 1723,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1746,
      "end": 1914,
      "id": {
        "type": "Identifier",
        "start": 1755,
        "end": 1757,
        "name": "h3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 1760,
        "end": 1914,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1766,
            "end": 1799,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1770,
                "end": 1798,
                "id": {
                  "type": "Identifier",
                  "start": 1770,
                  "end": 1798,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1771,
                    "end": 1798,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 1773,
                      "end": 1798,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1773,
                          "end": 1779
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 1782,
                          "end": 1788
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 1791,
                          "end": 1798
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 1804,
            "end": 1811,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1804,
              "end": 1810,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1804,
                "end": 1805,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 1808,
                "end": 1810,
                "value": "",
                "raw": "\"\""
              }
            },
            "directive": null
          },
          {
            "type": "WhileStatement",
            "start": 1816,
            "end": 1886,
            "test": {
              "type": "Identifier",
              "start": 1823,
              "end": 1827,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 1829,
              "end": 1886,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1839,
                  "end": 1841,
                  "expression": {
                    "type": "Identifier",
                    "start": 1839,
                    "end": 1840,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1869,
                  "end": 1880,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1869,
                    "end": 1879,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1869,
                      "end": 1870,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "CallExpression",
                      "start": 1873,
                      "end": 1879,
                      "callee": {
                        "type": "Identifier",
                        "start": 1873,
                        "end": 1876,
                        "name": "len",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1877,
                          "end": 1878,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1891,
            "end": 1893,
            "expression": {
              "type": "Identifier",
              "start": 1891,
              "end": 1892,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
