__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1311,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 75,
      "body": {
        "type": "TSInterfaceBody",
        "start": 14,
        "end": 75,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 39,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": true,
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
          },
          {
            "type": "TSIndexSignature",
            "start": 44,
            "end": 73,
            "parameters": [
              {
                "type": "Identifier",
                "start": 54,
                "end": 63,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 55,
                  "end": 63,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 57,
                    "end": 63
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 72,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 66,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 72,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 13,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 77,
      "end": 1000,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 85,
        "end": 1000,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 91,
            "end": 120,
            "parameters": [
              {
                "type": "Identifier",
                "start": 101,
                "end": 110,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 102,
                  "end": 110,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 104,
                    "end": 110
                  }
                }
              }
            ],
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 119,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 113,
                "end": 119,
                "typeName": {
                  "type": "Identifier",
                  "start": 113,
                  "end": 119,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 125,
            "end": 153,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 142,
              "end": 144,
              "decorators": [],
              "name": "a1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 152,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 146,
                "end": 152
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 158,
            "end": 188,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 179,
              "decorators": [],
              "name": "a2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 187,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 181,
                "end": 187
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 193,
            "end": 220,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 211,
              "decorators": [],
              "name": "a3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 211,
              "end": 219,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 213,
                "end": 219
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 225,
            "end": 254,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 237,
              "end": 239,
              "decorators": [],
              "name": "b1",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 239,
              "end": 254,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 242,
                "end": 254,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 244,
                    "end": 252,
                    "argument": {
                      "type": "Literal",
                      "start": 251,
                      "end": 252,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 259,
            "end": 290,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 273,
              "end": 275,
              "decorators": [],
              "name": "b2",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 275,
              "end": 290,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 278,
                "end": 290,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 280,
                    "end": 288,
                    "argument": {
                      "type": "Literal",
                      "start": 287,
                      "end": 288,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 295,
            "end": 323,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 306,
              "end": 308,
              "decorators": [],
              "name": "b3",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 308,
              "end": 323,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 311,
                "end": 323,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 313,
                    "end": 321,
                    "argument": {
                      "type": "Literal",
                      "start": 320,
                      "end": 321,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 328,
            "end": 357,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 340,
              "end": 342,
              "decorators": [],
              "name": "c1",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 342,
              "end": 357,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 345,
                "end": 357,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 347,
                    "end": 355,
                    "argument": {
                      "type": "Literal",
                      "start": 354,
                      "end": 355,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 362,
            "end": 387,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 374,
              "end": 376,
              "decorators": [],
              "name": "c1",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 376,
              "end": 387,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 384,
                "end": 387,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 377,
                  "end": 382,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 392,
            "end": 423,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 406,
              "end": 408,
              "decorators": [],
              "name": "c2",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 408,
              "end": 423,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 411,
                "end": 423,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 413,
                    "end": 421,
                    "argument": {
                      "type": "Literal",
                      "start": 420,
                      "end": 421,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 428,
            "end": 455,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 442,
              "end": 444,
              "decorators": [],
              "name": "c2",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 444,
              "end": 455,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 452,
                "end": 455,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 445,
                  "end": 450,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 460,
            "end": 488,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 471,
              "end": 473,
              "decorators": [],
              "name": "c3",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 473,
              "end": 488,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 476,
                "end": 488,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 478,
                    "end": 486,
                    "argument": {
                      "type": "Literal",
                      "start": 485,
                      "end": 486,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 493,
            "end": 517,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 504,
              "end": 506,
              "decorators": [],
              "name": "c3",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 506,
              "end": 517,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 514,
                "end": 517,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 507,
                  "end": 512,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 522,
            "end": 557,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 546,
              "end": 548,
              "decorators": [],
              "name": "s1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 548,
              "end": 556,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 550,
                "end": 556
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 562,
            "end": 599,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 588,
              "end": 590,
              "decorators": [],
              "name": "s2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 590,
              "end": 598,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 592,
                "end": 598
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 604,
            "end": 638,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 627,
              "end": 629,
              "decorators": [],
              "name": "s3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 629,
              "end": 637,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 631,
                "end": 637
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 643,
            "end": 679,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 662,
              "end": 664,
              "decorators": [],
              "name": "t1",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 664,
              "end": 679,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 667,
                "end": 679,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 669,
                    "end": 677,
                    "argument": {
                      "type": "Literal",
                      "start": 676,
                      "end": 677,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 684,
            "end": 722,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 705,
              "end": 707,
              "decorators": [],
              "name": "t2",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 707,
              "end": 722,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 710,
                "end": 722,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 712,
                    "end": 720,
                    "argument": {
                      "type": "Literal",
                      "start": 719,
                      "end": 720,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 727,
            "end": 762,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 745,
              "end": 747,
              "decorators": [],
              "name": "t3",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 747,
              "end": 762,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 750,
                "end": 762,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 752,
                    "end": 760,
                    "argument": {
                      "type": "Literal",
                      "start": 759,
                      "end": 760,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 767,
            "end": 803,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 786,
              "end": 788,
              "decorators": [],
              "name": "u1",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 788,
              "end": 803,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 791,
                "end": 803,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 793,
                    "end": 801,
                    "argument": {
                      "type": "Literal",
                      "start": 800,
                      "end": 801,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 808,
            "end": 840,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 827,
              "end": 829,
              "decorators": [],
              "name": "u1",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 829,
              "end": 840,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 837,
                "end": 840,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 830,
                  "end": 835,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 845,
            "end": 883,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 866,
              "end": 868,
              "decorators": [],
              "name": "u2",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 868,
              "end": 883,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 871,
                "end": 883,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 873,
                    "end": 881,
                    "argument": {
                      "type": "Literal",
                      "start": 880,
                      "end": 881,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 888,
            "end": 922,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 909,
              "end": 911,
              "decorators": [],
              "name": "u2",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 911,
              "end": 922,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 919,
                "end": 922,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 912,
                  "end": 917,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 927,
            "end": 962,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 945,
              "end": 947,
              "decorators": [],
              "name": "u3",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 947,
              "end": 962,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 950,
                "end": 962,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 952,
                    "end": 960,
                    "argument": {
                      "type": "Literal",
                      "start": 959,
                      "end": 960,
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 967,
            "end": 998,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 985,
              "end": 987,
              "decorators": [],
              "name": "u3",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 987,
              "end": 998,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 995,
                "end": 998,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 988,
                  "end": 993,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 84,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1002,
      "end": 1070,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1006,
          "end": 1070,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1006,
            "end": 1070,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1007,
              "end": 1070,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1009,
                "end": 1070,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1015,
                    "end": 1034,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1024,
                      "end": 1025,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": true,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1025,
                      "end": 1033,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1027,
                        "end": 1033
                      }
                    }
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 1039,
                    "end": 1068,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1049,
                        "end": 1058,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1050,
                          "end": 1058,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1052,
                            "end": 1058
                          }
                        }
                      }
                    ],
                    "readonly": true,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1059,
                      "end": 1067,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1061,
                        "end": 1067,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1061,
                          "end": 1067,
                          "decorators": [],
                          "name": "Object",
                          "optional": false
                        }
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
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1072,
      "end": 1194,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1085,
        "end": 1194,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1091,
            "end": 1192,
            "argument": {
              "type": "ObjectExpression",
              "start": 1098,
              "end": 1192,
              "properties": [
                {
                  "type": "Property",
                  "start": 1108,
                  "end": 1129,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1112,
                    "end": 1113,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1113,
                    "end": 1129,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1116,
                      "end": 1129,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1118,
                          "end": 1127,
                          "argument": {
                            "type": "Literal",
                            "start": 1125,
                            "end": 1126,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 1139,
                  "end": 1160,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1143,
                    "end": 1144,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "kind": "get",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1144,
                    "end": 1160,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1147,
                      "end": 1160,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 1149,
                          "end": 1158,
                          "argument": {
                            "type": "Literal",
                            "start": 1156,
                            "end": 1157,
                            "raw": "1",
                            "value": 1
                          }
                        }
                      ]
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": []
                  }
                },
                {
                  "type": "Property",
                  "start": 1170,
                  "end": 1186,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 1174,
                    "end": 1175,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "kind": "set",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "FunctionExpression",
                    "start": 1175,
                    "end": 1186,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 1183,
                      "end": 1186,
                      "body": []
                    },
                    "declare": false,
                    "expression": false,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 1176,
                        "end": 1181,
                        "decorators": [],
                        "name": "value",
                        "optional": false
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
        "start": 1081,
        "end": 1082,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 1196,
      "end": 1311,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1209,
        "end": 1311,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1215,
            "end": 1295,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1219,
                "end": 1295,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1219,
                  "end": 1295,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1220,
                    "end": 1295,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 1222,
                      "end": 1295,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 1232,
                          "end": 1251,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1241,
                            "end": 1242,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": true,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1242,
                            "end": 1250,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1244,
                              "end": 1250
                            }
                          }
                        },
                        {
                          "type": "TSIndexSignature",
                          "start": 1260,
                          "end": 1289,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 1270,
                              "end": 1279,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 1271,
                                "end": 1279,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1273,
                                  "end": 1279
                                }
                              }
                            }
                          ],
                          "readonly": true,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1280,
                            "end": 1288,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1282,
                              "end": 1288,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1282,
                                "end": 1288,
                                "decorators": [],
                                "name": "Object",
                                "optional": false
                              }
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
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ReturnStatement",
            "start": 1300,
            "end": 1309,
            "argument": {
              "type": "Identifier",
              "start": 1307,
              "end": 1308,
              "decorators": [],
              "name": "x",
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
        "start": 1205,
        "end": 1206,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
