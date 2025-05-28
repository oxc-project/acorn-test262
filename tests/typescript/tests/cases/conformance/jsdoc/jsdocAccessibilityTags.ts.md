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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 312,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 68,
            "end": 77,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 68,
              "end": 72,
              "decorators": [],
              "name": "priv",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 75,
              "end": 76,
              "value": 4,
              "raw": "4"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 138,
            "end": 147,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 142,
              "decorators": [],
              "name": "prot",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 145,
              "end": 146,
              "value": 5,
              "raw": "5"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 205,
            "end": 213,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 205,
              "end": 208,
              "decorators": [],
              "name": "pub",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 211,
              "end": 212,
              "value": 6,
              "raw": "6"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 237,
            "end": 267,
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
            "value": {
              "type": "FunctionExpression",
              "start": 244,
              "end": 267,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 256,
                        "end": 260
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 261,
                        "end": 265,
                        "decorators": [],
                        "name": "priv",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 292,
            "end": 310,
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
            "value": {
              "type": "FunctionExpression",
              "start": 299,
              "end": 310,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              "body": {
                "type": "BlockStatement",
                "start": 307,
                "end": 310,
                "body": []
              },
              "expression": false
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 313,
      "end": 674,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 321,
        "end": 674,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 327,
            "end": 642,
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
            "value": {
              "type": "FunctionExpression",
              "start": 338,
              "end": 642,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 341,
                "end": 642,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 425,
                    "end": 440,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 425,
                      "end": 439,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 425,
                        "end": 435,
                        "object": {
                          "type": "ThisExpression",
                          "start": 425,
                          "end": 429
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 430,
                          "end": 435,
                          "decorators": [],
                          "name": "priv2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 438,
                        "end": 439,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 525,
                    "end": 540,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 525,
                      "end": 539,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 525,
                        "end": 535,
                        "object": {
                          "type": "ThisExpression",
                          "start": 525,
                          "end": 529
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 530,
                          "end": 535,
                          "decorators": [],
                          "name": "prot2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 538,
                        "end": 539,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 622,
                    "end": 636,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 622,
                      "end": 635,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 622,
                        "end": 631,
                        "object": {
                          "type": "ThisExpression",
                          "start": 622,
                          "end": 626
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 627,
                          "end": 631,
                          "decorators": [],
                          "name": "pub2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 634,
                        "end": 635,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 647,
            "end": 672,
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
            "value": {
              "type": "FunctionExpression",
              "start": 648,
              "end": 672,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 660,
                        "end": 664
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 665,
                        "end": 670,
                        "decorators": [],
                        "name": "priv2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 675,
      "end": 753,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 693,
        "end": 753,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 699,
            "end": 751,
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
            "value": {
              "type": "FunctionExpression",
              "start": 700,
              "end": 751,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 703,
                "end": 751,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 713,
                    "end": 745,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 713,
                      "end": 745,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 713,
                        "end": 734,
                        "left": {
                          "type": "MemberExpression",
                          "start": 713,
                          "end": 722,
                          "object": {
                            "type": "ThisExpression",
                            "start": 713,
                            "end": 717
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 718,
                            "end": 722,
                            "decorators": [],
                            "name": "priv",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "start": 725,
                          "end": 734,
                          "object": {
                            "type": "ThisExpression",
                            "start": 725,
                            "end": 729
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 730,
                            "end": 734,
                            "decorators": [],
                            "name": "prot",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "start": 737,
                        "end": 745,
                        "object": {
                          "type": "ThisExpression",
                          "start": 737,
                          "end": 741
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 742,
                          "end": 745,
                          "decorators": [],
                          "name": "pub",
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
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 754,
      "end": 835,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 772,
        "end": 835,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 778,
            "end": 833,
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
            "value": {
              "type": "FunctionExpression",
              "start": 779,
              "end": 833,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 782,
                "end": 833,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 792,
                    "end": 827,
                    "expression": {
                      "type": "BinaryExpression",
                      "start": 792,
                      "end": 827,
                      "left": {
                        "type": "BinaryExpression",
                        "start": 792,
                        "end": 815,
                        "left": {
                          "type": "MemberExpression",
                          "start": 792,
                          "end": 802,
                          "object": {
                            "type": "ThisExpression",
                            "start": 792,
                            "end": 796
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 797,
                            "end": 802,
                            "decorators": [],
                            "name": "priv2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "start": 805,
                          "end": 815,
                          "object": {
                            "type": "ThisExpression",
                            "start": 805,
                            "end": 809
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 810,
                            "end": 815,
                            "decorators": [],
                            "name": "prot2",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "start": 818,
                        "end": 827,
                        "object": {
                          "type": "ThisExpression",
                          "start": 818,
                          "end": 822
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 823,
                          "end": 827,
                          "decorators": [],
                          "name": "pub2",
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
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 836,
      "end": 877,
      "expression": {
        "type": "BinaryExpression",
        "start": 836,
        "end": 877,
        "left": {
          "type": "BinaryExpression",
          "start": 836,
          "end": 863,
          "left": {
            "type": "MemberExpression",
            "start": 836,
            "end": 848,
            "object": {
              "type": "NewExpression",
              "start": 836,
              "end": 843,
              "callee": {
                "type": "Identifier",
                "start": 840,
                "end": 841,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "property": {
              "type": "Identifier",
              "start": 844,
              "end": 848,
              "decorators": [],
              "name": "priv",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "start": 851,
            "end": 863,
            "object": {
              "type": "NewExpression",
              "start": 851,
              "end": 858,
              "callee": {
                "type": "Identifier",
                "start": 855,
                "end": 856,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "property": {
              "type": "Identifier",
              "start": 859,
              "end": 863,
              "decorators": [],
              "name": "prot",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "start": 866,
          "end": 877,
          "object": {
            "type": "NewExpression",
            "start": 866,
            "end": 873,
            "callee": {
              "type": "Identifier",
              "start": 870,
              "end": 871,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 874,
            "end": 877,
            "decorators": [],
            "name": "pub",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 878,
      "end": 919,
      "expression": {
        "type": "BinaryExpression",
        "start": 878,
        "end": 919,
        "left": {
          "type": "BinaryExpression",
          "start": 878,
          "end": 905,
          "left": {
            "type": "MemberExpression",
            "start": 878,
            "end": 890,
            "object": {
              "type": "NewExpression",
              "start": 878,
              "end": 885,
              "callee": {
                "type": "Identifier",
                "start": 882,
                "end": 883,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "property": {
              "type": "Identifier",
              "start": 886,
              "end": 890,
              "decorators": [],
              "name": "priv",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "start": 893,
            "end": 905,
            "object": {
              "type": "NewExpression",
              "start": 893,
              "end": 900,
              "callee": {
                "type": "Identifier",
                "start": 897,
                "end": 898,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "property": {
              "type": "Identifier",
              "start": 901,
              "end": 905,
              "decorators": [],
              "name": "prot",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "start": 908,
          "end": 919,
          "object": {
            "type": "NewExpression",
            "start": 908,
            "end": 915,
            "callee": {
              "type": "Identifier",
              "start": 912,
              "end": 913,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 916,
            "end": 919,
            "decorators": [],
            "name": "pub",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 920,
      "end": 964,
      "expression": {
        "type": "BinaryExpression",
        "start": 920,
        "end": 964,
        "left": {
          "type": "BinaryExpression",
          "start": 920,
          "end": 949,
          "left": {
            "type": "MemberExpression",
            "start": 920,
            "end": 933,
            "object": {
              "type": "NewExpression",
              "start": 920,
              "end": 927,
              "callee": {
                "type": "Identifier",
                "start": 924,
                "end": 925,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "property": {
              "type": "Identifier",
              "start": 928,
              "end": 933,
              "decorators": [],
              "name": "priv2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "start": 936,
            "end": 949,
            "object": {
              "type": "NewExpression",
              "start": 936,
              "end": 943,
              "callee": {
                "type": "Identifier",
                "start": 940,
                "end": 941,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "property": {
              "type": "Identifier",
              "start": 944,
              "end": 949,
              "decorators": [],
              "name": "prot2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "start": 952,
          "end": 964,
          "object": {
            "type": "NewExpression",
            "start": 952,
            "end": 959,
            "callee": {
              "type": "Identifier",
              "start": 956,
              "end": 957,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 960,
            "end": 964,
            "decorators": [],
            "name": "pub2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 965,
      "end": 1009,
      "expression": {
        "type": "BinaryExpression",
        "start": 965,
        "end": 1009,
        "left": {
          "type": "BinaryExpression",
          "start": 965,
          "end": 994,
          "left": {
            "type": "MemberExpression",
            "start": 965,
            "end": 978,
            "object": {
              "type": "NewExpression",
              "start": 965,
              "end": 972,
              "callee": {
                "type": "Identifier",
                "start": 969,
                "end": 970,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "property": {
              "type": "Identifier",
              "start": 973,
              "end": 978,
              "decorators": [],
              "name": "priv2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "start": 981,
            "end": 994,
            "object": {
              "type": "NewExpression",
              "start": 981,
              "end": 988,
              "callee": {
                "type": "Identifier",
                "start": 985,
                "end": 986,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": []
            },
            "property": {
              "type": "Identifier",
              "start": 989,
              "end": 994,
              "decorators": [],
              "name": "prot2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          }
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "start": 997,
          "end": 1009,
          "object": {
            "type": "NewExpression",
            "start": 997,
            "end": 1004,
            "callee": {
              "type": "Identifier",
              "start": 1001,
              "end": 1002,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "property": {
            "type": "Identifier",
            "start": 1005,
            "end": 1009,
            "decorators": [],
            "name": "pub2",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
