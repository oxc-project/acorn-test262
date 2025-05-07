__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1009,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 312,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 312,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 68,
            "end": 77,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 72,
              "decorators": [],
              "name": "priv",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 75,
              "end": 76,
              "raw": "4",
              "value": 4,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 138,
            "end": 147,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 142,
              "decorators": [],
              "name": "prot",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 145,
              "end": 146,
              "raw": "5",
              "value": 5,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 205,
            "end": 213,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 205,
              "end": 208,
              "decorators": [],
              "name": "pub",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 211,
              "end": 212,
              "raw": "6",
              "value": 6,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 237,
            "end": 267,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 241,
              "end": 244,
              "decorators": [],
              "name": "ack",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 244,
              "end": 267,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 247,
                "end": 267,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 249,
                    "end": 265,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 256,
                      "end": 265,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 256,
                        "end": 260
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 261,
                        "end": 265,
                        "decorators": [],
                        "name": "priv",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 292,
            "end": 310,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 296,
              "end": 299,
              "decorators": [],
              "name": "ack",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 299,
              "end": 310,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 307,
                "end": 310,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 300,
                  "end": 305,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 313,
      "end": 674,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 321,
        "end": 674,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 327,
            "end": 642,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 327,
              "end": 338,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 338,
              "end": 642,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 341,
                "end": 642,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 425,
                    "end": 440,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 425,
                      "end": 439,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 425,
                        "end": 435,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 425,
                          "end": 429
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 430,
                          "end": 435,
                          "decorators": [],
                          "name": "priv2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 438,
                        "end": 439,
                        "raw": "1",
                        "value": 1,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 525,
                    "end": 540,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 525,
                      "end": 539,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 525,
                        "end": 535,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 525,
                          "end": 529
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 530,
                          "end": 535,
                          "decorators": [],
                          "name": "prot2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 538,
                        "end": 539,
                        "raw": "2",
                        "value": 2,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 622,
                    "end": 636,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 622,
                      "end": 635,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 622,
                        "end": 631,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 622,
                          "end": 626
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 627,
                          "end": 631,
                          "decorators": [],
                          "name": "pub2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 634,
                        "end": 635,
                        "raw": "3",
                        "value": 3,
                        "regex": null,
                        "bigint": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 647,
            "end": 672,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 648,
              "end": 672,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 651,
                "end": 672,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 653,
                    "end": 670,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 660,
                      "end": 670,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 660,
                        "end": 664
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 665,
                        "end": 670,
                        "decorators": [],
                        "name": "priv2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 319,
        "end": 320,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 675,
      "end": 753,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 693,
        "end": 753,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 699,
            "end": 751,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 699,
              "end": 700,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 700,
              "end": 751,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 703,
                "end": 751,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 713,
                    "end": 745,
                    "directive": null,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 713,
                      "end": 745,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 713,
                        "end": 734,
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "start": 713,
                          "end": 722,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 713,
                            "end": 717
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 718,
                            "end": 722,
                            "decorators": [],
                            "name": "priv",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 725,
                          "end": 734,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 725,
                            "end": 729
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 730,
                            "end": 734,
                            "decorators": [],
                            "name": "prot",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 737,
                        "end": 745,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 737,
                          "end": 741
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 742,
                          "end": 745,
                          "decorators": [],
                          "name": "pub",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 681,
        "end": 682,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 691,
        "end": 692,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 754,
      "end": 835,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 772,
        "end": 835,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 778,
            "end": 833,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 778,
              "end": 779,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 779,
              "end": 833,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 782,
                "end": 833,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 792,
                    "end": 827,
                    "directive": null,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 792,
                      "end": 827,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 792,
                        "end": 815,
                        "operator": "+",
                        "left": {
                          "type": "MemberExpression",
                          "start": 792,
                          "end": 802,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 792,
                            "end": 796
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 797,
                            "end": 802,
                            "decorators": [],
                            "name": "priv2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 805,
                          "end": 815,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 805,
                            "end": 809
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 810,
                            "end": 815,
                            "decorators": [],
                            "name": "prot2",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 818,
                        "end": 827,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 818,
                          "end": 822
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 823,
                          "end": 827,
                          "decorators": [],
                          "name": "pub2",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 760,
        "end": 761,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 770,
        "end": 771,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 836,
      "end": 877,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 836,
        "end": 877,
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "start": 836,
          "end": 863,
          "operator": "+",
          "left": {
            "type": "MemberExpression",
            "start": 836,
            "end": 848,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 836,
              "end": 843,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 840,
                "end": 841,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 844,
              "end": 848,
              "decorators": [],
              "name": "priv",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "MemberExpression",
            "start": 851,
            "end": 863,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 851,
              "end": 858,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 855,
                "end": 856,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 859,
              "end": 863,
              "decorators": [],
              "name": "prot",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 866,
          "end": 877,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 866,
            "end": 873,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 870,
              "end": 871,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 874,
            "end": 877,
            "decorators": [],
            "name": "pub",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 878,
      "end": 919,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 878,
        "end": 919,
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "start": 878,
          "end": 905,
          "operator": "+",
          "left": {
            "type": "MemberExpression",
            "start": 878,
            "end": 890,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 878,
              "end": 885,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 882,
                "end": 883,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 886,
              "end": 890,
              "decorators": [],
              "name": "priv",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "MemberExpression",
            "start": 893,
            "end": 905,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 893,
              "end": 900,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 897,
                "end": 898,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 901,
              "end": 905,
              "decorators": [],
              "name": "prot",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 908,
          "end": 919,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 908,
            "end": 915,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 912,
              "end": 913,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 916,
            "end": 919,
            "decorators": [],
            "name": "pub",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 920,
      "end": 964,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 920,
        "end": 964,
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "start": 920,
          "end": 949,
          "operator": "+",
          "left": {
            "type": "MemberExpression",
            "start": 920,
            "end": 933,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 920,
              "end": 927,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 924,
                "end": 925,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 928,
              "end": 933,
              "decorators": [],
              "name": "priv2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "MemberExpression",
            "start": 936,
            "end": 949,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 936,
              "end": 943,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 940,
                "end": 941,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 944,
              "end": 949,
              "decorators": [],
              "name": "prot2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 952,
          "end": 964,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 952,
            "end": 959,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 956,
              "end": 957,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 960,
            "end": 964,
            "decorators": [],
            "name": "pub2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 965,
      "end": 1009,
      "directive": null,
      "expression": {
        "type": "BinaryExpression",
        "start": 965,
        "end": 1009,
        "operator": "+",
        "left": {
          "type": "BinaryExpression",
          "start": 965,
          "end": 994,
          "operator": "+",
          "left": {
            "type": "MemberExpression",
            "start": 965,
            "end": 978,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 965,
              "end": 972,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 969,
                "end": 970,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 973,
              "end": 978,
              "decorators": [],
              "name": "priv2",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "MemberExpression",
            "start": 981,
            "end": 994,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 981,
              "end": 988,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 985,
                "end": 986,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 989,
              "end": 994,
              "decorators": [],
              "name": "prot2",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "right": {
          "type": "MemberExpression",
          "start": 997,
          "end": 1009,
          "computed": false,
          "object": {
            "type": "NewExpression",
            "start": 997,
            "end": 1004,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1001,
              "end": 1002,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1005,
            "end": 1009,
            "decorators": [],
            "name": "pub2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
