__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "priv",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 72
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 4,
              "raw": "4",
              "start": 75,
              "end": 76
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 68,
            "end": 77
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prot",
              "optional": false,
              "typeAnnotation": null,
              "start": 138,
              "end": 142
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 145,
              "end": 146
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 138,
            "end": 147
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "pub",
              "optional": false,
              "typeAnnotation": null,
              "start": 205,
              "end": 208
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 211,
              "end": 212
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 205,
            "end": 213
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ack",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 244
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 256,
                        "end": 260
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "priv",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 261,
                        "end": 265
                      },
                      "optional": false,
                      "computed": false,
                      "start": 256,
                      "end": 265
                    },
                    "start": 249,
                    "end": 265
                  }
                ],
                "start": 247,
                "end": 267
              },
              "expression": false,
              "start": 244,
              "end": 267
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 237,
            "end": 267
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "ack",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 299
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 305
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 307,
                "end": 310
              },
              "expression": false,
              "start": 299,
              "end": 310
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 292,
            "end": 310
          }
        ],
        "start": 8,
        "end": 312
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 312
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 319,
        "end": 320
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 338
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 425,
                          "end": 429
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "priv2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 430,
                          "end": 435
                        },
                        "optional": false,
                        "computed": false,
                        "start": 425,
                        "end": 435
                      },
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 438,
                        "end": 439
                      },
                      "start": 425,
                      "end": 439
                    },
                    "directive": null,
                    "start": 425,
                    "end": 440
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 525,
                          "end": 529
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "prot2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 530,
                          "end": 535
                        },
                        "optional": false,
                        "computed": false,
                        "start": 525,
                        "end": 535
                      },
                      "right": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 538,
                        "end": 539
                      },
                      "start": 525,
                      "end": 539
                    },
                    "directive": null,
                    "start": 525,
                    "end": 540
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 622,
                          "end": 626
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pub2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 627,
                          "end": 631
                        },
                        "optional": false,
                        "computed": false,
                        "start": 622,
                        "end": 631
                      },
                      "right": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 634,
                        "end": 635
                      },
                      "start": 622,
                      "end": 635
                    },
                    "directive": null,
                    "start": 622,
                    "end": 636
                  }
                ],
                "start": 341,
                "end": 642
              },
              "expression": false,
              "start": 338,
              "end": 642
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 327,
            "end": 642
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "h",
              "optional": false,
              "typeAnnotation": null,
              "start": 647,
              "end": 648
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 660,
                        "end": 664
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "priv2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 665,
                        "end": 670
                      },
                      "optional": false,
                      "computed": false,
                      "start": 660,
                      "end": 670
                    },
                    "start": 653,
                    "end": 670
                  }
                ],
                "start": 651,
                "end": 672
              },
              "expression": false,
              "start": 648,
              "end": 672
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 647,
            "end": 672
          }
        ],
        "start": 321,
        "end": 674
      },
      "abstract": false,
      "declare": false,
      "start": 313,
      "end": 674
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 681,
        "end": 682
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 691,
        "end": 692
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 700
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 713,
                            "end": 717
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "priv",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 718,
                            "end": 722
                          },
                          "optional": false,
                          "computed": false,
                          "start": 713,
                          "end": 722
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 725,
                            "end": 729
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prot",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 730,
                            "end": 734
                          },
                          "optional": false,
                          "computed": false,
                          "start": 725,
                          "end": 734
                        },
                        "start": 713,
                        "end": 734
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 737,
                          "end": 741
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pub",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 742,
                          "end": 745
                        },
                        "optional": false,
                        "computed": false,
                        "start": 737,
                        "end": 745
                      },
                      "start": 713,
                      "end": 745
                    },
                    "directive": null,
                    "start": 713,
                    "end": 745
                  }
                ],
                "start": 703,
                "end": 751
              },
              "expression": false,
              "start": 700,
              "end": 751
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 699,
            "end": 751
          }
        ],
        "start": 693,
        "end": 753
      },
      "abstract": false,
      "declare": false,
      "start": 675,
      "end": 753
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 760,
        "end": 761
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 770,
        "end": 771
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 778,
              "end": 779
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 792,
                            "end": 796
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "priv2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 797,
                            "end": 802
                          },
                          "optional": false,
                          "computed": false,
                          "start": 792,
                          "end": 802
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 805,
                            "end": 809
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "prot2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 810,
                            "end": 815
                          },
                          "optional": false,
                          "computed": false,
                          "start": 805,
                          "end": 815
                        },
                        "start": 792,
                        "end": 815
                      },
                      "operator": "+",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 818,
                          "end": 822
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "pub2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 823,
                          "end": 827
                        },
                        "optional": false,
                        "computed": false,
                        "start": 818,
                        "end": 827
                      },
                      "start": 792,
                      "end": 827
                    },
                    "directive": null,
                    "start": 792,
                    "end": 827
                  }
                ],
                "start": 782,
                "end": 833
              },
              "expression": false,
              "start": 779,
              "end": 833
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 778,
            "end": 833
          }
        ],
        "start": 772,
        "end": 835
      },
      "abstract": false,
      "declare": false,
      "start": 754,
      "end": 835
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 840,
                "end": 841
              },
              "typeArguments": null,
              "arguments": [],
              "start": 836,
              "end": 843
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "priv",
              "optional": false,
              "typeAnnotation": null,
              "start": 844,
              "end": 848
            },
            "optional": false,
            "computed": false,
            "start": 836,
            "end": 848
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 855,
                "end": 856
              },
              "typeArguments": null,
              "arguments": [],
              "start": 851,
              "end": 858
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prot",
              "optional": false,
              "typeAnnotation": null,
              "start": 859,
              "end": 863
            },
            "optional": false,
            "computed": false,
            "start": 851,
            "end": 863
          },
          "start": 836,
          "end": 863
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 870,
              "end": 871
            },
            "typeArguments": null,
            "arguments": [],
            "start": 866,
            "end": 873
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "pub",
            "optional": false,
            "typeAnnotation": null,
            "start": 874,
            "end": 877
          },
          "optional": false,
          "computed": false,
          "start": 866,
          "end": 877
        },
        "start": 836,
        "end": 877
      },
      "directive": null,
      "start": 836,
      "end": 877
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 882,
                "end": 883
              },
              "typeArguments": null,
              "arguments": [],
              "start": 878,
              "end": 885
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "priv",
              "optional": false,
              "typeAnnotation": null,
              "start": 886,
              "end": 890
            },
            "optional": false,
            "computed": false,
            "start": 878,
            "end": 890
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 897,
                "end": 898
              },
              "typeArguments": null,
              "arguments": [],
              "start": 893,
              "end": 900
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prot",
              "optional": false,
              "typeAnnotation": null,
              "start": 901,
              "end": 905
            },
            "optional": false,
            "computed": false,
            "start": 893,
            "end": 905
          },
          "start": 878,
          "end": 905
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 912,
              "end": 913
            },
            "typeArguments": null,
            "arguments": [],
            "start": 908,
            "end": 915
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "pub",
            "optional": false,
            "typeAnnotation": null,
            "start": 916,
            "end": 919
          },
          "optional": false,
          "computed": false,
          "start": 908,
          "end": 919
        },
        "start": 878,
        "end": 919
      },
      "directive": null,
      "start": 878,
      "end": 919
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 924,
                "end": 925
              },
              "typeArguments": null,
              "arguments": [],
              "start": 920,
              "end": 927
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "priv2",
              "optional": false,
              "typeAnnotation": null,
              "start": 928,
              "end": 933
            },
            "optional": false,
            "computed": false,
            "start": 920,
            "end": 933
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 940,
                "end": 941
              },
              "typeArguments": null,
              "arguments": [],
              "start": 936,
              "end": 943
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prot2",
              "optional": false,
              "typeAnnotation": null,
              "start": 944,
              "end": 949
            },
            "optional": false,
            "computed": false,
            "start": 936,
            "end": 949
          },
          "start": 920,
          "end": 949
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 956,
              "end": 957
            },
            "typeArguments": null,
            "arguments": [],
            "start": 952,
            "end": 959
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "pub2",
            "optional": false,
            "typeAnnotation": null,
            "start": 960,
            "end": 964
          },
          "optional": false,
          "computed": false,
          "start": 952,
          "end": 964
        },
        "start": 920,
        "end": 964
      },
      "directive": null,
      "start": 920,
      "end": 964
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "BinaryExpression",
        "left": {
          "type": "BinaryExpression",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 969,
                "end": 970
              },
              "typeArguments": null,
              "arguments": [],
              "start": 965,
              "end": 972
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "priv2",
              "optional": false,
              "typeAnnotation": null,
              "start": 973,
              "end": 978
            },
            "optional": false,
            "computed": false,
            "start": 965,
            "end": 978
          },
          "operator": "+",
          "right": {
            "type": "MemberExpression",
            "object": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 985,
                "end": 986
              },
              "typeArguments": null,
              "arguments": [],
              "start": 981,
              "end": 988
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prot2",
              "optional": false,
              "typeAnnotation": null,
              "start": 989,
              "end": 994
            },
            "optional": false,
            "computed": false,
            "start": 981,
            "end": 994
          },
          "start": 965,
          "end": 994
        },
        "operator": "+",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1001,
              "end": 1002
            },
            "typeArguments": null,
            "arguments": [],
            "start": 997,
            "end": 1004
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "pub2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1005,
            "end": 1009
          },
          "optional": false,
          "computed": false,
          "start": 997,
          "end": 1009
        },
        "start": 965,
        "end": 1009
      },
      "directive": null,
      "start": 965,
      "end": 1009
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1009
}
```
