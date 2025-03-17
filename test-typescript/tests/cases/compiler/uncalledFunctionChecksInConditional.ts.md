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
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 22,
        "name": "isFoo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 57,
        "name": "isBar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 84,
            "end": 127,
            "name": "isUndefinedFoo",
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
                    "typeParameters": null,
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 130,
      "end": 166,
      "test": {
        "type": "Identifier",
        "start": 134,
        "end": 139,
        "name": "isFoo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 141,
        "end": 166,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 168,
      "end": 220,
      "test": {
        "type": "LogicalExpression",
        "start": 172,
        "end": 186,
        "left": {
          "type": "Identifier",
          "start": 172,
          "end": 177,
          "name": "isFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "start": 181,
          "end": 186,
          "name": "isBar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 188,
        "end": 220,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 222,
      "end": 269,
      "test": {
        "type": "LogicalExpression",
        "start": 226,
        "end": 242,
        "left": {
          "type": "Identifier",
          "start": 226,
          "end": 231,
          "name": "isFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "||",
        "right": {
          "type": "CallExpression",
          "start": 235,
          "end": 242,
          "callee": {
            "type": "Identifier",
            "start": 235,
            "end": 240,
            "name": "isFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 244,
        "end": 269,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 271,
      "end": 321,
      "test": {
        "type": "LogicalExpression",
        "start": 275,
        "end": 300,
        "left": {
          "type": "Identifier",
          "start": 275,
          "end": 289,
          "name": "isUndefinedFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "||",
        "right": {
          "type": "CallExpression",
          "start": 293,
          "end": 300,
          "callee": {
            "type": "Identifier",
            "start": 293,
            "end": 298,
            "name": "isFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 302,
        "end": 321,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 323,
      "end": 364,
      "test": {
        "type": "LogicalExpression",
        "start": 327,
        "end": 343,
        "left": {
          "type": "Identifier",
          "start": 327,
          "end": 332,
          "name": "isFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "&&",
        "right": {
          "type": "CallExpression",
          "start": 336,
          "end": 343,
          "callee": {
            "type": "Identifier",
            "start": 336,
            "end": 341,
            "name": "isFoo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 345,
        "end": 364,
        "body": []
      },
      "alternate": null
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
          "id": {
            "type": "Identifier",
            "start": 380,
            "end": 390,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 381,
              "end": 390,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 383,
                "end": 390
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 429,
            "name": "ux",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 445,
            "end": 455,
            "name": "y",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 446,
              "end": 455,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 448,
                "end": 455
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 471,
            "end": 494,
            "name": "uy",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 496,
      "end": 526,
      "id": {
        "type": "Identifier",
        "start": 513,
        "end": 514,
        "name": "z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 541,
            "end": 572,
            "name": "uz",
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
                    "typeParameters": null,
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "IfStatement",
      "start": 575,
      "end": 616,
      "test": {
        "type": "LogicalExpression",
        "start": 579,
        "end": 589,
        "left": {
          "type": "Identifier",
          "start": 579,
          "end": 580,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "start": 584,
          "end": 589,
          "name": "isFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 591,
        "end": 616,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 618,
      "end": 659,
      "test": {
        "type": "LogicalExpression",
        "start": 622,
        "end": 632,
        "left": {
          "type": "Identifier",
          "start": 622,
          "end": 627,
          "name": "isFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "start": 631,
          "end": 632,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 634,
        "end": 659,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 661,
      "end": 714,
      "test": {
        "type": "LogicalExpression",
        "start": 665,
        "end": 687,
        "left": {
          "type": "LogicalExpression",
          "start": 665,
          "end": 678,
          "left": {
            "type": "LogicalExpression",
            "start": 665,
            "end": 671,
            "left": {
              "type": "Identifier",
              "start": 665,
              "end": 666,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 670,
              "end": 671,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "||",
          "right": {
            "type": "CallExpression",
            "start": 675,
            "end": 678,
            "callee": {
              "type": "Identifier",
              "start": 675,
              "end": 676,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          }
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "start": 682,
          "end": 687,
          "name": "isFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 689,
        "end": 714,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 716,
      "end": 773,
      "test": {
        "type": "LogicalExpression",
        "start": 720,
        "end": 750,
        "left": {
          "type": "LogicalExpression",
          "start": 720,
          "end": 732,
          "left": {
            "type": "LogicalExpression",
            "start": 720,
            "end": 727,
            "left": {
              "type": "Identifier",
              "start": 720,
              "end": 721,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 725,
              "end": 727,
              "name": "uy",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "||",
          "right": {
            "type": "Identifier",
            "start": 731,
            "end": 732,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "start": 736,
          "end": 750,
          "name": "isUndefinedFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 752,
        "end": 773,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 775,
      "end": 828,
      "test": {
        "type": "LogicalExpression",
        "start": 779,
        "end": 801,
        "left": {
          "type": "LogicalExpression",
          "start": 779,
          "end": 792,
          "left": {
            "type": "LogicalExpression",
            "start": 779,
            "end": 786,
            "left": {
              "type": "Identifier",
              "start": 779,
              "end": 781,
              "name": "ux",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "||",
            "right": {
              "type": "Identifier",
              "start": 785,
              "end": 786,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "operator": "||",
          "right": {
            "type": "Identifier",
            "start": 790,
            "end": 792,
            "name": "uz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "operator": "||",
        "right": {
          "type": "Identifier",
          "start": 796,
          "end": 801,
          "name": "isFoo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 803,
        "end": 828,
        "body": []
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 830,
      "end": 870,
      "test": {
        "type": "LogicalExpression",
        "start": 834,
        "end": 840,
        "left": {
          "type": "Identifier",
          "start": 834,
          "end": 835,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 839,
          "end": 840,
          "name": "z",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
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
              "callee": {
                "type": "Identifier",
                "start": 864,
                "end": 865,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
