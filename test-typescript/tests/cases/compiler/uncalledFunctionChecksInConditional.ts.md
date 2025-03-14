__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 870,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 34,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "decorators": [],
        "name": "isFoo",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 24,
        "end": 33,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 26,
          "end": 33
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 35,
      "end": 69,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 57,
        "decorators": [],
        "name": "isBar",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 59,
        "end": 68,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 61,
          "end": 68
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 84,
          "end": 127,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 127,
            "decorators": [],
            "name": "isUndefinedFoo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 127,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 100,
                "end": 127,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 101,
                    "end": 114,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 104,
                      "end": 114,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 107,
                        "end": 114
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 118,
                    "end": 127
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
      "start": 130,
      "end": 166,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 141,
        "end": 166,
        "body": []
      },
      "test": {
        "type": "Identifier",
        "start": 134,
        "end": 139,
        "decorators": [],
        "name": "isFoo",
        "optional": false
      }
    },
    {
      "type": "IfStatement",
      "start": 168,
      "end": 220,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 188,
        "end": 220,
        "body": []
      },
      "test": {
        "type": "LogicalExpression",
        "start": 172,
        "end": 186,
        "operator": "||",
        "left": {
          "type": "Identifier",
          "start": 172,
          "end": 177,
          "decorators": [],
          "name": "isFoo",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 181,
          "end": 186,
          "decorators": [],
          "name": "isBar",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 222,
      "end": 269,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 244,
        "end": 269,
        "body": []
      },
      "test": {
        "type": "LogicalExpression",
        "start": 226,
        "end": 242,
        "operator": "||",
        "left": {
          "type": "Identifier",
          "start": 226,
          "end": 231,
          "decorators": [],
          "name": "isFoo",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 235,
          "end": 242,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 235,
            "end": 240,
            "decorators": [],
            "name": "isFoo",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 271,
      "end": 321,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 302,
        "end": 321,
        "body": []
      },
      "test": {
        "type": "LogicalExpression",
        "start": 275,
        "end": 300,
        "operator": "||",
        "left": {
          "type": "Identifier",
          "start": 275,
          "end": 289,
          "decorators": [],
          "name": "isUndefinedFoo",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 293,
          "end": 300,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 293,
            "end": 298,
            "decorators": [],
            "name": "isFoo",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 323,
      "end": 364,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 345,
        "end": 364,
        "body": []
      },
      "test": {
        "type": "LogicalExpression",
        "start": 327,
        "end": 343,
        "operator": "&&",
        "left": {
          "type": "Identifier",
          "start": 327,
          "end": 332,
          "decorators": [],
          "name": "isFoo",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 336,
          "end": 343,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 336,
            "end": 341,
            "decorators": [],
            "name": "isFoo",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 366,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 380,
          "end": 390,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 380,
            "end": 390,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 381,
              "end": 390,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 383,
                "end": 390
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
      "type": "VariableDeclaration",
      "start": 392,
      "end": 430,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 429,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 429,
            "decorators": [],
            "name": "ux",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 408,
              "end": 429,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 410,
                "end": 429,
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 410,
                    "end": 417
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 420,
                    "end": 429
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
      "type": "VariableDeclaration",
      "start": 431,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 445,
          "end": 455,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 455,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 446,
              "end": 455,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 448,
                "end": 455
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
      "type": "VariableDeclaration",
      "start": 457,
      "end": 495,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 471,
          "end": 494,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 471,
            "end": 494,
            "decorators": [],
            "name": "uy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 473,
              "end": 494,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 475,
                "end": 494,
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 475,
                    "end": 482
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 485,
                    "end": 494
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
      "type": "TSDeclareFunction",
      "start": 496,
      "end": 526,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 514,
        "decorators": [],
        "name": "z",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 516,
        "end": 525,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 518,
          "end": 525
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 527,
      "end": 573,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 541,
          "end": 572,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 572,
            "decorators": [],
            "name": "uz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 543,
              "end": 572,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 545,
                "end": 572,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 546,
                    "end": 559,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 549,
                      "end": 559,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 552,
                        "end": 559
                      }
                    }
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 563,
                    "end": 572
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
      "start": 575,
      "end": 616,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 591,
        "end": 616,
        "body": []
      },
      "test": {
        "type": "LogicalExpression",
        "start": 579,
        "end": 589,
        "operator": "||",
        "left": {
          "type": "Identifier",
          "start": 579,
          "end": 580,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 584,
          "end": 589,
          "decorators": [],
          "name": "isFoo",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 618,
      "end": 659,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 634,
        "end": 659,
        "body": []
      },
      "test": {
        "type": "LogicalExpression",
        "start": 622,
        "end": 632,
        "operator": "||",
        "left": {
          "type": "Identifier",
          "start": 622,
          "end": 627,
          "decorators": [],
          "name": "isFoo",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 631,
          "end": 632,
          "decorators": [],
          "name": "x",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 661,
      "end": 714,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 689,
        "end": 714,
        "body": []
      },
      "test": {
        "type": "LogicalExpression",
        "start": 665,
        "end": 687,
        "operator": "||",
        "left": {
          "type": "LogicalExpression",
          "start": 665,
          "end": 678,
          "operator": "||",
          "left": {
            "type": "LogicalExpression",
            "start": 665,
            "end": 671,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 665,
              "end": 666,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 670,
              "end": 671,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          },
          "right": {
            "type": "CallExpression",
            "start": 675,
            "end": 678,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 675,
              "end": 676,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 682,
          "end": 687,
          "decorators": [],
          "name": "isFoo",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 716,
      "end": 773,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 752,
        "end": 773,
        "body": []
      },
      "test": {
        "type": "LogicalExpression",
        "start": 720,
        "end": 750,
        "operator": "||",
        "left": {
          "type": "LogicalExpression",
          "start": 720,
          "end": 732,
          "operator": "||",
          "left": {
            "type": "LogicalExpression",
            "start": 720,
            "end": 727,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 720,
              "end": 721,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 725,
              "end": 727,
              "decorators": [],
              "name": "uy",
              "optional": false
            }
          },
          "right": {
            "type": "Identifier",
            "start": 731,
            "end": 732,
            "decorators": [],
            "name": "z",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 736,
          "end": 750,
          "decorators": [],
          "name": "isUndefinedFoo",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 775,
      "end": 828,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 803,
        "end": 828,
        "body": []
      },
      "test": {
        "type": "LogicalExpression",
        "start": 779,
        "end": 801,
        "operator": "||",
        "left": {
          "type": "LogicalExpression",
          "start": 779,
          "end": 792,
          "operator": "||",
          "left": {
            "type": "LogicalExpression",
            "start": 779,
            "end": 786,
            "operator": "||",
            "left": {
              "type": "Identifier",
              "start": 779,
              "end": 781,
              "decorators": [],
              "name": "ux",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 785,
              "end": 786,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          },
          "right": {
            "type": "Identifier",
            "start": 790,
            "end": 792,
            "decorators": [],
            "name": "uz",
            "optional": false
          }
        },
        "right": {
          "type": "Identifier",
          "start": 796,
          "end": 801,
          "decorators": [],
          "name": "isFoo",
          "optional": false
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 830,
      "end": 870,
      "alternate": null,
      "consequent": {
        "type": "BlockStatement",
        "start": 842,
        "end": 870,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 864,
            "end": 868,
            "expression": {
              "type": "CallExpression",
              "start": 864,
              "end": 867,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 864,
                "end": 865,
                "decorators": [],
                "name": "z",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "LogicalExpression",
        "start": 834,
        "end": 840,
        "operator": "&&",
        "left": {
          "type": "Identifier",
          "start": 834,
          "end": 835,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 839,
          "end": 840,
          "decorators": [],
          "name": "z",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
