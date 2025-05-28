__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 804,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 19,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 18,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 18,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 18,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 15,
                "end": 18
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 21,
      "end": 94,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 33,
        "decorators": [],
        "name": "t1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 36,
        "end": 94,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 42,
            "end": 92,
            "expression": {
              "type": "YieldExpression",
              "start": 42,
              "end": 91,
              "delegate": false,
              "argument": {
                "type": "TSAsExpression",
                "start": 77,
                "end": 85,
                "expression": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 78,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 82,
                  "end": 85
                }
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 95,
      "end": 172,
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 107,
        "decorators": [],
        "name": "t2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 110,
        "end": 172,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 116,
            "end": 170,
            "expression": {
              "type": "YieldExpression",
              "start": 116,
              "end": 169,
              "delegate": false,
              "argument": {
                "type": "BinaryExpression",
                "start": 122,
                "end": 169,
                "left": {
                  "type": "TSAsExpression",
                  "start": 151,
                  "end": 159,
                  "expression": {
                    "type": "Identifier",
                    "start": 151,
                    "end": 152,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 156,
                    "end": 159
                  }
                },
                "operator": "+",
                "right": {
                  "type": "Literal",
                  "start": 168,
                  "end": 169,
                  "value": 1,
                  "raw": "1"
                }
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 173,
      "end": 254,
      "id": {
        "type": "Identifier",
        "start": 183,
        "end": 185,
        "decorators": [],
        "name": "t3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 188,
        "end": 254,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 194,
            "end": 252,
            "expression": {
              "type": "YieldExpression",
              "start": 194,
              "end": 251,
              "delegate": false,
              "argument": {
                "type": "ConditionalExpression",
                "start": 200,
                "end": 251,
                "test": {
                  "type": "TSAsExpression",
                  "start": 229,
                  "end": 237,
                  "expression": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 230,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 234,
                    "end": 237
                  }
                },
                "consequent": {
                  "type": "Literal",
                  "start": 246,
                  "end": 247,
                  "value": 0,
                  "raw": "0"
                },
                "alternate": {
                  "type": "Literal",
                  "start": 250,
                  "end": 251,
                  "value": 1,
                  "raw": "1"
                }
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 255,
      "end": 330,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 267,
        "decorators": [],
        "name": "t4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 270,
        "end": 330,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 276,
            "end": 328,
            "expression": {
              "type": "YieldExpression",
              "start": 276,
              "end": 327,
              "delegate": false,
              "argument": {
                "type": "MemberExpression",
                "start": 282,
                "end": 327,
                "object": {
                  "type": "TSAsExpression",
                  "start": 311,
                  "end": 319,
                  "expression": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 312,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 316,
                    "end": 319
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 326,
                  "end": 327,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 331,
      "end": 407,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 343,
        "decorators": [],
        "name": "t5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 346,
        "end": 407,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 352,
            "end": 405,
            "expression": {
              "type": "YieldExpression",
              "start": 352,
              "end": 404,
              "delegate": false,
              "argument": {
                "type": "MemberExpression",
                "start": 358,
                "end": 404,
                "object": {
                  "type": "TSAsExpression",
                  "start": 387,
                  "end": 395,
                  "expression": {
                    "type": "Identifier",
                    "start": 387,
                    "end": 388,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 392,
                    "end": 395
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 403,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 408,
      "end": 483,
      "id": {
        "type": "Identifier",
        "start": 418,
        "end": 420,
        "decorators": [],
        "name": "t6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 423,
        "end": 483,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 429,
            "end": 481,
            "expression": {
              "type": "YieldExpression",
              "start": 429,
              "end": 480,
              "delegate": false,
              "argument": {
                "type": "CallExpression",
                "start": 435,
                "end": 480,
                "callee": {
                  "type": "TSAsExpression",
                  "start": 464,
                  "end": 472,
                  "expression": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 465,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 469,
                    "end": 472
                  }
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 484,
      "end": 559,
      "id": {
        "type": "Identifier",
        "start": 494,
        "end": 496,
        "decorators": [],
        "name": "t7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 499,
        "end": 559,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 505,
            "end": 557,
            "expression": {
              "type": "YieldExpression",
              "start": 505,
              "end": 556,
              "delegate": false,
              "argument": {
                "type": "TaggedTemplateExpression",
                "start": 511,
                "end": 556,
                "tag": {
                  "type": "TSAsExpression",
                  "start": 540,
                  "end": 548,
                  "expression": {
                    "type": "Identifier",
                    "start": 540,
                    "end": 541,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 545,
                    "end": 548
                  }
                },
                "typeArguments": null,
                "quasi": {
                  "type": "TemplateLiteral",
                  "start": 554,
                  "end": 556,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 554,
                      "end": 556,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      },
                      "tail": true
                    }
                  ],
                  "expressions": []
                }
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 560,
      "end": 640,
      "id": {
        "type": "Identifier",
        "start": 570,
        "end": 572,
        "decorators": [],
        "name": "t8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 575,
        "end": 640,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 581,
            "end": 638,
            "expression": {
              "type": "YieldExpression",
              "start": 581,
              "end": 637,
              "delegate": false,
              "argument": {
                "type": "TSAsExpression",
                "start": 587,
                "end": 637,
                "expression": {
                  "type": "TSAsExpression",
                  "start": 616,
                  "end": 624,
                  "expression": {
                    "type": "Identifier",
                    "start": 616,
                    "end": 617,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 621,
                    "end": 624
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 634,
                  "end": 637
                }
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 641,
      "end": 728,
      "id": {
        "type": "Identifier",
        "start": 651,
        "end": 653,
        "decorators": [],
        "name": "t9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 656,
        "end": 728,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 662,
            "end": 726,
            "expression": {
              "type": "YieldExpression",
              "start": 662,
              "end": 725,
              "delegate": false,
              "argument": {
                "type": "TSSatisfiesExpression",
                "start": 668,
                "end": 725,
                "expression": {
                  "type": "TSAsExpression",
                  "start": 697,
                  "end": 705,
                  "expression": {
                    "type": "Identifier",
                    "start": 697,
                    "end": 698,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 702,
                    "end": 705
                  }
                },
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 722,
                  "end": 725
                }
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 729,
      "end": 804,
      "id": {
        "type": "Identifier",
        "start": 739,
        "end": 742,
        "decorators": [],
        "name": "t10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 745,
        "end": 804,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 751,
            "end": 802,
            "expression": {
              "type": "YieldExpression",
              "start": 751,
              "end": 801,
              "delegate": false,
              "argument": {
                "type": "TSNonNullExpression",
                "start": 757,
                "end": 801,
                "expression": {
                  "type": "TSAsExpression",
                  "start": 786,
                  "end": 794,
                  "expression": {
                    "type": "Identifier",
                    "start": 786,
                    "end": 787,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 791,
                    "end": 794
                  }
                }
              }
            },
            "directive": null
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
