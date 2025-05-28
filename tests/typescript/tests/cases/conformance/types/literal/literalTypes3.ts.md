__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1205,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 149,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 21,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 13,
            "end": 21,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 15,
              "end": 21
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 149,
        "body": [
          {
            "type": "IfStatement",
            "start": 29,
            "end": 74,
            "test": {
              "type": "BinaryExpression",
              "start": 33,
              "end": 44,
              "left": {
                "type": "Identifier",
                "start": 33,
                "end": 34,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 39,
                "end": 44,
                "value": "foo",
                "raw": "\"foo\""
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 46,
              "end": 74,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 56,
                  "end": 58,
                  "expression": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 79,
            "end": 147,
            "test": {
              "type": "LogicalExpression",
              "start": 83,
              "end": 109,
              "left": {
                "type": "BinaryExpression",
                "start": 83,
                "end": 94,
                "left": {
                  "type": "Identifier",
                  "start": 83,
                  "end": 84,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 89,
                  "end": 94,
                  "value": "foo",
                  "raw": "\"foo\""
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 98,
                "end": 109,
                "left": {
                  "type": "Identifier",
                  "start": 98,
                  "end": 99,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 104,
                  "end": 109,
                  "value": "bar",
                  "raw": "\"bar\""
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 111,
              "end": 147,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 121,
                  "end": 123,
                  "expression": {
                    "type": "Identifier",
                    "start": 121,
                    "end": 122,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 151,
      "end": 396,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 162,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 163,
          "end": 172,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 164,
            "end": 172,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 166,
              "end": 172
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 174,
        "end": 396,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 180,
            "end": 394,
            "discriminant": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 201,
                "end": 212,
                "test": {
                  "type": "Literal",
                  "start": 206,
                  "end": 211,
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 221,
                "end": 247,
                "test": {
                  "type": "Literal",
                  "start": 226,
                  "end": 231,
                  "value": "bar",
                  "raw": "\"bar\""
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 245,
                    "end": 247,
                    "expression": {
                      "type": "Identifier",
                      "start": 245,
                      "end": 246,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 274,
                "end": 345,
                "test": {
                  "type": "Literal",
                  "start": 279,
                  "end": 284,
                  "value": "baz",
                  "raw": "\"baz\""
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 298,
                    "end": 300,
                    "expression": {
                      "type": "Identifier",
                      "start": 298,
                      "end": 299,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 339,
                    "end": 345,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 354,
                "end": 377,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 375,
                    "end": 377,
                    "expression": {
                      "type": "Identifier",
                      "start": 375,
                      "end": 376,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 398,
      "end": 509,
      "id": {
        "type": "Identifier",
        "start": 407,
        "end": 409,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 410,
          "end": 419,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 411,
            "end": 419,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 413,
              "end": 419
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 421,
        "end": 509,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 427,
            "end": 477,
            "argument": {
              "type": "ConditionalExpression",
              "start": 434,
              "end": 476,
              "test": {
                "type": "LogicalExpression",
                "start": 434,
                "end": 460,
                "left": {
                  "type": "BinaryExpression",
                  "start": 434,
                  "end": 445,
                  "left": {
                    "type": "Identifier",
                    "start": 434,
                    "end": 435,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 440,
                    "end": 445,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                },
                "operator": "||",
                "right": {
                  "type": "BinaryExpression",
                  "start": 449,
                  "end": 460,
                  "left": {
                    "type": "Identifier",
                    "start": 449,
                    "end": 450,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 455,
                    "end": 460,
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                }
              },
              "consequent": {
                "type": "Identifier",
                "start": 463,
                "end": 464,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              },
              "alternate": {
                "type": "Identifier",
                "start": 467,
                "end": 476,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 511,
      "end": 624,
      "id": {
        "type": "Identifier",
        "start": 520,
        "end": 522,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 523,
          "end": 532,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 524,
            "end": 532,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 526,
              "end": 532
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 534,
        "end": 624,
        "body": [
          {
            "type": "IfStatement",
            "start": 540,
            "end": 599,
            "test": {
              "type": "LogicalExpression",
              "start": 544,
              "end": 562,
              "left": {
                "type": "BinaryExpression",
                "start": 544,
                "end": 551,
                "left": {
                  "type": "Identifier",
                  "start": 544,
                  "end": 545,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 550,
                  "end": 551,
                  "value": 1,
                  "raw": "1"
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 555,
                "end": 562,
                "left": {
                  "type": "Identifier",
                  "start": 555,
                  "end": 556,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 561,
                  "end": 562,
                  "value": 2,
                  "raw": "2"
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 564,
              "end": 599,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 574,
                  "end": 583,
                  "argument": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 582,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ThrowStatement",
            "start": 604,
            "end": 622,
            "argument": {
              "type": "NewExpression",
              "start": 610,
              "end": 621,
              "callee": {
                "type": "Identifier",
                "start": 614,
                "end": 619,
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 626,
      "end": 723,
      "id": {
        "type": "Identifier",
        "start": 635,
        "end": 637,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 638,
          "end": 647,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 639,
            "end": 647,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 641,
              "end": 647
            }
          }
        },
        {
          "type": "Identifier",
          "start": 649,
          "end": 657,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 650,
            "end": 657,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 652,
              "end": 657,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 652,
                  "end": 653,
                  "literal": {
                    "type": "Literal",
                    "start": 652,
                    "end": 653,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 656,
                  "end": 657,
                  "literal": {
                    "type": "Literal",
                    "start": 656,
                    "end": 657,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 659,
        "end": 723,
        "body": [
          {
            "type": "IfStatement",
            "start": 665,
            "end": 721,
            "test": {
              "type": "LogicalExpression",
              "start": 669,
              "end": 687,
              "left": {
                "type": "BinaryExpression",
                "start": 669,
                "end": 676,
                "left": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 670,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 675,
                  "end": 676,
                  "value": 0,
                  "raw": "0"
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 680,
                "end": 687,
                "left": {
                  "type": "Identifier",
                  "start": 680,
                  "end": 681,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "start": 686,
                  "end": 687,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 689,
              "end": 721,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 699,
                  "end": 701,
                  "expression": {
                    "type": "Identifier",
                    "start": 699,
                    "end": 700,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 725,
      "end": 822,
      "id": {
        "type": "Identifier",
        "start": 734,
        "end": 736,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 737,
          "end": 746,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 738,
            "end": 746,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 740,
              "end": 746
            }
          }
        },
        {
          "type": "Identifier",
          "start": 748,
          "end": 756,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 749,
            "end": 756,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 751,
              "end": 756,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 751,
                  "end": 752,
                  "literal": {
                    "type": "Literal",
                    "start": 751,
                    "end": 752,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 755,
                  "end": 756,
                  "literal": {
                    "type": "Literal",
                    "start": 755,
                    "end": 756,
                    "value": 2,
                    "raw": "2"
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 758,
        "end": 822,
        "body": [
          {
            "type": "IfStatement",
            "start": 764,
            "end": 820,
            "test": {
              "type": "LogicalExpression",
              "start": 768,
              "end": 786,
              "left": {
                "type": "BinaryExpression",
                "start": 768,
                "end": 775,
                "left": {
                  "type": "Identifier",
                  "start": 768,
                  "end": 769,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "start": 774,
                  "end": 775,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "start": 779,
                "end": 786,
                "left": {
                  "type": "Literal",
                  "start": 779,
                  "end": 780,
                  "value": 0,
                  "raw": "0"
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "start": 785,
                  "end": 786,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 788,
              "end": 820,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 798,
                  "end": 800,
                  "expression": {
                    "type": "Identifier",
                    "start": 798,
                    "end": 799,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 824,
      "end": 947,
      "id": {
        "type": "Identifier",
        "start": 833,
        "end": 835,
        "decorators": [],
        "name": "f7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 836,
          "end": 861,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 837,
            "end": 861,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 839,
              "end": 861,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 839,
                  "end": 845
                },
                {
                  "type": "TSLiteralType",
                  "start": 848,
                  "end": 853,
                  "literal": {
                    "type": "Literal",
                    "start": 848,
                    "end": 853,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 856,
                  "end": 861,
                  "literal": {
                    "type": "Literal",
                    "start": 856,
                    "end": 861,
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 863,
          "end": 880,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 864,
            "end": 880,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 866,
              "end": 880,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 866,
                  "end": 867,
                  "literal": {
                    "type": "Literal",
                    "start": 866,
                    "end": 867,
                    "value": 1,
                    "raw": "1"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 870,
                  "end": 871,
                  "literal": {
                    "type": "Literal",
                    "start": 870,
                    "end": 871,
                    "value": 2,
                    "raw": "2"
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 874,
                  "end": 880
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 882,
        "end": 947,
        "body": [
          {
            "type": "IfStatement",
            "start": 888,
            "end": 945,
            "test": {
              "type": "BinaryExpression",
              "start": 892,
              "end": 899,
              "left": {
                "type": "Identifier",
                "start": 892,
                "end": 893,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 898,
                "end": 899,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 901,
              "end": 945,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 911,
                  "end": 913,
                  "expression": {
                    "type": "Identifier",
                    "start": 911,
                    "end": 912,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 949,
      "end": 1205,
      "id": {
        "type": "Identifier",
        "start": 958,
        "end": 960,
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 961,
          "end": 986,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 962,
            "end": 986,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 964,
              "end": 986,
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 964,
                  "end": 970
                },
                {
                  "type": "TSLiteralType",
                  "start": 973,
                  "end": 978,
                  "literal": {
                    "type": "Literal",
                    "start": 973,
                    "end": 978,
                    "value": "foo",
                    "raw": "\"foo\""
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 981,
                  "end": 986,
                  "literal": {
                    "type": "Literal",
                    "start": 981,
                    "end": 986,
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 988,
        "end": 1205,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 994,
            "end": 1203,
            "discriminant": {
              "type": "Identifier",
              "start": 1002,
              "end": 1003,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 1015,
                "end": 1022,
                "test": {
                  "type": "Literal",
                  "start": 1020,
                  "end": 1021,
                  "value": 1,
                  "raw": "1"
                },
                "consequent": []
              },
              {
                "type": "SwitchCase",
                "start": 1031,
                "end": 1082,
                "test": {
                  "type": "Literal",
                  "start": 1036,
                  "end": 1037,
                  "value": 2,
                  "raw": "2"
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1051,
                    "end": 1053,
                    "expression": {
                      "type": "Identifier",
                      "start": 1051,
                      "end": 1052,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1076,
                    "end": 1082,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1091,
                "end": 1146,
                "test": {
                  "type": "Literal",
                  "start": 1096,
                  "end": 1101,
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1115,
                    "end": 1117,
                    "expression": {
                      "type": "Identifier",
                      "start": 1115,
                      "end": 1116,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 1140,
                    "end": 1146,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 1155,
                "end": 1178,
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1176,
                    "end": 1178,
                    "expression": {
                      "type": "Identifier",
                      "start": 1176,
                      "end": 1177,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
