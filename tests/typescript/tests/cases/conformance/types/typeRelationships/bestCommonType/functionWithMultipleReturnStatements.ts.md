__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 155,
  "end": 868,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 155,
      "end": 244,
      "id": {
        "type": "Identifier",
        "start": 164,
        "end": 166,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 169,
        "end": 244,
        "body": [
          {
            "type": "IfStatement",
            "start": 175,
            "end": 242,
            "test": {
              "type": "Literal",
              "start": 179,
              "end": 183,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 185,
              "end": 210,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 195,
                  "end": 204,
                  "argument": {
                    "type": "Literal",
                    "start": 202,
                    "end": 203,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 216,
              "end": 242,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 226,
                  "end": 236,
                  "argument": {
                    "type": "Literal",
                    "start": 233,
                    "end": 235,
                    "value": "",
                    "raw": "''"
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 246,
      "end": 377,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 257,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 260,
        "end": 377,
        "body": [
          {
            "type": "IfStatement",
            "start": 266,
            "end": 375,
            "test": {
              "type": "Literal",
              "start": 270,
              "end": 274,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 276,
              "end": 301,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 286,
                  "end": 295,
                  "argument": {
                    "type": "Literal",
                    "start": 293,
                    "end": 294,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 307,
              "end": 375,
              "test": {
                "type": "Literal",
                "start": 311,
                "end": 316,
                "value": false,
                "raw": "false"
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 318,
                "end": 343,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 328,
                    "end": 337,
                    "argument": {
                      "type": "Literal",
                      "start": 335,
                      "end": 336,
                      "value": 2,
                      "raw": "2"
                    }
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 349,
                "end": 375,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 359,
                    "end": 369,
                    "argument": {
                      "type": "Literal",
                      "start": 366,
                      "end": 368,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 379,
      "end": 471,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 390,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 393,
        "end": 471,
        "body": [
          {
            "type": "TryStatement",
            "start": 399,
            "end": 469,
            "block": {
              "type": "BlockStatement",
              "start": 403,
              "end": 428,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 413,
                  "end": 422,
                  "argument": {
                    "type": "Literal",
                    "start": 420,
                    "end": 421,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 433,
              "end": 469,
              "param": {
                "type": "Identifier",
                "start": 440,
                "end": 441,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 443,
                "end": 469,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 453,
                    "end": 463,
                    "argument": {
                      "type": "Literal",
                      "start": 460,
                      "end": 462,
                      "value": "",
                      "raw": "''"
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 473,
      "end": 586,
      "id": {
        "type": "Identifier",
        "start": 482,
        "end": 484,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 487,
        "end": 586,
        "body": [
          {
            "type": "TryStatement",
            "start": 493,
            "end": 584,
            "block": {
              "type": "BlockStatement",
              "start": 497,
              "end": 522,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 507,
                  "end": 516,
                  "argument": {
                    "type": "Literal",
                    "start": 514,
                    "end": 515,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 527,
              "end": 545,
              "param": {
                "type": "Identifier",
                "start": 534,
                "end": 535,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 537,
                "end": 545,
                "body": []
              }
            },
            "finalizer": {
              "type": "BlockStatement",
              "start": 558,
              "end": 584,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 568,
                  "end": 578,
                  "argument": {
                    "type": "Literal",
                    "start": 575,
                    "end": 577,
                    "value": "",
                    "raw": "''"
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 588,
      "end": 634,
      "id": {
        "type": "Identifier",
        "start": 597,
        "end": 599,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 602,
        "end": 634,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 608,
            "end": 617,
            "argument": {
              "type": "Literal",
              "start": 615,
              "end": 616,
              "value": 1,
              "raw": "1"
            }
          },
          {
            "type": "ReturnStatement",
            "start": 622,
            "end": 632,
            "argument": {
              "type": "Literal",
              "start": 629,
              "end": 631,
              "value": "",
              "raw": "''"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 636,
      "end": 739,
      "id": {
        "type": "Identifier",
        "start": 645,
        "end": 647,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 647,
        "end": 653,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 648,
            "end": 649,
            "name": {
              "type": "Identifier",
              "start": 648,
              "end": 649,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 651,
            "end": 652,
            "name": {
              "type": "Identifier",
              "start": 651,
              "end": 652,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 654,
          "end": 658,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 655,
            "end": 658,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 657,
              "end": 658,
              "typeName": {
                "type": "Identifier",
                "start": 657,
                "end": 658,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 660,
          "end": 663,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 661,
            "end": 663,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 662,
              "end": 663,
              "typeName": {
                "type": "Identifier",
                "start": 662,
                "end": 663,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 665,
        "end": 739,
        "body": [
          {
            "type": "IfStatement",
            "start": 671,
            "end": 737,
            "test": {
              "type": "Literal",
              "start": 675,
              "end": 679,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 681,
              "end": 706,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 691,
                  "end": 700,
                  "argument": {
                    "type": "Identifier",
                    "start": 698,
                    "end": 699,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 712,
              "end": 737,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 722,
                  "end": 731,
                  "argument": {
                    "type": "Identifier",
                    "start": 729,
                    "end": 730,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 741,
      "end": 868,
      "id": {
        "type": "Identifier",
        "start": 750,
        "end": 752,
        "decorators": [],
        "name": "f8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 752,
        "end": 781,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 753,
            "end": 764,
            "name": {
              "type": "Identifier",
              "start": 753,
              "end": 754,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 763,
              "end": 764,
              "typeName": {
                "type": "Identifier",
                "start": 763,
                "end": 764,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 766,
            "end": 777,
            "name": {
              "type": "Identifier",
              "start": 766,
              "end": 767,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 776,
              "end": 777,
              "typeName": {
                "type": "Identifier",
                "start": 776,
                "end": 777,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 779,
            "end": 780,
            "name": {
              "type": "Identifier",
              "start": 779,
              "end": 780,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 782,
          "end": 786,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 783,
            "end": 786,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 785,
              "end": 786,
              "typeName": {
                "type": "Identifier",
                "start": 785,
                "end": 786,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 788,
          "end": 792,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 789,
            "end": 792,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 791,
              "end": 792,
              "typeName": {
                "type": "Identifier",
                "start": 791,
                "end": 792,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 794,
        "end": 868,
        "body": [
          {
            "type": "IfStatement",
            "start": 800,
            "end": 866,
            "test": {
              "type": "Literal",
              "start": 804,
              "end": 808,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 810,
              "end": 835,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 820,
                  "end": 829,
                  "argument": {
                    "type": "Identifier",
                    "start": 827,
                    "end": 828,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 841,
              "end": 866,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 851,
                  "end": 860,
                  "argument": {
                    "type": "Identifier",
                    "start": 858,
                    "end": 859,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
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
